import{f as q,h as B,y as l,o as i,e as F,w as o,b as s,d as r,a as d,c as I,a5 as P,t as w,B as $,a4 as T,_ as m,ah as L,r as S,g as M}from"./CNPL7z6M.js";import{u as N,_ as O}from"./BM1RHDc4.js";import{_ as Q}from"./Cm_-hEwd.js";import{_ as E}from"./C4ITauSg.js";import{_ as G}from"./B-MMSQ2H.js";import{_}from"./Cro7UY5X.js";import{_ as f}from"./6Piwvu-K.js";import{u as j,f as A,l as D,d as V}from"./BJb6YEqY.js";import"./CHz-WifR.js";import"./BYx3GJk0.js";import"./K1-EsG4d.js";import"./WyM-X9FX.js";import"./CZLSfOGP.js";import"./B5rxJs06.js";const z={class:"flex justify-between items-center"},H={class:"font-bold varela underline decoration-1 text-2xl"},J={class:"h-60 flex justify-between"},K={class:"min-w-50 max-w-50 flex"},R={class:"w-full"},W={class:"overflow-y-scroll skillsScrollBlur h-full","data-lenis-prevent":""},Y=q({__name:"1Card",setup(u){const n=N(),t=j(A(D(async()=>await V.projects.get("Quokka")))),y=B(()=>{var a;return!t.value||!t.value.startDate?"":`${((a=n.months[t.value.startDate.getMonth()??0])==null?void 0:a.substring(0,3))??""} ${t.value.startDate.getFullYear()}`}),U=B(()=>{var b;return!t.value||!t.value.endDate||!t.value.startDate?"":t.value.endDate<t.value.startDate?"Present":`${((b=n.months[t.value.endDate.getMonth()])==null?void 0:b.substring(0,3))??""} ${t.value.endDate.getFullYear()}`});return(b,a)=>{const x=G,e=F,g=_,k=f;return i(),l(e,{to:"/project/Quokka"},{default:o(()=>[s(k,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-230 max-w-230 hover:scale-105"},{header:o(()=>{var p;return[d("div",z,[d("span",H,w((p=$(t))==null?void 0:p.name),1),a[0]||(a[0]=r()),d("span",null,w($(y))+" - "+w($(U)),1)])]}),footer:o(()=>{var p;return[d("div",null,w((p=$(t))==null?void 0:p.description),1)]}),default:o(()=>{var p;return[a[8]||(a[8]=r()),d("div",J,[a[6]||(a[6]=d("div",{class:"h-full w-full dark:border-gray-600 !border-default border rounded-2xl"},[d("img",{class:"object-cover max-h-full w-full object-top rounded-2xl hover:transform-[scale(0.95)]",src:"https://faeq-f.github.io/Quokka/media/AppScreenshots/AllApps.png"})],-1)),a[7]||(a[7]=r()),d("div",K,[s(x,{orientation:"vertical",class:"h-full mx-3",ui:{border:"dark:border-gray-600 h-full"}}),a[5]||(a[5]=r()),d("div",R,[a[3]||(a[3]=d("span",{class:"font-bold varela text-sm text-center w-full block pr-2.5"},"Skills",-1)),a[4]||(a[4]=r()),d("ul",W,[(i(!0),I(T,null,P(((p=$(t))==null?void 0:p.skills)||[],(C,v)=>(i(),I("li",{key:v,class:"mb-2 text-center"},[s(g,{mode:"hover"},{content:o(()=>a[1]||(a[1]=[d("p",{class:"p-1 text-sm"},"See this skill",-1)])),default:o(()=>[s(e,{to:"/skill/"+C,class:"boxLink !no-underline"},{default:o(()=>[r(w(C),1)]),_:2},1032,["to"]),a[2]||(a[2]=r())]),_:2,__:[2]},1024)]))),128))])])])]),a[9]||(a[9]=r())]}),_:1,__:[8,9]})]),_:1})}}}),X={};function Z(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-100"},{header:o(()=>n[0]||(n[0]=[r(`
      WhatsappPortable
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-60"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const h=m(X,[["render",Z]]),c={};function nn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const rn=m(c,[["render",nn]]),on={};function tn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const dn=m(on,[["render",tn]]),en={};function sn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-160"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const ln=m(en,[["render",sn]]),un={};function fn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-160"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const mn=m(un,[["render",fn]]),an={};function pn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const bn=m(an,[["render",pn]]),vn={};function wn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Cn=m(vn,[["render",wn]]),$n={};function yn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-105"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const xn=m($n,[["render",yn]]),Sn={};function Un(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-105"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const gn=m(Sn,[["render",Un]]),kn={};function jn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-105"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const An=m(kn,[["render",jn]]),Dn={};function Vn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-350"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-90"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Bn=m(Dn,[["render",Vn]]),In={};function qn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Fn=m(In,[["render",qn]]),Pn={};function Tn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Ln=m(Pn,[["render",Tn]]),Mn={};function Nn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const On=m(Mn,[["render",Nn]]),Qn={};function En(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Gn=m(Qn,[["render",En]]),_n={};function zn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-230"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Hn=m(_n,[["render",zn]]),Jn={};function Kn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-100"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Rn=m(Jn,[["render",Kn]]),Wn={};function Yn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-100"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Xn=m(Wn,[["render",Yn]]),Zn={};function hn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-230"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const cn=m(Zn,[["render",hn]]),nr={};function rr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const or=m(nr,[["render",rr]]),tr={};function dr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const er=m(tr,[["render",dr]]),sr={};function ir(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const lr=m(sr,[["render",ir]]),ur={};function fr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const mr=m(ur,[["render",fr]]),ar={};function pr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const br=m(ar,[["render",pr]]),vr={};function wr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Cr=m(vr,[["render",wr]]),$r={};function yr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const xr=m($r,[["render",yr]]),Sr={};function Ur(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const gr=m(Sr,[["render",Ur]]),kr={};function jr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Ar=m(kr,[["render",jr]]),Dr={};function Vr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Br=m(Dr,[["render",Vr]]),Ir={};function qr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Fr=m(Ir,[["render",qr]]),Pr={};function Tr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Lr=m(Pr,[["render",Tr]]),Mr={};function Nr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Or=m(Mr,[["render",Nr]]),Qr={};function Er(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Gr=m(Qr,[["render",Er]]),_r={};function zr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Hr=m(_r,[["render",zr]]),Jr={};function Kr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Rr=m(Jr,[["render",Kr]]),Wr={};function Yr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Xr=m(Wr,[["render",Yr]]),Zr={};function hr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const cr=m(Zr,[["render",hr]]),no={};function ro(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const oo=m(no,[["render",ro]]),to={};function eo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const so=m(to,[["render",eo]]),io={};function lo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const uo=m(io,[["render",lo]]),fo={};function mo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const ao=m(fo,[["render",mo]]),po={};function bo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const vo=m(po,[["render",bo]]),wo={};function Co(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const $o=m(wo,[["render",Co]]),yo={};function xo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const So=m(yo,[["render",xo]]),Uo={};function go(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const ko=m(Uo,[["render",go]]),jo={};function Ao(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Do=m(jo,[["render",Ao]]),Vo={};function Bo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Io=m(Vo,[["render",Bo]]),qo={};function Fo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Po=m(qo,[["render",Fo]]),To={};function Lo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Mo=m(To,[["render",Lo]]),Zo=q({__name:"index",setup(u){const n=L(),t=S([{label:"Only Certificates",icon:"i-lucide-file-badge",value:"onlyCerts"},{label:"All Content",icon:"i-lucide-gallery-vertical-end",value:"all"},{label:"No Certificates",icon:"i-lucide-square-kanban",value:"noCerts"}]),y=S(n.query.certs||"all"),U=S([{type:"label",label:"Fruits"},{type:"item",label:"Apple",icon:"i-lucide-circle-help"},{type:"item",label:"Banana",icon:"i-lucide-circle-help"},{type:"item",label:"Blueberry",icon:"i-lucide-circle-help"},{type:"item",label:"Grapes",icon:"i-lucide-circle-help"},{type:"item",label:"Pineapple",icon:"i-lucide-circle-help"},{type:"separator"},{type:"label",label:"Vegetables"},{type:"item",label:"Broccoli",icon:"i-lucide-circle-help"},{type:"item",label:"Carrot",icon:"i-lucide-circle-help"},{type:"item",label:"Courgette",icon:"i-lucide-circle-help"},{type:"item",label:"Leek",icon:"i-lucide-circle-help"}]),b=S();function a(x){x&&setTimeout(()=>{document.querySelectorAll("[data-reka-popper-content-wrapper]")[0].setAttribute("data-lenis-prevent","")},100)}return j(A(D(()=>V.certificates.toArray()))),j(A(D(()=>V.projects.toArray()))),(x,e)=>{const g=M,k=O,p=Q;return i(),l(E,{contentClasses:"flex justify-evenly flex-wrap"},{"left-panel-header":o(()=>e[2]||(e[2]=[d("div",{class:"font-bold",style:{"line-height":"1"}},[d("p",{class:"text-[3rem] varela"},"Portfolio"),r(),d("p",{class:"text-[1rem]"},"What I have worked on")],-1)])),"left-panel-content":o(()=>{var C;return[e[3]||(e[3]=r(`
      filters here

      `)),s(k,{modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=v=>b.value=v),items:U.value,multiple:"",placeholder:"Select for tag cat",variant:"soft",style:{"--ui-primary":"#4a5565"},icon:(C=b.value)==null?void 0:C.icon,ui:{trailingIcon:"group-data-[state=open]:rotate-180 transition-transform duration-200"},"data-lenis-prevent":"",class:"mx-auto my-4 w-fit block","onUpdate:open":a},{"tags-item-text":o(v=>[s(g,{name:v.item.icon},null,8,["name"]),r(" "+w(v.item.label),1)]),_:1},8,["modelValue","items","icon"]),e[4]||(e[4]=r()),s(p,{content:!1,items:t.value,class:"mx-auto my-4 w-fit",style:{"--ui-primary":"#4a5565"},orientation:"vertical",modelValue:y.value,"onUpdate:modelValue":e[1]||(e[1]=v=>y.value=v),ui:{trigger:"self-start",label:"dark:text-white",leadingIcon:"dark:text-white"}},null,8,["items","modelValue"])]}),content:o(()=>[s(Y),e[5]||(e[5]=r()),s(h),e[6]||(e[6]=r()),s(rn),e[7]||(e[7]=r()),s(dn),e[8]||(e[8]=r()),s(ln),e[9]||(e[9]=r()),s(mn),e[10]||(e[10]=r()),s(bn),e[11]||(e[11]=r()),s(Cn),e[12]||(e[12]=r()),s(xn),e[13]||(e[13]=r()),s(gn),e[14]||(e[14]=r()),s(An),e[15]||(e[15]=r()),s(Bn),e[16]||(e[16]=r()),s(Fn),e[17]||(e[17]=r()),s(Ln),e[18]||(e[18]=r()),s(On),e[19]||(e[19]=r()),s(Gn),e[20]||(e[20]=r()),s(Hn),e[21]||(e[21]=r()),s(Rn),e[22]||(e[22]=r()),s(Xn),e[23]||(e[23]=r()),s(cn),e[24]||(e[24]=r()),s(or),e[25]||(e[25]=r()),s(er),e[26]||(e[26]=r()),s(lr),e[27]||(e[27]=r()),s(mr),e[28]||(e[28]=r()),s(br),e[29]||(e[29]=r()),s(Cr),e[30]||(e[30]=r()),s(xr),e[31]||(e[31]=r()),s(gr),e[32]||(e[32]=r()),s(Ar),e[33]||(e[33]=r()),s(Br),e[34]||(e[34]=r()),s(Fr),e[35]||(e[35]=r()),s(Lr),e[36]||(e[36]=r()),s(Or),e[37]||(e[37]=r()),s(Gr),e[38]||(e[38]=r()),s(Hr),e[39]||(e[39]=r()),s(Rr),e[40]||(e[40]=r()),s(Xr),e[41]||(e[41]=r()),s(cr),e[42]||(e[42]=r()),s(oo),e[43]||(e[43]=r()),s(so),e[44]||(e[44]=r()),s(uo),e[45]||(e[45]=r()),s(ao),e[46]||(e[46]=r()),s(vo),e[47]||(e[47]=r()),s($o),e[48]||(e[48]=r()),s(So),e[49]||(e[49]=r()),s(ko),e[50]||(e[50]=r()),s(Do),e[51]||(e[51]=r()),s(Io),e[52]||(e[52]=r()),s(Po),e[53]||(e[53]=r()),s(Mo)]),_:1,__:[54,55]})}}});export{Zo as default};
