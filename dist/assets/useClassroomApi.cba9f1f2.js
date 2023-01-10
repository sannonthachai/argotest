var t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(a,r)=>{var o={};for(var p in a)e.call(a,p)&&r.indexOf(p)<0&&(o[p]=a[p]);if(null!=a&&t)for(var p of t(a))r.indexOf(p)<0&&s.call(a,p)&&(o[p]=a[p]);return o};import{d as r,f as o,i as p,A as n}from"./index.d7dc1ff6.js";import{B as l,C as c}from"./vendor.1c8b4573.js";function u(){const t=r(),{catchResponse:e}=o();return{getPrivateClasses:async s=>{const a=await t.get("/PrivateClasses",{params:s});return e(a)},getPrivateClassesById:async s=>{const a=await t.get(`/PrivateClasses/${s}`);return e(a)},getSystemReportByClassId:async e=>{const s=await t.get(`/PrivateClassReports/${e}/SystemReport`);return p(s)},getCancelReportByClassId:async e=>{const s=await t.get(`/PrivateClassReports/${e}/CancelReport`);return p(s)},createSystemReport:e=>{var s=e,{classId:r}=s,o=a(s,["classId"]);return t.post(`/PrivateClassReports/${r}/SystemReport`,o)},updateSystemReport:e=>{var s=e,{classId:r}=s,o=a(s,["classId"]);return t.put(`/PrivateClassReports/${r}/SystemReport`,o)},createCancelReport:e=>{var s=e,{classId:r}=s,o=a(s,["classId"]);return t.post(`/PrivateClassReports/${r}/CancelReport`,o)},updateCancelReport:e=>{var s=e,{classId:r}=s,o=a(s,["classId"]);return t.put(`/PrivateClassReports/${r}/CancelReport`,o)},updateAcceptableCancelReport:e=>{var s=e,{classId:r}=s,o=a(s,["classId"]);return t.put(`/PrivateClassReports/${r}/CancelReport/Acceptable`,o)},getAllSystemReport:async s=>{const a=await t.get("/PrivateClassReports/SystemReport",{params:s});return e(a)},getAllcancelReport:async s=>{const a=await t.get("/PrivateClassReports/CancelReport",{params:s});return e(a)},getGroupClasses:async s=>{const a=await t.get("/GroupClasses",{params:s});return e(a)},getGroupClassById:async s=>{const a=await t.get(`/GroupClasses/${s}`);return e(a)},getGroupClassStudent:async s=>{const a=await t.get(`/GroupClasses/${s}/Students`);return e(a)},createGroupClass:e=>t.post("/GroupClasses",e),uploadGroupClassCsv:e=>{const s=new FormData;return s.append("file",e),t.post("/GroupClasses/Upload",s,{headers:{"Content-Type":"multipart/form-data"}})},updateGroupClass:e=>{var s=e,{id:r}=s,o=a(s,["id"]);return t.put(`/GroupClasses/${r}`,o)},deleteGroupClass:e=>t.delete(`/GroupClasses/${e}`),voidSystemReport:e=>t.delete(`/PrivateClassReports/${e}/VoidSystemReport`),voidCancelReport:e=>t.delete(`/PrivateClassReports/${e}/VoidCancelReport`),exportXlsxReport:async t=>{const e=new URLSearchParams({studentCountry:t.studentCountry.join(","),reportType:t.reportType,startDate:t.startDate,endDate:t.endDate});return await l.post(`https://admin-api.globish.dev/ClassReports/ExportXlsx?${e.toString()}`,{},{headers:{"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","Content-Disposition":"attachment; filename=template.xlsx",Authorization:`Bearer ${c.get(n)}`},responseType:"arraybuffer"})},createGroupClassReport:async e=>await t.post("/GroupClassReports",e),getGroupClassReportById:async s=>{const a=await t.get(`/GroupClassReports/${s}`);return e(a)},updateGroupClassReport:async e=>await t.put(`/GroupClassReports/${e.id}`,e),updateClassroomAttend:async(e,s)=>await t.put(`/PrivateClasses/${e}`,s),updateGroupClassAttend:async(e,s)=>await t.put(`/GroupClasses/${e}/Attends`,s),uploadPrivateClassesCsv:e=>{const s=new FormData;return s.append("file",e),t.post("/PrivateClasses/Upload",s,{headers:{"Content-Type":"multipart/form-data"}})}}}export{u};