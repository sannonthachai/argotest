import{d as e,o as r,e as a,n as s,h as d,i,f as t}from"./vendor.1c8b4573.js";var o=e({props:{size:{type:String,required:!1,default:void 0},card:{type:String,required:!1,default:void 0},active:{type:Boolean,required:!1},grey:{type:Boolean,required:!1},translucent:{type:Boolean,required:!1}},setup(e){const o=e;return(l,c)=>(r(),a("div",{class:s(["has-loader",[o.active&&"has-loader-active"]])},[o.active?(r(),a("div",{key:0,class:s(["v-loader-wrapper is-active",[e.grey&&"is-grey",e.translucent&&"is-translucent","regular"===e.card&&"s-card","smooth"===e.card&&"r-card","rounded"===e.card&&"l-card"]])},[d("div",{class:s(["loader is-loading",[o.size&&`is-${o.size}`]])},null,2)],2)):i("",!0),t(l.$slots,"default")],2))}});export{o as _};
