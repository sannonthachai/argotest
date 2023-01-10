var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,r=(a,l,o)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o;import{_ as c,a as s}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{_ as u}from"./SelectOption.vue_vue&type=script&setup=true&lang.934e0be4.js";import{_ as d}from"./VSwitchBlock.vue_vue&type=script&setup=true&lang.fd20ebd0.js";import{_ as i}from"./VTag.vue_vue&type=script&setup=true&lang.b31af8ee.js";import{_ as f}from"./VRadio.89eaf975.js";import{_ as m}from"./VTags.vue_vue&type=script&setup=true&lang.156e160d.js";import{_ as p}from"./ModalFileManager.vue_vue&type=script&setup=true&lang.3ed79754.js";import{_ as k}from"./FeatureGroupOption.vue_vue&type=script&setup=true&lang.95badc66.js";import{p as g,a as b,d as I,r as P,S as v,E as y,av as h,o as _,e as V,h as S,x as C,F as O,K as M,ai as U,V as j,g as N,t as D,n as F,H as x,I as G,y as L,i as w,A as E,b as T,q as A,k as $,Y as W,ae as q}from"./vendor.1c8b4573.js";import{g as R,l as B,t as z,o as H}from"./index.d7dc1ff6.js";import{b as K,G as Y,c as J,d as Q,e as X,f as Z,a as ee}from"./package.enum.de4ee89f.js";import{u as ae}from"./useOptionApi.f4dc99b9.js";import{P as le}from"./product.enum.768ca89a.js";import{u as oe}from"./usePackageApi.47154a43.js";g("data-v-2d3ff0ec");const ne={class:"form-fieldset"},te={key:0,class:"fieldset columns is-multiline"},re=S("div",{class:"form-header column is-12"},[S("h3",null,"Package Detail")],-1),ce={class:"column is-6"},se=S("label",null,"Package Name",-1),ue=["disabled"],de={class:"help is-danger"},ie={class:"column is-6"},fe=S("label",null,"Internal Package Name",-1),me=["disabled"],pe={class:"column is-12"},ke=S("label",null,"Product",-1),ge={class:"help is-danger"},be={class:"column is-6"},Ie=S("label",null," ",-1),Pe={class:"column is-6"},ve=S("label",null,"Status ",-1),ye=S("span",null," ",-1),he={class:"column is-12"},_e=S("label",null,"Detail",-1),Ve=["disabled"],Se={class:"column is-12"},Ce=S("label",null,"Comment",-1),Oe=["disabled"],Me=S("div",{class:"form-header column is-12"},[S("h3",null,"Price & Ticket")],-1),Ue={class:"column is-6"},je=S("a",{class:"button is-static"},"฿",-1),Ne=["disabled"],De={class:"help is-danger"},Fe={class:"column is-6"},xe=S("a",{class:"button is-static"},"฿",-1),Ge=["disabled"],Le={class:"help is-danger"},we={class:"column is-6"},Ee=S("label",null,"Installment",-1),Te={class:"multiselect-single-label"},Ae={class:"select-option-text"},$e={class:"help is-danger"},We={class:"column is-6"},qe=S("label",null,"Duration",-1),Re=["disabled"],Be=S("a",{class:"button is-static"},"month",-1),ze={class:"help is-danger"},He={class:"column is-4 is-6"},Ke=S("label",null,"1 on 1 Ticket",-1),Ye=["disabled"],Je={class:"column is-6"},Qe=S("label",null,"Freetalk Ticket",-1),Xe=["disabled"],Ze={class:"column is-6"},ea=S("label",null,"Group class Ticket",-1),aa=["disabled"],la={class:"column is-6"},oa=S("label",null,"Master class Ticket",-1),na=["disabled"],ta={class:"column is-12"},ra=S("label",null," ",-1),ca={class:"column is-6"},sa=S("label",null,"Limit Per Week",-1),ua=["disabled"],da={class:"column is-6"},ia=S("label",null,"Limit Per Month",-1),fa=["disabled"],ma=S("div",{class:"form-header column is-12"},[S("h3",null,"Course Detail")],-1),pa={class:"column is-4"},ka=S("label",null,"Provide Status",-1),ga={class:"column is-8"},ba=S("label",null,"Private class time",-1),Ia={class:"multiselect-single-label"},Pa={class:"select-option-text"},va={class:"help is-danger"},ya={class:"column is-12"},ha=S("label",null,"Package Type",-1),_a={class:"help is-danger"},Va={class:"column is-6"},Sa=S("label",null,"Globish Level",-1),Ca={class:"multiselect-single-label"},Oa={class:"select-option-text"},Ma={class:"column is-6"},Ua=S("label",null,"CEFR Level",-1),ja={class:"multiselect-single-label"},Na={class:"select-option-text"},Da={class:"column is-12"},Fa=S("label",null,"Country",-1),xa={class:"help is-danger"},Ga={class:"column is-12"},La={class:"is-flex is-justify-content-center"},wa=["src"],Ea=S("label",null,"Photo Link",-1),Ta=["disabled"],Aa=S("div",{class:"form-header column is-12"},[S("h3",null,"Package's addons")],-1),$a={class:"column is-12"},Wa=S("label",null,"Curriculum (New)",-1),qa={class:"column is-6"},Ra=S("label",null,"Engder",-1),Ba={class:"multiselect-single-label"},za={class:"select-option-text"},Ha={class:"column is-6"},Ka=S("label",null,"Globish Plus",-1),Ya={class:"column is-6"},Ja=S("label",null,"Find My Coach",-1),Qa={class:"column is-6"},Xa=S("label",null,"Course (Mooc)",-1);b();var Za=I({props:{featureGroups:{type:Function,default:()=>[]},packageName:{type:String,default:""},formPackageInfo:{type:Object,default:void 0},loadingOptions:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},setup(e){const a=e,{getProducts:l,getCurriculums:o,getFmcPackages:n,getMoocCourses:t}=ae(),{user:r}=R(),g=P(!1),b=e=>{const a=parseInt(e)||0;return a>=0?a:0};v((()=>{var e;return null==(e=null==a?void 0:a.formPackageInfo)?void 0:e.type}),((e,l)=>{l&&(null==a?void 0:a.formPackageInfo)&&(a.formPackageInfo.globishLevel="")}));const I=Object.entries(K).map((([e,a])=>({key:e.replace(/_/g," "),value:a}))),E=Object.entries(Y).map((([e,a])=>({key:e.replace(/_/g," "),value:a}))),T=Object.values(J).map((e=>({key:e,value:e}))),A=Object.values(Q).map((e=>({key:"0"===e?"No installment":`${e} Month`,value:+e}))),$=Object.entries(X).map((([e,a])=>({key:e.replace(/_/g," "),value:a}))),W=Object.values(Z).map((e=>({key:e,value:e}))),q=[{key:"30 Minutes",value:1},{key:"1 Hour",value:2},{key:"1 Hour 30 Minutes",value:3}],H=e=>{!a.readonly&&a.formPackageInfo&&(a.formPackageInfo.provideStatus=e)};return(P,v)=>{const R=c,K=s,Y=u,J=d,Q=i,X=f,ae=y("Multiselect"),le=i,oe=m,Za=c,el=p,al=k,ll=h("tooltip");return _(),V("div",ne,[e.formPackageInfo?(_(),V("div",te,[re,S("div",ce,[C(K,null,{default:O((()=>[se,C(R,{icon:"lnil lnil-package"},{default:O((()=>[M(S("input",{"onUpdate:modelValue":v[0]||(v[0]=a=>e.formPackageInfo.packageName=a),type:"text",class:"input",placeholder:"Package name",disabled:e.readonly},null,8,ue),[[U,e.formPackageInfo.packageName]]),M(S("p",de," Package name is required. ",512),[[j,!e.formPackageInfo.packageName]])])),_:1})])),_:1})]),S("div",ie,[C(K,null,{default:O((()=>[fe,C(R,{icon:"lnil lnil-file-name"},{default:O((()=>[M(S("input",{"onUpdate:modelValue":v[1]||(v[1]=a=>e.formPackageInfo.packageNameInternal=a),type:"text",class:"input",placeholder:"Internal Package Name",disabled:e.readonly},null,8,me),[[U,e.formPackageInfo.packageNameInternal]])])),_:1})])),_:1})]),S("div",pe,[C(K,{class:"is-autocomplete-select"},{default:O((()=>[ke,C(R,{icon:"feather:search",loading:e.loadingOptions},{default:O((()=>[C(Y,{key:e.formPackageInfo.packageId,modelValue:e.formPackageInfo.productId,"onUpdate:modelValue":v[2]||(v[2]=a=>e.formPackageInfo.productId=a),"callback-search":N(l),readonly:e.readonly,"label-by":"name","value-prop":"id",placeholder:"Select or search product",onClear:v[3]||(v[3]=a=>e.formPackageInfo.productId=void 0)},null,8,["modelValue","callback-search","readonly"]),M(S("p",ge," Choose product for this package. ",512),[[j,!e.formPackageInfo.productId]])])),_:1},8,["loading"])])),_:1})]),S("div",be,[C(K,null,{default:O((()=>[Ie,C(R,null,{default:O((()=>[C(J,{modelValue:e.formPackageInfo.purchasable,"onUpdate:modelValue":v[4]||(v[4]=a=>e.formPackageInfo.purchasable=a),label:"Purchasable",color:"primary",disabled:e.readonly},null,8,["modelValue","disabled"])])),_:1})])),_:1})]),S("div",Pe,[C(K,null,{default:O((()=>[ve,M(C(Q,{color:"solid",label:"None"},null,512),[[ll,"ไม่แสดงหน้าเว็บ (ส่งลิ้งในการชำระเงินเท่านั้น)"]]),ye,M(C(Q,{color:"solid",label:"General"},null,512),[[ll,"แสดงหน้าเว็บ"]]),C(R,null,{default:O((()=>[C(X,{modelValue:e.formPackageInfo.status,"onUpdate:modelValue":v[5]||(v[5]=a=>e.formPackageInfo.status=a),value:"0",label:"None",name:"status_radio",color:"primary",square:"",disabled:e.readonly?e.readonly:void 0},null,8,["modelValue","disabled"]),C(X,{modelValue:e.formPackageInfo.status,"onUpdate:modelValue":v[6]||(v[6]=a=>e.formPackageInfo.status=a),value:"1",label:"General",name:"status_radio",color:"primary",square:"",disabled:e.readonly?e.readonly:void 0},null,8,["modelValue","disabled"])])),_:1})])),_:1})]),S("div",he,[C(K,null,{default:O((()=>[_e,C(R,null,{default:O((()=>[M(S("textarea",{"onUpdate:modelValue":v[7]||(v[7]=a=>e.formPackageInfo.detail=a),class:"textarea",rows:"2",placeholder:"Add detail...",disabled:e.readonly},null,8,Ve),[[U,e.formPackageInfo.detail]])])),_:1})])),_:1})]),S("div",Se,[C(K,null,{default:O((()=>[Ce,C(R,null,{default:O((()=>[M(S("textarea",{"onUpdate:modelValue":v[8]||(v[8]=a=>e.formPackageInfo.comment=a),class:"textarea",rows:"2",placeholder:"Add comment...",disabled:e.readonly},null,8,Oe),[[U,e.formPackageInfo.comment]])])),_:1})])),_:1})]),Me,S("div",Ue,[C(K,null,{default:O((()=>[S("label",null,"Price "+D(N(B)(a.formPackageInfo.price)),1),C(R,null,{default:O((()=>[C(K,{addons:""},{default:O((()=>[C(R,null,{default:O((()=>[je])),_:1}),C(R,{expanded:""},{default:O((()=>[M(S("input",{"onUpdate:modelValue":v[9]||(v[9]=e=>a.formPackageInfo.price=e),type:"number",class:"input",placeholder:"Amount...",disabled:e.readonly,onChange:v[10]||(v[10]=e=>a.formPackageInfo.price=b(a.formPackageInfo.price))},null,40,Ne),[[U,a.formPackageInfo.price]])])),_:1})])),_:1}),M(S("p",De," Price is must be positive number or zero. ",512),[[j,parseInt(`${e.formPackageInfo.price}`)<0]])])),_:1})])),_:1})]),S("div",Fe,[C(K,null,{default:O((()=>[S("label",null,"Before Discount "+D(N(B)(a.formPackageInfo.beforeDiscount)),1),C(R,null,{default:O((()=>[C(K,{addons:""},{default:O((()=>[C(R,null,{default:O((()=>[xe])),_:1}),C(R,{expanded:""},{default:O((()=>[M(S("input",{"onUpdate:modelValue":v[11]||(v[11]=e=>a.formPackageInfo.beforeDiscount=e),type:"number",class:"input",placeholder:"Amount...",disabled:e.readonly,onChange:v[12]||(v[12]=e=>a.formPackageInfo.beforeDiscount=b(a.formPackageInfo.beforeDiscount))},null,40,Ge),[[U,a.formPackageInfo.beforeDiscount]])])),_:1})])),_:1}),M(S("p",Le," BeforeDiscount must be positive number or zero. ",512),[[j,parseInt(`${e.formPackageInfo.beforeDiscount}`)<0]])])),_:1})])),_:1})]),S("div",we,[C(K,null,{default:O((()=>[Ee,C(R,null,{default:O((()=>[C(ae,{modelValue:e.formPackageInfo.installmentMonth,"onUpdate:modelValue":v[13]||(v[13]=a=>e.formPackageInfo.installmentMonth=a),placeholder:"Select or search installment",options:N(A),"track-by":"key","value-prop":"value",disabled:e.readonly,onClear:v[14]||(v[14]=a=>e.formPackageInfo.installment=void 0)},{singlelabel:O((({value:e})=>[S("div",Te,D(e.key),1)])),option:O((({option:e})=>[S("span",Ae,D(e.key),1)])),_:1},8,["modelValue","options","disabled"]),M(S("p",$e," Choose installment for this package. ",512),[[j,N(z)(e.formPackageInfo.installmentMonth)]])])),_:1})])),_:1})]),S("div",We,[C(K,null,{default:O((()=>[qe,C(R,null,{default:O((()=>[C(K,{addons:""},{default:O((()=>[C(R,{expanded:""},{default:O((()=>[M(S("input",{"onUpdate:modelValue":v[15]||(v[15]=a=>e.formPackageInfo.duration=a),type:"number",class:"input",placeholder:"duration...",disabled:e.readonly,onChange:v[16]||(v[16]=l=>e.formPackageInfo.duration=b(a.formPackageInfo.duration))},null,40,Re),[[U,e.formPackageInfo.duration]])])),_:1}),C(R,null,{default:O((()=>[Be])),_:1})])),_:1}),M(S("p",ze," Duration is required. ",512),[[j,N(z)(e.formPackageInfo.duration)]])])),_:1})])),_:1})]),S("div",He,[C(K,null,{default:O((()=>[Ke,C(R,{icon:"lnil lnil-ticket"},{default:O((()=>[M(S("input",{"onUpdate:modelValue":v[17]||(v[17]=a=>e.formPackageInfo.ticketOneOnOne=a),type:"number",class:"input",placeholder:"1 on 1 ticket...",disabled:e.readonly,onChange:v[18]||(v[18]=e=>a.formPackageInfo.ticketOneOnOne=b(a.formPackageInfo.ticketOneOnOne))},null,40,Ye),[[U,e.formPackageInfo.ticketOneOnOne]])])),_:1})])),_:1})]),S("div",Je,[C(K,null,{default:O((()=>[Qe,C(R,{icon:"lnil lnil-ticket"},{default:O((()=>[M(S("input",{"onUpdate:modelValue":v[19]||(v[19]=a=>e.formPackageInfo.ticketFreetalk=a),type:"number",class:"input",placeholder:"freetalk ticket...",disabled:e.readonly,onChange:v[20]||(v[20]=e=>a.formPackageInfo.ticketFreetalk=b(a.formPackageInfo.ticketFreetalk))},null,40,Xe),[[U,e.formPackageInfo.ticketFreetalk]])])),_:1})])),_:1})]),S("div",Ze,[C(K,null,{default:O((()=>[ea,C(R,{icon:"lnil lnil-ticket"},{default:O((()=>[M(S("input",{"onUpdate:modelValue":v[21]||(v[21]=a=>e.formPackageInfo.ticketGroup=a),type:"number",class:"input",placeholder:"group class ticket...",disabled:e.readonly,onChange:v[22]||(v[22]=e=>a.formPackageInfo.ticketGroup=b(a.formPackageInfo.ticketGroup))},null,40,aa),[[U,e.formPackageInfo.ticketGroup]])])),_:1})])),_:1})]),S("div",la,[C(K,null,{default:O((()=>[oa,C(R,{icon:"lnil lnil-ticket"},{default:O((()=>[M(S("input",{"onUpdate:modelValue":v[23]||(v[23]=a=>e.formPackageInfo.ticketMaster=a),type:"number",class:"input",placeholder:"master class ticket...",disabled:e.readonly,onChange:v[24]||(v[24]=e=>a.formPackageInfo.ticketMaster=b(a.formPackageInfo.ticketMaster))},null,40,na),[[U,e.formPackageInfo.ticketMaster]])])),_:1})])),_:1})]),S("div",ta,[C(K,null,{default:O((()=>[ra,C(R,null,{default:O((()=>[C(J,{modelValue:e.formPackageInfo.isSubscription,"onUpdate:modelValue":v[25]||(v[25]=a=>e.formPackageInfo.isSubscription=a),label:"Package Subscription",color:"primary",disabled:e.readonly},null,8,["modelValue","disabled"])])),_:1})])),_:1})]),S("div",ca,[C(K,null,{default:O((()=>[sa,C(R,{icon:"lnil lnil-ticket"},{default:O((()=>[M(S("input",{"onUpdate:modelValue":v[26]||(v[26]=a=>e.formPackageInfo.limitPerWeek=a),type:"number",class:"input",placeholder:"limit per week...",disabled:e.readonly||!e.formPackageInfo.isSubscription,onChange:v[27]||(v[27]=e=>a.formPackageInfo.limitPerWeek=b(a.formPackageInfo.limitPerWeek))},null,40,ua),[[U,e.formPackageInfo.limitPerWeek]])])),_:1})])),_:1})]),S("div",da,[C(K,null,{default:O((()=>[ia,C(R,{icon:"lnil lnil-ticket"},{default:O((()=>[M(S("input",{"onUpdate:modelValue":v[28]||(v[28]=a=>e.formPackageInfo.limitPerMonth=a),type:"number",class:"input",placeholder:"limit per month...",disabled:e.readonly||!e.formPackageInfo.isSubscription,onChange:v[29]||(v[29]=e=>a.formPackageInfo.limitPerMonth=b(a.formPackageInfo.limitPerMonth))},null,40,fa),[[U,e.formPackageInfo.limitPerMonth]])])),_:1})])),_:1})]),ma,S("div",pa,[C(K,null,{default:O((()=>[ka,C(R,null,{default:O((()=>[C(oe,null,{default:O((()=>[C(le,{color:e.formPackageInfo.provideStatus===N(ee).FREE?"primary":"solid",label:"Free",rounded:"",class:F(["m-2 chip",{"chip--active":e.formPackageInfo.provideStatus===N(ee).FREE,"chip--disabled":e.readonly}]),onClick:v[30]||(v[30]=e=>H(N(ee).FREE))},null,8,["color","class"]),C(le,{color:e.formPackageInfo.provideStatus===N(ee).PAID?"primary":"solid",label:"Paid",rounded:"",class:F(["m-2 chip",{"chip--active":e.formPackageInfo.provideStatus===N(ee).PAID,"chip--disabled":e.readonly}]),onClick:v[31]||(v[31]=e=>H(N(ee).PAID))},null,8,["color","class"])])),_:1})])),_:1})])),_:1})]),S("div",ga,[C(K,null,{default:O((()=>[ba,C(R,null,{default:O((()=>[C(ae,{modelValue:e.formPackageInfo.privateSlot,"onUpdate:modelValue":v[32]||(v[32]=a=>e.formPackageInfo.privateSlot=a),placeholder:"Select or search private class time",options:q,"track-by":"key","value-prop":"value",disabled:e.readonly,onClear:v[33]||(v[33]=a=>e.formPackageInfo.privateSlot=void 0)},{singlelabel:O((({value:e})=>[S("div",Ia,D(e.key),1)])),option:O((({option:e})=>[S("span",Pa,D(e.key),1)])),_:1},8,["modelValue","disabled"]),M(S("p",va," Choose private class time for this package. ",512),[[j,!e.formPackageInfo.privateSlot]])])),_:1})])),_:1})]),S("div",ya,[C(K,null,{default:O((()=>[ha,C(R,null,{default:O((()=>[(_(!0),V(x,null,G(N(W),((a,l)=>(_(),L(X,{key:l,modelValue:e.formPackageInfo.type,"onUpdate:modelValue":a=>e.formPackageInfo.type=a,value:a.value,label:a.key,name:a.key,color:"primary",square:"",disabled:e.readonly?e.readonly:void 0},null,8,["modelValue","onUpdate:modelValue","value","label","name","disabled"])))),128)),M(S("p",_a," Package type is required. ",512),[[j,!e.formPackageInfo.type]])])),_:1})])),_:1})]),S("div",Va,[C(K,null,{default:O((()=>[Sa,C(R,null,{default:O((()=>[C(ae,{key:e.formPackageInfo.type,modelValue:e.formPackageInfo.globishLevel,"onUpdate:modelValue":v[34]||(v[34]=a=>e.formPackageInfo.globishLevel=a),placeholder:"Select or search globish level",options:e.formPackageInfo.type===N(Z).KIDS?N(I):N(E),"track-by":"key","value-prop":"value",disabled:e.readonly,onClear:v[35]||(v[35]=a=>e.formPackageInfo.globishLevel=void 0)},{singlelabel:O((({value:e})=>[S("div",Ca,D(e.key),1)])),option:O((({option:e})=>[S("span",Oa,D(e.key),1)])),_:1},8,["modelValue","options","disabled"])])),_:1})])),_:1})]),S("div",Ma,[C(K,null,{default:O((()=>[Ua,C(R,null,{default:O((()=>[C(ae,{modelValue:e.formPackageInfo.cefrLevel,"onUpdate:modelValue":v[36]||(v[36]=a=>e.formPackageInfo.cefrLevel=a),placeholder:"Select or search CEFR level",options:N(T),"track-by":"key","value-prop":"value",disabled:e.readonly,onClear:v[37]||(v[37]=a=>e.formPackageInfo.cefrLevel=void 0)},{singlelabel:O((({value:e})=>[S("div",ja,D(e.key),1)])),option:O((({option:e})=>[S("span",Na,D(e.key),1)])),_:1},8,["modelValue","options","disabled"])])),_:1})])),_:1})]),S("div",Da,[C(K,null,{default:O((()=>[Fa,C(R,null,{default:O((()=>[C(ae,{modelValue:e.formPackageInfo.country,"onUpdate:modelValue":v[38]||(v[38]=a=>e.formPackageInfo.country=a),options:N(r).manageCountry,placeholder:"Select your country","can-clear":!1,disabled:e.readonly},null,8,["modelValue","options","disabled"]),M(S("p",xa," Choose country for this package. ",512),[[j,!e.formPackageInfo.country]])])),_:1})])),_:1})]),S("div",Ga,[S("div",La,[S("img",{class:"py-4 img-size",src:e.formPackageInfo.photo,alt:"photo"},null,8,wa)]),C(K,null,{default:O((()=>[Ea,C(R,null,{default:O((()=>[C(K,{addons:""},{default:O((()=>[C(R,{icon:"lnil lnil-link-alt",expanded:""},{default:O((()=>[M(S("input",{"onUpdate:modelValue":v[39]||(v[39]=a=>e.formPackageInfo.photo=a),type:"text",class:"input",placeholder:"Photo URL...",disabled:e.readonly},null,8,Ta),[[U,e.formPackageInfo.photo]])])),_:1}),C(Za,null,{default:O((()=>[S("a",{class:"button is-primary",onClick:v[40]||(v[40]=a=>g.value=!e.readonly&&!0)},"Media")])),_:1})])),_:1}),C(el,{modelValue:g.value,"onUpdate:modelValue":v[41]||(v[41]=e=>g.value=e),onSubmit:v[42]||(v[42]=a=>e.formPackageInfo.photo=a.src)},null,8,["modelValue"])])),_:1})])),_:1})]),Aa,S("div",$a,[C(K,null,{default:O((()=>[Wa,C(R,null,{default:O((()=>[C(Y,{key:e.formPackageInfo.packageId,modelValue:e.formPackageInfo.curriculumId,"onUpdate:modelValue":v[43]||(v[43]=a=>e.formPackageInfo.curriculumId=a),"callback-search":N(o),readonly:e.readonly,"label-by":"name","value-prop":"id",placeholder:"Select or search curriculum",onClear:v[44]||(v[44]=a=>e.formPackageInfo.curriculumId=null)},null,8,["modelValue","callback-search","readonly"])])),_:1})])),_:1})]),S("div",qa,[C(K,null,{default:O((()=>[Ra,C(R,null,{default:O((()=>[C(ae,{modelValue:e.formPackageInfo.engder,"onUpdate:modelValue":v[45]||(v[45]=a=>e.formPackageInfo.engder=a),placeholder:"Select or search package engder",options:N($),"track-by":"key","value-prop":"value",disabled:e.readonly},{singlelabel:O((({value:e})=>[S("div",Ba,D(e.key),1)])),option:O((({option:e})=>[S("span",za,D(e.key),1)])),_:1},8,["modelValue","options","disabled"])])),_:1})])),_:1})]),S("div",Ha,[C(K,null,{default:O((()=>[Ka,C(R,null,{default:O((()=>[C(al,{modelValue:e.formPackageInfo.featureGroupId,"onUpdate:modelValue":v[46]||(v[46]=a=>e.formPackageInfo.featureGroupId=a),disabled:e.readonly},null,8,["modelValue","disabled"])])),_:1})])),_:1})]),S("div",Ya,[C(K,null,{default:O((()=>[Ja,C(R,{"has-error":!1},{default:O((()=>[C(Y,{key:e.formPackageInfo.packageId,modelValue:e.formPackageInfo.findMycoachId,"onUpdate:modelValue":v[47]||(v[47]=a=>e.formPackageInfo.findMycoachId=a),"callback-search":N(n),readonly:e.readonly,"label-by":"packageName","value-prop":"id",placeholder:"Select or search find by coach",onClear:v[48]||(v[48]=a=>e.formPackageInfo.findMycoachId=null)},null,8,["modelValue","callback-search","readonly"])])),_:1})])),_:1})]),S("div",Qa,[C(K,null,{default:O((()=>[Xa,C(R,null,{default:O((()=>[C(Y,{key:e.formPackageInfo.packageId,modelValue:e.formPackageInfo.moocCourseId,"onUpdate:modelValue":v[49]||(v[49]=a=>e.formPackageInfo.moocCourseId=a),"callback-search":N(t),readonly:e.readonly,"label-by":"title","value-prop":"id",placeholder:"Select or search mooc course",onClear:v[50]||(v[50]=a=>e.formPackageInfo.moocCourseId=null)},null,8,["modelValue","callback-search","readonly"])])),_:1})])),_:1})])])):w("",!0)])}}});function el(){const{getPackageById:e,createPackage:c,updatePackage:s}=oe(),u=E(),d=T(),i=A({formPackageInfo:{packageId:void 0,packageNameInternal:"",purchasable:!1,packageName:"",productId:NaN,comment:"",status:"0",detail:"",installmentMonth:void 0,beforeDiscount:void 0,ticketFreetalk:void 0,ticketOneOnOne:void 0,ticketMaster:void 0,ticketGroup:void 0,duration:void 0,price:void 0,isSubscription:!1,limitPerWeek:void 0,limitPerMonth:void 0,globishLevel:void 0,privateSlot:void 0,cefrLevel:void 0,photo:"",type:"",country:"",provideStatus:null,curriculumSheet:"",featureGroupId:void 0,findMycoachId:void 0,moocCourseId:void 0,curriculumId:void 0,engder:void 0},notFoundPackage:!1,editable:!1}),f=$((()=>z(i.formPackageInfo.installmentMonth)||z(i.formPackageInfo.duration)||!i.formPackageInfo.country||!i.formPackageInfo.packageName||!i.formPackageInfo.privateSlot||!i.formPackageInfo.productId||!i.formPackageInfo.type));return W((()=>{"products-packages-create"!==u.name?(async()=>{const a=parseInt(u.params.id),l=await e(a);l?i.formPackageInfo={packageNameInternal:l.packageNameInternal,installmentMonth:`${l.installmentMonth}`,curriculumSheet:l.curriculumSheet||null,beforeDiscount:parseInt(`${l.beforeDiscount}`)||0,featureGroupId:l.featureGroupId||null,ticketFreetalk:l.freeTalkTicket||0,ticketOneOnOne:l.ticket||0,isSubscription:!!l.isSubscription,provideStatus:l.provideStatus||null,limitPerMonth:l.limitPerMonth,findMycoachId:l.fmcId||null,limitPerWeek:l.limitPerWeek,ticketMaster:l.masterClassTicket||0,globishLevel:l.globishLevel,curriculumId:l.curriculumId||null,moocCourseId:l.courseId||null,ticketGroup:l.groupClassTicket||0,privateSlot:l.privateSlot,packageName:l.packageName,purchasable:l.purchasable===le.YES,productId:l.productInfo.id,cefrLevel:l.cefrLevel||null,packageId:l.id,duration:parseInt(`${l.duration}`)||0,comment:l.comment,status:`${l.status}`,engder:l.engder||null,detail:l.detail,country:l.country,price:parseInt(`${l.price}`)||0,photo:l.photo||null,type:l.type||"none"}:i.notFoundPackage=!0})():i.editable=!0,"#edit"===u.hash&&(i.editable=!0)})),m=((e,a)=>{for(var l in a||(a={}))n.call(a,l)&&r(e,l,a[l]);if(o)for(var l of o(a))t.call(a,l)&&r(e,l,a[l]);return e})({},q(i)),a(m,l({disabledDone:f,onSavePackage:async()=>{const e=await c(i.formPackageInfo);H(e,"Package was created!"),d.push({params:{id:`${e.data.id}`},name:"products-packages-:id"})},onEditPackage:async()=>{const e=await s(i.formPackageInfo);H(e,"Package was updated!"),d.push({params:{id:`${e.data.id}`},name:"products-packages-:id"})}}));var m}Za.__scopeId="data-v-2d3ff0ec";export{Za as _,el as u};