var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,i=(e,a)=>{for(var t in a||(a={}))r.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))l.call(a,t)&&o(e,t,a[t]);return e},c=(e,s)=>a(e,t(s));import{_ as u,a as n}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{p as d,l as p,c as m,h as b}from"./index.d7dc1ff6.js";import{_ as f}from"./VTag.vue_vue&type=script&setup=true&lang.b31af8ee.js";import{_ as v}from"./Datatable.aae3ef08.js";import{q as h,A as y,b as g,Y as P,ae as j,d as k,X as _,E as w,o as O,e as V,x,au as q,g as C,F as E,h as L,K as A,ak as S,O as D,G as I,t as T,y as F,i as N,p as G,a as H}from"./vendor.1c8b4573.js";import{P as R}from"./product.enum.768ca89a.js";import{u as Y}from"./useProductApi.78c03a90.js";import{u as $}from"./usePaginationRoute.780ca235.js";import{u as B}from"./useGuardProduct.b598e706.js";import"./VPlaceholderSection.vue_vue&type=script&setup=true&lang.35b0ad2a.js";import"./VLoader.vue_vue&type=script&setup=true&lang.a96d7daf.js";import"./VFlexPagination.86ce707c.js";import"./search-4-dark.fb3880a5.js";function K(){const e=h({products:[],isLoading:!1,total:1,purchasable:void 0}),a=y(),t=g(),{currentPage:s,perPage:r,search:l}=$(),{getAllProduct:o}=Y();P((()=>{(async()=>{e.isLoading=!0,a.query.purchasable&&(e.purchasable=a.query.purchasable===R.YES||a.query.purchasable===R.NO?a.query.purchasable:void 0);const t=await o({currentPage:s,perPage:r,search:l,purchasable:e.purchasable});e.isLoading=!1,e.products=(null==t?void 0:t.data)||[],e.total=(null==t?void 0:t.total)||0})()}));return c(i({},j(e)),{productTableHeaders:[{key:"id",label:"ID"},{key:"name",label:"Name"},{key:"slug",label:"Slug"},{key:"type",label:"Type"},{key:"purchasable",label:"Purchasable",isCenter:!0},{key:"price",label:"Price"},{key:"duration",label:"Duration"},{key:"order",label:"Order"}],selectPurchasable:()=>{t.push({query:c(i({},a.query),{purchasable:e.purchasable})})}})}G("data-v-c19dae42");const U={class:"page-content-inner"},W={class:"select is-rounded"},X=[L("option",{value:void 0},"all",-1),L("option",{value:"1"},"purchasable",-1),L("option",{value:"0"},"unpurchasable",-1)],z={class:"is-flex is-justify-content-flex-end pt-4"},J=I(" Create "),M={key:0,class:"dark-inverted is-flex is-justify-content-flex-end"},Q=I(" Action "),Z=L("div",{class:"icon"},[L("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),ee=L("div",{class:"meta"},[L("span",null,"View"),L("span",null,"View product details")],-1),ae=L("div",{class:"icon"},[L("i",{"aria-hidden":"true",class:"lnil lnil-pencil"})],-1),te=L("div",{class:"meta"},[L("span",null,"Edit"),L("span",null,"Edit product details")],-1),se=L("div",{class:"icon"},[L("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:box"})],-1),re=L("div",{class:"meta"},[L("span",null,"View packages"),L("span",null,"View packages")],-1);H();var le=k({setup(e){d.value="Product Information",_({title:"Whitehouse Product"});const{products:a,isLoading:t,productTableHeaders:s,total:r,purchasable:l,selectPurchasable:o}=K(),{capabilities:i,haveActionButton:c}=B();return(e,d)=>{const h=u,y=n,g=m,P=f,j=w("RouterLink"),k=b,_=v;return O(),V("div",U,[x(_,{headers:C(s),data:C(a),total:C(r),"is-loading":C(t),"is-action":C(c)},q({custom:E((()=>[x(y,null,{default:E((()=>[x(h,null,{default:E((()=>[L("div",W,[A(L("select",{"onUpdate:modelValue":d[0]||(d[0]=e=>D(l)?l.value=e:null),onChange:d[1]||(d[1]=(...e)=>C(o)&&C(o)(...e))},X,544),[[S,C(l)]])])])),_:1})])),_:1})])),purchasable:E((({value:e})=>[x(P,{color:+e?"success":"danger",label:+e?"Sale":"Not for sale",outlined:!+e,class:"chip",rounded:""},null,8,["color","label","outlined"])])),price:E((({value:e})=>[I(T(C(p)(e)),1)])),action:E((({value:e})=>[C(c)?(O(),V("div",M,[x(k,{spaced:"",right:""},{button:E((({toggle:e})=>[x(g,{icon:"feather:more-vertical",class:"is-trigger",onClick:e},{default:E((()=>[Q])),_:2},1032,["onClick"])])),content:E((()=>[C(i).canView?(O(),F(j,{key:0,role:"menuitem",class:"dropdown-item is-media",to:{name:"products-:productid",params:{productid:`${e.id}`}}},{default:E((()=>[Z,ee])),_:2},1032,["to"])):N("",!0),C(i).canEdit?(O(),F(j,{key:1,role:"menuitem",class:"dropdown-item is-media",to:{name:"products-:productid",params:{productid:`${e.id}`},hash:"#edit"}},{default:E((()=>[ae,te])),_:2},1032,["to"])):N("",!0),C(i).canView?(O(),F(j,{key:2,role:"menuitem",class:"dropdown-item is-media",to:{name:"products-packages",query:{type:e.type,page:1,product:e.id}}},{default:E((()=>[se,re])),_:2},1032,["to"])):N("",!0)])),_:2},1024)])):N("",!0)])),_:2},[C(i).canCreate?{name:"custom-right",fn:E((()=>[L("div",z,[x(g,{color:"primary",icon:"fas fa-plus",to:{name:"products-create"}},{default:E((()=>[J])),_:1})])]))}:void 0]),1032,["headers","data","total","is-loading","is-action"])])}}});le.__scopeId="data-v-c19dae42";export default le;