!function(e){function t(t){for(var r,u,l=t[0],s=t[1],i=t[2],f=0,d=[];f<l.length;f++)u=l[f],a[u]&&d.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(t);d.length;)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={0:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var c=s;o.push([424,1]),n()}({401:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Context=void 0;var r,a=n(3),o=(r=a)&&r.__esModule?r:{default:r};t.Context=o.default.createContext({})},402:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPaymentUrl=t.reserveAppointment=t.getAvailableAppointments=t.formatAvailableAppointments=void 0,n(403);var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(a,o){try{var u=t[a](o),l=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}("next")})}}var l,s,i,c=t.formatAvailableAppointments=function(e){return e.map(function(e){return{date:e.date,displayDate:(0,o.default)(e.date,"DD/MM/YYYY").format("dddd D MMMM YYYY"),times:e.times.map(function(t){var n=(0,o.default)(e.date+" "+t.startTime,"DD/MM/YYYY HH:mm:ss").format("YYYY-MM-DD HH:mm:ss");return{startTime:t.startTime,id:n,value:n,label:(0,o.default)(t.startTime,"HH:mm:ss").format("H:mma"),name:"testDate"}})}})};t.getAvailableAppointments=(l=u(regeneratorRuntime.mark(function e(t,n,r){var a,o,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={from:n,to:r,isResit:t},console.log(a.from),e.prev=2,e.next=5,fetch("/book-taxi-driver-knowledge-test/available-appointments",{method:"POST",headers:{Accept:"application/json; charset=utf-8","Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(a)});case 5:return o=e.sent,e.next=8,o.json();case 8:return u=e.sent,e.abrupt("return",{status:o.status,appointments:c(u)});case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",{status:500});case 15:case"end":return e.stop()}},e,void 0,[[2,12]])})),function(e,t,n){return l.apply(this,arguments)}),t.reserveAppointment=(s=u(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.prev=1,e.next=4,fetch("/book-taxi-driver-knowledge-test/pencil-an-appointment",{method:"POST",headers:{Accept:"application/json; charset=utf-8","Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({testDate:n,isResit:t})});case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",{status:r.status,bookingId:a});case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",{status:500});case 14:case"end":return e.stop()}},e,void 0,[[1,11]])})),function(e,t){return s.apply(this,arguments)}),t.getPaymentUrl=(i=u(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/book-taxi-driver-knowledge-test/generate-payment-url",{method:"POST",headers:{Accept:"application/json; charset=utf-8","Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({bookingId:t,testDate:n})});case 3:return r=e.sent,e.next=6,r.text();case 6:return a=e.sent,e.abrupt("return",{status:r.status,url:a});case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{status:500});case 13:case"end":return e.stop()}},e,void 0,[[0,10]])})),function(e,t){return i.apply(this,arguments)})},424:function(e,t,n){n(425),e.exports=n(626)},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(3),u=(r=o)&&r.__esModule?r:{default:r},l=n(401);t.default=function(e){return function(t){return u.default.createElement(l.Context.Consumer,null,function(n){return u.default.createElement(e,a({},t,{context:n}))})}}},626:function(e,t,n){"use strict";var r=c(n(3)),a=c(n(56)),o=c(n(631)),u=c(n(767)),l=n(182),s=c(n(768)),i=c(n(772));function c(e){return e&&e.__esModule?e:{default:e}}var f=(0,s.default)();a.default.render(r.default.createElement(u.default,null,r.default.createElement(l.Router,{history:f},r.default.createElement(i.default,null,r.default.createElement(o.default,null)))),document.getElementById("root"))},631:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(3),o=y(a),u=n(182),l=n(77),s=n(52),i=y(n(705)),c=y(n(706)),f=y(n(707)),d=y(n(708)),p=y(n(710)),m=y(n(761)),h=y(n(765)),b=y(n(766));function y(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return o.default.createElement(u.Switch,null,o.default.createElement(u.Route,{exact:!0,path:(0,l.getPageRoute)(1),component:i.default}),o.default.createElement(u.Route,{exact:!0,path:(0,l.getPageRoute)(2),component:c.default}),o.default.createElement(u.Route,{exact:!0,path:(0,l.getPageRoute)(3),component:f.default}),o.default.createElement(u.Route,{exact:!0,path:(0,l.getPageRoute)(4),component:d.default}),o.default.createElement(u.Route,{exact:!0,path:(0,l.getPageRoute)(5),component:p.default}),o.default.createElement(u.Route,{exact:!0,path:(0,l.getPageRoute)(6),component:m.default}),o.default.createElement(u.Route,{exact:!0,path:(0,l.getPageRoute)(7),component:h.default}),o.default.createElement(u.Route,{exact:!0,path:(0,l.getPageRoute)(8),component:b.default}),o.default.createElement(u.Route,{exact:!0,path:"/error",component:s.ErrorPage}))}}]),t}();t.default=v},635:function(e){e.exports=[{number:1,route:"/book-taxi-driver-knowledge-test/test-type"},{number:2,route:"/book-taxi-driver-knowledge-test/first-time"},{number:3,route:"/book-taxi-driver-knowledge-test/about-yourself"},{number:4,route:"/book-taxi-driver-knowledge-test/choose-appointment"},{number:5,route:"/book-taxi-driver-knowledge-test/payment-summary"},{number:6,route:"/book-taxi-driver-knowledge-test/success"},{number:7,route:"/book-taxi-driver-knowledge-test/something-went-wrong"},{number:8,route:"/book-taxi-driver-knowledge-test/failed-booking"}]},636:function(e,t,n){var r={"./af":229,"./af.js":229,"./ar":230,"./ar-dz":231,"./ar-dz.js":231,"./ar-kw":232,"./ar-kw.js":232,"./ar-ly":233,"./ar-ly.js":233,"./ar-ma":234,"./ar-ma.js":234,"./ar-sa":235,"./ar-sa.js":235,"./ar-tn":236,"./ar-tn.js":236,"./ar.js":230,"./az":237,"./az.js":237,"./be":238,"./be.js":238,"./bg":239,"./bg.js":239,"./bm":240,"./bm.js":240,"./bn":241,"./bn.js":241,"./bo":242,"./bo.js":242,"./br":243,"./br.js":243,"./bs":244,"./bs.js":244,"./ca":245,"./ca.js":245,"./cs":246,"./cs.js":246,"./cv":247,"./cv.js":247,"./cy":248,"./cy.js":248,"./da":249,"./da.js":249,"./de":250,"./de-at":251,"./de-at.js":251,"./de-ch":252,"./de-ch.js":252,"./de.js":250,"./dv":253,"./dv.js":253,"./el":254,"./el.js":254,"./en-SG":255,"./en-SG.js":255,"./en-au":256,"./en-au.js":256,"./en-ca":257,"./en-ca.js":257,"./en-gb":258,"./en-gb.js":258,"./en-ie":259,"./en-ie.js":259,"./en-il":260,"./en-il.js":260,"./en-nz":261,"./en-nz.js":261,"./eo":262,"./eo.js":262,"./es":263,"./es-do":264,"./es-do.js":264,"./es-us":265,"./es-us.js":265,"./es.js":263,"./et":266,"./et.js":266,"./eu":267,"./eu.js":267,"./fa":268,"./fa.js":268,"./fi":269,"./fi.js":269,"./fo":270,"./fo.js":270,"./fr":271,"./fr-ca":272,"./fr-ca.js":272,"./fr-ch":273,"./fr-ch.js":273,"./fr.js":271,"./fy":274,"./fy.js":274,"./ga":275,"./ga.js":275,"./gd":276,"./gd.js":276,"./gl":277,"./gl.js":277,"./gom-latn":278,"./gom-latn.js":278,"./gu":279,"./gu.js":279,"./he":280,"./he.js":280,"./hi":281,"./hi.js":281,"./hr":282,"./hr.js":282,"./hu":283,"./hu.js":283,"./hy-am":284,"./hy-am.js":284,"./id":285,"./id.js":285,"./is":286,"./is.js":286,"./it":287,"./it-ch":288,"./it-ch.js":288,"./it.js":287,"./ja":289,"./ja.js":289,"./jv":290,"./jv.js":290,"./ka":291,"./ka.js":291,"./kk":292,"./kk.js":292,"./km":293,"./km.js":293,"./kn":294,"./kn.js":294,"./ko":295,"./ko.js":295,"./ku":296,"./ku.js":296,"./ky":297,"./ky.js":297,"./lb":298,"./lb.js":298,"./lo":299,"./lo.js":299,"./lt":300,"./lt.js":300,"./lv":301,"./lv.js":301,"./me":302,"./me.js":302,"./mi":303,"./mi.js":303,"./mk":304,"./mk.js":304,"./ml":305,"./ml.js":305,"./mn":306,"./mn.js":306,"./mr":307,"./mr.js":307,"./ms":308,"./ms-my":309,"./ms-my.js":309,"./ms.js":308,"./mt":310,"./mt.js":310,"./my":311,"./my.js":311,"./nb":312,"./nb.js":312,"./ne":313,"./ne.js":313,"./nl":314,"./nl-be":315,"./nl-be.js":315,"./nl.js":314,"./nn":316,"./nn.js":316,"./pa-in":317,"./pa-in.js":317,"./pl":318,"./pl.js":318,"./pt":319,"./pt-br":320,"./pt-br.js":320,"./pt.js":319,"./ro":321,"./ro.js":321,"./ru":322,"./ru.js":322,"./sd":323,"./sd.js":323,"./se":324,"./se.js":324,"./si":325,"./si.js":325,"./sk":326,"./sk.js":326,"./sl":327,"./sl.js":327,"./sq":328,"./sq.js":328,"./sr":329,"./sr-cyrl":330,"./sr-cyrl.js":330,"./sr.js":329,"./ss":331,"./ss.js":331,"./sv":332,"./sv.js":332,"./sw":333,"./sw.js":333,"./ta":334,"./ta.js":334,"./te":335,"./te.js":335,"./tet":336,"./tet.js":336,"./tg":337,"./tg.js":337,"./th":338,"./th.js":338,"./tl-ph":339,"./tl-ph.js":339,"./tlh":340,"./tlh.js":340,"./tr":341,"./tr.js":341,"./tzl":342,"./tzl.js":342,"./tzm":343,"./tzm-latn":344,"./tzm-latn.js":344,"./tzm.js":343,"./ug-cn":345,"./ug-cn.js":345,"./uk":346,"./uk.js":346,"./ur":347,"./ur.js":347,"./uz":348,"./uz-latn":349,"./uz-latn.js":349,"./uz.js":348,"./vi":350,"./vi.js":350,"./x-pseudo":351,"./x-pseudo.js":351,"./yo":352,"./yo.js":352,"./zh-cn":353,"./zh-cn.js":353,"./zh-hk":354,"./zh-hk.js":354,"./zh-tw":355,"./zh-tw.js":355};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=636},705:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TypeOfTest=void 0;var r=n(3),a=i(r),o=i(n(2)),u=i(n(53)),l=n(52),s=n(77);function i(e){return e&&e.__esModule?e:{default:e}}var c=t.TypeOfTest=function(e){var t=e.context,n=e.history;return a.default.createElement(r.Fragment,null,a.default.createElement("form",{onSubmit:function(e){e.preventDefault(),n.push((0,s.getPageRoute)(2))}},a.default.createElement("h1",null,t.formHeader),a.default.createElement(l.RadioInputsContainer,{onChange:t.onChange,options:[{label:"Private hire",id:"private",name:"testType",value:"Private hire"},{label:"Hackney carriage",id:"hackney",name:"testType",value:"Hackney carriage"},{label:"Executive hire",id:"executive",name:"testType",value:"Executive hire"},{label:"Assisted transport",id:"assisted",name:"testType",value:"Assisted transport"}],value:t.testType.value,displayHeading:!0,header:"Which taxi driver knowledge test do you want to take?",enableH2:!0}),a.default.createElement(l.Button,{label:"Next step",isValid:t.testType.isValid})))};c.propTypes={context:o.default.object,history:o.default.object},t.default=(0,u.default)(c)},706:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Resit=void 0;var r=n(3),a=c(r),o=c(n(2)),u=c(n(53)),l=n(52),s=n(77),i=c(n(0));function c(e){return e&&e.__esModule?e:{default:e}}var f=t.Resit=function(e){var t=e.context,n=e.history,o=function(e){return(0,i.default)(e).format("YYYY-MM-DD")>(0,i.default)().format("YYYY-MM-DD")},u=[{label:"Yes",id:"yes",name:"isResit",value:"false"},{label:"No",id:"no",name:"isResit",value:"true",renderIfChecked:function(){return t.isResit.value&&a.default.createElement(l.DatePicker,{label:"Select the date of your last test",description:"You'll be able to choose a new test 4 weeks from this date",id:"previous-test-date",enableH2:!1,name:"previousTestDate",value:t.previousTestDate.value,onChange:t.onChange,validationMessage:"Check the date and try again",isOutsideRange:o})}}];return a.default.createElement(r.Fragment,null,a.default.createElement("form",{onSubmit:function(e){t.isResit.value||(t.previousTestDate.value="",t.previousTestDate.isValid=!1),e.preventDefault(),n.push((0,s.getPageRoute)(3))}},a.default.createElement("h1",null,t.formHeader),a.default.createElement("h2",null,"Is this the first time you'll be taking the taxi driver knowledge test?"),a.default.createElement(l.RadioInputsContainer,{onChange:function(e,n){return t.onChange({target:{name:e.target.name,value:"true"===e.target.value}},n)},options:u,value:t.isResit.value,displayHeading:!1}),a.default.createElement(l.Button,{label:"Next step",isValid:t.isResit.isValid&&(!t.isResit.value||t.previousTestDate.isValid)})),a.default.createElement(l.Anchor,{label:"Back",history:n}))};f.propTypes={context:o.default.object,history:o.default.object},t.default=(0,u.default)(f)},707:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AboutYourself=void 0;var r=n(3),a=i(r),o=n(52),u=i(n(2)),l=i(n(53)),s=n(77);function i(e){return e&&e.__esModule?e:{default:e}}var c=t.AboutYourself=function(e){var t=e.context,n=e.history;return a.default.createElement(r.Fragment,null,a.default.createElement("form",{onSubmit:function(e){e.preventDefault(),n.push((0,s.getPageRoute)(4))}},a.default.createElement("h1",null,t.formHeader),a.default.createElement("h2",null,"Tell us about yourself"),a.default.createElement(o.TextInputContainer,{label:"First name",id:"firstName",type:"text",maxLength:"35",optional:!1,value:t.firstName.value,onChange:t.onChange}),a.default.createElement(o.TextInputContainer,{label:"Last name",id:"lastName",type:"text",maxLength:"60",optional:!1,value:t.lastName.value,onChange:t.onChange}),a.default.createElement(o.TextInputContainer,{label:"Phone number",id:"phoneNumber",type:"tel",value:t.phoneNumber.value,onChange:t.onChange}),a.default.createElement(o.TextInputContainer,{label:"Email address",id:"emailAddress",type:"email",value:t.emailAddress.value,onChange:t.onChange}),a.default.createElement(o.AddressPicker,{name:"address",address:t.address.value,automaticLabel:"Enter your postcode",automaticTextLabel:"Select the address below",useVerintLookup:!0,useStockportPostcode:!0,enableHeading:!1,shouldDisplayManualSearch:!1,showManualOption:!0,manualLabel:"Enter your address",onChange:t.onChange}),a.default.createElement(o.Button,{isValid:t.address.isValid&&t.phoneNumber.isValid&&t.emailAddress.isValid,label:"Next step"})),a.default.createElement(o.Anchor,{label:"Back",history:n}))};c.propTypes={context:u.default.object,history:u.default.object},t.default=(0,l.default)(c)},708:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectAppointment=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(3),o=d(a),u=d(n(2)),l=d(n(53)),s=n(77),i=n(52),c=n(402),f=d(n(0));function d(e){return e&&e.__esModule?e:{default:e}}function p(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(a,o){try{var u=t[a](o),l=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}("next")})}}var m=t.SelectAppointment=function(e){function t(e){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r,a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.componentDidMount=p(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.getAvailableAppointments)(a.props.context.isResit.value,(0,f.default)(a.state.dateToSearchFrom).format(),(0,f.default)(a.state.dateToSearchFrom).add(18,"weeks").format());case 2:t=e.sent,a.setState({appointments:t.appointments});case 4:case"end":return e.stop()}},e,n)})),a.onSubmit=(r=p(regeneratorRuntime.mark(function e(t){var r,o,u,l,i,d,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isLoading:!0}),r=a.props,o=r.context,u=o.setBookingId,l=o.isResit,i=o.testDate,d=r.history,e.next=5,(0,c.reserveAppointment)(l.value,(0,f.default)(i.value).format());case 5:p=e.sent,u(p.bookingId),200===p.status?d.push((0,s.getPageRoute)(5)):d.push((0,s.getPageRoute)(7));case 8:case"end":return e.stop()}},e,n)})),function(e){return r.apply(this,arguments)});var o=a.props.context.isResit.value?(0,f.default)(a.props.context.previousTestDate.value).add(4,"weeks"):(0,f.default)();return a.state={appointments:[],showMore:!0,isLoading:!1,dateToSearchFrom:o<(0,f.default)()?(0,f.default)():o},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){var e=this,t=this.props.context,n=t.formHeader,r=t.onChange,u=t.testDate,l=this.state,s=l.showMore,c=l.appointments,d=l.dateToSearchFrom,p=l.isLoading;return o.default.createElement(a.Fragment,null,o.default.createElement("form",{onSubmit:this.onSubmit},o.default.createElement("h1",null,n),o.default.createElement(i.AlertForm,{level:"information",content:"The test usually takes place on a Wednesday. There may be times when we run the test on other days, these will be displayed below."}),o.default.createElement(i.SelectableButtonList,{heading:"Select an appointment",enableH2:!0,displayHeading:!0,enableRadioH2:!1,buttonList:s?c.filter(function(e){return(0,f.default)(e.date,"DD/MM/YYYY",!0).format()<(0,f.default)(d).add(12,"weeks").format()}):c,onChange:r,showMore:s,onClick:function(t){t.preventDefault(),e.setState({showMore:!1})},cssClass:"new-appointment-radio-container"}),o.default.createElement(i.Button,{isValid:u.isValid,label:"Next step",isLoading:p})),o.default.createElement(i.Anchor,{label:"Back",history:history}))}}]),t}();m.propTypes={context:u.default.object,history:u.default.object},t.default=(0,l.default)(m)},710:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PaymentSummary=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(403);var a=n(3),o=p(a),u=n(52),l=p(n(2)),s=n(402),i=n(77),c=p(n(53)),f=p(n(773)),d=p(n(0));function p(e){return e&&e.__esModule?e:{default:e}}var m=t.PaymentSummary=function(e){function t(e){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r,a,o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.onChangeRecaptcha=function(e){o.setState({recaptchaValid:!!e})},o.onSubmit=(r=regeneratorRuntime.mark(function e(t){var r,a,u,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=o.props,a=r.context,u=r.history,o.setState({isLoading:!0}),e.next=5,(0,s.getPaymentUrl)(a.bookingId,a.testDate);case 5:200===(l=e.sent).status?window.location.assign(l.url):u.push((0,i.getPageRoute)(7));case 7:case"end":return e.stop()}},e,n)}),a=function(){var e=r.apply(this,arguments);return new Promise(function(t,n){return function r(a,o){try{var u=e[a](o),l=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});t(l)}("next")})},function(e){return a.apply(this,arguments)}),o.state={isLoading:!1,recaptchaValid:!1},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.recaptchaValid,r=this.props,a=r.context,l=a.displayRecaptcha,s=a.formHeader,i=a.testDate,c=r.history;return o.default.createElement("form",{onSubmit:this.onSubmit},o.default.createElement("h1",null,s),o.default.createElement("h2",null,"Your booking summary"),o.default.createElement("p",null,"Your booking to take the taxi driver knowledge test is at ",(0,d.default)(i.value).format("H:mma")," on ",(0,d.default)(i.value).format("dddd D MMMM"),"."),o.default.createElement("p",null,"You'll now be taken to our online system to make the payment."),o.default.createElement("p",null,"The cost is £70."),l&&o.default.createElement("div",{className:"recaptcha"},o.default.createElement(f.default,{sitekey:"6LfAeSIUAAAAAGsx6tYHz4MIvhP0pSx9Tq7Hf8Yx",onChange:this.onChangeRecaptcha,name:"recaptcharesult"})),o.default.createElement(u.Button,{id:"continue-to-payment",label:"Continue to payment",isValid:n||!l,isLoading:t}),o.default.createElement(u.Anchor,{label:"Previous",history:c}))}}]),t}();m.propTypes={context:l.default.object,history:l.default.object},t.default=(0,c.default)(m)},761:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Success=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(3),o=f(a),u=f(n(2)),l=f(n(53)),s=f(n(420)),i=f(n(0)),c=f(n(764));function f(e){return e&&e.__esModule?e:{default:e}}var d=t.Success=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){(0,c.default)(!0)},e.history.block(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){var e=s.default.parse(location.search).testDate;return o.default.createElement(a.Fragment,null,o.default.createElement("section",{className:"header-container"},o.default.createElement("h1",null,"Booking complete"),o.default.createElement("p",{className:"h2"},"Thank you for booking to take the taxi driver knowledge test")),o.default.createElement("section",{className:"body-container"},o.default.createElement("p",null,"Your appointment to take the hackney carriage taxi driver knowledge test is at ",o.default.createElement("b",null,(0,i.default)(e,"YYYY-MM-DD[T]HH:mm:ss").format("hh:mmA"))," on ",o.default.createElement("b",null,(0,i.default)(e,"YYYY-MM-DD[T]HH:mm:ss").format("dddd do MMMM YYYY"))," "),o.default.createElement("p",null,"We've sent you a confirmation email including this information."),o.default.createElement("h2",null,"What happens next"),o.default.createElement("p",null,"On the day of your test you'll need to go to the Town Hall, Edward Street, Stockport, SK1 3XE and check in at reception."),o.default.createElement("p",null,"Please arrive 15 minutes early for your test to allow time for ID checks. If you're late you'll be turned away."),o.default.createElement("p",null,o.default.createElement("strong",null,"What you need to bring to your test")),o.default.createElement("p",null,"You'll need to bring the following with you to the test:"),o.default.createElement("p",null,o.default.createElement("ul",null,o.default.createElement("li",null,"utility bill or bank statement from the last 3 months with your current name and address on"),o.default.createElement("li",null,"passport or other suitable evidence of your right to work in the UK"),o.default.createElement("li",null,"DVLA photocard driving licence showing your current address"))),o.default.createElement("p",null,o.default.createElement("strong",null,"Manage your test online")),o.default.createElement("p",null,"You can change your test date and time online up until midday the day before by using My Account."),o.default.createElement("p",null,o.default.createElement("a",{className:"button-primary",href:"https://myaccount.stockport.gov.uk/"},"Go to My Account"))))}}]),t}();d.propTypes={context:u.default.object,history:u.default.object},t.default=(0,l.default)(d)},764:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=document.getElementById("breadcrumb");null!==t&&(e?t.classList.remove("hidden"):t.classList.add("hidden"))}},765:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SomethingWentWrong=void 0;var r=s(n(3)),a=s(n(2)),o=s(n(420)),u=s(n(53)),l=n(52);function s(e){return e&&e.__esModule?e:{default:e}}var i=t.SomethingWentWrong=function(e){var t=e.history,n=e.location,a=o.default.parse(n.search).paymentUrl;return r.default.createElement(l.ErrorPage,{title:"We're sorry, the payment was unsuccessful",errorMessage:function(){return r.default.createElement("p",null,"Please try again if you want to continue with the booking.")},showSubtitle:!1,links:[{location:a,text:"Continue with the booking"},{location:"https://www.stockport.gov.uk",text:"Go to the homepage",class:"button-secondary"}],history:t})};i.propTypes={history:a.default.object,location:a.default.object},t.default=(0,u.default)(i)},766:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FailedBooking=void 0;var r=n(3),a=s(r),o=s(n(2)),u=s(n(53)),l=n(52);function s(e){return e&&e.__esModule?e:{default:e}}var i=t.FailedBooking=function(e){var t=e.history;return a.default.createElement(l.ErrorPage,{title:"Sorry, something went wrong",errorMessage:function(){return a.default.createElement(r.Fragment,null,a.default.createElement("p",null,"We're sorry, something went wrong. We may have taken the money from your account but not booked your test."),a.default.createElement("p",null,"Please ring the contact centre on ",a.default.createElement("strong",null,"0161 217 6111")," to make sure your booking is complete."))},showSubtitle:!1,history:t})};i.propTypes={history:o.default.object},t.default=(0,u.default)(i)},767:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(3),o=s(a),u=s(n(2)),l=n(401);function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChange=function(e,t){var r=Object.assign({},n.state);r[e.target.name].value=e.target.value,r[e.target.name].isValid=t,n.setState(r)},n.onFormSubmission=function(){var e=Object.assign({},n.state);e.submittedFormSuccessfully=!0,n.setState(e)},n.state={formHeader:"Book your taxi driver knowledge test",bookingId:"",testDate:{value:"",isValid:!1},testType:{value:"",isValid:!1},isResit:{value:"",isValid:!1},previousTestDate:{value:"",isValid:!1},firstName:{value:"",isValid:!1},lastName:{value:"",isValid:!1},phoneNumber:{value:"",isValid:!1},emailAddress:{value:"",isValid:!1},address:{value:"",isValid:!1},displayRecaptcha:null!=document.getElementById("displayRecaptcha")&&"true"===document.getElementById("displayRecaptcha").innerHTML,onChange:n.onChange,setBookingId:function(e){return n.setState({bookingId:e})}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return o.default.createElement(l.Context.Provider,{value:this.state},this.props.children)}}]),t}();i.propTypes={history:u.default.object,context:u.default.object,children:u.default.object,mockState:u.default.object},t.default=i},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPageRoute=void 0;var r,a=n(635),o=(r=a)&&r.__esModule?r:{default:r};t.getPageRoute=function(e){return o.default.filter(function(t){return t.number===e})[0].route}},772:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollToTop=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(3),u=n(182),l=n(2),s=(r=l)&&r.__esModule?r:{default:r};var i=t.ScrollToTop=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}();i.propTypes={location:s.default.object,children:s.default.object},t.default=(0,u.withRouter)(i)}});