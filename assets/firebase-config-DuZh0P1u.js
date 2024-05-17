import{f as yt,r as b,u as Os,i as pd,j as nr,_ as ks,p as Yl}from"./index-C2sQZTje.js";var Ql={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ta=yt.createContext&&yt.createContext(Ql),_d=["attr","size","title"];function gd(n,e){if(n==null)return{};var t=md(n,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function md(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function pr(){return pr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},pr.apply(this,arguments)}function na(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function _r(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?na(Object(t),!0).forEach(function(r){yd(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):na(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function yd(n,e,t){return e=vd(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function vd(n){var e=Ed(n,"string");return typeof e=="symbol"?e:String(e)}function Ed(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Jl(n){return n&&n.map((e,t)=>yt.createElement(e.tag,_r({key:t},e.attr),Jl(e.child)))}function bd(n){return e=>yt.createElement(wd,pr({attr:_r({},n.attr)},e),Jl(n.child))}function wd(n){var e=t=>{var{attr:r,size:i,title:s}=n,o=gd(n,_d),a=i||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),yt.createElement("svg",pr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:l,style:_r(_r({color:n.color||t.color},t.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&yt.createElement("title",null,s),n.children)};return ta!==void 0?yt.createElement(ta.Consumer,null,t=>e(t)):e(Ql)}const r0=()=>{const[n,e]=b.useState({name:"",open:!1}),t=i=>{e({name:i,open:!0})},r=()=>{e({name:"",open:!1})};return b.useEffect(()=>{n.open?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[n]),{isOpen:n,openModal:t,closeModal:r}};function Id(n){return bd({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(n)}const Td=Os.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgb(116 115 115) 0%,
    rgb(83 81 81 / 32%) 0%
  );
  backdrop-filter: blur(0.1rem);
  z-index: 1200;
`,Cd=Os.div`
  position: relative;
  background-color: #fff;
  border-radius: 30px;
  overflow: hidden;
`,Sd=Os.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: color var(--transition);
  color: #121417;
  &:hover,
  :focus {
    color: var(--active-button-background-color);
  }

  & svg {
    width: 32px;
    height: 32px;
  }
`,Ad=document.getElementById("modal"),i0=({children:n,onClose:e})=>{const t=r=>{r.currentTarget===r.target&&e()};return b.useEffect(()=>{const r=i=>{i.code==="Escape"&&e()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[e]),pd.createPortal(nr.jsx(Td,{onClick:t,children:nr.jsxs(Cd,{children:[nr.jsx(Sd,{type:"button",onClick:e,children:nr.jsx(Id,{})}),n]})}),Ad)};var ra={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(n,e){if(!n)throw sn(e)},sn=function(n){return new Error("Firebase Database ("+Xl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Rd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ns={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(t[h],t[u],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Zl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new Od;const d=s<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),u!==64){const g=c<<6&192|u;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Od extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ec=function(n){const e=Zl(n);return Ns.encodeByteArray(e,!0)},gr=function(n){return ec(n).replace(/\./g,"")},mr=function(n){try{return Ns.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n){return tc(void 0,n)}function tc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Nd(t)||(n[t]=tc(n[t],e[t]));return n}function Nd(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=()=>Pd().__FIREBASE_DEFAULTS__,Dd=()=>{if(typeof process>"u"||typeof ra>"u")return;const n=ra.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Md=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&mr(n[1]);return e&&JSON.parse(e)},Ps=()=>{try{return xd()||Dd()||Md()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nc=n=>{var e,t;return(t=(e=Ps())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ld=n=>{const e=nc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},rc=()=>{var n;return(n=Ps())===null||n===void 0?void 0:n.config},ic=n=>{var e;return(e=Ps())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[gr(JSON.stringify(t)),gr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function $d(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ud(){const n=Z();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function oc(){return Xl.NODE_ADMIN===!0}function jd(){try{return typeof indexedDB=="object"}catch{return!1}}function Vd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="FirebaseError";class st extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Bd,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Wd(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new st(i,a,r)}}function Wd(n,e){return n.replace(Hd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Hd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(n){return JSON.parse(n)}function H(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=Rn(mr(s[0])||""),t=Rn(mr(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},zd=function(n){const e=ac(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Gd=function(n){const e=ac(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Xt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Qi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yr(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function vr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(ia(s)&&ia(o)){if(!vr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ia(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function En(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)r[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):u<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const d=(i<<5|i>>>27)+c+l+h+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Kd(n,e){const t=new Yd(n,e);return t.subscribe.bind(t)}class Yd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Qd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ki),i.error===void 0&&(i.error=ki),i.complete===void 0&&(i.complete=ki);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ki(){}function Ds(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,_(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Hr=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n){return n&&n._delegate?n._delegate:n}class It{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Wr;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ef(e))try{this.getOrInitializeService({instanceIdentifier:ht})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ht){return this.instances.has(e)}getOptions(e=ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ht){return this.component?this.component.multipleInstances?e:ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zd(n){return n===ht?void 0:n}function ef(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(M||(M={}));const nf={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},rf=M.INFO,sf={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},of=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=sf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ms{constructor(e){this.name=e,this._logLevel=rf,this._logHandler=of,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const af=(n,e)=>e.some(t=>n instanceof t);let sa,oa;function lf(){return sa||(sa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cf(){return oa||(oa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lc=new WeakMap,Ji=new WeakMap,cc=new WeakMap,Ni=new WeakMap,Ls=new WeakMap;function uf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ke(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&lc.set(t,n)}).catch(()=>{}),Ls.set(e,n),e}function hf(n){if(Ji.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ji.set(n,e)}let Xi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ji.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ke(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function df(n){Xi=n(Xi)}function ff(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Pi(this),e,...t);return cc.set(r,e.sort?e.sort():[e]),Ke(r)}:cf().includes(n)?function(...e){return n.apply(Pi(this),e),Ke(lc.get(this))}:function(...e){return Ke(n.apply(Pi(this),e))}}function pf(n){return typeof n=="function"?ff(n):(n instanceof IDBTransaction&&hf(n),af(n,lf())?new Proxy(n,Xi):n)}function Ke(n){if(n instanceof IDBRequest)return uf(n);if(Ni.has(n))return Ni.get(n);const e=pf(n);return e!==n&&(Ni.set(n,e),Ls.set(e,n)),e}const Pi=n=>Ls.get(n);function _f(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Ke(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ke(o.result),l.oldVersion,l.newVersion,Ke(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const gf=["get","getKey","getAll","getAllKeys","count"],mf=["put","add","delete","clear"],xi=new Map;function aa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xi.get(e))return xi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=mf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gf.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return xi.set(e,s),s}df(n=>({...n,get:(e,t,r)=>aa(e,t)||n.get(e,t,r),has:(e,t)=>!!aa(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function vf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zi="@firebase/app",la="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Ms("@firebase/app"),Ef="@firebase/app-compat",bf="@firebase/analytics-compat",wf="@firebase/analytics",If="@firebase/app-check-compat",Tf="@firebase/app-check",Cf="@firebase/auth",Sf="@firebase/auth-compat",Af="@firebase/database",Rf="@firebase/database-compat",Of="@firebase/functions",kf="@firebase/functions-compat",Nf="@firebase/installations",Pf="@firebase/installations-compat",xf="@firebase/messaging",Df="@firebase/messaging-compat",Mf="@firebase/performance",Lf="@firebase/performance-compat",Ff="@firebase/remote-config",$f="@firebase/remote-config-compat",Uf="@firebase/storage",jf="@firebase/storage-compat",Vf="@firebase/firestore",Bf="@firebase/firestore-compat",Wf="firebase",Hf="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="[DEFAULT]",zf={[Zi]:"fire-core",[Ef]:"fire-core-compat",[wf]:"fire-analytics",[bf]:"fire-analytics-compat",[Tf]:"fire-app-check",[If]:"fire-app-check-compat",[Cf]:"fire-auth",[Sf]:"fire-auth-compat",[Af]:"fire-rtdb",[Rf]:"fire-rtdb-compat",[Of]:"fire-fn",[kf]:"fire-fn-compat",[Nf]:"fire-iid",[Pf]:"fire-iid-compat",[xf]:"fire-fcm",[Df]:"fire-fcm-compat",[Mf]:"fire-perf",[Lf]:"fire-perf-compat",[Ff]:"fire-rc",[$f]:"fire-rc-compat",[Uf]:"fire-gcs",[jf]:"fire-gcs-compat",[Vf]:"fire-fst",[Bf]:"fire-fst-compat","fire-js":"fire-js",[Wf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Map,Gf=new Map,ts=new Map;function ca(n,e){try{n.container.addComponent(e)}catch(t){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Zt(n){const e=n.name;if(ts.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;ts.set(e,n);for(const t of Er.values())ca(t,n);for(const t of Gf.values())ca(t,n);return!0}function Fs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function we(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ye=new Bn("app","Firebase",qf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new It("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ye.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=Hf;function uc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:es,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ye.create("bad-app-name",{appName:String(i)});if(t||(t=rc()),!t)throw Ye.create("no-options");const s=Er.get(i);if(s){if(vr(t,s.options)&&vr(r,s.config))return s;throw Ye.create("duplicate-app",{appName:i})}const o=new tf(i);for(const l of ts.values())o.addComponent(l);const a=new Kf(t,r,o);return Er.set(i,a),a}function hc(n=es){const e=Er.get(n);if(!e&&n===es&&rc())return uc();if(!e)throw Ye.create("no-app",{appName:n});return e}function Qe(n,e,t){var r;let i=(r=zf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(a.join(" "));return}Zt(new It(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="firebase-heartbeat-database",Qf=1,On="firebase-heartbeat-store";let Di=null;function dc(){return Di||(Di=_f(Yf,Qf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(On)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ye.create("idb-open",{originalErrorMessage:n.message})})),Di}async function Jf(n){try{const t=(await dc()).transaction(On),r=await t.objectStore(On).get(fc(n));return await t.done,r}catch(e){if(e instanceof st)Tt.warn(e.message);else{const t=Ye.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tt.warn(t.message)}}}async function ua(n,e){try{const r=(await dc()).transaction(On,"readwrite");await r.objectStore(On).put(e,fc(n)),await r.done}catch(t){if(t instanceof st)Tt.warn(t.message);else{const r=Ye.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tt.warn(r.message)}}}function fc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=1024,Zf=30*24*60*60*1e3;class ep{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new np(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ha();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Zf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ha(),{heartbeatsToSend:r,unsentEntries:i}=tp(this._heartbeatsCache.heartbeats),s=gr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ha(){return new Date().toISOString().substring(0,10)}function tp(n,e=Xf){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),da(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),da(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class np{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jd()?Vd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Jf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ua(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ua(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function da(n){return gr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n){Zt(new It("platform-logger",e=>new yf(e),"PRIVATE")),Zt(new It("heartbeat",e=>new ep(e),"PRIVATE")),Qe(Zi,la,n),Qe(Zi,la,"esm2017"),Qe("fire-js","")}rp("");function pc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ip=pc,_c=new Bn("auth","Firebase",pc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Ms("@firebase/auth");function sp(n,...e){br.logLevel<=M.WARN&&br.warn(`Auth (${an}): ${n}`,...e)}function cr(n,...e){br.logLevel<=M.ERROR&&br.error(`Auth (${an}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n,...e){throw $s(n,...e)}function Ie(n,...e){return $s(n,...e)}function gc(n,e,t){const r=Object.assign(Object.assign({},ip()),{[e]:t});return new Bn("auth","Firebase",r).create(e,{appName:n.name})}function Fe(n){return gc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $s(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return _c.create(n,...e)}function I(n,e,...t){if(!n)throw $s(e,...t)}function xe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw cr(e),new Error(e)}function Ue(n,e){n||xe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function op(){return fa()==="http:"||fa()==="https:"}function fa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(op()||$d()||"connection"in navigator)?navigator.onLine:!0}function lp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ue(t>e,"Short delay should be less than long delay!"),this.isMobile=xs()||sc()}get(){return ap()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n,e){Ue(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new Wn(3e4,6e4);function ot(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function at(n,e,t,r,i={}){return yc(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=on(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),mc.fetch()(vc(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function yc(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},cp),e);try{const i=new dp(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw rr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw rr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw rr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw rr(n,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw gc(n,h,c);ve(n,h)}}catch(i){if(i instanceof st)throw i;ve(n,"network-request-failed",{message:String(i)})}}async function Hn(n,e,t,r,i={}){const s=await at(n,e,t,r,i);return"mfaPendingCredential"in s&&ve(n,"multi-factor-auth-required",{_serverResponse:s}),s}function vc(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Us(n.config,i):`${n.config.apiScheme}://${i}`}function hp(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ie(this.auth,"network-request-failed")),up.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ie(n,e,r);return i.customData._tokenResponse=t,i}function pa(n){return n!==void 0&&n.enterprise!==void 0}class fp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return hp(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function pp(n,e){return at(n,"GET","/v2/recaptchaConfig",ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(n,e){return at(n,"POST","/v1/accounts:delete",e)}async function Ec(n,e){return at(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gp(n,e=!1){const t=te(n),r=await t.getIdToken(e),i=js(r);I(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bn(Mi(i.auth_time)),issuedAtTime:bn(Mi(i.iat)),expirationTime:bn(Mi(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mi(n){return Number(n)*1e3}function js(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return cr("JWT malformed, contained fewer than 3 sections"),null;try{const i=mr(t);return i?JSON.parse(i):(cr("Failed to decode base64 JWT payload"),null)}catch(i){return cr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _a(n){const e=js(n);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof st&&mp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function mp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bn(this.lastLoginAt),this.creationTime=bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(n){var e;const t=n.auth,r=await n.getIdToken(),i=await kn(n,Ec(t,{idToken:r}));I(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bc(s.providerUserInfo):[],a=Ep(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rs(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,u)}async function vp(n){const e=te(n);await wr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ep(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bc(n){return n.map(e=>{var{providerId:t}=e,r=ks(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(n,e){const t=await yc(n,{},async()=>{const r=on({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=vc(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wp(n,e){return at(n,"POST","/v2/accounts:revokeToken",ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_a(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){I(e.length!==0,"internal-error");const t=_a(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(I(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await bp(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new qt;return r&&(I(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(I(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qt,this.toJSON())}_performRefresh(){return xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n,e){I(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class De{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ks(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rs(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await kn(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gp(this,e)}reload(){return vp(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new De(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await wr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(we(this.auth.app))return Promise.reject(Fe(this.auth));const e=await this.getIdToken();return await kn(this,_p(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,l,c,h;const u=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,T=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=t.createdAt)!==null&&c!==void 0?c:void 0,V=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:ue,emailVerified:Ee,isAnonymous:pe,providerData:O,stsTokenManager:N}=t;I(ue&&N,e,"internal-error");const fn=qt.fromJSON(this.name,N);I(typeof ue=="string",e,"internal-error"),We(u,e.name),We(d,e.name),I(typeof Ee=="boolean",e,"internal-error"),I(typeof pe=="boolean",e,"internal-error"),We(p,e.name),We(g,e.name),We(v,e.name),We(T,e.name),We(k,e.name),We(V,e.name);const he=new De({uid:ue,auth:e,email:d,emailVerified:Ee,displayName:u,isAnonymous:pe,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:fn,createdAt:k,lastLoginAt:V});return O&&Array.isArray(O)&&(he.providerData=O.map(ct=>Object.assign({},ct))),T&&(he._redirectEventId=T),he}static async _fromIdTokenResponse(e,t,r=!1){const i=new qt;i.updateFromServerResponse(t);const s=new De({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wr(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];I(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?bc(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new qt;a.updateFromIdToken(r);const l=new De({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rs(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new Map;function Me(n){Ue(n instanceof Function,"Expected a class definition");let e=ga.get(n);return e?(Ue(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ga.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wc.type="NONE";const ma=wc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(n,e,t){return`firebase:${n}:${e}:${t}`}class Kt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ur(this.userKey,i.apiKey,s),this.fullPersistenceKey=ur("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?De._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Kt(Me(ma),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Me(ma);const o=ur(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){const u=De._fromJSON(e,h);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Kt(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Kt(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ic(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ac(e))return"Blackberry";if(Rc(e))return"Webos";if(Vs(e))return"Safari";if((e.includes("chrome/")||Tc(e))&&!e.includes("edge/"))return"Chrome";if(Sc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ic(n=Z()){return/firefox\//i.test(n)}function Vs(n=Z()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tc(n=Z()){return/crios\//i.test(n)}function Cc(n=Z()){return/iemobile/i.test(n)}function Sc(n=Z()){return/android/i.test(n)}function Ac(n=Z()){return/blackberry/i.test(n)}function Rc(n=Z()){return/webos/i.test(n)}function zr(n=Z()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ip(n=Z()){var e;return zr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tp(){return Ud()&&document.documentMode===10}function Oc(n=Z()){return zr(n)||Sc(n)||Rc(n)||Ac(n)||/windows phone/i.test(n)||Cc(n)}function Cp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n,e=[]){let t;switch(n){case"Browser":t=ya(Z());break;case"Worker":t=`${ya(Z())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${an}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ap(n,e={}){return at(n,"GET","/v2/passwordPolicy",ot(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=6;class Op{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Rp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new va(this),this.idTokenSubscription=new va(this),this.beforeStateQueue=new Sp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Me(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Kt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ec(this,{idToken:e}),r=await De._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(we(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(we(this.app))return Promise.reject(Fe(this));const t=e?te(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return we(this.app)?Promise.reject(Fe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return we(this.app)?Promise.reject(Fe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Me(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ap(this),t=new Op(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await wp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Me(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await Kt.create(this,[Me(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(I(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&sp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Nt(n){return te(n)}class va{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kd(t=>this.observer=t)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Np(n){Gr=n}function Nc(n){return Gr.loadJS(n)}function Pp(){return Gr.recaptchaEnterpriseScript}function xp(){return Gr.gapiScript}function Dp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Mp="recaptcha-enterprise",Lp="NO_RECAPTCHA";class Fp{constructor(e){this.type=Mp,this.auth=Nt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{pp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new fp(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;pa(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Lp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&pa(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Pp();l.length!==0&&(l+=a),Nc(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ea(n,e,t,r=!1){const i=new Fp(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function is(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ea(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ea(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(n,e){const t=Fs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(vr(s,e??{}))return i;ve(i,"already-initialized")}return t.initialize({options:e})}function Up(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Me);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jp(n,e,t){const r=Nt(n);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Pc(e),{host:o,port:a}=Vp(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Bp()}function Pc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Vp(n){const e=Pc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ba(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ba(o)}}}function ba(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Bp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xe("not implemented")}_getIdTokenResponse(e){return xe("not implemented")}_linkToIdToken(e,t){return xe("not implemented")}_getReauthenticationResolver(e){return xe("not implemented")}}async function Wp(n,e){return at(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(n,e){return Hn(n,"POST","/v1/accounts:signInWithPassword",ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(n,e){return Hn(n,"POST","/v1/accounts:signInWithEmailLink",ot(n,e))}async function Gp(n,e){return Hn(n,"POST","/v1/accounts:signInWithEmailLink",ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Bs{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Nn(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Nn(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return is(e,t,"signInWithPassword",Hp);case"emailLink":return zp(e,{email:this._email,oobCode:this._password});default:ve(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return is(e,r,"signUpPassword",Wp);case"emailLink":return Gp(e,{idToken:t,email:this._email,oobCode:this._password});default:ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(n,e){return Hn(n,"POST","/v1/accounts:signInWithIdp",ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="http://localhost";class Ct extends Bs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ve("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ks(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ct(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Yt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Yt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yt(e,t)}buildRequest(){const e={requestUri:qp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=on(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yp(n){const e=vn(En(n)).link,t=e?vn(En(e)).deep_link_id:null,r=vn(En(n)).deep_link_id;return(r?vn(En(r)).link:null)||r||t||e||n}class Ws{constructor(e){var t,r,i,s,o,a;const l=vn(En(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,u=Kp((i=l.mode)!==null&&i!==void 0?i:null);I(c&&h&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Yp(e);try{return new Ws(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.providerId=ln.PROVIDER_ID}static credential(e,t){return Nn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ws.parseLink(t);return I(r,"argument-error"),Nn._fromEmailAndCode(e,r.code,r.tenantId)}}ln.PROVIDER_ID="password";ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends xc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends zn{constructor(){super("facebook.com")}static credential(e){return Ct._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return He.credential(e.oauthAccessToken)}catch{return null}}}He.FACEBOOK_SIGN_IN_METHOD="facebook.com";He.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ct._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ze.credential(t,r)}catch{return null}}}ze.GOOGLE_SIGN_IN_METHOD="google.com";ze.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends zn{constructor(){super("github.com")}static credential(e){return Ct._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ge.credential(e.oauthAccessToken)}catch{return null}}}Ge.GITHUB_SIGN_IN_METHOD="github.com";Ge.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends zn{constructor(){super("twitter.com")}static credential(e,t){return Ct._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return qe.credential(t,r)}catch{return null}}}qe.TWITTER_SIGN_IN_METHOD="twitter.com";qe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qp(n,e){return Hn(n,"POST","/v1/accounts:signUp",ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await De._fromIdTokenResponse(e,r,i),o=wa(r);return new St({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=wa(r);return new St({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function wa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends st{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ir.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ir(e,t,r,i)}}function Dc(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ir._fromErrorAndOperation(n,s,e,r):s})}async function Jp(n,e,t=!1){const r=await kn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return St._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xp(n,e,t=!1){const{auth:r}=n;if(we(r.app))return Promise.reject(Fe(r));const i="reauthenticate";try{const s=await kn(n,Dc(r,i,e,n),t);I(s.idToken,r,"internal-error");const o=js(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(n.uid===a,r,"user-mismatch"),St._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ve(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(n,e,t=!1){if(we(n.app))return Promise.reject(Fe(n));const r="signIn",i=await Dc(n,r,e),s=await St._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Zp(n,e){return Mc(Nt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lc(n){const e=Nt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function s0(n,e,t){if(we(n.app))return Promise.reject(Fe(n));const r=Nt(n),o=await is(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Qp).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Lc(n),l}),a=await St._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function o0(n,e,t){return we(n.app)?Promise.reject(Fe(n)):Zp(te(n),ln.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Lc(n),r})}function e_(n,e,t,r){return te(n).onIdTokenChanged(e,t,r)}function t_(n,e,t){return te(n).beforeAuthStateChanged(e,t)}function a0(n){return te(n).signOut()}const Tr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Tr,"1"),this.storage.removeItem(Tr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(){const n=Z();return Vs(n)||zr(n)}const r_=1e3,i_=10;class $c extends Fc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=n_()&&Cp(),this.fallbackToPolling=Oc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Tp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,i_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},r_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$c.type="LOCAL";const s_=$c;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends Fc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Uc.type="SESSION";const jc=Uc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new qr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await o_(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Hs("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return window}function l_(n){Te().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(){return typeof Te().WorkerGlobalScope<"u"&&typeof Te().importScripts=="function"}async function c_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function u_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function h_(){return Vc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="firebaseLocalStorageDb",d_=1,Cr="firebaseLocalStorage",Wc="fbase_key";class Gn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Kr(n,e){return n.transaction([Cr],e?"readwrite":"readonly").objectStore(Cr)}function f_(){const n=indexedDB.deleteDatabase(Bc);return new Gn(n).toPromise()}function ss(){const n=indexedDB.open(Bc,d_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Cr,{keyPath:Wc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Cr)?e(r):(r.close(),await f_(),e(await ss()))})})}async function Ia(n,e,t){const r=Kr(n,!0).put({[Wc]:e,value:t});return new Gn(r).toPromise()}async function p_(n,e){const t=Kr(n,!1).get(e),r=await new Gn(t).toPromise();return r===void 0?null:r.value}function Ta(n,e){const t=Kr(n,!0).delete(e);return new Gn(t).toPromise()}const __=800,g_=3;class Hc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ss(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>g_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qr._getInstance(h_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await c_(),!this.activeServiceWorker)return;this.sender=new a_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||u_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ss();return await Ia(e,Tr,"1"),await Ta(e,Tr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ia(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>p_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ta(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kr(i,!1).getAll();return new Gn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),__)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hc.type="LOCAL";const m_=Hc;new Wn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(n,e){return e?Me(e):(I(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Bs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function v_(n){return Mc(n.auth,new zs(n),n.bypassAuthState)}function E_(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),Xp(t,new zs(n),n.bypassAuthState)}async function b_(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),Jp(t,new zs(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return v_;case"linkViaPopup":case"linkViaRedirect":return b_;case"reauthViaPopup":case"reauthViaRedirect":return E_;default:ve(this.auth,"internal-error")}}resolve(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=new Wn(2e3,1e4);class Ht extends zc{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ht.currentPopupAction&&Ht.currentPopupAction.cancel(),Ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Ue(this.filter.length===1,"Popup operations only handle one event");const e=Hs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ie(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ie(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ie(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,w_.get())};e()}}Ht.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="pendingRedirect",hr=new Map;class T_ extends zc{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=hr.get(this.auth._key());if(!e){try{const r=await C_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}hr.set(this.auth._key(),e)}return this.bypassAuthState||hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function C_(n,e){const t=R_(e),r=A_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function S_(n,e){hr.set(n._key(),e)}function A_(n){return Me(n._redirectPersistence)}function R_(n){return ur(I_,n.config.apiKey,n.name)}async function O_(n,e,t=!1){if(we(n.app))return Promise.reject(Fe(n));const r=Nt(n),i=y_(r,e),o=await new T_(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=10*60*1e3;class N_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!P_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Gc(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ie(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=k_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ca(e))}saveEventToCache(e){this.cachedEventUids.add(Ca(e)),this.lastProcessedEventTime=Date.now()}}function Ca(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Gc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function P_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(n,e={}){return at(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,M_=/^https?/;async function L_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await x_(n);for(const t of e)try{if(F_(t))return}catch{}ve(n,"unauthorized-domain")}function F_(n){const e=ns(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!M_.test(t))return!1;if(D_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=new Wn(3e4,6e4);function Sa(){const n=Te().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function U_(n){return new Promise((e,t)=>{var r,i,s;function o(){Sa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sa(),t(Ie(n,"network-request-failed"))},timeout:$_.get()})}if(!((i=(r=Te().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Te().gapi)===null||s===void 0)&&s.load)o();else{const a=Dp("iframefcb");return Te()[a]=()=>{gapi.load?o():t(Ie(n,"network-request-failed"))},Nc(`${xp()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw dr=null,e})}let dr=null;function j_(n){return dr=dr||U_(n),dr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=new Wn(5e3,15e3),B_="__/auth/iframe",W_="emulator/auth/iframe",H_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G_(n){const e=n.config;I(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Us(e,W_):`https://${n.config.authDomain}/${B_}`,r={apiKey:e.apiKey,appName:n.name,v:an},i=z_.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${on(r).slice(1)}`}async function q_(n){const e=await j_(n),t=Te().gapi;return I(t,n,"internal-error"),e.open({where:document.body,url:G_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:H_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ie(n,"network-request-failed"),a=Te().setTimeout(()=>{s(o)},V_.get());function l(){Te().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y_=500,Q_=600,J_="_blank",X_="http://localhost";class Aa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Z_(n,e,t,r=Y_,i=Q_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},K_),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Z().toLowerCase();t&&(a=Tc(c)?J_:t),Ic(c)&&(e=e||X_,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(Ip(c)&&a!=="_self")return eg(e||"",a),new Aa(null);const u=window.open(e||"",a,h);I(u,n,"popup-blocked");try{u.focus()}catch{}return new Aa(u)}function eg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="__/auth/handler",ng="emulator/auth/handler",rg=encodeURIComponent("fac");async function Ra(n,e,t,r,i,s){I(n.config.authDomain,n,"auth-domain-config-required"),I(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:an,eventId:i};if(e instanceof xc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Qi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries(s||{}))o[h]=u}if(e instanceof zn){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),c=l?`#${rg}=${encodeURIComponent(l)}`:"";return`${ig(n)}?${on(a).slice(1)}${c}`}function ig({config:n}){return n.emulator?Us(n,ng):`https://${n.authDomain}/${tg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="webStorageSupport";class sg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jc,this._completeRedirectFn=O_,this._overrideRedirectResult=S_}async _openPopup(e,t,r,i){var s;Ue((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ra(e,t,r,ns(),i);return Z_(e,o,Hs())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ra(e,t,r,ns(),i);return l_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ue(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await q_(e),r=new N_(e);return t.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Li,{type:Li},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Li];o!==void 0&&t(!!o),ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=L_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oc()||Vs()||zr()}}const og=sg;var Oa="@firebase/auth",ka="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cg(n){Zt(new It("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;I(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kc(n)},c=new kp(r,i,s,l);return Up(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Zt(new It("auth-internal",e=>{const t=Nt(e.getProvider("auth").getImmediate());return(r=>new ag(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Oa,ka,lg(n)),Qe(Oa,ka,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=5*60,hg=ic("authIdTokenMaxAge")||ug;let Na=null;const dg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>hg)return;const i=t==null?void 0:t.token;Na!==i&&(Na=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fg(n=hc()){const e=Fs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$p(n,{popupRedirectResolver:og,persistence:[m_,s_,jc]}),r=ic("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=dg(s.toString());t_(t,o,()=>o(t.currentUser)),e_(t,a=>o(a))}}const i=nc("auth");return i&&jp(t,`http://${i}`),t}function pg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Np({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ie("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",pg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cg("Browser");var _g=function(e){return gg(e)&&!mg(e)};function gg(n){return!!n&&typeof n=="object"}function mg(n){var e=Object.prototype.toString.call(n);return e==="[object RegExp]"||e==="[object Date]"||Eg(n)}var yg=typeof Symbol=="function"&&Symbol.for,vg=yg?Symbol.for("react.element"):60103;function Eg(n){return n.$$typeof===vg}function bg(n){return Array.isArray(n)?[]:{}}function Sr(n,e){return e.clone!==!1&&e.isMergeableObject(n)?Pn(bg(n),n,e):n}function wg(n,e,t){return n.concat(e).map(function(r){return Sr(r,t)})}function Ig(n,e,t){var r={};return t.isMergeableObject(n)&&Object.keys(n).forEach(function(i){r[i]=Sr(n[i],t)}),Object.keys(e).forEach(function(i){!t.isMergeableObject(e[i])||!n[i]?r[i]=Sr(e[i],t):r[i]=Pn(n[i],e[i],t)}),r}function Pn(n,e,t){t=t||{},t.arrayMerge=t.arrayMerge||wg,t.isMergeableObject=t.isMergeableObject||_g;var r=Array.isArray(e),i=Array.isArray(n),s=r===i;return s?r?t.arrayMerge(n,e,t):Ig(n,e,t):Sr(e,t)}Pn.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return Pn(r,i,t)},{})};var os=Pn,qc=typeof global=="object"&&global&&global.Object===Object&&global,Tg=typeof self=="object"&&self&&self.Object===Object&&self,Re=qc||Tg||Function("return this")(),et=Re.Symbol,Kc=Object.prototype,Cg=Kc.hasOwnProperty,Sg=Kc.toString,pn=et?et.toStringTag:void 0;function Ag(n){var e=Cg.call(n,pn),t=n[pn];try{n[pn]=void 0;var r=!0}catch{}var i=Sg.call(n);return r&&(e?n[pn]=t:delete n[pn]),i}var Rg=Object.prototype,Og=Rg.toString;function kg(n){return Og.call(n)}var Ng="[object Null]",Pg="[object Undefined]",Pa=et?et.toStringTag:void 0;function Pt(n){return n==null?n===void 0?Pg:Ng:Pa&&Pa in Object(n)?Ag(n):kg(n)}function Yc(n,e){return function(t){return n(e(t))}}var Gs=Yc(Object.getPrototypeOf,Object);function xt(n){return n!=null&&typeof n=="object"}var xg="[object Object]",Dg=Function.prototype,Mg=Object.prototype,Qc=Dg.toString,Lg=Mg.hasOwnProperty,Fg=Qc.call(Object);function xa(n){if(!xt(n)||Pt(n)!=xg)return!1;var e=Gs(n);if(e===null)return!0;var t=Lg.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Qc.call(t)==Fg}function $g(){this.__data__=[],this.size=0}function Jc(n,e){return n===e||n!==n&&e!==e}function Yr(n,e){for(var t=n.length;t--;)if(Jc(n[t][0],e))return t;return-1}var Ug=Array.prototype,jg=Ug.splice;function Vg(n){var e=this.__data__,t=Yr(e,n);if(t<0)return!1;var r=e.length-1;return t==r?e.pop():jg.call(e,t,1),--this.size,!0}function Bg(n){var e=this.__data__,t=Yr(e,n);return t<0?void 0:e[t][1]}function Wg(n){return Yr(this.__data__,n)>-1}function Hg(n,e){var t=this.__data__,r=Yr(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this}function Ve(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Ve.prototype.clear=$g;Ve.prototype.delete=Vg;Ve.prototype.get=Bg;Ve.prototype.has=Wg;Ve.prototype.set=Hg;function zg(){this.__data__=new Ve,this.size=0}function Gg(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}function qg(n){return this.__data__.get(n)}function Kg(n){return this.__data__.has(n)}function qn(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var Yg="[object AsyncFunction]",Qg="[object Function]",Jg="[object GeneratorFunction]",Xg="[object Proxy]";function Xc(n){if(!qn(n))return!1;var e=Pt(n);return e==Qg||e==Jg||e==Yg||e==Xg}var Fi=Re["__core-js_shared__"],Da=function(){var n=/[^.]+$/.exec(Fi&&Fi.keys&&Fi.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function Zg(n){return!!Da&&Da in n}var em=Function.prototype,tm=em.toString;function Dt(n){if(n!=null){try{return tm.call(n)}catch{}try{return n+""}catch{}}return""}var nm=/[\\^$.*+?()[\]{}|]/g,rm=/^\[object .+?Constructor\]$/,im=Function.prototype,sm=Object.prototype,om=im.toString,am=sm.hasOwnProperty,lm=RegExp("^"+om.call(am).replace(nm,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function cm(n){if(!qn(n)||Zg(n))return!1;var e=Xc(n)?lm:rm;return e.test(Dt(n))}function um(n,e){return n==null?void 0:n[e]}function Mt(n,e){var t=um(n,e);return cm(t)?t:void 0}var xn=Mt(Re,"Map"),Dn=Mt(Object,"create");function hm(){this.__data__=Dn?Dn(null):{},this.size=0}function dm(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var fm="__lodash_hash_undefined__",pm=Object.prototype,_m=pm.hasOwnProperty;function gm(n){var e=this.__data__;if(Dn){var t=e[n];return t===fm?void 0:t}return _m.call(e,n)?e[n]:void 0}var mm=Object.prototype,ym=mm.hasOwnProperty;function vm(n){var e=this.__data__;return Dn?e[n]!==void 0:ym.call(e,n)}var Em="__lodash_hash_undefined__";function bm(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=Dn&&e===void 0?Em:e,this}function At(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}At.prototype.clear=hm;At.prototype.delete=dm;At.prototype.get=gm;At.prototype.has=vm;At.prototype.set=bm;function wm(){this.size=0,this.__data__={hash:new At,map:new(xn||Ve),string:new At}}function Im(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function Qr(n,e){var t=n.__data__;return Im(e)?t[typeof e=="string"?"string":"hash"]:t.map}function Tm(n){var e=Qr(this,n).delete(n);return this.size-=e?1:0,e}function Cm(n){return Qr(this,n).get(n)}function Sm(n){return Qr(this,n).has(n)}function Am(n,e){var t=Qr(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this}function lt(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}lt.prototype.clear=wm;lt.prototype.delete=Tm;lt.prototype.get=Cm;lt.prototype.has=Sm;lt.prototype.set=Am;var Rm=200;function Om(n,e){var t=this.__data__;if(t instanceof Ve){var r=t.__data__;if(!xn||r.length<Rm-1)return r.push([n,e]),this.size=++t.size,this;t=this.__data__=new lt(r)}return t.set(n,e),this.size=t.size,this}function cn(n){var e=this.__data__=new Ve(n);this.size=e.size}cn.prototype.clear=zg;cn.prototype.delete=Gg;cn.prototype.get=qg;cn.prototype.has=Kg;cn.prototype.set=Om;function km(n,e){for(var t=-1,r=n==null?0:n.length;++t<r&&e(n[t],t,n)!==!1;);return n}var Ma=function(){try{var n=Mt(Object,"defineProperty");return n({},"",{}),n}catch{}}();function Zc(n,e,t){e=="__proto__"&&Ma?Ma(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}var Nm=Object.prototype,Pm=Nm.hasOwnProperty;function eu(n,e,t){var r=n[e];(!(Pm.call(n,e)&&Jc(r,t))||t===void 0&&!(e in n))&&Zc(n,e,t)}function Jr(n,e,t,r){var i=!t;t||(t={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(t[a],n[a],a,t,n):void 0;l===void 0&&(l=n[a]),i?Zc(t,a,l):eu(t,a,l)}return t}function xm(n,e){for(var t=-1,r=Array(n);++t<n;)r[t]=e(t);return r}var Dm="[object Arguments]";function La(n){return xt(n)&&Pt(n)==Dm}var tu=Object.prototype,Mm=tu.hasOwnProperty,Lm=tu.propertyIsEnumerable,Fm=La(function(){return arguments}())?La:function(n){return xt(n)&&Mm.call(n,"callee")&&!Lm.call(n,"callee")},Kn=Array.isArray;function $m(){return!1}var nu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fa=nu&&typeof module=="object"&&module&&!module.nodeType&&module,Um=Fa&&Fa.exports===nu,$a=Um?Re.Buffer:void 0,jm=$a?$a.isBuffer:void 0,ru=jm||$m,Vm=9007199254740991,Bm=/^(?:0|[1-9]\d*)$/;function Wm(n,e){var t=typeof n;return e=e??Vm,!!e&&(t=="number"||t!="symbol"&&Bm.test(n))&&n>-1&&n%1==0&&n<e}var Hm=9007199254740991;function iu(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Hm}var zm="[object Arguments]",Gm="[object Array]",qm="[object Boolean]",Km="[object Date]",Ym="[object Error]",Qm="[object Function]",Jm="[object Map]",Xm="[object Number]",Zm="[object Object]",ey="[object RegExp]",ty="[object Set]",ny="[object String]",ry="[object WeakMap]",iy="[object ArrayBuffer]",sy="[object DataView]",oy="[object Float32Array]",ay="[object Float64Array]",ly="[object Int8Array]",cy="[object Int16Array]",uy="[object Int32Array]",hy="[object Uint8Array]",dy="[object Uint8ClampedArray]",fy="[object Uint16Array]",py="[object Uint32Array]",U={};U[oy]=U[ay]=U[ly]=U[cy]=U[uy]=U[hy]=U[dy]=U[fy]=U[py]=!0;U[zm]=U[Gm]=U[iy]=U[qm]=U[sy]=U[Km]=U[Ym]=U[Qm]=U[Jm]=U[Xm]=U[Zm]=U[ey]=U[ty]=U[ny]=U[ry]=!1;function _y(n){return xt(n)&&iu(n.length)&&!!U[Pt(n)]}function qs(n){return function(e){return n(e)}}var su=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wn=su&&typeof module=="object"&&module&&!module.nodeType&&module,gy=wn&&wn.exports===su,$i=gy&&qc.process,en=function(){try{var n=wn&&wn.require&&wn.require("util").types;return n||$i&&$i.binding&&$i.binding("util")}catch{}}(),Ua=en&&en.isTypedArray,my=Ua?qs(Ua):_y,yy=Object.prototype,vy=yy.hasOwnProperty;function ou(n,e){var t=Kn(n),r=!t&&Fm(n),i=!t&&!r&&ru(n),s=!t&&!r&&!i&&my(n),o=t||r||i||s,a=o?xm(n.length,String):[],l=a.length;for(var c in n)(e||vy.call(n,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Wm(c,l)))&&a.push(c);return a}var Ey=Object.prototype;function Ks(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||Ey;return n===t}var by=Yc(Object.keys,Object),wy=Object.prototype,Iy=wy.hasOwnProperty;function Ty(n){if(!Ks(n))return by(n);var e=[];for(var t in Object(n))Iy.call(n,t)&&t!="constructor"&&e.push(t);return e}function au(n){return n!=null&&iu(n.length)&&!Xc(n)}function Ys(n){return au(n)?ou(n):Ty(n)}function Cy(n,e){return n&&Jr(e,Ys(e),n)}function Sy(n){var e=[];if(n!=null)for(var t in Object(n))e.push(t);return e}var Ay=Object.prototype,Ry=Ay.hasOwnProperty;function Oy(n){if(!qn(n))return Sy(n);var e=Ks(n),t=[];for(var r in n)r=="constructor"&&(e||!Ry.call(n,r))||t.push(r);return t}function Qs(n){return au(n)?ou(n,!0):Oy(n)}function ky(n,e){return n&&Jr(e,Qs(e),n)}var lu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ja=lu&&typeof module=="object"&&module&&!module.nodeType&&module,Ny=ja&&ja.exports===lu,Va=Ny?Re.Buffer:void 0,Ba=Va?Va.allocUnsafe:void 0;function Py(n,e){if(e)return n.slice();var t=n.length,r=Ba?Ba(t):new n.constructor(t);return n.copy(r),r}function cu(n,e){var t=-1,r=n.length;for(e||(e=Array(r));++t<r;)e[t]=n[t];return e}function xy(n,e){for(var t=-1,r=n==null?0:n.length,i=0,s=[];++t<r;){var o=n[t];e(o,t,n)&&(s[i++]=o)}return s}function uu(){return[]}var Dy=Object.prototype,My=Dy.propertyIsEnumerable,Wa=Object.getOwnPropertySymbols,Js=Wa?function(n){return n==null?[]:(n=Object(n),xy(Wa(n),function(e){return My.call(n,e)}))}:uu;function Ly(n,e){return Jr(n,Js(n),e)}function hu(n,e){for(var t=-1,r=e.length,i=n.length;++t<r;)n[i+t]=e[t];return n}var Fy=Object.getOwnPropertySymbols,du=Fy?function(n){for(var e=[];n;)hu(e,Js(n)),n=Gs(n);return e}:uu;function $y(n,e){return Jr(n,du(n),e)}function fu(n,e,t){var r=e(n);return Kn(n)?r:hu(r,t(n))}function Uy(n){return fu(n,Ys,Js)}function jy(n){return fu(n,Qs,du)}var as=Mt(Re,"DataView"),ls=Mt(Re,"Promise"),cs=Mt(Re,"Set"),us=Mt(Re,"WeakMap"),Ha="[object Map]",Vy="[object Object]",za="[object Promise]",Ga="[object Set]",qa="[object WeakMap]",Ka="[object DataView]",By=Dt(as),Wy=Dt(xn),Hy=Dt(ls),zy=Dt(cs),Gy=Dt(us),dt=Pt;(as&&dt(new as(new ArrayBuffer(1)))!=Ka||xn&&dt(new xn)!=Ha||ls&&dt(ls.resolve())!=za||cs&&dt(new cs)!=Ga||us&&dt(new us)!=qa)&&(dt=function(n){var e=Pt(n),t=e==Vy?n.constructor:void 0,r=t?Dt(t):"";if(r)switch(r){case By:return Ka;case Wy:return Ha;case Hy:return za;case zy:return Ga;case Gy:return qa}return e});const Xs=dt;var qy=Object.prototype,Ky=qy.hasOwnProperty;function Yy(n){var e=n.length,t=new n.constructor(e);return e&&typeof n[0]=="string"&&Ky.call(n,"index")&&(t.index=n.index,t.input=n.input),t}var Ya=Re.Uint8Array;function Zs(n){var e=new n.constructor(n.byteLength);return new Ya(e).set(new Ya(n)),e}function Qy(n,e){var t=e?Zs(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.byteLength)}var Jy=/\w*$/;function Xy(n){var e=new n.constructor(n.source,Jy.exec(n));return e.lastIndex=n.lastIndex,e}var Qa=et?et.prototype:void 0,Ja=Qa?Qa.valueOf:void 0;function Zy(n){return Ja?Object(Ja.call(n)):{}}function ev(n,e){var t=e?Zs(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}var tv="[object Boolean]",nv="[object Date]",rv="[object Map]",iv="[object Number]",sv="[object RegExp]",ov="[object Set]",av="[object String]",lv="[object Symbol]",cv="[object ArrayBuffer]",uv="[object DataView]",hv="[object Float32Array]",dv="[object Float64Array]",fv="[object Int8Array]",pv="[object Int16Array]",_v="[object Int32Array]",gv="[object Uint8Array]",mv="[object Uint8ClampedArray]",yv="[object Uint16Array]",vv="[object Uint32Array]";function Ev(n,e,t){var r=n.constructor;switch(e){case cv:return Zs(n);case tv:case nv:return new r(+n);case uv:return Qy(n,t);case hv:case dv:case fv:case pv:case _v:case gv:case mv:case yv:case vv:return ev(n,t);case rv:return new r;case iv:case av:return new r(n);case sv:return Xy(n);case ov:return new r;case lv:return Zy(n)}}var Xa=Object.create,bv=function(){function n(){}return function(e){if(!qn(e))return{};if(Xa)return Xa(e);n.prototype=e;var t=new n;return n.prototype=void 0,t}}();function wv(n){return typeof n.constructor=="function"&&!Ks(n)?bv(Gs(n)):{}}var Iv="[object Map]";function Tv(n){return xt(n)&&Xs(n)==Iv}var Za=en&&en.isMap,Cv=Za?qs(Za):Tv,Sv="[object Set]";function Av(n){return xt(n)&&Xs(n)==Sv}var el=en&&en.isSet,Rv=el?qs(el):Av,Ov=1,kv=2,Nv=4,pu="[object Arguments]",Pv="[object Array]",xv="[object Boolean]",Dv="[object Date]",Mv="[object Error]",_u="[object Function]",Lv="[object GeneratorFunction]",Fv="[object Map]",$v="[object Number]",gu="[object Object]",Uv="[object RegExp]",jv="[object Set]",Vv="[object String]",Bv="[object Symbol]",Wv="[object WeakMap]",Hv="[object ArrayBuffer]",zv="[object DataView]",Gv="[object Float32Array]",qv="[object Float64Array]",Kv="[object Int8Array]",Yv="[object Int16Array]",Qv="[object Int32Array]",Jv="[object Uint8Array]",Xv="[object Uint8ClampedArray]",Zv="[object Uint16Array]",eE="[object Uint32Array]",F={};F[pu]=F[Pv]=F[Hv]=F[zv]=F[xv]=F[Dv]=F[Gv]=F[qv]=F[Kv]=F[Yv]=F[Qv]=F[Fv]=F[$v]=F[gu]=F[Uv]=F[jv]=F[Vv]=F[Bv]=F[Jv]=F[Xv]=F[Zv]=F[eE]=!0;F[Mv]=F[_u]=F[Wv]=!1;function In(n,e,t,r,i,s){var o,a=e&Ov,l=e&kv,c=e&Nv;if(t&&(o=i?t(n,r,i,s):t(n)),o!==void 0)return o;if(!qn(n))return n;var h=Kn(n);if(h){if(o=Yy(n),!a)return cu(n,o)}else{var u=Xs(n),d=u==_u||u==Lv;if(ru(n))return Py(n,a);if(u==gu||u==pu||d&&!i){if(o=l||d?{}:wv(n),!a)return l?$y(n,ky(o,n)):Ly(n,Cy(o,n))}else{if(!F[u])return i?n:{};o=Ev(n,u,a)}}s||(s=new cn);var p=s.get(n);if(p)return p;s.set(n,o),Rv(n)?n.forEach(function(T){o.add(In(T,e,t,T,n,s))}):Cv(n)&&n.forEach(function(T,k){o.set(k,In(T,e,t,k,n,s))});var g=c?l?jy:Uy:l?Qs:Ys,v=h?void 0:g(n);return km(v||n,function(T,k){v&&(k=T,T=n[k]),eu(o,k,In(T,e,t,k,n,s))}),o}var tE=1,nE=4;function ir(n){return In(n,tE|nE)}var tl=Array.isArray,nl=Object.keys,rE=Object.prototype.hasOwnProperty,iE=typeof Element<"u";function hs(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){var t=tl(n),r=tl(e),i,s,o;if(t&&r){if(s=n.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!hs(n[i],e[i]))return!1;return!0}if(t!=r)return!1;var a=n instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return n.getTime()==e.getTime();var c=n instanceof RegExp,h=e instanceof RegExp;if(c!=h)return!1;if(c&&h)return n.toString()==e.toString();var u=nl(n);if(s=u.length,s!==nl(e).length)return!1;for(i=s;i--!==0;)if(!rE.call(e,u[i]))return!1;if(iE&&n instanceof Element&&e instanceof Element)return n===e;for(i=s;i--!==0;)if(o=u[i],!(o==="_owner"&&n.$$typeof)&&!hs(n[o],e[o]))return!1;return!0}return n!==n&&e!==e}var sE=function(e,t){try{return hs(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const ft=Yl(sE);var oE=4;function rl(n){return In(n,oE)}function mu(n,e){for(var t=-1,r=n==null?0:n.length,i=Array(r);++t<r;)i[t]=e(n[t],t,n);return i}var aE="[object Symbol]";function eo(n){return typeof n=="symbol"||xt(n)&&Pt(n)==aE}var lE="Expected a function";function to(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(lE);var t=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=t.cache;if(s.has(i))return s.get(i);var o=n.apply(this,r);return t.cache=s.set(i,o)||s,o};return t.cache=new(to.Cache||lt),t}to.Cache=lt;var cE=500;function uE(n){var e=to(n,function(r){return t.size===cE&&t.clear(),r}),t=e.cache;return e}var hE=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,dE=/\\(\\)?/g,fE=uE(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(hE,function(t,r,i,s){e.push(i?s.replace(dE,"$1"):r||t)}),e});const pE=fE;var _E=1/0;function gE(n){if(typeof n=="string"||eo(n))return n;var e=n+"";return e=="0"&&1/n==-_E?"-0":e}var mE=1/0,il=et?et.prototype:void 0,sl=il?il.toString:void 0;function yu(n){if(typeof n=="string")return n;if(Kn(n))return mu(n,yu)+"";if(eo(n))return sl?sl.call(n):"";var e=n+"";return e=="0"&&1/n==-mE?"-0":e}function yE(n){return n==null?"":yu(n)}function vu(n){return Kn(n)?mu(n,gE):eo(n)?[n]:cu(pE(yE(n)))}var Eu={exports:{}},D={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J=typeof Symbol=="function"&&Symbol.for,no=J?Symbol.for("react.element"):60103,ro=J?Symbol.for("react.portal"):60106,Xr=J?Symbol.for("react.fragment"):60107,Zr=J?Symbol.for("react.strict_mode"):60108,ei=J?Symbol.for("react.profiler"):60114,ti=J?Symbol.for("react.provider"):60109,ni=J?Symbol.for("react.context"):60110,io=J?Symbol.for("react.async_mode"):60111,ri=J?Symbol.for("react.concurrent_mode"):60111,ii=J?Symbol.for("react.forward_ref"):60112,si=J?Symbol.for("react.suspense"):60113,vE=J?Symbol.for("react.suspense_list"):60120,oi=J?Symbol.for("react.memo"):60115,ai=J?Symbol.for("react.lazy"):60116,EE=J?Symbol.for("react.block"):60121,bE=J?Symbol.for("react.fundamental"):60117,wE=J?Symbol.for("react.responder"):60118,IE=J?Symbol.for("react.scope"):60119;function ce(n){if(typeof n=="object"&&n!==null){var e=n.$$typeof;switch(e){case no:switch(n=n.type,n){case io:case ri:case Xr:case ei:case Zr:case si:return n;default:switch(n=n&&n.$$typeof,n){case ni:case ii:case ai:case oi:case ti:return n;default:return e}}case ro:return e}}}function bu(n){return ce(n)===ri}D.AsyncMode=io;D.ConcurrentMode=ri;D.ContextConsumer=ni;D.ContextProvider=ti;D.Element=no;D.ForwardRef=ii;D.Fragment=Xr;D.Lazy=ai;D.Memo=oi;D.Portal=ro;D.Profiler=ei;D.StrictMode=Zr;D.Suspense=si;D.isAsyncMode=function(n){return bu(n)||ce(n)===io};D.isConcurrentMode=bu;D.isContextConsumer=function(n){return ce(n)===ni};D.isContextProvider=function(n){return ce(n)===ti};D.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===no};D.isForwardRef=function(n){return ce(n)===ii};D.isFragment=function(n){return ce(n)===Xr};D.isLazy=function(n){return ce(n)===ai};D.isMemo=function(n){return ce(n)===oi};D.isPortal=function(n){return ce(n)===ro};D.isProfiler=function(n){return ce(n)===ei};D.isStrictMode=function(n){return ce(n)===Zr};D.isSuspense=function(n){return ce(n)===si};D.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===Xr||n===ri||n===ei||n===Zr||n===si||n===vE||typeof n=="object"&&n!==null&&(n.$$typeof===ai||n.$$typeof===oi||n.$$typeof===ti||n.$$typeof===ni||n.$$typeof===ii||n.$$typeof===bE||n.$$typeof===wE||n.$$typeof===IE||n.$$typeof===EE)};D.typeOf=ce;Eu.exports=D;var TE=Eu.exports,wu=TE,CE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},SE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Iu={};Iu[wu.ForwardRef]=CE;Iu[wu.Memo]=SE;function q(){return q=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},q.apply(this,arguments)}function Tu(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}var li=b.createContext(void 0);li.displayName="FormikContext";var AE=li.Provider;li.Consumer;function RE(){var n=b.useContext(li);return n}var fe=function(e){return typeof e=="function"},ci=function(e){return e!==null&&typeof e=="object"},OE=function(e){return String(Math.floor(Number(e)))===e},Ui=function(e){return Object.prototype.toString.call(e)==="[object String]"},kE=function(e){return b.Children.count(e)===0},ji=function(e){return ci(e)&&fe(e.then)};function le(n,e,t,r){r===void 0&&(r=0);for(var i=vu(e);n&&r<i.length;)n=n[i[r++]];return r!==i.length&&!n||n===void 0?t:n}function vt(n,e,t){for(var r=rl(n),i=r,s=0,o=vu(e);s<o.length-1;s++){var a=o[s],l=le(n,o.slice(0,s+1));if(l&&(ci(l)||Array.isArray(l)))i=i[a]=rl(l);else{var c=o[s+1];i=i[a]=OE(c)&&Number(c)>=0?[]:{}}}return(s===0?n:i)[o[s]]===t?n:(t===void 0?delete i[o[s]]:i[o[s]]=t,s===0&&t===void 0&&delete r[o[s]],r)}function Cu(n,e,t,r){t===void 0&&(t=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(n);i<s.length;i++){var o=s[i],a=n[o];ci(a)?t.get(a)||(t.set(a,!0),r[o]=Array.isArray(a)?[]:{},Cu(a,e,t,r[o])):r[o]=e}return r}function NE(n,e){switch(e.type){case"SET_VALUES":return q({},n,{values:e.payload});case"SET_TOUCHED":return q({},n,{touched:e.payload});case"SET_ERRORS":return ft(n.errors,e.payload)?n:q({},n,{errors:e.payload});case"SET_STATUS":return q({},n,{status:e.payload});case"SET_ISSUBMITTING":return q({},n,{isSubmitting:e.payload});case"SET_ISVALIDATING":return q({},n,{isValidating:e.payload});case"SET_FIELD_VALUE":return q({},n,{values:vt(n.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return q({},n,{touched:vt(n.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return q({},n,{errors:vt(n.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return q({},n,e.payload);case"SET_FORMIK_STATE":return e.payload(n);case"SUBMIT_ATTEMPT":return q({},n,{touched:Cu(n.values,!0),isSubmitting:!0,submitCount:n.submitCount+1});case"SUBMIT_FAILURE":return q({},n,{isSubmitting:!1});case"SUBMIT_SUCCESS":return q({},n,{isSubmitting:!1});default:return n}}var ut={},sr={};function PE(n){var e=n.validateOnChange,t=e===void 0?!0:e,r=n.validateOnBlur,i=r===void 0?!0:r,s=n.validateOnMount,o=s===void 0?!1:s,a=n.isInitialValid,l=n.enableReinitialize,c=l===void 0?!1:l,h=n.onSubmit,u=Tu(n,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=q({validateOnChange:t,validateOnBlur:i,validateOnMount:o,onSubmit:h},u),p=b.useRef(d.initialValues),g=b.useRef(d.initialErrors||ut),v=b.useRef(d.initialTouched||sr),T=b.useRef(d.initialStatus),k=b.useRef(!1),V=b.useRef({});b.useEffect(function(){return k.current=!0,function(){k.current=!1}},[]);var ue=b.useState(0),Ee=ue[1],pe=b.useRef({values:ir(d.initialValues),errors:ir(d.initialErrors)||ut,touched:ir(d.initialTouched)||sr,status:ir(d.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),O=pe.current,N=b.useCallback(function(f){var m=pe.current;pe.current=NE(m,f),m!==pe.current&&Ee(function(y){return y+1})},[]),fn=b.useCallback(function(f,m){return new Promise(function(y,E){var C=d.validate(f,m);C==null?y(ut):ji(C)?C.then(function(x){y(x||ut)},function(x){E(x)}):y(C)})},[d.validate]),he=b.useCallback(function(f,m){var y=d.validationSchema,E=fe(y)?y(m):y,C=m&&E.validateAt?E.validateAt(m,f):DE(f,E);return new Promise(function(x,G){C.then(function(){x(ut)},function(Ne){Ne.name==="ValidationError"?x(xE(Ne)):G(Ne)})})},[d.validationSchema]),ct=b.useCallback(function(f,m){return new Promise(function(y){return y(V.current[f].validate(m))})},[]),W=b.useCallback(function(f){var m=Object.keys(V.current).filter(function(E){return fe(V.current[E].validate)}),y=m.length>0?m.map(function(E){return ct(E,le(f,E))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(y).then(function(E){return E.reduce(function(C,x,G){return x==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||x&&(C=vt(C,m[G],x)),C},{})})},[ct]),ke=b.useCallback(function(f){return Promise.all([W(f),d.validationSchema?he(f):{},d.validate?fn(f):{}]).then(function(m){var y=m[0],E=m[1],C=m[2],x=os.all([y,E,C],{arrayMerge:ME});return x})},[d.validate,d.validationSchema,W,fn,he]),ne=de(function(f){return f===void 0&&(f=O.values),N({type:"SET_ISVALIDATING",payload:!0}),ke(f).then(function(m){return k.current&&(N({type:"SET_ISVALIDATING",payload:!1}),N({type:"SET_ERRORS",payload:m})),m})});b.useEffect(function(){o&&k.current===!0&&ft(p.current,d.initialValues)&&ne(p.current)},[o,ne]);var Be=b.useCallback(function(f){var m=f&&f.values?f.values:p.current,y=f&&f.errors?f.errors:g.current?g.current:d.initialErrors||{},E=f&&f.touched?f.touched:v.current?v.current:d.initialTouched||{},C=f&&f.status?f.status:T.current?T.current:d.initialStatus;p.current=m,g.current=y,v.current=E,T.current=C;var x=function(){N({type:"RESET_FORM",payload:{isSubmitting:!!f&&!!f.isSubmitting,errors:y,touched:E,status:C,values:m,isValidating:!!f&&!!f.isValidating,submitCount:f&&f.submitCount&&typeof f.submitCount=="number"?f.submitCount:0}})};if(d.onReset){var G=d.onReset(O.values,Zo);ji(G)?G.then(x):x()}else x()},[d.initialErrors,d.initialStatus,d.initialTouched,d.onReset]);b.useEffect(function(){k.current===!0&&!ft(p.current,d.initialValues)&&c&&(p.current=d.initialValues,Be(),o&&ne(p.current))},[c,d.initialValues,Be,o,ne]),b.useEffect(function(){c&&k.current===!0&&!ft(g.current,d.initialErrors)&&(g.current=d.initialErrors||ut,N({type:"SET_ERRORS",payload:d.initialErrors||ut}))},[c,d.initialErrors]),b.useEffect(function(){c&&k.current===!0&&!ft(v.current,d.initialTouched)&&(v.current=d.initialTouched||sr,N({type:"SET_TOUCHED",payload:d.initialTouched||sr}))},[c,d.initialTouched]),b.useEffect(function(){c&&k.current===!0&&!ft(T.current,d.initialStatus)&&(T.current=d.initialStatus,N({type:"SET_STATUS",payload:d.initialStatus}))},[c,d.initialStatus,d.initialTouched]);var Ho=de(function(f){if(V.current[f]&&fe(V.current[f].validate)){var m=le(O.values,f),y=V.current[f].validate(m);return ji(y)?(N({type:"SET_ISVALIDATING",payload:!0}),y.then(function(E){return E}).then(function(E){N({type:"SET_FIELD_ERROR",payload:{field:f,value:E}}),N({type:"SET_ISVALIDATING",payload:!1})})):(N({type:"SET_FIELD_ERROR",payload:{field:f,value:y}}),Promise.resolve(y))}else if(d.validationSchema)return N({type:"SET_ISVALIDATING",payload:!0}),he(O.values,f).then(function(E){return E}).then(function(E){N({type:"SET_FIELD_ERROR",payload:{field:f,value:le(E,f)}}),N({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),nd=b.useCallback(function(f,m){var y=m.validate;V.current[f]={validate:y}},[]),rd=b.useCallback(function(f){delete V.current[f]},[]),zo=de(function(f,m){N({type:"SET_TOUCHED",payload:f});var y=m===void 0?i:m;return y?ne(O.values):Promise.resolve()}),Go=b.useCallback(function(f){N({type:"SET_ERRORS",payload:f})},[]),qo=de(function(f,m){var y=fe(f)?f(O.values):f;N({type:"SET_VALUES",payload:y});var E=m===void 0?t:m;return E?ne(y):Promise.resolve()}),tr=b.useCallback(function(f,m){N({type:"SET_FIELD_ERROR",payload:{field:f,value:m}})},[]),jt=de(function(f,m,y){N({type:"SET_FIELD_VALUE",payload:{field:f,value:m}});var E=y===void 0?t:y;return E?ne(vt(O.values,f,m)):Promise.resolve()}),Ko=b.useCallback(function(f,m){var y=m,E=f,C;if(!Ui(f)){f.persist&&f.persist();var x=f.target?f.target:f.currentTarget,G=x.type,Ne=x.name,Ri=x.id,Oi=x.value,dd=x.checked,t0=x.outerHTML,ea=x.options,fd=x.multiple;y=m||Ne||Ri,E=/number|range/.test(G)?(C=parseFloat(Oi),isNaN(C)?"":C):/checkbox/.test(G)?FE(le(O.values,y),dd,Oi):ea&&fd?LE(ea):Oi}y&&jt(y,E)},[jt,O.values]),Ti=de(function(f){if(Ui(f))return function(m){return Ko(m,f)};Ko(f)}),Vt=de(function(f,m,y){m===void 0&&(m=!0),N({type:"SET_FIELD_TOUCHED",payload:{field:f,value:m}});var E=y===void 0?i:y;return E?ne(O.values):Promise.resolve()}),Yo=b.useCallback(function(f,m){f.persist&&f.persist();var y=f.target,E=y.name,C=y.id,x=y.outerHTML,G=m||E||C;Vt(G,!0)},[Vt]),Ci=de(function(f){if(Ui(f))return function(m){return Yo(m,f)};Yo(f)}),Qo=b.useCallback(function(f){fe(f)?N({type:"SET_FORMIK_STATE",payload:f}):N({type:"SET_FORMIK_STATE",payload:function(){return f}})},[]),Jo=b.useCallback(function(f){N({type:"SET_STATUS",payload:f})},[]),Xo=b.useCallback(function(f){N({type:"SET_ISSUBMITTING",payload:f})},[]),Si=de(function(){return N({type:"SUBMIT_ATTEMPT"}),ne().then(function(f){var m=f instanceof Error,y=!m&&Object.keys(f).length===0;if(y){var E;try{if(E=sd(),E===void 0)return}catch(C){throw C}return Promise.resolve(E).then(function(C){return k.current&&N({type:"SUBMIT_SUCCESS"}),C}).catch(function(C){if(k.current)throw N({type:"SUBMIT_FAILURE"}),C})}else if(k.current&&(N({type:"SUBMIT_FAILURE"}),m))throw f})}),id=de(function(f){f&&f.preventDefault&&fe(f.preventDefault)&&f.preventDefault(),f&&f.stopPropagation&&fe(f.stopPropagation)&&f.stopPropagation(),Si().catch(function(m){console.warn("Warning: An unhandled error was caught from submitForm()",m)})}),Zo={resetForm:Be,validateForm:ne,validateField:Ho,setErrors:Go,setFieldError:tr,setFieldTouched:Vt,setFieldValue:jt,setStatus:Jo,setSubmitting:Xo,setTouched:zo,setValues:qo,setFormikState:Qo,submitForm:Si},sd=de(function(){return h(O.values,Zo)}),od=de(function(f){f&&f.preventDefault&&fe(f.preventDefault)&&f.preventDefault(),f&&f.stopPropagation&&fe(f.stopPropagation)&&f.stopPropagation(),Be()}),ad=b.useCallback(function(f){return{value:le(O.values,f),error:le(O.errors,f),touched:!!le(O.touched,f),initialValue:le(p.current,f),initialTouched:!!le(v.current,f),initialError:le(g.current,f)}},[O.errors,O.touched,O.values]),ld=b.useCallback(function(f){return{setValue:function(y,E){return jt(f,y,E)},setTouched:function(y,E){return Vt(f,y,E)},setError:function(y){return tr(f,y)}}},[jt,Vt,tr]),cd=b.useCallback(function(f){var m=ci(f),y=m?f.name:f,E=le(O.values,y),C={name:y,value:E,onChange:Ti,onBlur:Ci};if(m){var x=f.type,G=f.value,Ne=f.as,Ri=f.multiple;x==="checkbox"?G===void 0?C.checked=!!E:(C.checked=!!(Array.isArray(E)&&~E.indexOf(G)),C.value=G):x==="radio"?(C.checked=E===G,C.value=G):Ne==="select"&&Ri&&(C.value=C.value||[],C.multiple=!0)}return C},[Ci,Ti,O.values]),Ai=b.useMemo(function(){return!ft(p.current,O.values)},[p.current,O.values]),ud=b.useMemo(function(){return typeof a<"u"?Ai?O.errors&&Object.keys(O.errors).length===0:a!==!1&&fe(a)?a(d):a:O.errors&&Object.keys(O.errors).length===0},[a,Ai,O.errors,d]),hd=q({},O,{initialValues:p.current,initialErrors:g.current,initialTouched:v.current,initialStatus:T.current,handleBlur:Ci,handleChange:Ti,handleReset:od,handleSubmit:id,resetForm:Be,setErrors:Go,setFormikState:Qo,setFieldTouched:Vt,setFieldValue:jt,setFieldError:tr,setStatus:Jo,setSubmitting:Xo,setTouched:zo,setValues:qo,submitForm:Si,validateForm:ne,validateField:Ho,isValid:ud,dirty:Ai,unregisterField:rd,registerField:nd,getFieldProps:cd,getFieldMeta:ad,getFieldHelpers:ld,validateOnBlur:i,validateOnChange:t,validateOnMount:o});return hd}function l0(n){var e=PE(n),t=n.component,r=n.children,i=n.render,s=n.innerRef;return b.useImperativeHandle(s,function(){return e}),b.createElement(AE,{value:e},t?b.createElement(t,e):i?i(e):r?fe(r)?r(e):kE(r)?null:b.Children.only(r):null)}function xE(n){var e={};if(n.inner){if(n.inner.length===0)return vt(e,n.path,n.message);for(var i=n.inner,t=Array.isArray(i),r=0,i=t?i:i[Symbol.iterator]();;){var s;if(t){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;le(e,o.path)||(e=vt(e,o.path,o.message))}}return e}function DE(n,e,t,r){t===void 0&&(t=!1);var i=ds(n);return e[t?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function ds(n){var e=Array.isArray(n)?[]:{};for(var t in n)if(Object.prototype.hasOwnProperty.call(n,t)){var r=String(t);Array.isArray(n[r])===!0?e[r]=n[r].map(function(i){return Array.isArray(i)===!0||xa(i)?ds(i):i!==""?i:void 0}):xa(n[r])?e[r]=ds(n[r]):e[r]=n[r]!==""?n[r]:void 0}return e}function ME(n,e,t){var r=n.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=t.clone!==!1,l=a&&t.isMergeableObject(s);r[o]=l?os(Array.isArray(s)?[]:{},s,t):s}else t.isMergeableObject(s)?r[o]=os(n[o],s,t):n.indexOf(s)===-1&&r.push(s)}),r}function LE(n){return Array.from(n).filter(function(e){return e.selected}).map(function(e){return e.value})}function FE(n,e,t){if(typeof n=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(n))r=n,s=n.indexOf(t),i=s>=0;else if(!t||t=="true"||t=="false")return!!e;return e&&t&&!i?r.concat(t):i?r.slice(0,s).concat(r.slice(s+1)):r}var $E=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?b.useLayoutEffect:b.useEffect;function de(n){var e=b.useRef(n);return $E(function(){e.current=n}),b.useCallback(function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}var UE=b.forwardRef(function(n,e){var t=n.action,r=Tu(n,["action"]),i=t??"#",s=RE(),o=s.handleReset,a=s.handleSubmit;return b.createElement("form",q({onSubmit:a,ref:e,onReset:o,action:i},r))});UE.displayName="Form";function Lt(n){this._maxSize=n,this.clear()}Lt.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Lt.prototype.get=function(n){return this._values[n]};Lt.prototype.set=function(n,e){return this._size>=this._maxSize&&this.clear(),n in this._values||this._size++,this._values[n]=e};var jE=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Su=/^\d+$/,VE=/^\d/,BE=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,WE=/^\s*(['"]?)(.*?)(\1)\s*$/,so=512,ol=new Lt(so),al=new Lt(so),ll=new Lt(so),Et={Cache:Lt,split:fs,normalizePath:Vi,setter:function(n){var e=Vi(n);return al.get(n)||al.set(n,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(n,e){var t=Vi(n);return ll.get(n)||ll.set(n,function(i){for(var s=0,o=t.length;s<o;)if(i!=null||!e)i=i[t[s++]];else return;return i})},join:function(n){return n.reduce(function(e,t){return e+(oo(t)||Su.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(n,e,t){HE(Array.isArray(n)?n:fs(n),e,t)}};function Vi(n){return ol.get(n)||ol.set(n,fs(n).map(function(e){return e.replace(WE,"$2")}))}function fs(n){return n.match(jE)||[""]}function HE(n,e,t){var r=n.length,i,s,o,a;for(s=0;s<r;s++)i=n[s],i&&(qE(i)&&(i='"'+i+'"'),a=oo(i),o=!a&&/^\d+$/.test(i),e.call(t,i,a,o,s,n))}function oo(n){return typeof n=="string"&&n&&["'",'"'].indexOf(n.charAt(0))!==-1}function zE(n){return n.match(VE)&&!n.match(Su)}function GE(n){return BE.test(n)}function qE(n){return!oo(n)&&(zE(n)||GE(n))}const KE=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,ui=n=>n.match(KE)||[],hi=n=>n[0].toUpperCase()+n.slice(1),ao=(n,e)=>ui(n).join(e).toLowerCase(),Au=n=>ui(n).reduce((e,t)=>`${e}${e?t[0].toUpperCase()+t.slice(1).toLowerCase():t.toLowerCase()}`,""),YE=n=>hi(Au(n)),QE=n=>ao(n,"_"),JE=n=>ao(n,"-"),XE=n=>hi(ao(n," ")),ZE=n=>ui(n).map(hi).join(" ");var Bi={words:ui,upperFirst:hi,camelCase:Au,pascalCase:YE,snakeCase:QE,kebabCase:JE,sentenceCase:XE,titleCase:ZE},lo={exports:{}};lo.exports=function(n){return Ru(eb(n),n)};lo.exports.array=Ru;function Ru(n,e){var t=n.length,r=new Array(t),i={},s=t,o=tb(e),a=nb(n);for(e.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(n[s],s,new Set);return r;function l(c,h,u){if(u.has(c)){var d;try{d=", node was:"+JSON.stringify(c)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!i[h]){i[h]=!0;var p=o.get(c)||new Set;if(p=Array.from(p),h=p.length){u.add(c);do{var g=p[--h];l(g,a.get(g),u)}while(h);u.delete(c)}r[--t]=c}}}function eb(n){for(var e=new Set,t=0,r=n.length;t<r;t++){var i=n[t];e.add(i[0]),e.add(i[1])}return Array.from(e)}function tb(n){for(var e=new Map,t=0,r=n.length;t<r;t++){var i=n[t];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function nb(n){for(var e=new Map,t=0,r=n.length;t<r;t++)e.set(n[t],t);return e}var rb=lo.exports;const ib=Yl(rb),sb=Object.prototype.toString,ob=Error.prototype.toString,ab=RegExp.prototype.toString,lb=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",cb=/^Symbol\((.*)\)(.*)$/;function ub(n){return n!=+n?"NaN":n===0&&1/n<0?"-0":""+n}function cl(n,e=!1){if(n==null||n===!0||n===!1)return""+n;const t=typeof n;if(t==="number")return ub(n);if(t==="string")return e?`"${n}"`:n;if(t==="function")return"[Function "+(n.name||"anonymous")+"]";if(t==="symbol")return lb.call(n).replace(cb,"Symbol($1)");const r=sb.call(n).slice(8,-1);return r==="Date"?isNaN(n.getTime())?""+n:n.toISOString(n):r==="Error"||n instanceof Error?"["+ob.call(n)+"]":r==="RegExp"?ab.call(n):null}function Je(n,e){let t=cl(n,e);return t!==null?t:JSON.stringify(n,function(r,i){let s=cl(this[r],e);return s!==null?s:i},2)}function Ou(n){return n==null?[]:[].concat(n)}let ku,Nu,Pu,hb=/\$\{\s*(\w+)\s*\}/g;ku=Symbol.toStringTag;class ul{constructor(e,t,r,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[ku]="Error",this.name="ValidationError",this.value=t,this.path=r,this.type=i,this.errors=[],this.inner=[],Ou(e).forEach(s=>{if(ie.isError(s)){this.errors.push(...s.errors);const o=s.inner.length?s.inner:[s];this.inner.push(...o)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Nu=Symbol.hasInstance;Pu=Symbol.toStringTag;class ie extends Error{static formatError(e,t){const r=t.label||t.path||"this";return r!==t.path&&(t=Object.assign({},t,{path:r})),typeof e=="string"?e.replace(hb,(i,s)=>Je(t[s])):typeof e=="function"?e(t):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,t,r,i,s){const o=new ul(e,t,r,i);if(s)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[Pu]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,ie)}static[Nu](e){return ul[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let be={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:n,type:e,value:t,originalValue:r})=>{const i=r!=null&&r!==t?` (cast from the value \`${Je(r,!0)}\`).`:".";return e!=="mixed"?`${n} must be a \`${e}\` type, but the final value was: \`${Je(t,!0)}\``+i:`${n} must match the configured type. The validated value was: \`${Je(t,!0)}\``+i}},re={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},db={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},ps={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},fb={isValue:"${path} field must be ${value}"},_s={noUnknown:"${path} field has unspecified keys: ${unknown}"},pb={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},_b={notType:n=>{const{path:e,value:t,spec:r}=n,i=r.types.length;if(Array.isArray(t)){if(t.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${t.length} for value: \`${Je(t,!0)}\``;if(t.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${t.length} for value: \`${Je(t,!0)}\``}return ie.formatError(be.notType,n)}};Object.assign(Object.create(null),{mixed:be,string:re,number:db,date:ps,object:_s,array:pb,boolean:fb,tuple:_b});const co=n=>n&&n.__isYupSchema__;class Ar{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=t,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new Ar(e,(a,l)=>{var c;let h=o(...a)?i:s;return(c=h==null?void 0:h(l))!=null?c:l})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let r=this.refs.map(s=>s.getValue(t==null?void 0:t.value,t==null?void 0:t.parent,t==null?void 0:t.context)),i=this.fn(r,e,t);if(i===void 0||i===e)return e;if(!co(i))throw new TypeError("conditions must return a schema object");return i.resolve(t)}}const or={context:"$",value:"."};class Ft{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===or.context,this.isValue=this.key[0]===or.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?or.context:this.isValue?or.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Et.getter(this.path,!0),this.map=t.map}getValue(e,t,r){let i=this.isContext?r:this.isValue?e:t;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,t){return this.getValue(e,t==null?void 0:t.parent,t==null?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Ft.prototype.__isYupRef=!0;const _t=n=>n==null;function Bt(n){function e({value:t,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:c,test:h,params:u,message:d,skipAbsent:p}=n;let{parent:g,context:v,abortEarly:T=o.spec.abortEarly,disableStackTrace:k=o.spec.disableStackTrace}=i;function V(W){return Ft.isRef(W)?W.getValue(t,g,v):W}function ue(W={}){const ke=Object.assign({value:t,originalValue:s,label:o.spec.label,path:W.path||r,spec:o.spec,disableStackTrace:W.disableStackTrace||k},u,W.params);for(const Be of Object.keys(ke))ke[Be]=V(ke[Be]);const ne=new ie(ie.formatError(W.message||d,ke),t,ke.path,W.type||c,ke.disableStackTrace);return ne.params=ke,ne}const Ee=T?a:l;let pe={path:r,parent:g,type:c,from:i.from,createError:ue,resolve:V,options:i,originalValue:s,schema:o};const O=W=>{ie.isError(W)?Ee(W):W?l(null):Ee(ue())},N=W=>{ie.isError(W)?Ee(W):a(W)};if(p&&_t(t))return O(!0);let he;try{var ct;if(he=h.call(pe,t,pe),typeof((ct=he)==null?void 0:ct.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${pe.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(he).then(O,N)}}catch(W){N(W);return}O(he)}return e.OPTIONS=n,e}function gb(n,e,t,r=t){let i,s,o;return e?(Et.forEach(e,(a,l,c)=>{let h=l?a.slice(1,a.length-1):a;n=n.resolve({context:r,parent:i,value:t});let u=n.type==="tuple",d=c?parseInt(h,10):0;if(n.innerType||u){if(u&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(t&&d>=t.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=t,t=t&&t[d],n=u?n.spec.types[d]:n.innerType}if(!c){if(!n.fields||!n.fields[h])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${n.type}")`);i=t,t=t&&t[h],n=n.fields[h]}s=h,o=l?"["+a+"]":"."+a}),{schema:n,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:n}}class Rr extends Set{describe(){const e=[];for(const t of this.values())e.push(Ft.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(const r of this.values())t.push(e(r));return t}clone(){return new Rr(this.values())}merge(e,t){const r=this.clone();return e.forEach(i=>r.add(i)),t.forEach(i=>r.delete(i)),r}}function zt(n,e=new Map){if(co(n)||!n||typeof n!="object")return n;if(e.has(n))return e.get(n);let t;if(n instanceof Date)t=new Date(n.getTime()),e.set(n,t);else if(n instanceof RegExp)t=new RegExp(n),e.set(n,t);else if(Array.isArray(n)){t=new Array(n.length),e.set(n,t);for(let r=0;r<n.length;r++)t[r]=zt(n[r],e)}else if(n instanceof Map){t=new Map,e.set(n,t);for(const[r,i]of n.entries())t.set(r,zt(i,e))}else if(n instanceof Set){t=new Set,e.set(n,t);for(const r of n)t.add(zt(r,e))}else if(n instanceof Object){t={},e.set(n,t);for(const[r,i]of Object.entries(n))t[r]=zt(i,e)}else throw Error(`Unable to clone ${n}`);return t}class Ce{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Rr,this._blacklist=new Rr,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(be.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(t=>{t.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=zt(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(e.length===0)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=t,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=this,r=e.clone();const i=Object.assign({},t.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},t.internalTests,r.internalTests),r._whitelist=t._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=t._blacklist.merge(e._blacklist,e._whitelist),r.tests=t.tests,r.exclusiveTests=t.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...t.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let r=t.conditions;t=t.clone(),t.conditions=[],t=r.reduce((i,s)=>s.resolve(i,e),t),t=t.resolve(e)}return t}resolveOptions(e){var t,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(t=e.strict)!=null?t:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,t={}){let r=this.resolve(Object.assign({value:e},t)),i=t.assert==="ignore-optionality",s=r._cast(e,t);if(t.assert!==!1&&!r.isType(s)){if(i&&_t(s))return s;let o=Je(e),a=Je(s);throw new TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,t){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(t)),r}_validate(e,t={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=t,l=e;a||(l=this._cast(l,Object.assign({assert:!1},t)));let c=[];for(let h of Object.values(this.internalTests))h&&c.push(h);this.runTests({path:s,value:l,originalValue:o,options:t,tests:c},r,h=>{if(h.length)return i(h,l);this.runTests({path:s,value:l,originalValue:o,options:t,tests:this.tests},r,i)})}runTests(e,t,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:c}=e,h=v=>{i||(i=!0,t(v,o))},u=v=>{i||(i=!0,r(v,o))},d=s.length,p=[];if(!d)return u([]);let g={value:o,originalValue:a,path:l,options:c,schema:this};for(let v=0;v<s.length;v++){const T=s[v];T(g,h,function(V){V&&(Array.isArray(V)?p.push(...V):p.push(V)),--d<=0&&u(p)})}}asNestedTest({key:e,index:t,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??t;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let c=r[a];const h=Object.assign({},o,{strict:!0,parent:r,value:c,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${l?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(u,d,p)=>this.resolve(h)._validate(c,h,d,p)}validate(e,t){var r;let i=this.resolve(Object.assign({},t,{value:e})),s=(r=t==null?void 0:t.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,t,(l,c)=>{ie.isError(l)&&(l.value=c),a(l)},(l,c)=>{l.length?a(new ie(l,c,void 0,void 0,s)):o(c)}))}validateSync(e,t){var r;let i=this.resolve(Object.assign({},t,{value:e})),s,o=(r=t==null?void 0:t.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},t,{sync:!0}),(a,l)=>{throw ie.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new ie(a,e,void 0,void 0,o);s=l}),s}isValid(e,t){return this.validate(e,t).then(()=>!0,r=>{if(ie.isError(r))return!1;throw r})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(r){if(ie.isError(r))return!1;throw r}}_getDefault(e){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this,e):zt(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){const r=this.clone({nullable:e});return r.internalTests.nullable=Bt({message:t,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,t){const r=this.clone({optional:e});return r.internalTests.optionality=Bt({message:t,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=be.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=be.notNull){return this.nullability(!1,e)}required(e=be.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(e.length===1?typeof e[0]=="function"?t={test:e[0]}:t=e[0]:e.length===2?t={name:e[0],test:e[1]}:t={name:e[0],message:e[1],test:e[2]},t.message===void 0&&(t.message=be.default),typeof t.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Bt(t),s=t.exclusive||t.name&&r.exclusiveTests[t.name]===!0;if(t.exclusive&&!t.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(r.exclusiveTests[t.name]=!!t.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===t.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,t){!Array.isArray(e)&&typeof e!="string"&&(t=e,e=".");let r=this.clone(),i=Ou(e).map(s=>new Ft(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof t=="function"?new Ar(i,t):Ar.fromOptions(i,t)),r}typeError(e){let t=this.clone();return t.internalTests.typeError=Bt({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=be.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Bt({message:t,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,t=be.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Bt({message:t,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){const t=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=t.spec;return{meta:i,label:r,optional:s,nullable:o,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,h)=>h.findIndex(u=>u.name===l.name)===c)}}}Ce.prototype.__isYupSchema__=!0;for(const n of["validate","validateSync"])Ce.prototype[`${n}At`]=function(e,t,r={}){const{parent:i,parentPath:s,schema:o}=gb(this,e,t,r.context);return o[n](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const n of["equals","is"])Ce.prototype[n]=Ce.prototype.oneOf;for(const n of["not","nope"])Ce.prototype[n]=Ce.prototype.notOneOf;const mb=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function yb(n){const e=gs(n);if(!e)return Date.parse?Date.parse(n):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let t=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(t=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(t=0-t)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+t,e.second,e.millisecond)}function gs(n){var e,t;const r=mb.exec(n);return r?{year:Pe(r[1]),month:Pe(r[2],1)-1,day:Pe(r[3],1),hour:Pe(r[4]),minute:Pe(r[5]),second:Pe(r[6]),millisecond:r[7]?Pe(r[7].substring(0,3)):0,precision:(e=(t=r[7])==null?void 0:t.length)!=null?e:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:Pe(r[10]),minuteOffset:Pe(r[11])}:null}function Pe(n,e=0){return Number(n)||e}let vb=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Eb=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,bb=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,wb="^\\d{4}-\\d{2}-\\d{2}",Ib="\\d{2}:\\d{2}:\\d{2}",Tb="(([+-]\\d{2}(:?\\d{2})?)|Z)",Cb=new RegExp(`${wb}T${Ib}(\\.\\d+)?${Tb}$`),Sb=n=>_t(n)||n===n.trim(),Ab={}.toString();function Rb(){return new xu}class xu extends Ce{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,t,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===Ab?e:i})})}required(e){return super.required(e).withMutation(t=>t.test({message:e||be.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(t=>t.OPTIONS.name!=="required"),e))}length(e,t=re.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,t=re.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,t=re.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,t){let r=!1,i,s;return t&&(typeof t=="object"?{excludeEmptyString:r=!1,message:i,name:s}=t:i=t),this.test({name:s||"matches",message:i||re.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=re.email){return this.matches(vb,{name:"email",message:e,excludeEmptyString:!0})}url(e=re.url){return this.matches(Eb,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=re.uuid){return this.matches(bb,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let t="",r,i;return e&&(typeof e=="object"?{message:t="",allowOffset:r=!1,precision:i=void 0}=e:t=e),this.matches(Cb,{name:"datetime",message:t||re.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:t||re.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:s=>{if(!s||r)return!0;const o=gs(s);return o?!!o.z:!1}}).test({name:"datetime_precision",message:t||re.datetime_precision,params:{precision:i},skipAbsent:!0,test:s=>{if(!s||i==null)return!0;const o=gs(s);return o?o.precision===i:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=re.trim){return this.transform(t=>t!=null?t.trim():t).test({message:e,name:"trim",test:Sb})}lowercase(e=re.lowercase){return this.transform(t=>_t(t)?t:t.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>_t(t)||t===t.toLowerCase()})}uppercase(e=re.uppercase){return this.transform(t=>_t(t)?t:t.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>_t(t)||t===t.toUpperCase()})}}Rb.prototype=xu.prototype;let Ob=new Date(""),kb=n=>Object.prototype.toString.call(n)==="[object Date]";class di extends Ce{constructor(){super({type:"date",check(e){return kb(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,t,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=yb(e),isNaN(e)?di.INVALID_DATE:new Date(e)))})}prepareParam(e,t){let r;if(Ft.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,t=ps.min){let r=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,t=ps.max){let r=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}di.INVALID_DATE=Ob;di.prototype;function Nb(n,e=[]){let t=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=Et.split(o)[0];r.add(l),i.has(`${a}-${l}`)||t.push([a,l])}for(const o of Object.keys(n)){let a=n[o];r.add(o),Ft.isRef(a)&&a.isSibling?s(a.path,o):co(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return ib.array(Array.from(r),t).reverse()}function hl(n,e){let t=1/0;return n.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return t=i,!0}),t}function Du(n){return(e,t)=>hl(n,e)-hl(n,t)}const Pb=(n,e,t)=>{if(typeof n!="string")return n;let r=n;try{r=JSON.parse(n)}catch{}return t.isType(r)?r:n};function fr(n){if("fields"in n){const e={};for(const[t,r]of Object.entries(n.fields))e[t]=fr(r);return n.setFields(e)}if(n.type==="array"){const e=n.optional();return e.innerType&&(e.innerType=fr(e.innerType)),e}return n.type==="tuple"?n.optional().clone({types:n.spec.types.map(fr)}):"optional"in n?n.optional():n}const xb=(n,e)=>{const t=[...Et.normalizePath(e)];if(t.length===1)return t[0]in n;let r=t.pop(),i=Et.getter(Et.join(t),!0)(n);return!!(i&&r in i)};let dl=n=>Object.prototype.toString.call(n)==="[object Object]";function Db(n,e){let t=Object.keys(n.fields);return Object.keys(e).filter(r=>t.indexOf(r)===-1)}const Mb=Du([]);function Lb(n){return new Mu(n)}class Mu extends Ce{constructor(e){super({type:"object",check(t){return dl(t)||typeof t=="function"}}),this.fields=Object.create(null),this._sortErrors=Mb,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,t={}){var r;let i=super._cast(e,t);if(i===void 0)return this.getDefault(t);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=t.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(u=>!this._nodes.includes(u))),l={},c=Object.assign({},t,{parent:l,__validating:t.__validating||!1}),h=!1;for(const u of a){let d=s[u],p=u in i;if(d){let g,v=i[u];c.path=(t.path?`${t.path}.`:"")+u,d=d.resolve({value:v,context:t.context,parent:l});let T=d instanceof Ce?d.spec:void 0,k=T==null?void 0:T.strict;if(T!=null&&T.strip){h=h||u in i;continue}g=!t.__validating||!k?d.cast(i[u],c):i[u],g!==void 0&&(l[u]=g)}else p&&!o&&(l[u]=i[u]);(p!==u in l||l[u]!==i[u])&&(h=!0)}return h?l:i}_validate(e,t={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=t;t.from=[{schema:this,value:o},...s],t.__validating=!0,t.originalValue=o,super._validate(e,t,r,(l,c)=>{if(!a||!dl(c)){i(l,c);return}o=o||c;let h=[];for(let u of this._nodes){let d=this.fields[u];!d||Ft.isRef(d)||h.push(d.asNestedTest({options:t,key:u,parent:c,parentPath:t.path,originalParent:o}))}this.runTests({tests:h,value:c,originalValue:o,options:t},r,u=>{i(u.sort(this._sortErrors).concat(l),c)})})}clone(e){const t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),r=t.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return t.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),t[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),t}setFields(e,t){let r=this.clone();return r.fields=e,r._nodes=Nb(e,t),r._sortErrors=Du(Object.keys(e)),t&&(r._excludedEdges=t),r}shape(e,t=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),i=[...r._excludedEdges,...t]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[t,r]of Object.entries(this.fields))e[t]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return fr(this)}pick(e){const t={};for(const r of e)this.fields[r]&&(t[r]=this.fields[r]);return this.setFields(t,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const t=[];for(const r of Object.keys(this.fields))e.includes(r)||t.push(r);return this.pick(t)}from(e,t,r){let i=Et.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return xb(s,e)&&(o=Object.assign({},s),r||delete o[e],o[t]=i(s)),o})}json(){return this.transform(Pb)}noUnknown(e=!0,t=_s.noUnknown){typeof e!="boolean"&&(t=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:t,test(i){if(i==null)return!0;const s=Db(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,t=_s.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform(t=>{if(!t)return t;const r={};for(const i of Object.keys(t))r[e(i)]=t[i];return r})}camelCase(){return this.transformKeys(Bi.camelCase)}snakeCase(){return this.transformKeys(Bi.snakeCase)}constantCase(){return this.transformKeys(e=>Bi.snakeCase(e).toUpperCase())}describe(e){const t=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(t.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}Lb.prototype=Mu.prototype;const c0=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,u0={MIN_NAME:"Name must contain at least 3 characters",MAX_NAME:"Too Long!",REQUIRED_NAME:"Name required",INVALID_EMAIL:"Invalid email",REQUIRED_EMAIL:"Email required",MIN_PHONE:"This is an ERROR phone number (Ukrainian format)",REQUIRED_PHONE:"Enter the phone number in Ukrainian format",MIN_PASSWORD:"Password must contain at least 6 characters",REQUIRED_PASSWORD:"Password required"};var Fb="firebase",$b="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(Fb,$b,"app");var fl={};const pl="@firebase/database",_l="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu="";function Ub(n){Lu=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),H(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Rn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ae(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jb(e)}}catch{}return new Vb},gt=Fu("localStorage"),ms=Fu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Ms("@firebase/database"),Bb=function(){let n=1;return function(){return n++}}(),$u=function(n){const e=Jd(n),t=new qd;t.update(e);const r=t.digest();return Ns.encodeByteArray(r)},Yn=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Yn.apply(null,r):typeof r=="object"?e+=H(r):e+=r,e+=" "}return e};let bt=null,gl=!0;const Wb=function(n,e){_(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Qt.logLevel=M.VERBOSE,bt=Qt.log.bind(Qt),e&&ms.set("logging_enabled",!0)):typeof n=="function"?bt=n:(bt=null,ms.remove("logging_enabled"))},X=function(...n){if(gl===!0&&(gl=!1,bt===null&&ms.get("logging_enabled")===!0&&Wb(!0)),bt){const e=Yn.apply(null,n);bt(e)}},Qn=function(n){return function(...e){X(n,...e)}},ys=function(...n){const e="FIREBASE INTERNAL ERROR: "+Yn(...n);Qt.error(e)},je=function(...n){const e=`FIREBASE FATAL ERROR: ${Yn(...n)}`;throw Qt.error(e),new Error(e)},oe=function(...n){const e="FIREBASE WARNING: "+Yn(...n);Qt.warn(e)},Hb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uo=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},zb=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Rt="[MIN_NAME]",tt="[MAX_NAME]",un=function(n,e){if(n===e)return 0;if(n===Rt||e===tt)return-1;if(e===Rt||n===tt)return 1;{const t=ml(n),r=ml(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},Gb=function(n,e){return n===e?0:n<e?-1:1},_n=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+H(e))},ho=function(n){if(typeof n!="object"||n===null)return H(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=H(e[r]),t+=":",t+=ho(n[e[r]]);return t+="}",t},Uu=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function ae(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ju=function(n){_(!uo(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,a,l;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},qb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Kb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Yb(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const Qb=new RegExp("^-?(0*)\\d{1,10}$"),Jb=-2147483648,Xb=2147483647,ml=function(n){if(Qb.test(n)){const e=Number(n);if(e>=Jb&&e<=Xb)return e}return null},hn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw oe("Exception was thrown by user callback.",t),e},Math.floor(0))}},Zb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Tn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(X("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',oe(e)}}class Jt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Jt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="5",Vu="v",Bu="s",Wu="r",Hu="f",zu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gu="ls",qu="p",vs="ac",Ku="websocket",Yu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,r,i,s=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function nw(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ju(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let r;if(e===Ku)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Yu)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nw(n)&&(t.ns=n.namespace);const i=[];return ae(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.counters_={}}incrementCounter(e,t=1){Ae(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return kd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi={},Hi={};function po(n){const e=n.toString();return Wi[e]||(Wi[e]=new rw),Wi[e]}function iw(n,e){const t=n.toString();return Hi[t]||(Hi[t]=e()),Hi[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&hn(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="start",ow="close",aw="pLPCommand",lw="pRTLPCB",Xu="id",Zu="pw",eh="ser",cw="cb",uw="seg",hw="ts",dw="d",fw="dframe",th=1870,nh=30,pw=th-nh,_w=25e3,gw=3e4;class Gt{constructor(e,t,r,i,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qn(e),this.stats_=po(t),this.urlFn=l=>(this.appCheckToken&&(l[vs]=this.appCheckToken),Ju(t,Yu,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new sw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gw)),zb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _o((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===yl)this.id=a,this.password=l;else if(o===ow)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[yl]="t",r[eh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[cw]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Vu]=fo,this.transportSessionId&&(r[Bu]=this.transportSessionId),this.lastSessionId&&(r[Gu]=this.lastSessionId),this.applicationId&&(r[qu]=this.applicationId),this.appCheckToken&&(r[vs]=this.appCheckToken),typeof location<"u"&&location.hostname&&zu.test(location.hostname)&&(r[Wu]=Hu);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gt.forceAllow_=!0}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){return Gt.forceAllow_?!0:!Gt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qb()&&!Kb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=H(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=ec(t),i=Uu(r,pw);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[fw]="t",r[Xu]=e,r[Zu]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=H(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class _o{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Bb(),window[aw+this.uniqueCallbackIdentifier]=e,window[lw+this.uniqueCallbackIdentifier]=t,this.myIFrame=_o.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){X("frame writing exception"),a.stack&&X(a.stack),X(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||X("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xu]=this.myID,e[Zu]=this.myPW,e[eh]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nh+r.length<=th;){const o=this.pendingSegs.shift();r=r+"&"+uw+i+"="+o.seg+"&"+hw+i+"="+o.ts+"&"+dw+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(_w)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{X("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=16384,yw=45e3;let Or=null;typeof MozWebSocket<"u"?Or=MozWebSocket:typeof WebSocket<"u"&&(Or=WebSocket);class _e{constructor(e,t,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qn(this.connId),this.stats_=po(t),this.connURL=_e.connectionURL_(t,o,a,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[Vu]=fo,typeof location<"u"&&location.hostname&&zu.test(location.hostname)&&(o[Wu]=Hu),t&&(o[Bu]=t),r&&(o[Gu]=r),i&&(o[vs]=i),s&&(o[qu]=s),Ju(e,Ku,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gt.set("previous_websocket_failure",!0);try{let r;oc(),this.mySock=new Or(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Or!==null&&!_e.forceDisallow_}static previouslyFailed(){return gt.isInMemoryStorage||gt.get("previous_websocket_failure")===!0}markConnectionHealthy(){gt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Rn(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=H(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Uu(t,mw);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yw))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_e.responsesRequiredToBeHealthy=2;_e.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gt,_e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=_e&&_e.isAvailable();let r=t&&!_e.previouslyFailed();if(e.webSocketOnly&&(t||oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_e];else{const i=this.transports_=[];for(const s of Mn.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Mn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=6e4,Ew=5e3,bw=10*1024,ww=100*1024,zi="t",vl="d",Iw="s",El="r",Tw="e",bl="o",wl="a",Il="n",Tl="p",Cw="h";class Sw{constructor(e,t,r,i,s,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qn("c:"+this.id+":"),this.transportManager_=new Mn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Tn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ww?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zi in e){const t=e[zi];t===wl?this.upgradeIfSecondaryHealthy_():t===El?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===bl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=_n("t",e),r=_n("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Tl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Il,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=_n("t",e),r=_n("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=_n(zi,e);if(vl in e){const r=e[vl];if(t===Cw){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Il){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Iw?this.onConnectionShutdown_(r):t===El?this.onReset_(r):t===Tw?ys("Server Error: "+r):t===bl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ys("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),fo!==r&&oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Tn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ew))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Tl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends ih{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new kr}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=32,Sl=768;class L{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function P(){return new L("")}function S(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function nt(n){return n.pieces_.length-n.pieceNum_}function $(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new L(n.pieces_,e)}function sh(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Aw(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function oh(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ah(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new L(e,0)}function z(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof L)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new L(t,0)}function A(n){return n.pieceNum_>=n.pieces_.length}function ee(n,e){const t=S(n),r=S(e);if(t===null)return e;if(t===r)return ee($(n),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function go(n,e){if(nt(n)!==nt(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function ge(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(nt(n)>nt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class Rw{constructor(e,t){this.errorPrefix_=t,this.parts_=oh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Hr(this.parts_[r]);lh(this)}}function Ow(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Hr(e),lh(n)}function kw(n){const e=n.parts_.pop();n.byteLength_-=Hr(e),n.parts_.length>0&&(n.byteLength_-=1)}function lh(n){if(n.byteLength_>Sl)throw new Error(n.errorPrefix_+"has a key path longer than "+Sl+" bytes ("+n.byteLength_+").");if(n.parts_.length>Cl)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cl+") or object contains a cycle "+pt(n))}function pt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends ih{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new mo}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=1e3,Nw=60*5*1e3,Al=30*1e3,Pw=1.3,xw=3e4,Dw="server_kill",Rl=3;class $e extends rh{constructor(e,t,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$e.nextPersistentConnectionId_++,this.log_=Qn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gn,this.maxReconnectDelay_=Nw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!oc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");mo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(H(s)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new Wr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;$e.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ae(e,"w")){const r=Xt(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Al)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=zd(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+H(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ys("Unrecognized action received from server: "+H(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xw&&(this.reconnectDelay_=gn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$e.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?X("getToken() completed but was canceled"):(X("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Sw(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,p=>{oe(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dw)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&oe(u),l())}}}interrupt(e){X("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){X("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qi(this.interruptReasons_)&&(this.reconnectDelay_=gn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>ho(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new L(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){X("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rl&&(this.reconnectDelay_=Al,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){X("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Lu.replace(/\./g,"-")]=1,xs()?e["framework.cordova"]=1:sc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kr.getInstance().currentlyOnline();return Qi(this.interruptReasons_)&&e}}$e.nextPersistentConnectionId_=0;$e.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new R(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new R(Rt,e),i=new R(Rt,t);return this.compare(r,i)!==0}minPost(){return R.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ar;class ch extends fi{static get __EMPTY_NODE(){return ar}static set __EMPTY_NODE(e){ar=e}compare(e,t){return un(e.name,t.name)}isDefinedOn(e){throw sn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return R.MIN}maxPost(){return new R(tt,ar)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new R(e,ar)}toString(){return".key"}}const wt=new ch;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Y{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Y.RED,this.left=i??se.EMPTY_NODE,this.right=s??se.EMPTY_NODE}copy(e,t,r,i,s){return new Y(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return se.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return se.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Y.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Y.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Y.RED=!0;Y.BLACK=!1;class Mw{copy(e,t,r,i,s){return this}insert(e,t,r){return new Y(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class se{constructor(e,t=se.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new se(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Y.BLACK,null,null))}remove(e){return new se(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Y.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new lr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new lr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new lr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new lr(this.root_,null,this.comparator_,!0,e)}}se.EMPTY_NODE=new Mw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(n,e){return un(n.name,e.name)}function yo(n,e){return un(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;function Fw(n){Es=n}const uh=function(n){return typeof n=="number"?"number:"+ju(n):"string:"+n},hh=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ae(e,".sv"),"Priority must be a string or number.")}else _(n===Es||n.isEmpty(),"priority of unexpected type.");_(n===Es||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;class K{constructor(e,t=K.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hh(this.priorityNode_)}static set __childrenNodeConstructor(e){Ol=e}static get __childrenNodeConstructor(){return Ol}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new K(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:K.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return A(e)?this:S(e)===".priority"?this.priorityNode_:K.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:K.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=S(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(_(r!==".priority"||nt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,K.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uh(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ju(this.value_):e+=this.value_,this.lazyHash_=$u(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===K.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof K.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=K.VALUE_TYPE_ORDER.indexOf(t),s=K.VALUE_TYPE_ORDER.indexOf(r);return _(i>=0,"Unknown leaf type: "+t),_(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}K.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh,fh;function $w(n){dh=n}function Uw(n){fh=n}class jw extends fi{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?un(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return R.MIN}maxPost(){return new R(tt,new K("[PRIORITY-POST]",fh))}makePost(e,t){const r=dh(e);return new R(t,new K("[PRIORITY-POST]",r))}toString(){return".priority"}}const B=new jw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=Math.log(2);class Bw{constructor(e){const t=s=>parseInt(Math.log(s)/Vw,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Nr=function(n,e,t,r){n.sort(e);const i=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new Y(d,u.node,Y.BLACK,null,null);{const p=parseInt(h/2,10)+l,g=i(l,p),v=i(p+1,c);return u=n[p],d=t?t(u):u,new Y(d,u.node,Y.BLACK,g,v)}},s=function(l){let c=null,h=null,u=n.length;const d=function(g,v){const T=u-g,k=u;u-=g;const V=i(T+1,k),ue=n[T],Ee=t?t(ue):ue;p(new Y(Ee,ue.node,v,null,V))},p=function(g){c?(c.left=g,c=g):(h=g,c=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),T=Math.pow(2,l.count-(g+1));v?d(T,Y.BLACK):(d(T,Y.BLACK),d(T,Y.RED))}return h},o=new Bw(n.length),a=s(o);return new se(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi;const Wt={};class Le{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return _(Wt&&B,"ChildrenNode.ts has not been loaded"),Gi=Gi||new Le({".priority":Wt},{".priority":B}),Gi}get(e){const t=Xt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof se?t:null}hasIndex(e){return Ae(this.indexSet_,e.toString())}addIndex(e,t){_(e!==wt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(R.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Nr(r,e.getCompare()):a=Wt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Le(h,c)}addToIndexes(e,t){const r=yr(this.indexes_,(i,s)=>{const o=Xt(this.indexSet_,s);if(_(o,"Missing index implementation for "+s),i===Wt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(R.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Nr(a,o.getCompare())}else return Wt;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new R(e.name,a))),l.insert(e,e.node)}});return new Le(r,this.indexSet_)}removeFromIndexes(e,t){const r=yr(this.indexes_,i=>{if(i===Wt)return i;{const s=t.get(e.name);return s?i.remove(new R(e.name,s)):i}});return new Le(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn;class w{constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&hh(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mn||(mn=new w(new se(yo),null,Le.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mn}updatePriority(e){return this.children_.isEmpty()?this:new w(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?mn:t}}getChild(e){const t=S(e);return t===null?this:this.getImmediateChild(t).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new R(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?mn:this.priorityNode_;return new w(i,o,s)}}updateChild(e,t){const r=S(e);if(r===null)return t;{_(S(e)!==".priority"||nt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild($(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(B,(o,a)=>{t[o]=a.val(e),r++,s&&w.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uh(this.getPriority().val())+":"),this.forEachChild(B,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":$u(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new R(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new R(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new R(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,R.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,R.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jn?-1:0}withIndex(e){if(e===wt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new w(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===wt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(B),i=t.getIterator(B);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wt?null:this.indexMap_.get(e.toString())}}w.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ww extends w{constructor(){super(new se(yo),w.EMPTY_NODE,Le.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return w.EMPTY_NODE}isEmpty(){return!1}}const Jn=new Ww;Object.defineProperties(R,{MIN:{value:new R(Rt,w.EMPTY_NODE)},MAX:{value:new R(tt,Jn)}});ch.__EMPTY_NODE=w.EMPTY_NODE;K.__childrenNodeConstructor=w;Fw(Jn);Uw(Jn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=!0;function Q(n,e=null){if(n===null)return w.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new K(t,Q(e))}if(!(n instanceof Array)&&Hw){const t=[];let r=!1;if(ae(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Q(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new R(o,l)))}}),t.length===0)return w.EMPTY_NODE;const s=Nr(t,Lw,o=>o.name,yo);if(r){const o=Nr(t,B.getCompare());return new w(s,Q(e),new Le({".priority":o},{".priority":B}))}else return new w(s,Q(e),Le.Default)}else{let t=w.EMPTY_NODE;return ae(n,(r,i)=>{if(Ae(n,r)&&r.substring(0,1)!=="."){const s=Q(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(Q(e))}}$w(Q);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends fi{constructor(e){super(),this.indexPath_=e,_(!A(e)&&S(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?un(e.name,t.name):s}makePost(e,t){const r=Q(e),i=w.EMPTY_NODE.updateChild(this.indexPath_,r);return new R(t,i)}maxPost(){const e=w.EMPTY_NODE.updateChild(this.indexPath_,Jn);return new R(tt,e)}toString(){return oh(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw extends fi{compare(e,t){const r=e.node.compareTo(t.node);return r===0?un(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return R.MIN}maxPost(){return R.MAX}makePost(e,t){const r=Q(e);return new R(t,r)}toString(){return".value"}}const ph=new zw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n){return{type:"value",snapshotNode:n}}function tn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ln(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Fn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Gw(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.index_=e}updateChild(e,t,r,i,s,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(Ln(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(tn(t,r)):o.trackChildChange(Fn(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(B,(i,s)=>{t.hasChild(i)||r.trackChildChange(Ln(i,s))}),t.isLeafNode()||t.forEachChild(B,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Fn(i,s,o))}else r.trackChildChange(tn(i,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?w.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.indexedFilter_=new Eo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$n.getStartPost_(e),this.endPost_=$n.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,s,o){return this.matches(new R(t,r))||(r=w.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,s,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=w.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(w.EMPTY_NODE);const s=this;return t.forEachChild(B,(o,a)=>{s.matches(new R(o,a))||(i=i.updateImmediateChild(o,w.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new $n(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,s,o){return this.rangedFilter_.matches(new R(t,r))||(r=w.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,s,o):this.fullLimitUpdateChild_(e,t,r,s,o)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=w.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=w.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(w.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,w.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,p)=>u(p,d)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new R(t,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(h&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Fn(t,r,u)),a.updateImmediateChild(t,r);{s!=null&&s.trackChildChange(Ln(t,u));const v=a.updateImmediateChild(t,w.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(tn(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Ln(c.name,c.node)),s.trackChildChange(tn(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(c.name,w.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=B}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rt}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===B}copy(){const e=new bo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Kw(n){return n.loadsAllData()?new Eo(n.getIndex()):n.hasLimit()?new qw(n):new $n(n)}function Yw(n,e){const t=n.copy();return t.index_=e,t}function kl(n){const e={};if(n.isDefault())return e;let t;if(n.index_===B?t="$priority":n.index_===ph?t="$value":n.index_===wt?t="$key":(_(n.index_ instanceof vo,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=H(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=H(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+H(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=H(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+H(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Nl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==B&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends rh{constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Qn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Pr.getListenId_(e,r),a={};this.listens_[o]=a;const l=kl(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),Xt(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const r=Pr.getListenId_(e,t);delete this.listens_[r]}get(e){const t=kl(e._queryParams),r=e._path.toString(),i=new Wr;return this.restRequest_(r+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+on(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Rn(a.responseText)}catch{oe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&oe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.rootNode_=w.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(){return{value:null,children:new Map}}function gh(n,e,t){if(A(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=S(e);n.children.has(r)||n.children.set(r,xr());const i=n.children.get(r);e=$(e),gh(i,e,t)}}function bs(n,e,t){n.value!==null?t(e,n.value):Jw(n,(r,i)=>{const s=new L(e.toString()+"/"+r);bs(i,s,t)})}function Jw(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ae(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=10*1e3,Zw=30*1e3,eI=5*60*1e3;class tI{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Xw(e);const r=Pl+(Zw-Pl)*Math.random();Tn(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;ae(e,(i,s)=>{s>0&&Ae(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),Tn(this.reportStats_.bind(this),Math.floor(Math.random()*2*eI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(me||(me={}));function mh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Io(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=me.ACK_USER_WRITE,this.source=mh()}operationForChild(e){if(A(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new L(e));return new Dr(P(),t,this.revert)}}else return _(S(this.path)===e,"operationForChild called for unrelated child."),new Dr($(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t){this.source=e,this.path=t,this.type=me.LISTEN_COMPLETE}operationForChild(e){return A(this.path)?new Un(this.source,P()):new Un(this.source,$(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=me.OVERWRITE}operationForChild(e){return A(this.path)?new Ot(this.source,P(),this.snap.getImmediateChild(e)):new Ot(this.source,$(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=me.MERGE}operationForChild(e){if(A(this.path)){const t=this.children.subtree(new L(e));return t.isEmpty()?null:t.value?new Ot(this.source,P(),t.value):new jn(this.source,P(),t)}else return _(S(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jn(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(A(e))return this.isFullyInitialized()&&!this.filtered_;const t=S(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rI(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Gw(o.childName,o.snapshotNode))}),yn(n,i,"child_removed",e,r,t),yn(n,i,"child_added",e,r,t),yn(n,i,"child_moved",s,r,t),yn(n,i,"child_changed",e,r,t),yn(n,i,"value",e,r,t),i}function yn(n,e,t,r,i,s){const o=r.filter(a=>a.type===t);o.sort((a,l)=>sI(n,a,l)),o.forEach(a=>{const l=iI(n,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function iI(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function sI(n,e,t){if(e.childName==null||t.childName==null)throw sn("Should only compare child_ events.");const r=new R(e.childName,e.snapshotNode),i=new R(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n,e){return{eventCache:n,serverCache:e}}function Cn(n,e,t,r){return pi(new rt(e,t,r),n.serverCache)}function yh(n,e,t,r){return pi(n.eventCache,new rt(e,t,r))}function Mr(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function kt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi;const oI=()=>(qi||(qi=new se(Gb)),qi);class j{constructor(e,t=oI()){this.value=e,this.children=t}static fromObject(e){let t=new j(null);return ae(e,(r,i)=>{t=t.set(new L(r),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:P(),value:this.value};if(A(e))return null;{const r=S(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue($(e),t);return s!=null?{path:z(new L(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(A(e))return this;{const t=S(e),r=this.children.get(t);return r!==null?r.subtree($(e)):new j(null)}}set(e,t){if(A(e))return new j(t,this.children);{const r=S(e),s=(this.children.get(r)||new j(null)).set($(e),t),o=this.children.insert(r,s);return new j(this.value,o)}}remove(e){if(A(e))return this.children.isEmpty()?new j(null):new j(null,this.children);{const t=S(e),r=this.children.get(t);if(r){const i=r.remove($(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new j(null):new j(this.value,s)}else return this}}get(e){if(A(e))return this.value;{const t=S(e),r=this.children.get(t);return r?r.get($(e)):null}}setTree(e,t){if(A(e))return t;{const r=S(e),s=(this.children.get(r)||new j(null)).setTree($(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new j(this.value,o)}}fold(e){return this.fold_(P(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(z(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,P(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(A(e))return null;{const s=S(e),o=this.children.get(s);return o?o.findOnPath_($(e),z(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,P(),t)}foreachOnPath_(e,t,r){if(A(e))return this;{this.value&&r(t,this.value);const i=S(e),s=this.children.get(i);return s?s.foreachOnPath_($(e),z(t,i),r):new j(null)}}foreach(e){this.foreach_(P(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(z(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.writeTree_=e}static empty(){return new ye(new j(null))}}function Sn(n,e,t){if(A(e))return new ye(new j(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ee(i,e);return s=s.updateChild(o,t),new ye(n.writeTree_.set(i,s))}else{const i=new j(t),s=n.writeTree_.setTree(e,i);return new ye(s)}}}function xl(n,e,t){let r=n;return ae(t,(i,s)=>{r=Sn(r,z(e,i),s)}),r}function Dl(n,e){if(A(e))return ye.empty();{const t=n.writeTree_.setTree(e,new j(null));return new ye(t)}}function ws(n,e){return $t(n,e)!=null}function $t(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ee(t.path,e)):null}function Ml(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(B,(r,i)=>{e.push(new R(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new R(r,i.value))}),e}function Xe(n,e){if(A(e))return n;{const t=$t(n,e);return t!=null?new ye(new j(t)):new ye(n.writeTree_.subtree(e))}}function Is(n){return n.writeTree_.isEmpty()}function nn(n,e){return vh(P(),n.writeTree_,e)}function vh(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(_(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=vh(z(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(z(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e){return Ih(e,n)}function aI(n,e,t,r,i){_(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=Sn(n.visibleWrites,e,t)),n.lastWriteId=r}function lI(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function cI(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&uI(a,r.path)?i=!1:ge(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return hI(n),!0;if(r.snap)n.visibleWrites=Dl(n.visibleWrites,r.path);else{const a=r.children;ae(a,l=>{n.visibleWrites=Dl(n.visibleWrites,z(r.path,l))})}return!0}else return!1}function uI(n,e){if(n.snap)return ge(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ge(z(n.path,t),e))return!0;return!1}function hI(n){n.visibleWrites=Eh(n.allWrites,dI,P()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function dI(n){return n.visible}function Eh(n,e,t){let r=ye.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let a;if(s.snap)ge(t,o)?(a=ee(t,o),r=Sn(r,a,s.snap)):ge(o,t)&&(a=ee(o,t),r=Sn(r,P(),s.snap.getChild(a)));else if(s.children){if(ge(t,o))a=ee(t,o),r=xl(r,a,s.children);else if(ge(o,t))if(a=ee(o,t),A(a))r=xl(r,P(),s.children);else{const l=Xt(s.children,S(a));if(l){const c=l.getChild($(a));r=Sn(r,P(),c)}}}else throw sn("WriteRecord should have .snap or .children")}}return r}function bh(n,e,t,r,i){if(!r&&!i){const s=$t(n.visibleWrites,e);if(s!=null)return s;{const o=Xe(n.visibleWrites,e);if(Is(o))return t;if(t==null&&!ws(o,P()))return null;{const a=t||w.EMPTY_NODE;return nn(o,a)}}}else{const s=Xe(n.visibleWrites,e);if(!i&&Is(s))return t;if(!i&&t==null&&!ws(s,P()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(ge(c.path,e)||ge(e,c.path))},a=Eh(n.allWrites,o,e),l=t||w.EMPTY_NODE;return nn(a,l)}}}function fI(n,e,t){let r=w.EMPTY_NODE;const i=$t(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(B,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=Xe(n.visibleWrites,e);return t.forEachChild(B,(o,a)=>{const l=nn(Xe(s,new L(o)),a);r=r.updateImmediateChild(o,l)}),Ml(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Xe(n.visibleWrites,e);return Ml(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function pI(n,e,t,r,i){_(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=z(e,t);if(ws(n.visibleWrites,s))return null;{const o=Xe(n.visibleWrites,s);return Is(o)?i.getChild(t):nn(o,i.getChild(t))}}function _I(n,e,t,r){const i=z(e,t),s=$t(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=Xe(n.visibleWrites,i);return nn(o,r.getNode().getImmediateChild(t))}else return null}function gI(n,e){return $t(n.visibleWrites,e)}function mI(n,e,t,r,i,s,o){let a;const l=Xe(n.visibleWrites,e),c=$t(l,P());if(c!=null)a=c;else if(t!=null)a=nn(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=d.getNext();for(;p&&h.length<i;)u(p,r)!==0&&h.push(p),p=d.getNext();return h}else return[]}function yI(){return{visibleWrites:ye.empty(),allWrites:[],lastWriteId:-1}}function Lr(n,e,t,r){return bh(n.writeTree,n.treePath,e,t,r)}function To(n,e){return fI(n.writeTree,n.treePath,e)}function Ll(n,e,t,r){return pI(n.writeTree,n.treePath,e,t,r)}function Fr(n,e){return gI(n.writeTree,z(n.treePath,e))}function vI(n,e,t,r,i,s){return mI(n.writeTree,n.treePath,e,t,r,i,s)}function Co(n,e,t){return _I(n.writeTree,n.treePath,e,t)}function wh(n,e){return Ih(z(n.treePath,e),n.writeTree)}function Ih(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,Fn(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ln(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,tn(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,Fn(r,e.snapshotNode,i.oldSnap));else throw sn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const Th=new bI;class So{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new rt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Co(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kt(this.viewCache_),s=vI(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(n){return{filter:n}}function II(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function TI(n,e,t,r,i){const s=new EI;let o,a;if(t.type===me.OVERWRITE){const c=t;c.source.fromUser?o=Ts(n,e,c.path,c.snap,r,i,s):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!A(c.path),o=$r(n,e,c.path,c.snap,r,i,a,s))}else if(t.type===me.MERGE){const c=t;c.source.fromUser?o=SI(n,e,c.path,c.children,r,i,s):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Cs(n,e,c.path,c.children,r,i,a,s))}else if(t.type===me.ACK_USER_WRITE){const c=t;c.revert?o=OI(n,e,c.path,r,i,s):o=AI(n,e,c.path,c.affectedTree,r,i,s)}else if(t.type===me.LISTEN_COMPLETE)o=RI(n,e,t.path,r,s);else throw sn("Unknown operation type: "+t.type);const l=s.getChanges();return CI(e,o,l),{viewCache:o,changes:l}}function CI(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Mr(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(_h(Mr(e)))}}function Ch(n,e,t,r,i,s){const o=e.eventCache;if(Fr(r,t)!=null)return e;{let a,l;if(A(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=kt(e),h=c instanceof w?c:w.EMPTY_NODE,u=To(r,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=Lr(r,kt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=S(t);if(c===".priority"){_(nt(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Ll(r,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=$(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ll(r,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Co(r,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,i,s):a=o.getNode()}}return Cn(e,a,o.isFullyInitialized()||A(t),n.filter.filtersNodes())}}function $r(n,e,t,r,i,s,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(A(t))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,r);c=h.updateFullNode(l.getNode(),p,null)}else{const p=S(t);if(!l.isCompleteForPath(t)&&nt(t)>1)return e;const g=$(t),T=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?c=h.updatePriority(l.getNode(),T):c=h.updateChild(l.getNode(),p,T,g,Th,null)}const u=yh(e,c,l.isFullyInitialized()||A(t),h.filtersNodes()),d=new So(i,u,s);return Ch(n,u,t,i,d,a)}function Ts(n,e,t,r,i,s,o){const a=e.eventCache;let l,c;const h=new So(i,e,s);if(A(t))c=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Cn(e,c,!0,n.filter.filtersNodes());else{const u=S(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),r),l=Cn(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=$(t),p=a.getNode().getImmediateChild(u);let g;if(A(d))g=r;else{const v=h.getCompleteChild(u);v!=null?sh(d)===".priority"&&v.getChild(ah(d)).isEmpty()?g=v:g=v.updateChild(d,r):g=w.EMPTY_NODE}if(p.equals(g))l=e;else{const v=n.filter.updateChild(a.getNode(),u,g,d,h,o);l=Cn(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Fl(n,e){return n.eventCache.isCompleteForChild(e)}function SI(n,e,t,r,i,s,o){let a=e;return r.foreach((l,c)=>{const h=z(t,l);Fl(e,S(h))&&(a=Ts(n,a,h,c,i,s,o))}),r.foreach((l,c)=>{const h=z(t,l);Fl(e,S(h))||(a=Ts(n,a,h,c,i,s,o))}),a}function $l(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Cs(n,e,t,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;A(t)?c=r:c=new j(null).setTree(t,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),g=$l(n,p,d);l=$r(n,l,new L(u),g,i,s,o,a)}}),c.children.inorderTraversal((u,d)=>{const p=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!p){const g=e.serverCache.getNode().getImmediateChild(u),v=$l(n,g,d);l=$r(n,l,new L(u),v,i,s,o,a)}}),l}function AI(n,e,t,r,i,s,o){if(Fr(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(A(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return $r(n,e,t,l.getNode().getChild(t),i,s,a,o);if(A(t)){let c=new j(null);return l.getNode().forEachChild(wt,(h,u)=>{c=c.set(new L(h),u)}),Cs(n,e,t,c,i,s,a,o)}else return e}else{let c=new j(null);return r.foreach((h,u)=>{const d=z(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Cs(n,e,t,c,i,s,a,o)}}function RI(n,e,t,r,i){const s=e.serverCache,o=yh(e,s.getNode(),s.isFullyInitialized()||A(t),s.isFiltered());return Ch(n,o,t,r,Th,i)}function OI(n,e,t,r,i,s){let o;if(Fr(r,t)!=null)return e;{const a=new So(r,e,i),l=e.eventCache.getNode();let c;if(A(t)||S(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Lr(r,kt(e));else{const u=e.serverCache.getNode();_(u instanceof w,"serverChildren would be complete if leaf node"),h=To(r,u)}h=h,c=n.filter.updateFullNode(l,h,s)}else{const h=S(t);let u=Co(r,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,$(t),a,s):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,w.EMPTY_NODE,$(t),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Lr(r,kt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Fr(r,P())!=null,Cn(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Eo(r.getIndex()),s=Kw(r);this.processor_=wI(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(w.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(w.EMPTY_NODE,a.getNode(),null),h=new rt(l,o.isFullyInitialized(),i.filtersNodes()),u=new rt(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=pi(u,h),this.eventGenerator_=new nI(this.query_)}get query(){return this.query_}}function NI(n){return n.viewCache_.serverCache.getNode()}function PI(n){return Mr(n.viewCache_)}function xI(n,e){const t=kt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!A(e)&&!t.getImmediateChild(S(e)).isEmpty())?t.getChild(e):null}function Ul(n){return n.eventRegistrations_.length===0}function DI(n,e){n.eventRegistrations_.push(e)}function jl(n,e,t){const r=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function Vl(n,e,t,r){e.type===me.MERGE&&e.source.queryId!==null&&(_(kt(n.viewCache_),"We should always have a full cache before handling merges"),_(Mr(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=TI(n.processor_,i,e,t,r);return II(n.processor_,s.viewCache),_(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,Sh(n,s.changes,s.viewCache.eventCache.getNode(),null)}function MI(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(B,(s,o)=>{r.push(tn(s,o))}),t.isFullyInitialized()&&r.push(_h(t.getNode())),Sh(n,r,t.getNode(),e)}function Sh(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return rI(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur;class Ah{constructor(){this.views=new Map}}function LI(n){_(!Ur,"__referenceConstructor has already been defined"),Ur=n}function FI(){return _(Ur,"Reference.ts has not been loaded"),Ur}function $I(n){return n.views.size===0}function Ao(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return _(s!=null,"SyncTree gave us an op for an invalid query."),Vl(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(Vl(o,e,t,r));return s}}function Rh(n,e,t,r,i){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=Lr(t,i?r:null),l=!1;a?l=!0:r instanceof w?(a=To(t,r),l=!1):(a=w.EMPTY_NODE,l=!1);const c=pi(new rt(a,l,!1),new rt(r,i,!1));return new kI(e,c)}return o}function UI(n,e,t,r,i,s){const o=Rh(n,e,r,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),DI(o,t),MI(o,t)}function jI(n,e,t,r){const i=e._queryIdentifier,s=[];let o=[];const a=it(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(jl(c,t,r)),Ul(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(jl(l,t,r)),Ul(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!it(n)&&s.push(new(FI())(e._repo,e._path)),{removed:s,events:o}}function Oh(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ze(n,e){let t=null;for(const r of n.views.values())t=t||xI(r,e);return t}function kh(n,e){if(e._queryParams.loadsAllData())return gi(n);{const r=e._queryIdentifier;return n.views.get(r)}}function Nh(n,e){return kh(n,e)!=null}function it(n){return gi(n)!=null}function gi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jr;function VI(n){_(!jr,"__referenceConstructor has already been defined"),jr=n}function BI(){return _(jr,"Reference.ts has not been loaded"),jr}let WI=1;class Bl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new j(null),this.pendingWriteTree_=yI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ph(n,e,t,r,i){return aI(n.pendingWriteTree_,e,t,r,i),i?Zn(n,new Ot(mh(),e,t)):[]}function mt(n,e,t=!1){const r=lI(n.pendingWriteTree_,e);if(cI(n.pendingWriteTree_,e)){let s=new j(null);return r.snap!=null?s=s.set(P(),!0):ae(r.children,o=>{s=s.set(new L(o),!0)}),Zn(n,new Dr(r.path,s,t))}else return[]}function Xn(n,e,t){return Zn(n,new Ot(wo(),e,t))}function HI(n,e,t){const r=j.fromObject(t);return Zn(n,new jn(wo(),e,r))}function zI(n,e){return Zn(n,new Un(wo(),e))}function GI(n,e,t){const r=Oo(n,t);if(r){const i=ko(r),s=i.path,o=i.queryId,a=ee(s,e),l=new Un(Io(o),a);return No(n,s,l)}else return[]}function Vr(n,e,t,r,i=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Nh(o,e))){const l=jI(o,e,t,r);$I(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(s,(d,p)=>it(p));if(h&&!u){const d=n.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=YI(d);for(let g=0;g<p.length;++g){const v=p[g],T=v.query,k=Lh(n,v);n.listenProvider_.startListening(An(T),Vn(n,T),k.hashFn,k.onComplete)}}}!u&&c.length>0&&!r&&(h?n.listenProvider_.stopListening(An(e),null):c.forEach(d=>{const p=n.queryToTagMap.get(mi(d));n.listenProvider_.stopListening(An(d),p)}))}QI(n,c)}return a}function xh(n,e,t,r){const i=Oo(n,r);if(i!=null){const s=ko(i),o=s.path,a=s.queryId,l=ee(o,e),c=new Ot(Io(a),l,t);return No(n,o,c)}else return[]}function qI(n,e,t,r){const i=Oo(n,r);if(i){const s=ko(i),o=s.path,a=s.queryId,l=ee(o,e),c=j.fromObject(t),h=new jn(Io(a),l,c);return No(n,o,h)}else return[]}function Ss(n,e,t,r=!1){const i=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,p)=>{const g=ee(d,i);s=s||Ze(p,g),o=o||it(p)});let a=n.syncPointTree_.get(i);a?(o=o||it(a),s=s||Ze(a,P())):(a=new Ah,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=w.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,g)=>{const v=Ze(g,P());v&&(s=s.updateImmediateChild(p,v))}));const c=Nh(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=mi(e);_(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=JI();n.queryToTagMap.set(d,p),n.tagToQueryMap.set(p,d)}const h=_i(n.pendingWriteTree_,i);let u=UI(a,e,t,h,s,l);if(!c&&!o&&!r){const d=kh(a,e);u=u.concat(XI(n,e,d))}return u}function Ro(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=ee(o,e),c=Ze(a,l);if(c)return c});return bh(i,e,s,t,!0)}function KI(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{const u=ee(c,t);r=r||Ze(h,u)});let i=n.syncPointTree_.get(t);i?r=r||Ze(i,P()):(i=new Ah,n.syncPointTree_=n.syncPointTree_.set(t,i));const s=r!=null,o=s?new rt(r,!0,!1):null,a=_i(n.pendingWriteTree_,e._path),l=Rh(i,e,a,s?o.getNode():w.EMPTY_NODE,s);return PI(l)}function Zn(n,e){return Dh(e,n.syncPointTree_,null,_i(n.pendingWriteTree_,P()))}function Dh(n,e,t,r){if(A(n.path))return Mh(n,e,t,r);{const i=e.get(P());t==null&&i!=null&&(t=Ze(i,P()));let s=[];const o=S(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=wh(r,o);s=s.concat(Dh(a,l,c,h))}return i&&(s=s.concat(Ao(i,n,r,t))),s}}function Mh(n,e,t,r){const i=e.get(P());t==null&&i!=null&&(t=Ze(i,P()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=wh(r,o),h=n.operationForChild(o);h&&(s=s.concat(Mh(h,a,l,c)))}),i&&(s=s.concat(Ao(i,n,r,t))),s}function Lh(n,e){const t=e.query,r=Vn(n,t);return{hashFn:()=>(NI(e)||w.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?GI(n,t._path,r):zI(n,t._path);{const s=Yb(i,t);return Vr(n,t,null,s)}}}}function Vn(n,e){const t=mi(e);return n.queryToTagMap.get(t)}function mi(n){return n._path.toString()+"$"+n._queryIdentifier}function Oo(n,e){return n.tagToQueryMap.get(e)}function ko(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new L(n.substr(0,e))}}function No(n,e,t){const r=n.syncPointTree_.get(e);_(r,"Missing sync point for query tag that we're tracking");const i=_i(n.pendingWriteTree_,e);return Ao(r,t,i,null)}function YI(n){return n.fold((e,t,r)=>{if(t&&it(t))return[gi(t)];{let i=[];return t&&(i=Oh(t)),ae(r,(s,o)=>{i=i.concat(o)}),i}})}function An(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(BI())(n._repo,n._path):n}function QI(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=mi(r),s=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(s)}}}function JI(){return WI++}function XI(n,e,t){const r=e._path,i=Vn(n,e),s=Lh(n,t),o=n.listenProvider_.startListening(An(e),i,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(r);if(i)_(!it(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!A(c)&&h&&it(h))return[gi(h).query];{let d=[];return h&&(d=d.concat(Oh(h).map(p=>p.query))),ae(u,(p,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(An(h),Vn(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Po(t)}node(){return this.node_}}class xo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=z(this.path_,e);return new xo(this.syncTree_,t)}node(){return Ro(this.syncTree_,this.path_)}}const ZI=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Wl=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return eT(n[".sv"],e,t);if(typeof n[".sv"]=="object")return tT(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},eT=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},tT=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&_(!1,"Unexpected increment value: "+r);const i=e.node();if(_(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},nT=function(n,e,t,r){return Do(e,new xo(t,n),r)},Fh=function(n,e,t){return Do(n,new Po(e),t)};function Do(n,e,t){const r=n.getPriority().val(),i=Wl(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=Wl(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new K(a,Q(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new K(i))),o.forEachChild(B,(a,l)=>{const c=Do(l,e.getImmediateChild(a),t);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Lo(n,e){let t=e instanceof L?e:new L(e),r=n,i=S(t);for(;i!==null;){const s=Xt(r.node.children,i)||{children:{},childCount:0};r=new Mo(i,r,s),t=$(t),i=S(t)}return r}function dn(n){return n.node.value}function $h(n,e){n.node.value=e,As(n)}function Uh(n){return n.node.childCount>0}function rT(n){return dn(n)===void 0&&!Uh(n)}function yi(n,e){ae(n.node.children,(t,r)=>{e(new Mo(t,n,r))})}function jh(n,e,t,r){t&&!r&&e(n),yi(n,i=>{jh(i,e,!0,r)}),t&&r&&e(n)}function iT(n,e,t){let r=t?n:n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function er(n){return new L(n.parent===null?n.name:er(n.parent)+"/"+n.name)}function As(n){n.parent!==null&&sT(n.parent,n.name,n)}function sT(n,e,t){const r=rT(t),i=Ae(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,As(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,As(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=/[\[\].#$\/\u0000-\u001F\u007F]/,aT=/[\[\].#$\u0000-\u001F\u007F]/,Ki=10*1024*1024,Vh=function(n){return typeof n=="string"&&n.length!==0&&!oT.test(n)},Bh=function(n){return typeof n=="string"&&n.length!==0&&!aT.test(n)},lT=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Bh(n)},Hl=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!uo(n)||n&&typeof n=="object"&&Ae(n,".sv")},cT=function(n,e,t,r){r&&e===void 0||Fo(Ds(n,"value"),e,t)},Fo=function(n,e,t){const r=t instanceof L?new Rw(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+pt(r));if(typeof e=="function")throw new Error(n+"contains a function "+pt(r)+" with contents = "+e.toString());if(uo(e))throw new Error(n+"contains "+e.toString()+" "+pt(r));if(typeof e=="string"&&e.length>Ki/3&&Hr(e)>Ki)throw new Error(n+"contains a string greater than "+Ki+" utf8 bytes "+pt(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ae(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Vh(o)))throw new Error(n+" contains an invalid key ("+o+") "+pt(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ow(r,o),Fo(n,a,r),kw(r)}),i&&s)throw new Error(n+' contains ".value" child '+pt(r)+" in addition to actual children.")}},$o=function(n,e,t,r){if(!(r&&t===void 0)&&!Bh(t))throw new Error(Ds(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},uT=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$o(n,e,t,r)},Wh=function(n,e){if(S(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},hT=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!lT(t))throw new Error(Ds(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Uo(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!go(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function Hh(n,e,t){Uo(n,t),zh(n,r=>go(r,e))}function Se(n,e,t){Uo(n,t),zh(n,r=>ge(r,e)||ge(e,r))}function zh(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(fT(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function fT(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();bt&&X("event: "+t.toString()),hn(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="repo_interrupt",_T=25;class gT{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xr(),this.transactionQueueTree_=new Mo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mT(n,e,t){if(n.stats_=po(n.repoInfo_),n.forceRestClient_||Zb())n.server_=new Pr(n.repoInfo_,(r,i,s,o)=>{zl(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Gl(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{H(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new $e(n.repoInfo_,e,(r,i,s,o)=>{zl(n,r,i,s,o)},r=>{Gl(n,r)},r=>{vT(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=iw(n.repoInfo_,()=>new tI(n.stats_,n.server_)),n.infoData_=new Qw,n.infoSyncTree_=new Bl({startListening:(r,i,s,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=Xn(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vo(n,"connected",!1),n.serverSyncTree_=new Bl({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Se(n.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function yT(n){const t=n.infoData_.getNode(new L(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function jo(n){return ZI({timestamp:yT(n)})}function zl(n,e,t,r,i){n.dataUpdateCount++;const s=new L(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const l=yr(t,c=>Q(c));o=qI(n.serverSyncTree_,s,l,i)}else{const l=Q(t);o=xh(n.serverSyncTree_,s,l,i)}else if(r){const l=yr(t,c=>Q(c));o=HI(n.serverSyncTree_,s,l)}else{const l=Q(t);o=Xn(n.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ei(n,s)),Se(n.eventQueue_,a,o)}function Gl(n,e){Vo(n,"connected",e),e===!1&&wT(n)}function vT(n,e){ae(e,(t,r)=>{Vo(n,t,r)})}function Vo(n,e,t){const r=new L("/.info/"+e),i=Q(t);n.infoData_.updateSnapshot(r,i);const s=Xn(n.infoSyncTree_,r,i);Se(n.eventQueue_,r,s)}function Gh(n){return n.nextWriteId_++}function ET(n,e,t){const r=KI(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(i=>{const s=Q(i).withIndex(e._queryParams.getIndex());Ss(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Xn(n.serverSyncTree_,e._path,s);else{const a=Vn(n.serverSyncTree_,e);o=xh(n.serverSyncTree_,e._path,s,a)}return Se(n.eventQueue_,e._path,o),Vr(n.serverSyncTree_,e,t,null,!0),s},i=>(vi(n,"get for query "+H(e)+" failed: "+i),Promise.reject(new Error(i))))}function bT(n,e,t,r,i){vi(n,"set",{path:e.toString(),value:t,priority:r});const s=jo(n),o=Q(t,r),a=Ro(n.serverSyncTree_,e),l=Fh(o,a,s),c=Gh(n),h=Ph(n.serverSyncTree_,e,l,c,!0);Uo(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,p)=>{const g=d==="ok";g||oe("set at "+e+" failed: "+d);const v=mt(n.serverSyncTree_,c,!g);Se(n.eventQueue_,e,v),CT(n,i,d,p)});const u=Jh(n,e);Ei(n,u),Se(n.eventQueue_,u,[])}function wT(n){vi(n,"onDisconnectEvents");const e=jo(n),t=xr();bs(n.onDisconnect_,P(),(i,s)=>{const o=nT(i,s,n.serverSyncTree_,e);gh(t,i,o)});let r=[];bs(t,P(),(i,s)=>{r=r.concat(Xn(n.serverSyncTree_,i,s));const o=Jh(n,i);Ei(n,o)}),n.onDisconnect_=xr(),Se(n.eventQueue_,P(),r)}function IT(n,e,t){let r;S(e._path)===".info"?r=Ss(n.infoSyncTree_,e,t):r=Ss(n.serverSyncTree_,e,t),Hh(n.eventQueue_,e._path,r)}function ql(n,e,t){let r;S(e._path)===".info"?r=Vr(n.infoSyncTree_,e,t):r=Vr(n.serverSyncTree_,e,t),Hh(n.eventQueue_,e._path,r)}function TT(n){n.persistentConnection_&&n.persistentConnection_.interrupt(pT)}function vi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),X(t,...e)}function CT(n,e,t,r){e&&hn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function qh(n,e,t){return Ro(n.serverSyncTree_,e,t)||w.EMPTY_NODE}function Bo(n,e=n.transactionQueueTree_){if(e||bi(n,e),dn(e)){const t=Yh(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&ST(n,er(e),t)}else Uh(e)&&yi(e,t=>{Bo(n,t)})}function ST(n,e,t){const r=t.map(c=>c.currentWriteId),i=qh(n,e,r);let s=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];_(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ee(e,h.path);s=s.updateChild(u,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;n.server_.put(l.toString(),a,c=>{vi(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(mt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();bi(n,Lo(n.transactionQueueTree_,e)),Bo(n,n.transactionQueueTree_),Se(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)hn(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{oe("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}Ei(n,e)}},o)}function Ei(n,e){const t=Kh(n,e),r=er(t),i=Yh(n,t);return AT(n,i,r),r}function AT(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ee(t,l.path);let h=!1,u;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,i=i.concat(mt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=_T)h=!0,u="maxretry",i=i.concat(mt(n.serverSyncTree_,l.currentWriteId,!0));else{const d=qh(n,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Fo("transaction failed: Data returned ",p,l.path);let g=Q(p);typeof p=="object"&&p!=null&&Ae(p,".priority")||(g=g.updatePriority(d.getPriority()));const T=l.currentWriteId,k=jo(n),V=Fh(g,d,k);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=V,l.currentWriteId=Gh(n),o.splice(o.indexOf(T),1),i=i.concat(Ph(n.serverSyncTree_,l.path,V,l.currentWriteId,l.applyLocally)),i=i.concat(mt(n.serverSyncTree_,T,!0))}else h=!0,u="nodata",i=i.concat(mt(n.serverSyncTree_,l.currentWriteId,!0))}Se(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}bi(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)hn(r[a]);Bo(n,n.transactionQueueTree_)}function Kh(n,e){let t,r=n.transactionQueueTree_;for(t=S(e);t!==null&&dn(r)===void 0;)r=Lo(r,t),e=$(e),t=S(e);return r}function Yh(n,e){const t=[];return Qh(n,e,t),t.sort((r,i)=>r.order-i.order),t}function Qh(n,e,t){const r=dn(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);yi(e,i=>{Qh(n,i,t)})}function bi(n,e){const t=dn(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,$h(e,t.length>0?t:void 0)}yi(e,r=>{bi(n,r)})}function Jh(n,e){const t=er(Kh(n,e)),r=Lo(n.transactionQueueTree_,e);return iT(r,i=>{Yi(n,i)}),Yi(n,r),jh(r,i=>{Yi(n,i)}),t}function Yi(n,e){const t=dn(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(mt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?$h(e,void 0):t.length=s+1,Se(n.eventQueue_,er(e),i);for(let o=0;o<r.length;o++)hn(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function OT(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):oe(`Invalid query segment '${t}' in query '${n}'`)}return e}const Kl=function(n,e){const t=kT(n),r=t.namespace;t.domain==="firebase.com"&&je(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&je("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Hb();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Qu(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new L(t.pathString)}},kT=function(n){let e="",t="",r="",i="",s="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(i=RT(n.substring(h,u)));const d=OT(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),t=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+H(this.snapshot.exportVal())}}class Zh{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return A(this._path)?null:sh(this._path)}get ref(){return new Oe(this._repo,this._path)}get _queryIdentifier(){const e=Nl(this._queryParams),t=ho(e);return t==="{}"?"default":t}get _queryObject(){return Nl(this._queryParams)}isEqual(e){if(e=te(e),!(e instanceof wi))return!1;const t=this._repo===e._repo,r=go(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Aw(this._path)}}function NT(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function PT(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===wt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Rt)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==tt)throw new Error(r);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===B){if(e!=null&&!Hl(e)||t!=null&&!Hl(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(_(n.getIndex()instanceof vo||n.getIndex()===ph,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Oe extends wi{constructor(e,t){super(e,t,new bo,!1)}get parent(){const e=ah(this._path);return e===null?null:new Oe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class rn{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new L(e),r=Br(this.ref,e);return new rn(this._node.getChild(t),r,B)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new rn(i,Br(this.ref,r),B)))}hasChild(e){const t=new L(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function h0(n,e){return n=te(n),n._checkNotDeleted("ref"),e!==void 0?Br(n._root,e):n._root}function Br(n,e){return n=te(n),S(n._path)===null?uT("child","path",e,!1):$o("child","path",e,!1),new Oe(n._repo,z(n._path,e))}function d0(n){return Wh("remove",n._path),xT(n,null)}function xT(n,e){n=te(n),Wh("set",n._path),cT("set",e,n._path,!1);const t=new Wr;return bT(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function f0(n){n=te(n);const e=new ed(()=>{}),t=new Ii(e);return ET(n._repo,n,t).then(r=>new rn(r,new Oe(n._repo,n._path),n._queryParams.getIndex()))}class Ii{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new Xh("value",this,new rn(e.snapshotNode,new Oe(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Zh(this,e,t):null}matches(e){return e instanceof Ii?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Wo{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Zh(this,e,t):null}createEvent(e,t){_(e.childName!=null,"Child events should have a childName.");const r=Br(new Oe(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Xh(e.type,this,new rn(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Wo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function DT(n,e,t,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=t,c=(h,u)=>{ql(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new ed(t,s||void 0),a=e==="value"?new Ii(o):new Wo(e,o);return IT(n._repo,n,a),()=>ql(n._repo,n,a)}function p0(n,e,t,r){return DT(n,"value",e,t,r)}class MT{}class LT extends MT{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){NT(e,"orderByChild");const t=new L(this._path);if(A(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new vo(t),i=Yw(e._queryParams,r);return PT(i),new wi(e._repo,e._path,i,!0)}}function _0(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return $o("orderByChild","path",n,!1),new LT(n)}function g0(n,...e){let t=te(n);for(const r of e)t=r._apply(t);return t}LI(Oe);VI(Oe);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="FIREBASE_DATABASE_EMULATOR_HOST",Rs={};let $T=!1;function UT(n,e,t,r){n.repoInfo_=new Qu(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function jT(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||je("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),X("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Kl(s,i),a=o.repoInfo,l,c;typeof process<"u"&&fl&&(c=fl[FT]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Kl(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new Jt(Jt.OWNER):new tw(n.name,n.options,e);hT("Invalid Firebase Database URL",o),A(o.path)||je("Database URL must point to the root of a Firebase Database (not including a child path).");const u=BT(a,n,h,new ew(n.name,t));return new WT(u,n)}function VT(n,e){const t=Rs[e];(!t||t[n.key]!==n)&&je(`Database ${e}(${n.repoInfo_}) has already been deleted.`),TT(n),delete t[n.key]}function BT(n,e,t,r){let i=Rs[e.name];i||(i={},Rs[e.name]=i);let s=i[n.toURLString()];return s&&je("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new gT(n,$T,t,r),i[n.toURLString()]=s,s}class WT{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Oe(this._repo,P())),this._rootInternal}_delete(){return this._rootInternal!==null&&(VT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&je("Cannot call "+e+" on a deleted database.")}}function HT(n=hc(),e){const t=Fs(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Ld("database");r&&zT(t,...r)}return t}function zT(n,e,t,r={}){n=te(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&je("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&je('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Jt(Jt.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Fd(r.mockUserToken,n.app.options.projectId);s=new Jt(o)}UT(i,e,t,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(n){Ub(an),Zt(new It("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return jT(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),Qe(pl,_l,n),Qe(pl,_l,"esm2017")}$e.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};$e.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};GT();var Ut={BASE_URL:"/learn-lingo/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const qT=Ut.VITE_API_KEY,KT=Ut.VITE_AUTH_DOMAIN,YT=Ut.VITE_PROJECT_ID,QT=Ut.VITE_STORAGE_BUCKET,JT=Ut.VITE_MESSAGING_SENDER_ID,XT=Ut.VITE_APP_ID,ZT=Ut.VITE_DATABASE_URL,e0={apiKey:qT,authDomain:KT,projectId:YT,storageBucket:QT,messagingSenderId:JT,appId:XT,databaseURL:ZT},td=uc(e0),m0=fg(td),y0=HT(td);export{u0 as E,l0 as F,bd as G,i0 as M,Rb as a,s0 as b,Lb as c,m0 as d,c0 as e,a0 as f,y0 as g,p0 as h,f0 as i,Br as j,d0 as k,xT as l,_0 as o,g0 as q,h0 as r,o0 as s,r0 as u};
