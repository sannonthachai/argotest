var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;import{d as s,f as i}from"./index.d7dc1ff6.js";import{s as p,a as u}from"./date.helper.6ae3fc87.js";function d(){const e=s(),{catchResponse:d}=i(),f=e=>{var s,i,d;return i=((e,t)=>{for(var n in t||(t={}))c.call(t,n)&&a(e,n,t[n]);if(r)for(var n of r(t))o.call(t,n)&&a(e,n,t[n]);return e})({},e),d={specificId:e.specificId?null==(s=e.specificId)?void 0:s.split(",").map((e=>parseInt(e))):void 0,specificSkipId:e.specificSkipId?e.specificSkipId.split(",").map((e=>parseInt(e))):void 0,startDate:p(e.startDate).toISOString(),endDate:u(e.endDate).toISOString()},t(i,n(d))};return{getAnnouncements:async t=>{const n=await e.get("/Announcements",{params:t});return d(n)},getAnnouncementById:async t=>{const n=await e.get(`/Announcements/${t}`);return d(n)},createAnnouncement:t=>e.post("/Announcements",f(t)),updateAnnouncement:(t,n)=>e.put(`/Announcements/${t}`,f(n)),deleteAnnouncement:t=>e.delete(`/Announcements/${t}`)}}export{d as u};