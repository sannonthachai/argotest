var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,r=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&n(e,t,a[t]);if(s)for(var t of s(a))l.call(a,t)&&n(e,t,a[t]);return e},o=(e,s)=>a(e,t(s));import{c as d,j as c}from"./index.d7dc1ff6.js";import{_ as u,a as f}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{_ as p}from"./VPlaceholderSection.vue_vue&type=script&setup=true&lang.35b0ad2a.js";import{_ as m,a as v}from"./search-4-dark.fb3880a5.js";import{q as g,k as h,A as b,b as y,Y,ae as x,z as k,D,d as w,T as j,E as S,o as M,e as O,h as _,t as I,g as q,x as A,F as P,i as C,n as E,ao as V,ap as z,O as B,H as F,I as N,p as T,G as L,a as Q}from"./vendor.1c8b4573.js";import{t as U}from"./date.helper.6ae3fc87.js";import{u as $}from"./usePartnerApi.2e3c406b.js";import G from"./html2canvas.esm.0eae2bf4.js";import"./index.ec15dc7d.js";import"./lodash.0a1ccad5.js";T("data-v-42d37a20");const H={class:"account-box is-form is-footerless"},R={class:"form-head-inner"},X={class:"left"},J=_("h2",{class:"title is-5 is-narrow is-bolder"},"Satisfies",-1),K={key:0,class:"right"},W=_("i",{class:"lnir lnir-download mr-2","aria-hidden":"true"},null,-1),Z=L(" Take Screenshot"),ee={key:0,class:"form-body"},ae={class:"is-flex is-justify-content-center"},te=_("label",{class:"label-date"},"Date range",-1),se=["value"],ie=["value"],le=_("div",{class:"is-divider"},null,-1),ne={key:0},re=_("img",{class:"light-image",src:m,alt:""},null,-1),oe=_("img",{class:"dark-image",src:v,alt:""},null,-1),de={key:1,id:"satisfied"},ce={class:"title is-4 is-narrow name-box"},ue={class:"columns is-multiline info-box"},fe={key:0,class:"column is-12 is-flex is-justify-content-center"},pe=_("div",{class:"column is-12 has-text-centered mb-5"},[_("h2",{class:"title is-6 is-narrow is-bolder"},"Satisfied Chart")],-1),me={class:"column is-5 has-text-centered mb-5"},ve={class:"title is-4 is-narrow is-bolder"},ge=_("p",{class:"dark-text"},"Number of student",-1),he={class:"column is-5 has-text-centered mb-5"},be={class:"title is-4 is-narrow is-bolder"},ye=_("p",{class:"dark-text"},"Number of class",-1),Ye={class:"title is-6 is-narrow is-bolder"},xe={class:"dark-text"},ke={class:"dark-text"},De=_("div",{class:"is-divider"},null,-1),we={class:"column is-10 comment-box"},je=_("h2",{class:"title is-6 is-narrow is-bolder"},"Comment",-1),Se={class:"addon-list"};Q();var Me=w({setup(e){const a=k("batchInfo"),t=k("info"),{satisfiesInfo:s,chartOptions:i,series:l,changeDate:n,range:m,loading:v,batchId:w}=function(){const e=g({loading:!1,satisfiesInfo:void 0,range:{start:"",end:""}}),a=h((()=>{var a;return(null==(a=e.satisfiesInfo)?void 0:a.question)||[]})),t=h((()=>a.value.map((e=>"Question"+e.id.toString()))||[])),s=h((()=>a.value.map((e=>+e.percentage.toFixed(2)))||[])),i=h((()=>{const e=a.value.reduce(((e,a)=>e+a.percentage),0);return Math.floor(e/a.value.length)})),l=h((()=>((e,a)=>({chart:{height:350,type:"radialBar"},plotOptions:{radialBar:{offsetY:0,startAngle:0,endAngle:270,hollow:{margin:5,size:"30%",background:"transparent",image:void 0},dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(e){return a}}}}},labels:e,legend:{show:!0,floating:!0,fontSize:"5px",position:"left",offsetX:100,offsetY:10,labels:{useSeriesColors:!0},responsive:[{breakpoint:480,options:{legend:{show:!1}}}]}}))(t.value,i.value))),n=b(),d=y(),c=n.params.id,{getSatisfies:u}=$(),f=async()=>{if(e.loading=!0,n.query.startDate){const a=n.query.startDate,t=n.query.endDate;e.range.start=a,e.range.end=t}else{const a=k("batchInfo");e.range.start=(null==a?void 0:a.value.expectedStart)?D(null==a?void 0:a.value.expectedStart).format("YYYY-MM-DD"):D().format(),e.range.end=(null==a?void 0:a.value.expectedEnd)?D(null==a?void 0:a.value.expectedEnd).format("YYYY-MM-DD"):(null==a?void 0:a.value.expectedStart)?D(a.value.expectedStart).add(1,"day").format("YYYY-MM-DD"):D().format()}const a=await u({startDate:D(e.range.start).toISOString(),endDate:D(e.range.end).toISOString(),partnerBatchId:+c});e.loading=!1,a&&(e.satisfiesInfo=a,e.satisfiesInfo.question=a.question.filter((e=>e.percentage>0&&null!=e.percentage)))};return Y((()=>{f()})),o(r({},x(e)),{series:s,chartOptions:l,fecthSatisfies:f,changeDate:()=>{d.push({name:"partners-:id-satisfied",params:n.params,query:o(r({},n.query),{startDate:U(e.range.start,"YYYY-MM-DD"),endDate:U(e.range.end,"YYYY-MM-DD")})})},batchId:c})}(),T=e=>e.toFixed(2),L=async()=>{const e=document.getElementById("satisfied");if(!e)return;const a=(await G(e)).toDataURL(),t=document.createElement("a");t.download=`batch_${w}_satisfied.png`,t.href=a,t.click()},{y:Q}=j(),Me=h((()=>Q.value>30));return(e,r)=>{var o,g,h,b,y,Y,x;const k=d,D=u,w=c,j=f,Q=S("v-date-picker"),U=p,$=S("apexchart");return M(),O("div",H,[_("div",{class:E([[q(Me)&&"is-stuck"],"form-head stuck-header"])},[_("div",R,[_("div",X,[J,_("p",null,I(q(a).name),1)]),0!=(null==(o=q(s))?void 0:o.totalAssessment)?(M(),O("div",K,[A(k,{color:"primary",onClick:L},{default:P((()=>[W,Z])),_:1})])):C("",!0)])],2),q(v)?C("",!0):(M(),O("div",ee,[_("div",ae,[A(Q,{modelValue:q(m),"onUpdate:modelValue":r[0]||(r[0]=e=>B(m)?m.value=e:null),"is-range":"",color:"orange","trim-weeks":"","model-config":{start:{type:"string",mask:"YYYY-MM-DD",timeAdjust:"00:00:00"},end:{type:"string",mask:"YYYY-MM-DD",timeAdjust:"23:59:59"}},masks:{input:"DD/MM/YYYY"},popover:{visibility:"click"}},{default:P((({inputValue:e,inputEvents:a})=>[te,A(j,{addons:""},{default:P((()=>[A(D,null,{default:P((()=>[_("input",V({value:e.start,class:"input"},z(a.start)),null,16,se)])),_:2},1024),A(D,null,{default:P((()=>[A(w,{icon:"feather:arrow-right",class:"is-static"})])),_:1}),A(D,null,{default:P((()=>[_("input",V({value:e.end,class:"input"},z(a.end)),null,16,ie)])),_:2},1024),A(D,null,{default:P((()=>[A(w,{color:"warning",icon:"feather:search",outlined:"",onClick:q(n)},null,8,["onClick"])])),_:1})])),_:2},1024)])),_:1},8,["modelValue"])]),le,0===(null==(g=q(s))?void 0:g.totalAssessment)?(M(),O("div",ne,[A(U,{title:"No data to show",subtitle:"There is currently no data to show in this date."},{image:P((()=>[re,oe])),_:1})])):(M(),O("div",de,[_("h2",ce,I(null==(h=q(t))?void 0:h.partnerName),1),_("div",ue,[q(s)?(M(),O("div",fe,[A($,{width:"500",type:"radialBar",options:q(i),series:q(l)},null,8,["options","series"])])):C("",!0),pe,_("div",me,[_("h2",ve,I(null==(b=q(s))?void 0:b.numberOfStudent),1),ge]),_("div",he,[_("h2",be,I(null==(y=q(s))?void 0:y.numberOfClass),1),ye]),(M(!0),O(F,null,N(null==(Y=q(s))?void 0:Y.question,(e=>{var a,t,i,l;return M(),O("div",{key:e,class:E(["column is-flex is-justify-content-center",6===(null==(t=null==(a=q(s))?void 0:a.question)?void 0:t.length)||(null==(l=null==(i=q(s))?void 0:i.question)?void 0:l.length)<4?"is-4":"is-3"])},[_("div",null,[_("h2",Ye," Question "+I(e.id),1),_("p",xe," Average: "+I(e.avg||0===e.avg?T(e.avg):"-"),1),_("p",ke," Percentage: "+I(e.percentage||0===e.percentage?T(e.percentage):"-"),1)])],2)})),128))]),De,_("div",we,[je,_("ul",Se,[(M(!0),O(F,null,N(null==(x=q(s))?void 0:x.comment,(e=>(M(),O("li",{key:`addon-${e.id}`},I(e),1)))),128))])])]))]))])}}});Me.__scopeId="data-v-42d37a20";export default Me;