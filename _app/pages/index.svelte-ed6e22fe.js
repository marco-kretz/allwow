import{S as t,i as l,s as r,e as a,k as n,t as e,c as s,a as o,n as c,g as h,d as f,J as i,b as d,K as g,f as u,E as m,h as p,L as v,I as b}from"../chunks/vendor-e57348a7.js";function E(t,l,r){const a=t.slice();return a[1]=l[r],a}function w(t,l,r){const a=t.slice();return a[4]=l[r],a}function k(t,l,r){const a=t.slice();return a[7]=l[r],a}function I(t){let l,r=t[1].pros,n=[];for(let a=0;a<r.length;a+=1)n[a]=x(k(t,r,a));return{c(){l=a("ul");for(let t=0;t<n.length;t+=1)n[t].c()},l(t){l=s(t,"UL",{});var r=o(l);for(let l=0;l<n.length;l+=1)n[l].l(r);r.forEach(f)},m(t,r){u(t,l,r);for(let a=0;a<n.length;a+=1)n[a].m(l,null)},p(t,a){if(1&a){let e;for(r=t[1].pros,e=0;e<r.length;e+=1){const s=k(t,r,e);n[e]?n[e].p(s,a):(n[e]=x(s),n[e].c(),n[e].m(l,null))}for(;e<n.length;e+=1)n[e].d(1);n.length=r.length}},d(t){t&&f(l),v(n,t)}}}function x(t){let l,r,n,c=t[7]+"";return{c(){l=a("li"),r=e("✔️ "),n=e(c)},l(t){l=s(t,"LI",{});var a=o(l);r=h(a,"✔️ "),n=h(a,c),a.forEach(f)},m(t,a){u(t,l,a),m(l,r),m(l,n)},p(t,l){1&l&&c!==(c=t[7]+"")&&p(n,c)},d(t){t&&f(l)}}}function L(t){let l,r=t[1].cons,n=[];for(let a=0;a<r.length;a+=1)n[a]=M(w(t,r,a));return{c(){l=a("ul");for(let t=0;t<n.length;t+=1)n[t].c()},l(t){l=s(t,"UL",{});var r=o(l);for(let l=0;l<n.length;l+=1)n[l].l(r);r.forEach(f)},m(t,r){u(t,l,r);for(let a=0;a<n.length;a+=1)n[a].m(l,null)},p(t,a){if(1&a){let e;for(r=t[1].cons,e=0;e<r.length;e+=1){const s=w(t,r,e);n[e]?n[e].p(s,a):(n[e]=M(s),n[e].c(),n[e].m(l,null))}for(;e<n.length;e+=1)n[e].d(1);n.length=r.length}},d(t){t&&f(l),v(n,t)}}}function M(t){let l,r,n,c=t[4]+"";return{c(){l=a("li"),r=e("❌ "),n=e(c)},l(t){l=s(t,"LI",{});var a=o(l);r=h(a,"❌ "),n=h(a,c),a.forEach(f)},m(t,a){u(t,l,a),m(l,r),m(l,n)},p(t,l){1&l&&c!==(c=t[4]+"")&&p(n,c)},d(t){t&&f(l)}}}function D(t){let l,r,v,b,E,w,k,x,M,D,V,j,y,A,C,H=t[1].name+"",U=t[1].pros&&I(t),W=t[1].cons&&L(t);return{c(){l=a("div"),r=a("div"),v=a("img"),E=n(),w=a("div"),k=a("h5"),x=e(H),M=n(),U&&U.c(),D=n(),W&&W.c(),V=n(),j=a("a"),y=e("Website"),C=n(),this.h()},l(t){l=s(t,"DIV",{class:!0});var a=o(l);r=s(a,"DIV",{class:!0});var n=o(r);v=s(n,"IMG",{src:!0,class:!0,style:!0,height:!0,width:!0,alt:!0}),E=c(n),w=s(n,"DIV",{class:!0});var e=o(w);k=s(e,"H5",{class:!0});var i=o(k);x=h(i,H),i.forEach(f),M=c(e),U&&U.l(e),D=c(e),W&&W.l(e),V=c(e),j=s(e,"A",{href:!0,class:!0,ref:!0,target:!0});var d=o(j);y=h(d,"Website"),d.forEach(f),e.forEach(f),n.forEach(f),C=c(a),a.forEach(f),this.h()},h(){i(v.src,b=t[1].image)||d(v,"src",b),d(v,"class","card-img-top manager-logo p-2"),g(v,"background-color",t[1].bgColor),d(v,"height","70px"),d(v,"width","auto"),d(v,"alt","..."),d(k,"class","card-title text-center"),d(j,"href",A=t[1].url),d(j,"class","btn btn-warning d-block"),d(j,"ref","noopener"),d(j,"target","_blank"),d(w,"class","card-body"),d(r,"class","card text-white bg-dark"),d(l,"class","col-3")},m(t,a){u(t,l,a),m(l,r),m(r,v),m(r,E),m(r,w),m(w,k),m(k,x),m(w,M),U&&U.m(w,null),m(w,D),W&&W.m(w,null),m(w,V),m(w,j),m(j,y),m(l,C)},p(t,l){1&l&&!i(v.src,b=t[1].image)&&d(v,"src",b),1&l&&g(v,"background-color",t[1].bgColor),1&l&&H!==(H=t[1].name+"")&&p(x,H),t[1].pros?U?U.p(t,l):(U=I(t),U.c(),U.m(w,D)):U&&(U.d(1),U=null),t[1].cons?W?W.p(t,l):(W=L(t),W.c(),W.m(w,V)):W&&(W.d(1),W=null),1&l&&A!==(A=t[1].url)&&d(j,"href",A)},d(t){t&&f(l),U&&U.d(),W&&W.d()}}}function V(t){let l,r,i,g,p=t[0].addonManagers,w=[];for(let a=0;a<p.length;a+=1)w[a]=D(E(t,p,a));return{c(){l=a("h2"),r=e("Addon-Manager"),i=n(),g=a("div");for(let t=0;t<w.length;t+=1)w[t].c();this.h()},l(t){l=s(t,"H2",{class:!0});var a=o(l);r=h(a,"Addon-Manager"),a.forEach(f),i=c(t),g=s(t,"DIV",{class:!0});var n=o(g);for(let l=0;l<w.length;l+=1)w[l].l(n);n.forEach(f),this.h()},h(){d(l,"class","text-white text-center mb-4"),d(g,"class","row row-cols-2 row-cols-md-4 g-3")},m(t,a){u(t,l,a),m(l,r),u(t,i,a),u(t,g,a);for(let l=0;l<w.length;l+=1)w[l].m(g,null)},p(t,[l]){if(1&l){let r;for(p=t[0].addonManagers,r=0;r<p.length;r+=1){const a=E(t,p,r);w[r]?w[r].p(a,l):(w[r]=D(a),w[r].c(),w[r].m(g,null))}for(;r<w.length;r+=1)w[r].d(1);w.length=p.length}},i:b,o:b,d(t){t&&f(l),t&&f(i),t&&f(g),v(w,t)}}}async function j({fetch:t}){const l=await t("/api.json");return l.ok?{props:{data:await l.json()}}:{status:l.status,error:new Error}}function y(t,l,r){let{data:a}=l;return t.$$set=t=>{"data"in t&&r(0,a=t.data)},[a]}class A extends t{constructor(t){super(),l(this,t,y,V,r,{data:0})}}export{A as default,j as load};