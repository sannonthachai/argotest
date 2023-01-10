var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,o=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&n(e,a,t[a]);if(r)for(var a of r(t))i.call(t,a)&&n(e,a,t[a]);return e},d=(e,r)=>t(e,a(r));import{q as c,D as l,A as p,b as m,ae as u}from"./vendor.1c8b4573.js";import{u as y}from"./useClassroomApi.cba9f1f2.js";import{u as f}from"./usePaginationRoute.780ca235.js";import{t as v}from"./date.helper.6ae3fc87.js";import{a as S}from"./class-report.enum.31771efb.js";import{a as g}from"./product.enum.768ca89a.js";import{o as C}from"./index.d7dc1ff6.js";import{u as w}from"./useNotyf.ddf08f06.js";function b(){const e=c({isLoading:!1,privateClasses:[],privateClass:void 0,privateSystemReport:void 0,privateCancelReport:void 0,totalPrivateClasses:0,classIdSystemReport:0,classIdCancelReport:0,classIdClass:0,filter:{datetime:void 0,range:{},student:"",coach:""},viewBySpecificTime:!1,attend:{dateTime:"",isLoadingAttend:!1,id:0,time:l().format(),type:"",name:void 0,topic:""},uploading:!1}),t=p(),a=m(),r=w(),s=f(),{getPrivateClasses:i,getPrivateClassesById:n,getSystemReportByClassId:b,getCancelReportByClassId:R,updateClassroomAttend:h,uploadPrivateClassesCsv:I}=y(),D=async()=>{e.isLoading=!0,e.filter.student=t.query.student,e.filter.coach=t.query.coach,e.filter.partner=t.query.partner;const a=t.query.startDate,r=t.query.endDate;if(t.query.datetime)e.filter.datetime=new Date(t.query.datetime),e.viewBySpecificTime=!0;else if(a&&r)e.filter.range={start:new Date(l(a,"YYYY-MM-DD").startOf("day").toISOString()),end:new Date(l(r,"YYYY-MM-DD").endOf("day").toISOString())};else{const t=l().startOf("day"),a=l(t).endOf("day");e.filter.range={start:new Date(t.toISOString()),end:new Date(a.toISOString())}}Object.values(g).some((e=>e===t.query.product))&&(e.filter.productType=t.query.product);const n=d(o({},s),{student:e.filter.student,coach:e.filter.coach,product:t.query.product,partner:t.query.partner}),c=await i(d(o({},n),{datetime:e.viewBySpecificTime?l(e.filter.datetime).toISOString():void 0,startDate:!e.viewBySpecificTime&&e.filter.range.start?l(e.filter.range.start).toISOString():void 0,endDate:!e.viewBySpecificTime&&e.filter.range.end?l(e.filter.range.end).toISOString():void 0}));e.isLoading=!1,c&&(e.privateClasses=c.data,e.totalPrivateClasses=c.total)},O=()=>{e.attend.type="",e.attend.time=l().format(),e.attend.id=0,e.attend.name=void 0,e.attend.topic="",e.attend.dateTime=""};return d(o({},u(e)),{classroomHeaders:[{key:"id",label:"ID",sortable:!0},{key:"date",label:"Date",isRaw:!0,isCenter:!0,sortable:!0},{key:"startTime",label:"Start Time",isCenter:!0},{key:"endTime",label:"End Time",isCenter:!0,isRaw:!0},{key:"partnerName",label:"Partner",isRaw:!0},{key:"student",label:"Student",isRaw:!0},{key:"studentPhone",label:"Phone",isRaw:!0},{key:"coach",label:"Coach",isRaw:!0},{key:"product.name",label:"Product Name"},{key:"studentAttend",label:"Student Attend",isCenter:!0,sortable:!0,isRaw:!0},{key:"coachAttend",label:"Coach Attend",isCenter:!0,sortable:!0,isRaw:!0},{key:"studentSupportComment",label:"Note",isRaw:!0},{key:"report",label:"Report",isRaw:!0,isCenter:!0}],onSavedReport:async t=>{await D(),t===S.SYSTEM_REPORT?(e.classIdSystemReport=0,e.privateSystemReport=void 0):(e.classIdCancelReport=0,e.privateCancelReport=void 0)},filterChange:()=>{a.push({name:"classrooms-private-classes",params:t.params,query:d(o({},t.query),{student:e.filter.student,coach:e.filter.coach,datetime:e.viewBySpecificTime?l(e.filter.datetime).toISOString():void 0,startDate:e.viewBySpecificTime?void 0:v(e.filter.range.start,"YYYY-MM-DD"),endDate:e.viewBySpecificTime?void 0:v(e.filter.range.end,"YYYY-MM-DD"),product:e.filter.productType,partner:e.filter.partner})})},fetchPrivateClasses:D,fetchPrivateClassById:async()=>{const t=await n(e.classIdClass);t&&(e.privateClass=t)},fetchSystemReportByClassId:async()=>{const t=await b(e.classIdSystemReport);e.privateSystemReport=t||void 0},fetchCancelReportByClassId:async()=>{const t=await R(e.classIdCancelReport);e.privateCancelReport=t||void 0},onSaveAttend:async()=>{const t="studentAttend"===e.attend.type?{studentAttend:e.attend.time}:{coachAttend:e.attend.time};e.attend.isLoadingAttend=!0;const a=await h(e.attend.id,t);C(a,`Add ${"studentAttend"===e.attend.type?"Student":"Coach"} Attend Success!`),O(),await D(),e.attend.isLoadingAttend=!1},clearAttend:O,uploadInputCsv:async t=>{e.uploading=!0;const a=await I(t);return e.uploading=!1,a.error?void r.error(a.message):a.data.length?(r.warning("Something went wrong"),a.data):(r.success("Private Class was uploaded!"),a.data)}})}const R=e=>`(id: ${e.student.id}) ${e.student.fullnameEn}`,h=e=>`${e.student.fullnameTh}`,I=e=>`(id: ${e.coach.id}) ${e.coach.nickname}`,D=e=>`ID: ${e.id} (${e.nickname.en}) ${e.fullnameEn}  ${e.phone}`,O=e=>`ID: ${e.id} ${e.nickname}`,T=e=>e.map((e=>e.partner.partnerName)),P=e=>e.endTime?v(e.endTime,"HH:mm"):l(e.startTime).add(25,"minutes").format("HH:mm");export{O as a,P as b,T as c,D as d,R as e,h as f,I as g,b as u};
