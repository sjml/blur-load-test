var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function o(){return Object.create(null)}function l(e){e.forEach(n)}function i(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(t,n,o){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function a(e,t,n=t){return e.set(n),t}const c="undefined"!=typeof window;let u=c?()=>window.performance.now():()=>Date.now(),d=c?e=>requestAnimationFrame(e):e;const h=new Set;function f(e){h.forEach((t=>{t.c(e)||(h.delete(t),t.f())})),0!==h.size&&d(f)}function p(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function v(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function _(e){return document.createTextNode(e)}function b(){return _(" ")}function $(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function S(e,t){e.value=null==t?"":t}function k(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}function C(e,t){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t)return void(o.selected=!0)}}function z(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}const j=new Set;let M,E=0;function L(e,t,n,o,l,i,r,s=0){const a=16.666/o;let c="{\n";for(let e=0;e<=1;e+=a){const o=t+(n-t)*i(e);c+=100*e+`%{${r(o,1-o)}}\n`}const u=c+`100% {${r(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${s}`,h=e.ownerDocument;j.add(h);const f=h.__svelte_stylesheet||(h.__svelte_stylesheet=h.head.appendChild(y("style")).sheet),p=h.__svelte_rules||(h.__svelte_rules={});p[d]||(p[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${d} ${o}ms linear ${l}ms 1 both`,E+=1,d}function I(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),l=n.length-o.length;l&&(e.style.animation=o.join(", "),E-=l,E||d((()=>{E||(j.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),j.clear())})))}function T(e){M=e}const F=[],O=[],P=[],q=[],Q=Promise.resolve();let B=!1;function D(e){P.push(e)}let A=!1;const H=new Set;function N(){if(!A){A=!0;do{for(let e=0;e<F.length;e+=1){const t=F[e];T(t),R(t.$$)}for(T(null),F.length=0;O.length;)O.pop()();for(let e=0;e<P.length;e+=1){const t=P[e];H.has(t)||(H.add(t),t())}P.length=0}while(F.length);for(;q.length;)q.pop()();B=!1,A=!1,H.clear()}}function R(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}let G;function J(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const Z=new Set;let K;function U(){K={r:0,c:[],p:K}}function V(){K.r||l(K.c),K=K.p}function W(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function Y(e,t,n,o){if(e&&e.o){if(Z.has(e))return;Z.add(e),K.c.push((()=>{Z.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}const X={duration:0};function ee(n,o,r,s){let a=o(n,r),c=s?0:1,p=null,m=null,g=null;function v(){g&&I(n,g)}function y(e,t){const n=e.b-c;return t*=Math.abs(n),{a:c,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function _(o){const{delay:i=0,duration:r=300,easing:s=t,tick:_=e,css:b}=a||X,$={start:u()+i,b:o};o||($.group=K,K.r+=1),p||m?m=$:(b&&(v(),g=L(n,c,o,r,i,s,b)),o&&_(0,1),p=y($,r),D((()=>J(n,o,"start"))),function(e){let t;0===h.size&&d(f),new Promise((n=>{h.add(t={c:e,f:n})}))}((e=>{if(m&&e>m.start&&(p=y(m,r),m=null,J(n,p.b,"start"),b&&(v(),g=L(n,c,p.b,p.duration,0,s,a.css))),p)if(e>=p.end)_(c=p.b,1-c),J(n,p.b,"end"),m||(p.b?v():--p.group.r||l(p.group.c)),p=null;else if(e>=p.start){const t=e-p.start;c=p.a+p.d*s(t/p.duration),_(c,1-c)}return!(!p&&!m)})))}return{run(e){i(a)?(G||(G=Promise.resolve(),G.then((()=>{G=null}))),G).then((()=>{a=a(),_(e)})):_(e)},end(){v(),p=m=null}}}function te(e){e&&e.c()}function ne(e,t,o){const{fragment:r,on_mount:s,on_destroy:a,after_update:c}=e.$$;r&&r.m(t,o),D((()=>{const t=s.map(n).filter(i);a?a.push(...t):l(t),e.$$.on_mount=[]})),c.forEach(D)}function oe(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function le(e,t){-1===e.$$.dirty[0]&&(F.push(e),B||(B=!0,Q.then(N)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(t,n,i,r,s,a,c=[-1]){const u=M;T(t);const d=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:c,skip_bound:!1};let h=!1;if(d.ctx=i?i(t,n.props||{},((e,n,...o)=>{const l=o.length?o[0]:n;return d.ctx&&s(d.ctx[e],d.ctx[e]=l)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](l),h&&le(t,e)),n})):[],d.update(),h=!0,l(d.before_update),d.fragment=!!r&&r(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(g)}else d.fragment&&d.fragment.c();n.intro&&W(t.$$.fragment),ne(t,n.target,n.anchor),N()}T(u)}class re{$destroy(){oe(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const se=[];function ae(t,n=e){let o;const l=[];function i(e){if(r(t,e)&&(t=e,o)){const e=!se.length;for(let e=0;e<l.length;e+=1){const n=l[e];n[1](),se.push(n,t)}if(e){for(let e=0;e<se.length;e+=2)se[e][0](se[e+1]);se.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(r,s=e){const a=[r,s];return l.push(a),1===l.length&&(o=n(i)||e),r(t),()=>{const e=l.indexOf(a);-1!==e&&l.splice(e,1),0===l.length&&(o(),o=null)}}}}const ce=ae(null),ue=ae(null),de=ae(null),he=ae(0),fe=ae({tinyFormat:"jpg",tinySize:32,tinyQuality:40,normalSize:"320x240",placeholderMode:"rollover",placeholderCSS:"filter: blur(0.5em); transform: scale(1.3);",useEncodedData:!0});function pe(e,{delay:n=0,duration:o=400,easing:l=t}={}){const i=+getComputedStyle(e).opacity;return{delay:n,duration:o,easing:l,css:e=>"opacity: "+e*i}}function me(e){let t,n,o,l,i,r,s,a;return{c(){t=y("img"),w(t,"class","placeholder svelte-poog8d"),t.src!==(n=e[4])&&w(t,"src",n),w(t,"alt",o=e[0].file),w(t,"width",l=e[1]+"px"),w(t,"height",i=e[2]+"px"),w(t,"style",r=e[3].placeholderCSS)},m(e,n){m(e,t,n),a=!0},p(e,s){(!a||16&s&&t.src!==(n=e[4]))&&w(t,"src",n),(!a||1&s&&o!==(o=e[0].file))&&w(t,"alt",o),(!a||2&s&&l!==(l=e[1]+"px"))&&w(t,"width",l),(!a||4&s&&i!==(i=e[2]+"px"))&&w(t,"height",i),(!a||8&s&&r!==(r=e[3].placeholderCSS))&&w(t,"style",r)},i(e){a||(D((()=>{s||(s=ee(t,pe,{duration:200},!0)),s.run(1)})),a=!0)},o(e){s||(s=ee(t,pe,{duration:200},!1)),s.run(0),a=!1},d(e){e&&g(t),e&&s&&s.end()}}}function ge(e){let t,n,o,i,r,s,a,c,u,d,h=e[5]&&me(e);return{c(){t=y("div"),n=y("img"),a=b(),h&&h.c(),w(n,"class","true"),n.src!==(o="./img/normal/"+e[3].normalSize+"/"+e[0].file+".jpg")&&w(n,"src",o),w(n,"alt",i=e[0].file),w(n,"width",r=e[1]+"px"),w(n,"height",s=e[2]+"px"),w(t,"class","photo svelte-poog8d"),k(t,"width",e[1]+"px"),k(t,"height",e[2]+"px")},m(o,l){m(o,t,l),p(t,n),p(t,a),h&&h.m(t,null),c=!0,u||(d=[$(window,"keydown",e[6]),$(window,"keyup",e[7]),$(t,"mouseenter",e[8]),$(t,"mouseleave",e[9])],u=!0)},p(e,[l]){(!c||9&l&&n.src!==(o="./img/normal/"+e[3].normalSize+"/"+e[0].file+".jpg"))&&w(n,"src",o),(!c||1&l&&i!==(i=e[0].file))&&w(n,"alt",i),(!c||2&l&&r!==(r=e[1]+"px"))&&w(n,"width",r),(!c||4&l&&s!==(s=e[2]+"px"))&&w(n,"height",s),e[5]?h?(h.p(e,l),32&l&&W(h,1)):(h=me(e),h.c(),W(h,1),h.m(t,null)):h&&(U(),Y(h,1,1,(()=>{h=null})),V()),(!c||2&l)&&k(t,"width",e[1]+"px"),(!c||4&l)&&k(t,"height",e[2]+"px")},i(e){c||(W(h),c=!0)},o(e){Y(h),c=!1},d(e){e&&g(t),h&&h.d(),u=!1,l(d)}}}function ve(e,t,n){let o,l;s(e,fe,(e=>n(3,o=e))),s(e,de,(e=>n(12,l=e)));let{img:i}=t,r=300,a=300,c="",u=!0,d=!1,h=!1;function f(){const e=`${i.file}.${o.tinyFormat}`;if(o.useEncodedData){let t="";switch(o.tinyFormat){case"jpg":t="image/jpeg";break;case"webp":t="image/webp";break;case"jp2":t="image/jp2";break;case"jxr":t="image/jxr"}return`data:${t};base64,${l[e]}`}return`./img/tiny/format_${o.tinyFormat}/quality_${o.tinyQuality}/size_${o.tinySize}/`+e}return de.subscribe((()=>{n(4,c=f())})),e.$$set=e=>{"img"in e&&n(0,i=e.img)},e.$$.update=()=>{if(15&e.$$.dirty){const e=o.normalSize.split("x").map(Number);i.aspect>=1?(n(1,r=e[0]),n(2,a=r/i.aspect)):(n(2,a=e[1]),n(1,r=a*i.aspect)),n(4,c=f())}if(3080&e.$$.dirty)switch(o.placeholderMode){case"always off":n(5,u=!1);break;case"always on":n(5,u=!0);break;case"hold shift":n(5,u=!d);break;case"rollover":n(5,u=!h)}},[i,r,a,o,c,u,function(e){"Shift"==e.key&&n(10,d=!0)},function(e){"Shift"==e.key&&n(10,d=!1)},function(e){n(11,h=!0)},function(e){n(11,h=!1)},d,h]}class ye extends re{constructor(e){super(),ie(this,e,ve,ge,r,{img:0})}}function _e(e,t,n){const o=e.slice();return o[1]=t[n],o}function be(e){let t,n;return t=new ye({props:{img:e[1]}}),{c(){te(t.$$.fragment)},m(e,o){ne(t,e,o),n=!0},p(e,n){const o={};1&n&&(o.img=e[1]),t.$set(o)},i(e){n||(W(t.$$.fragment,e),n=!0)},o(e){Y(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}function $e(e){let t,n,o,l,i=e[0].inputImages,r=[];for(let t=0;t<i.length;t+=1)r[t]=be(_e(e,i,t));const s=e=>Y(r[e],1,1,(()=>{r[e]=null}));return{c(){t=y("h2"),t.textContent="Images",n=b(),o=y("div");for(let e=0;e<r.length;e+=1)r[e].c();w(o,"class","photos svelte-vkd6b1")},m(e,i){m(e,t,i),m(e,n,i),m(e,o,i);for(let e=0;e<r.length;e+=1)r[e].m(o,null);l=!0},p(e,[t]){if(1&t){let n;for(i=e[0].inputImages,n=0;n<i.length;n+=1){const l=_e(e,i,n);r[n]?(r[n].p(l,t),W(r[n],1)):(r[n]=be(l),r[n].c(),W(r[n],1),r[n].m(o,null))}for(U(),n=i.length;n<r.length;n+=1)s(n);V()}},i(e){if(!l){for(let e=0;e<i.length;e+=1)W(r[e]);l=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)Y(r[e]);l=!1},d(e){e&&g(t),e&&g(n),e&&g(o),v(r,e)}}}function we(e,t,n){let o;return s(e,ce,(e=>n(0,o=e))),[o]}class xe extends re{constructor(e){super(),ie(this,e,we,$e,r,{})}}function Se(t){let n,o,l,i,r,s,a,c,u,d,h,f,v,$,S,k,C,z,j,M,E,L,I,T=ke(t[0])+"",F=ke(t[1])+"",O=ke(t[2])+"",P=ke(t[3])+"";return{c(){n=y("div"),o=y("h3"),o.textContent="Metrics",l=_("\n    the preview images with selected options:\n    "),i=y("table"),r=y("tr"),s=y("td"),s.innerHTML="<strong>smallest</strong>",a=y("td"),c=_(T),u=b(),d=y("tr"),h=y("td"),h.innerHTML="<strong>largest</strong>",f=y("td"),v=_(F),$=b(),S=y("tr"),k=y("td"),k.innerHTML="<strong>average</strong>",C=y("td"),z=_(O),j=b(),M=y("tr"),E=y("td"),E.innerHTML="<strong>gzipped full set as base64</strong>",L=y("td"),I=_(P),w(s,"class","svelte-mn3pro"),w(a,"class","svelte-mn3pro"),w(r,"class","svelte-mn3pro"),w(h,"class","svelte-mn3pro"),w(f,"class","svelte-mn3pro"),w(d,"class","svelte-mn3pro"),w(k,"class","svelte-mn3pro"),w(C,"class","svelte-mn3pro"),w(S,"class","svelte-mn3pro"),w(E,"class","svelte-mn3pro"),w(L,"class","svelte-mn3pro"),w(M,"class","svelte-mn3pro"),w(i,"class","svelte-mn3pro"),w(n,"class","metrics svelte-mn3pro")},m(e,t){m(e,n,t),p(n,o),p(n,l),p(n,i),p(i,r),p(r,s),p(r,a),p(a,c),p(i,u),p(i,d),p(d,h),p(d,f),p(f,v),p(i,$),p(i,S),p(S,k),p(S,C),p(C,z),p(i,j),p(i,M),p(M,E),p(M,L),p(L,I)},p(e,[t]){1&t&&T!==(T=ke(e[0])+"")&&x(c,T),2&t&&F!==(F=ke(e[1])+"")&&x(v,F),4&t&&O!==(O=ke(e[2])+"")&&x(z,O),8&t&&P!==(P=ke(e[3])+"")&&x(I,P)},i:e,o:e,d(e){e&&g(n)}}}function ke(e){return e<1024?`${e} bytes`:`${(e/1024).toFixed(3)} KB`}function Ce(e,t,n){let o,l,i,r,a,c;return s(e,ue,(e=>n(4,o=e))),s(e,fe,(e=>n(5,l=e))),s(e,he,(e=>n(3,i=e))),e.$$.update=()=>{if(48&e.$$.dirty){const e=o[`format_${l.tinyFormat}`][`quality_${l.tinyQuality}`][`size_${l.tinySize}`];n(0,r=Math.min(...e)),n(1,a=Math.max(...e)),n(2,c=Math.ceil(e.reduce(((e,t)=>e+t))/e.length))}},[r,a,c,i,o,l]}class ze extends re{constructor(e){super(),ie(this,e,Ce,Se,r,{})}}function je(e,t,n){const o=e.slice();return o[14]=t[n],o}function Me(e,t,n){const o=e.slice();return o[17]=t[n],o}function Ee(e,t,n){const o=e.slice();return o[20]=t[n],o}function Le(e,t,n){const o=e.slice();return o[17]=t[n],o}function Ie(e){let t,n,o,l=e[17]+"";return{c(){t=y("option"),n=_(l),t.__value=o=e[17],t.value=t.__value},m(e,o){m(e,t,o),p(t,n)},p(e,i){2&i&&l!==(l=e[17]+"")&&x(n,l),2&i&&o!==(o=e[17])&&(t.__value=o,t.value=t.__value)},d(e){e&&g(t)}}}function Te(e){let t,n,o,l=e[20]+"";return{c(){t=y("option"),n=_(l),t.__value=o=e[20],t.value=t.__value},m(e,o){m(e,t,o),p(t,n)},p(e,i){2&i&&l!==(l=e[20]+"")&&x(n,l),2&i&&o!==(o=e[20])&&(t.__value=o,t.value=t.__value)},d(e){e&&g(t)}}}function Fe(e){let t,n,o,l=e[17]+"";return{c(){t=y("option"),n=_(l),t.__value=o=e[17],t.value=t.__value},m(e,o){m(e,t,o),p(t,n)},p(e,i){2&i&&l!==(l=e[17]+"")&&x(n,l),2&i&&o!==(o=e[17])&&(t.__value=o,t.value=t.__value)},d(e){e&&g(t)}}}function Oe(e){let t,n,o,l=e[14]+"";return{c(){t=y("option"),n=_(l),t.__value=o=e[14],t.value=t.__value},m(e,o){m(e,t,o),p(t,n)},p(e,i){2&i&&l!==(l=e[14]+"")&&x(n,l),2&i&&o!==(o=e[14])&&(t.__value=o,t.value=t.__value)},d(e){e&&g(t)}}}function Pe(e){let t,n;return t=new ze({}),{c(){te(t.$$.fragment)},m(e,o){ne(t,e,o),n=!0},i(e){n||(W(t.$$.fragment,e),n=!0)},o(e){Y(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}function qe(e){let t,n,o,i,r,s,a,c,u,d,h,f,x,k,z,j,M,E,L,I,T,F,O,P,q,Q,B,A,H,N,R,G,J,Z,K,X,ee,te,ne,oe,le,ie,re,se,ae,ce,ue,de,he,fe,pe,me,ge,ve,ye,_e,be,$e=e[1].normalSizes.reverse(),we=[];for(let t=0;t<$e.length;t+=1)we[t]=Ie(Le(e,$e,t));let xe=e[1].qualities,Se=[];for(let t=0;t<xe.length;t+=1)Se[t]=Te(Ee(e,xe,t));let ke=e[1].tinySizes,Ce=[];for(let t=0;t<ke.length;t+=1)Ce[t]=Fe(Me(e,ke,t));let ze=e[1].formats,qe=[];for(let t=0;t<ze.length;t+=1)qe[t]=Oe(je(e,ze,t));let Qe=e[2]&&Pe();return{c(){t=y("div"),n=y("div"),o=y("h2"),o.textContent="Controls",i=b(),r=y("div"),s=y("label"),a=_("Use Base64 encoded data for previews\n                "),c=y("input"),u=b(),d=y("hr"),h=b(),f=y("div"),x=y("label"),k=_("Normal Image Size:\n                "),z=y("select");for(let e=0;e<we.length;e+=1)we[e].c();j=b(),M=y("label"),E=_("Tiny Image Quality:\n                "),L=y("select");for(let e=0;e<Se.length;e+=1)Se[e].c();I=b(),T=y("label"),F=_("Tiny Image Resolution:\n                "),O=y("select");for(let e=0;e<Ce.length;e+=1)Ce[e].c();P=b(),q=y("label"),Q=_("Tiny Image Format:\n                "),B=y("select");for(let e=0;e<qe.length;e+=1)qe[e].c();A=b(),H=y("div"),N=y("div"),R=_("Placeholder Mode:\n                "),G=y("label"),J=y("input"),Z=_("\n                    rollover"),K=b(),X=y("label"),ee=y("input"),te=_("\n                    always on"),ne=b(),oe=y("label"),le=y("input"),ie=_("\n                    always off"),re=b(),se=y("label"),ae=y("input"),ce=_("\n                    hold shift"),ue=b(),de=y("hr"),he=b(),fe=y("div"),pe=y("label"),me=_("Placeholder CSS:\n                "),ge=y("input"),ve=b(),Qe&&Qe.c(),w(c,"type","checkbox"),w(r,"class","svelte-9j6izg"),w(z,"id","normalSize"),void 0===e[0].normalSize&&D((()=>e[4].call(z))),w(x,"class","svelte-9j6izg"),w(L,"id","tinyQuality"),void 0===e[0].tinyQuality&&D((()=>e[5].call(L))),w(M,"class","svelte-9j6izg"),w(O,"id","tinySize"),void 0===e[0].tinySize&&D((()=>e[6].call(O))),w(T,"class","svelte-9j6izg"),w(B,"id","tinyFormat"),void 0===e[0].tinyFormat&&D((()=>e[7].call(B))),w(q,"class","svelte-9j6izg"),w(f,"class","params svelte-9j6izg"),w(J,"type","radio"),J.__value="rollover",J.value=J.__value,e[9][0].push(J),w(ee,"type","radio"),ee.__value="always on",ee.value=ee.__value,e[9][0].push(ee),w(le,"type","radio"),le.__value="always off",le.value=le.__value,e[9][0].push(le),w(ae,"type","radio"),ae.__value="hold shift",ae.value=ae.__value,e[9][0].push(ae),w(N,"class","svelte-9j6izg"),w(H,"class","svelte-9j6izg"),w(ge,"type","text"),w(ge,"class","svelte-9j6izg"),w(fe,"class","svelte-9j6izg"),w(n,"class","svelte-9j6izg"),w(t,"class","panel svelte-9j6izg")},m(l,g){m(l,t,g),p(t,n),p(n,o),p(n,i),p(n,r),p(r,s),p(s,a),p(s,c),c.checked=e[0].useEncodedData,p(n,u),p(n,d),p(n,h),p(n,f),p(f,x),p(x,k),p(x,z);for(let e=0;e<we.length;e+=1)we[e].m(z,null);C(z,e[0].normalSize),p(f,j),p(f,M),p(M,E),p(M,L);for(let e=0;e<Se.length;e+=1)Se[e].m(L,null);C(L,e[0].tinyQuality),p(f,I),p(f,T),p(T,F),p(T,O);for(let e=0;e<Ce.length;e+=1)Ce[e].m(O,null);C(O,e[0].tinySize),p(f,P),p(f,q),p(q,Q),p(q,B);for(let e=0;e<qe.length;e+=1)qe[e].m(B,null);C(B,e[0].tinyFormat),p(n,A),p(n,H),p(H,N),p(N,R),p(N,G),p(G,J),J.checked=J.__value===e[0].placeholderMode,p(G,Z),p(N,K),p(N,X),p(X,ee),ee.checked=ee.__value===e[0].placeholderMode,p(X,te),p(N,ne),p(N,oe),p(oe,le),le.checked=le.__value===e[0].placeholderMode,p(oe,ie),p(N,re),p(N,se),p(se,ae),ae.checked=ae.__value===e[0].placeholderMode,p(se,ce),p(n,ue),p(n,de),p(n,he),p(n,fe),p(fe,pe),p(pe,me),p(pe,ge),S(ge,e[0].placeholderCSS),p(t,ve),Qe&&Qe.m(t,null),ye=!0,_e||(be=[$(c,"change",e[3]),$(z,"change",e[4]),$(L,"change",e[5]),$(O,"change",e[6]),$(B,"change",e[7]),$(J,"change",e[8]),$(ee,"change",e[10]),$(le,"change",e[11]),$(ae,"change",e[12]),$(ge,"input",e[13])],_e=!0)},p(e,[n]){if(3&n&&(c.checked=e[0].useEncodedData),2&n){let t;for($e=e[1].normalSizes.reverse(),t=0;t<$e.length;t+=1){const o=Le(e,$e,t);we[t]?we[t].p(o,n):(we[t]=Ie(o),we[t].c(),we[t].m(z,null))}for(;t<we.length;t+=1)we[t].d(1);we.length=$e.length}if(3&n&&C(z,e[0].normalSize),2&n){let t;for(xe=e[1].qualities,t=0;t<xe.length;t+=1){const o=Ee(e,xe,t);Se[t]?Se[t].p(o,n):(Se[t]=Te(o),Se[t].c(),Se[t].m(L,null))}for(;t<Se.length;t+=1)Se[t].d(1);Se.length=xe.length}if(3&n&&C(L,e[0].tinyQuality),2&n){let t;for(ke=e[1].tinySizes,t=0;t<ke.length;t+=1){const o=Me(e,ke,t);Ce[t]?Ce[t].p(o,n):(Ce[t]=Fe(o),Ce[t].c(),Ce[t].m(O,null))}for(;t<Ce.length;t+=1)Ce[t].d(1);Ce.length=ke.length}if(3&n&&C(O,e[0].tinySize),2&n){let t;for(ze=e[1].formats,t=0;t<ze.length;t+=1){const o=je(e,ze,t);qe[t]?qe[t].p(o,n):(qe[t]=Oe(o),qe[t].c(),qe[t].m(B,null))}for(;t<qe.length;t+=1)qe[t].d(1);qe.length=ze.length}3&n&&C(B,e[0].tinyFormat),3&n&&(J.checked=J.__value===e[0].placeholderMode),3&n&&(ee.checked=ee.__value===e[0].placeholderMode),3&n&&(le.checked=le.__value===e[0].placeholderMode),3&n&&(ae.checked=ae.__value===e[0].placeholderMode),3&n&&ge.value!==e[0].placeholderCSS&&S(ge,e[0].placeholderCSS),e[2]?Qe?4&n&&W(Qe,1):(Qe=Pe(),Qe.c(),W(Qe,1),Qe.m(t,null)):Qe&&(U(),Y(Qe,1,1,(()=>{Qe=null})),V())},i(e){ye||(W(Qe),ye=!0)},o(e){Y(Qe),ye=!1},d(n){n&&g(t),v(we,n),v(Se,n),v(Ce,n),v(qe,n),e[9][0].splice(e[9][0].indexOf(J),1),e[9][0].splice(e[9][0].indexOf(ee),1),e[9][0].splice(e[9][0].indexOf(le),1),e[9][0].splice(e[9][0].indexOf(ae),1),Qe&&Qe.d(),_e=!1,l(be)}}}function Qe(e,t,n){let o,l,i;s(e,fe,(e=>n(0,o=e))),s(e,ce,(e=>n(1,l=e))),s(e,ue,(e=>n(2,i=e)));return[o,l,i,function(){o.useEncodedData=this.checked,fe.set(o)},function(){o.normalSize=z(this),fe.set(o)},function(){o.tinyQuality=z(this),fe.set(o)},function(){o.tinySize=z(this),fe.set(o)},function(){o.tinyFormat=z(this),fe.set(o)},function(){o.placeholderMode=this.__value,fe.set(o)},[[]],function(){o.placeholderMode=this.__value,fe.set(o)},function(){o.placeholderMode=this.__value,fe.set(o)},function(){o.placeholderMode=this.__value,fe.set(o)},function(){o.placeholderCSS=this.value,fe.set(o)}]}class Be extends re{constructor(e){super(),ie(this,e,Qe,qe,r,{})}}function De(e){let t,n,o,l;t=new Be({});let i=e[1]&&Ae();return{c(){te(t.$$.fragment),n=b(),i&&i.c(),o=_("")},m(e,r){ne(t,e,r),m(e,n,r),i&&i.m(e,r),m(e,o,r),l=!0},p(e,t){e[1]?i?2&t&&W(i,1):(i=Ae(),i.c(),W(i,1),i.m(o.parentNode,o)):i&&(U(),Y(i,1,1,(()=>{i=null})),V())},i(e){l||(W(t.$$.fragment,e),W(i),l=!0)},o(e){Y(t.$$.fragment,e),Y(i),l=!1},d(e){oe(t,e),e&&g(n),i&&i.d(e),e&&g(o)}}}function Ae(e){let t,n;return t=new xe({}),{c(){te(t.$$.fragment)},m(e,o){ne(t,e,o),n=!0},i(e){n||(W(t.$$.fragment,e),n=!0)},o(e){Y(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}function He(e){let t,n,o,l,i,r,s,a,c=e[0]&&De(e);return{c(){t=y("a"),t.innerHTML='<svg width="120" height="120" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm svelte-1m0tmo9"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>',n=b(),o=y("section"),o.innerHTML='<h1 class="svelte-1m0tmo9">Blur Load Tester</h1> \n    <p>I was intrigued by the way <a href="https://jmperezperez.com/medium-image-progressive-loading-placeholder/">Medium</a> and <a href="https://engineering.fb.com/2015/08/06/android/the-technology-behind-preview-photos/">Facebook</a> use blurred preview images while the larger versions are loading. It’s pretty clever — with a\n        small enough preview image, it becomes reasonable to send it as a data element in the HTML itself instead of\n        triggering another load. And with enough blurring, the artifacts from the super small image file aren’t visible.</p> \n    <p>So I ended up curious about optimal image compression for such a thing. I figured it would be different at\n        different display sizes of the actual image, but wanted to see for myself. JPEG is not the ideal choice for\n        images this small — it has a fixed overhead that usually is negligible but becomes a real factor when you’re\n        looking at just a few hundred bytes. WebP is actually great, getting down to just a hundred bytes or so with\n        decent visual quality, but it’s only supported in Safari on macOS &gt;= Big Sur. 😕 Other formats might be\n        promising, but nothing has as broad support as JPEG. So here we are.</p> \n    <p>Facebook went through the effort of identifying the common sections of the compressed JPEG header so they\n        could save an additional 20 bytes or so… I’m not quite that interested in hyper-optimization, but of course\n        there’s almost always a little more space to trim.</p> \n    <section>Caveats:\n        <ul><li>This page doesn’t do any checking about what image types your browser supports, so if you choose one\n                of the exotic ones and all the blurred images disappear, that’s why. (The usual solution to that\n                problem, <a href="https://caniuse.com/srcset"><code>srcset</code></a>, doesn’t work with data attributes,\n                understandably.)</li> \n            <li>Larger display sizes usually need a stronger blur to help cover the compression artifacts, and thus\n                reveal some of the problems around non-standard aspect ratios. Looks like the blur scaling might need\n                to be custom-fitted.\n                <ul><li>(I would guess this is why Medium does their version the blur in a canvas element. Might try to\n                    mock up a version that does that. But maybe not; I was more interested in testing different\n                    compression strategies for a longer-term project that I kind of want to get back to.)</li></ul></li> \n            <li>The controls take up too much space on mobile. Sorry; this is meant more for desktop use where\n                you can get a good look at the visual tradeoffs, not on mobile where the data tradeoffs are more\n                useful. ¯\\_(ツ)_/¯</li></ul></section> \n    <p>These photos were all taken by me at various points around the world. Consider them Creative Commons\n        licensed (<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>), I guess.</p>',l=b(),i=y("hr"),r=b(),s=y("main"),c&&c.c(),w(t,"href","https://github.com/sjml/blur-load-test"),w(t,"class","github-corner svelte-1m0tmo9"),w(t,"aria-label","View source on GitHub"),w(o,"class","explainer svelte-1m0tmo9"),w(s,"class","svelte-1m0tmo9")},m(e,u){m(e,t,u),m(e,n,u),m(e,o,u),m(e,l,u),m(e,i,u),m(e,r,u),m(e,s,u),c&&c.m(s,null),a=!0},p(e,[t]){e[0]?c?(c.p(e,t),1&t&&W(c,1)):(c=De(e),c.c(),W(c,1),c.m(s,null)):c&&(U(),Y(c,1,1,(()=>{c=null})),V())},i(e){a||(W(c),a=!0)},o(e){Y(c),a=!1},d(e){e&&g(t),e&&g(n),e&&g(o),e&&g(l),e&&g(i),e&&g(r),e&&g(s),c&&c.d()}}}function Ne(e,t,n){let o,l,i,r,c;s(e,fe,(e=>n(2,o=e))),s(e,he,(e=>n(3,l=e))),s(e,ce,(e=>n(0,i=e))),s(e,de,(e=>n(1,r=e))),s(e,ue,(e=>n(4,c=e)));var u=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(l,i){function r(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))};function d(){return u(this,void 0,void 0,(function*(){const e=yield fetch(`./img/tiny/format_${o.tinyFormat}/quality_${o.tinyQuality}/size_${o.tinySize}/imageData.json`);if(!e.ok)return null;a(he,l=parseInt(e.headers.get("Content-Length")),l);return yield e.json()}))}return function(){return u(this,void 0,void 0,(function*(){const e=yield fetch("./img/imageData.json");if(!e.ok)return null;return yield e.json()}))}().then((e=>a(ce,i=e,i))).then((()=>{d().then((e=>a(de,r=e,r)))})),function(){return u(this,void 0,void 0,(function*(){const e=yield fetch("./img/sizeReport.json");if(!e.ok)return null;return yield e.json()}))}().then((e=>a(ue,c=e,c))),fe.subscribe((e=>{d().then((e=>a(de,r=e,r)))})),[i,r]}return new class extends re{constructor(e){super(),ie(this,e,Ne,He,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
