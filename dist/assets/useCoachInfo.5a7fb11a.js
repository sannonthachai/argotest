var e=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,n=(r,o,a)=>o in r?e(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a;import{q as s,A as p,k as i,Y as f,ae as b}from"./vendor.1c8b4573.js";import{u as l}from"./useCoachApi.4bab1366.js";function u(){const e=s({coachInfo:void 0}),u=p(),y=i((()=>parseInt(u.params.id))),{getCoachInfoById:O}=l(),j=async()=>{const r=await O(y.value);e.coachInfo=r};return f((()=>{j()})),m=((e,r)=>{for(var o in r||(r={}))t.call(r,o)&&n(e,o,r[o]);if(a)for(var o of a(r))c.call(r,o)&&n(e,o,r[o]);return e})({},b(e)),r(m,o({fetchCoachInfo:j}));var m}export{u};
