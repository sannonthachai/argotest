import{b as e}from"./index.d7dc1ff6.js";import{p as a,a as s,d as o,r as t,o as l,e as n,h as c,t as r,f as i,y as p,i as v,n as d}from"./vendor.1c8b4573.js";a("data-v-4863c3a9");const h=["open"],u={class:"is-flex has-text-start gap-2"},f={class:"collapse-icon"},y={class:"collapse-content"};s();var m=o({props:{title:{type:String,required:!0},open:{type:Boolean,default:!1},withChevron:{type:Boolean,default:!1}},setup(a){const s=a,o=t(s.open),m=t(s.title);return(s,t)=>{const w=e;return l(),n("details",{class:d([[a.withChevron&&"has-chevron",!a.withChevron&&"has-plus",o.value&&"is-active"],"collapse"]),open:o.value},[c("summary",{class:"collapse-header",onClick:t[0]||(t[0]=()=>{o.value?o.value=void 0:o.value=!0})},[c("div",u,[c("h1",null,r(m.value),1),i(s.$slots,"collapse-status",{},void 0,!0)]),c("div",f,[a.withChevron?(l(),p(w,{key:0,icon:"feather:chevron-down"})):a.withChevron?v("",!0):(l(),p(w,{key:1,icon:"feather:plus"}))])]),c("div",y,[i(s.$slots,"collapse-content",{},void 0,!0)])],10,h)}}});m.__scopeId="data-v-4863c3a9";export{m as _};
