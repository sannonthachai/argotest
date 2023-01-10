var e=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,c,t)=>c in a?e(a,c,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[c]=t,r=(e,a)=>{for(var c in a||(a={}))s.call(a,c)&&n(e,c,a[c]);if(t)for(var c of t(a))o.call(a,c)&&n(e,c,a[c]);return e},h=(e,a)=>{var c={};for(var n in e)s.call(e,n)&&a.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&t)for(var n of t(e))a.indexOf(n)<0&&o.call(e,n)&&(c[n]=e[n]);return c};import{d as i,f as l}from"./index.d7dc1ff6.js";function C(){const e=i(),{catchResponse:t}=l();return{getAllCoaches:async s=>{var o,n,h,i;const l=await e.get("/Coaches",{params:(C=r({},s),d={productIds:null==(o=s.productIds)?void 0:o.join(),packageIds:null==(n=s.packageIds)?void 0:n.join(),studentGroupIds:null==(h=s.studentGroupIds)?void 0:h.join(),specialtyIds:null==(i=s.specialtyIds)?void 0:i.join()},a(C,c(d)))});var C,d;return t(l)},getSimilarCoachesByCoachId:async a=>{const c=await e.get(`/Coaches/${a}/SimilarCoaches`);return t(c)||[]},getCoachInfoById:async a=>{const c=await e.get(`/Coaches/${a}`);return t(c)},updateCoachInfoById:async a=>e.put(`/Coaches/${a.id}`,a),updateNoteForStudent:async(a,c)=>e.put(`/Coaches/${a}/NoteForStudents`,c),createExpeirenceByCoachId:async(a,c)=>e.post(`/Coaches/${a}/Experiences`,c),updateExperience:async(a,c)=>e.put(`/Coaches/${a}/Experiences/${c.id}`,c),removeExperience:async({coachId:a,experienceId:c})=>e.delete(`/Coaches/${a}/Experiences/${c}`),getCoachCharacterPagination:async a=>{const c=await e.get("/Coaches/Characters",{params:a});return t(c)},getCoachCharacterById:async a=>{const c=await e.get(`/Coaches/Characters/${a}`);return t(c)},createCoachCharacter:async a=>await e.post("/Coaches/Characters",a),updateCoachCharacter:async a=>{var c=a,{id:t}=c,s=h(c,["id"]);return await e.put(`/Coaches/Characters/${t}`,s)},deleteCoachCharacter:async a=>await e.delete(`/Coaches/Characters/${a}`),getCoachTeachingPagination:async a=>{const c=await e.get("/Coaches/Teachings",{params:a});return t(c)},getCoachTeachingById:async a=>{const c=await e.get(`/Coaches/Teachings/${a}`);return t(c)},createCoachTeaching:async a=>await e.post("/Coaches/Teachings",a),updateCoachTeaching:async a=>{var c=a,{id:t}=c,s=h(c,["id"]);return await e.put(`/Coaches/Teachings/${t}`,s)},deleteCoachTeaching:async a=>await e.delete(`/Coaches/Teachings/${a}`),loginAsCoach:async a=>{const c=await e.post(`/Coaches/${a}/LoginAsCoach`);return t(c)},getAllCoachesScheulePlan:async a=>{const c=await e.get("/Coaches/SchedulePlans",{params:a});return t(c)},getCoachScheulePlanById:async a=>{const c=await e.get(`/Coaches/SchedulePlans/${a}`);return t(c)},createCoachScheulePlan:async a=>await e.post("/Coaches/SchedulePlans",a),updateCoachScheulePlan:async a=>e.put(`/Coaches/SchedulePlans/${a.id}`,a),deleteCoachScheulePlan:async a=>await e.delete(`/Coaches/SchedulePlans/${a}`),getAllCoachLevels:async a=>{const c=await e.get("/Coaches/Levels",{params:a});return t(c)},getCoachLevelById:async a=>{const c=await e.get(`/Coaches/Levels/${a}`);return t(c)},createCoachLevel:async a=>await e.post("/Coaches/Levels",a),updateCoachLevel:async a=>e.put(`/Coaches/Levels/${a.id}`,a),deleteCoachLevel:async a=>await e.delete(`/Coaches/Levels/${a}`),getCoachInfoList:async a=>{const c=await e.get("/Coaches/Info",{params:a});return t(c)},getCoachSlots:async a=>{const c=await e.get("/Coaches/Slots",{params:a});return t(c)},getCoachScheuleByDatetime:async a=>{var c=a,{coachId:s}=c,o=h(c,["coachId"]);const n=new URLSearchParams(o),r=await e.get(`/Coaches/${s}/Schedules?${n}`);return t(r)},updateCoachStatus:async a=>await e.put("/Coaches/Status",a),updateCoachOrder:async a=>await e.put("/Coaches/Order",a)}}export{C as u};