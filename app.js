var loggedin = false;
var date = new Date();
var api = 'http://ec2-75-101-220-225.compute-1.amazonaws.com:8080/'
//var api = 'http://localhost:8080/'

window.addEventListener('load', () => {
  checkLogin();
})

//check to see if user is already logged in
function checkLogin() {
  var classLogin = document.getElementById('titlebar-login');
  var classLogout = document.getElementById('titlebar-logout');
  var usernameLabel = document.getElementById('titlebar-logout-uname');

  //set usernameLabel to the username stored in cookies
  usernameLabel.innerHTML = (document.cookie.match(/^(?:.*;)?\s*username\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]

  //check to see if cookie username exists, if so hide login fields and show logout button
  if (document.cookie.match(/^(.*;)?\s*username\s*=\s*[^;]+(.*)?$/) == null) {
    classLogin.style.display = 'flex';
    classLogout.style.display = 'none';
  } else {
    //if not logged in show login class with username and password fields
    classLogout.style.display = 'flex';
    classLogin.style.display = 'none';
    updateActiveAlerts();
    alertList();
    getWfoLocs()
  }
}

//login
function login(username, password) {
  fetch(api + 'users/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: username, password: password})
  }).then(res => res.json())
    .then (res => {
      //save user details token,wfo,username to cookies
      const d = new Date();
      const exdays = 2;
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = `token=${res.token}; ${expires}`;
      document.cookie = `wfo=${res.wfo}; ${expires}`;
      document.cookie = `username=${username}; ${expires}`;
      checkLogin();
      updateActiveAlerts();
    })
}

//logout and delete all cookies
function logout() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = "wfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  checkLogin();
}

//refresh the list of updatable (active) alerts
function updateActiveAlerts() {
  //fetch alerts from wfo stored in cookies from api
  fetch(api + 'getAlerts/bySender/' + (document.cookie.match(/^(?:.*;)?\s*wfo\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1])
    .then(res => res.json())
    .then(res => {
      var updateSelect = document.getElementById('update');

      var i, L = updateSelect.options.length - 1;
      for(i = L; i >= 0; i--) {
         updateSelect.remove(i);
      }

      //for each document the api responds with, add it to alert update dropdown
      res.forEach(element => {
        var locsString = '[';

        //for all locations (objects) in locs array, add name and state to the locsString (string containing all counties effected by alert)
        for (i = 0; i < element.locs.length; i++) {
          if (i < element.locs.length - 1) {
            locsString = locsString + element.locs[i].county + ' ' + element.locs[i].state + ', ';
          } else {
            locsString = locsString + element.locs[i].county + ' ' + element.locs[i].state + ']';
          }
        }

        //add headline, locsString, and expire time to alert update list
        var updateOption = new Option(element.headline + " for " + locsString + ' til ' + element.expire, element._id);
        updateSelect.appendChild(updateOption);
      });
    });
}

//get list of wfo counties from api using wfo stored in cookies
function getWfoLocs() {
  fetch(api + 'wfos/' + (document.cookie.match(/^(?:.*;)?\s*wfo\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1], {
    headers: {
      'auth-token': (document.cookie.match(/^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
    }})
    .then(res => res.json())
    .then(res => {
      var locsSelect = document.getElementById('locs');
      var locsNoLoc = new Option("No Location", ',,');
      locsSelect.appendChild(locsNoLoc);
      res.locs.forEach(element => {
        var locsOption = new Option(element.county + ", " + element.state, element.fips + ',' + element.county + ',' + element.state);
        locsSelect.appendChild(locsOption);
      });
      //add a extra location of unspecified
      var anyLocsOption = new Option('Unspecified Location', '999999,Unspecified,Location');
      locsSelect.appendChild(anyLocsOption);
    });
}

//fill in all the fields to that of the selected alert to update
function selectAlertUpdate() {
  fetch(api + 'getAlerts/' + document.getElementById('update').value)
    .then(res => res.json())
    .then(res => {
      for (var i = 0; i < document.getElementById('event').length; i++) {
        if (document.getElementById('event').options[i].value == res.event) {
          document.getElementById('event').selectedIndex = i;
        }
      }

      var now = new Date(res.expire);
      now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      document.getElementById('expiredate').value = now.toISOString().substring(0,10);
      document.getElementById('expiretime').value = now.toISOString().substring(11,16);

      document.getElementById('headline').value = res.headline;
      document.getElementById('desc').value = res.desc;
    });
}

function sendAlert() {
  var sender = (document.cookie.match(/^(?:.*;)?\s*wfo\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
  var event = document.getElementById('event').value;
  var expireTime = document.getElementById('expiredate').valueAsNumber + document.getElementById('expiretime').valueAsNumber + (date.getTimezoneOffset() * 60000);
  var locs = [];
  var headline = document.getElementById('headline').value;
  var desc = document.getElementById('desc').value.replace(/National Weather Service/g, 'Severe Weather Information Center');

  for (var option of document.getElementById('locs').options) {
    var locsArray = [];
    if (option.selected) {
      locsArray.push(option.value);
    }
    for (i = 0; i < locsArray.length; i++) {
      var locsString = locsArray[i];
      var locsStringArray = locsString.split(',');
      var locsObject = {fips: locsStringArray[0], county: locsStringArray[1], state: locsStringArray[2]};
      locs.push(locsObject);
    }
  }

  fetch(api + 'alerts/issuealert', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'auth-token': (document.cookie.match(/^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
    },
    body: JSON.stringify({sender: sender, expire: expireTime, event: event, headline: headline, desc: desc, web: 'https://example.com', image: null, locs: locs})
  }).then (res => res.json())
    .then (res => {
      console.log(res.status);
      updateActiveAlerts();
    })
}

function sendMethod(method) {
  var sender = (document.cookie.match(/^(?:.*;)?\s*wfo\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
  var event = document.getElementById('event').value;
  var expireTime = document.getElementById('expiredate').valueAsNumber + document.getElementById('expiretime').valueAsNumber + (date.getTimezoneOffset() * 60000);
  var locs = [];
  var headline = document.getElementById('headline').value;
  var desc = document.getElementById('desc').value.replace(/National Weather Service/, 'Severe Weather Information Center');

  for (var option of document.getElementById('locs').options) {
    var locsArray = [];
    if (option.selected) {
      locsArray.push(option.value);
    }
    for (i = 0; i < locsArray.length; i++) {
      var locsString = locsArray[i];
      var locsStringArray = locsString.split(',');
      var locsObject = {fips: locsStringArray[0], county: locsStringArray[1], state: locsStringArray[2]};
      locs.push(locsObject);
    }
  }

  fetch(api + 'alerts/' + method + 'alert/' + document.getElementById('update').value, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'auth-token': (document.cookie.match(/^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
    },
    body: JSON.stringify({sender: sender, expire: expireTime, event: event, headline: headline, desc: desc, web: 'https://example.com', image: null, locs: locs})
  }).then (res => res.json())
    .then (res => {
      console.log(res.status);
      updateActiveAlerts();
    })
}
