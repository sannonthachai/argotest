var e=Object.defineProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(a,r,o)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[r]=o,l=(e,l)=>{for(var n in l||(l={}))r.call(l,n)&&s(e,n,l[n]);if(a)for(var n of a(l))o.call(l,n)&&s(e,n,l[n]);return e};import{c as n}from"./index.d7dc1ff6.js";import{u as t,_ as i}from"./useCoachLevelInfo.94d08504.js";import{d as c,T as d,b as u,A as f,k as v,o as m,e as p,h as y,n as b,g as h,t as k,x as C,F as g,y as j,G as O}from"./vendor.1c8b4573.js";import"./useCoachApi.4bab1366.js";const S={class:"page-content-inner"},w={class:"form-layout"},x={class:"form-outer"},E={class:"form-header-inner"},I={class:"left"},L={class:"right"},_={class:"buttons"},F=O(" Back "),P=O("Edit"),q=O("Save"),A={class:"form-body"};var B=c({setup(e){const{y:a}=d(),r=u(),o=f(),{id:s,readonly:c,onSaving:O,info:B,disabledSave:G,onSaveCoachLevel:M,onEditMode:T,setStateInfo:V,clearStateInfo:z,autoFixOrders:D}=t(),H=v((()=>a.value>30)),J=()=>{r.push({name:"coaches-levels",query:l({},o.query)})};return(e,a)=>{const r=n,o=i;return m(),p("div",S,[y("form",w,[y("div",x,[y("div",{class:b([[h(H)&&"is-stuck"],"form-header stuck-header"])},[y("div",E,[y("div",I,[y("h3",null,k(h(c)?"View Coach Level":"Edit Coach Level"),1)]),y("div",L,[y("div",_,[C(r,{icon:"lnir lnir-arrow-left rem-100",class:"custom-btn","dark-outlined":"",light:"",onClick:J},{default:g((()=>[F])),_:1}),h(c)?(m(),j(r,{key:0,icon:"lnir lnir-pencil rem-100",color:"primary",raised:"",onClick:h(T)},{default:g((()=>[P])),_:1},8,["onClick"])):(m(),j(r,{key:1,icon:"lnir lnir-save rem-100",color:"primary",loading:h(O),raised:"",onClick:h(M)},{default:g((()=>[q])),_:1},8,["loading","onClick"]))])])])],2),y("div",A,[C(o,{data:h(B),readonly:h(c),"add-on":{autoFixOrders:h(D)}},null,8,["data","readonly","add-on"])])])])])}}});export default B;
