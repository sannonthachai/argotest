var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;import{d as s,f as r,i as o}from"./index.d7dc1ff6.js";function n(){const n=s(),{catchResponse:l}=r();return{getRolePagination:async e=>{const t=await n.get("/Roles",{params:e});return l(t)},getRoleById:async e=>{const t=await n.get(`/Roles/${e}`);return l(t)},getRoleUsers:async e=>{const t=await n.get(`/Roles/${e}/Users`);return l(t)},createRole:e=>n.post("/Roles",e),getMenus:async()=>{const e=await n.get("Menus");return l(e)||[]},updateRole:s=>{const r=s,{id:o}=r,l=((s,r)=>{var o={};for(var n in s)t.call(s,n)&&r.indexOf(n)<0&&(o[n]=s[n]);if(null!=s&&e)for(var n of e(s))r.indexOf(n)<0&&a.call(s,n)&&(o[n]=s[n]);return o})(r,["id"]);return n.put(`/Roles/${o}`,l)},deleteRole:e=>n.delete(`/Roles/${e}`),getAllTeam:async e=>{const t=await n.get("/Teams",{params:e});return o(t)},getTeamById:async e=>{const t=await n.get(`/Teams/${e}`);return o(t)},createTeam:e=>n.post("/Teams",e),updateTeam:(e,t)=>n.put(`/Teams/${e}`,t),deleteTeam:e=>n.delete(`/Teams/${e}`)}}export{n as u};