import{d as r,k as e,o as a,e as s,f as d,n as o,g as t}from"./vendor.1c8b4573.js";var i=r({props:{radius:{type:String,required:!1,default:void 0},color:{type:String,required:!1,default:void 0},elevated:{type:Boolean,required:!1,default:!1}},setup(r){const i=r,l=e((()=>"smooth"===i.radius?"s-card":"rounded"===i.radius?"l-card":"r-card"));return(e,u)=>(a(),s("div",{class:o([t(l),r.elevated&&"is-raised",i.color&&`is-${i.color}`])},[d(e.$slots,"default")],2))}});export{i as _};