module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=12)}([function(t,e){t.exports=require("react")},function(t,e,r){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=r(0)},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,s(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,n.Component),function(t,e,r){e&&i(t.prototype,e)}(e,[{key:"render",value:function(){var t=this.props,e=t.ifTrue,r=t.show,n=t.elseShow;return o.a.createElement(o.a.Fragment,null,e&&r,n&&!e&&n)}}]),e}();function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),m(h(h(r=function(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?h(t):e}(this,d(e).call(this,t)))),"toggleDropdown",(function(){r.setState((function(t){return{dropdownOpen:!t.dropdownOpen}}))})),m(h(h(r)),"openDropdown",(function(){r.setState({dropdownOpen:!0})})),m(h(h(r)),"closeDropdown",(function(){r.setState({dropdownOpen:!1})})),r.state={dropdownOpen:!1},r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,n.Component),function(t,e,r){e&&p(t.prototype,e)}(e,[{key:"render",value:function(){var t=this.state.dropdownOpen;return o.a.createElement(n.Fragment,null,this.props.render(t,this.toggleDropdown,this.openDropdown,this.closeDropdown))}}]),e}();r.d(e,"ConditionallyRender",(function(){return l})),r.d(e,"Dropdown",(function(){return y}));var g={ConditionallyRender:l,Dropdown:y};e.default=g}])},function(t,e,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),i=[];function c(t){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===t){e=r;break}return e}function s(t,e){for(var r={},n=[],o=0;o<t.length;o++){var a=t[o],s=e.base?a[0]+e.base:a[0],u=r[s]||0,l="".concat(s," ").concat(u);r[s]=u+1;var f=c(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:l,updater:m(p,e),references:1}),n.push(l)}return n}function u(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function d(t,e,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var b=null,h=0;function m(t,e){var r,n,o;if(e.singleton){var a=h++;r=b||(b=u(e)),n=p.bind(null,r,a,!1),o=p.bind(null,r,a,!0)}else r=u(e),n=d.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=c(r[n]);i[o].references--}for(var a=s(t,e),u=0;u<r.length;u++){var l=c(r[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=a}}}},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(i=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[r].concat(a).concat([o]).join("\n")}var i,c,s;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},function(t,e,r){var n=r(2),o=r(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(n(o,a),o.locals?o.locals:{});t.exports=i},function(t,e,r){(e=r(3)(!1)).push([t.i,".react-chatbot-kit-user-chat-message-container {\r\n  display: flex;\r\n  margin: 15px 0;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.react-chatbot-kit-user-avatar-container {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  margin-left: 12.5px;\r\n  background-color: #3d4e8d;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.react-chatbot-kit-user-avatar-icon {\r\n  fill: #fff;\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.react-chatbot-kit-user-chat-message {\r\n  background-color: #f1f1f1;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  font-size: 0.9rem;\r\n  color: #585858;\r\n  font-weight: medium;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n.react-chatbot-kit-user-chat-message-arrow {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 8px solid transparent;\r\n  border-bottom: 8px solid transparent;\r\n  border-left: 8px solid #f1f1f1;\r\n  position: absolute;\r\n  right: -7px;\r\n  top: 13px;\r\n}\r\n",""]),t.exports=e},function(t,e,r){var n=r(2),o=r(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(n(o,a),o.locals?o.locals:{});t.exports=i},function(t,e,r){(e=r(3)(!1)).push([t.i,".react-chatbot-kit-chat-bot-message-container {\r\n  display: flex;\r\n  margin: 15px 0;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.react-chatbot-kit-chat-bot-avatar-container {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  font-size: 1.2rem;\r\n  margin-right: 12.5px;\r\n  background-color: #d8d8d8;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, .12);\r\n}\r\n\r\n.react-chatbot-kit-chat-bot-avatar-icon {\r\n  fill: #494646;\r\n  width: 22.5px;\r\n  height: 22.5px;\r\n}\r\n\r\n.react-chatbot-kit-chat-bot-avatar-letter {\r\n  color: #1d1d1d;\r\n}\r\n\r\n.react-chatbot-kit-chat-bot-message {\r\n  background-color: #2898ec;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  font-size: 0.9rem;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  position: relative;\r\n  width: 184.5px;\r\n  margin-left: auto;\r\n  text-align: left;\r\n}\r\n\r\n.react-chatbot-kit-chat-bot-message-arrow {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 8px solid transparent;\r\n  border-bottom: 8px solid transparent;\r\n  border-right: 8px solid #2898ec;\r\n  position: absolute;\r\n  left: -7px;\r\n  top: 13px;\r\n}\r\n\r\n.react-chatbot-kit-chat-bot-loading-icon-container {\r\n  height: 17px;\r\n  width: 25px;\r\n}\r\n\r\n.chatbot-loader-container {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n}\r\n\r\n#chatbot-loader #chatbot-loader-dot1 {\r\n  animation: load 1s infinite;\r\n}\r\n\r\n#chatbot-loader #chatbot-loader-dot2 {\r\n  animation: load 1s infinite;\r\n  animation-delay: 0.2s;\r\n}\r\n\r\n#chatbot-loader #chatbot-loader-dot3 {\r\n  animation: load 1s infinite;\r\n  animation-delay: 0.4s;\r\n}\r\n\r\n@keyframes load {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n",""]),t.exports=e},function(t,e,r){var n=r(2),o=r(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(n(o,a),o.locals?o.locals:{});t.exports=i},function(t,e,r){(e=r(3)(!1)).push([t.i,".react-chatbot-kit-chat-container {\r\n  position: relative;\r\n  width: 275px;\r\n}\r\n\r\n.react-chatbot-kit-chat-inner-container {\r\n  height: 500px;\r\n  background-color: #fff;\r\n  margin-bottom: 15px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.react-chatbot-kit-chat-header {\r\n  border-top-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  background-color: #efefef;\r\n  font-family: Arial;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 0.85rem;\r\n  color: #514f4f;\r\n  padding: 12.5px;\r\n  font-weight: bold;\r\n  justify-content: space-between;\r\n}\r\n\r\n.react-chatbot-kit-chat-input-container {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  display: flex;\r\n}\r\n\r\n.react-chatbot-kit-chat-message-container {\r\n  padding: 0 17.5px 10px 17.5px;\r\n  overflow: scroll;\r\n  height: 424px;\r\n}\r\n\r\n.react-chatbot-kit-chat-input {\r\n  width: 100%;\r\n  padding: 12.5px;\r\n  border: none;\r\n  font-size: 0.85rem;\r\n  border-top: 1px solid #d8d8d8;\r\n  border-bottom-left-radius: 5px;\r\n  outline: none;\r\n}\r\n\r\n.react-chatbot-kit-chat-input-form {\r\n  width: 100%;\r\n  display: flex;\r\n}\r\n\r\n.react-chatbot-kit-chat-input::placeholder {\r\n  color: #585858;\r\n}\r\n\r\n.react-chatbot-kit-chat-btn-send {\r\n  background-color: #2898ec;\r\n  width: 100px;\r\n  border: none;\r\n  color: #fff;\r\n  border-bottom-right-radius: 5px;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.react-chatbot-kit-chat-btn-send-icon {\r\n  fill: #fff;\r\n  width: 15px;\r\n}\r\n.react-chatbot-kit-chat-btn-close-icon {\r\n  fill: #fff;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n",""]),t.exports=e},function(t,e,r){var n=r(2),o=r(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(n(o,a),o.locals?o.locals:{});t.exports=i},function(t,e,r){(e=r(3)(!1)).push([t.i,".react-chatbot-kit-error {\r\n  background-color: #fff;\r\n  border-radius: 3px;\r\n  padding: 15px;\r\n}\r\n\r\n.react-chatbot-kit-error-container {\r\n  width: 260px;\r\n}\r\n\r\n.react-chatbot-kit-error-header {\r\n  font-size: 1.3rem;\r\n  color: #1d1d1d;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.react-chatbot-kit-error-docs {\r\n  display: block;\r\n  margin: 25px auto;\r\n  color: rgb(56, 104, 139);\r\n  padding: 8px;\r\n  border: 1px solid rgb(40, 152, 236);\r\n  width: 130px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  font-size: 1rem;\r\n}\r\n",""]),t.exports=e},function(t,e,r){"use strict";r.r(e),r.d(e,"Chatbot",(function(){return ot})),r.d(e,"createChatBotMessage",(function(){return f}));var n=r(0),o=r.n(n),a=r(1);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s,u=(s=1,function(){return s+=1}),l=function(t,e){return{message:t,type:e,id:u()}},f=function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},l(t,"bot"),{},e,{loading:!0})},p=function(t){if(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return t.apply(void 0,r)}};function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var b=({styles:t={},...e})=>o.a.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),o.a.createElement("path",{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"})),h=(r(4),function(t){var e=t.message,r=t.customComponents,n=t.showUserAvatar;return o.a.createElement("div",{className:"react-chatbot-kit-user-chat-message-container"},o.a.createElement(a.ConditionallyRender,{ifTrue:r.userChatMessage,show:p(r.userChatMessage,{message:e}),elseShow:o.a.createElement("div",{className:"react-chatbot-kit-user-chat-message"},e,o.a.createElement("div",{className:"react-chatbot-kit-user-chat-message-arrow"}))}),o.a.createElement(a.ConditionallyRender,{ifTrue:r.userAvatar,show:p(r.userAvatar),elseShow:n?o.a.createElement("div",{className:"react-chatbot-kit-user-avatar"},o.a.createElement("div",{className:"react-chatbot-kit-user-avatar-container"},o.a.createElement(b,{className:"react-chatbot-kit-user-avatar-icon"}))):null}))}),m=function(){return o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-avatar"},o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-avatar-container"},o.a.createElement("p",{className:"react-chatbot-kit-chat-bot-avatar-letter"},"B")))},y=function(){return o.a.createElement("div",{className:"chatbot-loader-container"},o.a.createElement("svg",{id:"dots",width:"50px",height:"21px",viewBox:"0 0 132 58",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",{stroke:"none",fill:"none"},o.a.createElement("g",{id:"chatbot-loader",fill:"#fff"},o.a.createElement("circle",{id:"chatbot-loader-dot1",cx:"25",cy:"30",r:"13"}),o.a.createElement("circle",{id:"chatbot-loader-dot2",cx:"65",cy:"30",r:"13"}),o.a.createElement("circle",{id:"chatbot-loader-dot3",cx:"105",cy:"30",r:"13"})))))};r(6);function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var j=function(t){var e=t.message,r=t.withAvatar,i=(t.loading,t.messages,t.customComponents),c=t.setState,s=t.customStyles,u=t.delay,l=(t.scrollIntoView,t.id,w(Object(n.useState)(!1),2)),f=l[0],d=l[1];Object(n.useEffect)((function(){u?setTimeout((function(){return d(!0)}),u):d(!0),c((function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t)}))}),[u]);var b={},h={};return s&&(b.backgroundColor=s.backgroundColor,b.color=s.color||"#fff",h.borderRightColor=s.backgroundColor),o.a.createElement(a.ConditionallyRender,{ifTrue:f,show:o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-message-container"},o.a.createElement(a.ConditionallyRender,{ifTrue:r,show:o.a.createElement(a.ConditionallyRender,{ifTrue:i.botAvatar,show:p(i.botAvatar),elseShow:o.a.createElement(m,null)})}),o.a.createElement(a.ConditionallyRender,{ifTrue:i.botChatMessage,show:p(i.botChatMessage,{message:e,loader:o.a.createElement(y,null)}),elseShow:e?o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-message",style:b},o.a.createElement(a.ConditionallyRender,{ifTrue:!f,show:o.a.createElement(y,null),elseShow:o.a.createElement("span",null,e)}),o.a.createElement(a.ConditionallyRender,{ifTrue:r,show:o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-message-arrow",style:h})})):null}))})};function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){E(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function E(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function k(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return C(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var A=function(t){var e=t.passDownProps,r=t.messages,i=t.setState,c=t.scrollIntoView,s=t.state,u=t.customComponents,l=t.customStyles,f=t.widgetRegistry,p=t.withAvatar,d=k(Object(n.useState)(!0),2),b=d[0],h=d[1];return Object(n.useEffect)((function(){setTimeout((function(){return h(!1)}),e.delay||50)}),[]),b?o.a.createElement(y,null):o.a.createElement(n.Fragment,null,o.a.createElement(j,P({},e,{customStyles:l.botMessageBox,messages:r,withAvatar:p,setState:i,customComponents:u,scrollIntoView:c})),o.a.createElement(a.ConditionallyRender,{ifTrue:!b,show:f.getWidget(e.widget,S({},s,{scrollIntoView:c,passDownProps:e}))}))},T=function(){return o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-avatar"},o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-avatar-container"},o.a.createElement("p",{className:"react-chatbot-kit-chat-bot-avatar-letter"},"B")))};function M(){return(M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var N=({styles:t={},...e})=>o.a.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),o.a.createElement("path",{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}));function D(){return(D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var _=({styles:t={},...e})=>o.a.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.001 512.001"},e),o.a.createElement("path",{d:"M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z"}));r(8);function I(t){return function(t){if(Array.isArray(t))return H(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||F(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(){return(R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function B(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?B(Object(r),!0).forEach((function(e){L(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function L(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function U(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(t,e)||F(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(t,e){if(t){if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(t,e):void 0}}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var V=function(t){var e=t.state,r=t.setState,i=t.widgetRegistry,c=t.messageParser,s=t.customComponents,u=t.botName,f=t.showHeaderAvatar,d=t.showUserAvatar,b=t.chatInputPlaceholder,m=t.customStyles,y=t.hideChat,g=e.messages,v=Object(n.useRef)(null),w=U(Object(n.useState)(""),2),O=w[0],x=w[1],S=function(){setTimeout((function(){v.current.scrollTop=v.current.scrollHeight}),50)};Object(n.useEffect)((function(){S()}));var E={};return m&&m.chatButton&&(E.backgroundColor=m.chatButton.backgroundColor),Object(n.useEffect)((function(){c.onOpen&&"function"==typeof c.onOpen&&c.onOpen()}),[]),o.a.createElement("div",{className:"react-chatbot-kit-chat-container"},o.a.createElement("div",{className:"react-chatbot-kit-chat-inner-container"},o.a.createElement("div",{className:"react-chatbot-kit-chat-header",style:m.chatHeader||{}},o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(a.ConditionallyRender,{ifTrue:f,show:o.a.createElement(a.ConditionallyRender,{ifTrue:s.botAvatar,show:p(s.botAvatar),elseShow:o.a.createElement(T,null)})}),u),o.a.createElement("div",{onClick:y,style:{cursor:"pointer"}},o.a.createElement(_,{className:"react-chatbot-kit-chat-btn-close-icon"}))),o.a.createElement("div",{className:"react-chatbot-kit-chat-message-container",style:m.chatMessagesContainer||{},ref:v},g.map((function(t,n){if("bot"!==t.type)return o.a.createElement(h,{message:t.message,key:t.id,customComponents:s,showUserAvatar:d});var a;a=t.withAvatar?t.withAvatar:function(t,e){if(0===e)return!0;var r=t[e-1];return!("bot"===r.type&&!r.widget)}(g,n,t.withAvatar);var c={passDownProps:z({},t),setState:r,state:e,customComponents:s,widgetRegistry:i,messages:g};return t.widget?o.a.createElement(A,R({customStyles:m,scrollIntoView:S,withAvatar:a},c,{key:t.id})):o.a.createElement(j,R({customStyles:m.botMessageBox,key:t.id,withAvatar:a},c.passDownProps,{customComponents:s,messages:g,setState:r}))})),o.a.createElement("div",{style:{paddingBottom:"15px"}}),e.error&&o.a.createElement("div",null,o.a.createElement("span",{style:{color:"red",fontSize:"0.85em"}},e.error))),o.a.createElement("div",{className:"react-chatbot-kit-chat-input-container"},o.a.createElement("form",{className:"react-chatbot-kit-chat-input-form",onSubmit:function(t){t.preventDefault(),O&&(r((function(t){return z({},t,{messages:[].concat(I(t.messages),[l(O,"user")])})})),c.parse(O),S(),x(""))}},o.a.createElement("input",{className:"react-chatbot-kit-chat-input",placeholder:b||"Write your message here",value:O,onChange:function(t){return x(t.target.value)}}),o.a.createElement("button",{className:"react-chatbot-kit-chat-btn-send",style:E},o.a.createElement(N,{className:"react-chatbot-kit-chat-btn-send-icon"}))))))};function W(t){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function q(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var J=function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),q(this,"addWidget",(function(t){var e=t.widgetName,r=t.widgetFunc,o=t.mapStateToProps,a=t.props;n[e]={widget:r,props:a,mapStateToProps:o}})),q(this,"getWidget",(function(t,e){var r=n[t];if(r){var o,a=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(Object(r),!0).forEach((function(e){q(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({scrollIntoView:e.scrollIntoView},"object"===W(o=r.props)?o:{},{},n.mapStateToProps(r.mapStateToProps,e),{setState:n.setState,actionProvider:n.actionProvider,passDownProps:e.passDownProps});return r.widget(a)}})),q(this,"mapStateToProps",(function(t,e){if(t)return t.reduce((function(t,r){return t[r]=e[r],t}),{})})),this.setState=e,this.actionProvider=r},G=(r(10),function(t){var e=t.message;return o.a.createElement("div",{className:"react-chatbot-kit-error"},o.a.createElement("h1",{className:"react-chatbot-kit-error-header"},"Ooops. Something is missing."),o.a.createElement("div",{className:"react-chatbot-kit-error-container"},o.a.createElement(j,{message:e,withAvatar:!0,loading:!1,id:1,customComponents:{},messages:[]})),o.a.createElement("a",{href:"https://fredrikoseberg.github.io/react-chatbot-kit-docs/",rel:"noopener norefferer",target:"_blank",className:"react-chatbot-kit-error-docs"},"View the docs"))});function K(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function Q(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){K(a,n,o,i,c,"next",t)}function c(t){K(a,n,o,i,c,"throw",t)}i(void 0)}))}}function X(t){return function(t){if(Array.isArray(t))return nt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||rt(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(r),!0).forEach((function(e){tt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function tt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function et(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(t,e)||rt(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rt(t,e){if(t){if("string"==typeof t)return nt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?nt(t,e):void 0}}function nt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var ot=function(t){var e=t.actionProvider,r=t.messageParser,i=t.config,c=t.onOpen,s=et(Object(n.useState)(!1),2),u=s[0],l=s[1];if(!i||!e||!r)return o.a.createElement(G,{message:"I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?"});var d=function(t,e){var r=[];t.initialMessages||r.push("Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages.");var n=new e;return n.parse||r.push("Messageparser must implement the method 'parse', please add this method to your object. The signature is parse(message: string)."),n.onOpen||r.push("Messageparser must implement the method 'onOpen', please add this method to your object. The signature is onOpen(): void."),r}(i,r);if(d.length){var b=d.reduce((function(t,e){return t+=e}),"");return o.a.createElement(G,{message:b})}var h=function(t){return t.state?t.state:{}}(i),m=et(Object(n.useState)(Z({messages:X(i.initialMessages)},h)),2),y=m[0],g=m[1],v=function(t){return t.customStyles||{}}(i),w=function(t){return t.customComponents?t.customComponents:{botMessageBox:{},chatButton:{}}}(i),O=function(t){return t.botName?t.botName:"Bot"}(i),j=function(t){return t.showHeaderAvatar||!1}(i),x=function(t){return t.showUserAvatar||!1}(i),S=function(t){return t.chatInputPlaceholder}(i),E=new e(f,g),P=new J(g,E),k=new r(E,y);(function(t){return t.widgets?t.widgets:[]})(i).forEach((function(t){return P.addWidget(t)}));var C=function(){c&&"function"==typeof c&&c(),l(!0)};return Object(n.useEffect)((function(){function t(){return(t=Q(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,setTimeout(C,h.waitForFirstOpenMs);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),o.a.createElement(a.ConditionallyRender,{ifTrue:u,show:o.a.createElement(V,{state:y,setState:g,widgetRegistry:P,messageParser:k,customComponents:Z({},w),botName:O,showHeaderAvatar:j,showUserAvatar:x,chatInputPlaceholder:S,customStyles:Z({},v),hideChat:function(){l(!1),g((function(t){return Z({},t,{messages:[]})}))}}),elseShow:o.a.createElement("div",{onClick:C,style:{cursor:"pointer"}},o.a.createElement(a.ConditionallyRender,{ifTrue:w.minimizedChat,show:p(w.minimizedChat),elseShow:w.botAvatar?p(w.botAvatar):o.a.createElement(T,null)}))})};e.default=ot}]);