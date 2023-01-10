/*! @license DOMPurify 2.3.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.6/LICENSE */
var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,o=Object.getOwnPropertyDescriptor,a=Object.freeze,i=Object.seal,l=Object.create,c="undefined"!=typeof Reflect&&Reflect,s=c.apply,u=c.construct;s||(s=function(e,t,n){return e.apply(t,n)}),a||(a=function(e){return e}),i||(i=function(e){return e}),u||(u=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var m,f=A(Array.prototype.forEach),d=A(Array.prototype.pop),p=A(Array.prototype.push),h=A(String.prototype.toLowerCase),g=A(String.prototype.match),y=A(String.prototype.replace),v=A(String.prototype.indexOf),b=A(String.prototype.trim),T=A(RegExp.prototype.test),N=(m=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(m,t)});function A(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return s(e,t,r)}}function E(e,r){t&&t(e,null);for(var o=r.length;o--;){var a=r[o];if("string"==typeof a){var i=h(a);i!==a&&(n(r)||(r[o]=i),a=i)}e[a]=!0}return e}function w(t){var n=l(null),r=void 0;for(r in t)s(e,t,[r])&&(n[r]=t[r]);return n}function x(e,t){for(;null!==e;){var n=o(e,t);if(n){if(n.get)return A(n.get);if("function"==typeof n.value)return A(n.value)}e=r(e)}return function(e){return console.warn("fallback value for",e),null}}var k=a(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),S=a(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),_=a(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),D=a(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),O=a(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),C=a(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),M=a(["#text"]),L=a(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),R=a(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),I=a(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),F=a(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),H=i(/\{\{[\s\S]*|[\s\S]*\}\}/gm),U=i(/<%[\s\S]*|[\s\S]*%>/gm),z=i(/^data-[\-\w.\u00B7-\uFFFF]/),B=i(/^aria-[\-\w]+$/),P=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),j=i(/^(?:\w+script|data):/i),G=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),W=i(/^html$/i),q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function Y(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var K=function(){return"undefined"==typeof window?null:window},V=function(e,t){if("object"!==(void 0===e?"undefined":q(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(a){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};var $=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K(),n=function(t){return e(t)};if(n.version="2.3.6",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,i=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.Element,u=t.NodeFilter,m=t.NamedNodeMap,A=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,$=t.HTMLFormElement,X=t.DOMParser,Z=t.trustedTypes,J=s.prototype,Q=x(J,"cloneNode"),ee=x(J,"nextSibling"),te=x(J,"childNodes"),ne=x(J,"parentNode");if("function"==typeof l){var re=o.createElement("template");re.content&&re.content.ownerDocument&&(o=re.content.ownerDocument)}var oe=V(Z,r),ae=oe?oe.createHTML(""):"",ie=o,le=ie.implementation,ce=ie.createNodeIterator,se=ie.createDocumentFragment,ue=ie.getElementsByTagName,me=r.importNode,fe={};try{fe=w(o).documentMode?o.documentMode:{}}catch(wt){}var de={};n.isSupported="function"==typeof ne&&le&&void 0!==le.createHTMLDocument&&9!==fe;var pe=H,he=U,ge=z,ye=B,ve=j,be=G,Te=P,Ne=null,Ae=E({},[].concat(Y(k),Y(S),Y(_),Y(O),Y(M))),Ee=null,we=E({},[].concat(Y(L),Y(R),Y(I),Y(F))),xe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ke=null,Se=null,_e=!0,De=!0,Oe=!1,Ce=!1,Me=!1,Le=!1,Re=!1,Ie=!1,Fe=!1,He=!1,Ue=!0,ze=!0,Be=!1,Pe={},je=null,Ge=E({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),We=null,qe=E({},["audio","video","img","source","image","track"]),Ye=null,Ke=E({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ve="http://www.w3.org/1998/Math/MathML",$e="http://www.w3.org/2000/svg",Xe="http://www.w3.org/1999/xhtml",Ze=Xe,Je=!1,Qe=void 0,et=["application/xhtml+xml","text/html"],tt="text/html",nt=void 0,rt=null,ot=o.createElement("form"),at=function(e){return e instanceof RegExp||e instanceof Function},it=function(e){rt&&rt===e||(e&&"object"===(void 0===e?"undefined":q(e))||(e={}),e=w(e),Ne="ALLOWED_TAGS"in e?E({},e.ALLOWED_TAGS):Ae,Ee="ALLOWED_ATTR"in e?E({},e.ALLOWED_ATTR):we,Ye="ADD_URI_SAFE_ATTR"in e?E(w(Ke),e.ADD_URI_SAFE_ATTR):Ke,We="ADD_DATA_URI_TAGS"in e?E(w(qe),e.ADD_DATA_URI_TAGS):qe,je="FORBID_CONTENTS"in e?E({},e.FORBID_CONTENTS):Ge,ke="FORBID_TAGS"in e?E({},e.FORBID_TAGS):{},Se="FORBID_ATTR"in e?E({},e.FORBID_ATTR):{},Pe="USE_PROFILES"in e&&e.USE_PROFILES,_e=!1!==e.ALLOW_ARIA_ATTR,De=!1!==e.ALLOW_DATA_ATTR,Oe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ce=e.SAFE_FOR_TEMPLATES||!1,Me=e.WHOLE_DOCUMENT||!1,Ie=e.RETURN_DOM||!1,Fe=e.RETURN_DOM_FRAGMENT||!1,He=e.RETURN_TRUSTED_TYPE||!1,Re=e.FORCE_BODY||!1,Ue=!1!==e.SANITIZE_DOM,ze=!1!==e.KEEP_CONTENT,Be=e.IN_PLACE||!1,Te=e.ALLOWED_URI_REGEXP||Te,Ze=e.NAMESPACE||Xe,e.CUSTOM_ELEMENT_HANDLING&&at(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(xe.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&at(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(xe.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(xe.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Qe=Qe=-1===et.indexOf(e.PARSER_MEDIA_TYPE)?tt:e.PARSER_MEDIA_TYPE,nt="application/xhtml+xml"===Qe?function(e){return e}:h,Ce&&(De=!1),Fe&&(Ie=!0),Pe&&(Ne=E({},[].concat(Y(M))),Ee=[],!0===Pe.html&&(E(Ne,k),E(Ee,L)),!0===Pe.svg&&(E(Ne,S),E(Ee,R),E(Ee,F)),!0===Pe.svgFilters&&(E(Ne,_),E(Ee,R),E(Ee,F)),!0===Pe.mathMl&&(E(Ne,O),E(Ee,I),E(Ee,F))),e.ADD_TAGS&&(Ne===Ae&&(Ne=w(Ne)),E(Ne,e.ADD_TAGS)),e.ADD_ATTR&&(Ee===we&&(Ee=w(Ee)),E(Ee,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&E(Ye,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(je===Ge&&(je=w(je)),E(je,e.FORBID_CONTENTS)),ze&&(Ne["#text"]=!0),Me&&E(Ne,["html","head","body"]),Ne.table&&(E(Ne,["tbody"]),delete ke.tbody),a&&a(e),rt=e)},lt=E({},["mi","mo","mn","ms","mtext"]),ct=E({},["foreignobject","desc","title","annotation-xml"]),st=E({},S);E(st,_),E(st,D);var ut=E({},O);E(ut,C);var mt=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:Xe,tagName:"template"});var n=h(e.tagName),r=h(t.tagName);if(e.namespaceURI===$e)return t.namespaceURI===Xe?"svg"===n:t.namespaceURI===Ve?"svg"===n&&("annotation-xml"===r||lt[r]):Boolean(st[n]);if(e.namespaceURI===Ve)return t.namespaceURI===Xe?"math"===n:t.namespaceURI===$e?"math"===n&&ct[r]:Boolean(ut[n]);if(e.namespaceURI===Xe){if(t.namespaceURI===$e&&!ct[r])return!1;if(t.namespaceURI===Ve&&!lt[r])return!1;var o=E({},["title","style","font","a","script"]);return!ut[n]&&(o[n]||!st[n])}return!1},ft=function(e){p(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(wt){try{e.outerHTML=ae}catch(t){e.remove()}}},dt=function(e,t){try{p(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(wt){p(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Ee[e])if(Ie||Fe)try{ft(t)}catch(wt){}else try{t.setAttribute(e,"")}catch(wt){}},pt=function(e){var t=void 0,n=void 0;if(Re)e="<remove></remove>"+e;else{var r=g(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===Qe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var a=oe?oe.createHTML(e):e;if(Ze===Xe)try{t=(new X).parseFromString(a,Qe)}catch(wt){}if(!t||!t.documentElement){t=le.createDocument(Ze,"template",null);try{t.documentElement.innerHTML=Je?"":a}catch(wt){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(o.createTextNode(n),i.childNodes[0]||null),Ze===Xe?ue.call(t,Me?"html":"body")[0]:Me?t.documentElement:i},ht=function(e){return ce.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},gt=function(e){return e instanceof $&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof A)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},yt=function(e){return"object"===(void 0===c?"undefined":q(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":q(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},vt=function(e,t,r){de[e]&&f(de[e],(function(e){e.call(n,t,r,rt)}))},bt=function(e){var t=void 0;if(vt("beforeSanitizeElements",e,null),gt(e))return ft(e),!0;if(g(e.nodeName,/[\u0080-\uFFFF]/))return ft(e),!0;var r=nt(e.nodeName);if(vt("uponSanitizeElement",e,{tagName:r,allowedTags:Ne}),!yt(e.firstElementChild)&&(!yt(e.content)||!yt(e.content.firstElementChild))&&T(/<[/\w]/g,e.innerHTML)&&T(/<[/\w]/g,e.textContent))return ft(e),!0;if("select"===r&&T(/<template/i,e.innerHTML))return ft(e),!0;if(!Ne[r]||ke[r]){if(!ke[r]&&Nt(r)){if(xe.tagNameCheck instanceof RegExp&&T(xe.tagNameCheck,r))return!1;if(xe.tagNameCheck instanceof Function&&xe.tagNameCheck(r))return!1}if(ze&&!je[r]){var o=ne(e)||e.parentNode,a=te(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(Q(a[i],!0),ee(e))}return ft(e),!0}return e instanceof s&&!mt(e)?(ft(e),!0):"noscript"!==r&&"noembed"!==r||!T(/<\/no(script|embed)/i,e.innerHTML)?(Ce&&3===e.nodeType&&(t=e.textContent,t=y(t,pe," "),t=y(t,he," "),e.textContent!==t&&(p(n.removed,{element:e.cloneNode()}),e.textContent=t)),vt("afterSanitizeElements",e,null),!1):(ft(e),!0)},Tt=function(e,t,n){if(Ue&&("id"===t||"name"===t)&&(n in o||n in ot))return!1;if(De&&!Se[t]&&T(ge,t));else if(_e&&T(ye,t));else if(!Ee[t]||Se[t]){if(!(Nt(e)&&(xe.tagNameCheck instanceof RegExp&&T(xe.tagNameCheck,e)||xe.tagNameCheck instanceof Function&&xe.tagNameCheck(e))&&(xe.attributeNameCheck instanceof RegExp&&T(xe.attributeNameCheck,t)||xe.attributeNameCheck instanceof Function&&xe.attributeNameCheck(t))||"is"===t&&xe.allowCustomizedBuiltInElements&&(xe.tagNameCheck instanceof RegExp&&T(xe.tagNameCheck,n)||xe.tagNameCheck instanceof Function&&xe.tagNameCheck(n))))return!1}else if(Ye[t]);else if(T(Te,y(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!We[e]){if(Oe&&!T(ve,y(n,be,"")));else if(n)return!1}else;return!0},Nt=function(e){return e.indexOf("-")>0},At=function(e){var t=void 0,r=void 0,o=void 0,a=void 0;vt("beforeSanitizeAttributes",e,null);var i=e.attributes;if(i){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ee};for(a=i.length;a--;){var c=t=i[a],s=c.name,u=c.namespaceURI;if(r=b(t.value),o=nt(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,vt("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(dt(s,e),l.keepAttr))if(T(/\/>/i,r))dt(s,e);else{Ce&&(r=y(r,pe," "),r=y(r,he," "));var m=nt(e.nodeName);if(Tt(m,o,r))try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),d(n.removed)}catch(wt){}}}vt("afterSanitizeAttributes",e,null)}},Et=function e(t){var n=void 0,r=ht(t);for(vt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)vt("uponSanitizeShadowNode",n,null),bt(n)||(n.content instanceof i&&e(n.content),At(n));vt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,o){var a=void 0,l=void 0,s=void 0,u=void 0,m=void 0;if((Je=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!yt(e)){if("function"!=typeof e.toString)throw N("toString is not a function");if("string"!=typeof(e=e.toString()))throw N("dirty is not a string, aborting")}if(!n.isSupported){if("object"===q(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(yt(e))return t.toStaticHTML(e.outerHTML)}return e}if(Le||it(o),n.removed=[],"string"==typeof e&&(Be=!1),Be){if(e.nodeName){var f=nt(e.nodeName);if(!Ne[f]||ke[f])throw N("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof c)1===(l=(a=pt("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else{if(!Ie&&!Ce&&!Me&&-1===e.indexOf("<"))return oe&&He?oe.createHTML(e):e;if(!(a=pt(e)))return Ie?null:He?ae:""}a&&Re&&ft(a.firstChild);for(var d=ht(Be?e:a);s=d.nextNode();)3===s.nodeType&&s===u||bt(s)||(s.content instanceof i&&Et(s.content),At(s),u=s);if(u=null,Be)return e;if(Ie){if(Fe)for(m=se.call(a.ownerDocument);a.firstChild;)m.appendChild(a.firstChild);else m=a;return Ee.shadowroot&&(m=me.call(r,m,!0)),m}var p=Me?a.outerHTML:a.innerHTML;return Me&&Ne["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&T(W,a.ownerDocument.doctype.name)&&(p="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+p),Ce&&(p=y(p,pe," "),p=y(p,he," ")),oe&&He?oe.createHTML(p):p},n.setConfig=function(e){it(e),Le=!0},n.clearConfig=function(){rt=null,Le=!1},n.isValidAttribute=function(e,t,n){rt||it({});var r=nt(e),o=nt(t);return Tt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(de[e]=de[e]||[],p(de[e],t))},n.removeHook=function(e){de[e]&&d(de[e])},n.removeHooks=function(e){de[e]&&(de[e]=[])},n.removeAllHooks=function(){de={}},n}();export default $;
