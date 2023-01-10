var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(a,l,i)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[l]=i,o=(e,a)=>{for(var l in a||(a={}))t.call(a,l)&&d(e,l,a[l]);if(i)for(var l of i(a))s.call(a,l)&&d(e,l,a[l]);return e};import{c as n,o as r}from"./index.d7dc1ff6.js";import{_ as c,a as u}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{_ as p}from"./ModalFileManager.vue_vue&type=script&setup=true&lang.3ed79754.js";import{p as f,a as v,d as m,r as y,E as b,o as g,e as P,h as V,x as h,F as S,K as k,ai as j,g as x,i as _,y as F,G as w,b as A,A as O,q,k as U,Y as C,ae as E,T as I,n as B,t as L}from"./vendor.1c8b4573.js";import{l as M}from"./lodash.0a1ccad5.js";import{P as T,a as D,u as N}from"./podcast.enum.beb81859.js";import"./FileManager.643166ab.js";import"./VPlaceholderPage.vue_vue&type=script&setup=true&lang.e3e86478.js";import"./index.8f8d8101.js";import"./useNotyf.ddf08f06.js";import"./VIconBox.vue_vue&type=script&setup=true&lang.7bffdb35.js";import"./VLoader.vue_vue&type=script&setup=true&lang.a96d7daf.js";import"./VModal.31b4f4ba.js";import"./search-4-dark.fb3880a5.js";import"./text.helper.174bd8fa.js";f("data-v-5fc6c3cf");const R={class:"form-fieldset"},G={class:"columns is-multiline"},Y={class:"column is-12"},K={controls:"",class:"mr-5"},z=["src"],H=w(" Your browser does not support the audio element. "),J=w(" Open Transcript "),Q={class:"column is-12"},W={class:"field"},X=V("label",null,[w("Title"),V("span",{class:"red"}," * ")],-1),Z={class:"control"},$=["readonly"],ee={class:"column is-12"},ae={class:"field"},le=V("label",null,"Detail",-1),ie={class:"control"},te=["readonly"],se={class:"column is-6"},de={class:"field"},oe=V("label",null,[w("Status "),V("span",{class:"red"}," * ")],-1),ne={class:"control"},re={class:"column is-6"},ce={class:"field"},ue=V("label",null,[w("Level "),V("span",{class:"red"}," * ")],-1),pe={class:"control"},fe={class:"column is-12"},ve=V("label",null,[w("Audio "),V("span",{class:"red"}," * ")],-1),me={key:0,class:"validate"},ye=["readonly"],be={class:"column is-12"},ge=V("label",null,[w("Transcript "),V("span",{class:"red"}," * ")],-1),Pe={key:0,class:"validate"},Ve=["readonly"],he={class:"column is-12"},Se={class:"field"},ke=V("label",null,[w("Script Page"),V("span",{class:"red"}," * ")],-1),je={class:"control"},xe=["readonly"];v();var _e=m({props:{data:{type:Object,required:!0},id:{type:Number,default:void 0,required:!1},readonly:{type:Boolean,default:!1,required:!1},addOn:{type:Object,required:!0}},setup(e){const a=e,l=y(!1),i=y(!1),t=M.exports.toArray(T),s=M.exports.toArray(D);return(d,o)=>{const r=n,f=b("Multiselect"),v=c,m=c,y=u,w=p;return g(),P("div",R,[V("div",G,[V("div",Y,[(g(),P("div",{key:e.data.file,class:"is-flex is-justify-content-flex-end pt-4"},[V("audio",K,[V("source",{src:e.data.file},null,8,z),H]),h(r,{href:e.data.script,color:"primary",icon:"fas fa-external-link-alt",disabled:!e.data.script,target:"_blank"},{default:S((()=>[J])),_:1},8,["href","disabled"])]))]),V("div",Q,[V("div",W,[X,V("div",Z,[k(V("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>e.data.title=a),type:"text",class:"input",placeholder:"fill title...",readonly:null==a?void 0:a.readonly},null,8,$),[[j,e.data.title]])])])]),V("div",ee,[V("div",ae,[le,V("div",ie,[k(V("textarea",{"onUpdate:modelValue":o[1]||(o[1]=a=>e.data.detail=a),type:"textarea",class:"textarea is-primary-focus",rows:"4",placeholder:"detail",readonly:null==a?void 0:a.readonly},null,8,te),[[j,e.data.detail]])])])]),V("div",se,[V("div",de,[oe,V("div",ne,[h(f,{modelValue:e.data.status,"onUpdate:modelValue":o[2]||(o[2]=a=>e.data.status=a),options:x(t),placeholder:"select a status","value-prop":"id","track-by":"name",label:"name",disabled:null==a?void 0:a.readonly},null,8,["modelValue","options","disabled"])])])]),V("div",re,[V("div",ce,[ue,V("div",pe,[h(f,{modelValue:e.data.level,"onUpdate:modelValue":o[3]||(o[3]=a=>e.data.level=a),options:x(s),placeholder:"select a level","value-prop":"id","track-by":"name",label:"name",disabled:null==a?void 0:a.readonly},null,8,["modelValue","options","disabled"])])])]),V("div",fe,[h(y,null,{default:S((()=>[ve,e.data.isAudioValidFile||void 0===e.data.isAudioValidFile?_("",!0):(g(),P("span",me," Please select only Audio file ")),h(v,null,{default:S((()=>[h(y,{addons:""},{default:S((()=>[h(v,{icon:"lnil lnil-link-alt",expanded:""},{default:S((()=>[k(V("input",{"onUpdate:modelValue":o[4]||(o[4]=a=>e.data.file=a),type:"text",class:"input",placeholder:"Audio URL...",readonly:null==a?void 0:a.readonly},null,8,ye),[[j,e.data.file]])])),_:1}),(null==a?void 0:a.readonly)?_("",!0):(g(),F(m,{key:0},{default:S((()=>[V("a",{class:"button is-primary",onClick:o[5]||(o[5]=e=>l.value=!(null==a?void 0:a.readonly)&&!0)},"Select")])),_:1}))])),_:1}),h(w,{modelValue:l.value,"onUpdate:modelValue":o[6]||(o[6]=e=>l.value=e),onSubmit:e.addOn.selectAudio},null,8,["modelValue","onSubmit"])])),_:1})])),_:1})]),V("div",be,[h(y,null,{default:S((()=>[ge,e.data.isScriptValidFile||void 0===e.data.isScriptValidFile?_("",!0):(g(),P("span",Pe," Please select only PDF file ")),h(v,null,{default:S((()=>[h(y,{addons:""},{default:S((()=>[h(v,{icon:"lnil lnil-link-alt",expanded:""},{default:S((()=>[k(V("input",{"onUpdate:modelValue":o[7]||(o[7]=a=>e.data.script=a),type:"text",class:"input",placeholder:"Transcript URL...",readonly:null==a?void 0:a.readonly},null,8,Ve),[[j,e.data.script]])])),_:1}),(null==a?void 0:a.readonly)?_("",!0):(g(),F(m,{key:0},{default:S((()=>[V("a",{class:"button is-primary",onClick:o[8]||(o[8]=e=>i.value=!(null==a?void 0:a.readonly)&&!0)},"Select")])),_:1}))])),_:1}),h(w,{modelValue:i.value,"onUpdate:modelValue":o[9]||(o[9]=e=>i.value=e),onSubmit:e.addOn.selectScript},null,8,["modelValue","onSubmit"])])),_:1})])),_:1})]),V("div",he,[V("div",Se,[ke,V("div",je,[k(V("input",{"onUpdate:modelValue":o[10]||(o[10]=a=>e.data.scriptPage=a),type:"number",class:"input",placeholder:"fill script page...",readonly:null==a?void 0:a.readonly,min:"1",onChange:o[11]||(o[11]=(...a)=>e.addOn.autoFixScriptPage&&e.addOn.autoFixScriptPage(...a))},null,40,xe),[[j,e.data.scriptPage]])])])])])])}}});function Fe(){const{createPodcast:e,updatePodcast:i,getPodcastById:t}=N(),s=A(),d=O(),n=d.params.id,c=q({id:void 0,readonly:!1,info:{title:"",detail:"",file:"",status:T.DISABLE,level:D.BEGINNER,script:"",scriptPage:1,isScriptValidFile:void 0,isAudioValidFile:void 0}}),u=U((()=>!(c.info.title&&c.info.file&&c.info.status&&c.info.level&&c.info.script&&c.info.scriptPage))),p=async()=>{const e=await t(+n);c.id=e.id,c.info.title=e.title,c.info.detail=e.detail,c.info.file=e.file,c.info.status=e.status,c.info.level=e.level,c.info.script=e.script,c.info.scriptPage=e.scriptPage,c.info.isScriptValidFile=!0,c.info.isAudioValidFile=!0};return C((async()=>{const e=d.hash,a=d.params;"new"!=(null==a?void 0:a.id)&&(await p(),c.readonly="#edit"!==e)})),f=o({},E(c)),a(f,l({disabledSave:u,setStateInfo:p,onSavePodcast:async()=>{const a={title:c.info.title,detail:c.info.detail,file:c.info.file,status:c.info.status,level:c.info.level,script:c.info.script,scriptPage:c.info.scriptPage},l=c.id?await i(o({id:c.id},a)):await e(a);l.error?r(l,"Podcast was not saved!"):(r(l,"Podcast was saved!"),s.push({name:"e-learning-podcasts",query:o({},d.query)}))},autoFixScriptPage:()=>{c.info.scriptPage<1&&(c.info.scriptPage=1)},selectScript:e=>{const a=d.params;c.info.isScriptValidFile="application/pdf"===e.type,c.info.isScriptValidFile?c.info.script=e.src:"new"==(null==a?void 0:a.id)&&(c.info.script="")},selectAudio:e=>{const a=d.params;c.info.isAudioValidFile=e.type.includes("audio"),c.info.isAudioValidFile?c.info.file=e.src:"new"==(null==a?void 0:a.id)&&(c.info.file="")}}));var f}_e.__scopeId="data-v-5fc6c3cf";const we={class:"page-content-inner"},Ae={class:"form-layout"},Oe={class:"form-outer"},qe={class:"form-header-inner"},Ue={class:"left"},Ce={class:"right"},Ee={class:"buttons"},Ie=w(" Back "),Be=w("Save"),Le=w("Edit"),Me={class:"form-body"};var Te=m({setup(e){const{y:a}=I(),l=A(),i=O(),{id:t,info:s,readonly:d,disabledSave:r,onSavePodcast:c,autoFixScriptPage:u,selectAudio:p,selectScript:f}=Fe(),v=U((()=>a.value>30)),m=()=>{l.push({name:"e-learning-podcasts",query:o({},i.query)})},y=()=>{l.push({name:"e-learning-podcasts-:id",query:o({},i.query),params:{id:i.params.id},hash:"#edit"})},b=i.hash,k=i.params,j="new"===(null==k?void 0:k.id)?"Create Podcast":"#edit"===b?"Edit Podcast":"View Podcast";return(e,a)=>{const l=n,i=_e;return g(),P("div",we,[V("form",Ae,[V("div",Oe,[V("div",{class:B([[x(v)&&"is-stuck"],"form-header stuck-header"])},[V("div",qe,[V("div",Ue,[V("h3",null,L(x(j)),1)]),V("div",Ce,[V("div",Ee,[h(l,{icon:"lnir lnir-arrow-left rem-100",class:"custom-btn","dark-outlined":"",light:"",onClick:m},{default:S((()=>[Ie])),_:1}),x(d)?(g(),F(l,{key:1,icon:"lnir lnir-pencil rem-100",color:"primary",raised:"",onClick:y},{default:S((()=>[Le])),_:1})):(g(),F(l,{key:0,icon:"lnir lnir-save rem-100",color:"primary",raised:"",disabled:x(r),onClick:x(c)},{default:S((()=>[Be])),_:1},8,["disabled","onClick"]))])])])],2),V("div",Me,[h(i,{id:x(t),data:x(s),readonly:x(d),"add-on":{selectAudio:x(p),selectScript:x(f),autoFixScriptPage:x(u)}},null,8,["id","data","readonly","add-on"])])])])])}}});export default Te;