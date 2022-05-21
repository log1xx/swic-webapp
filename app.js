var loggedin = false;
var date = new Date();
var api = 'http://ec2-75-101-220-225.compute-1.amazonaws.com:8080/'
//var api = 'http://localhost:8080/'

window.addEventListener('load', () => {
  checkLogin();
})

function checkLogin() {
  var classLogin = document.getElementById('titlebar-login');
  var classLogout = document.getElementById('titlebar-logout');
  var usernameLabel = document.getElementById('titlebar-logout-uname');

  usernameLabel.innerHTML = (document.cookie.match(/^(?:.*;)?\s*username\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]

  if (document.cookie.match(/^(.*;)?\s*username\s*=\s*[^;]+(.*)?$/) == null) {
    classLogin.style.display = 'flex';
    classLogout.style.display = 'none';
  } else {
    classLogout.style.display = 'flex';
    classLogin.style.display = 'none';
    updateActiveAlerts();
    alertList();
    getWfoLocs()
  }
}

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

function logout() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = "wfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  checkLogin();
}

function updateActiveAlerts() {
  fetch(api + 'getAlerts/bySender/' + (document.cookie.match(/^(?:.*;)?\s*wfo\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1])
    .then(res => res.json())
    .then(res => {
      var updateSelect = document.getElementById('update');

      var i, L = updateSelect.options.length - 1;
      for(i = L; i >= 0; i--) {
         updateSelect.remove(i);
      }

      res.forEach(element => {
        var updateOption = new Option(element.headline + " for " + element.locs, element._id);
        updateSelect.appendChild(updateOption);
      });
    });
}

function getWfoLocs() {
  fetch(api + 'wfos/' + (document.cookie.match(/^(?:.*;)?\s*wfo\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1], {
    headers: {
      'auth-token': (document.cookie.match(/^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
    }})
    .then(res => res.json())
    .then(res => {
      var locsSelect = document.getElementById('locs');
      res.locs.forEach(element => {
        var locsOption = new Option(element.county + ", " + element.state, element.fips);
        locsSelect.appendChild(locsOption);
      });
    });
}

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
  var locs = document.getElementById('locs').value;
  var headline = document.getElementById('headline').value;
  var desc = document.getElementById('desc').value;

  console.log();

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

function sendUpdate() {
  var sender = (document.cookie.match(/^(?:.*;)?\s*wfo\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
  var event = document.getElementById('event').value;
  var expireTime = document.getElementById('expiredate').valueAsNumber + document.getElementById('expiretime').valueAsNumber + (date.getTimezoneOffset() * 60000);
  var locs = document.getElementById('locs').value;
  var headline = document.getElementById('headline').value;
  var desc = document.getElementById('desc').value;

  fetch(api + 'alerts/updatealert/' + document.getElementById('update').value, {
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

function sendMethod(method) {
  var sender = (document.cookie.match(/^(?:.*;)?\s*wfo\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
  var event = document.getElementById('event').value;
  var expireTime = document.getElementById('expiredate').valueAsNumber + document.getElementById('expiretime').valueAsNumber + (date.getTimezoneOffset() * 60000);
  var locs = document.getElementById('locs').value;
  var headline = document.getElementById('headline').value;
  var desc = document.getElementById('desc').value;

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

function sendCancel() {
  var sender = (document.cookie.match(/^(?:.*;)?\s*wfo\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
  var event = document.getElementById('event').value;
  var expireTime = document.getElementById('expire').value;
  var locs = document.getElementById('locs').value;
  var headline = document.getElementById('headline').value;
  var desc = document.getElementById('desc').value;

  fetch(api + 'alerts/cancelalert/' + document.getElementById('update').value, {
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

function sendExpire() {
  var sender = (document.cookie.match(/^(?:.*;)?\s*wfo\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
  var event = document.getElementById('event').value;
  var expireTime = document.getElementById('expire').value;
  var locs = document.getElementById('locs').value;
  var headline = document.getElementById('headline').value;
  var desc = document.getElementById('desc').value;

  fetch(api + 'alerts/expirealert/' + document.getElementById('update').value, {
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
