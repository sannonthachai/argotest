var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(a,l,o)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o,t=(e,a)=>{for(var l in a||(a={}))d.call(a,l)&&n(e,l,a[l]);if(o)for(var l of o(a))s.call(a,l)&&n(e,l,a[l]);return e};import{_ as i,a as r}from"./VField.vue_vue&type=script&setup=true&lang.ef5e6c86.js";import{_ as m}from"./SelectOption.vue_vue&type=script&setup=true&lang.934e0be4.js";import{_ as c}from"./ModalFileManager.vue_vue&type=script&setup=true&lang.3ed79754.js";import{_ as u}from"./TextEditor.7b24ebe1.js";import{_ as p}from"./VSwitchBlock.vue_vue&type=script&setup=true&lang.fd20ebd0.js";import{p as f,a as v,d as y,k as b,r as g,E as h,o as I,e as _,h as R,K as C,ai as V,x,g as N,F as w,ao as O,ap as k,G as D,b as U,A as B,q as F,D as j,Y as S,ae as A}from"./vendor.1c8b4573.js";import{u as T}from"./useOptionApi.f4dc99b9.js";import{B as E,u as K,a as M}from"./useBlogApi.71991ea1.js";import{o as P}from"./index.d7dc1ff6.js";import{u as L}from"./useNotyf.ddf08f06.js";f("data-v-09f03441");const q={class:"columns is-multiline"},W={class:"column is-6"},X={class:"form-fieldset"},$=R("div",{class:"fieldset-heading"},[R("h4",null,"Blog")],-1),G={class:"columns is-multiline"},Y={class:"column is-12"},z={class:"field"},H=R("label",null,[D(" Name "),R("span",{class:"red"},"*")],-1),J={class:"control"},Q=["readonly"],Z={class:"column is-12"},ee={class:"field"},ae=R("label",null,[D(" Read time "),R("span",{class:"red"},"*")],-1),le={class:"control"},oe=["readonly"],de={class:"column is-12"},se={class:"field"},ne=R("label",null,[D(" Detail "),R("span",{class:"red"},"*")],-1),te={class:"control"},ie=["readonly"],re={class:"column is-6"},me={class:"form-fieldset"},ce=R("div",{class:"fieldset-heading"},[R("h4",null,"Post Details")],-1),ue={class:"columns is-multiline"},pe={class:"column is-12"},fe={class:"field"},ve=R("label",null,[D(" Slug "),R("span",{class:"red"},"*")],-1),ye={class:"control"},be=["readonly"],ge={class:"column is-6"},he={class:"field"},Ie=R("label",null,[D(" Status "),R("span",{class:"red"},"*")],-1),_e={class:"control"},Re={class:"column is-6"},Ce={class:"field"},Ve=R("label",null,[D(" Publish Date "),R("span",{class:"red"},"*")],-1),xe={class:"control"},Ne=["value","disabled"],we={class:"column is-6"},Oe={class:"field"},ke=R("label",null,[D(" Main Category "),R("span",{class:"red"},"*")],-1),De={class:"control"},Ue={class:"column is-6"},Be={class:"field"},Fe=R("label",null,[D(" Sub Category "),R("span",{class:"red"},"*")],-1),je={class:"control"},Se={class:"form-fieldset"},Ae={class:"fieldset-heading imageDisplay"},Te={class:"image"},Ee=["src"],Ke={key:1,src:"https://via.placeholder.com/1200x630.png"},Me={class:"columns is-multiline"},Pe={class:"column is-12"},Le=["readonly"],qe=R("label",null,[D(" Photo Link "),R("span",{class:"red"},"*")],-1),We=R("p",null," - อย่างน้อย 1200x630 px - สำหรับการแสดงผลที่ดีที่สุดในอุปกรณ์ที่มีความคมชัดสูง ",-1),Xe=R("p",null," - ควรใช้รูปภาพที่มีขนาด 600x315 px ในการแสดงโพสต์ที่ลิงก์ไปที่เพจด้วยรูปภาพที่มีขนาดใหญ่ ",-1),$e=R("p",null,"- รูปภาพที่เล็กที่สุด คือ 200x200 px",-1),Ge=R("p",null,"- รูปภาพมีขนาดได้สูงสุด 8MB",-1),Ye={class:"columns is-multiline"},ze={class:"column is-12"},He={class:"form-fieldset"},Je={class:"column is-6"},Qe={class:"form-fieldset"},Ze=R("div",{class:"fieldset-heading"},[R("h4",null,"SEO Content")],-1),ea={class:"columns is-multiline"},aa={class:"column is-12"},la={class:"field"},oa=R("label",null,"Meta Description",-1),da={class:"control"},sa=["readonly"],na={class:"column is-12"},ta={class:"field"},ia=R("label",null,"Meta Keywords",-1),ra={class:"control"},ma=["readonly"],ca={class:"column is-12"},ua={class:"field"},pa=R("label",null,"SEO Title",-1),fa={class:"control"},va=["readonly"],ya={class:"column is-12"},ba={class:"field"},ga=R("label",null,"SEO Footer",-1),ha={class:"control"},Ia=["readonly"],_a={class:"column is-12"},Ra={class:"field is-grouped"},Ca=R("div",{class:"control is-expanded"},[R("label",null,"SEO robots")],-1),Va={class:"control subcontrol"},xa={class:"switch-segment"},Na=R("label",{class:"is-label",for:"segment-switch-2"},"No Index",-1),wa={for:"segment-switch-2",class:"form-switch"},Oa=R("label",{class:"is-label",for:"segment-switch-2"},"Index",-1),ka={class:"column is-6"},Da={class:"form-fieldset"},Ua=R("div",{class:"fieldset-heading"},[R("h4",null,"Blogs Recommend")],-1),Ba={class:"columns is-multiline"},Fa={class:"column is-12"},ja={class:"field"},Sa=R("label",null,"Blog Recommend 1",-1),Aa={class:"control"},Ta={class:"column is-12"},Ea={class:"field"},Ka=R("label",null,"Blog Recommend 2",-1),Ma={class:"control"},Pa={class:"column is-12"},La={class:"field"},qa=R("label",null,"Blog Recommend 3",-1),Wa={class:"control"};v();var Xa=y({props:{data:{type:Object,required:!0},blogId:{type:Number,required:!1},readonly:{type:Boolean,required:!0},addOn:{type:Object,required:!0}},setup(e){const a=e,l=b((()=>{var e;return!(null==(e=a.data)?void 0:e.mainCategoryId)})),{getBlogsRecommended:o,getSubCategories:d,getMainCategoryBlogs:s}=T(),n=g(!1);return(a,t)=>{const f=h("Multiselect"),v=i,y=r,b=h("v-date-picker"),g=m,D=i,U=r,B=c,F=u,j=p;return I(),_("div",null,[R("div",q,[R("div",W,[R("div",X,[$,R("div",G,[R("div",Y,[R("div",z,[H,R("div",J,[C(R("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.data.name=a),type:"text",class:"input",placeholder:"fill your blog name...",readonly:e.readonly},null,8,Q),[[V,e.data.name]])])])]),R("div",Z,[R("div",ee,[ae,R("div",le,[C(R("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>e.data.readtime=a),type:"number",class:"input",placeholder:"fill your read time... (min)",readonly:e.readonly,min:1,max:1e4,onChange:t[2]||(t[2]=(...a)=>e.addOn.autoFixReadtime&&e.addOn.autoFixReadtime(...a))},null,40,oe),[[V,e.data.readtime]])])])]),R("div",de,[R("div",se,[ne,R("div",te,[C(R("textarea",{"onUpdate:modelValue":t[3]||(t[3]=a=>e.data.detail=a),class:"textarea",rows:"10",placeholder:"fill your Detail...",readonly:e.readonly},null,8,ie),[[V,e.data.detail]])])])])])])]),R("div",re,[R("div",me,[ce,R("div",ue,[R("div",pe,[R("div",fe,[ve,R("div",ye,[C(R("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>e.data.slug=a),type:"text",class:"input",placeholder:"fill your slug...",readonly:e.readonly},null,8,be),[[V,e.data.slug]])])])]),R("div",ge,[R("div",he,[Ie,R("div",_e,[x(f,{modelValue:e.data.status,"onUpdate:modelValue":t[5]||(t[5]=a=>e.data.status=a),options:N(E),placeholder:"select a blog status","value-prop":"id","track-by":"name",label:"name",disabled:e.readonly},null,8,["modelValue","options","disabled"])])])]),R("div",Re,[R("div",Ce,[Ve,R("div",xe,[x(b,{modelValue:e.data.publishedAt,"onUpdate:modelValue":t[6]||(t[6]=a=>e.data.publishedAt=a),"minute-increment":30,color:"orange",mode:"dateTime",disabled:e.readonly},{default:w((({inputValue:a,inputEvents:l})=>[x(y,null,{default:w((()=>[x(v,null,{default:w((()=>[R("input",O({class:"input",value:a,disabled:e.readonly},k(l)),null,16,Ne)])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue","disabled"])])])]),R("div",we,[R("div",Oe,[ke,R("div",De,[x(g,{key:e.blogId,modelValue:e.data.mainCategoryId,"onUpdate:modelValue":t[7]||(t[7]=a=>e.data.mainCategoryId=a),"callback-search":N(s),"search-value":e.data.mainCategoryName,"label-by":"name","value-prop":"id",placeholder:"select a blog main category",readonly:e.readonly,onClear:t[8]||(t[8]=a=>{e.data.mainCategoryId=void 0,e.data.subCategoryId=void 0})},null,8,["modelValue","callback-search","search-value","readonly"])])])]),R("div",Ue,[R("div",Be,[Fe,R("div",je,[x(g,{key:e.data.mainCategoryId,modelValue:e.data.subCategoryId,"onUpdate:modelValue":t[9]||(t[9]=a=>e.data.subCategoryId=a),"callback-search":N(d),"search-value":e.data.subCategoryName,"label-by":"name","value-prop":"id",path:{mainCategoryId:e.data.mainCategoryId},placeholder:"select a blog sub category",readonly:N(l)||e.readonly,onClear:t[10]||(t[10]=a=>e.data.subCategoryId=void 0)},null,8,["modelValue","callback-search","search-value","path","readonly"])])])])])]),R("div",Se,[R("div",Ae,[R("figure",Te,[e.data.photo?(I(),_("img",{key:0,src:e.data.photo},null,8,Ee)):(I(),_("img",Ke))])]),R("div",Me,[R("div",Pe,[x(U,null,{default:w((()=>[x(D,null,{default:w((()=>[x(U,{addons:""},{default:w((()=>[x(D,{icon:"lnil lnil-link-alt",expanded:""},{default:w((()=>[C(R("input",{"onUpdate:modelValue":t[11]||(t[11]=a=>e.data.photo=a),type:"text",class:"input",placeholder:"Photo URL...",readonly:e.readonly},null,8,Le),[[V,e.data.photo]])])),_:1}),x(v,null,{default:w((()=>[R("a",{class:"button is-primary",onClick:t[12]||(t[12]=a=>n.value=!e.readonly&&!0)},"Media")])),_:1})])),_:1}),qe,We,Xe,$e,Ge,x(B,{modelValue:n.value,"onUpdate:modelValue":t[13]||(t[13]=e=>n.value=e),onSubmit:t[14]||(t[14]=a=>e.data.photo=a.src)},null,8,["modelValue"])])),_:1})])),_:1})])])])])]),R("div",Ye,[R("div",ze,[R("div",He,[x(F,{modelValue:e.data.content,"onUpdate:modelValue":[t[15]||(t[15]=a=>e.data.content=a),t[16]||(t[16]=a=>e.data.content=a)],label:"Blog Content",readonly:e.readonly},null,8,["modelValue","readonly"])])]),R("div",Je,[R("div",Qe,[Ze,R("div",ea,[R("div",aa,[R("div",la,[oa,R("div",da,[C(R("textarea",{"onUpdate:modelValue":t[17]||(t[17]=a=>e.data.metaDescription=a),class:"textarea",rows:"1",placeholder:"fill your meta descriptione...",readonly:e.readonly},null,8,sa),[[V,e.data.metaDescription]])])])]),R("div",na,[R("div",ta,[ia,R("div",ra,[C(R("textarea",{"onUpdate:modelValue":t[18]||(t[18]=a=>e.data.metaKeywords=a),class:"textarea",rows:"1",placeholder:"fill your meta keywords...",readonly:e.readonly},null,8,ma),[[V,e.data.metaKeywords]])])])]),R("div",ca,[R("div",ua,[pa,R("div",fa,[C(R("textarea",{"onUpdate:modelValue":t[19]||(t[19]=a=>e.data.seoTitle=a),class:"textarea",rows:"1",placeholder:"fill your seo title...",readonly:e.readonly},null,8,va),[[V,e.data.seoTitle]])])])]),R("div",ya,[R("div",ba,[ga,R("div",ha,[C(R("textarea",{"onUpdate:modelValue":t[20]||(t[20]=a=>e.data.seoFooter=a),class:"textarea",rows:"1",placeholder:"fill your seo footer...",readonly:e.readonly},null,8,Ia),[[V,e.data.seoFooter]])])])]),R("div",_a,[R("div",Ra,[Ca,R("div",Va,[R("div",xa,[Na,R("label",wa,[x(j,{modelValue:e.data.seoRobot,"onUpdate:modelValue":t[21]||(t[21]=a=>e.data.seoRobot=a),color:"primary",disabled:e.readonly},null,8,["modelValue","disabled"])]),Oa])])])])])])]),R("div",ka,[R("div",Da,[Ua,R("div",Ba,[R("div",Fa,[R("div",ja,[Sa,R("div",Aa,[x(g,{key:e.blogId,modelValue:e.data._1stRecommendId,"onUpdate:modelValue":t[22]||(t[22]=a=>e.data._1stRecommendId=a),"callback-search":N(o),"search-value":e.data._1stRecommendName,"label-by":"name","value-prop":"id",placeholder:"select a blog recommend 1",readonly:e.readonly,onClear:t[23]||(t[23]=a=>e.data._1stRecommendId=0)},null,8,["modelValue","callback-search","search-value","readonly"])])])]),R("div",Ta,[R("div",Ea,[Ka,R("div",Ma,[x(g,{key:e.blogId,modelValue:e.data._2ndRecommendId,"onUpdate:modelValue":t[24]||(t[24]=a=>e.data._2ndRecommendId=a),"callback-search":N(o),"search-value":e.data._2ndRecommendName,"label-by":"name","value-prop":"id",readonly:e.readonly,placeholder:"select a blog recommend 2",onClear:t[25]||(t[25]=a=>e.data._2ndRecommendId=0)},null,8,["modelValue","callback-search","search-value","readonly"])])])]),R("div",Pa,[R("div",La,[qa,R("div",Wa,[x(g,{key:e.blogId,modelValue:e.data._3rdRecommendId,"onUpdate:modelValue":t[26]||(t[26]=a=>e.data._3rdRecommendId=a),"callback-search":N(o),"search-value":e.data._3rdRecommendName,"label-by":"name","value-prop":"id",readonly:e.readonly,placeholder:"select a blog recommend 3",onClear:t[27]||(t[27]=a=>e.data._3rdRecommendId=0)},null,8,["modelValue","callback-search","search-value","readonly"])])])])])])])])])}}});function $a(){const e=U(),o=B(),d=L(),{createBlog:s,updateBlog:n,getBlogById:i}=K(),r=F({id:0,readonly:!0,saving:!1,info:{name:"",detail:"",readtime:1,content:"",slug:"",status:E.DRAFT,publishedAt:j().add(1,"d").set("h",0).set("m",0).format(),mainCategoryId:1,mainCategoryName:void 0,subCategoryId:void 0,subCategoryName:void 0,photo:"",metaDescription:void 0,metaKeywords:void 0,seoTitle:void 0,seoFooter:void 0,seoRobot:!1,_1stRecommendId:void 0,_1stRecommendName:void 0,_2ndRecommendId:void 0,_2ndRecommendName:void 0,_3rdRecommendId:void 0,_3rdRecommendName:void 0}}),m=b((()=>!(r.info.name&&r.info.detail&&r.info.readtime&&r.info.content&&r.info.slug&&r.info.status&&r.info.publishedAt&&r.info.subCategoryId&&r.info.photo))),c=async()=>{const e=await i(parseInt(`${o.params.id}`));r.id=e.id,r.info.name=e.name,r.info.detail=e.detail,r.info.readtime=e.readtime,r.info.content=e.content,r.info.slug=e.slug,r.info.status=e.status,r.info.publishedAt=e.publishedAt,r.info.mainCategoryId=e.mainCategoryId,r.info.mainCategoryName=e.undefined,r.info.subCategoryId=e.subCategoryId,r.info.subCategoryName=void 0,r.info.photo=e.photo,r.info.metaDescription=e.metaDescription,r.info.metaKeywords=e.metaKeywords,r.info.seoTitle=e.seoTitle,r.info.seoFooter=e.seoFooter,r.info.seoRobot=e.seoRobot!=M.NOINDEX_FOLLOW,r.info._1stRecommendId=e._1stRecommendId,r.info._1stRecommendName=e._1stRecommendName,r.info._2ndRecommendId=e._2ndRecommendId,r.info._2ndRecommendName=e._2ndRecommendName,r.info._3rdRecommendId=e._3rdRecommendId,r.info._3rdRecommendName=e._3rdRecommendName};return S((()=>{const e=o.hash,a=parseInt(`${o.params.id}`);r.readonly="#edit"!==e,a&&c()})),u=t({},A(r)),a(u,l({disabledSave:m,setStateInfo:c,clearStateInfo:()=>{r.id=0,r.info.name="",r.info.detail="",r.info.readtime=1,r.info.content="",r.info.slug="",r.info.status=E.DRAFT,r.info.publishedAt=j().add(1,"d").set("h",0).set("m",0).format(),r.info.mainCategoryId=2,r.info.mainCategoryName=void 0,r.info.subCategoryId=1,r.info.subCategoryName=void 0,r.info.photo="",r.info.metaDescription=void 0,r.info.metaKeywords=void 0,r.info.seoTitle=void 0,r.info.seoFooter=void 0,r.info.seoRobot=!1,r.info._1stRecommendId=void 0,r.info._1stRecommendName=void 0,r.info._2ndRecommendId=void 0,r.info._2ndRecommendName=void 0,r.info._3rdRecommendId=void 0,r.info._3rdRecommendName=void 0},onSaveBlog:async()=>{if(r.saving=!0,(r.info._1stRecommendId==r.info._2ndRecommendId||r.info._1stRecommendId==r.info._3rdRecommendId||r.info._2ndRecommendId==r.info._3rdRecommendId)&&r.info._1stRecommendId&&r.info._2ndRecommendId&&r.info._3rdRecommendId)d.error("Recommend 1 - 3 shouldn't be the same id.");else{const a={name:r.info.name,detail:r.info.detail,readtime:r.info.readtime<1?1:r.info.readtime,content:r.info.content,slug:r.info.slug,status:r.info.status,publishedAt:r.info.publishedAt,mainCategoryId:r.info.mainCategoryId,subCategoryId:r.info.subCategoryId,blogImageUrl:r.info.photo,metaDescription:r.info.metaDescription,metaKeywords:r.info.metaKeywords,seoTitle:r.info.seoTitle,seoFooter:r.info.seoFooter,seoRobot:r.info.seoRobot?M.INDEX_FOLLOW:M.NOINDEX_FOLLOW,_1stRecommendId:r.info._1stRecommendId,_2ndRecommendId:r.info._2ndRecommendId,_3rdRecommendId:r.info._3rdRecommendId};let l;r.id?(l=await n(t({id:r.id},a)),P(l,"Blog was updated!")):(l=await s(a),P(l,"Blog was created!")),r.saving=!1,e.push({name:"blogs",query:t({},o.query)})}},autoFixReadtime:()=>{(r.info.readtime>1e4||r.info.readtime<=0)&&(r.info.readtime=1)}}));var u}Xa.__scopeId="data-v-09f03441";export{Xa as _,$a as u};