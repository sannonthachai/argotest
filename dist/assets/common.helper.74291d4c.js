var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,s=(e,s)=>{for(var c in s||(s={}))t.call(s,c)&&a(e,c,s[c]);if(r)for(var c of r(s))o.call(s,c)&&a(e,c,s[c]);return e};import{_ as c}from"./index.8f8d8101.js";import{b as n,A as p}from"./vendor.1c8b4573.js";import{u as i}from"./useNotyf.ddf08f06.js";const u=i(),{toClipboard:f}=c(),l=async e=>{try{await f(e),u.success("Copied to clipboard")}catch(r){u.error(r)}};function b(){const e=n(),r=p();return{redirectCreatedOrUpdated:({res:t,to:o})=>{[201,200].includes(t.status)&&(t=>{e.push({name:`${t}`,query:s({},r.query)})})(o)}}}function d(e){if("object"==typeof e)return Object.entries(e).map((([e,r])=>({label:e[0].toUpperCase()+e.slice(1).toLowerCase(),value:r})))}export{l as a,d as c,b as r};
