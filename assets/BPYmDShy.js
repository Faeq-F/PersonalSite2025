import{e as q,g as O,x as l,o as i,_ as F,w as o,b as s,d as r,a as d,c as P,a4 as T,t as C,A as y,a3 as L,af as M,r as w,O as N,f as Q}from"./Cl3NPVJ_.js";import{u as z,_ as E}from"./BVnoacVn.js";import{_ as f,a as G}from"./DpuPagF8.js";import{c as R}from"./BDEhwAUY.js";import{_ as H}from"./CAieKRWo.js";import{_ as J}from"./BQGN4zse.js";import{u as j,f as D,l as B,d as I}from"./CqyHebvm.js";import{_ as a}from"./DlAUqK2U.js";import"./fw-IQFbe.js";import"./5Li1dgKN.js";import"./BF87-QKH.js";import"./zE0wEfSg.js";import"./B5rxJs06.js";const K={class:"flex justify-between items-center"},W={class:"font-bold varela underline decoration-1 text-2xl"},Y={class:"h-60 flex justify-between"},X={class:"min-w-50 max-w-50 flex"},Z={class:"w-full"},_={class:"overflow-y-scroll skillsScrollBlur h-full"},c=q({__name:"1Card",setup(u){const n=z(),t=j(D(B(async()=>await I.projects.get("Quokka")))),x=O(()=>{var m;return!t.value||!t.value.startDate?"":`${((m=n.months[t.value.startDate.getMonth()??0])==null?void 0:m.substring(0,3))??""} ${t.value.startDate.getFullYear()}`}),V=O(()=>{var v;return!t.value||!t.value.endDate||!t.value.startDate?"":t.value.endDate<t.value.startDate?"Present":`${((v=n.months[t.value.endDate.getMonth()])==null?void 0:v.substring(0,3))??""} ${t.value.endDate.getFullYear()}`});return(v,m)=>{const $=H,S=F,U=J,e=f;return i(),l(S,{to:"/project/Quokka"},{default:o(()=>[s(e,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-230 max-w-230 hover:scale-105"},{header:o(()=>{var p;return[d("div",K,[d("span",W,C((p=y(t))==null?void 0:p.name),1),m[0]||(m[0]=r()),d("span",null,C(y(x))+" - "+C(y(V)),1)])]}),footer:o(()=>{var p;return[d("div",null,C((p=y(t))==null?void 0:p.description),1)]}),default:o(()=>{var p;return[m[8]||(m[8]=r()),d("div",Y,[m[6]||(m[6]=d("div",{class:"h-full w-full dark:border-gray-600 !border-default border rounded-2xl"},[d("img",{class:"object-cover max-h-full w-full object-top rounded-2xl hover:transform-[scale(0.95)]",src:"https://faeq-f.github.io/Quokka/media/AppScreenshots/AllApps.png"})],-1)),m[7]||(m[7]=r()),d("div",X,[s($,{orientation:"vertical",class:"h-full mx-3",ui:{border:"dark:border-gray-600 h-full"}}),m[5]||(m[5]=r()),d("div",Z,[m[3]||(m[3]=d("span",{class:"font-bold varela text-sm text-center w-full block pr-2.5"},"Skills",-1)),m[4]||(m[4]=r()),d("ul",_,[(i(!0),P(L,null,T(((p=y(t))==null?void 0:p.skills)||[],(g,k)=>(i(),P("li",{key:k,class:"mb-2 text-center"},[s(U,{mode:"hover"},{content:o(()=>m[1]||(m[1]=[d("p",{class:"p-1 text-sm"},"See this skill",-1)])),default:o(()=>[s(S,{to:"/skill/"+g,class:"boxLink !no-underline"},{default:o(()=>[r(C(g),1)]),_:2},1032,["to"]),m[2]||(m[2]=r())]),_:2,__:[2]},1024)]))),128))])])])]),m[9]||(m[9]=r())]}),_:1,__:[8,9]})]),_:1})}}}),h={};function nn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-100"},{header:o(()=>n[0]||(n[0]=[r(`
      WhatsappPortable
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-60"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const rn=a(h,[["render",nn]]),on={};function tn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const dn=a(on,[["render",tn]]),en={};function sn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const ln=a(en,[["render",sn]]),un={};function fn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-160"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const an=a(un,[["render",fn]]),mn={};function pn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-160"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const vn=a(mn,[["render",pn]]),bn={};function wn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Cn=a(bn,[["render",wn]]),$n={};function yn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const xn=a($n,[["render",yn]]),Sn={};function Un(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-105"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const gn=a(Sn,[["render",Un]]),kn={};function An(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-105"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Vn=a(kn,[["render",An]]),jn={};function Dn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-105"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Bn=a(jn,[["render",Dn]]),In={};function On(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-350"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-90"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Pn=a(In,[["render",On]]),qn={};function Fn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Tn=a(qn,[["render",Fn]]),Ln={};function Mn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Nn=a(Ln,[["render",Mn]]),Qn={};function zn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const En=a(Qn,[["render",zn]]),Gn={};function Rn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Hn=a(Gn,[["render",Rn]]),Jn={};function Kn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-230"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Wn=a(Jn,[["render",Kn]]),Yn={};function Xn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-100"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Zn=a(Yn,[["render",Xn]]),_n={};function cn(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-100"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const hn=a(_n,[["render",cn]]),nr={};function rr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-230"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const or=a(nr,[["render",rr]]),tr={};function dr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const er=a(tr,[["render",dr]]),sr={};function ir(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const lr=a(sr,[["render",ir]]),ur={};function fr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const ar=a(ur,[["render",fr]]),mr={};function pr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const vr=a(mr,[["render",pr]]),br={};function wr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Cr=a(br,[["render",wr]]),$r={};function yr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const xr=a($r,[["render",yr]]),Sr={};function Ur(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const gr=a(Sr,[["render",Ur]]),kr={};function Ar(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Vr=a(kr,[["render",Ar]]),jr={};function Dr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Br=a(jr,[["render",Dr]]),Ir={};function Or(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Pr=a(Ir,[["render",Or]]),qr={};function Fr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Tr=a(qr,[["render",Fr]]),Lr={};function Mr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Nr=a(Lr,[["render",Mr]]),Qr={};function zr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Er=a(Qr,[["render",zr]]),Gr={};function Rr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Hr=a(Gr,[["render",Rr]]),Jr={};function Kr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Wr=a(Jr,[["render",Kr]]),Yr={};function Xr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Zr=a(Yr,[["render",Xr]]),_r={};function cr(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const hr=a(_r,[["render",cr]]),no={};function ro(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const oo=a(no,[["render",ro]]),to={};function eo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const so=a(to,[["render",eo]]),io={};function lo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const uo=a(io,[["render",lo]]),fo={};function ao(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const mo=a(fo,[["render",ao]]),po={};function vo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const bo=a(po,[["render",vo]]),wo={};function Co(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const $o=a(wo,[["render",Co]]),yo={};function xo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const So=a(yo,[["render",xo]]),Uo={};function go(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const ko=a(Uo,[["render",go]]),Ao={};function Vo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const jo=a(Ao,[["render",Vo]]),Do={};function Bo(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Io=a(Do,[["render",Bo]]),Oo={};function Po(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const qo=a(Oo,[["render",Po]]),Fo={};function To(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Lo=a(Fo,[["render",To]]),Mo={};function No(u,n){const t=f;return i(),l(t,{class:"opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-80"},{header:o(()=>n[0]||(n[0]=[r(`
      header
    `)])),footer:o(()=>n[1]||(n[1]=[d("div",null,`
        footer
      `,-1)])),default:o(()=>[n[2]||(n[2]=r()),n[3]||(n[3]=d("div",{class:"h-10"},`
      content
    `,-1)),n[4]||(n[4]=r())]),_:1,__:[2,3,4]})}const Qo=a(Mo,[["render",No]]),ho=q({__name:"index",setup(u){const n=M(),t=w([{label:"Only Certificates",icon:"i-lucide-file-badge",value:"onlyCerts"},{label:"All Content",icon:"i-lucide-gallery-vertical-end",value:"all"},{label:"No Certificates",icon:"i-lucide-square-kanban",value:"noCerts"}]),x=w(n.query.certs||"all"),V=w([{label:"Regular Scroll",icon:"i-lucide-align-vertical-space-between",value:"normal"},{label:"Snap Scroll",icon:"i-lucide-align-vertical-space-around",value:"snap"}]),v=w("snap"),m=w([{type:"label",label:"Fruits"},{type:"item",label:"Apple",icon:"i-lucide-circle-help"},{type:"item",label:"Banana",icon:"i-lucide-circle-help"},{type:"item",label:"Blueberry",icon:"i-lucide-circle-help"},{type:"item",label:"Grapes",icon:"i-lucide-circle-help"},{type:"item",label:"Pineapple",icon:"i-lucide-circle-help"},{type:"separator"},{type:"label",label:"Vegetables"},{type:"item",label:"Broccoli",icon:"i-lucide-circle-help"},{type:"item",label:"Carrot",icon:"i-lucide-circle-help"},{type:"item",label:"Courgette",icon:"i-lucide-circle-help"},{type:"item",label:"Leek",icon:"i-lucide-circle-help"}]),$=w();function S(U){U&&setTimeout(()=>{document.querySelectorAll("[data-reka-popper-content-wrapper]")[0].setAttribute("data-lenis-prevent","")},100)}return j(D(B(()=>I.certificates.toArray()))),j(D(B(()=>I.projects.toArray()))),(U,e)=>{const p=Q,g=E,k=G;return i(),l(R,null,{"left-panel-header":o(()=>e[3]||(e[3]=[d("div",{class:"font-bold",style:{"line-height":"1"}},[d("p",{class:"text-[3rem] varela"},"Portfolio"),r(),d("p",{class:"text-[1rem]"},"What I have worked on")],-1)])),"left-panel-content":o(()=>{var A;return[e[4]||(e[4]=r(`
      filters here

      `)),s(g,{modelValue:$.value,"onUpdate:modelValue":e[0]||(e[0]=b=>$.value=b),items:m.value,multiple:"",placeholder:"Select for tag cat",variant:"soft",style:{"--ui-primary":"#4a5565"},icon:(A=$.value)==null?void 0:A.icon,ui:{trailingIcon:"group-data-[state=open]:rotate-180 transition-transform duration-200"},"data-lenis-prevent":"",class:"mx-auto my-4 w-fit block","onUpdate:open":S},{"tags-item-text":o(b=>[s(p,{name:b.item.icon},null,8,["name"]),r(" "+C(b.item.label),1)]),_:1},8,["modelValue","items","icon"]),e[5]||(e[5]=r()),s(k,{content:!1,items:t.value,class:"mx-auto my-4 w-fit",style:{"--ui-primary":"#4a5565"},orientation:"vertical",modelValue:x.value,"onUpdate:modelValue":e[1]||(e[1]=b=>x.value=b),ui:{trigger:"self-start",label:"dark:text-white",leadingIcon:"dark:text-white"}},null,8,["items","modelValue"])]}),"left-panel-footer":o(()=>[s(k,{content:!1,items:V.value,modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=A=>v.value=A),ui:{trigger:"self-start",label:"dark:text-white",leadingIcon:"dark:text-white"},style:{"--ui-primary":"#4a5565"},size:"sm"},null,8,["items","modelValue"])]),content:o(()=>[d("div",{class:N(["flex justify-evenly flex-wrap",v.value=="snap"?"snapScroll":""])},[s(c),e[6]||(e[6]=r()),s(rn),e[7]||(e[7]=r()),s(dn),e[8]||(e[8]=r()),s(ln),e[9]||(e[9]=r()),s(an),e[10]||(e[10]=r()),s(vn),e[11]||(e[11]=r()),s(Cn),e[12]||(e[12]=r()),s(xn),e[13]||(e[13]=r()),s(gn),e[14]||(e[14]=r()),s(Vn),e[15]||(e[15]=r()),s(Bn),e[16]||(e[16]=r()),s(Pn),e[17]||(e[17]=r()),s(Tn),e[18]||(e[18]=r()),s(Nn),e[19]||(e[19]=r()),s(En),e[20]||(e[20]=r()),s(Hn),e[21]||(e[21]=r()),s(Wn),e[22]||(e[22]=r()),s(Zn),e[23]||(e[23]=r()),s(hn),e[24]||(e[24]=r()),s(or),e[25]||(e[25]=r()),s(er),e[26]||(e[26]=r()),s(lr),e[27]||(e[27]=r()),s(ar),e[28]||(e[28]=r()),s(vr),e[29]||(e[29]=r()),s(Cr),e[30]||(e[30]=r()),s(xr),e[31]||(e[31]=r()),s(gr),e[32]||(e[32]=r()),s(Vr),e[33]||(e[33]=r()),s(Br),e[34]||(e[34]=r()),s(Pr),e[35]||(e[35]=r()),s(Tr),e[36]||(e[36]=r()),s(Nr),e[37]||(e[37]=r()),s(Er),e[38]||(e[38]=r()),s(Hr),e[39]||(e[39]=r()),s(Wr),e[40]||(e[40]=r()),s(Zr),e[41]||(e[41]=r()),s(hr),e[42]||(e[42]=r()),s(oo),e[43]||(e[43]=r()),s(so),e[44]||(e[44]=r()),s(uo),e[45]||(e[45]=r()),s(mo),e[46]||(e[46]=r()),s(bo),e[47]||(e[47]=r()),s($o),e[48]||(e[48]=r()),s(So),e[49]||(e[49]=r()),s(ko),e[50]||(e[50]=r()),s(jo),e[51]||(e[51]=r()),s(Io),e[52]||(e[52]=r()),s(qo),e[53]||(e[53]=r()),s(Lo),e[54]||(e[54]=r()),s(Qo)],2)]),_:1,__:[55,56,57]})}}});export{ho as default};
