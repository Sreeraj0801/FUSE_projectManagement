import{d as br,o as mn,r as y,R,p as yr,a as V,j as O,V as wr,e as _r,f as kr,w as xr,F as Me,q as St}from"./index-4392a1d0.js";import{A as Cr}from"./AsideNavbar-066e22ec.js";import Sr from"./NavBar-18a0ba19.js";import{p as Er,M as $r}from"./projectApi-5190dafb.js";import{Q as tt,k as Tr}from"./react-toastify.esm-5d1987fa.js";import{a as Or}from"./index.esm-42b0f048.js";import{p as Te}from"./index-4d501b15.js";import{k as Pr}from"./index.esm-827cfd92.js";import"./iconBase-60e5c22f.js";import"./index.esm-dc963986.js";import"./sweetalert2.all-c274dedb.js";const Rr=()=>{const n=br();return{fetchGroupChat:async i=>{try{const{data:o}=await n.get(`/chat/${i}`);return o}catch(o){throw{error:o}}},addMessage:async i=>{try{return(await n.post("/chat/addMessage",i)).data}catch(o){throw{error:o}}},fetchMessages:async i=>{try{const{data:o}=await n.get(`/chat/messages/${i}`);return o}catch(o){throw{error:o}}}}};function ge(n){if(n===null||n===!0||n===!1)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function K(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function oe(n){K(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||mn(n)==="object"&&e==="[object Date]"?new Date(n.getTime()):typeof n=="number"||e==="[object Number]"?new Date(n):((typeof n=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function jr(n,e){K(2,arguments);var t=oe(n).getTime(),r=ge(e);return new Date(t+r)}var Mr={};function Qe(){return Mr}function Lr(n){var e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),n.getTime()-e.getTime()}function Ar(n){return K(1,arguments),n instanceof Date||mn(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}function Dr(n){if(K(1,arguments),!Ar(n)&&typeof n!="number")return!1;var e=oe(n);return!isNaN(Number(e))}function Nr(n,e){K(2,arguments);var t=ge(e);return jr(n,-t)}var Br=864e5;function zr(n){K(1,arguments);var e=oe(n),t=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=t-r;return Math.floor(i/Br)+1}function He(n){K(1,arguments);var e=1,t=oe(n),r=t.getUTCDay(),i=(r<e?7:0)+r-e;return t.setUTCDate(t.getUTCDate()-i),t.setUTCHours(0,0,0,0),t}function gn(n){K(1,arguments);var e=oe(n),t=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(t+1,0,4),r.setUTCHours(0,0,0,0);var i=He(r),o=new Date(0);o.setUTCFullYear(t,0,4),o.setUTCHours(0,0,0,0);var s=He(o);return e.getTime()>=i.getTime()?t+1:e.getTime()>=s.getTime()?t:t-1}function Ir(n){K(1,arguments);var e=gn(n),t=new Date(0);t.setUTCFullYear(e,0,4),t.setUTCHours(0,0,0,0);var r=He(t);return r}var Ur=6048e5;function Fr(n){K(1,arguments);var e=oe(n),t=He(e).getTime()-Ir(e).getTime();return Math.round(t/Ur)+1}function We(n,e){var t,r,i,o,s,l,a,u;K(1,arguments);var c=Qe(),m=ge((t=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&i!==void 0?i:c.weekStartsOn)!==null&&r!==void 0?r:(a=c.locale)===null||a===void 0||(u=a.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&t!==void 0?t:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=oe(n),v=d.getUTCDay(),p=(v<m?7:0)+v-m;return d.setUTCDate(d.getUTCDate()-p),d.setUTCHours(0,0,0,0),d}function vn(n,e){var t,r,i,o,s,l,a,u;K(1,arguments);var c=oe(n),m=c.getUTCFullYear(),d=Qe(),v=ge((t=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&i!==void 0?i:d.firstWeekContainsDate)!==null&&r!==void 0?r:(a=d.locale)===null||a===void 0||(u=a.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setUTCFullYear(m+1,0,v),p.setUTCHours(0,0,0,0);var b=We(p,e),_=new Date(0);_.setUTCFullYear(m,0,v),_.setUTCHours(0,0,0,0);var k=We(_,e);return c.getTime()>=b.getTime()?m+1:c.getTime()>=k.getTime()?m:m-1}function Hr(n,e){var t,r,i,o,s,l,a,u;K(1,arguments);var c=Qe(),m=ge((t=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&i!==void 0?i:c.firstWeekContainsDate)!==null&&r!==void 0?r:(a=c.locale)===null||a===void 0||(u=a.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1),d=vn(n,e),v=new Date(0);v.setUTCFullYear(d,0,m),v.setUTCHours(0,0,0,0);var p=We(v,e);return p}var Wr=6048e5;function qr(n,e){K(1,arguments);var t=oe(n),r=We(t,e).getTime()-Hr(t,e).getTime();return Math.round(r/Wr)+1}function N(n,e){for(var t=n<0?"-":"",r=Math.abs(n).toString();r.length<e;)r="0"+r;return t+r}var Vr={y:function(e,t){var r=e.getUTCFullYear(),i=r>0?r:1-r;return N(t==="yy"?i%100:i,t.length)},M:function(e,t){var r=e.getUTCMonth();return t==="M"?String(r+1):N(r+1,2)},d:function(e,t){return N(e.getUTCDate(),t.length)},a:function(e,t){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,t){return N(e.getUTCHours()%12||12,t.length)},H:function(e,t){return N(e.getUTCHours(),t.length)},m:function(e,t){return N(e.getUTCMinutes(),t.length)},s:function(e,t){return N(e.getUTCSeconds(),t.length)},S:function(e,t){var r=t.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return N(o,t.length)}};const ce=Vr;var ye={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Yr={G:function(e,t,r){var i=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return ce.y(e,t)},Y:function(e,t,r,i){var o=vn(e,i),s=o>0?o:1-o;if(t==="YY"){var l=s%100;return N(l,2)}return t==="Yo"?r.ordinalNumber(s,{unit:"year"}):N(s,t.length)},R:function(e,t){var r=gn(e);return N(r,t.length)},u:function(e,t){var r=e.getUTCFullYear();return N(r,t.length)},Q:function(e,t,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return N(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,t,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return N(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,t,r){var i=e.getUTCMonth();switch(t){case"M":case"MM":return ce.M(e,t);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,t,r){var i=e.getUTCMonth();switch(t){case"L":return String(i+1);case"LL":return N(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,t,r,i){var o=qr(e,i);return t==="wo"?r.ordinalNumber(o,{unit:"week"}):N(o,t.length)},I:function(e,t,r){var i=Fr(e);return t==="Io"?r.ordinalNumber(i,{unit:"week"}):N(i,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):ce.d(e,t)},D:function(e,t,r){var i=zr(e);return t==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):N(i,t.length)},E:function(e,t,r){var i=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,t,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return N(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return N(s,t.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,r){var i=e.getUTCDay(),o=i===0?7:i;switch(t){case"i":return String(o);case"ii":return N(o,t.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,t,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,r){var i=e.getUTCHours(),o;switch(i===12?o=ye.noon:i===0?o=ye.midnight:o=i/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,r){var i=e.getUTCHours(),o;switch(i>=17?o=ye.evening:i>=12?o=ye.afternoon:i>=4?o=ye.morning:o=ye.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return ce.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):ce.H(e,t)},K:function(e,t,r){var i=e.getUTCHours()%12;return t==="Ko"?r.ordinalNumber(i,{unit:"hour"}):N(i,t.length)},k:function(e,t,r){var i=e.getUTCHours();return i===0&&(i=24),t==="ko"?r.ordinalNumber(i,{unit:"hour"}):N(i,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):ce.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):ce.s(e,t)},S:function(e,t){return ce.S(e,t)},X:function(e,t,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return $t(s);case"XXXX":case"XX":return me(s);case"XXXXX":case"XXX":default:return me(s,":")}},x:function(e,t,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(t){case"x":return $t(s);case"xxxx":case"xx":return me(s);case"xxxxx":case"xxx":default:return me(s,":")}},O:function(e,t,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Et(s,":");case"OOOO":default:return"GMT"+me(s,":")}},z:function(e,t,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Et(s,":");case"zzzz":default:return"GMT"+me(s,":")}},t:function(e,t,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return N(s,t.length)},T:function(e,t,r,i){var o=i._originalDate||e,s=o.getTime();return N(s,t.length)}};function Et(n,e){var t=n>0?"-":"+",r=Math.abs(n),i=Math.floor(r/60),o=r%60;if(o===0)return t+String(i);var s=e||"";return t+String(i)+s+N(o,2)}function $t(n,e){if(n%60===0){var t=n>0?"-":"+";return t+N(Math.abs(n)/60,2)}return me(n,e)}function me(n,e){var t=e||"",r=n>0?"-":"+",i=Math.abs(n),o=N(Math.floor(i/60),2),s=N(i%60,2);return r+o+t+s}const Kr=Yr;var Tt=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},bn=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Gr=function(e,t){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return Tt(e,t);var s;switch(i){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",Tt(i,t)).replace("{{time}}",bn(o,t))},Xr={p:bn,P:Gr};const Qr=Xr;var Jr=["D","DD"],Zr=["YY","YYYY"];function ei(n){return Jr.indexOf(n)!==-1}function ti(n){return Zr.indexOf(n)!==-1}function Ot(n,e,t){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var ni={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ri=function(e,t,r){var i,o=ni[e];return typeof o=="string"?i=o:t===1?i=o.one:i=o.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};const ii=ri;function nt(n){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):n.defaultWidth,r=n.formats[t]||n.formats[n.defaultWidth];return r}}var oi={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},si={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ai={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ci={date:nt({formats:oi,defaultWidth:"full"}),time:nt({formats:si,defaultWidth:"full"}),dateTime:nt({formats:ai,defaultWidth:"full"})};const li=ci;var ui={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},di=function(e,t,r,i){return ui[e]};const hi=di;function Se(n){return function(e,t){var r=t!=null&&t.context?String(t.context):"standalone",i;if(r==="formatting"&&n.formattingValues){var o=n.defaultFormattingWidth||n.defaultWidth,s=t!=null&&t.width?String(t.width):o;i=n.formattingValues[s]||n.formattingValues[o]}else{var l=n.defaultWidth,a=t!=null&&t.width?String(t.width):n.defaultWidth;i=n.values[a]||n.values[l]}var u=n.argumentCallback?n.argumentCallback(e):e;return i[u]}}var fi={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},pi={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},mi={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},gi={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},vi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},bi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},yi=function(e,t){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},wi={ordinalNumber:yi,era:Se({values:fi,defaultWidth:"wide"}),quarter:Se({values:pi,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Se({values:mi,defaultWidth:"wide"}),day:Se({values:gi,defaultWidth:"wide"}),dayPeriod:Se({values:vi,defaultWidth:"wide",formattingValues:bi,defaultFormattingWidth:"wide"})};const _i=wi;function Ee(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.width,i=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],l=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],a=Array.isArray(l)?xi(l,function(m){return m.test(s)}):ki(l,function(m){return m.test(s)}),u;u=n.valueCallback?n.valueCallback(a):a,u=t.valueCallback?t.valueCallback(u):u;var c=e.slice(s.length);return{value:u,rest:c}}}function ki(n,e){for(var t in n)if(n.hasOwnProperty(t)&&e(n[t]))return t}function xi(n,e){for(var t=0;t<n.length;t++)if(e(n[t]))return t}function Ci(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(n.matchPattern);if(!r)return null;var i=r[0],o=e.match(n.parsePattern);if(!o)return null;var s=n.valueCallback?n.valueCallback(o[0]):o[0];s=t.valueCallback?t.valueCallback(s):s;var l=e.slice(i.length);return{value:s,rest:l}}}var Si=/^(\d+)(th|st|nd|rd)?/i,Ei=/\d+/i,$i={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ti={any:[/^b/i,/^(a|c)/i]},Oi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Pi={any:[/1/i,/2/i,/3/i,/4/i]},Ri={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ji={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Mi={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Li={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ai={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Di={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ni={ordinalNumber:Ci({matchPattern:Si,parsePattern:Ei,valueCallback:function(e){return parseInt(e,10)}}),era:Ee({matchPatterns:$i,defaultMatchWidth:"wide",parsePatterns:Ti,defaultParseWidth:"any"}),quarter:Ee({matchPatterns:Oi,defaultMatchWidth:"wide",parsePatterns:Pi,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Ee({matchPatterns:Ri,defaultMatchWidth:"wide",parsePatterns:ji,defaultParseWidth:"any"}),day:Ee({matchPatterns:Mi,defaultMatchWidth:"wide",parsePatterns:Li,defaultParseWidth:"any"}),dayPeriod:Ee({matchPatterns:Ai,defaultMatchWidth:"any",parsePatterns:Di,defaultParseWidth:"any"})};const Bi=Ni;var zi={code:"en-US",formatDistance:ii,formatLong:li,formatRelative:hi,localize:_i,match:Bi,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ii=zi;var Ui=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Fi=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Hi=/^'([^]*?)'?$/,Wi=/''/g,qi=/[a-zA-Z]/;function Vi(n,e,t){var r,i,o,s,l,a,u,c,m,d,v,p,b,_,k,$,E,S;K(2,arguments);var P=String(e),z=Qe(),H=(r=(i=t==null?void 0:t.locale)!==null&&i!==void 0?i:z.locale)!==null&&r!==void 0?r:Ii,Q=ge((o=(s=(l=(a=t==null?void 0:t.firstWeekContainsDate)!==null&&a!==void 0?a:t==null||(u=t.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&l!==void 0?l:z.firstWeekContainsDate)!==null&&s!==void 0?s:(m=z.locale)===null||m===void 0||(d=m.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(Q>=1&&Q<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var B=ge((v=(p=(b=(_=t==null?void 0:t.weekStartsOn)!==null&&_!==void 0?_:t==null||(k=t.locale)===null||k===void 0||($=k.options)===null||$===void 0?void 0:$.weekStartsOn)!==null&&b!==void 0?b:z.weekStartsOn)!==null&&p!==void 0?p:(E=z.locale)===null||E===void 0||(S=E.options)===null||S===void 0?void 0:S.weekStartsOn)!==null&&v!==void 0?v:0);if(!(B>=0&&B<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!H.localize)throw new RangeError("locale must contain localize property");if(!H.formatLong)throw new RangeError("locale must contain formatLong property");var h=oe(n);if(!Dr(h))throw new RangeError("Invalid time value");var f=Lr(h),w=Nr(h,f),T={firstWeekContainsDate:Q,weekStartsOn:B,locale:H,_originalDate:h},x=P.match(Fi).map(function(M){var A=M[0];if(A==="p"||A==="P"){var W=Qr[A];return W(M,H.formatLong)}return M}).join("").match(Ui).map(function(M){if(M==="''")return"'";var A=M[0];if(A==="'")return Yi(M);var W=Kr[A];if(W)return!(t!=null&&t.useAdditionalWeekYearTokens)&&ti(M)&&Ot(M,e,String(n)),!(t!=null&&t.useAdditionalDayOfYearTokens)&&ei(M)&&Ot(M,e,String(n)),W(w,M,H.localize,T);if(A.match(qi))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return M}).join("");return x}function Yi(n){var e=n.match(Hi);return e?e[1].replace(Wi,"'"):n}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var at=function(n,e){return at=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i])},at(n,e)};function Ki(n,e){at(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Gi(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var Xi=`.styles_scrollable-div__prSCv {\r
  max-height: inherit;\r
  height: inherit;\r
  overflow-y: auto;\r
}\r
`,Qi={"scrollable-div":"styles_scrollable-div__prSCv",scrollableDiv:"styles_scrollable-div__prSCv"};Gi(Xi);var Ji=function(n){Ki(e,n);function e(t){var r=n.call(this,t)||this;return r.bottomRef=y.createRef(),r.wrapperRef=y.createRef(),r.handleScroll=r.handleScroll.bind(r),r}return e.prototype.getSnapshotBeforeUpdate=function(){if(this.wrapperRef.current&&this.bottomRef.current){var t=this.props.viewableDetectionEpsilon;return e.isViewable(this.wrapperRef.current,this.bottomRef.current,t)}return!1},e.prototype.componentDidUpdate=function(t,r,i){var o=this.props,s=o.forceScroll,l=o.changeDetectionFilter,a=l(t,this.props);a&&(s||i)&&this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},e.prototype.componentDidMount=function(){this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},e.prototype.scrollParentToChild=function(t,r){var i=this.props.viewableDetectionEpsilon;if(!e.isViewable(t,r,i)){var o=t.getBoundingClientRect(),s=r.getBoundingClientRect(),l=s.top+t.scrollTop-o.top,a=this.props,u=a.animateScroll,c=a.onScrollComplete;u&&(u(t,l),c())}},e.isViewable=function(t,r,i){i=i||0;var o=t.getBoundingClientRect(),s=r.getBoundingClientRect(),l=s.top>=o.top,a=o.top+t.clientHeight-s.top,u=a+i>=0;return l&&u},e.prototype.handleScroll=function(){var t=this.props,r=t.viewableDetectionEpsilon,i=t.onScroll;if(i&&this.bottomRef.current&&this.wrapperRef.current){var o=e.isViewable(this.wrapperRef.current,this.bottomRef.current,r);i(o)}},e.prototype.scrollToBottom=function(){this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},e.prototype.render=function(){var t=this.props,r=t.children,i=t.className,o=Qi.scrollableDiv+(i?" "+i:"");return y.createElement("div",{className:o,ref:this.wrapperRef,onScroll:this.handleScroll},r,y.createElement("div",{ref:this.bottomRef}))},e.defaultProps={forceScroll:!1,animateScroll:function(t,r){t.scrollBy?t.scrollBy({top:r}):t.scrollTop=r},onScrollComplete:function(){},changeDetectionFilter:function(){return!0},viewableDetectionEpsilon:2,onScroll:function(){}},e}(y.Component);function Zi(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var eo=`.react-input-emoji--container {
  color: #4b4b4b;
  text-rendering: optimizeLegibility;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 21px;
  margin: 5px 10px;
  box-sizing: border-box;
  flex: 1 1 auto;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 20px;
  min-height: 20px;
  min-width: 0;
  outline: none;
  width: inherit;
  will-change: width;
  vertical-align: baseline;
  border: 1px solid #eaeaea;
  margin-right: 0;
}

.react-input-emoji--wrapper {
  display: flex;
  overflow: hidden;
  flex: 1;
  position: relative;
  padding-right: 0;
  vertical-align: baseline;
  outline: none;
  margin: 0;
  padding: 0;
  border: 0;
}

.react-input-emoji--input {
  font-weight: 400;
  max-height: 100px;
  min-height: 20px;
  outline: none;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  white-space: pre-wrap;
  word-wrap: break-word;
  z-index: 1;
  width: 100%;
  user-select: text;
  padding: 9px 12px 11px;
  text-align: left;
}

.react-input-emoji--input img {
  vertical-align: middle;
  width: 18px !important;
  height: 18px !important;
  display: inline !important;
  margin-left: 1px;
  margin-right: 1px;
}

.react-input-emoji--overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
}

.react-input-emoji--placeholder {
  color: #a0a0a0;
  pointer-events: none;
  position: absolute;
  user-select: none;
  z-index: 2;
  left: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: calc(100% - 22px);
}

.react-input-emoji--button {
  position: relative;
  display: block;
  text-align: center;
  padding: 0 10px;
  overflow: hidden;
  transition: color 0.1s ease-out;
  margin: 0;
  box-shadow: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
}

.react-input-emoji--button svg {
  fill: #858585;
}

.react-input-emoji--button__show svg {
  fill: #128b7e;
}

.react-emoji {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.react-emoji-picker--container {
  position: absolute;
  top: 0;
  width: 100%;
}

.react-emoji-picker--wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 435px;
  width: 352px;
  overflow: hidden;
  z-index: 10;
}

.react-emoji-picker {
  position: absolute;
  top: 0;
  left: 0;
  animation: slidein 0.1s ease-in-out;
}

.react-emoji-picker__show {
  top: 0;
}

.react-input-emoji--mention--container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.react-input-emoji--mention--list {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 5px;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}

.react-input-emoji--mention--item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  background-color: transparent;
  width: 100%;
  margin: 0;
  border: 0;
}

.react-input-emoji--mention--item__selected {
  background-color: #eeeeee;
}

.react-input-emoji--mention--item--img {
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

.react-input-emoji--mention--item--name {
  font-size: 16px;
  color: #333;
}

.react-input-emoji--mention--item--name__selected {
  color: green;
}

.react-input-emoji--mention--text {
  color: #039be5;
}

.react-input-emoji--mention--loading {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.react-input-emoji--mention--loading--spinner,
.react-input-emoji--mention--loading--spinner::after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.react-input-emoji--mention--loading--spinner {
  margin: 1px auto;
  font-size: 2px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 0, 0, 0.1);
  border-right: 1.1em solid rgba(0, 0, 0, 0.1);
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.1);
  border-left: 1.1em solid rgba(0, 0, 0, 0.4);
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes slidein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;Zi(eo);function Pt(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Rt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Pt(Object(t),!0).forEach(function(r){to(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Pt(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Oe(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Oe=function(){return n};var n={},e=Object.prototype,t=e.hasOwnProperty,r=typeof Symbol=="function"?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function l(h,f,w){return Object.defineProperty(h,f,{value:w,enumerable:!0,configurable:!0,writable:!0}),h[f]}try{l({},"")}catch{l=function(f,w,T){return f[w]=T}}function a(h,f,w,T){var x=f&&f.prototype instanceof m?f:m,M=Object.create(x.prototype),A=new H(T||[]);return M._invoke=function(W,J,D){var U="suspendedStart";return function(G,he){if(U==="executing")throw new Error("Generator is already running");if(U==="completed"){if(G==="throw")throw he;return B()}for(D.method=G,D.arg=he;;){var je=D.delegate;if(je){var ve=S(je,D);if(ve){if(ve===c)continue;return ve}}if(D.method==="next")D.sent=D._sent=D.arg;else if(D.method==="throw"){if(U==="suspendedStart")throw U="completed",D.arg;D.dispatchException(D.arg)}else D.method==="return"&&D.abrupt("return",D.arg);U="executing";var fe=u(W,J,D);if(fe.type==="normal"){if(U=D.done?"completed":"suspendedYield",fe.arg===c)continue;return{value:fe.arg,done:D.done}}fe.type==="throw"&&(U="completed",D.method="throw",D.arg=fe.arg)}}}(h,w,A),M}function u(h,f,w){try{return{type:"normal",arg:h.call(f,w)}}catch(T){return{type:"throw",arg:T}}}n.wrap=a;var c={};function m(){}function d(){}function v(){}var p={};l(p,i,function(){return this});var b=Object.getPrototypeOf,_=b&&b(b(Q([])));_&&_!==e&&t.call(_,i)&&(p=_);var k=v.prototype=m.prototype=Object.create(p);function $(h){["next","throw","return"].forEach(function(f){l(h,f,function(w){return this._invoke(f,w)})})}function E(h,f){function w(x,M,A,W){var J=u(h[x],h,M);if(J.type!=="throw"){var D=J.arg,U=D.value;return U&&typeof U=="object"&&t.call(U,"__await")?f.resolve(U.__await).then(function(G){w("next",G,A,W)},function(G){w("throw",G,A,W)}):f.resolve(U).then(function(G){D.value=G,A(D)},function(G){return w("throw",G,A,W)})}W(J.arg)}var T;this._invoke=function(x,M){function A(){return new f(function(W,J){w(x,M,W,J)})}return T=T?T.then(A,A):A()}}function S(h,f){var w=h.iterator[f.method];if(w===void 0){if(f.delegate=null,f.method==="throw"){if(h.iterator.return&&(f.method="return",f.arg=void 0,S(h,f),f.method==="throw"))return c;f.method="throw",f.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var T=u(w,h.iterator,f.arg);if(T.type==="throw")return f.method="throw",f.arg=T.arg,f.delegate=null,c;var x=T.arg;return x?x.done?(f[h.resultName]=x.value,f.next=h.nextLoc,f.method!=="return"&&(f.method="next",f.arg=void 0),f.delegate=null,c):x:(f.method="throw",f.arg=new TypeError("iterator result is not an object"),f.delegate=null,c)}function P(h){var f={tryLoc:h[0]};1 in h&&(f.catchLoc=h[1]),2 in h&&(f.finallyLoc=h[2],f.afterLoc=h[3]),this.tryEntries.push(f)}function z(h){var f=h.completion||{};f.type="normal",delete f.arg,h.completion=f}function H(h){this.tryEntries=[{tryLoc:"root"}],h.forEach(P,this),this.reset(!0)}function Q(h){if(h){var f=h[i];if(f)return f.call(h);if(typeof h.next=="function")return h;if(!isNaN(h.length)){var w=-1,T=function x(){for(;++w<h.length;)if(t.call(h,w))return x.value=h[w],x.done=!1,x;return x.value=void 0,x.done=!0,x};return T.next=T}}return{next:B}}function B(){return{value:void 0,done:!0}}return d.prototype=v,l(k,"constructor",v),l(v,"constructor",d),d.displayName=l(v,s,"GeneratorFunction"),n.isGeneratorFunction=function(h){var f=typeof h=="function"&&h.constructor;return!!f&&(f===d||(f.displayName||f.name)==="GeneratorFunction")},n.mark=function(h){return Object.setPrototypeOf?Object.setPrototypeOf(h,v):(h.__proto__=v,l(h,s,"GeneratorFunction")),h.prototype=Object.create(k),h},n.awrap=function(h){return{__await:h}},$(E.prototype),l(E.prototype,o,function(){return this}),n.AsyncIterator=E,n.async=function(h,f,w,T,x){x===void 0&&(x=Promise);var M=new E(a(h,f,w,T),x);return n.isGeneratorFunction(f)?M:M.next().then(function(A){return A.done?A.value:M.next()})},$(k),l(k,s,"Generator"),l(k,i,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),n.keys=function(h){var f=[];for(var w in h)f.push(w);return f.reverse(),function T(){for(;f.length;){var x=f.pop();if(x in h)return T.value=x,T.done=!1,T}return T.done=!0,T}},n.values=Q,H.prototype={constructor:H,reset:function(h){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(z),!h)for(var f in this)f.charAt(0)==="t"&&t.call(this,f)&&!isNaN(+f.slice(1))&&(this[f]=void 0)},stop:function(){this.done=!0;var h=this.tryEntries[0].completion;if(h.type==="throw")throw h.arg;return this.rval},dispatchException:function(h){if(this.done)throw h;var f=this;function w(J,D){return M.type="throw",M.arg=h,f.next=J,D&&(f.method="next",f.arg=void 0),!!D}for(var T=this.tryEntries.length-1;T>=0;--T){var x=this.tryEntries[T],M=x.completion;if(x.tryLoc==="root")return w("end");if(x.tryLoc<=this.prev){var A=t.call(x,"catchLoc"),W=t.call(x,"finallyLoc");if(A&&W){if(this.prev<x.catchLoc)return w(x.catchLoc,!0);if(this.prev<x.finallyLoc)return w(x.finallyLoc)}else if(A){if(this.prev<x.catchLoc)return w(x.catchLoc,!0)}else{if(!W)throw new Error("try statement without catch or finally");if(this.prev<x.finallyLoc)return w(x.finallyLoc)}}}},abrupt:function(h,f){for(var w=this.tryEntries.length-1;w>=0;--w){var T=this.tryEntries[w];if(T.tryLoc<=this.prev&&t.call(T,"finallyLoc")&&this.prev<T.finallyLoc){var x=T;break}}x&&(h==="break"||h==="continue")&&x.tryLoc<=f&&f<=x.finallyLoc&&(x=null);var M=x?x.completion:{};return M.type=h,M.arg=f,x?(this.method="next",this.next=x.finallyLoc,c):this.complete(M)},complete:function(h,f){if(h.type==="throw")throw h.arg;return h.type==="break"||h.type==="continue"?this.next=h.arg:h.type==="return"?(this.rval=this.arg=h.arg,this.method="return",this.next="end"):h.type==="normal"&&f&&(this.next=f),c},finish:function(h){for(var f=this.tryEntries.length-1;f>=0;--f){var w=this.tryEntries[f];if(w.finallyLoc===h)return this.complete(w.completion,w.afterLoc),z(w),c}},catch:function(h){for(var f=this.tryEntries.length-1;f>=0;--f){var w=this.tryEntries[f];if(w.tryLoc===h){var T=w.completion;if(T.type==="throw"){var x=T.arg;z(w)}return x}}throw new Error("illegal catch attempt")},delegateYield:function(h,f,w){return this.delegate={iterator:Q(h),resultName:f,nextLoc:w},this.method==="next"&&(this.arg=void 0),c}},n}function jt(n,e,t,r,i,o,s){try{var l=n[o](s),a=l.value}catch(u){t(u);return}l.done?e(a):Promise.resolve(a).then(r,i)}function Mt(n){return function(){var e=this,t=arguments;return new Promise(function(r,i){var o=n.apply(e,t);function s(a){jt(o,r,i,s,l,"next",a)}function l(a){jt(o,r,i,s,l,"throw",a)}s(void 0)})}}function to(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function no(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function ro(n,e){if(n==null)return{};var t=no(n,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function ue(n,e){return oo(n)||ao(n,e)||wn(n,e)||lo()}function yn(n){return io(n)||so(n)||wn(n)||co()}function io(n){if(Array.isArray(n))return ct(n)}function oo(n){if(Array.isArray(n))return n}function so(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ao(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],i=!0,o=!1,s,l;try{for(t=t.call(n);!(i=(s=t.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(a){o=!0,l=a}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw l}}return r}}function wn(n,e){if(n){if(typeof n=="string")return ct(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ct(n,e)}}function ct(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function co(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var uo="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";function _n(n){var e=ho(n);return e&&(e=yn(new Set(e)),e.forEach(function(t){n=kn(n,t,xn(t))})),n}function kn(n,e,t){return n.replace(new RegExp(e,"g"),t)}function ho(n){return n.match(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g)}function fo(n){var e,t=document.querySelector("em-emoji-picker");if(!t)return Lt(n.native);var r=t==null||(e=t.shadowRoot)===null||e===void 0?void 0:e.querySelector('[title="'.concat(n.name,'"] > span > span'));if(!r)return Lt(n.native);var i=kn(r.style.cssText,'"',"'");return xn(i,n.native)}function xn(n,e){return'<img style="'.concat(n,'; display: inline-block" data-emoji="').concat(e,'" src="').concat(uo,'" />')}function Lt(n){return'<span class="width: 18px; height: 18px; display: inline-block; margin: 0 1px;">'.concat(n,"</span>")}function po(n){var e=document.createElement("div");e.innerHTML=n;var t=Array.prototype.slice.call(e.querySelectorAll("img"));return t.forEach(function(r){e.innerHTML=e.innerHTML.replace(r.outerHTML,r.dataset.emoji)}),e.innerHTML}function mo(n){var e,t;if(window.getSelection){if(e=window.getSelection(),e===null)return;if(e.getRangeAt&&e.rangeCount){t=e.getRangeAt(0),t.deleteContents();var r=document.createElement("div");r.innerHTML=n;for(var i=document.createDocumentFragment(),o,s;o=r.firstChild;)s=i.appendChild(o);t.insertNode(i),s&&(t=t.cloneRange(),t.setStartAfter(s),t.collapse(!0),e.removeAllRanges(),e.addRange(t))}}}function At(n){var e=n.text,t=n.html,r=e.length,i=(t.match(/<img/g)||[]).length;return r+i}function Cn(){var n=y.useRef([]),e=y.useRef(""),t=y.useCallback(function(i){n.current.push(i)},[]),r=y.useCallback(function(i){var o=n.current.reduce(function(s,l){return l(s)},i);return o=go(o),e.current=o,o},[]);return{addSanitizeFn:t,sanitize:r,sanitizedTextRef:e}}function go(n){var e=document.createElement("div");e.innerHTML=n;var t=e.innerText||"";return t=t.replace(/\n/gi,""),t}function vo(n){var e=n.ref,t=n.textInputRef,r=n.setValue,i=n.emitChange,o=Cn(),s=o.sanitize,l=o.sanitizedTextRef;y.useImperativeHandle(e,function(){return{get value(){return l.current},set value(a){r(a)},focus:function(){t.current!==null&&t.current.focus()},blur:function(){t.current!==null&&s(t.current.html),i()}}})}function bo(n,e,t){var r=y.useRef(null),i=y.useRef(t),o=y.useCallback(function(){if(n.current!==null){var l=r.current,a=n.current.size;(!l||l.width!==a.width||l.height!==a.height)&&typeof e=="function"&&e(a),r.current=a}},[e,n]),s=y.useCallback(function(l){typeof i.current=="function"&&i.current(l),typeof e=="function"&&o()},[o,e]);return y.useEffect(function(){n.current&&o()},[o,n]),s}var yo=["placeholder","style","tabIndex","className","onChange"],wo=function(e,t){var r=e.placeholder,i=e.style,o=e.tabIndex,s=e.className,l=e.onChange,a=ro(e,yo);y.useImperativeHandle(t,function(){return{appendContent:function(b){c.current&&c.current.focus(),mo(b),c.current&&c.current.focus(),c.current&&u.current&&c.current.innerHTML.trim()===""?u.current.style.visibility="visible":u.current&&(u.current.style.visibility="hidden"),c.current&&typeof l=="function"&&l(c.current.innerHTML)},set html(p){c.current&&(c.current.innerHTML=p),u.current&&(p.trim()===""?u.current.style.visibility="visible":u.current.style.visibility="hidden"),typeof l=="function"&&c.current&&l(c.current.innerHTML)},get html(){return c.current?c.current.innerHTML:""},get text(){return c.current?c.current.innerText:""},get size(){return c.current?{width:c.current.offsetWidth,height:c.current.offsetHeight}:{width:0,height:0}},focus:function(){c.current&&c.current.focus()}}});var u=y.useRef(null),c=y.useRef(null);function m(p){p.key==="Enter"?a.onEnter(p):p.key==="ArrowUp"?a.onArrowUp(p):p.key==="ArrowDown"?a.onArrowDown(p):p.key.length===1&&u.current&&(u.current.style.visibility="hidden"),a.onKeyDown(p)}function d(){a.onFocus()}function v(p){a.onKeyUp(p);var b=c.current;if(u.current){var _;(b==null||(_=b.innerText)===null||_===void 0?void 0:_.trim())===""?u.current.style.visibility="visible":u.current.style.visibility="hidden"}typeof l=="function"&&c.current&&l(c.current.innerHTML)}return R.createElement("div",{className:"react-input-emoji--container",style:i},R.createElement("div",{className:"react-input-emoji--wrapper",onClick:d},R.createElement("div",{ref:u,className:"react-input-emoji--placeholder"},r),R.createElement("div",{ref:c,onKeyDown:m,onKeyUp:v,tabIndex:o,contentEditable:!0,className:"react-input-emoji--input".concat(s?" ".concat(s):""),onBlur:a.onBlur,onCopy:a.onCopy,onPaste:a.onPaste,"data-testid":"react-input-emoji--input"})))},_o=y.forwardRef(wo);function Dt(n){var e=n.showPicker,t=n.toggleShowPicker,r=n.buttonElement,i=y.useRef(null),o=y.useState(!1),s=ue(o,2),l=s[0],a=s[1];return y.useEffect(function(){var u,c;((u=r==null||(c=r.childNodes)===null||c===void 0?void 0:c.length)!==null&&u!==void 0?u:0)>2&&(i.current.appendChild(r==null?void 0:r.childNodes[0]),a(!0))},[r==null?void 0:r.childNodes]),R.createElement("button",{ref:i,type:"button",className:"react-input-emoji--button".concat(e?" react-input-emoji--button__show":""),onClick:t},!l&&R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",className:"react-input-emoji--button--icon"},R.createElement("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),R.createElement("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})))}function Sn(n){return n&&n.__esModule?n.default:n}function Z(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Je,C,En,Re,$n,Nt,qe={},Tn=[],ko=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function le(n,e){for(var t in e)n[t]=e[t];return n}function On(n){var e=n.parentNode;e&&e.removeChild(n)}function lt(n,e,t){var r,i,o,s={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?Je.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(o in n.defaultProps)s[o]===void 0&&(s[o]=n.defaultProps[o]);return Be(n,s,r,i,null)}function Be(n,e,t,r,i){var o={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++En};return i==null&&C.vnode!=null&&C.vnode(o),o}function se(){return{current:null}}function ke(n){return n.children}function ne(n,e){this.props=n,this.context=e}function xe(n,e){if(e==null)return n.__?xe(n.__,n.__.__k.indexOf(n)+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?xe(n):null}function Pn(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Pn(n)}}function Bt(n){(!n.__d&&(n.__d=!0)&&Re.push(n)&&!Ve.__r++||Nt!==C.debounceRendering)&&((Nt=C.debounceRendering)||$n)(Ve)}function Ve(){for(var n;Ve.__r=Re.length;)n=Re.sort(function(e,t){return e.__v.__b-t.__v.__b}),Re=[],n.some(function(e){var t,r,i,o,s,l;e.__d&&(s=(o=(t=e).__v).__e,(l=t.__P)&&(r=[],(i=le({},o)).__v=o.__v+1,_t(l,o,i,t.__n,l.ownerSVGElement!==void 0,o.__h!=null?[s]:null,r,s??xe(o),o.__h),Ln(r,o),o.__e!=s&&Pn(o)))})}function Rn(n,e,t,r,i,o,s,l,a,u){var c,m,d,v,p,b,_,k=r&&r.__k||Tn,$=k.length;for(t.__k=[],c=0;c<e.length;c++)if((v=t.__k[c]=(v=e[c])==null||typeof v=="boolean"?null:typeof v=="string"||typeof v=="number"||typeof v=="bigint"?Be(null,v,null,null,v):Array.isArray(v)?Be(ke,{children:v},null,null,null):v.__b>0?Be(v.type,v.props,v.key,null,v.__v):v)!=null){if(v.__=t,v.__b=t.__b+1,(d=k[c])===null||d&&v.key==d.key&&v.type===d.type)k[c]=void 0;else for(m=0;m<$;m++){if((d=k[m])&&v.key==d.key&&v.type===d.type){k[m]=void 0;break}d=null}_t(n,v,d=d||qe,i,o,s,l,a,u),p=v.__e,(m=v.ref)&&d.ref!=m&&(_||(_=[]),d.ref&&_.push(d.ref,null,v),_.push(m,v.__c||p,v)),p!=null?(b==null&&(b=p),typeof v.type=="function"&&v.__k===d.__k?v.__d=a=jn(v,a,n):a=Mn(n,v,d,k,p,a),typeof t.type=="function"&&(t.__d=a)):a&&d.__e==a&&a.parentNode!=n&&(a=xe(d))}for(t.__e=b,c=$;c--;)k[c]!=null&&(typeof t.type=="function"&&k[c].__e!=null&&k[c].__e==t.__d&&(t.__d=xe(r,c+1)),Dn(k[c],k[c]));if(_)for(c=0;c<_.length;c++)An(_[c],_[++c],_[++c])}function jn(n,e,t){for(var r,i=n.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=n,e=typeof r.type=="function"?jn(r,e,t):Mn(t,r,r,i,r.__e,e));return e}function Ye(n,e){return e=e||[],n==null||typeof n=="boolean"||(Array.isArray(n)?n.some(function(t){Ye(t,e)}):e.push(n)),e}function Mn(n,e,t,r,i,o){var s,l,a;if(e.__d!==void 0)s=e.__d,e.__d=void 0;else if(t==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==n)n.appendChild(i),s=null;else{for(l=o,a=0;(l=l.nextSibling)&&a<r.length;a+=2)if(l==i)break e;n.insertBefore(i,o),s=o}return s!==void 0?s:i.nextSibling}function xo(n,e,t,r,i){var o;for(o in t)o==="children"||o==="key"||o in e||Ke(n,o,null,t[o],r);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===e[o]||Ke(n,o,e[o],t[o],r)}function zt(n,e,t){e[0]==="-"?n.setProperty(e,t):n[e]=t==null?"":typeof t!="number"||ko.test(e)?t:t+"px"}function Ke(n,e,t,r,i){var o;e:if(e==="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||zt(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||zt(n.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+o]=t,t?r||n.addEventListener(e,o?Ut:It,o):n.removeEventListener(e,o?Ut:It,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||e[0]==="a"&&e[1]==="r")?n.setAttribute(e,t):n.removeAttribute(e))}}function It(n){this.l[n.type+!1](C.event?C.event(n):n)}function Ut(n){this.l[n.type+!0](C.event?C.event(n):n)}function _t(n,e,t,r,i,o,s,l,a){var u,c,m,d,v,p,b,_,k,$,E,S=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(a=t.__h,l=e.__e=t.__e,e.__h=null,o=[l]),(u=C.__b)&&u(e);try{e:if(typeof S=="function"){if(_=e.props,k=(u=S.contextType)&&r[u.__c],$=u?k?k.props.value:u.__:r,t.__c?b=(c=e.__c=t.__c).__=c.__E:("prototype"in S&&S.prototype.render?e.__c=c=new S(_,$):(e.__c=c=new ne(_,$),c.constructor=S,c.render=So),k&&k.sub(c),c.props=_,c.state||(c.state={}),c.context=$,c.__n=r,m=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),S.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=le({},c.__s)),le(c.__s,S.getDerivedStateFromProps(_,c.__s))),d=c.props,v=c.state,m)S.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(S.getDerivedStateFromProps==null&&_!==d&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(_,$),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(_,c.__s,$)===!1||e.__v===t.__v){c.props=_,c.state=c.__s,e.__v!==t.__v&&(c.__d=!1),c.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(P){P&&(P.__=e)}),c.__h.length&&s.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(_,c.__s,$),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(d,v,p)})}c.context=$,c.props=_,c.state=c.__s,(u=C.__r)&&u(e),c.__d=!1,c.__v=e,c.__P=n,u=c.render(c.props,c.state,c.context),c.state=c.__s,c.getChildContext!=null&&(r=le(le({},r),c.getChildContext())),m||c.getSnapshotBeforeUpdate==null||(p=c.getSnapshotBeforeUpdate(d,v)),E=u!=null&&u.type===ke&&u.key==null?u.props.children:u,Rn(n,Array.isArray(E)?E:[E],e,t,r,i,o,s,l,a),c.base=e.__e,e.__h=null,c.__h.length&&s.push(c),b&&(c.__E=c.__=null),c.__e=!1}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Co(t.__e,e,t,r,i,o,s,a);(u=C.diffed)&&u(e)}catch(P){e.__v=null,(a||o!=null)&&(e.__e=l,e.__h=!!a,o[o.indexOf(l)]=null),C.__e(P,e,t)}}function Ln(n,e){C.__c&&C.__c(e,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(r){r.call(t)})}catch(r){C.__e(r,t.__v)}})}function Co(n,e,t,r,i,o,s,l){var a,u,c,m=t.props,d=e.props,v=e.type,p=0;if(v==="svg"&&(i=!0),o!=null){for(;p<o.length;p++)if((a=o[p])&&"setAttribute"in a==!!v&&(v?a.localName===v:a.nodeType===3)){n=a,o[p]=null;break}}if(n==null){if(v===null)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),o=null,l=!1}if(v===null)m===d||l&&n.data===d||(n.data=d);else{if(o=o&&Je.call(n.childNodes),u=(m=t.props||qe).dangerouslySetInnerHTML,c=d.dangerouslySetInnerHTML,!l){if(o!=null)for(m={},p=0;p<n.attributes.length;p++)m[n.attributes[p].name]=n.attributes[p].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===n.innerHTML)||(n.innerHTML=c&&c.__html||""))}if(xo(n,d,m,i,l),c)e.__k=[];else if(p=e.props.children,Rn(n,Array.isArray(p)?p:[p],e,t,r,i&&v!=="foreignObject",o,s,o?o[0]:t.__k&&xe(t,0),l),o!=null)for(p=o.length;p--;)o[p]!=null&&On(o[p]);l||("value"in d&&(p=d.value)!==void 0&&(p!==m.value||p!==n.value||v==="progress"&&!p)&&Ke(n,"value",p,m.value,!1),"checked"in d&&(p=d.checked)!==void 0&&p!==n.checked&&Ke(n,"checked",p,m.checked,!1))}return n}function An(n,e,t){try{typeof n=="function"?n(e):n.current=e}catch(r){C.__e(r,t)}}function Dn(n,e,t){var r,i;if(C.unmount&&C.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||An(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){C.__e(o,e)}r.base=r.__P=null}if(r=n.__k)for(i=0;i<r.length;i++)r[i]&&Dn(r[i],e,typeof n.type!="function");t||n.__e==null||On(n.__e),n.__e=n.__d=void 0}function So(n,e,t){return this.constructor(n,t)}function Nn(n,e,t){var r,i,o;C.__&&C.__(n,e),i=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],_t(e,n=(!r&&t||e).__k=lt(ke,null,[n]),i||qe,qe,e.ownerSVGElement!==void 0,!r&&t?[t]:i?null:e.firstChild?Je.call(e.childNodes):null,o,!r&&t?t:i?i.__e:e.firstChild,r),Ln(o,n)}Je=Tn.slice,C={__e:function(n,e){for(var t,r,i;e=e.__;)if((t=e.__c)&&!t.__)try{if((r=t.constructor)&&r.getDerivedStateFromError!=null&&(t.setState(r.getDerivedStateFromError(n)),i=t.__d),t.componentDidCatch!=null&&(t.componentDidCatch(n),i=t.__d),i)return t.__E=t}catch(o){n=o}throw n}},En=0,ne.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=le({},this.state),typeof n=="function"&&(n=n(le({},t),this.props)),n&&le(t,n),n!=null&&this.__v&&(e&&this.__h.push(e),Bt(this))},ne.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Bt(this))},ne.prototype.render=ke,Re=[],$n=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ve.__r=0;var Eo=0;function g(n,e,t,r,i){var o,s,l={};for(s in e)s=="ref"?o=e[s]:l[s]=e[s];var a={type:n,props:l,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Eo,__source:r,__self:i};if(typeof n=="function"&&(o=n.defaultProps))for(s in o)l[s]===void 0&&(l[s]=o[s]);return C.vnode&&C.vnode(a),a}function $o(n,e){try{window.localStorage[`emoji-mart.${n}`]=JSON.stringify(e)}catch{}}function To(n){try{const e=window.localStorage[`emoji-mart.${n}`];if(e)return JSON.parse(e)}catch{}}var de={set:$o,get:To};const rt=new Map,Oo=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function Po(){for(const{v:n,emoji:e}of Oo)if(Bn(e))return n}function Ro(){return!Bn("🇨🇦")}function Bn(n){if(rt.has(n))return rt.get(n);const e=jo(n);return rt.set(n,e),e}const jo=(()=>{let n=null;try{navigator.userAgent.includes("jsdom")||(n=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!n)return()=>!1;const e=25,t=20,r=Math.floor(e/2);return n.font=r+"px Arial, Sans-Serif",n.textBaseline="top",n.canvas.width=t*2,n.canvas.height=e,i=>{n.clearRect(0,0,t*2,e),n.fillStyle="#FF0000",n.fillText(i,0,22),n.fillStyle="#0000FF",n.fillText(i,t,22);const o=n.getImageData(0,0,t,e).data,s=o.length;let l=0;for(;l<s&&!o[l+3];l+=4);if(l>=s)return!1;const a=t+l/4%t,u=Math.floor(l/4/t),c=n.getImageData(a,u,1,1).data;return!(o[l]!==c[0]||o[l+2]!==c[2]||n.measureText(i).width>=t)}})();var Ft={latestVersion:Po,noCountryFlags:Ro};const ut=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let q=null;function Mo(n){q||(q=de.get("frequently")||{});const e=n.id||n;e&&(q[e]||(q[e]=0),q[e]+=1,de.set("last",e),de.set("frequently",q))}function Lo({maxFrequentRows:n,perLine:e}){if(!n)return[];q||(q=de.get("frequently"));let t=[];if(!q){q={};for(let o in ut.slice(0,e)){const s=ut[o];q[s]=e-o,t.push(s)}return t}const r=n*e,i=de.get("last");for(let o in q)t.push(o);if(t.sort((o,s)=>{const l=q[s],a=q[o];return l==a?o.localeCompare(s):l-a}),t.length>r){const o=t.slice(r);t=t.slice(0,r);for(let s of o)s!=i&&delete q[s];i&&t.indexOf(i)==-1&&(delete q[t[t.length-1]],t.splice(-1,1,i)),de.set("frequently",q)}return t}var zn={add:Mo,get:Lo,DEFAULTS:ut},In={};In=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var ae={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Y=null,j=null;const it={};async function Ht(n){if(it[n])return it[n];const t=await(await fetch(n)).json();return it[n]=t,t}let ot=null,Un=null,Fn=!1;function Ze(n,{caller:e}={}){return ot||(ot=new Promise(t=>{Un=t})),n?Ao(n):e&&!Fn&&console.warn(`\`${e}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),ot}async function Ao(n){Fn=!0;let{emojiVersion:e,set:t,locale:r}=n;if(e||(e=ae.emojiVersion.value),t||(t=ae.set.value),r||(r=ae.locale.value),j)j.categories=j.categories.filter(a=>!a.name);else{j=(typeof n.data=="function"?await n.data():n.data)||await Ht(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${e}/${t}.json`),j.emoticons={},j.natives={},j.categories.unshift({id:"frequent",emojis:[]});for(const a in j.aliases){const u=j.aliases[a],c=j.emojis[u];c&&(c.aliases||(c.aliases=[]),c.aliases.push(a))}j.originalCategories=j.categories}if(Y=(typeof n.i18n=="function"?await n.i18n():n.i18n)||(r=="en"?Sn(In):await Ht(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${r}.json`)),n.custom)for(let a in n.custom){a=parseInt(a);const u=n.custom[a],c=n.custom[a-1];if(!(!u.emojis||!u.emojis.length)){u.id||(u.id=`custom_${a+1}`),u.name||(u.name=Y.categories.custom),c&&!u.icon&&(u.target=c.target||c),j.categories.push(u);for(const m of u.emojis)j.emojis[m.id]=m}}n.categories&&(j.categories=j.originalCategories.filter(a=>n.categories.indexOf(a.id)!=-1).sort((a,u)=>{const c=n.categories.indexOf(a.id),m=n.categories.indexOf(u.id);return c-m}));let i=null,o=null;t=="native"&&(i=Ft.latestVersion(),o=n.noCountryFlags||Ft.noCountryFlags());let s=j.categories.length,l=!1;for(;s--;){const a=j.categories[s];if(a.id=="frequent"){let{maxFrequentRows:m,perLine:d}=n;m=m>=0?m:ae.maxFrequentRows.value,d||(d=ae.perLine.value),a.emojis=zn.get({maxFrequentRows:m,perLine:d})}if(!a.emojis||!a.emojis.length){j.categories.splice(s,1);continue}const{categoryIcons:u}=n;if(u){const m=u[a.id];m&&!a.icon&&(a.icon=m)}let c=a.emojis.length;for(;c--;){const m=a.emojis[c],d=m.id?m:j.emojis[m],v=()=>{a.emojis.splice(c,1)};if(!d||n.exceptEmojis&&n.exceptEmojis.includes(d.id)){v();continue}if(i&&d.version>i){v();continue}if(o&&a.id=="flags"&&!Io.includes(d.id)){v();continue}if(!d.search){if(l=!0,d.search=","+[[d.id,!1],[d.name,!0],[d.keywords,!1],[d.emoticons,!1]].map(([b,_])=>{if(b)return(Array.isArray(b)?b:[b]).map(k=>(_?k.split(/[-|_|\s]+/):[k]).map($=>$.toLowerCase())).flat()}).flat().filter(b=>b&&b.trim()).join(","),d.emoticons)for(const b of d.emoticons)j.emoticons[b]||(j.emoticons[b]=d.id);let p=0;for(const b of d.skins){if(!b)continue;p++;const{native:_}=b;_&&(j.natives[_]=d.id,d.search+=`,${_}`);const k=p==1?"":`:skin-tone-${p}:`;b.shortcodes=`:${d.id}:${k}`}}}}l&&_e.reset(),Un()}function Hn(n,e,t){n||(n={});const r={};for(let i in e)r[i]=Wn(i,n,e,t);return r}function Wn(n,e,t,r){const i=t[n];let o=r&&r.getAttribute(n)||(e[n]!=null&&e[n]!=null?e[n]:null);return i&&(o!=null&&i.value&&typeof i.value!=typeof o&&(typeof i.value=="boolean"?o=o!="false":o=i.value.constructor(o)),i.transform&&o&&(o=i.transform(o)),(o==null||i.choices&&i.choices.indexOf(o)==-1)&&(o=i.value)),o}const Do=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let dt=null;function No(n){return n.id?n:j.emojis[n]||j.emojis[j.aliases[n]]||j.emojis[j.natives[n]]}function Bo(){dt=null}async function zo(n,{maxResults:e,caller:t}={}){if(!n||!n.trim().length)return null;e||(e=90),await Ze(null,{caller:t||"SearchIndex.search"});const r=n.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((l,a,u)=>l.trim()&&u.indexOf(l)==a);if(!r.length)return;let i=dt||(dt=Object.values(j.emojis)),o,s;for(const l of r){if(!i.length)break;o=[],s={};for(const a of i){if(!a.search)continue;const u=a.search.indexOf(`,${l}`);u!=-1&&(o.push(a),s[a.id]||(s[a.id]=0),s[a.id]+=a.id==l?0:u+1)}i=o}return o.length<2||(o.sort((l,a)=>{const u=s[l.id],c=s[a.id];return u==c?l.id.localeCompare(a.id):u-c}),o.length>e&&(o=o.slice(0,e))),o}var _e={search:zo,get:No,reset:Bo,SHORTCODES_REGEX:Do};const Io=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function Uo(n,e){return Array.isArray(n)&&Array.isArray(e)&&n.length===e.length&&n.every((t,r)=>t==e[r])}async function Fo(n=1){for(let e in[...Array(n).keys()])await new Promise(requestAnimationFrame)}function Ho(n,{skinIndex:e=0}={}){const t=n.skins[e]||(()=>(e=0,n.skins[e]))(),r={id:n.id,name:n.name,native:t.native,unified:t.unified,keywords:n.keywords,shortcodes:t.shortcodes||n.shortcodes};return n.skins.length>1&&(r.skin=e+1),t.src&&(r.src=t.src),n.aliases&&n.aliases.length&&(r.aliases=n.aliases),n.emoticons&&n.emoticons.length&&(r.emoticons=n.emoticons),r}const Wo={activity:{outline:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:g("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:g("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:g("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:g("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:g("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:g("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:g("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[g("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),g("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:g("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[g("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),g("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:g("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[g("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),g("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:g("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[g("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),g("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:g("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[g("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),g("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:g("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:g("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:g("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},qo={loupe:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:g("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:g("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Ge={categories:Wo,search:qo};function ht(n){let{id:e,skin:t,emoji:r}=n;if(n.shortcodes){const l=n.shortcodes.match(_e.SHORTCODES_REGEX);l&&(e=l[1],l[2]&&(t=l[2]))}if(r||(r=_e.get(e||n.native)),!r)return n.fallback;const i=r.skins[t-1]||r.skins[0],o=i.src||(n.set!="native"&&!n.spritesheet?typeof n.getImageURL=="function"?n.getImageURL(n.set,i.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${n.set}@14.0.0/img/${n.set}/64/${i.unified}.png`:void 0),s=typeof n.getSpritesheetURL=="function"?n.getSpritesheetURL(n.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${n.set}@14.0.0/img/${n.set}/sheets-256/64.png`;return g("span",{class:"emoji-mart-emoji","data-emoji-set":n.set,children:o?g("img",{style:{maxWidth:n.size||"1em",maxHeight:n.size||"1em",display:"inline-block"},alt:i.native||i.shortcodes,src:o}):n.set=="native"?g("span",{style:{fontSize:n.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:i.native}):g("span",{style:{display:"block",width:n.size,height:n.size,backgroundImage:`url(${s})`,backgroundSize:`${100*j.sheet.cols}% ${100*j.sheet.rows}%`,backgroundPosition:`${100/(j.sheet.cols-1)*i.x}% ${100/(j.sheet.rows-1)*i.y}%`}})})}const Vo=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class qn extends Vo{static get observedAttributes(){return Object.keys(this.Props)}update(e={}){for(let t in e)this.attributeChangedCallback(t,null,e[t])}attributeChangedCallback(e,t,r){if(!this.component)return;const i=Wn(e,{[e]:r},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[e]:i}):(this.component.props[e]=i,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(e={}){if(super(),this.props=e,e.parent||e.ref){let t=null;const r=e.parent||(t=e.ref&&e.ref.current);t&&(t.innerHTML=""),r&&r.appendChild(this)}}}class Yo extends qn{setShadow(){this.attachShadow({mode:"open"})}injectStyles(e){if(!e)return;const t=document.createElement("style");t.textContent=e,this.shadowRoot.insertBefore(t,this.shadowRoot.firstChild)}constructor(e,{styles:t}={}){super(e),this.setShadow(),this.injectStyles(t)}}var Vn={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:n=>/\D/.test(n)?n:`${n}px`},set:ae.set,skin:ae.skin};class Yn extends qn{async connectedCallback(){const e=Hn(this.props,Vn,this);e.element=this,e.ref=t=>{this.component=t},await Ze(),!this.disconnected&&Nn(g(ht,{...e}),this)}constructor(e){super(e)}}Z(Yn,"Props",Vn);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Yn);var Wt,ft=[],qt=C.__b,Vt=C.__r,Yt=C.diffed,Kt=C.__c,Gt=C.unmount;function Ko(){var n;for(ft.sort(function(e,t){return e.__v.__b-t.__v.__b});n=ft.pop();)if(n.__P)try{n.__H.__h.forEach(ze),n.__H.__h.forEach(pt),n.__H.__h=[]}catch(e){n.__H.__h=[],C.__e(e,n.__v)}}C.__b=function(n){qt&&qt(n)},C.__r=function(n){Vt&&Vt(n);var e=n.__c.__H;e&&(e.__h.forEach(ze),e.__h.forEach(pt),e.__h=[])},C.diffed=function(n){Yt&&Yt(n);var e=n.__c;e&&e.__H&&e.__H.__h.length&&(ft.push(e)!==1&&Wt===C.requestAnimationFrame||((Wt=C.requestAnimationFrame)||function(t){var r,i=function(){clearTimeout(o),Xt&&cancelAnimationFrame(r),setTimeout(t)},o=setTimeout(i,100);Xt&&(r=requestAnimationFrame(i))})(Ko))},C.__c=function(n,e){e.some(function(t){try{t.__h.forEach(ze),t.__h=t.__h.filter(function(r){return!r.__||pt(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],C.__e(r,t.__v)}}),Kt&&Kt(n,e)},C.unmount=function(n){Gt&&Gt(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{ze(r)}catch(i){e=i}}),e&&C.__e(e,t.__v))};var Xt=typeof requestAnimationFrame=="function";function ze(n){var e=n.__c;typeof e=="function"&&(n.__c=void 0,e())}function pt(n){n.__c=n.__()}function Go(n,e){for(var t in e)n[t]=e[t];return n}function Qt(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var r in e)if(r!=="__source"&&n[r]!==e[r])return!0;return!1}function Xe(n){this.props=n}(Xe.prototype=new ne).isPureReactComponent=!0,Xe.prototype.shouldComponentUpdate=function(n,e){return Qt(this.props,n)||Qt(this.state,e)};var Jt=C.__b;C.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),Jt&&Jt(n)};var Xo=C.__e;C.__e=function(n,e,t){if(n.then){for(var r,i=e;i=i.__;)if((r=i.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(n,e)}Xo(n,e,t)};var Zt=C.unmount;function st(){this.__u=0,this.t=null,this.__b=null}function Kn(n){var e=n.__.__c;return e&&e.__e&&e.__e(n)}function Le(){this.u=null,this.o=null}C.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&n.__h===!0&&(n.type=null),Zt&&Zt(n)},(st.prototype=new ne).__c=function(n,e){var t=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(t);var i=Kn(r.__v),o=!1,s=function(){o||(o=!0,t.__R=null,i?i(l):l())};t.__R=s;var l=function(){if(!--r.__u){if(r.state.__e){var u=r.state.__e;r.__v.__k[0]=function m(d,v,p){return d&&(d.__v=null,d.__k=d.__k&&d.__k.map(function(b){return m(b,v,p)}),d.__c&&d.__c.__P===v&&(d.__e&&p.insertBefore(d.__e,d.__d),d.__c.__e=!0,d.__c.__P=p)),d}(u,u.__c.__P,u.__c.__O)}var c;for(r.setState({__e:r.__b=null});c=r.t.pop();)c.forceUpdate()}},a=e.__h===!0;r.__u++||a||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(s,s)},st.prototype.componentWillUnmount=function(){this.t=[]},st.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function o(s,l,a){return s&&(s.__c&&s.__c.__H&&(s.__c.__H.__.forEach(function(u){typeof u.__c=="function"&&u.__c()}),s.__c.__H=null),(s=Go({},s)).__c!=null&&(s.__c.__P===a&&(s.__c.__P=l),s.__c=null),s.__k=s.__k&&s.__k.map(function(u){return o(u,l,a)})),s}(this.__b,t,r.__O=r.__P)}this.__b=null}var i=e.__e&&lt(ke,null,n.fallback);return i&&(i.__h=null),[lt(ke,null,e.__e?null:n.children),i]};var en=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};(Le.prototype=new ne).__e=function(n){var e=this,t=Kn(e.__v),r=e.o.get(n);return r[0]++,function(i){var o=function(){e.props.revealOrder?(r.push(i),en(e,n,r)):i()};t?t(o):o()}},Le.prototype.render=function(n){this.u=null,this.o=new Map;var e=Ye(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},Le.prototype.componentDidUpdate=Le.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(e,t){en(n,t,e)})};var Qo=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Jo=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Zo=typeof document<"u",es=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(n)};ne.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(ne.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var tn=C.event;function ts(){}function ns(){return this.cancelBubble}function rs(){return this.defaultPrevented}C.event=function(n){return tn&&(n=tn(n)),n.persist=ts,n.isPropagationStopped=ns,n.isDefaultPrevented=rs,n.nativeEvent=n};var nn={configurable:!0,get:function(){return this.class}},rn=C.vnode;C.vnode=function(n){var e=n.type,t=n.props,r=t;if(typeof e=="string"){var i=e.indexOf("-")===-1;for(var o in r={},t){var s=t[o];Zo&&o==="children"&&e==="noscript"||o==="value"&&"defaultValue"in t&&s==null||(o==="defaultValue"&&"value"in t&&t.value==null?o="value":o==="download"&&s===!0?s="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+e)&&!es(t.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():i&&Jo.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():s===null&&(s=void 0),r[o]=s)}e=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=Ye(t.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),e=="select"&&r.defaultValue!=null&&(r.value=Ye(t.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),n.props=r,t.class!=t.className&&(nn.enumerable="className"in t,t.className!=null&&(r.class=t.className),Object.defineProperty(r,"className",nn))}n.$$typeof=Qo,rn&&rn(n)};var on=C.__r;C.__r=function(n){on&&on(n),n.__c};const is={light:"outline",dark:"solid"};class os extends Xe{renderIcon(e){const{icon:t}=e;if(t){if(t.svg)return g("span",{class:"flex",dangerouslySetInnerHTML:{__html:t.svg}});if(t.src)return g("img",{src:t.src})}const r=Ge.categories[e.id]||Ge.categories.custom,i=this.props.icons=="auto"?is[this.props.theme]:this.props.icons;return r[i]||r}render(){let e=null;return g("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:g("div",{class:"flex relative",children:[this.categories.map((t,r)=>{const i=t.name||Y.categories[t.id],o=!this.props.unfocused&&t.id==this.state.categoryId;return o&&(e=r),g("button",{"aria-label":i,"aria-selected":o||void 0,title:i,type:"button",class:"flex flex-grow flex-center",onMouseDown:s=>s.preventDefault(),onClick:()=>{this.props.onClick({category:t,i:r})},children:this.renderIcon(t)})}),g("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:e==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${e*100}%)`:`translateX(${e*100}%)`}})]})})}constructor(){super(),this.categories=j.categories.filter(e=>!e.target),this.state={categoryId:this.categories[0].id}}}class ss extends Xe{shouldComponentUpdate(e){for(let t in e)if(t!="children"&&e[t]!=this.props[t])return!0;return!1}render(){return this.props.children}}const Ae={rowsPerRender:10};class as extends ne{getInitialState(e=this.props){return{skin:de.get("skin")||e.skin,theme:this.initTheme(e.theme)}}componentWillMount(){this.dir=Y.rtl?"rtl":"ltr",this.refs={menu:se(),navigation:se(),scroll:se(),search:se(),searchInput:se(),skinToneButton:se(),skinToneRadio:se()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:e}=this.refs;e.current&&e.current.focus()}}componentWillReceiveProps(e){this.nextState||(this.nextState={});for(const t in e)this.nextState[t]=e[t];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let t=!1;for(const i in this.nextState)this.props[i]=this.nextState[i],(i==="custom"||i==="categories")&&(t=!0);delete this.nextState;const r=this.getInitialState();if(t)return this.reset(r);this.setState(r)})}componentWillUnmount(){this.unregister()}async reset(e={}){await Ze(this.props),this.initGrid(),this.unobserve(),this.setState(e,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:e=[]}={}){Array.isArray(e)||(e=[e]);for(const t of this.observers)e.includes(t)||t.disconnect();this.observers=[].concat(e)}initGrid(){const{categories:e}=j;this.refs.categories=new Map;const t=j.categories.map(i=>i.id).join(",");this.navKey&&this.navKey!=t&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=t,this.grid=[],this.grid.setsize=0;const r=(i,o)=>{const s=[];s.__categoryId=o.id,s.__index=i.length,this.grid.push(s);const l=this.grid.length-1,a=l%Ae.rowsPerRender?{}:se();return a.index=l,a.posinset=this.grid.setsize+1,i.push(a),s};for(let i of e){const o=[];let s=r(o,i);for(let l of i.emojis)s.length==this.getPerLine()&&(s=r(o,i)),this.grid.setsize+=1,s.push(l);this.refs.categories.set(i.id,{root:se(),rows:o})}}initTheme(e){if(e!="auto")return e;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(e=this.props){if(!e.dynamicWidth)return;const{element:t,emojiButtonSize:r}=e,i=()=>{const{width:s}=t.getBoundingClientRect();return Math.floor(s/r)},o=new ResizeObserver(()=>{this.unobserve({except:o}),this.setState({perLine:i()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return o.observe(t),this.observers.push(o),i()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([e,t]){const r=this.state.searchResults||this.grid,i=r[e]&&r[e][t];if(i)return _e.get(i)}observeCategories(){const e=this.refs.navigation.current;if(!e)return;const t=new Map,r=s=>{s!=e.state.categoryId&&e.setState({categoryId:s})},i={root:this.refs.scroll.current,threshold:[0,1]},o=new IntersectionObserver(s=>{for(const a of s){const u=a.target.dataset.id;t.set(u,a.intersectionRatio)}const l=[...t];for(const[a,u]of l)if(u){r(a);break}},i);for(const{root:s}of this.refs.categories.values())o.observe(s.current);this.observers.push(o)}observeRows(){const e={...this.state.visibleRows},t=new IntersectionObserver(r=>{for(const i of r){const o=parseInt(i.target.dataset.index);i.isIntersecting?e[o]=!0:delete e[o]}this.setState({visibleRows:e})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(Ae.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*Ae.rowsPerRender}px`});for(const{rows:r}of this.refs.categories.values())for(const i of r)i.current&&t.observe(i.current);this.observers.push(t)}preventDefault(e){e.preventDefault()}unfocusSearch(){const e=this.refs.searchInput.current;e&&e.blur()}navigate({e,input:t,left:r,right:i,up:o,down:s}){const l=this.state.searchResults||this.grid;if(!l.length)return;let[a,u]=this.state.pos;const c=(()=>{if(a==0&&u==0&&!e.repeat&&(r||o))return null;if(a==-1)return!e.repeat&&(i||s)&&t.selectionStart==t.value.length?[0,0]:null;if(r||i){let m=l[a];const d=r?-1:1;if(u+=d,!m[u]){if(a+=d,m=l[a],!m)return a=r?0:l.length-1,u=r?0:l[a].length-1,[a,u];u=r?m.length-1:0}return[a,u]}if(o||s){a+=o?-1:1;const m=l[a];return m?(m[u]||(u=m.length-1),[a,u]):(a=o?0:l.length-1,u=o?0:l[a].length-1,[a,u])}})();if(c)e.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:c,keyboard:!0},()=>{this.scrollTo({row:c[0]})})}scrollTo({categoryId:e,row:t}){const r=this.state.searchResults||this.grid;if(!r.length)return;const i=this.refs.scroll.current,o=i.getBoundingClientRect();let s=0;if(t>=0&&(e=r[t].__categoryId),e&&(s=(this.refs[e]||this.refs.categories.get(e).root).current.getBoundingClientRect().top-(o.top-i.scrollTop)+1),t>=0)if(!t)s=0;else{const l=r[t].__index,a=s+l*this.props.emojiButtonSize,u=a+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(a<i.scrollTop)s=a;else if(u>i.scrollTop+o.height)s=u-o.height;else return}this.ignoreMouse(),i.scrollTop=s}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(e){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:e||[-1,-1],keyboard:!1})}handleEmojiClick({e,emoji:t,pos:r}){if(this.props.onEmojiSelect&&(!t&&r&&(t=this.getEmojiByPos(r)),t)){const i=Ho(t,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&zn.add(i,this.props),this.props.onEmojiSelect(i,e)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(e){this.setState({tempSkin:e})}handleSkinClick(e){this.ignoreMouse(),this.closeSkins(),this.setState({skin:e,tempSkin:null}),de.set("skin",e)}renderNav(){return g(os,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const e=this.getEmojiByPos(this.state.pos),t=this.state.searchResults&&!this.state.searchResults.length;return g("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[g("div",{class:"flex flex-middle flex-grow",children:[g("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:g(ht,{emoji:e,id:t?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),g("div",{class:`margin-${this.dir[0]}`,children:e||t?g("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[g("div",{class:"preview-title ellipsis",children:e?e.name:Y.search_no_results_1}),g("div",{class:"preview-subtitle ellipsis color-c",children:e?e.skins[0].shortcodes:Y.search_no_results_2})]}):g("div",{class:"preview-placeholder color-c",children:Y.pick})})]}),!e&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(e,{pos:t,posinset:r,grid:i}){const o=this.props.emojiButtonSize,s=this.state.tempSkin||this.state.skin,a=(e.skins[s-1]||e.skins[0]).native,u=Uo(this.state.pos,t),c=t.concat(e.id).join("");return g(ss,{selected:u,skin:s,size:o,children:g("button",{"aria-label":a,"aria-selected":u||void 0,"aria-posinset":r,"aria-setsize":i.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?e.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:m=>this.handleEmojiClick({e:m,emoji:e}),onMouseEnter:()=>this.handleEmojiOver(t),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[g("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(r-1)%this.props.emojiButtonColors.length]:void 0}}),g(ht,{emoji:e,set:this.props.set,size:this.props.emojiSize,skin:s,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},c)}renderSearch(){const e=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return g("div",{children:[g("div",{class:"spacer"}),g("div",{class:"flex flex-middle",children:[g("div",{class:"search relative flex-grow",children:[g("input",{type:"search",ref:this.refs.searchInput,placeholder:Y.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),g("span",{class:"icon loupe flex",children:Ge.search.loupe}),this.state.searchResults&&g("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Ge.search.delete})]}),e&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:e}=this.state;return e?g("div",{class:"category",ref:this.refs.search,children:[g("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Y.categories.search}),g("div",{children:e.length?e.map((t,r)=>g("div",{class:"flex",children:t.map((i,o)=>this.renderEmojiButton(i,{pos:[r,o],posinset:r*this.props.perLine+o+1,grid:e}))})):g("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&g("a",{onClick:this.props.onAddCustomEmoji,children:Y.add_custom})})})]}):null}renderCategories(){const{categories:e}=j,t=!!this.state.searchResults,r=this.getPerLine();return g("div",{style:{visibility:t?"hidden":void 0,display:t?"none":void 0,height:"100%"},children:e.map(i=>{const{root:o,rows:s}=this.refs.categories.get(i.id);return g("div",{"data-id":i.target?i.target.id:i.id,class:"category",ref:o,children:[g("div",{class:`sticky padding-small align-${this.dir[0]}`,children:i.name||Y.categories[i.id]}),g("div",{class:"relative",style:{height:s.length*this.props.emojiButtonSize},children:s.map((l,a)=>{const u=l.index-l.index%Ae.rowsPerRender,c=this.state.visibleRows[u],m="current"in l?l:void 0;if(!c&&!m)return null;const d=a*r,v=d+r,p=i.emojis.slice(d,v);return p.length<r&&p.push(...new Array(r-p.length)),g("div",{"data-index":l.index,ref:m,class:"flex row",style:{top:a*this.props.emojiButtonSize},children:c&&p.map((b,_)=>{if(!b)return g("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const k=_e.get(b);return this.renderEmojiButton(k,{pos:[l.index,_],posinset:l.posinset+_,grid:this.grid})})},l.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:g("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:g("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Y.skins.choose,title:Y.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:g("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const e=this.getEmojiByPos(this.state.pos),t=e?e.name:"";return g("div",{"aria-live":"polite",class:"sr-only",children:t})}renderSkins(){const t=this.refs.skinToneButton.current.getBoundingClientRect(),r=this.base.getBoundingClientRect(),i={};return this.dir=="ltr"?i.right=r.right-t.right-3:i.left=t.left-r.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?i.bottom=r.bottom-t.top+6:(i.top=t.bottom-r.top+3,i.bottom="auto"),g("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Y.skins.choose,class:"menu hidden","data-position":i.top?"top":"bottom",style:i,children:[...Array(6).keys()].map(o=>{const s=o+1,l=this.state.skin==s;return g("div",{children:[g("input",{type:"radio",name:"skin-tone",value:s,"aria-label":Y.skins[s],ref:l?this.refs.skinToneRadio:null,defaultChecked:l,onChange:()=>this.handleSkinMouseOver(s),onKeyDown:a=>{(a.code=="Enter"||a.code=="Space"||a.code=="Tab")&&(a.preventDefault(),this.handleSkinClick(s))}}),g("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(s),onMouseEnter:()=>this.handleSkinMouseOver(s),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[g("span",{class:`skin-tone skin-tone-${s}`}),g("span",{class:"margin-small-lr",children:Y.skins[s]})]})]})})})}render(){const e=this.props.perLine*this.props.emojiButtonSize;return g("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${e}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&g("div",{class:"padding-lr",children:this.renderSearch()}),g("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:g("div",{style:{width:this.props.dynamicWidth?"100%":e,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(e){super(),Z(this,"handleClickOutside",t=>{const{element:r}=this.props;t.target!=r&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(t))}),Z(this,"handleBaseClick",t=>{this.state.showSkins&&(t.target.closest(".menu")||(t.preventDefault(),t.stopImmediatePropagation(),this.closeSkins()))}),Z(this,"handleBaseKeydown",t=>{this.state.showSkins&&t.key=="Escape"&&(t.preventDefault(),t.stopImmediatePropagation(),this.closeSkins())}),Z(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Z(this,"handleSearchInput",async()=>{const t=this.refs.searchInput.current;if(!t)return;const{value:r}=t,i=await _e.search(r),o=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!i)return this.setState({searchResults:i,pos:[-1,-1]},o);const s=t.selectionStart==t.value.length?[0,0]:[-1,-1],l=[];l.setsize=i.length;let a=null;for(let u of i)(!l.length||a.length==this.getPerLine())&&(a=[],a.__categoryId="search",a.__index=l.length,l.push(a)),a.push(u);this.ignoreMouse(),this.setState({searchResults:l,pos:s},o)}),Z(this,"handleSearchKeyDown",t=>{const r=t.currentTarget;switch(t.stopImmediatePropagation(),t.key){case"ArrowLeft":this.navigate({e:t,input:r,left:!0});break;case"ArrowRight":this.navigate({e:t,input:r,right:!0});break;case"ArrowUp":this.navigate({e:t,input:r,up:!0});break;case"ArrowDown":this.navigate({e:t,input:r,down:!0});break;case"Enter":t.preventDefault(),this.handleEmojiClick({e:t,pos:this.state.pos});break;case"Escape":t.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Z(this,"clearSearch",()=>{const t=this.refs.searchInput.current;t&&(t.value="",t.focus(),this.handleSearchInput())}),Z(this,"handleCategoryClick",({category:t,i:r})=>{this.scrollTo(r==0?{row:-1}:{categoryId:t.id})}),Z(this,"openSkins",t=>{const{currentTarget:r}=t,i=r.getBoundingClientRect();this.setState({showSkins:i},async()=>{await Fo(2);const o=this.refs.menu.current;o&&(o.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(e),visibleRows:{0:!0},...this.getInitialState(e)}}}class kt extends Yo{async connectedCallback(){const e=Hn(this.props,ae,this);e.element=this,e.ref=t=>{this.component=t},await Ze(e),!this.disconnected&&Nn(g(as,{...e}),this.shadowRoot)}constructor(e){super(e,{styles:Sn(Gn)})}}Z(kt,"Props",ae);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",kt);var Gn={};Gn=`:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`;function cs(n){const e=y.useRef(null),t=y.useRef(null);return t.current&&t.current.update(n),y.useEffect(()=>(t.current=new kt({...n,ref:e}),()=>{t.current=null}),[]),R.createElement("div",{ref:e})}function Xn(n){var e=n.theme,t=n.onSelectEmoji,r=n.disableRecent,i=n.customEmojis,o=y.useMemo(function(){var s=[];return r||s.push("frequent"),s=[].concat(yn(s),["people","nature","foods","activity","places","objects","symbols","flags"]),s},[r]);return R.createElement(cs,{data:void 0,theme:e,previewPosition:"none",onEmojiSelect:t,custom:i,categories:o,set:"apple"})}Xn.propTypes={theme:Te.oneOf(["light","dark","auto"]),onSelectEmoji:Te.func,disableRecent:Te.bool,customEmojis:Te.array};var ls=y.memo(Xn);function sn(n){var e=n.showPicker,t=n.theme,r=n.handleSelectEmoji,i=n.disableRecent,o=n.customEmojis;return R.createElement("div",{className:"react-emoji-picker--container"},e&&R.createElement("div",{className:"react-emoji-picker--wrapper",onClick:function(l){return l.stopPropagation()}},R.createElement("div",{className:"react-emoji-picker"},R.createElement(ls,{theme:t,onSelectEmoji:r,disableRecent:i,customEmojis:o}))))}var us=function(e){var t=e.theme,r=e.keepOpened,i=e.disableRecent,o=e.customEmojis,s=e.addSanitizeFn,l=e.addPolluteFn,a=e.appendContent,u=e.buttonElement,c=y.useState(!1),m=ue(c,2),d=m[0],v=m[1],p=y.useState(),b=ue(p,2),_=b[0],k=b[1];y.useEffect(function(){s(po)},[s]),y.useEffect(function(){l(_n)},[l]),y.useEffect(function(){function S(P){var z=P.target;z.classList.contains("react-input-emoji--button")||z.classList.contains("react-input-emoji--button--icon")||v(!1)}return document.addEventListener("click",S),function(){document.removeEventListener("click",S)}},[]);function $(S){S.stopPropagation(),S.preventDefault(),v(function(P){return!P})}function E(S){a(fo(S)),r||v(function(P){return!P})}return y.useEffect(function(){u!=null&&u.style&&(u.style.position="relative",k(u))},[u]),_?yr.createPortal(R.createElement(R.Fragment,null,R.createElement(sn,{showPicker:d,theme:t,handleSelectEmoji:E,disableRecent:i,customEmojis:o}),R.createElement(Dt,{showPicker:d,toggleShowPicker:$,buttonElement:_})),_):R.createElement(R.Fragment,null,R.createElement(sn,{showPicker:d,theme:t,handleSelectEmoji:E,disableRecent:i,customEmojis:o}),R.createElement(Dt,{showPicker:d,toggleShowPicker:$}))};function ds(){var n=Qn();if(!n)return null;var e=n.text.substring(n.begin,n.end);return e||null}function hs(){var n=Qn();n&&n.element.deleteData(n.begin,n.end-n.begin)}function Qn(){var n=mt();if(!n)return null;var e=n.element,t=n.caretOffset,r=e.textContent,i=r.lastIndexOf("@");return i===-1||i>=t||i!==0&&r[i-1]!==" "?null:{begin:i,end:t,text:r,element:e}}function mt(){var n=fs();if(n===null)return null;var e=0;if(typeof window.getSelection<"u"){var t=window.getSelection().getRangeAt(0),r=t.cloneRange();r.selectNodeContents(n),r.setEnd(t.endContainer,t.endOffset),e=r.toString().length}else if(typeof document.selection<"u"&&document.selection.type!="Control"){var i=document.selection.createRange(),o=document.body.createTextRange();o.moveToElementText(n),o.setEndPoint("EndToEnd",i),e=o.text.length}return{element:n,caretOffset:e}}function fs(){var n=document.getSelection().anchorNode;return(n==null?void 0:n.nodeType)==3?n:null}function ps(n){var e=y.useState(!1),t=ue(e,2),r=t[0],i=t[1],o=y.useState([]),s=ue(o,2),l=s[0],a=s[1],u=y.useState(null),c=ue(u,2),m=c[0],d=c[1],v=y.useCallback(function(){hs(),a([])},[]),p=y.useCallback(Mt(Oe().mark(function k(){var $,E;return Oe().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if($=ds(),d($),$!==null){P.next=6;break}a([]),P.next=12;break;case 6:return i(!0),P.next=9,n($);case 9:E=P.sent,i(!1),a(E);case 12:case"end":return P.stop()}},k)})),[n]),b=y.useCallback(function(){var k=Mt(Oe().mark(function $(E){var S,P;return Oe().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:if(typeof n=="function"){H.next=2;break}return H.abrupt("return");case 2:E.key==="Backspace"&&(S=mt())!==null&&S!==void 0&&S.element.parentElement.hasAttribute("data-mention-id")?(P=mt(),P.element.parentElement.remove()):["ArrowUp","ArrowDown","Esc","Escape"].includes(E.key)||p();case 3:case"end":return H.stop()}},$)}));return function($){return k.apply(this,arguments)}}(),[p,n]),_=y.useCallback(function(){p()},[p]);return{mentionSearchText:m,mentionUsers:l,onKeyUp:b,onFocus:_,onSelectUser:v,loading:r}}var ms=function(e,t){var r=e.users,i=e.mentionSearchText,o=e.onSelect,s=e.addEventListener,l=y.useState(0),a=ue(l,2),u=a[0],c=a[1];y.useImperativeHandle(t,function(){return{prevUser:function(){c(function(b){return b===0?0:b-1})},nextUser:function(){c(function(b){return b===r.length-1?r.length-1:b+1})}}}),y.useEffect(function(){c(0)},[r]);function m(p,b){return'<span class="react-input-emoji--mention--item--name__selected" data-testid="metion-selected-word">'.concat(p,"</span>").concat(b)}var d=y.useMemo(function(){var p=i?i.substring(1).toLocaleLowerCase():"";return r.map(function(b){var _=b.name;if(i&&i.length>1)if(b.name.toLowerCase().startsWith(p))_=m(b.name.substring(0,p.length),b.name.substring(p.length));else{var k=b.name.split(" ");_=k.map(function($){return $.toLocaleLowerCase().startsWith(p)?m($.substring(0,p.length),$.substring(p.length)):$}).join(" ")}return Rt(Rt({},b),{},{nameHtml:_})})},[i,r]);function v(p){return function(b){b.stopPropagation(),b.preventDefault(),o(p)}}return y.useEffect(function(){var p=s("enter",function(b){b.stopPropagation(),b.preventDefault(),o(d[u])});return function(){p()}},[s,o,u,d]),R.createElement("ul",{className:"react-input-emoji--mention--list","data-testid":"mention-user-list"},d.map(function(p,b){return R.createElement("li",{key:p.id},R.createElement("button",{type:"button",onClick:v(p),className:"react-input-emoji--mention--item".concat(u===b?" react-input-emoji--mention--item__selected":""),onMouseOver:function(){return c(b)}},R.createElement("img",{className:"react-input-emoji--mention--item--img",src:p.image}),R.createElement("div",{className:"react-input-emoji--mention--item--name",dangerouslySetInnerHTML:{__html:p.nameHtml}})))}))},Jn=y.forwardRef(ms);Jn.propTypes={users:Te.array.isRequired};var gs=function(e){var t=e.searchMention,r=e.addEventListener,i=e.appendContent,o=e.addSanitizeFn,s=y.useRef(null),l=y.useState(!1),a=ue(l,2),u=a[0],c=a[1],m=ps(t),d=m.mentionSearchText,v=m.mentionUsers,p=m.loading,b=m.onKeyUp,_=m.onFocus,k=m.onSelectUser;y.useEffect(function(){o(function(E){var S=document.createElement("div");S.innerHTML=E;var P=Array.prototype.slice.call(S.querySelectorAll(".react-input-emoji--mention--text"));return P.forEach(function(z){S.innerHTML=S.innerHTML.replace(z.outerHTML,"@[".concat(z.dataset.mentionName,"](userId:").concat(z.dataset.mentionId,")"))}),S.innerHTML})},[o]),y.useEffect(function(){c(v.length>0)},[v]),y.useEffect(function(){function E(){c(!1)}return document.addEventListener("click",E),function(){document.removeEventListener("click",E)}},[]),y.useEffect(function(){var E=r("keyUp",b);return function(){E()}},[r,b]),y.useEffect(function(){function E(P){switch(P.key){case"Esc":case"Escape":c(!1);break}}var S=r("keyDown",E);return function(){S()}},[r]),y.useEffect(function(){var E=r("focus",_);return function(){E()}},[r,_]),y.useEffect(function(){if(u){var E=r("arrowUp",function(P){P.stopPropagation(),P.preventDefault(),s.current.prevUser()}),S=r("arrowDown",function(P){P.stopPropagation(),P.preventDefault(),s.current.nextUser()});return function(){E(),S()}}},[r,u]);function $(E){k(),i('<span class="react-input-emoji--mention--text" data-mention-id="'.concat(E.id,'" data-mention-name="').concat(E.name,'">@').concat(E.name,"</span> "))}return R.createElement(R.Fragment,null,p?R.createElement("div",{className:"react-input-emoji--mention--container"},R.createElement("div",{className:"react-input-emoji--mention--loading"},R.createElement("div",{className:"react-input-emoji--mention--loading--spinner"},"Loading..."))):u&&R.createElement("div",{className:"react-input-emoji--mention--container",onClick:function(S){return S.stopPropagation()}},R.createElement(Jn,{ref:s,mentionSearchText:d,users:v,onSelect:$,addEventListener:r})))};function pe(){var n=[];return{subscribe:function(t){return n.push(t),function(){n=n.filter(function(r){return r!==t})}},publish:function(t){n.forEach(function(r){return r(t)})},get currentListerners(){return n}}}function vs(){var n=y.useMemo(function(){return{keyDown:pe(),keyUp:pe(),arrowUp:pe(),arrowDown:pe(),enter:pe(),focus:pe(),blur:pe()}},[]),e=y.useCallback(function(t,r){return n[t].subscribe(r)},[n]);return{addEventListener:e,listeners:n}}function bs(){var n=y.useRef([]),e=y.useCallback(function(r){n.current.push(r)},[]),t=y.useCallback(function(r){var i=n.current.reduce(function(o,s){return s(o)},r);return i},[]);return{addPolluteFn:e,pollute:t}}function ys(n,e){var t=n.onChange,r=n.onEnter,i=n.onResize,o=n.onClick,s=n.onFocus,l=n.onBlur,a=n.onKeyDown,u=n.theme,c=n.cleanOnEnter,m=n.placeholder,d=n.maxLength,v=n.keepOpened,p=n.inputClass,b=n.disableRecent,_=n.tabIndex,k=n.value,$=n.customEmojis,E=n.searchMention,S=n.buttonElement,P=n.borderRadius,z=n.borderColor,H=n.fontSize,Q=n.fontFamily,B=y.useRef(null),h=vs(),f=h.addEventListener,w=h.listeners,T=Cn(),x=T.addSanitizeFn,M=T.sanitize,A=T.sanitizedTextRef,W=bs(),J=W.addPolluteFn,D=W.pollute,U=y.useCallback(function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";B.current!==null&&(B.current.html=_n(I),A.current=I)},[A]),G=y.useCallback(function(I){U(I)},[U]),he=bo(B,i,t);vo({ref:e,setValue:G,textInputRef:B,emitChange:he}),y.useEffect(function(){A.current!==k&&G(k)},[A,G,k]),y.useEffect(function(){U()},[U]),y.useEffect(function(){function I(be){if(typeof d<"u"&&be.key!=="Backspace"&&B.current!==null&&At(B.current)>=d&&be.preventDefault(),be.key==="Enter"&&B.current){be.preventDefault();var vr=M(B.current.html);return he(A.current),typeof r=="function"&&w.enter.currentListerners.length===0&&r(vr),c&&w.enter.currentListerners.length===0&&U(""),typeof a=="function"&&a(be.nativeEvent),!1}return typeof a=="function"&&a(be.nativeEvent),!0}var te=f("keyDown",I);return function(){te()}},[f,c,he,w.enter.currentListerners.length,d,r,a,M,A,U]),y.useEffect(function(){function I(){typeof o=="function"&&o(),typeof s=="function"&&s()}var te=f("focus",I);return function(){te()}},[f,o,s]),y.useEffect(function(){function I(){typeof l=="function"&&l()}var te=f("blur",I);return function(){te()}},[f,l]);function je(I){M(I),he(A.current)}function ve(I){typeof d<"u"&&B.current!==null&&At(B.current)>=d||B.current!==null&&B.current.appendContent(I)}function fe(I){I.clipboardData.setData("text",A.current),I.preventDefault()}function gr(I){I.preventDefault();var te;I.clipboardData&&(te=I.clipboardData.getData("text/plain"),te=D(te),document.execCommand("insertHTML",!1,te))}return R.createElement("div",{className:"react-emoji"},R.createElement(gs,{searchMention:E,addEventListener:f,appendContent:ve,addSanitizeFn:x}),R.createElement(_o,{ref:B,onCopy:fe,onPaste:gr,onBlur:w.blur.publish,onFocus:w.focus.publish,onArrowUp:w.arrowUp.publish,onArrowDown:w.arrowDown.publish,onKeyUp:w.keyUp.publish,onKeyDown:w.keyDown.publish,onEnter:w.enter.publish,placeholder:m,style:{borderRadius:P,borderColor:z,fontSize:H,fontFamily:Q},tabIndex:_,className:p,onChange:je}),R.createElement(us,{theme:u,keepOpened:v,disableRecent:b,customEmojis:$,addSanitizeFn:x,addPolluteFn:J,appendContent:ve,buttonElement:S}))}var Zn=y.forwardRef(ys);Zn.defaultProps={theme:"auto",height:30,placeholder:"Type a message",borderRadius:21,borderColor:"#EAEAEA",fontSize:15,fontFamily:"sans-serif",tabIndex:0,customEmojis:[]};function ws({props:n}){const{handleChatSubmit:e}=n,[t,r]=y.useState(""),[i,o]=y.useState(!1);async function s(a){a.trim()&&(o(!0),await e(a),o(!1))}async function l(a){a.trim()&&(r(""),o(!0),await e(a),o(!1))}return V("div",{className:"flex items-center justify-between  px-3 dark:bg-slate-300 bg-slate-200 rounded  h-16 ",children:[O(Zn,{value:t,onChange:r,cleanOnEnter:!0,onEnter:s,placeholder:"Type a message",className:"border-none outline-none w-full p-2"}),O("button",{className:"cursor-pointer text-3xl text-slate-500 -mt-1 ml-3",onClick:()=>{l(t)},children:i?O(wr,{height:50}):O(Pr,{})})]})}const ie=Object.create(null);ie.open="0";ie.close="1";ie.ping="2";ie.pong="3";ie.message="4";ie.upgrade="5";ie.noop="6";const Ie=Object.create(null);Object.keys(ie).forEach(n=>{Ie[ie[n]]=n});const _s={type:"error",data:"parser error"},ks=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",xs=typeof ArrayBuffer=="function",Cs=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,er=({type:n,data:e},t,r)=>ks&&e instanceof Blob?t?r(e):an(e,r):xs&&(e instanceof ArrayBuffer||Cs(e))?t?r(e):an(new Blob([e]),r):r(ie[n]+(e||"")),an=(n,e)=>{const t=new FileReader;return t.onload=function(){const r=t.result.split(",")[1];e("b"+(r||""))},t.readAsDataURL(n)},cn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Pe=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<cn.length;n++)Pe[cn.charCodeAt(n)]=n;const Ss=n=>{let e=n.length*.75,t=n.length,r,i=0,o,s,l,a;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);const u=new ArrayBuffer(e),c=new Uint8Array(u);for(r=0;r<t;r+=4)o=Pe[n.charCodeAt(r)],s=Pe[n.charCodeAt(r+1)],l=Pe[n.charCodeAt(r+2)],a=Pe[n.charCodeAt(r+3)],c[i++]=o<<2|s>>4,c[i++]=(s&15)<<4|l>>2,c[i++]=(l&3)<<6|a&63;return u},Es=typeof ArrayBuffer=="function",tr=(n,e)=>{if(typeof n!="string")return{type:"message",data:nr(n,e)};const t=n.charAt(0);return t==="b"?{type:"message",data:$s(n.substring(1),e)}:Ie[t]?n.length>1?{type:Ie[t],data:n.substring(1)}:{type:Ie[t]}:_s},$s=(n,e)=>{if(Es){const t=Ss(n);return nr(t,e)}else return{base64:!0,data:n}},nr=(n,e)=>{switch(e){case"blob":return n instanceof ArrayBuffer?new Blob([n]):n;case"arraybuffer":default:return n}},rr=String.fromCharCode(30),Ts=(n,e)=>{const t=n.length,r=new Array(t);let i=0;n.forEach((o,s)=>{er(o,!1,l=>{r[s]=l,++i===t&&e(r.join(rr))})})},Os=(n,e)=>{const t=n.split(rr),r=[];for(let i=0;i<t.length;i++){const o=tr(t[i],e);if(r.push(o),o.type==="error")break}return r},ir=4;function F(n){if(n)return Ps(n)}function Ps(n){for(var e in F.prototype)n[e]=F.prototype[e];return n}F.prototype.on=F.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};F.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};F.prototype.off=F.prototype.removeListener=F.prototype.removeAllListeners=F.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var r,i=0;i<t.length;i++)if(r=t[i],r===e||r.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+n],this};F.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t){t=t.slice(0);for(var r=0,i=t.length;r<i;++r)t[r].apply(this,e)}return this};F.prototype.emitReserved=F.prototype.emit;F.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};F.prototype.hasListeners=function(n){return!!this.listeners(n).length};const X=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function or(n,...e){return e.reduce((t,r)=>(n.hasOwnProperty(r)&&(t[r]=n[r]),t),{})}const Rs=X.setTimeout,js=X.clearTimeout;function et(n,e){e.useNativeTimers?(n.setTimeoutFn=Rs.bind(X),n.clearTimeoutFn=js.bind(X)):(n.setTimeoutFn=X.setTimeout.bind(X),n.clearTimeoutFn=X.clearTimeout.bind(X))}const Ms=1.33;function Ls(n){return typeof n=="string"?As(n):Math.ceil((n.byteLength||n.size)*Ms)}function As(n){let e=0,t=0;for(let r=0,i=n.length;r<i;r++)e=n.charCodeAt(r),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(r++,t+=4);return t}class Ds extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class sr extends F{constructor(e){super(),this.writable=!1,et(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,r){return super.emitReserved("error",new Ds(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=tr(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}}const ar="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),gt=64,Ns={};let ln=0,De=0,un;function dn(n){let e="";do e=ar[n%gt]+e,n=Math.floor(n/gt);while(n>0);return e}function cr(){const n=dn(+new Date);return n!==un?(ln=0,un=n):n+"."+dn(ln++)}for(;De<gt;De++)Ns[ar[De]]=De;function lr(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}function Bs(n){let e={},t=n.split("&");for(let r=0,i=t.length;r<i;r++){let o=t[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}let ur=!1;try{ur=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const zs=ur;function dr(n){const e=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||zs))return new XMLHttpRequest}catch{}if(!e)try{return new X[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function Is(){}const Us=function(){return new dr({xdomain:!1}).responseType!=null}();class Fs extends sr{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const r=location.protocol==="https:";let i=location.port;i||(i=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port,this.xs=e.secure!==r}const t=e&&e.forceBase64;this.supportsBinary=Us&&!t}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||t()})),this.writable||(r++,this.once("drain",function(){--r||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Os(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Ts(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.query||{};const t=this.opts.secure?"https":"http";let r="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=cr()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(t==="https"&&Number(this.opts.port)!==443||t==="http"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port);const i=lr(e),o=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(o?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(i.length?"?"+i:"")}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new re(this.uri(),e)}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,r)=>{this.onError("xhr poll error",t,r)}),this.pollXhr=e}}class re extends F{constructor(e,t){super(),et(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=t.async!==!1,this.data=t.data!==void 0?t.data:null,this.create()}create(){const e=or(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const t=this.xhr=new dr(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let r in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(r)&&t.setRequestHeader(r,this.opts.extraHeaders[r])}}catch{}if(this.method==="POST")try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{t.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200||t.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof t.status=="number"?t.status:0)},0))},t.send(this.data)}catch(r){this.setTimeoutFn(()=>{this.onError(r)},0);return}typeof document<"u"&&(this.index=re.requestsCount++,re.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=Is,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete re.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}re.requestsCount=0;re.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",hn);else if(typeof addEventListener=="function"){const n="onpagehide"in X?"pagehide":"unload";addEventListener(n,hn,!1)}}function hn(){for(let n in re.requests)re.requests.hasOwnProperty(n)&&re.requests[n].abort()}const hr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),Ne=X.WebSocket||X.MozWebSocket,fn=!0,Hs="arraybuffer",pn=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ws extends sr{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,r=pn?{}:or(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=fn&&!pn?t?new Ne(e,t):new Ne(e):new Ne(e,t,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType||Hs,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],i=t===e.length-1;er(r,this.supportsBinary,o=>{const s={};try{fn&&this.ws.send(o)}catch{}i&&hr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let r="";this.opts.port&&(t==="wss"&&Number(this.opts.port)!==443||t==="ws"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=cr()),this.supportsBinary||(e.b64=1);const i=lr(e),o=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(o?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(i.length?"?"+i:"")}check(){return!!Ne}}const qs={websocket:Ws,polling:Fs},Vs=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ys=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function vt(n){const e=n,t=n.indexOf("["),r=n.indexOf("]");t!=-1&&r!=-1&&(n=n.substring(0,t)+n.substring(t,r).replace(/:/g,";")+n.substring(r,n.length));let i=Vs.exec(n||""),o={},s=14;for(;s--;)o[Ys[s]]=i[s]||"";return t!=-1&&r!=-1&&(o.source=e,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=Ks(o,o.path),o.queryKey=Gs(o,o.query),o}function Ks(n,e){const t=/\/{2,9}/g,r=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Gs(n,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,o){i&&(t[i]=o)}),t}let fr=class we extends F{constructor(e,t={}){super(),this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=vt(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=vt(t.host).host),et(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Bs(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=ir,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new qs[e](r)}open(){let e;if(this.opts.rememberUpgrade&&we.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),r=!1;we.priorWebsocketSuccess=!1;const i=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",m=>{if(!r)if(m.type==="pong"&&m.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;we.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(c(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=t.name,this.emitReserved("upgradeError",d)}}))};function o(){r||(r=!0,c(),t.close(),t=null)}const s=m=>{const d=new Error("probe error: "+m);d.transport=t.name,o(),this.emitReserved("upgradeError",d)};function l(){s("transport closed")}function a(){s("socket closed")}function u(m){t&&m.name!==t.name&&o()}const c=()=>{t.removeListener("open",i),t.removeListener("error",s),t.removeListener("close",l),this.off("close",a),this.off("upgrading",u)};t.once("open",i),t.once("error",s),t.once("close",l),this.once("close",a),this.once("upgrading",u),t.open()}onOpen(){if(this.readyState="open",we.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(t+=Ls(i)),r>0&&t>this.maxPayload)return this.writeBuffer.slice(0,r);t+=2}return this.writeBuffer}write(e,t,r){return this.sendPacket("message",e,t,r),this}send(e,t,r){return this.sendPacket("message",e,t,r),this}sendPacket(e,t,r,i){if(typeof t=="function"&&(i=t,t=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const o={type:e,data:t,options:r};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}onError(e){we.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let r=0;const i=e.length;for(;r<i;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}};fr.protocol=ir;function Xs(n,e="",t){let r=n;t=t||typeof location<"u"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t<"u"?n=t.protocol+"//"+n:n="https://"+n),r=vt(n)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const o=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+o+":"+r.port+e,r.href=r.protocol+"://"+o+(t&&t.port===r.port?"":":"+r.port),r}const Qs=typeof ArrayBuffer=="function",Js=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,pr=Object.prototype.toString,Zs=typeof Blob=="function"||typeof Blob<"u"&&pr.call(Blob)==="[object BlobConstructor]",ea=typeof File=="function"||typeof File<"u"&&pr.call(File)==="[object FileConstructor]";function xt(n){return Qs&&(n instanceof ArrayBuffer||Js(n))||Zs&&n instanceof Blob||ea&&n instanceof File}function Ue(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,r=n.length;t<r;t++)if(Ue(n[t]))return!0;return!1}if(xt(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return Ue(n.toJSON(),!0);for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&Ue(n[t]))return!0;return!1}function ta(n){const e=[],t=n.data,r=n;return r.data=bt(t,e),r.attachments=e.length,{packet:r,buffers:e}}function bt(n,e){if(!n)return n;if(xt(n)){const t={_placeholder:!0,num:e.length};return e.push(n),t}else if(Array.isArray(n)){const t=new Array(n.length);for(let r=0;r<n.length;r++)t[r]=bt(n[r],e);return t}else if(typeof n=="object"&&!(n instanceof Date)){const t={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=bt(n[r],e));return t}return n}function na(n,e){return n.data=yt(n.data,e),delete n.attachments,n}function yt(n,e){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=yt(n[t],e);else if(typeof n=="object")for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=yt(n[t],e));return n}const ra=5;var L;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(L||(L={}));class ia{constructor(e){this.replacer=e}encode(e){return(e.type===L.EVENT||e.type===L.ACK)&&Ue(e)?this.encodeAsBinary({type:e.type===L.EVENT?L.BINARY_EVENT:L.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===L.BINARY_EVENT||e.type===L.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=ta(e),r=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(r),i}}class Ct extends F{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===L.BINARY_EVENT;r||t.type===L.BINARY_ACK?(t.type=r?L.EVENT:L.ACK,this.reconstructor=new oa(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(xt(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(L[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===L.BINARY_EVENT||r.type===L.BINARY_ACK){const o=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const s=e.substring(o,t);if(s!=Number(s)||e.charAt(t)!=="-")throw new Error("Illegal attachments");r.attachments=Number(s)}if(e.charAt(t+1)==="/"){const o=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););r.nsp=e.substring(o,t)}else r.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const o=t+1;for(;++t;){const s=e.charAt(t);if(s==null||Number(s)!=s){--t;break}if(t===e.length)break}r.id=Number(e.substring(o,t+1))}if(e.charAt(++t)){const o=this.tryParse(e.substr(t));if(Ct.isPayloadValid(r.type,o))r.data=o;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case L.CONNECT:return typeof t=="object";case L.DISCONNECT:return t===void 0;case L.CONNECT_ERROR:return typeof t=="string"||typeof t=="object";case L.EVENT:case L.BINARY_EVENT:return Array.isArray(t)&&t.length>0;case L.ACK:case L.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class oa{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=na(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const sa=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Ct,Encoder:ia,get PacketType(){return L},protocol:ra},Symbol.toStringTag,{value:"Module"}));function ee(n,e,t){return n.on(e,t),function(){n.off(e,t)}}const aa=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class mr extends F{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[ee(e,"open",this.onopen.bind(this)),ee(e,"packet",this.onpacket.bind(this)),ee(e,"error",this.onerror.bind(this)),ee(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(aa.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const r={type:L.EVENT,data:t};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const s=this.ids++,l=t.pop();this._registerAckCallback(s,l),r.id=s}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(e,t){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let s=0;s<this.sendBuffer.length;s++)this.sendBuffer[s].id===e&&this.sendBuffer.splice(s,1);t.call(this,new Error("operation has timed out"))},i);this.acks[e]=(...s)=>{this.io.clearTimeoutFn(o),t.apply(this,[null,...s])}}emitWithAck(e,...t){const r=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((i,o)=>{t.push((s,l)=>r?s?o(s):i(l):i(s)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...o)=>r!==this._queue[0]?void 0:(i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...o)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:L.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case L.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case L.EVENT:case L.BINARY_EVENT:this.onevent(e);break;case L.ACK:case L.BINARY_ACK:this.onack(e);break;case L.DISCONNECT:this.ondisconnect();break;case L.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(...i){r||(r=!0,t.packet({type:L.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:L.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function Ce(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}Ce.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=Math.floor(e*10)&1?n+t:n-t}return Math.min(n,this.max)|0};Ce.prototype.reset=function(){this.attempts=0};Ce.prototype.setMin=function(n){this.ms=n};Ce.prototype.setMax=function(n){this.max=n};Ce.prototype.setJitter=function(n){this.jitter=n};class wt extends F{constructor(e,t){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,et(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((r=t.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Ce({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||sa;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new fr(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=ee(t,"open",function(){r.onopen(),e&&e()}),o=ee(t,"error",s=>{r.cleanup(),r._readyState="closed",this.emitReserved("error",s),e?e(s):r.maybeReconnectOnOpen()});if(this._timeout!==!1){const s=this._timeout;s===0&&i();const l=this.setTimeoutFn(()=>{i(),t.close(),t.emit("error",new Error("timeout"))},s);this.opts.autoUnref&&l.unref(),this.subs.push(function(){clearTimeout(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(ee(e,"ping",this.onping.bind(this)),ee(e,"data",this.ondata.bind(this)),ee(e,"error",this.onerror.bind(this)),ee(e,"close",this.onclose.bind(this)),ee(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){hr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new mr(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t)if(this.nsps[r].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&r.unref(),this.subs.push(function(){clearTimeout(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const $e={};function Fe(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};const t=Xs(n,e.path||"/socket.io"),r=t.source,i=t.id,o=t.path,s=$e[i]&&o in $e[i].nsps,l=e.forceNew||e["force new connection"]||e.multiplex===!1||s;let a;return l?a=new wt(r,e):($e[i]||($e[i]=new wt(r,e)),a=$e[i]),t.query&&!e.query&&(e.query=t.queryKey),a.socket(t.path,e)}Object.assign(Fe,{Manager:wt,Socket:mr,io:Fe,connect:Fe});const ca=()=>{const n="http://localhost:3000";let e=Fe.connect(n);const t=_r(kr),{fetchMyWorkspaces:r}=xr(),{getAllProjectDetails:i}=Er(),{fetchGroupChat:o,addMessage:s,fetchMessages:l}=Rr(),[a,u]=y.useState([]),[c,m]=y.useState([]),[d,v]=y.useState(),[p,b]=y.useState([]),[_,k]=y.useState(!1),[$,E]=y.useState(!1),[S,P]=y.useState({fetchProject:!1,fetchMessages:!1});y.useEffect(()=>{z()},[]);const z=async()=>{try{const h=await r(t.userId,t.email),{ownedWorkspaces:f,sharedWorkspaces:w}=h;u([...f,...w])}catch(h){console.log(h),tt.error("Error on fetching workspaces")}},H=async h=>{const{value:f}=h.target;P({...S,fetchProject:!0});try{const w=await i(f,t.email,t.userId);m(w),P({...S,fetchProject:!1})}catch{}},Q=async h=>{try{k(!0);const f=await o(h);e.emit("joinChat",f._id);const w=await l(f._id);b(w),E(!0),v(f),k(!1)}catch(f){tt.error(f.msg)}},B=async h=>{try{const f=await s({sender:t.userId,content:h,chat:d._id});console.log(f),await e.emit("newMessage",f),b([...p,f])}catch(f){tt.error(f.msg)}};return y.useEffect(()=>{e.on("recievedMessage",h=>{console.log(h.sender._id===t.userId),h.sender._id!==t.userId&&b(f=>[...f,h])})}),V(Me,{children:[V("div",{className:"dark:bg-slate-800 bg-gray-300  h-screen  md:overflow-y-hidden md:grid  grid-cols-4  ",children:[V("div",{className:`p-5 md:p-8 ${$?"hidden md:block":"block"}`,children:[O("label",{htmlFor:"workspace",className:"block mb-2 text-md md:text-xl font-medium text-gray-900 dark:text-white",children:"Select a workspace"}),V("select",{id:"workspace",name:"workspace",className:"bg-gray-50 border  border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onClick:H,children:[O("option",{selected:!0,disabled:!0,children:"Choose a workspace"}),a.map(h=>O(Me,{children:O("option",{value:h._id,className:"",children:h.workspaceName},h._id)}))]}),O("div",{className:"max-w-sm p-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-slate-700 mt-12 ",children:S.fetchProject?O("div",{className:"flex justify-center items-center h-40",children:O(St,{height:"50",width:"100",color:"#4fa94d"})}):c[0]?V(Me,{children:[O("p",{className:"dark:text-slate-500 text-gray-500 font-semibold ",children:"select a project"}),c.map(h=>O(Me,{children:V("button",{className:"dark:bg-slate-700 w-full rounded p-2 text-start font-semibold text-xl flex gap-2 items-center hover:dark:bg-gray-900 hover:dark:text-gray-500 transition-transform duration-200 transform hover:scale-105 ",onClick:()=>{Q(h._id)},children:[O("p",{className:"w-8 h-8 dark:bg-slate-900 dark:text-slate-600 rounded-full items-center flex justify-center",children:h.projectName[0]}),O("span",{children:h.projectName})]},h._id)}))]}):O("p",{className:"text-red-500 text-lg font-bold",children:"No Projects available 🥲"})})]}),d?S.fetchMessages?V("div",{className:"flex justify-center items-center col-span-3  md:border-l-4  dark:border-slate-600 p-5",children:[O(St,{color:"orange"}),O("br",{})]}):V("div",{className:`col-span-3  md:border-l-4  dark:border-slate-600 p-5 w-full ${$?"  block":"hidden md:block "}`,children:[V("div",{className:" dark:bg-slate-900 bg-gray-4`00 -m-4",children:[V("div",{className:"flex md:block",children:[O("button",{className:"block md:hidden",onClick:()=>{E(!1)},children:O(Or,{className:"text-4xl dark:text-white hover:dark:text-gray-400 -mr-9 grow"})}),V("div",{className:"flex gap- ml-5",children:[O("div",{className:"rounded-full w-10 h-10  bg-red-200 mt-2  justify-center items-center font-bold text-xl md:flex hidden",children:d==null?void 0:d.chatName[0]}),O("p",{className:"text-xl dark:text-gray-200 text-slate-900 font-bold px-5 py-2 ",children:d==null?void 0:d.chatName})]})]}),O("div",{className:"  rounded-lg md:w-[30%] mx-10 dark:text-gray-500 text-slate-800 pb-2 grid gap-5 truncate text-ellipsis overflow-hidden",children:O("p",{className:"flex w-full",children:d==null?void 0:d.userDetails.map(h=>V("p",{children:[h.name," ,"]},h._id))})})]}),O("div",{className:"message-content h-screen mt-8  w-full ",children:O("div",{className:"overflow-y-scroll md:h-[80%] h-[79%] scrollbar-thin ",children:O(Ji,{className:"scrollbar-thin ",children:p.length?p.map(h=>O("div",{className:`flex ${h.sender._id==t.userId?"justify-end":""}`,children:V("div",{className:`rounded block  w-fit md:max-w-[40%]   p-2 mb-10 ${h.sender._id==t.userId?"dark:bg-green-900 text-end bg-green-500  ":"dark:bg-gray-600 bg-gray-400"}`,children:[h.sender._id!==t.userId&&O("p",{className:"text-sm dark:text-yellow-400 text-yellow-200 font-semibold",children:h==null?void 0:h.sender.name}),O("p",{className:"max-w-[100%] truncate dark:text-slate-50 text-gray-200  font-semibold",children:h.content}),O("p",{className:"text-[.80rem] text-end font-semibold dark:text-gray-300",children:Vi(new Date(h.createdAt),"h:mm a")})]})},h._id)):O("div",{className:"flex justify-center items-center md:h-96",children:O("p",{className:"text-green-300 font-bold md:text-xl animate-pulse",children:"Start sending messages ..."})})})})}),O("div",{className:"absolute md:bottom-2 z-50 bottom-0  md:max-w-[60%] grow w-full -ml-5 md:ml-6   border md:border-0  ",children:O(ws,{props:{handleChatSubmit:B}})})]}):O("div",{className:" col-span-3  md:border-l-4  dark:border-slate-600 p-5 flex justify-center items-center ",children:O("img",{src:"./Images/chat-removebg-preview.png",alt:"",className:"h-[40%] md:h-[60%] animate-pulse"})}),_&&O($r,{})]}),O(Tr,{})]})},wa=()=>V("div",{className:"flex h-screen overflow-hidden",children:[O(Cr,{}),V("div",{className:"w-full",children:[O(Sr,{}),O(ca,{})]})]});export{wa as default};
