import{d as s,E as a,o as t,e as i,x as e,F as l,h as c,G as o,t as n,i as d,p as u,a as r}from"./vendor.1c8b4573.js";u("data-v-cabcd00c");const p={class:"columns is-multiline mt-1"},v={key:0,class:"column is-6"},m=c("h2",{class:"title is-6 is-narrow is-bold"},"Topic",-1),b={class:"topic-link"},f=c("i",{class:"fas fa-link"},null,-1),k={class:"column is-3"},h=c("h2",{class:"title is-6 is-narrow is-bold"},"Score",-1),q={key:1,class:"column is-3"},w=c("h2",{class:"title is-6 is-narrow is-bold"},"Status",-1);r();var y=s({props:{event:{type:Object,required:!0}},setup:s=>(u,r)=>{const y=a("RouterLink");return t(),i("div",p,[s.event.topic?(t(),i("div",v,[m,e(y,{to:{name:"quizzes-submits-:id",params:{id:`${s.event.detail.quizSubmitId}`}}},{default:l((()=>[c("p",b,[o(n(s.event.topic)+" ",1),f])])),_:1},8,["to"])])):d("",!0),c("div",k,[h,c("p",null,n(s.event.detail.score),1)]),s.event.detail.status?(t(),i("div",q,[w,c("p",null,n(s.event.detail.status),1)])):d("",!0)])}});y.__scopeId="data-v-cabcd00c";export default y;