function alertList() {
  var alertSelect = document.getElementById('event');
  
  var abv = new Option('Rawinsonde Data Above 100 Millibars', 'abv');
  alertSelect.appendChild(abv);

  var ada = new Option('Alarm/Alert Administrative Msg', 'ada');
  alertSelect.appendChild(ada);

  var adm = new Option('Alert Administrative Message', 'adm');
  alertSelect.appendChild(adm);

  var adr = new Option('NWS Administrative Message', 'adr');
  alertSelect.appendChild(adr);

  var adv = new Option('Generic Space Environment Advisory', 'adv');
  alertSelect.appendChild(adv);

  var afd = new Option('Area Forecast Discussion', 'afd');
  alertSelect.appendChild(afd);

  var afm = new Option('Area Forecast Matrices', 'afm');
  alertSelect.appendChild(afm);

  var afp = new Option('Area Forecast Product', 'afp');
  alertSelect.appendChild(afp);

  var afw = new Option('Fire Weather Matrix', 'afw');
  alertSelect.appendChild(afw);

  var agf = new Option('Agricultural Forecast', 'agf');
  alertSelect.appendChild(agf);

  var ago = new Option('Agricultural Observations', 'ago');
  alertSelect.appendChild(ago);

  var alt = new Option('Space Environment Alert', 'alt');
  alertSelect.appendChild(alt);

  var aqa = new Option('Air Quality Alert', 'aqa');
  alertSelect.appendChild(aqa);

  var aqi = new Option('Air Quality Index Statement', 'aqi');
  alertSelect.appendChild(aqi);

  var asa = new Option('Air Stagnation Advisory', 'asa');
  alertSelect.appendChild(asa);

  var ava = new Option('Avalanche Watch', 'ava');
  alertSelect.appendChild(ava);

  var avg = new Option('Avalanche Weather Guidance', 'avg');
  alertSelect.appendChild(avg);

  var avw = new Option('Avalanche Warning', 'avw');
  alertSelect.appendChild(avw);

  var awo = new Option('Area Weather Outlook', 'awo');
  alertSelect.appendChild(awo);

  var aws = new Option('Area Weather Summary', 'aws');
  alertSelect.appendChild(aws);

  var awu = new Option('Area Weather Update', 'awu');
  alertSelect.appendChild(awu);

  var aww = new Option('Airport Weather Warning', 'aww');
  alertSelect.appendChild(aww);

  var blu = new Option('Blue Alert', 'blu');
  alertSelect.appendChild(blu);

  var boy = new Option('Buoy Report', 'boy');
  alertSelect.appendChild(boy);

  var brg = new Option('Coast Guard Observations', 'brg');
  alertSelect.appendChild(brg);

  var brt = new Option('Hourly Roundup for Weather Radio', 'brt');
  alertSelect.appendChild(brt);

  var cae = new Option('Child Abduction Emergency', 'cae');
  alertSelect.appendChild(cae);

  var ccf = new Option('Coded City Forecast', 'ccf');
  alertSelect.appendChild(ccf);

  var cdw = new Option('Civil Danger Warning', 'cdw');
  alertSelect.appendChild(cdw);

  var cem = new Option('Civil Emergency Message', 'cem');
  alertSelect.appendChild(cem);

  var cf6 = new Option('WFO Monthly/Daily Climate Data', 'cf6');
  alertSelect.appendChild(cf6);

  var cfp = new Option('Convective Forecast Product', 'cfp');
  alertSelect.appendChild(cfp);

  var cfw = new Option('Coastal Flood Warnings/Watches/Statements', 'cfw');
  alertSelect.appendChild(cfw);

  var cgr = new Option('Coast Guard Surface Report', 'cgr');
  alertSelect.appendChild(cgr);

  var chg = new Option('Computer Hurricane Guidance', 'chg');
  alertSelect.appendChild(chg);

  var cla = new Option('Climatological Report (Annual)', 'cla');
  alertSelect.appendChild(cla);

  var cli = new Option('Climatological Report (Daily)', 'cli');
  alertSelect.appendChild(cli);

  var clm = new Option('Climatological Report (Monthly)', 'clm');
  alertSelect.appendChild(clm);

  var clq = new Option('Climatological Report (Quarterly)', 'clq');
  alertSelect.appendChild(clq);

  var cls = new Option('Climatological Report (Seasonal)', 'cls');
  alertSelect.appendChild(cls);

  var clt = new Option('Climate Report', 'clt');
  alertSelect.appendChild(clt);

  var cmm = new Option('Coded Climatological Monthly Means', 'cmm');
  alertSelect.appendChild(cmm);

  var cod = new Option('Coded Analysis and Forecasts', 'cod');
  alertSelect.appendChild(cod);

  var cpf = new Option('Great Lakes Port Forecast', 'cpf');
  alertSelect.appendChild(cpf);

  var cur = new Option('Routine Space Environment Products', 'cur');
  alertSelect.appendChild(cur);

  var cwa = new Option('Center (CWSU) Weather Advisory', 'cwa');
  alertSelect.appendChild(cwa);

  var cwf = new Option('Coastal Waters Forecast', 'cwf');
  alertSelect.appendChild(cwf);

  var cws = new Option('Center (CWSU) Weather Statement', 'cws');
  alertSelect.appendChild(cws);

  var day = new Option('Routine Space Environment Product (Daily)', 'day');
  alertSelect.appendChild(day);

  var ddo = new Option('Daily Dispersion Outlook', 'ddo');
  alertSelect.appendChild(ddo);

  var dgt = new Option('Drought Information Statement', 'dgt');
  alertSelect.appendChild(dgt);

  var dmo = new Option('Practice/Demo Warning', 'dmo');
  alertSelect.appendChild(dmo);

  var dsa = new Option('Unnumbered Depression / Suspicious Area Advisory', 'dsa');
  alertSelect.appendChild(dsa);

  var dsm = new Option('ASOS Daily Summary', 'dsm');
  alertSelect.appendChild(dsm);

  var dsw = new Option('Dust Storm Warning and Dust Advisory', 'dsw');
  alertSelect.appendChild(dsw);

  var efp = new Option('3 To 5 Day Extended Forecast', 'efp');
  alertSelect.appendChild(efp);

  var eol = new Option('Average 6 To 10 Day Weather Outlook (Local)', 'eol');
  alertSelect.appendChild(eol);

  var eqi = new Option('Tsunami Bulletin', 'eqi');
  alertSelect.appendChild(eqi);

  var eqr = new Option('Earthquake Report', 'eqr');
  alertSelect.appendChild(eqr);

  var eqw = new Option('Earthquake Warning', 'eqw');
  alertSelect.appendChild(eqw);

  var esf = new Option('Flood Potential Outlook', 'esf');
  alertSelect.appendChild(esf);

  var esg = new Option('Extended Streamflow Guidance', 'esg');
  alertSelect.appendChild(esg);

  var esp = new Option('Extended Streamflow Prediction', 'esp');
  alertSelect.appendChild(esp);

  var ess = new Option('Water Supply Outlook', 'ess');
  alertSelect.appendChild(ess);

  var evi = new Option('Evacuation Immediate', 'evi');
  alertSelect.appendChild(evi);

  var eww = new Option('Extreme Wind Warning', 'eww');
  alertSelect.appendChild(eww);

  var fa0 = new Option('Aviation Area Forecasts (Pacific)', 'fa0');
  alertSelect.appendChild(fa0);

  var fa1 = new Option('Aviation Area Forecasts (Northeast)', 'fa1');
  alertSelect.appendChild(fa1);

  var fa2 = new Option('Aviation Area Forecasts (Southeast)', 'fa2');
  alertSelect.appendChild(fa2);

  var fa3 = new Option('Aviation Area Forecasts (North Central)', 'fa3');
  alertSelect.appendChild(fa3);

  var fa4 = new Option('Aviation Area Forecasts (South Central)', 'fa4');
  alertSelect.appendChild(fa4);

  var fa5 = new Option('Aviation Area Forecasts (Rocky Mountains)', 'fa5');
  alertSelect.appendChild(fa5);

  var fa6 = new Option('Aviation Area Forecasts (West Coast)', 'fa6');
  alertSelect.appendChild(fa6);

  var fa7 = new Option('Aviation Area Forecasts (Juneau, AK)', 'fa7');
  alertSelect.appendChild(fa7);

  var fa8 = new Option('Aviation Area Forecasts (Anchorage, AK)', 'fa8');
  alertSelect.appendChild(fa8);

  var fa9 = new Option('Aviation Area Forecasts (Fairbanks, AK)', 'fa9');
  alertSelect.appendChild(fa9);

  var fd0 = new Option('24 Hr Fd Winds Aloft Fcst (45,000 and 53,000 Ft)', 'fd0');
  alertSelect.appendChild(fd0);

  var fd1 = new Option('6 Hour Winds Aloft Forecast', 'fd1');
  alertSelect.appendChild(fd1);

  var fd2 = new Option('12 Hour Winds Aloft Forecast', 'fd2');
  alertSelect.appendChild(fd2);

  var fd3 = new Option('24 Hour Winds Aloft Forecast', 'fd3');
  alertSelect.appendChild(fd3);

  var fd4 = new Option('Winds Aloft Forecast', 'fd4');
  alertSelect.appendChild(fd4);

  var fd5 = new Option('Winds Aloft Forecast', 'fd5');
  alertSelect.appendChild(fd5);

  var fd6 = new Option('Winds Aloft Forecast', 'fd6');
  alertSelect.appendChild(fd6);

  var fd7 = new Option('Winds Aloft Forecast', 'fd7');
  alertSelect.appendChild(fd7);

  var fd8 = new Option('6 Hour Fd Winds Aloft Fcst (45,000 and 53,000 Ft)', 'fd8');
  alertSelect.appendChild(fd8);

  var fd9 = new Option('12 Hr Fd Winds Aloft Fcst (45,000 and 53,000 Ft)', 'fd9');
  alertSelect.appendChild(fd9);

  var fdi = new Option('Fire Danger Indices', 'fdi');
  alertSelect.appendChild(fdi);

  var ffa = new Option('Flash Flood Watch', 'ffa');
  alertSelect.appendChild(ffa);

  var ffg = new Option('Flash Flood Guidance', 'ffg');
  alertSelect.appendChild(ffg);

  var ffh = new Option('Headwater Guidance', 'ffh');
  alertSelect.appendChild(ffh);

  var ffs = new Option('Flash Flood Statement', 'ffs');
  alertSelect.appendChild(ffs);

  var ffw = new Option('Flash Flood Warning', 'ffw');
  alertSelect.appendChild(ffw);

  var fln = new Option('National Flood Summary', 'fln');
  alertSelect.appendChild(fln);

  var fls = new Option('Flood Statement', 'fls');
  alertSelect.appendChild(fls);

  var flw = new Option('Flood Warning', 'flw');
  alertSelect.appendChild(flw);

  var fof = new Option('Upper Wind Fallout Forecast', 'fof');
  alertSelect.appendChild(fof);

  var frw = new Option('Fire Warning', 'frw');
  alertSelect.appendChild(frw);

  var fsh = new Option('Natl Marine Fisheries Administrative Service Message', 'fsh');
  alertSelect.appendChild(fsh);

  var ftm = new Option('WSR-88D Radar Outage Notification / Free Text Message', 'ftm');
  alertSelect.appendChild(ftm);

  var ftp = new Option('FOUS Prog Max/Min Temp/Pop Guidance', 'ftp');
  alertSelect.appendChild(ftp);

  var fwa = new Option('Fire Weather Administrative Message', 'fwa');
  alertSelect.appendChild(fwa);

  var fwd = new Option('Fire Weather Outlook Discussion', 'fwd');
  alertSelect.appendChild(fwd);

  var fwf = new Option('Routine Fire Wx Fcst (With/Without 6-10 Day Outlook)', 'fwf');
  alertSelect.appendChild(fwf);

  var fwl = new Option('Land Management Forecasts', 'fwl');
  alertSelect.appendChild(fwl);

  var fwm = new Option('Miscellaneous Fire Weather Product', 'fwm');
  alertSelect.appendChild(fwm);

  var fwn = new Option('Fire Weather Notification', 'fwn');
  alertSelect.appendChild(fwn);

  var fwo = new Option('Fire Weather Observation', 'fwo');
  alertSelect.appendChild(fwo);

  var fws = new Option('Suppression Forecast', 'fws');
  alertSelect.appendChild(fws);

  var fzl = new Option('Freezing Level Data (RADAT)', 'fzl');
  alertSelect.appendChild(fzl);

  var glf = new Option('Great Lakes Forecast', 'glf');
  alertSelect.appendChild(glf);

  var gls = new Option('Great Lakes Storm Summary', 'gls');
  alertSelect.appendChild(gls);

  var gre = new Option('GREEN', 'gre');
  alertSelect.appendChild(gre);

  var hd1 = new Option('RFC Derived QPF Data Product', 'hd1');
  alertSelect.appendChild(hd1);

  var hd2 = new Option('RFC Derived QPF Data Product', 'hd2');
  alertSelect.appendChild(hd2);

  var hd3 = new Option('RFC Derived QPF Data Product', 'hd3');
  alertSelect.appendChild(hd3);

  var hd4 = new Option('RFC Derived QPF Data Product', 'hd4');
  alertSelect.appendChild(hd4);

  var hd7 = new Option('RFC Derived QPF Data Product', 'hd7');
  alertSelect.appendChild(hd7);

  var hd8 = new Option('RFC Derived QPF Data Product', 'hd8');
  alertSelect.appendChild(hd8);

  var hd9 = new Option('RFC Derived QPF Data Product', 'hd9');
  alertSelect.appendChild(hd9);

  var hls = new Option('Hurricane Local Statement', 'hls');
  alertSelect.appendChild(hls);

  var hmd = new Option('Hydrometeorological Discussion', 'hmd');
  alertSelect.appendChild(hmd);

  var hml = new Option('AHPS XML', 'hml');
  alertSelect.appendChild(hml);

  var hmw = new Option('Hazardous Materials Warning', 'hmw');
  alertSelect.appendChild(hmw);

  var hp1 = new Option('RFC QPF Verification Product', 'hp1');
  alertSelect.appendChild(hp1);

  var hp2 = new Option('RFC QPF Verification Product', 'hp2');
  alertSelect.appendChild(hp2);

  var hp3 = new Option('RFC QPF Verification Product', 'hp3');
  alertSelect.appendChild(hp3);

  var hp4 = new Option('RFC QPF Verification Product', 'hp4');
  alertSelect.appendChild(hp4);

  var hp5 = new Option('RFC QPF Verification Product', 'hp5');
  alertSelect.appendChild(hp5);

  var hp6 = new Option('RFC QPF Verification Product', 'hp6');
  alertSelect.appendChild(hp6);

  var hp7 = new Option('RFC QPF Verification Product', 'hp7');
  alertSelect.appendChild(hp7);

  var hp8 = new Option('RFC QPF Verification Product', 'hp8');
  alertSelect.appendChild(hp8);

  var hrr = new Option('Weather Roundup', 'hrr');
  alertSelect.appendChild(hrr);

  var hsf = new Option('High Seas Forecast', 'hsf');
  alertSelect.appendChild(hsf);

  var hwo = new Option('Hazardous Weather Outlook', 'hwo');
  alertSelect.appendChild(hwo);

  var hwr = new Option('Hourly Weather Roundup', 'hwr');
  alertSelect.appendChild(hwr);

  var hyd = new Option('Daily Hydrometeorological Products', 'hyd');
  alertSelect.appendChild(hyd);

  var hym = new Option('Monthly Hydrometeorological Plain Language Product', 'hym');
  alertSelect.appendChild(hym);

  var ice = new Option('Ice Forecast', 'ice');
  alertSelect.appendChild(ice);

  var idm = new Option('Ice Drift Vectors', 'idm');
  alertSelect.appendChild(idm);

  var ini = new Option('ADMINISTR [NOUS51 KWBC]', 'ini');
  alertSelect.appendChild(ini);

  var iob = new Option('Ice Observation', 'iob');
  alertSelect.appendChild(iob);

  var kpa = new Option('Keep Alive Message', 'kpa');
  alertSelect.appendChild(kpa);

  var lae = new Option('Local Area Emergency', 'lae');
  alertSelect.appendChild(lae);

  var lcd = new Option('Preliminary Local Climatological Data', 'lcd');
  alertSelect.appendChild(lcd);

  var lco = new Option('Local Cooperative Observation', 'lco');
  alertSelect.appendChild(lco);

  var lew = new Option('Law Enforcement Warning', 'lew');
  alertSelect.appendChild(lew);

  var lfp = new Option('Local Forecast', 'lfp');
  alertSelect.appendChild(lfp);

  var lke = new Option('Lake Stages', 'lke');
  alertSelect.appendChild(lke);

  var lls = new Option('Low-Level Sounding', 'lls');
  alertSelect.appendChild(lls);

  var low = new Option('Low Temperatures', 'low');
  alertSelect.appendChild(low);

  var lsr = new Option('Local Storm Report', 'lsr');
  alertSelect.appendChild(lsr);

  var ltg = new Option('Lightning Data', 'ltg');
  alertSelect.appendChild(ltg);

  var man = new Option('Rawinsonde Observation Mandatory Levels', 'man');
  alertSelect.appendChild(man);

  var map = new Option('Mean Areal Precipitation', 'map');
  alertSelect.appendChild(map);

  var maw = new Option('Amended Marine Forecast', 'maw');
  alertSelect.appendChild(maw);

  var mfm = new Option('Marine Forecast Matrix', 'mfm');
  alertSelect.appendChild(mfm);

  var mim = new Option('Marine Interpretation Message', 'mim');
  alertSelect.appendChild(mim);

  var mis = new Option('Miscellaneous Local Product', 'mis');
  alertSelect.appendChild(mis);

  var mob = new Option('MOB Observations', 'mob');
  alertSelect.appendChild(mob);

  var mon = new Option('Routine Space Environment Product Issued Monthly', 'mon');
  alertSelect.appendChild(mon);

  var mrp = new Option('Techniques Development Laboratory Marine Product', 'mrp');
  alertSelect.appendChild(mrp);

  var msm = new Option('ASOS Monthly Summary Message', 'msm');
  alertSelect.appendChild(msm);

  var mtr = new Option('METAR Formatted Surface Weather Observation', 'mtr');
  alertSelect.appendChild(mtr);

  var mtt = new Option('METAR Test Message', 'mtt');
  alertSelect.appendChild(mtt);

  var mvf = new Option('Marine Verification Coded Message', 'mvf');
  alertSelect.appendChild(mvf);

  var mws = new Option('Marine Weather Statement', 'mws');
  alertSelect.appendChild(mws);

  var mww = new Option('Marine Weather Message', 'mww');
  alertSelect.appendChild(mww);

  var nou = new Option('Weather Reconnaisance Flights', 'nou');
  alertSelect.appendChild(nou);

  var now = new Option('Short Term Forecast', 'now');
  alertSelect.appendChild(now);

  var nox = new Option('Data Mgt Message', 'nox');
  alertSelect.appendChild(nox);

  var npw = new Option('Non-Precipitation Warnings / Watches / Advisories', 'npw');
  alertSelect.appendChild(npw);

  var nsh = new Option('Nearshore Marine Forecast', 'nsh');
  alertSelect.appendChild(nsh);

  var nuw = new Option('Nuclear Power Plant Warning', 'nuw');
  alertSelect.appendChild(nuw);

  var nwr = new Option('NOAA Weather Radio Forecast', 'nwr');
  alertSelect.appendChild(nwr);

  var oav = new Option('Other Aviation Products', 'oav');
  alertSelect.appendChild(oav);

  var obs = new Option('Observations', 'obs');
  alertSelect.appendChild(obs);

  var ofa = new Option('Offshore Aviation Area Forecast', 'ofa');
  alertSelect.appendChild(ofa);

  var off = new Option('Offshore Forecast', 'off');
  alertSelect.appendChild(off);

  var omr = new Option('Other Marine Products', 'omr');
  alertSelect.appendChild(omr);

  var opu = new Option('Other Public Products', 'opu');
  alertSelect.appendChild(opu);

  var oso = new Option('Other Surface Observations', 'oso');
  alertSelect.appendChild(oso);

  var osw = new Option('Ocean Surface Winds', 'osw');
  alertSelect.appendChild(osw);

  var oua = new Option('Other Upper Air Data', 'oua');
  alertSelect.appendChild(oua);

  var ozf = new Option('Zone Forecast', 'ozf');
  alertSelect.appendChild(ozf);

  var pfm = new Option('Point Forecast Matrices', 'pfm');
  alertSelect.appendChild(pfm);

  var pfw = new Option('Fire Weather Point Forecast Matrices', 'pfw');
  alertSelect.appendChild(pfw);

  var pls = new Option('Plain Language Ship Report', 'pls');
  alertSelect.appendChild(pls);

  var pmd = new Option('Prognostic Meteorological Discussion', 'pmd');
  alertSelect.appendChild(pmd);

  var pns = new Option('Public Information Statement', 'pns');
  alertSelect.appendChild(pns);

  var poe = new Option('Probability of Exceed', 'poe');
  alertSelect.appendChild(poe);

  var prb = new Option('Heat Index Forecast Tables', 'prb');
  alertSelect.appendChild(prb);

  var prc = new Option('State Pilot Report Collective', 'prc');
  alertSelect.appendChild(prc);

  var pre = new Option('Preliminary Forecasts', 'pre');
  alertSelect.appendChild(pre);

  var psh = new Option('Post Storm Hurricane Report', 'psh');
  alertSelect.appendChild(psh);

  var pts = new Option('Probabilistic Outlook Points', 'pts');
  alertSelect.appendChild(pts);

  var pwo = new Option('Public Severe Weather Outlook', 'pwo');
  alertSelect.appendChild(pwo);

  var pws = new Option('Tropical Cyclone Probabilities', 'pws');
  alertSelect.appendChild(pws);

  var qpf = new Option('Quantitative Precipitation Forecast', 'qpf');
  alertSelect.appendChild(qpf);

  var qps = new Option('Quantitative Precipitation Statement', 'qps');
  alertSelect.appendChild(qps);

  var rdf = new Option('Revised Digital Forecast', 'rdf');
  alertSelect.appendChild(rdf);

  var rec = new Option('Recreational Report', 'rec');
  alertSelect.appendChild(rec);

  var rer = new Option('Record Report', 'rer');
  alertSelect.appendChild(rer);

  var ret = new Option('EAS Activation Request', 'ret');
  alertSelect.appendChild(ret);

  var rfd = new Option('Rangeland Fire Danger Forecast', 'rfd');
  alertSelect.appendChild(rfd);

  var rfi = new Option('RFI Observation', 'rfi');
  alertSelect.appendChild(rfi);

  var rfr = new Option('Route Forecast', 'rfr');
  alertSelect.appendChild(rfr);

  var rfw = new Option('Red Flag Warning', 'rfw');
  alertSelect.appendChild(rfw);

  var rhw = new Option('Radiological Hazard Warning', 'rhw');
  alertSelect.appendChild(rhw);

  var rmt = new Option('Required Monthly Test', 'rmt');
  alertSelect.appendChild(rmt);

  var rns = new Option('Rain Information Statement', 'rns');
  alertSelect.appendChild(rns);

  var rr1 = new Option('Hydro-Met Data Report Part 1', 'rr1');
  alertSelect.appendChild(rr1);

  var rr2 = new Option('Hydro-Met Data Report Part 2', 'rr2');
  alertSelect.appendChild(rr2);

  var rr3 = new Option('Hydro-Met Data Report Part 3', 'rr3');
  alertSelect.appendChild(rr3);

  var rr4 = new Option('Hydro-Met Data Report Part 4', 'rr4');
  alertSelect.appendChild(rr4);

  var rr5 = new Option('Hydro-Met Data Report Part 5', 'rr5');
  alertSelect.appendChild(rr5);

  var rr6 = new Option('Hydro-Met Data Report Part 6', 'rr6');
  alertSelect.appendChild(rr6);

  var rr7 = new Option('Hydro-Met Data Report Part 7', 'rr7');
  alertSelect.appendChild(rr7);

  var rr8 = new Option('Hydro-Met Data Report Part 8', 'rr8');
  alertSelect.appendChild(rr8);

  var rr9 = new Option('Hydro-Met Data Report Part 9', 'rr9');
  alertSelect.appendChild(rr9);

  var rra = new Option('Automated Hydrologic Observation Sta Report (AHOS)', 'rra');
  alertSelect.appendChild(rra);

  var rrm = new Option('Miscellaneous Hydrologic Data', 'rrm');
  alertSelect.appendChild(rrm);

  var rrs = new Option('HADS Data', 'rrs');
  alertSelect.appendChild(rrs);

  var rry = new Option('ASOS SHEF Hourly Routine Test Message', 'rry');
  alertSelect.appendChild(rry);

  var rsd = new Option('Daily Snotel Data', 'rsd');
  alertSelect.appendChild(rsd);

  var rsm = new Option('Monthly Snotel Data', 'rsm');
  alertSelect.appendChild(rsm);

  var rtp = new Option('Regional Max/Min Temp and Precipitation Table', 'rtp');
  alertSelect.appendChild(rtp);

  var rva = new Option('River Summary', 'rva');
  alertSelect.appendChild(rva);

  var rvd = new Option('Daily River Forecasts', 'rvd');
  alertSelect.appendChild(rvd);

  var rvf = new Option('River Forecast', 'rvf');
  alertSelect.appendChild(rvf);

  var rvi = new Option('River Ice Statement', 'rvi');
  alertSelect.appendChild(rvi);

  var rvm = new Option('Miscellaneous River Product', 'rvm');
  alertSelect.appendChild(rvm);

  var rvr = new Option('River Recreation Statement', 'rvr');
  alertSelect.appendChild(rvr);

  var rvs = new Option('River Statement', 'rvs');
  alertSelect.appendChild(rvs);

  var rwr = new Option('Regional Weather Roundup', 'rwr');
  alertSelect.appendChild(rwr);

  var rws = new Option('Regional Weather Summary', 'rws');
  alertSelect.appendChild(rws);

  var rwt = new Option('Required Weekly Test', 'rwt');
  alertSelect.appendChild(rwt);

  var sab = new Option('Special Avalanche Bulletin', 'sab');
  alertSelect.appendChild(sab);

  var saf = new Option('Speci Agri Wx Fcst / Advisory / Flying Farmer Fcst Outlook', 'saf');
  alertSelect.appendChild(saf);

  var sag = new Option('Snow Avalanche Guidance', 'sag');
  alertSelect.appendChild(sag);

  var sat = new Option('APT Prediction', 'sat');
  alertSelect.appendChild(sat);

  var saw = new Option('Prelim Notice of Watch & Cancellation Msg (Aviation)', 'saw');
  alertSelect.appendChild(saw);

  var scc = new Option('Storm Summary', 'scc');
  alertSelect.appendChild(scc);

  var scd = new Option('Supplementary Climatological Data (ASOS)', 'scd');
  alertSelect.appendChild(scd);

  var scn = new Option('Soil Climate Analysis Network Data', 'scn');
  alertSelect.appendChild(scn);

  var scp = new Option('Satellite Cloud Product', 'scp');
  alertSelect.appendChild(scp);

  var scs = new Option('Selected Cities Summary', 'scs');
  alertSelect.appendChild(scs);

  var sdo = new Option('Supplementary Data Observation (ASOS)', 'sdo');
  alertSelect.appendChild(sdo);

  var sds = new Option('Special Dispersion Statement', 'sds');
  alertSelect.appendChild(sds);

  var sel = new Option('Severe Local Storm Watch and Watch Cancellation Msg', 'sel');
  alertSelect.appendChild(sel);

  var sev = new Option('SPC Watch Point Information Message', 'sev');
  alertSelect.appendChild(sev);

  var sfp = new Option('State Forecast', 'sfp');
  alertSelect.appendChild(sfp);

  var sft = new Option('Tabular State Forecast', 'sft');
  alertSelect.appendChild(sft);

  var sgl = new Option('Rawinsonde Observation Significant Levels', 'sgl');
  alertSelect.appendChild(sgl);

  var shp = new Option('Surface Ship Report at Synoptic Time', 'shp');
  alertSelect.appendChild(shp);

  var sig = new Option('International Sigmet / Convective Sigmet', 'sig');
  alertSelect.appendChild(sig);

  var sim = new Option('Satellite Interpretation Message', 'sim');
  alertSelect.appendChild(sim);

  var sls = new Option('Severe Local Storm Watch and Areal Outline', 'sls');
  alertSelect.appendChild(sls);

  var smf = new Option('Smoke Management Weather Forecast', 'smf');
  alertSelect.appendChild(smf);

  var smw = new Option('Special Marine Warning', 'smw');
  alertSelect.appendChild(smw);

  var soo = new Option('SOO Product', 'soo');
  alertSelect.appendChild(soo);

  var spe = new Option('Satellite Precipitation Estimates (TXUS20 KWBC)', 'spe');
  alertSelect.appendChild(spe);

  var spf = new Option('Storm Strike Probability Bulletin (TPC)', 'spf');
  alertSelect.appendChild(spf);

  var sps = new Option('Special Weather Statement', 'sps');
  alertSelect.appendChild(sps);

  var spw = new Option('Shelter in Place Warning', 'spw');
  alertSelect.appendChild(spw);

  var sqw = new Option('Snow Squall Warning', 'sqw');
  alertSelect.appendChild(sqw);

  var srd = new Option('Surf Discussion', 'srd');
  alertSelect.appendChild(srd);

  var srf = new Option('Surf Forecast', 'srf');
  alertSelect.appendChild(srf);

  var srg = new Option('Soaring Guidance', 'srg');
  alertSelect.appendChild(srg);

  var ssm = new Option('Main Synoptic Hour Surface Observation', 'ssm');
  alertSelect.appendChild(ssm);

  var sta = new Option('Network and Severe Weather Statistical Summaries', 'sta');
  alertSelect.appendChild(sta);

  var std = new Option('Satellite Tropical Disturbance Summary', 'std');
  alertSelect.appendChild(std);

  var sto = new Option('Road Condition Reports (State Agencies)', 'sto');
  alertSelect.appendChild(sto);

  var stp = new Option('State Max/Min Temperature and Precipitation Table', 'stp');
  alertSelect.appendChild(stp);

  var stq = new Option('Spot Forecast Request', 'stq');
  alertSelect.appendChild(stq);

  var sum = new Option('Space Weather Message', 'sum');
  alertSelect.appendChild(sum);

  var svr = new Option('Severe Thunderstorm Warning', 'svr');
  alertSelect.appendChild(svr);

  var svs = new Option('Severe Weather Statement', 'svs');
  alertSelect.appendChild(svs);

  var swo = new Option('Severe Storm Outlook Narrative (AC)', 'swo');
  alertSelect.appendChild(swo);

  var sws = new Option('State Weather Summary', 'sws');
  alertSelect.appendChild(sws);

  var syn = new Option('Regional Weather Synopsis', 'syn');
  alertSelect.appendChild(syn);

  var taf = new Option('Terminal Aerodrome Forecast', 'taf');
  alertSelect.appendChild(taf);

  var tap = new Option('Terminal Alerting Products', 'tap');
  alertSelect.appendChild(tap);

  var tav = new Option('Travelers Forecast Table', 'tav');
  alertSelect.appendChild(tav);

  var tca = new Option('Aviation Tropical Cyclone Advisory', 'tca');
  alertSelect.appendChild(tca);

  var tcd = new Option('Tropical Cyclone Discussion', 'tcd');
  alertSelect.appendChild(tcd);

  var tce = new Option('Tropical Cyclone Position Estimate', 'tce');
  alertSelect.appendChild(tce);

  var tcm = new Option('Marine/Aviation Tropical Cyclone Advisory', 'tcm');
  alertSelect.appendChild(tcm);

  var tcp = new Option('Public Tropical Cyclone Advisory', 'tcp');
  alertSelect.appendChild(tcp);

  var tcs = new Option('Satellite Tropical Cyclone Summary', 'tcs');
  alertSelect.appendChild(tcs);

  var tcu = new Option('Tropical Cyclone Update', 'tcu');
  alertSelect.appendChild(tcu);

  var tcv = new Option('Tropical Cyclone Watch/Warning Break Points', 'tcv');
  alertSelect.appendChild(tcv);

  var tib = new Option('Tsunami Bulletin', 'tib');
  alertSelect.appendChild(tib);

  var tid = new Option('Tide Report', 'tid');
  alertSelect.appendChild(tid);

  var tma = new Option('Tsunami Tide/Seismic Message Acknowledgement', 'tma');
  alertSelect.appendChild(tma);

  var toe = new Option('911 Telephone Outage Emergency', 'toe');
  alertSelect.appendChild(toe);

  var tor = new Option('Tornado Warning', 'tor');
  alertSelect.appendChild(tor);

  var tpt = new Option('Temperature Precipitation Table (Natl and Intnl)', 'tpt');
  alertSelect.appendChild(tpt);

  var tsu = new Option('Tsunami Watch/Warning', 'tsu');
  alertSelect.appendChild(tsu);

  var tuv = new Option('Weather Bulletin', 'tuv');
  alertSelect.appendChild(tuv);

  var tvl = new Option('Travelers Forecast', 'tvl');
  alertSelect.appendChild(tvl);

  var twb = new Option('Transcribed Weather Broadcast', 'twb');
  alertSelect.appendChild(twb);

  var twd = new Option('Tropical Weather Discussion', 'twd');
  alertSelect.appendChild(twd);

  var two = new Option('Tropical Weather Outlook and Summary', 'two');
  alertSelect.appendChild(two);

  var tws = new Option('Tropical Weather Summary', 'tws');
  alertSelect.appendChild(tws);

  var urn = new Option('Aircraft Reconnaissance', 'urn');
  alertSelect.appendChild(urn);

  var uvi = new Option('Ultraviolet Index', 'uvi');
  alertSelect.appendChild(uvi);

  var vaa = new Option('Volcanic Activity Advisory', 'vaa');
  alertSelect.appendChild(vaa);

  var ver = new Option('Forecast Verification Statistics', 'ver');
  alertSelect.appendChild(ver);

  var vft = new Option('Terminal Aerodrome Forecast (TAF) Verification', 'vft');
  alertSelect.appendChild(vft);

  var vow = new Option('Volcano Warning', 'vow');
  alertSelect.appendChild(vow);

  var wa0 = new Option('Airmet (Pacific)', 'wa0');
  alertSelect.appendChild(wa0);

  var wa1 = new Option('Airmet (Northeast)', 'wa1');
  alertSelect.appendChild(wa1);

  var wa2 = new Option('Airmet (Southeast)', 'wa2');
  alertSelect.appendChild(wa2);

  var wa3 = new Option('Airmet (North Central)', 'wa3');
  alertSelect.appendChild(wa3);

  var wa4 = new Option('Airmet (South Central)', 'wa4');
  alertSelect.appendChild(wa4);

  var wa5 = new Option('Airmet (Rocky Mountains)', 'wa5');
  alertSelect.appendChild(wa5);

  var wa6 = new Option('Airmet (West Coast)', 'wa6');
  alertSelect.appendChild(wa6);

  var wa7 = new Option('Airmet (Juneau, AK)', 'wa7');
  alertSelect.appendChild(wa7);

  var wa8 = new Option('Airmet (Anchorage, AK)', 'wa8');
  alertSelect.appendChild(wa8);

  var wa9 = new Option('Airmet (Fairbanks, AK)', 'wa9');
  alertSelect.appendChild(wa9);

  var war = new Option('Space Environment Warning', 'war');
  alertSelect.appendChild(war);

  var wat = new Option('Space Environment Watch', 'wat');
  alertSelect.appendChild(wat);

  var wcn = new Option('Weather Watch Clearance Notification', 'wcn');
  alertSelect.appendChild(wcn);

  var wcr = new Option('Weekly Weather and Crop Report', 'wcr');
  alertSelect.appendChild(wcr);

  var wda = new Option('Weekly Data for Agriculture', 'wda');
  alertSelect.appendChild(wda);

  var wdu = new Option('Warning Decision Update', 'wdu');
  alertSelect.appendChild(wdu);

  var wek = new Option('Routine Space Environment Product Issued Weekly', 'wek');
  alertSelect.appendChild(wek);

  var wou = new Option('Tornado/Severe Thunderstorm Watch', 'wou');
  alertSelect.appendChild(wou);

  var ws1 = new Option('Sigmet (Northeast)', 'ws1');
  alertSelect.appendChild(ws1);

  var ws2 = new Option('Sigmet (Southeast)', 'ws2');
  alertSelect.appendChild(ws2);

  var ws3 = new Option('Sigmet (North Central)', 'ws3');
  alertSelect.appendChild(ws3);

  var ws4 = new Option('Sigmet (South Central)', 'ws4');
  alertSelect.appendChild(ws4);

  var ws5 = new Option('Sigmet (Rocky Mountains)', 'ws5');
  alertSelect.appendChild(ws5);

  var ws6 = new Option('Sigmet (West Coast)', 'ws6');
  alertSelect.appendChild(ws6);

  var wst = new Option('Tropical Cyclone Sigmet', 'wst');
  alertSelect.appendChild(wst);

  var wsv = new Option('Volcanic Activity Sigmet', 'wsv');
  alertSelect.appendChild(wsv);

  var wsw = new Option('Winter Weather Warnings / Watches / Advisories', 'wsw');
  alertSelect.appendChild(wsw);

  var wwa = new Option('Watch Status Report', 'wwa');
  alertSelect.appendChild(wwa);

  var wwp = new Option('Severe Thunderstorm / Tornado Watch Probabilities', 'wwp');
  alertSelect.appendChild(wwp);
}
