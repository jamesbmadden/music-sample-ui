!function(t){function e(e){for(var s,n,r=e[0],a=e[1],o=0,c=[];o<r.length;o++)n=r[o],i[n]&&c.push(i[n][0]),i[n]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s]);for(l&&l(e);c.length;)c.shift()()}var s={},i={3:0};function n(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise(function(e,n){s=i[t]=[e,n]});e.push(s[2]=r);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.src=function(t){return n.p+""+t+".main.js"}(t),a=function(e){o.onerror=o.onload=null,clearTimeout(l);var s=i[t];if(0!==s){if(s){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");a.type=n,a.request=r,s[1](a)}i[t]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:o})},12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(e)},n.m=t,n.c=s,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n.oe=function(t){throw console.error(t),t};var r=window.webpackJsonp=window.webpackJsonp||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var l=a;n(n.s=5)}([function(t,e,s){var i={"./Alessia Cara.json":[2,0],"./Ariana Grande.json":[3,1],"./Billie Eilish.json":[4,2]};function n(t){var e=i[t];return e?s.e(e[1]).then(function(){var t=e[0];return s.t(t,3)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return Object.keys(i)},n.id=0,t.exports=n},function(t,e,s){var i={"./albums/Ariana Grande/Dangerous Woman.json":[6,4],"./albums/Ariana Grande/My Everything.json":[7,5],"./albums/Ariana Grande/Sweetener.json":[8,6],"./albums/Ariana Grande/Yours Truly.json":[9,7],"./albums/Ariana Grande/thank u, next.json":[10,8],"./artists/Alessia Cara.json":[2,0],"./artists/Ariana Grande.json":[3,1],"./artists/Billie Eilish.json":[4,2],"./singles/Ariana Grande/7 rings.json":[11,9],"./singles/Ariana Grande/Christmas & Chill.json":[12,10],"./singles/Ariana Grande/Jason's Song (Gave It Away).json":[13,11],"./singles/Ariana Grande/no tears left to cry.json":[14,12]};function n(t){var e=i[t];return e?s.e(e[1]).then(function(){var t=e[0];return s.t(t,3)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return Object.keys(i)},n.id=1,t.exports=n},,,,function(t,e,s){"use strict";s.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,n=t=>"function"==typeof t&&i.has(t),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(t,e,s=null)=>{let i=e;for(;i!==s;){const e=i.nextSibling;t.removeChild(i),i=e}},o={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`),p="$lit$";class u{constructor(t,e){this.parts=[],this.element=e;let s=-1,i=0;const n=[],r=e=>{const a=e.content,o=document.createTreeWalker(a,133,null,!1);let l=0;for(;o.nextNode();){s++;const e=o.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const n=e.attributes;let r=0;for(let t=0;t<n.length;t++)n[t].value.indexOf(c)>=0&&r++;for(;r-- >0;){const n=t.strings[i],r=f.exec(n)[2],a=r.toLowerCase()+p,o=e.getAttribute(a).split(d);this.parts.push({type:"attribute",index:s,name:r,strings:o}),e.removeAttribute(a),i+=o.length-1}}"TEMPLATE"===e.tagName&&r(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const r=e.parentNode,a=t.split(d),o=a.length-1;for(let t=0;t<o;t++)r.insertBefore(""===a[t]?g():document.createTextNode(a[t]),e),this.parts.push({type:"node",index:++s});""===a[o]?(r.insertBefore(g(),e),n.push(e)):e.data=a[o],i+=o}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&s!==l||(s++,t.insertBefore(g(),e)),l=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(n.push(e),s--),i++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1})}}};r(e);for(const t of n)t.parentNode.removeChild(t)}}const m=t=>-1!==t.index,g=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,s){this._parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this._parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let s=0,i=0;const n=t=>{const r=document.createTreeWalker(t,133,null,!1);let a=r.nextNode();for(;s<e.length&&null!==a;){const t=e[s];if(m(t))if(i===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(a,t.name,t.strings,this.options));s++}else i++,"TEMPLATE"===a.nodeName&&n(a.content),a=r.nextNode();else this._parts.push(void 0),s++}};return n(t),r&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class b{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="";for(let s=0;s<t;s++){const t=this.strings[s],i=f.exec(t);e+=i?t.substr(0,i.index)+i[1]+i[2]+p+i[3]+c:t+h}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=t=>null===t||!("object"==typeof t||"function"==typeof t);class _{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new w(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)s+="string"==typeof e?e:String(e);else s+="string"==typeof t?t:String(t)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o||v(t)&&t===this.value||(this.value=t,n(t)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const t=this.value;this.value=o,t(this)}this.value!==o&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=g()),t._insert(this.endNode=g())}insertAfterPart(t){t._insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=o,t(this)}const t=this._pendingValue;t!==o&&(v(t)?t!==this.value&&this._commitText(t):t instanceof b?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===l?(this.value=l,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const s=new y(e,t.processor,this.options),i=s._clone();s.update(t.values),this._commitNode(i),this.value=s}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)void 0===(s=e[i])&&(s=new S(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){a(this.startNode.parentNode,t.nextSibling,this.endNode)}}class x{constructor(t,e,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=o,t(this)}if(this._pendingValue===o)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=o}}class P extends _{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends w{}let A=!1;try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class k{constructor(t,e,s){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=o,t(this)}if(this._pendingValue===o)return;const t=this._pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=E(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=o}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const N=new class{handleAttributeExpressions(t,e,s,i){const n=e[0];return"."===n?new P(t,e.slice(1),s).parts:"@"===n?[new k(t,e.slice(1),i.eventContext)]:"?"===n?[new x(t,e.slice(1),s)]:new _(t,e,s).parts}handleTextExpression(t){return new S(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function T(t){let e=$.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(c);return void 0===(s=e.keyString.get(i))&&(s=new u(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const $=new Map,j=new WeakMap,O=(t,...e)=>new b(t,e,"html",N),V=133;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function R(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,V,null,!1);let r=D(i),a=i[r],o=-1,l=0;const c=[];let h=null;for(;n.nextNode();){o++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==a&&a.index===o;)a.index=null!==h?-1:a.index-l,a=i[r=D(i,r)]}c.forEach(t=>t.parentNode.removeChild(t))}const M=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,V,null,!1);for(;s.nextNode();)e++;return e},D=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(m(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const z=(t,e)=>`${t}--${e}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),U=!1);const L=t=>e=>{const s=z(e.type,t);let i=$.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},$.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(c);if(void 0===(n=i.keyString.get(r))){const s=e.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(s,t),n=new u(e,s),i.keyString.set(r,n)}return i.stringsArray.set(e.strings,n),n},q=["html","svg"],G=new Set,B=(t,e,s)=>{G.add(s);const i=t.querySelectorAll("style");if(0===i.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,s);const n=document.createElement("style");for(let t=0;t<i.length;t++){const e=i[t];e.parentNode.removeChild(e),n.textContent+=e.textContent}if((t=>{q.forEach(e=>{const s=$.get(z(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),R(t,s)})})})(s),function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const r=document.createTreeWalker(i,V,null,!1);let a=D(n),o=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(o=M(e),s.parentNode.insertBefore(e,s));-1!==a&&n[a].index===l;){if(o>0){for(;-1!==a;)n[a].index+=o,a=D(n,a);return}a=D(n,a)}}(e,n,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,s),window.ShadyCSS.nativeShadow){const s=e.element.content.querySelector("style");t.insertBefore(s.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(n,e.element.content.firstChild);const t=new Set;t.add(n),R(e,t)}},F=(t,e)=>t,I={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),H={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:W},J=Promise.resolve(!0),Y=1,K=4,Q=8,X=16,Z=32;class tt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=J,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(F("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=H){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this.requestUpdate(t,i)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty(F("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t._finalize&&t._finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(F("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=W){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||I,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||I.toAttribute)(t,s)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Z,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=H){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|Q,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=this._updateState&~Q}}_attributeToProperty(t,e){if(this._updateState&Q)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||H;this._updateState=this._updateState|X,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~X}}requestUpdate(t,e){let s=!0;if(void 0!==t&&!this._changedProperties.has(t)){const i=this.constructor,n=i._classProperties.get(t)||H;i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.set(t,e),!0!==n.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}return!this._hasRequestedUpdate&&s&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let t;this._updateState=this._updateState|K;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);const s=this.performUpdate();null!=s&&"function"==typeof s.then&&await s,t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Z}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&Y}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}tt.finalized=!0;it((t,e)=>t.querySelector(e)),it((t,e)=>t.querySelectorAll(e));const et=(t,e,s)=>{Object.defineProperty(e,s,t)},st=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function it(t){return e=>(s,i)=>{const n={get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0};return void 0!==i?et(n,s,i):st(n,s)}}const nt="adoptedStyleSheets"in Document.prototype;const rt=t=>t.flat?t.flat(1/0):
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function t(e,s=[]){for(let i=0,n=e.length;i<n;i++){const n=e[i];Array.isArray(n)?t(n,s):s.push(n)}return s}(t);class at extends tt{static get _uniqueStyles(){if(!this.hasOwnProperty(F("_styles",this)))if(this.hasOwnProperty(F("styles",this))){const t=this.styles;if(Array.isArray(t)){const e=rt(t).reduceRight((t,e)=>(t.add(e),t),new Set);this._styles=[],e.forEach(t=>this._styles.unshift(t))}else this._styles=t?[t]:[]}else this._styles=void 0!==this._styles?this._styles:[];return this._styles}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._uniqueStyles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?nt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._uniqueStyles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}at.finalized=!0,at.render=((t,e,s)=>{const i=s.scopeName,n=j.has(e),r=e instanceof ShadowRoot&&U&&t instanceof b,o=r&&!G.has(i),l=o?document.createDocumentFragment():e;if(((t,e,s)=>{let i=j.get(e);void 0===i&&(a(e,e.firstChild),j.set(e,i=new S(Object.assign({templateFactory:T},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:L(i)},s)),o){const t=j.get(l);j.delete(l),t.value instanceof y&&B(l,t.value.template,i),a(e,e.firstChild),e.appendChild(l),j.set(e,t)}!n&&r&&window.ShadyCSS.styleElement(e.host)});customElements.define("music-album",class extends at{static get properties(){return{title:{type:String},artist:{type:String},src:{type:String}}}render(){return O`
      <style>
        :host {
          position: relative;
          width: 240px;
          display: inline-block;
          cursor: pointer;
        }
        .album-art {
          position: relative;
          transform-origin: center;
          box-sizing: border-box;
          width: 240px;
          height: 240px;
          background: url(${this.src});
          background-size: 100%;
        }
        .album-artist {
          opacity: .75;
          font-size: .75rem;
        }
      </style>
      <div class="album-art"></div>
      <p class="album-title">${this.title}</p>
      <p class="album-artist">${this.artist}</p>
    `}});customElements.define("artists-page",class extends at{createRenderRoot(){return this}static get properties(){return{artist:{type:String},_artistData:{type:Object}}}connectedCallback(){super.connectedCallback(),s(0)(`./${this.artist}.json`).then(t=>this._artistData=t)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),"artist"===t&&s(0)(`./${this.artist}.json`).then(t=>this._artistData=t)}openArtist(t){this._artistData=void 0,this.setAttribute("artist",t),scrollTo(0,0)}render(){return this._artistData?O`
        <style>
          h1 {
            position: absolute;
            left: 8px;
            bottom: 8px;
            font-size: 6rem;
            font-weight: 900;
          }
          header {
            background: linear-gradient(transparent, #222);
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 512px;
          }
          header::before {
            content: "";
            z-index: -1;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: url('${this._artistData.header}');
            background-size: cover;
            background-attachment: fixed;
            background-position: center; 
          }
          main {
            position: relative;
            margin-top: 512px;
          }
          .category-title {
            font-weight: 900;
            font-size: 3rem;
            text-align: center;
          }
          .category-body {
            text-align: center;
            white-space: nowrap;
            overflow-x: auto;
          }
        </style>
        <header>
          <h1>${this.artist}</h1>
        </header>
        <main>
          ${this._artistData.albums.length>0?O`
            <h2 class="category-title">Albums</h2>
            <div class="category-body">
              ${this._artistData.albums.map(t=>O`
                <music-album title=${t.title} artist=${this.artist} src=${t.cover} @click=${()=>{this.parentElement.dispatchEvent(new CustomEvent("set-page",{detail:{pageType:"album",page:`albums/${this.artist}/${t.title}`}}))}}></music-album>
              `)}
            </div>
          `:O`<div class="category-body"></div>`}
          ${this._artistData.singles.length>0?O`
            <h2 class="category-title">Singles & EPs</h2>
            <div class="category-body">
              ${this._artistData.singles.map(t=>O`
                <music-album title=${t.title} artist=${this.artist} src=${t.cover} @click=${()=>{this.parentElement.dispatchEvent(new CustomEvent("set-page",{detail:{pageType:"album",page:`singles/${this.artist}/${t.title}`}}))}}></music-album>
              `)}
            </div>
          `:O`<div class="category-body"></div>`}
          <button @click=${()=>this.openArtist("Ariana Grande")} ?disabled=${"Ariana Grande"===this.artist}>Ariana Grande</button>
          <button @click=${()=>this.openArtist("Billie Eilish")} ?disabled=${"Billie Eilish"===this.artist}>Billie Eilish</button>
          <button @click=${()=>this.openArtist("Alessia Cara")} ?disabled=${"Alessia Cara"===this.artist}>Alessia Cara</button>
        </main>
      `:O`<p>Loading...</p>`}});customElements.define("album-page",class extends at{createRenderRoot(){return this}static get properties(){return{album:{type:String},_albumData:{type:Object}}}connectedCallback(){super.connectedCallback(),s(1)(`./${this.album}.json`).then(t=>this._albumData=t)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),"album"===t&&s(1)(`./${this.album}.json`).then(t=>this._albumData=t)}openAlbum(t){this._albumData=void 0,this.setAttribute("album",t),scrollTo(0,0)}setPage(t,e){this.parentElement.dispatchEvent(new CustomEvent("set-page",{detail:{pageType:e,page:t}}))}render(){return this._albumData?O`
        <style>
          h1 {
              font-size: 6rem;
              font-weight: 900;
              margin: .25rem 0;
            }
            .header-text {
              position: absolute;
              left: 8px;
              bottom: 8px;
            }
            .header-text a {
              font-size: 2.5rem;
              font-weight: 900;
            }
            a {
              text-decoration: underline;
            }
            a:hover {
              color: #f44336;
              cursor: pointer;
            }
            header {
              background: linear-gradient(transparent, #222);
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 512px;
            }
            header::before {
              content: "";
              z-index: -1;
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background: url('${this._albumData.cover}');
              background-size: cover;
              background-attachment: fixed;
              background-position: center; 
            }
            main {
              position: relative;
              margin-top: 512px;
            }
            .category-title {
              font-weight: 900;
              font-size: 3rem;
              text-align: center;
            }
            ol {
              padding: 0;
            }
            .album-track {
              box-sizing: border-box;
              padding: 1rem;
              position: relative;
              width: 100%;
              display:flex;
              cursor: pointer;
            }
            .album-track:hover {
              background: rgba(255, 255, 255, 0.1);
            }
            .album-track > * {
              width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .album-track > .track-length, .explicit-warning {
              width: auto;
              overflow: initial;
              margin: 0 .25rem;
            }
            .explicit-hide {
              opacity: 0;
            }
        </style>
        <header>
          <div class="header-text">
            <h1>${this._albumData.title}</h1>
            <a tabindex="0" @click=${()=>{this.setPage(this._albumData.artist,"artist")}}>${this._albumData.artist}</a>
          </div>
        </header>
        <main>
          <h2 class="category-title">Tracks</h2>
          <ol>
            ${this._albumData.tracks.map(t=>O`
              <li class="album-track">
                <span>${t.title}</span>
                <div class="artists">
                  ${t.artists.map((e,s)=>O`
                    <a tabindex="0"  @click=${()=>{this.setPage(e,"artist")}}>${e}</a>${s<t.artists.length-1?", ":""}
                  `)}
                </div>
                <span class="explicit-warning ${t.explicit?"explicit-show":"explicit-hide"}">Explicit</span>
                <span class="track-length">${t.length}</span>
              </li>
            `)}
          </ol>
        </main>
      `:O`<p>Loading...</p>`}});customElements.define("music-root",class extends at{createRenderRoot(){return this}static get properties(){return{pageType:{type:String},page:{type:String}}}constructor(){super(),this.pageType="artist",this.page="Ariana Grande",this.addEventListener("set-page",t=>{this.pageType=t.detail.pageType,this.page=t.detail.page,window.scrollTo(0,0)})}render(){return"artist"===this.pageType?O`<artists-page artist=${this.page}></artists-page>`:"album"===this.pageType?O`<album-page album=${this.page}></album-page>`:void 0}})}]);