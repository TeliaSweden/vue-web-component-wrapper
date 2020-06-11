var wrapVueWebComponent=function(){"use strict";function t(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function s(e){t(a,o,i,s,u,"next",e)}function u(e){t(a,o,i,s,u,"throw",e)}s(void 0)}))}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,e,r){return(f=p()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&l(o,r.prototype),o}).apply(null,arguments)}function d(t){var e="function"==typeof Map?new Map:void 0;return(d=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return f(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?h(t):e}function y(t){var e=p();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var b=/-(\w)/g,w=function(t){return t.replace(b,(function(t,e){return e?e.toUpperCase():""}))},g=/\B([A-Z])/g,S=function(t){return t.replace(g,"-$1").toLowerCase()};function O(t){var e={};return t.forEach((function(t){e[t]=void 0})),e}function m(t,e){e.forEach((function(e){return t.appendChild(e.cloneNode(!0))}))}function _(t,e,r){var n=Array.prototype.slice.call(t.querySelectorAll(e));return r?n.filter(r):n}function j(t,e,r,n,o){return new MutationObserver((function(e,o){e.forEach((function(e){var o=Array.prototype.slice.call(e.addedNodes).filter((function(t){return t.matches&&t.matches(r)}));o.length>0&&t(n?o.filter(n):o)}))})).observe(e,o)}function M(t,e,r){t[e]=[].concat(t[e]||[]),t[e].unshift(r)}function k(t,e){t&&(t.$options[e]||[]).forEach((function(e){e.call(t)}))}function P(t,e){return new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e})}var D=function(t){return/function Boolean/.test(String(t))},C=function(t){return/function Number/.test(String(t))};function E(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.type;if(!e.endsWith("-json")){if(D(n))return"true"===t||"false"===t?"true"===t:""===t||t===e||null!=t;if(C(n)){var o=parseFloat(t,10);return isNaN(o)?t:o}return t}try{return JSON.parse(t)}catch(t){return"INVALID_JSON"}}function I(t,e){for(var r=[],n=0,o=e.length;n<o;n++)r.push(H(t,e[n]));return r}function H(t,e){if(3===e.nodeType)return e.data.trim()?e.data:null;if(1===e.nodeType){var r={attrs:A(e),domProps:{innerHTML:e.innerHTML}};return r.attrs.slot&&(r.slot=r.attrs.slot,delete r.attrs.slot),t(e.tagName,r)}return null}function A(t){for(var e={},r=0,n=t.attributes.length;r<n;r++){var o=t.attributes[r];e[o.nodeName]=o.nodeValue}return e}return function(t,n){var i,a,c,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},p="function"==typeof n&&!n.cid,f=!1;if(l.globalStyles){var v={target:document.head,selector:'style, link[rel="stylesheet"], link[rel="preload"][as="style"]',filter:void 0,observeOptions:{childList:!0,subtree:!0}};l.globalStyles=s(s({},v),l.globalStyles)}function b(t){if(!f){var e="function"==typeof t?t.options:t,r=Array.isArray(e.props)?e.props:Object.keys(e.props||{});if(l.jsonMapping){var n=function(t){return t===Array||t===Object},o={};Array.isArray(e.props||{})||(o=Object.keys(e.props||{}).reduce((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=(e.props||{})[r];if(void 0===o)return t;var i="type"in o?o.type:o;return n(i)&&(t[r+"Json"]={type:String}),t}),{})),r=r.concat(Object.keys(o))}i=r.map(S),a=r.map(w);var s=Array.isArray(e.props)?{}:e.props||{};c=a.reduce((function(t,e,n){return t[e]=s[r[n]],t}),{}),M(e,"beforeCreate",(function(){var t=this,e=this.$emit;this.$emit=function(r){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.$root.$options.customElement.dispatchEvent(P(r,o)),e.call.apply(e,[t,r].concat(o))}})),M(e,"created",(function(){var t=this;a.forEach((function(e){t.$root.props[e]=t[e]}))})),a.forEach((function(t){Object.defineProperty(D.prototype,t,{get:function(){return this._wrapper.props[t]},set:function(e){this._wrapper.props[t]=e},enumerable:!1,configurable:!0})})),f=!0}}function g(t,e){var r=e.endsWith("-json"),n=w(e.replace(/-json$/,"")),o=t.hasAttribute(e)?t.getAttribute(e):void 0;r&&!o||(t._wrapper.props[n]=E(o,e,c[n]))}var D=function(s){u(d,s);var c,p=y(d);function d(){var e;r(this,d);var o=e=p.call(this);o.attachShadow({mode:"open"});var i=o._wrapper=new t({name:"shadow-root",customElement:o,shadowRoot:o.shadowRoot,data:function(){return{props:{},slotChildren:[],ShadyDOMSlotsHack_slotsPassedToWrapper:!1,ShadyDOMSlotsHack_deregisterSetIntervalListener:null}},render:function(t){return t(n,{ref:"inner",props:this.props},this.slotChildren)}});if(window.ShadyDOM){window.ShadyDOM.observeChildren(h(e),(function(){i.ShadyDOMSlotsHack_slotsPassedToWrapper||(i.ShadyDOMSlotsHack_slotsPassedToWrapper=!0)})),window.ShadyDOMSlotsHack_setInterval=window.ShadyDOMSlotsHack_setInterval||new function(){var t=this;this.listeners=[],this.add=function(e){var r=Math.floor(1e6*Math.random());return t.listeners.push({handler:e,id:r}),1===t.listeners.length&&t.start(),r},this.remove=function(e){t.listeners.splice(t.listeners.findIndex((function(t){return t.id===e})),1),0===t.listeners.length&&t.stop()},this.start=function(){void 0!==t.intervalId&&null!==t.intervalId||(t.intervalId=window.setInterval((function(){t.listeners.forEach((function(t){return(0,t.handler)()}))}),100))},this.stop=function(){t.intervalId&&(window.clearInterval(t.intervalId),t.intervalId=null)}};var a=window.ShadyDOMSlotsHack_setInterval.add((function(){i.ShadyDOMSlotsHack_slotsPassedToWrapper&&e.updateSlotChildren()}));i.ShadyDOMSlotsHack_deregisterSetIntervalListener=function(){return window.ShadyDOMSlotsHack_setInterval.remove(a)}}return new MutationObserver((function(t){for(var r=!1,n=0;n<t.length;n++){var i=t[n];f&&"attributes"===i.type&&i.target===o?g(o,i.attributeName):r=!0}r&&e.updateSlotChildren()})).observe(o,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),e}return o(d,[{key:"updateSlotChildren",value:function(){this._wrapper.slotChildren=Object.freeze(I(this._wrapper.$createElement,this.childNodes)),0===this._wrapper.slotChildren.length&&(this._wrapper.ShadyDOMSlotsHack_slotsPassedToWrapper=!1)}},{key:"connectedCallback",value:(c=e(regeneratorRuntime.mark((function t(){var e,r,o,s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this._wrapper,t.next=3,Promise.resolve();case 3:e._isMounted?k(this.vueComponent,"activated"):(r=function(){e.props=O(a),i.forEach((function(t){g(s,t)}))},f?r():n().then((function(t){(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),b(t),r()})),this.updateSlotChildren(),o=document.createElement("div"),this.shadowRoot.appendChild(o),l.globalStyles&&(m(this.shadowRoot,_(l.globalStyles.target,l.globalStyles.selector,l.globalStyles.filter)),j((function(t){m(s.shadowRoot,t)}),l.globalStyles.target,l.globalStyles.selector,l.globalStyles.filter,l.globalStyles.observeOptions)),e.$mount(o));case 4:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this._wrapper&&this._wrapper.ShadyDOMSlotsHack_deregisterSetIntervalListener&&this._wrapper.ShadyDOMSlotsHack_deregisterSetIntervalListener(),k(this.vueComponent,"deactivated")}},{key:"vueComponent",get:function(){return this._wrapper.$refs.inner}}]),d}(d(HTMLElement));return p||b(n),D}}();
//# sourceMappingURL=vue-wc-wrapper.global.js.map
