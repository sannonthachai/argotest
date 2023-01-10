var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,n=(e,a)=>{for(var t in a||(a={}))d.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))s.call(a,t)&&o(e,t,a[t]);return e},r=(e,l)=>a(e,t(l));import{_ as u}from"./SelectOption.vue_vue&type=script&setup=true&lang.934e0be4.js";import{_ as i,a as c}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{_ as p}from"./VLoader.vue_vue&type=script&setup=true&lang.a96d7daf.js";import{p as m,a as I,d as g,E as v,o as f,e as b,x as y,F as h,h as S,g as k,y as D,G as _,t as V,i as j,n as O,K as C,ai as w,ao as x,ap as E,b as L,A as P,k as U,q as Y,ae as q,D as M}from"./vendor.1c8b4573.js";import{S as A}from"./series-item.enum.786b841a.js";import{u as N}from"./useOptionApi.f4dc99b9.js";import{u as R}from"./useTextHelper.08cd3a6d.js";import{r as B}from"./common.helper.74291d4c.js";import{o as F}from"./index.d7dc1ff6.js";import{u as T}from"./useSeriesItemApi.25ad4ad5.js";import{u as z}from"./useStudentApi.e8de2a80.js";m("data-v-61103d1c");const G={class:"form-fieldset"},H={class:"columns is-multiline"},K={class:"column is-12"},J=S("label",null,[_("Student"),S("span",{class:"red"},"*")],-1),Q={class:"column is-12"},W=S("label",null,[_("Package Items "),S("span",{class:"red"},"*")],-1),X={class:"multiselect-tag"},Z=["onClick"],$=[S("span",{class:"multiselect-tag-remove-icon"},null,-1)],ee={class:"select-option-text"},ae=S("input",{class:"input",disabled:!0,placeholder:"Select package"},null,-1),te={class:"column is-12"},le=S("label",null,[_("Series"),S("span",{class:"red"},"*")],-1),de={class:"multiselect-single-label"},se={class:"column is-12"},oe=S("label",null,"Order id",-1),ne=["readonly"],re={class:"column is-12"},ue={class:"field"},ie=S("label",null,"Start Date",-1),ce={class:"control"},pe=["value","disabled"],me={class:"column is-12"},Ie={class:"field"},ge=S("label",null,"Complete Date",-1),ve={class:"control"},fe=["value","disabled"],be={class:"column is-12"},ye=_("Challenge"),he={key:0,class:"red"},Se={class:"multiselect-single-label"},ke={class:"column is-12"},De=S("label",null,[_("Source"),S("span",{class:"red"},"*")],-1),_e={class:"column is-12"},Ve=_("Source id "),je={key:0,class:"red"},Oe=["readonly"];I();var Ce=g({props:{data:{type:Object,required:!0},readonly:{type:Boolean,default:!1},packageItems:{type:Object,required:!0},isLoading:{type:Boolean,default:!1},student:{type:Object,required:!1},defaultStartDate:{type:String,required:!1},defaultStudentId:{type:Number,required:!1},defaultChallengeId:{type:Number,required:!1}},emits:["on-select-student","clear","auto-fix"],setup(e,{emit:a}){const t=e,{getStudents:l,getSeries:d,getChallenge:s}=N(),{displayPackageItemName:o,displayChallengeName:n,displaySeriesName:r}=R(),m=()=>{t.data.source=void 0,t.data.sourceId=void 0};return(t,I)=>{const g=u,L=i,P=c,U=v("Multiselect"),Y=i,q=c,M=v("v-date-picker"),N=v("labeld"),R=p;return f(),b("div",G,[y(R,{size:"large",active:e.isLoading,lighter:"",translucent:""},{default:h((()=>[S("div",H,[S("div",K,[y(P,null,{default:h((()=>[J,y(L,null,{default:h((()=>[y(g,{key:e.data.studentId,modelValue:e.data.studentId,"onUpdate:modelValue":[I[0]||(I[0]=a=>e.data.studentId=a),I[2]||(I[2]=e=>a("on-select-student"))],delay:0,"callback-search":k(l),disabled:e.readonly||e.defaultStartDate||!!e.defaultStudentId,"label-by":"fullnameTh","more-label-by":"fullnameEn",placeholder:"Select student (Search by name)",onClear:I[1]||(I[1]=e=>a("clear"))},null,8,["modelValue","callback-search","disabled"])])),_:1})])),_:1})]),S("div",Q,[y(P,null,{default:h((()=>[W,y(q,{class:"is-flex is-flex-direction-column mt-2 pb-2"},{default:h((()=>{var a;return[e.data.studentId&&e.packageItems&&(null==(a=e.packageItems)?void 0:a.length)>0?(f(),D(U,{key:e.packageItems,modelValue:e.data.packageItemIds,"onUpdate:modelValue":I[3]||(I[3]=a=>e.data.packageItemIds=a),mode:"tags",disabled:e.isLoading||e.readonly,filterResults:!1,delay:0,searchable:!0,"create-tag":!1,options:e.packageItems,"tag-by":"id","value-prop":"id",placeholder:"Select package item",onClear:I[4]||(I[4]=a=>e.data.packageItemIds=[])},{tag:h((({option:e,handleTagRemove:a,disabled:t})=>[S("div",X,[_(V(k(o)(e))+" ",1),t?j("",!0):(f(),b("span",{key:0,class:"multiselect-tag-remove",onClick:t=>a(e,t)},$,8,Z))])])),option:h((({option:e})=>[S("span",ee,V(k(o)(e)),1)])),_:1},8,["modelValue","disabled","options"])):(f(),D(q,{key:1},{default:h((()=>[y(Y,null,{default:h((()=>[ae,S("span",{class:O([[e.data.studentId?"has-text-danger":"has-text-warning"],"help"])},V(e.data.studentId?"student don't have packageItems":"please select student"),3)])),_:1})])),_:1}))]})),_:1})])),_:1})]),S("div",te,[y(P,null,{default:h((()=>[le,y(L,null,{default:h((()=>{var a;return[y(g,{key:null==(a=e.student)?void 0:a.country,modelValue:e.data.seriesId,"onUpdate:modelValue":I[5]||(I[5]=a=>e.data.seriesId=a),delay:0,"callback-search":a=>{var t;return k(d)(a,null==(t=e.student)?void 0:t.country)},disabled:e.readonly,"label-by":"name",placeholder:"Select Series",onClear:I[6]||(I[6]=a=>e.data.seriesId=0)},{singlelabel:h((({value:e})=>[S("div",de,V(k(r)(e)),1)])),option:h((({option:e})=>[_(V(k(r)(e)),1)])),_:1},8,["modelValue","callback-search","disabled"])]})),_:1})])),_:1})]),S("div",se,[y(P,null,{default:h((()=>[oe,y(L,null,{default:h((()=>[C(S("input",{"onUpdate:modelValue":I[7]||(I[7]=a=>e.data.orderId=a),type:"number",class:"input",min:"0",placeholder:"fill order id...",readonly:e.readonly},null,8,ne),[[w,e.data.orderId]])])),_:1})])),_:1})]),S("div",re,[S("div",ue,[ie,S("div",ce,[y(M,{modelValue:e.data.startDate,"onUpdate:modelValue":I[8]||(I[8]=a=>e.data.startDate=a),color:"orange","model-config":{type:"date",mask:"iso",timeAdjust:"00:00:00"},masks:{input:"DD/MM/YYYY"},"trim-weeks":"",mode:"date",disabled:e.readonly||e.defaultStartDate},{default:h((({inputValue:a,inputEvents:t})=>[y(q,null,{default:h((()=>[y(Y,null,{default:h((()=>[S("input",x({class:"input",value:a,disabled:e.readonly||!!e.defaultStartDate,placeholder:"Start Date"},E(t)),null,16,pe)])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue","disabled"])])])]),S("div",me,[S("div",Ie,[ge,S("div",ve,[y(M,{modelValue:e.data.completeDate,"onUpdate:modelValue":I[9]||(I[9]=a=>e.data.completeDate=a),color:"orange","model-config":{type:"date",mask:"iso",timeAdjust:"23:59:59"},masks:{input:"DD/MM/YYYY"},"trim-weeks":"",mode:"date",disabled:e.readonly},{default:h((({inputValue:a,inputEvents:t})=>[y(q,null,{default:h((()=>[y(Y,null,{default:h((()=>[S("input",x({class:"input",value:a,placeholder:"Complete Date",disabled:e.readonly},E(t)),null,16,fe)])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue","disabled"])])])]),S("div",be,[y(P,null,{default:h((()=>[y(N,null,{default:h((()=>[ye,e.data.startDate?(f(),b("span",he,"*")):j("",!0)])),_:1}),y(L,null,{default:h((()=>{var a;return[y(g,{key:null==(a=e.student)?void 0:a.country,modelValue:e.data.challengeId,"onUpdate:modelValue":I[10]||(I[10]=a=>e.data.challengeId=a),"callback-search":a=>{var t;return k(s)(a,null==(t=e.student)?void 0:t.country)},disabled:e.readonly||!!e.defaultChallengeId||!e.data.startDate,"label-by":"name","value-prop":"id",placeholder:"Select challenge",onClear:I[11]||(I[11]=a=>e.data.challengeId=0)},{singlelabel:h((({value:e})=>[S("div",Se,V(k(n)(e)),1)])),option:h((({option:e})=>[_(V(k(n)(e)),1)])),_:1},8,["modelValue","callback-search","disabled"])]})),_:1})])),_:1})]),S("div",ke,[y(P,null,{default:h((()=>[De,y(q,null,{default:h((()=>[y(Y,null,{default:h((()=>[y(U,{modelValue:e.data.source,"onUpdate:modelValue":I[12]||(I[12]=a=>e.data.source=a),options:Object.values(k(A)),placeholder:"select source",disabled:e.readonly,onClear:m,onChange:m},null,8,["modelValue","options","disabled"])])),_:1})])),_:1})])),_:1})]),S("div",_e,[y(P,null,{default:h((()=>[S("label",null,[Ve,e.data.source===k(A).REDEEM?(f(),b("span",je,"*")):j("",!0)]),y(L,null,{default:h((()=>[C(S("input",{"onUpdate:modelValue":I[13]||(I[13]=a=>e.data.sourceId=a),type:"number",class:"input",placeholder:"fill source id...",min:"0",readonly:e.readonly,onChange:I[14]||(I[14]=e=>a("auto-fix"))},null,40,Oe),[[w,e.data.sourceId]])])),_:1})])),_:1})])])])),_:1},8,["active"])])}}});function we(){L();const e=P(),{redirectCreatedOrUpdated:a}=B(),{getStudentPackageItemsSeries:t}=N(),{getSeriesItem:l,updateSeriesItem:d,createSeriesItem:s}=T(),{getStudentInfoById:o}=z(),u=U((()=>"#edit"!==e.hash)),i=U((()=>parseInt(e.params.id))),c=Y({id:0,isLoading:!1,data:{studentId:0,seriesId:0,packageItemIds:[],challengeId:0},packageItems:void 0,student:void 0}),p=U((()=>{const e=!!c.data.startDate&&!c.data.challengeId,a=c.data.source===A.REDEEM&&!c.data.sourceId;return!c.data.studentId||!c.data.seriesId||0===c.data.packageItemIds.length||!c.data.source||e||a})),m=async e=>{if(e){c.isLoading=!0;const a=await t(e,{currentPage:1,perPage:1e3,seriesItemId:null==i?void 0:i.value});c.student||(c.student=await o(e)),c.isLoading=!1,a&&(c.packageItems=a)}};return r(n({},q(c)),{disabledSave:p,readonly:u,setStudentPackageItems:m,onSaveSeriesItem:async()=>{let e;c.isLoading=!0;const t=r(n({},c.data),{orderId:c.data.orderId?+c.data.orderId:void 0,sourceId:c.data.sourceId?+c.data.sourceId:void 0,startDate:c.data.startDate?M(c.data.startDate).toISOString():void 0,completeDate:c.data.completeDate?M(c.data.completeDate).toISOString():void 0});c.id?(e=await d(r(n({},t),{id:c.id})),F(e,"Series Item was updated!")):(e=await s(t),F(e,"Series Item was created!")),c.isLoading=!1,a({res:e,to:"students-series-items"})},fetchSeriesItemInfo:async()=>{c.isLoading=!0;const e=await l(i.value);c.data.id=i.value,e&&(c.id=i.value,c.data=r(n({},e),{startDate:M(e.startDate).toDate(),completeDate:M(e.completeDate).toDate()}),await m(c.data.studentId)),c.isLoading=!1},clearStateInfo:()=>{c.data.studentId=0,c.data.seriesId=0,c.data.packageItemIds=[],c.data.challengeId=0,c.data.orderId=void 0,c.data.startDate=void 0,c.data.completeDate=void 0,c.data.source=void 0,c.data.sourceId=void 0,c.student=void 0,c.packageItems=[]},autoFixSource:()=>{c.data.sourceId&&c.data.sourceId<0&&(c.data.sourceId=0)}})}Ce.__scopeId="data-v-61103d1c";export{Ce as _,we as u};
