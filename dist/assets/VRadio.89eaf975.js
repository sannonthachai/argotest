import{p as e,a,d as l,k as d,o,e as s,h as r,ao as u,g as t,G as i,t as n,n as p}from"./vendor.1c8b4573.js";e("data-v-806d2198");const m=["checked","value","name"],v=r("span",null,null,-1);a();var c=l({props:{value:{type:[String,Number,Boolean],required:!0},modelValue:{type:[String,Number,Boolean],required:!1,default:void 0},name:{type:String,required:!0},label:{type:String,required:!1,default:void 0},color:{type:String,required:!1,default:void 0},square:{type:Boolean,required:!1},solid:{type:Boolean,required:!1},paddingless:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,c=d((()=>l.value===l.modelValue));function q(){a("update:modelValue",l.value)}return(e,a)=>(o(),s("label",{class:p(["radio",[l.solid?"is-solid":"is-outlined",l.square&&"is-square",l.color&&`is-${l.color}`,l.paddingless&&"is-paddingless"]])},[r("input",u({type:"radio",checked:t(c),value:l.value,name:l.name},e.$attrs,{onChange:q}),null,16,m),v,i(" "+n(l.label||l.value),1)],2))}});c.__scopeId="data-v-806d2198";export{c as _};