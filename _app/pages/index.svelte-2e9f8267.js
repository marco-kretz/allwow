import{S as a,i as s,s as r,e as t,t as n,k as e,c,a as o,g as l,d as h,n as d,b as f,f as i,E as u,h as g,I as p,J as v}from"../chunks/vendor-456d1ef4.js";function E(a,s,r){const t=a.slice();return t[1]=s[r],t}function m(a){let s,r,p,v,E,m,w,D,b,I,k,x,y,M=a[1].name+"",V=a[1].description+"";return{c(){s=t("div"),r=t("div"),p=t("div"),v=t("h5"),E=n(M),m=e(),w=t("p"),D=n(V),b=e(),I=t("a"),k=n("Download"),y=e(),this.h()},l(a){s=c(a,"DIV",{class:!0});var t=o(s);r=c(t,"DIV",{class:!0});var n=o(r);p=c(n,"DIV",{class:!0});var e=o(p);v=c(e,"H5",{class:!0});var f=o(v);E=l(f,M),f.forEach(h),m=d(e),w=c(e,"P",{class:!0});var i=o(w);D=l(i,V),i.forEach(h),b=d(e),I=c(e,"A",{href:!0,class:!0,ref:!0,target:!0});var u=o(I);k=l(u,"Download"),u.forEach(h),e.forEach(h),n.forEach(h),y=d(t),t.forEach(h),this.h()},h(){f(v,"class","card-title"),f(w,"class","card-text"),f(I,"href",x=a[1].url),f(I,"class","btn btn-primary"),f(I,"ref","noopener"),f(I,"target","_blank"),f(p,"class","card-body"),f(r,"class","card"),f(s,"class","col-4")},m(a,t){i(a,s,t),u(s,r),u(r,p),u(p,v),u(v,E),u(p,m),u(p,w),u(w,D),u(p,b),u(p,I),u(I,k),u(s,y)},p(a,s){1&s&&M!==(M=a[1].name+"")&&g(E,M),1&s&&V!==(V=a[1].description+"")&&g(D,V),1&s&&x!==(x=a[1].url)&&f(I,"href",x)},d(a){a&&h(s)}}}function w(a){let s,r,g,w,D=a[0].addonManagers,b=[];for(let t=0;t<D.length;t+=1)b[t]=m(E(a,D,t));return{c(){s=t("h2"),r=n("AddOn-Manager"),g=e(),w=t("div");for(let a=0;a<b.length;a+=1)b[a].c();this.h()},l(a){s=c(a,"H2",{});var t=o(s);r=l(t,"AddOn-Manager"),t.forEach(h),g=d(a),w=c(a,"DIV",{class:!0});var n=o(w);for(let s=0;s<b.length;s+=1)b[s].l(n);n.forEach(h),this.h()},h(){f(w,"class","row gx-3 gy-3")},m(a,t){i(a,s,t),u(s,r),i(a,g,t),i(a,w,t);for(let s=0;s<b.length;s+=1)b[s].m(w,null)},p(a,[s]){if(1&s){let r;for(D=a[0].addonManagers,r=0;r<D.length;r+=1){const t=E(a,D,r);b[r]?b[r].p(t,s):(b[r]=m(t),b[r].c(),b[r].m(w,null))}for(;r<b.length;r+=1)b[r].d(1);b.length=D.length}},i:p,o:p,d(a){a&&h(s),a&&h(g),a&&h(w),v(b,a)}}}async function D({fetch:a}){const s=await a("/api.json");return s.ok?{props:{data:await s.json()}}:{status:s.status,error:new Error}}function b(a,s,r){let{data:t}=s;return a.$$set=a=>{"data"in a&&r(0,t=a.data)},[t]}class I extends a{constructor(a){super(),s(this,a,b,w,r,{data:0})}}export{I as default,D as load};