import{d as t,f as e}from"./index.d7dc1ff6.js";function n(){const n=t(),{catchResponse:s}=e();return{getSettings:async t=>{const e=await n.get("/Settings",{params:t});return s(e)},getSettingById:async t=>{const e=await n.get(`/Settings/${t}`);return s(e)},createSetting:async t=>await n.post("/Settings",t),updateSetting:async t=>n.put(`/Settings/${t.id}`,t),deleteSetting:async t=>await n.delete(`/Settings/${t}`)}}export{n as u};
