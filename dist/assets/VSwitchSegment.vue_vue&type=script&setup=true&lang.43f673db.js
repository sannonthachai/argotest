import{d as e,o as l,e as a,t as s,i as t,h as r,ao as o,n as i}from"./vendor.1c8b4573.js";const d={class:"switch-segment"},u=["checked"],c=r("i",{"aria-hidden":"true"},null,-1);let n=0;var b=e({props:{modelValue:{type:Boolean,required:!1,default:!1},labelTrue:{type:String,required:!1,default:void 0},labelFalse:{type:String,required:!1,default:void 0},color:{type:String,required:!1,default:void 0}},emits:["update:modelValue"],setup(e,{emit:b}){const p=e,m="segment-switch-"+ ++n;return(e,n)=>(l(),a("div",d,[p.labelFalse?(l(),a("label",{key:0,class:"is-label",for:m},s(p.labelFalse),1)):t("",!0),r("label",{for:m,class:i(["form-switch",[p.color&&`is-${p.color}`]])},[r("input",o({id:m,checked:p.modelValue},e.$attrs,{type:"checkbox",class:"is-switch",onChange:n[0]||(n[0]=e=>b("update:modelValue",!p.modelValue))}),null,16,u),c],2),p.labelTrue?(l(),a("label",{key:1,class:"is-label",for:m},s(p.labelTrue),1)):t("",!0)]))}});export{b as _};
