!function(e){function t(t){for(var r,s,u=t[0],i=t[1],l=t[2],f=0,d=[];f<u.length;f++)s=u[f],o[s]&&d.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(c&&c(t);d.length;)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={0:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=i;a.push([359,1]),n()}({181:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPageRoute=void 0;var r,o=n(570),a=(r=o)&&r.__esModule?r:{default:r};t.getPageRoute=function(e){return a.default.filter(function(t){return t.number===e})[0].route}},356:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Context=void 0;var r,o=n(3),a=(r=o)&&r.__esModule?r:{default:r};t.Context=a.default.createContext({})},359:function(e,t,n){n(360),e.exports=n(561)},561:function(e,t,n){"use strict";var r=c(n(3)),o=c(n(45)),a=c(n(566)),s=c(n(642)),u=n(140),i=c(n(643)),l=c(n(647));function c(e){return e&&e.__esModule?e:{default:e}}var f=(0,i.default)();o.default.render(r.default.createElement(s.default,null,r.default.createElement(u.Router,{history:f},r.default.createElement(l.default,null,r.default.createElement(a.default,null)))),document.getElementById("root"))},566:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(3),a=c(o),s=n(140),u=n(181),i=n(182),l=c(n(640));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return a.default.createElement(s.Switch,null,a.default.createElement(s.Route,{exact:!0,path:(0,u.getPageRoute)(1),component:l.default}),a.default.createElement(s.Route,{exact:!0,path:"/error",component:i.ErrorPage}))}}]),t}();t.default=f},570:function(e){e.exports=[{number:1,route:"/book-taxi-driver-knowledge-test/test-type"},{number:2,route:"/book-taxi-driver-knowledge-test/first-time"},{number:3,route:"/book-taxi-driver-knowledge-test/about-yourself"},{number:4,route:"/book-taxi-driver-knowledge-test/choose-appointment"},{number:5,route:"/book-taxi-driver-knowledge-test/payment-summary"},{number:6,route:"/book-taxi-driver-knowledge-test/success"}]},571:function(e,t,n){var r={"./af":184,"./af.js":184,"./ar":185,"./ar-dz":186,"./ar-dz.js":186,"./ar-kw":187,"./ar-kw.js":187,"./ar-ly":188,"./ar-ly.js":188,"./ar-ma":189,"./ar-ma.js":189,"./ar-sa":190,"./ar-sa.js":190,"./ar-tn":191,"./ar-tn.js":191,"./ar.js":185,"./az":192,"./az.js":192,"./be":193,"./be.js":193,"./bg":194,"./bg.js":194,"./bm":195,"./bm.js":195,"./bn":196,"./bn.js":196,"./bo":197,"./bo.js":197,"./br":198,"./br.js":198,"./bs":199,"./bs.js":199,"./ca":200,"./ca.js":200,"./cs":201,"./cs.js":201,"./cv":202,"./cv.js":202,"./cy":203,"./cy.js":203,"./da":204,"./da.js":204,"./de":205,"./de-at":206,"./de-at.js":206,"./de-ch":207,"./de-ch.js":207,"./de.js":205,"./dv":208,"./dv.js":208,"./el":209,"./el.js":209,"./en-SG":210,"./en-SG.js":210,"./en-au":211,"./en-au.js":211,"./en-ca":212,"./en-ca.js":212,"./en-gb":213,"./en-gb.js":213,"./en-ie":214,"./en-ie.js":214,"./en-il":215,"./en-il.js":215,"./en-nz":216,"./en-nz.js":216,"./eo":217,"./eo.js":217,"./es":218,"./es-do":219,"./es-do.js":219,"./es-us":220,"./es-us.js":220,"./es.js":218,"./et":221,"./et.js":221,"./eu":222,"./eu.js":222,"./fa":223,"./fa.js":223,"./fi":224,"./fi.js":224,"./fo":225,"./fo.js":225,"./fr":226,"./fr-ca":227,"./fr-ca.js":227,"./fr-ch":228,"./fr-ch.js":228,"./fr.js":226,"./fy":229,"./fy.js":229,"./ga":230,"./ga.js":230,"./gd":231,"./gd.js":231,"./gl":232,"./gl.js":232,"./gom-latn":233,"./gom-latn.js":233,"./gu":234,"./gu.js":234,"./he":235,"./he.js":235,"./hi":236,"./hi.js":236,"./hr":237,"./hr.js":237,"./hu":238,"./hu.js":238,"./hy-am":239,"./hy-am.js":239,"./id":240,"./id.js":240,"./is":241,"./is.js":241,"./it":242,"./it-ch":243,"./it-ch.js":243,"./it.js":242,"./ja":244,"./ja.js":244,"./jv":245,"./jv.js":245,"./ka":246,"./ka.js":246,"./kk":247,"./kk.js":247,"./km":248,"./km.js":248,"./kn":249,"./kn.js":249,"./ko":250,"./ko.js":250,"./ku":251,"./ku.js":251,"./ky":252,"./ky.js":252,"./lb":253,"./lb.js":253,"./lo":254,"./lo.js":254,"./lt":255,"./lt.js":255,"./lv":256,"./lv.js":256,"./me":257,"./me.js":257,"./mi":258,"./mi.js":258,"./mk":259,"./mk.js":259,"./ml":260,"./ml.js":260,"./mn":261,"./mn.js":261,"./mr":262,"./mr.js":262,"./ms":263,"./ms-my":264,"./ms-my.js":264,"./ms.js":263,"./mt":265,"./mt.js":265,"./my":266,"./my.js":266,"./nb":267,"./nb.js":267,"./ne":268,"./ne.js":268,"./nl":269,"./nl-be":270,"./nl-be.js":270,"./nl.js":269,"./nn":271,"./nn.js":271,"./pa-in":272,"./pa-in.js":272,"./pl":273,"./pl.js":273,"./pt":274,"./pt-br":275,"./pt-br.js":275,"./pt.js":274,"./ro":276,"./ro.js":276,"./ru":277,"./ru.js":277,"./sd":278,"./sd.js":278,"./se":279,"./se.js":279,"./si":280,"./si.js":280,"./sk":281,"./sk.js":281,"./sl":282,"./sl.js":282,"./sq":283,"./sq.js":283,"./sr":284,"./sr-cyrl":285,"./sr-cyrl.js":285,"./sr.js":284,"./ss":286,"./ss.js":286,"./sv":287,"./sv.js":287,"./sw":288,"./sw.js":288,"./ta":289,"./ta.js":289,"./te":290,"./te.js":290,"./tet":291,"./tet.js":291,"./tg":292,"./tg.js":292,"./th":293,"./th.js":293,"./tl-ph":294,"./tl-ph.js":294,"./tlh":295,"./tlh.js":295,"./tr":296,"./tr.js":296,"./tzl":297,"./tzl.js":297,"./tzm":298,"./tzm-latn":299,"./tzm-latn.js":299,"./tzm.js":298,"./ug-cn":300,"./ug-cn.js":300,"./uk":301,"./uk.js":301,"./ur":302,"./ur.js":302,"./uz":303,"./uz-latn":304,"./uz-latn.js":304,"./uz.js":303,"./vi":305,"./vi.js":305,"./x-pseudo":306,"./x-pseudo.js":306,"./yo":307,"./yo.js":307,"./zh-cn":308,"./zh-cn.js":308,"./zh-hk":309,"./zh-hk.js":309,"./zh-tw":310,"./zh-tw.js":310};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=571},640:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TypeOfTest=void 0;var r=n(3),o=l(r),a=l(n(2)),s=l(n(641)),u=n(182),i=n(181);function l(e){return e&&e.__esModule?e:{default:e}}var c=t.TypeOfTest=function(e){var t=e.context,n=e.history;return o.default.createElement(r.Fragment,null,o.default.createElement("form",{onSubmit:function(e){e.preventDefault(),n.push((0,i.getPageRoute)(2))}},o.default.createElement("h1",null,t.formHeader),o.default.createElement(u.RadioInputsContainer,{onChange:t.onChange,options:[{label:"Private hire",id:"private",name:"testType",value:"Private hire"},{label:"Hackney carriage",id:"hackney",name:"testType",value:"Hackney carriage"},{label:"Executive hire",id:"executive",name:"testType",value:"Executive hire"},{label:"Assisted transport",id:"assisted",name:"testType",value:"Assisted transport"}],value:t.testType.value,displayHeading:!0,header:"Which taxi driver knowledge test do you want to take?",enableH2:!0}),o.default.createElement(u.Button,{label:"Next step",isValid:t.testType.isValid})))};c.propTypes={context:a.default.object,history:a.default.object},t.default=(0,s.default)(c)},641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(3),s=(r=a)&&r.__esModule?r:{default:r},u=n(356);t.default=function(e){return function(t){return s.default.createElement(u.Context.Consumer,null,function(n){return s.default.createElement(e,o({},t,{context:n}))})}}},642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(3),a=l(o),s=l(n(2)),u=l(n(0)),i=n(356);function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChange=function(e,t){var r=Object.assign({},n.state);r[e.target.name].value=e.target.value,r[e.target.name].isValid=t,n.setState(r)},n.onAddressChange=function(e,t){var r=Object.assign({},n.state);r.address.value=t,r.address.isValid=e,n.setState(r)},n.onCheckBoxChange=function(e,t){var r=Object.assign({},n.state);r[e.target.name].value=e.target.checked,r[e.target.name].isValid=t,n.setState(r)},n.onChangePaymentDate=function(e,t,r){var o=Object.assign({},n.state);o[e.target.name].value=e.target.value,o[e.target.name].isValid=t,o.applicationDate=r,o.firstPaymentDate=(0,u.default)(o.applicationDate).date(o.paymentDate.value);for(var a=0;o.firstPaymentDate.diff(o.applicationDate,"days")<14||"01January"==o.firstPaymentDate.format("DDMMMM");a++)o.firstPaymentDate=o.firstPaymentDate.add(1,"month");n.setState(o)},n.onFormSubmission=function(){var e=Object.assign({},n.state);e.submittedFormSuccessfully=!0,n.setState(e)},n.state={formHeader:"Book to take your taxi driver knowledge test",testType:{value:"",isValid:!1},displayRecaptcha:null!=document.getElementById("displayRecaptcha")&&"true"===document.getElementById("displayRecaptcha").innerHTML,onChange:n.onChange,onAddressChange:n.onAddressChange,onChangePaymentDate:n.onChangePaymentDate,onCheckBoxChange:n.onCheckBoxChange,onFormSubmission:n.onFormSubmission},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return a.default.createElement(i.Context.Provider,{value:this.state},this.props.children)}}]),t}();c.propTypes={history:s.default.object,context:s.default.object,children:s.default.object,mockState:s.default.object},t.default=c},647:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollToTop=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(3),s=n(140),u=n(2),i=(r=u)&&r.__esModule?r:{default:r};var l=t.ScrollToTop=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}();l.propTypes={location:i.default.string,children:i.default.object},t.default=(0,s.withRouter)(l)}});