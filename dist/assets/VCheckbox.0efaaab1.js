import{p as e,a,d as l,k as d,o as s,e as u,h as o,ao as t,g as i,G as r,t as n,n as c}from"./vendor.1c8b4573.js";e("data-v-a935d010");const p=["checked","value"],v=o("span",null,null,-1);a();var f=l({props:{value:{type:[String,Number],required:!1,default:void 0},label:{type:String,required:!1,default:void 0},color:{type:String,required:!1,default:void 0},modelValue:{type:Array,required:!1,default:()=>[]},circle:{type:Boolean,required:!1,default:!1},solid:{type:Boolean,required:!1,default:!1},paddingless:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,f=d((()=>l.modelValue.includes(l.value)));function m(){const e=[...l.modelValue];f.value?e.splice(e.indexOf(l.value),1):e.push(l.value),a("update:modelValue",e)}return(e,a)=>(s(),u("label",{class:c(["checkbox",[l.solid?"is-solid":"is-outlined",l.circle&&"is-circle",l.color&&`is-${l.color}`,l.paddingless&&"is-paddingless"]])},[o("input",t({type:"checkbox",checked:i(f),value:l.value},e.$attrs,{onChange:m}),null,16,p),v,r(" "+n(l.label),1)],2))}});f.__scopeId="data-v-a935d010";export{f as _};