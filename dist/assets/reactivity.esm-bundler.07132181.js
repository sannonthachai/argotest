function e(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=Object.prototype.hasOwnProperty,n=(e,n)=>t.call(e,n),r=Array.isArray,s=e=>"[object Map]"===u(e),o=e=>"symbol"==typeof e,c=e=>null!==e&&"object"==typeof e,i=Object.prototype.toString,u=e=>i.call(e),a=e=>"string"==typeof e&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,l=(e,t)=>!Object.is(e,t),f=e=>{const t=new Set(e);return t.w=0,t.n=0,t},h=new WeakMap;let _=1;const d=Symbol(""),p=Symbol("");let g=!0;const v=[];function w(e,t,n){if(!y())return;let r=h.get(e);r||h.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=f()),b(s)}function y(){return g&&!1}function b(e,t){let n=!1;(e=>(e.n&_)>0)(e)||(e.n|=_,n=!(e=>(e.w&_)>0)(e)),n&&(e.add(undefined),undefined.deps.push(e))}function R(e,t,n,o,c,i){const u=h.get(e);if(!u)return;let l=[];if("clear"===t)l=[...u.values()];else if("length"===n&&r(e))u.forEach(((e,t)=>{("length"===t||t>=o)&&l.push(e)}));else switch(void 0!==n&&l.push(u.get(n)),t){case"add":r(e)?a(n)&&l.push(u.get("length")):(l.push(u.get(d)),s(e)&&l.push(u.get(p)));break;case"delete":r(e)||(l.push(u.get(d)),s(e)&&l.push(u.get(p)));break;case"set":s(e)&&l.push(u.get(d))}if(1===l.length)l[0]&&k(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);k(f(e))}}function k(e,t){for(const n of r(e)?e:[...e])(undefined!==n||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const m=e("__proto__,__v_isRef,__isVue"),j=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(o)),O=P(),S=P(!0),E=M();function M(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=ie(this);for(let t=0,s=this.length;t<s;t++)w(n,0,t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(ie)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){v.push(g),g=!1;const n=ie(this)[t].apply(this,e);return function(){const e=v.pop();g=void 0===e||e}(),n}})),e}function P(e=!1,t=!1){return function(s,i,u){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&u===(e?t?ne:te:t?ee:$).get(s))return s;const l=r(s);if(!e&&l&&n(E,i))return Reflect.get(E,i,u);const f=Reflect.get(s,i,u);if(o(i)?j.has(i):m(i))return f;if(e||w(s,0,i),t)return f;if(le(f)){return!l||!a(i)?f.value:f}return c(f)?e?oe(f):se(f):f}}function x(e=!1){return function(t,s,o,c){let i=t[s];if(!e&&(o=ie(o),i=ie(i),!r(t)&&le(i)&&!le(o)))return i.value=o,!0;const u=r(t)&&a(s)?Number(s)<t.length:n(t,s),f=Reflect.set(t,s,o,c);return t===ie(c)&&(u?l(o,i)&&R(t,"set",s,o):R(t,"add",s,o)),f}}const W={get:O,set:x(),deleteProperty:function(e,t){const r=n(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&R(e,"delete",t,void 0),s},has:function(e,t){const n=Reflect.has(e,t);return o(t)&&j.has(t)||w(e,0,t),n},ownKeys:function(e){return w(e,0,r(e)?"length":d),Reflect.ownKeys(e)}},z={get:S,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},A=e=>e,N=e=>Reflect.getPrototypeOf(e);function V(e,t,n=!1,r=!1){const s=ie(e=e.__v_raw),o=ie(t);t!==o&&!n&&w(s,0,t),!n&&w(s,0,o);const{has:c}=N(s),i=r?A:n?ae:ue;return c.call(s,t)?i(e.get(t)):c.call(s,o)?i(e.get(o)):void(e!==s&&e.get(t))}function I(e,t=!1){const n=this.__v_raw,r=ie(n),s=ie(e);return e!==s&&!t&&w(r,0,e),!t&&w(r,0,s),e===s?n.has(e):n.has(e)||n.has(s)}function K(e,t=!1){return e=e.__v_raw,!t&&w(ie(e),0,d),Reflect.get(e,"size",e)}function B(e){e=ie(e);const t=ie(this);return N(t).has.call(t,e)||(t.add(e),R(t,"add",e,e)),this}function C(e,t){t=ie(t);const n=ie(this),{has:r,get:s}=N(n);let o=r.call(n,e);o||(e=ie(e),o=r.call(n,e));const c=s.call(n,e);return n.set(e,t),o?l(t,c)&&R(n,"set",e,t):R(n,"add",e,t),this}function L(e){const t=ie(this),{has:n,get:r}=N(t);let s=n.call(t,e);s||(e=ie(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&R(t,"delete",e,void 0),o}function q(){const e=ie(this),t=0!==e.size,n=e.clear();return t&&R(e,"clear",void 0,void 0),n}function D(e,t){return function(n,r){const s=this,o=s.__v_raw,c=ie(o),i=t?A:e?ae:ue;return!e&&w(c,0,d),o.forEach(((e,t)=>n.call(r,i(e),i(t),s)))}}function F(e,t,n){return function(...r){const o=this.__v_raw,c=ie(o),i=s(c),u="entries"===e||e===Symbol.iterator&&i,a="keys"===e&&i,l=o[e](...r),f=n?A:t?ae:ue;return!t&&w(c,0,a?p:d),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:u?[f(e[0]),f(e[1])]:f(e),done:t}},[Symbol.iterator](){return this}}}}function G(e){return function(...t){return"delete"!==e&&this}}function H(){const e={get(e){return V(this,e)},get size(){return K(this)},has:I,add:B,set:C,delete:L,clear:q,forEach:D(!1,!1)},t={get(e){return V(this,e,!1,!0)},get size(){return K(this)},has:I,add:B,set:C,delete:L,clear:q,forEach:D(!1,!0)},n={get(e){return V(this,e,!0)},get size(){return K(this,!0)},has(e){return I.call(this,e,!0)},add:G("add"),set:G("set"),delete:G("delete"),clear:G("clear"),forEach:D(!0,!1)},r={get(e){return V(this,e,!0,!0)},get size(){return K(this,!0)},has(e){return I.call(this,e,!0)},add:G("add"),set:G("set"),delete:G("delete"),clear:G("clear"),forEach:D(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((s=>{e[s]=F(s,!1,!1),n[s]=F(s,!0,!1),t[s]=F(s,!1,!0),r[s]=F(s,!0,!0)})),[e,n,t,r]}const[J,Q,T,U]=H();function X(e,t){const r=t?e?U:T:e?Q:J;return(t,s,o)=>"__v_isReactive"===s?!e:"__v_isReadonly"===s?e:"__v_raw"===s?t:Reflect.get(n(r,s)&&s in t?r:t,s,o)}const Y={get:X(!1,!1)},Z={get:X(!0,!1)},$=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap;function re(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>u(e).slice(8,-1))(e))}function se(e){return e&&e.__v_isReadonly?e:ce(e,!1,W,Y,$)}function oe(e){return ce(e,!0,z,Z,te)}function ce(e,t,n,r,s){if(!c(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=re(e);if(0===i)return e;const u=new Proxy(e,2===i?r:n);return s.set(e,u),u}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}const ue=e=>c(e)?se(e):e,ae=e=>c(e)?oe(e):e;function le(e){return Boolean(e&&!0===e.__v_isRef)}function fe(e){return function(e,t){if(le(e))return e;return new he(e,t)}(e,!1)}class he{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ie(e),this._value=t?e:ue(e)}get value(){var e;return e=this,y()&&((e=ie(e)).dep||(e.dep=f()),b(e.dep)),this._value}set value(e){var t;e=this._shallow?e:ie(e),l(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:ue(e),(t=ie(t=this)).dep&&k(t.dep))}}function _e(e){const t=r(e)?new Array(e.length):{};for(const n in e)t[n]=pe(e,n);return t}class de{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function pe(e,t){const n=e[t];return le(n)?n:new de(e,t)}Promise.resolve();export{fe as r,_e as t};