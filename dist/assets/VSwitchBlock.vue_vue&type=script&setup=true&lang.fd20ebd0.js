import{d as e,o as l,e as a,n as t,h as o,ao as s,t as i,i as c}from"./vendor.1c8b4573.js";const d=["checked"],r=o("div",{class:"slider"},null,-1),u=["checked"],n=o("i",{"aria-hidden":"true"},null,-1),h={key:2,class:"text"};let p=0;var b=e({props:{modelValue:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:void 0},color:{type:String,required:!1,default:void 0},thin:{type:Boolean,required:!1}},emits:["update:modelValue"],setup(e,{emit:b}){const m=e,k="block-switch-"+ ++p;return(e,p)=>(l(),a("div",{class:t([m.label&&"switch-block",m.thin&&m.label&&"thin-switch-block"])},[m.thin?(l(),a("label",{key:0,for:k,class:t(["thin-switch",[m.color&&`is-${m.color}`]])},[o("input",s({id:k,checked:m.modelValue,class:"input",type:"checkbox"},e.$attrs,{onChange:p[0]||(p[0]=e=>b("update:modelValue",!m.modelValue))}),null,16,d),r],2)):(l(),a("label",{key:1,for:k,class:t(["form-switch",[m.color&&`is-${m.color}`]])},[o("input",s({id:k,checked:m.modelValue,type:"checkbox",class:"is-switch"},e.$attrs,{onChange:p[1]||(p[1]=e=>b("update:modelValue",!m.modelValue))}),null,16,u),n],2)),m.label?(l(),a("div",h,[o("label",{for:k},[o("span",null,i(m.label),1)])])):c("",!0)],2))}});export{b as _};
