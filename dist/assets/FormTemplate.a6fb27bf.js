import{p as s,a as t,d as a,T as e,k as l,o,e as i,h as d,n as r,g as u,f as c,t as v,i as f}from"./vendor.1c8b4573.js";s("data-v-94c47028");const n={class:"form-layout"},p={class:"form-outer"},b={class:"form-header-inner"},y={class:"left"},k={key:0},h={key:1},m={class:"right"},$={class:"buttons"},g={class:"form-body"};t();var S=a({props:{title:{type:String,default:""},subtitle:{type:String,default:""},isStuckHeader:{type:Boolean,default:!0}},setup(s){const t=s,{y:a}=e(),S=l((()=>a.value>30&&t.isStuckHeader));return(t,a)=>(o(),i("div",n,[d("div",p,[d("div",{class:r([[u(S)&&"is-stuck"],"form-header stuck-header"])},[d("div",b,[d("div",y,[c(t.$slots,"title",{},void 0,!0),t.$slots.title?f("",!0):(o(),i("h3",k,v(s.title),1)),s.subtitle?(o(),i("h5",h,v(s.subtitle),1)):t.$slots.subtitle?c(t.$slots,"subtitle",{key:2},void 0,!0):f("",!0)]),d("div",m,[d("div",$,[c(t.$slots,"buttons",{},void 0,!0)])])])],2),d("div",g,[c(t.$slots,"default",{},void 0,!0)])])]))}});S.__scopeId="data-v-94c47028";export{S as _};