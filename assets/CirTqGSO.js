import{b as F}from"./6OiozuIk.js";import{f as q,h as B,y as u,o as l,e as M,w as r,b as i,d as t,a as e,c as I,a8 as P,t as C,B as $,a7 as T,_ as m,ai as E,r as _,g as L}from"./y_yassub.js";import{u as N,_ as O}from"./BQAgk0oI.js";import{_ as Q}from"./CXyxiI_K.js";import{_ as z}from"./DOAZjb1b.js";import{_ as G}from"./C7Vy3gjK.js";import{_ as H}from"./Dv-aUaC7.js";import{_ as a}from"./DCaYY43h.js";import{u as j,f as A,l as D,d as V}from"./ZdRmVkSK.js";import"./B3sSh_qQ.js";import"./CIsShkiq.js";import"./DlLmYrF_.js";import"./DOSZ1obr.js";import"./B5rxJs06.js";const J={class:"flex justify-between items-center"},K={class:"font-bold varela underline decoration-1 text-2xl"},R={class:"h-60 flex justify-between"},W={class:"min-w-50 max-w-50 flex"},Y={class:"w-full"},X={class:"overflow-y-scroll skillsScrollBlur h-full","data-lenis-prevent":""},Z=q({__name:"1Card",setup(f){const n=N(),d=j(A(D(async()=>await V.projects.get("Quokka")))),y=B(()=>{var p;return!d.value||!d.value.startDate?"":`${((p=n.months[d.value.startDate.getMonth()??0])==null?void 0:p.substring(0,3))??""} ${d.value.startDate.getFullYear()}`}),g=B(()=>{var v;return!d.value||!d.value.endDate||!d.value.startDate?"":d.value.endDate<d.value.startDate?"Present":`${((v=n.months[d.value.endDate.getMonth()])==null?void 0:v.substring(0,3))??""} ${d.value.endDate.getFullYear()}`});return(v,p)=>{const x=G,o=M,s=H,k=a;return l(),u(o,{to:"/project/Quokka"},{default:r(()=>[i(k,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-230 max-w-230 hover:scale-105"},{header:r(()=>{var b;return[e("div",J,[e("span",K,C((b=$(d))==null?void 0:b.name),1),p[0]||(p[0]=t()),e("span",null,C($(y))+" - "+C($(g)),1)])]}),footer:r(()=>{var b;return[e("div",null,C((b=$(d))==null?void 0:b.description),1)]}),default:r(()=>{var b;return[p[8]||(p[8]=t()),e("div",R,[p[6]||(p[6]=e("div",{class:"h-full w-full dark:border-gray-600 !border-default border rounded-2xl"},[e("img",{class:"object-cover max-h-full w-full object-top rounded-2xl hover:transform-[scale(0.95)]",src:"https://faeq-f.github.io/Quokka/media/AppScreenshots/AllApps.png"})],-1)),p[7]||(p[7]=t()),e("div",W,[i(x,{orientation:"vertical",class:"h-full mx-3",ui:{border:"dark:border-gray-600 h-full"}}),p[5]||(p[5]=t()),e("div",Y,[p[3]||(p[3]=e("span",{class:"font-bold varela text-sm text-center w-full block pr-2.5"},"Skills",-1)),p[4]||(p[4]=t()),e("ul",X,[(l(!0),I(T,null,P(((b=$(d))==null?void 0:b.skills)||[],(S,w)=>(l(),I("li",{key:w,class:"mb-2 text-center"},[i(s,{mode:"hover"},{content:r(()=>p[1]||(p[1]=[e("p",{class:"p-1 text-sm"},"See this skill",-1)])),default:r(()=>[i(o,{to:"/skill/"+S,class:"boxLink !no-underline"},{default:r(()=>[t(C(S),1)]),_:2},1032,["to"]),p[2]||(p[2]=t())]),_:2,__:[2]},1024)]))),128))])])])]),p[9]||(p[9]=t())]}),_:1,__:[8,9]})]),_:1})}}}),c={};function h(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-100"},{header:r(()=>n[0]||(n[0]=[t(`
      WhatsappPortable
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-60"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const nn=m(c,[["render",h]]),rn={};function tn(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const on=m(rn,[["render",tn]]),dn={};function en(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const sn=m(dn,[["render",en]]),ln={};function un(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-160"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const fn=m(ln,[["render",un]]),an={};function mn(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-160"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const pn=m(an,[["render",mn]]),bn={};function vn(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const wn=m(bn,[["render",vn]]),Cn={};function $n(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const yn=m(Cn,[["render",$n]]),xn={};function Sn(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-105"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Un=m(xn,[["render",Sn]]),_n={};function gn(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-105"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const kn=m(_n,[["render",gn]]),jn={};function An(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-105"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Dn=m(jn,[["render",An]]),Vn={};function Bn(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-350"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-90"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const In=m(Vn,[["render",Bn]]),qn={};function Fn(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Mn=m(qn,[["render",Fn]]),Pn={};function Tn(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const En=m(Pn,[["render",Tn]]),Ln={};function Nn(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const On=m(Ln,[["render",Nn]]),Qn={};function zn(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Gn=m(Qn,[["render",zn]]),Hn={};function Jn(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-230"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Kn=m(Hn,[["render",Jn]]),Rn={};function Wn(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-100"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Yn=m(Rn,[["render",Wn]]),Xn={};function Zn(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-100"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const cn=m(Xn,[["render",Zn]]),hn={};function nr(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-230"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const rr=m(hn,[["render",nr]]),tr={};function or(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const dr=m(tr,[["render",or]]),er={};function ir(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const sr=m(er,[["render",ir]]),lr={};function ur(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const fr=m(lr,[["render",ur]]),ar={};function mr(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const pr=m(ar,[["render",mr]]),br={};function vr(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const wr=m(br,[["render",vr]]),Cr={};function $r(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const yr=m(Cr,[["render",$r]]),xr={};function Sr(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Ur=m(xr,[["render",Sr]]),_r={};function gr(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const kr=m(_r,[["render",gr]]),jr={};function Ar(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Dr=m(jr,[["render",Ar]]),Vr={};function Br(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Ir=m(Vr,[["render",Br]]),qr={};function Fr(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Mr=m(qr,[["render",Fr]]),Pr={};function Tr(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Er=m(Pr,[["render",Tr]]),Lr={};function Nr(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Or=m(Lr,[["render",Nr]]),Qr={};function zr(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Gr=m(Qr,[["render",zr]]),Hr={};function Jr(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Kr=m(Hr,[["render",Jr]]),Rr={};function Wr(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Yr=m(Rr,[["render",Wr]]),Xr={};function Zr(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const cr=m(Xr,[["render",Zr]]),hr={};function nt(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const rt=m(hr,[["render",nt]]),tt={};function ot(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const dt=m(tt,[["render",ot]]),et={};function it(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const st=m(et,[["render",it]]),lt={};function ut(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const ft=m(lt,[["render",ut]]),at={};function mt(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const pt=m(at,[["render",mt]]),bt={};function vt(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const wt=m(bt,[["render",vt]]),Ct={};function $t(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const yt=m(Ct,[["render",$t]]),xt={};function St(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Ut=m(xt,[["render",St]]),_t={};function gt(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const kt=m(_t,[["render",gt]]),jt={};function At(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Dt=m(jt,[["render",At]]),Vt={};function Bt(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const It=m(Vt,[["render",Bt]]),qt={};function Ft(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Mt=m(qt,[["render",Ft]]),Pt={};function Tt(f,n){const d=a;return l(),u(d,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:r(()=>n[0]||(n[0]=[t(`
      header
    `)])),footer:r(()=>n[1]||(n[1]=[e("div",null,`
        footer
      `,-1)])),default:r(()=>[n[2]||(n[2]=t()),n[3]||(n[3]=e("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=t())]),_:1,__:[2,3,4]})}const Et=m(Pt,[["render",Tt]]),Lt={class:"font-bold",style:{"line-height":"1"}},ht=q({__name:"index",setup(f){const n=E(),d=_([{label:"Only Certificates",icon:"i-lucide-file-badge",value:"onlyCerts"},{label:"All Content",icon:"i-lucide-gallery-vertical-end",value:"all"},{label:"No Certificates",icon:"i-lucide-square-kanban",value:"noCerts"}]),y=_(n.query.certs||"all"),g=_([{type:"label",label:"Fruits"},{type:"item",label:"Apple",icon:"i-lucide-circle-help"},{type:"item",label:"Banana",icon:"i-lucide-circle-help"},{type:"item",label:"Blueberry",icon:"i-lucide-circle-help"},{type:"item",label:"Grapes",icon:"i-lucide-circle-help"},{type:"item",label:"Pineapple",icon:"i-lucide-circle-help"},{type:"separator"},{type:"label",label:"Vegetables"},{type:"item",label:"Broccoli",icon:"i-lucide-circle-help"},{type:"item",label:"Carrot",icon:"i-lucide-circle-help"},{type:"item",label:"Courgette",icon:"i-lucide-circle-help"},{type:"item",label:"Leek",icon:"i-lucide-circle-help"}]),v=_();function p(x){x&&setTimeout(()=>{document.querySelectorAll("[data-reka-popper-content-wrapper]")[0].setAttribute("data-lenis-prevent","")},100)}return j(A(D(()=>V.certificates.toArray()))),j(A(D(()=>V.projects.toArray()))),(x,o)=>{const s=F,k=L,b=O,S=Q;return l(),u(z,{contentClasses:"flex justify-evenly flex-wrap"},{"left-panel-header":r(()=>[e("div",Lt,[i(s,{direction:"up",duration:700,delay:500},{default:r(()=>o[2]||(o[2]=[e("p",{class:"text-[3rem] varela"},"Portfolio",-1)])),_:1,__:[2]}),o[4]||(o[4]=t()),i(s,{direction:"up",duration:700,delay:600},{default:r(()=>o[3]||(o[3]=[e("p",{class:"text-[1rem]"},"What I have worked on",-1)])),_:1,__:[3]})])]),"left-panel-content":r(()=>[o[5]||(o[5]=t(`
      filters here
      `)),i(s,{direction:"up",duration:700,delay:700},{default:r(()=>{var w;return[i(b,{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=U=>v.value=U),items:g.value,multiple:"",placeholder:"Select for tag cat",variant:"soft",style:{"--ui-primary":"#4a5565"},icon:(w=v.value)==null?void 0:w.icon,ui:{trailingIcon:"group-data-[state=open]:rotate-180 transition-transform duration-200"},"data-lenis-prevent":"",class:"mx-auto my-4 w-fit block","onUpdate:open":p},{"tags-item-text":r(U=>[i(k,{name:U.item.icon},null,8,["name"]),t(" "+C(U.item.label),1)]),_:1},8,["modelValue","items","icon"])]}),_:1}),o[6]||(o[6]=t()),i(s,{direction:"up",duration:700,delay:800},{default:r(()=>[i(S,{content:!1,items:d.value,class:"mx-auto w-fit",style:{"--ui-primary":"#4a5565"},orientation:"vertical",modelValue:y.value,"onUpdate:modelValue":o[1]||(o[1]=w=>y.value=w),ui:{trigger:"self-start",label:"dark:text-white",leadingIcon:"dark:text-white"}},null,8,["items","modelValue"])]),_:1})]),"left-panel-footer":r(()=>o[7]||(o[7]=[])),content:r(()=>[i(s,{direction:"right",duration:1e3},{default:r(()=>[i(Z)]),_:1}),o[8]||(o[8]=t()),i(s,{direction:"left",duration:1e3},{default:r(()=>[i(nn)]),_:1}),o[9]||(o[9]=t()),i(s,{direction:"right",duration:1e3},{default:r(()=>[i(on)]),_:1}),o[10]||(o[10]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(sn)]),_:1}),o[11]||(o[11]=t()),i(s,{direction:"left",duration:1e3},{default:r(()=>[i(fn)]),_:1}),o[12]||(o[12]=t()),i(s,{direction:"right",duration:1e3},{default:r(()=>[i(pn)]),_:1}),o[13]||(o[13]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(wn)]),_:1}),o[14]||(o[14]=t()),i(s,{direction:"left",duration:1e3},{default:r(()=>[i(yn)]),_:1}),o[15]||(o[15]=t()),i(s,{direction:"right",duration:1e3},{default:r(()=>[i(Un)]),_:1}),o[16]||(o[16]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(kn)]),_:1}),o[17]||(o[17]=t()),i(s,{direction:"left",duration:1e3},{default:r(()=>[i(Dn)]),_:1}),o[18]||(o[18]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(In)]),_:1}),o[19]||(o[19]=t()),i(s,{direction:"right",duration:1e3},{default:r(()=>[i(Mn)]),_:1}),o[20]||(o[20]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(En)]),_:1}),o[21]||(o[21]=t()),i(s,{direction:"down",duration:1e3},{default:r(()=>[i(On)]),_:1}),o[22]||(o[22]=t()),i(s,{direction:"left",duration:1e3},{default:r(()=>[i(Gn)]),_:1}),o[23]||(o[23]=t()),i(s,{direction:"right",duration:1e3},{default:r(()=>[i(Kn)]),_:1}),o[24]||(o[24]=t()),i(s,{direction:"left",duration:1e3},{default:r(()=>[i(Yn)]),_:1}),o[25]||(o[25]=t()),i(s,{direction:"right",duration:1e3},{default:r(()=>[i(cn)]),_:1}),o[26]||(o[26]=t()),i(s,{direction:"left",duration:1e3},{default:r(()=>[i(rr)]),_:1}),o[27]||(o[27]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(dr)]),_:1}),o[28]||(o[28]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(sr)]),_:1}),o[29]||(o[29]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(fr)]),_:1}),o[30]||(o[30]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(pr)]),_:1}),o[31]||(o[31]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(wr)]),_:1}),o[32]||(o[32]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(yr)]),_:1}),o[33]||(o[33]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(Ur)]),_:1}),o[34]||(o[34]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(kr)]),_:1}),o[35]||(o[35]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(Dr)]),_:1}),o[36]||(o[36]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(Ir)]),_:1}),o[37]||(o[37]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(Mr)]),_:1}),o[38]||(o[38]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(Er)]),_:1}),o[39]||(o[39]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(Or)]),_:1}),o[40]||(o[40]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(Gr)]),_:1}),o[41]||(o[41]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(Kr)]),_:1}),o[42]||(o[42]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(Yr)]),_:1}),o[43]||(o[43]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(cr)]),_:1}),o[44]||(o[44]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(rt)]),_:1}),o[45]||(o[45]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(dt)]),_:1}),o[46]||(o[46]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(st)]),_:1}),o[47]||(o[47]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(ft)]),_:1}),o[48]||(o[48]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(pt)]),_:1}),o[49]||(o[49]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(wt)]),_:1}),o[50]||(o[50]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(yt)]),_:1}),o[51]||(o[51]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(Ut)]),_:1}),o[52]||(o[52]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(kt)]),_:1}),o[53]||(o[53]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(Dt)]),_:1}),o[54]||(o[54]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(It)]),_:1}),o[55]||(o[55]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(Mt)]),_:1}),o[56]||(o[56]=t()),i(s,{direction:"up",duration:1e3},{default:r(()=>[i(Et)]),_:1})]),_:1,__:[57,58,59]})}}});export{ht as default};
