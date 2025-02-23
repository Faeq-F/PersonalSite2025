import{B as _,U as B,g as I,e as p,r as m,o as s,c as l,d as i,m as c,f as g,s as X,h as $,n as w,u as C,i as L,j as v,k as Y,l as x,p as P,t as k,a as b,w as f,A as R,_ as M,q as G,v as H,x as j,y as q,z as K,C as N,D as V,F as O,E,G as W,H as Q}from"./index-lBDKFCSz.js";var Z=function(e){var t=e.dt;return`
.p-scrollpanel-content-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + calc(2 * `.concat(t("scrollpanel.bar.size"),`));
    width: calc(100% + calc(2 * `).concat(t("scrollpanel.bar.size"),`));
    padding-inline: 0 calc(2 * `).concat(t("scrollpanel.bar.size"),`);
    padding-block: 0 calc(2 * `).concat(t("scrollpanel.bar.size"),`);
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    border-radius: `).concat(t("scrollpanel.bar.border.radius"),`;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    background: `).concat(t("scrollpanel.bar.background"),`;
    border: 0 none;
    transition: outline-color `).concat(t("scrollpanel.transition.duration"),", opacity ").concat(t("scrollpanel.transition.duration"),`;
}

.p-scrollpanel-bar:focus-visible {
    box-shadow: `).concat(t("scrollpanel.bar.focus.ring.shadow"),`;
    outline: `).concat(t("scrollpanel.barfocus.ring.width")," ").concat(t("scrollpanel.bar.focus.ring.style")," ").concat(t("scrollpanel.bar.focus.ring.color"),`;
    outline-offset: `).concat(t("scrollpanel.barfocus.ring.offset"),`;
}

.p-scrollpanel-bar-y {
    width: `).concat(t("scrollpanel.bar.size"),`;
    inset-block-start: 0;
}

.p-scrollpanel-bar-x {
    height: `).concat(t("scrollpanel.bar.size"),`;
    inset-block-end: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`)},J={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},ee=_.extend({name:"scrollpanel",theme:Z,classes:J}),te={name:"BaseScrollPanel",extends:X,props:{step:{type:Number,default:5}},style:ee,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},z={name:"ScrollPanel",extends:te,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{id:this.$attrs.id,orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},watch:{"$attrs.id":function(e){this.id=e||B()}},mounted:function(){this.id=this.id||B(),this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),t=getComputedStyle(this.$refs.xBar),r=I(this.$el)-parseInt(t.height,10);e["max-height"]!=="none"&&r===0&&(this.$refs.content.offsetHeight+parseInt(t.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var t=this.$refs.content.scrollWidth,r=this.$refs.content.clientWidth,a=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=r/t;var o=this.$refs.content.scrollHeight,d=this.$refs.content.clientHeight,u=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=d/o,this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&p(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&m(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; inset-inline-start:"+Math.abs(e.$refs.content.scrollLeft)/t*100+"%;bottom:"+a+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&p(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&m(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+Math.max(e.scrollYRatio*100,10)+"%; top: calc("+e.$refs.content.scrollTop/o*100+"% - "+e.$refs.xBar.clientHeight+"px); inset-inline-end:"+u+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&p(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&p(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&p(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&p(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,t){this.$refs.content[e]+=t,this.moveBar()},setTimer:function(e,t){var r=this;this.clearTimer(),this.timer=setTimeout(function(){r.repeat(e,t)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var t=this,r=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){t.$refs.content.scrollLeft+=r/t.scrollXRatio})},onMouseMoveForYBar:function(e){var t=this,r=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){t.$refs.content.scrollTop+=r/t.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&m(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&m(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&m(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var t=window.requestAnimationFrame||this.timeoutFrame;return t(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var t=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>t?t:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(t){e.onDocumentMouseMove(t)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(t){e.onDocumentMouseUp(t)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.id+"_content"}}},ne=["id"],oe=["aria-controls","aria-valuenow"],re=["aria-controls","aria-valuenow"];function ae(n,e,t,r,a,o){return s(),l("div",c({class:n.cx("root")},n.ptmi("root")),[i("div",c({class:n.cx("contentContainer")},n.ptm("contentContainer")),[i("div",c({ref:"content",id:o.contentId,class:n.cx("content"),onScroll:e[0]||(e[0]=function(){return o.onScroll&&o.onScroll.apply(o,arguments)}),onMouseenter:e[1]||(e[1]=function(){return o.moveBar&&o.moveBar.apply(o,arguments)})},n.ptm("content")),[g(n.$slots,"default")],16,ne)],16),i("div",c({ref:"xBar",class:n.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":o.contentId,"aria-valuenow":a.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return o.onXBarMouseDown&&o.onXBarMouseDown.apply(o,arguments)}),onKeydown:e[3]||(e[3]=function(d){return o.onKeyDown(d)}),onKeyup:e[4]||(e[4]=function(){return o.onKeyUp&&o.onKeyUp.apply(o,arguments)}),onFocus:e[5]||(e[5]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[6]||(e[6]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},n.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,oe),i("div",c({ref:"yBar",class:n.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":o.contentId,"aria-valuenow":a.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return o.onYBarMouseDown&&o.onYBarMouseDown.apply(o,arguments)}),onKeydown:e[8]||(e[8]=function(d){return o.onKeyDown(d)}),onKeyup:e[9]||(e[9]=function(){return o.onKeyUp&&o.onKeyUp.apply(o,arguments)}),onFocus:e[10]||(e[10]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)})},n.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,re)],16)}z.render=ae;const ie=$({__name:"BentoGrid",props:{class:{}},setup(n){const e=n;return(t,r)=>(s(),l("div",{class:w(C(L)("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",e.class))},[g(t.$slots,"default")],2))}}),se={class:"pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10"},ce={key:1,class:"size-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"},le={class:"text-xl font-semibold text-neutral-700 dark:text-neutral-300"},de={class:"max-w-lg text-neutral-600 dark:text-neutral-400"},ue={class:"pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"},he=["href"],pe=$({__name:"BentoGridCard",props:{name:{},class:{},icon:{},description:{},href:{},cta:{}},setup(n){const e=n;return(t,r)=>{const a=v("UiButton"),o=R;return s(),l("div",{key:t.name,class:w(C(L)("group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl","bg-[#fff] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]","transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",e.class))},[g(t.$slots,"background"),Y((s(),l("div",se,[t.icon?(s(),x(P(t.icon),{key:0,class:"size-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"})):(s(),l("div",ce)),i("h3",le,k(t.name),1),i("p",de,k(t.description),1)])),[[o,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000"}]]),i("div",ue,[b(a,{variant:"ghost","as-child":"",size:"sm",class:"pointer-events-auto"},{default:f(()=>[i("a",{href:t.href},k(t.cta)+" → ",9,he)]),_:1})]),r[0]||(r[0]=i("div",{class:"pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"},null,-1))],2)}}}),be={},fe={class:"barStyle z-[999] !pl-2 transition-all duration-500 min-h-10 bottom-8 lg:bottom-10 inset-x-8 lg:inset-x-10 flex items-center justify-between pl-5 pr-5 lg:pr-2 py-2 rounded-full dark:bg-white/15 bg-black/10 backdrop-blur-[6px] border dark:border-white/15 border-black/15 dark:shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] shadow-[0px_10px_10px_-8px_rgba(237,237,232,0.02),0px_2px_2px_-1.5px_rgba(237,237,232,0.02),0px_1px_1px_-0.5px_rgba(237,237,232,0.02)]"};function me(n,e){return s(),l("div",fe,[g(n.$slots,"default",{},void 0,!0)])}const ge=M(be,[["render",me],["__scopeId","data-v-c44b0ff6"]]);var S={name:"CheckIcon",extends:G};function xe(n,e,t,r,a,o){return s(),l("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[i("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"},null,-1)]),16)}S.render=xe;var ke={name:"BaseInput",extends:H,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var e;return(e=this.variant)!==null&&e!==void 0?e:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var e;return(e=this.fluid)!==null&&e!==void 0?e:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},ve=function(e){var t=e.dt;return`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(t("checkbox.width"),`;
    height: `).concat(t("checkbox.height"),`;
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: `).concat(t("checkbox.border.radius"),`;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: `).concat(t("checkbox.border.radius"),`;
    border: 1px solid `).concat(t("checkbox.border.color"),`;
    background: `).concat(t("checkbox.background"),`;
    width: `).concat(t("checkbox.width"),`;
    height: `).concat(t("checkbox.height"),`;
    transition: background `).concat(t("checkbox.transition.duration"),", color ").concat(t("checkbox.transition.duration"),", border-color ").concat(t("checkbox.transition.duration"),", box-shadow ").concat(t("checkbox.transition.duration"),", outline-color ").concat(t("checkbox.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("checkbox.shadow"),`;
}

.p-checkbox-icon {
    transition-duration: `).concat(t("checkbox.transition.duration"),`;
    color: `).concat(t("checkbox.icon.color"),`;
    font-size: `).concat(t("checkbox.icon.size"),`;
    width: `).concat(t("checkbox.icon.size"),`;
    height: `).concat(t("checkbox.icon.size"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: `).concat(t("checkbox.hover.border.color"),`;
}

.p-checkbox-checked .p-checkbox-box {
    border-color: `).concat(t("checkbox.checked.border.color"),`;
    background: `).concat(t("checkbox.checked.background"),`;
}

.p-checkbox-checked .p-checkbox-icon {
    color: `).concat(t("checkbox.icon.checked.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(t("checkbox.checked.hover.background"),`;
    border-color: `).concat(t("checkbox.checked.hover.border.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: `).concat(t("checkbox.icon.checked.hover.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(t("checkbox.focus.border.color"),`;
    box-shadow: `).concat(t("checkbox.focus.ring.shadow"),`;
    outline: `).concat(t("checkbox.focus.ring.width")," ").concat(t("checkbox.focus.ring.style")," ").concat(t("checkbox.focus.ring.color"),`;
    outline-offset: `).concat(t("checkbox.focus.ring.offset"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(t("checkbox.checked.focus.border.color"),`;
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: `).concat(t("checkbox.invalid.border.color"),`;
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: `).concat(t("checkbox.filled.background"),`;
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: `).concat(t("checkbox.checked.background"),`;
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(t("checkbox.checked.hover.background"),`;
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: `).concat(t("checkbox.disabled.background"),`;
    border-color: `).concat(t("checkbox.checked.disabled.border.color"),`;
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: `).concat(t("checkbox.icon.disabled.color"),`;
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: `).concat(t("checkbox.sm.width"),`;
    height: `).concat(t("checkbox.sm.height"),`;
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: `).concat(t("checkbox.icon.sm.size"),`;
    width: `).concat(t("checkbox.icon.sm.size"),`;
    height: `).concat(t("checkbox.icon.sm.size"),`;
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: `).concat(t("checkbox.lg.width"),`;
    height: `).concat(t("checkbox.lg.height"),`;
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: `).concat(t("checkbox.icon.lg.size"),`;
    width: `).concat(t("checkbox.icon.lg.size"),`;
    height: `).concat(t("checkbox.icon.lg.size"),`;
}
`)},ye={root:function(e){var t=e.instance,r=e.props;return["p-checkbox p-component",{"p-checkbox-checked":t.checked,"p-disabled":r.disabled,"p-invalid":t.$pcCheckboxGroup?t.$pcCheckboxGroup.$invalid:t.$invalid,"p-variant-filled":t.$variant==="filled","p-checkbox-sm p-inputfield-sm":r.size==="small","p-checkbox-lg p-inputfield-lg":r.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},we=_.extend({name:"checkbox",theme:ve,classes:ye}),Be={name:"BaseCheckbox",extends:ke,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:we,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function _e(n){return Me(n)||Le(n)||Ce(n)||$e()}function $e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ce(n,e){if(n){if(typeof n=="string")return y(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(n,e):void 0}}function Le(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Me(n){if(Array.isArray(n))return y(n)}function y(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}var A={name:"Checkbox",extends:Be,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(e){this.d_indeterminate=e}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(e){var t=this;if(!this.disabled&&!this.readonly){var r=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,a;this.binary?a=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?a=r.filter(function(o){return!j(o,t.value)}):a=r?[].concat(_e(r),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(a,e):this.writeValue(a,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var t,r;this.$emit("blur",e),(t=(r=this.formField).onBlur)===null||t===void 0||t.call(r,e)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var e=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?e===this.trueValue:q(this.value,e)}},components:{CheckIcon:S,MinusIcon:K}},ze=["data-p-checked","data-p-indeterminate","data-p-disabled"],Se=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function Ae(n,e,t,r,a,o){var d=v("CheckIcon"),u=v("MinusIcon");return s(),l("div",c({class:n.cx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-indeterminate":a.d_indeterminate||void 0,"data-p-disabled":n.disabled}),[i("input",c({id:n.inputId,type:"checkbox",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:n.value,name:o.groupName,checked:o.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,required:n.required,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,"aria-checked":a.d_indeterminate?"mixed":void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:e[2]||(e[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,Se),i("div",c({class:n.cx("box")},o.getPTOptions("box")),[g(n.$slots,"icon",{checked:o.checked,indeterminate:a.d_indeterminate,class:w(n.cx("icon"))},function(){return[o.checked?(s(),x(d,c({key:0,class:n.cx("icon")},o.getPTOptions("icon")),null,16,["class"])):a.d_indeterminate?(s(),x(u,c({key:1,class:n.cx("icon")},o.getPTOptions("icon")),null,16,["class"])):N("",!0)]})],16)],16,ze)}A.render=Ae;const De={data(){return{DisplayArchived:!0,features:[{name:"Quokka",description:"An extremely customizable, portable keystroke launcher with plugins",href:"/",image:"QuokkaLight.png",cta:"Learn more",class:"lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3"},{name:"Save your files",description:"We automatically save your files as you type.",href:"/",image:"https://images.pexels.com/photos/2762083/pexels-photo-2762083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",cta:"Learn more",class:"lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-6"},{name:"Full text search",description:"Search through all your files in one place.",href:"/",image:"https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",cta:"Learn more",class:"lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"},{name:"Multilingual",description:"Supports 100+ languages and counting.",href:"/",image:"https://images.pexels.com/photos/2762083/pexels-photo-2762083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",cta:"Learn more",class:"lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5"},{name:"Calendar",description:"Use the calendar to filter your files by date.",href:"/",image:"https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",cta:"Learn more",class:"lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3"},{name:"Notifications",description:"Get notified when someone shares a file or mentions you in a comment.",href:"/",image:"https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",cta:"Learn more",class:"lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-5"}]}}},Fe={class:"absolute"},Ue={class:"relative -bottom-[15vh] left-[3vw]",id:"About"},Te={class:"relative left-[30vw] -top-[70vh]",id:"Bento"};function Ie(n,e,t,r,a,o){const d=A,u=ge,D=pe,F=ie,U=z;return s(),l("div",Fe,[e[3]||(e[3]=V('<div class="relative top-[15vh] left-[3vw]" data-v-7b6770a0><p id="Faeq" class="font-header text-current text-9xl" data-v-7b6770a0>Portfolio</p><span id="extraUnderline" data-v-7b6770a0></span><p class="font-subheader text-5xl text-transparent" data-v-7b6770a0>What I&#39;ve done</p><p class="font-subheader text-5xl left-[5vw] absolute top-28" data-v-7b6770a0>What I have done </p></div>',1)),i("div",Ue,[b(u,{class:"h-[50vh] w-[26vw] rounded-xl"},{default:f(()=>[e[1]||(e[1]=i("p",null,"This page displays placeholder content",-1)),b(d,{modelValue:a.DisplayArchived,"onUpdate:modelValue":e[0]||(e[0]=h=>a.DisplayArchived=h),inputId:"Archived",name:"DisplayArchived",variant:"filled",binary:""},null,8,["modelValue"]),e[2]||(e[2]=i("label",{for:"Archived"}," Display Archived ",-1))]),_:1})]),i("div",Te,[b(u,{class:"h-[85vh] w-[65vw] rounded-xl"},{default:f(()=>[b(U,{style:{width:"100%",height:"100%"},dt:{bar:{background:"{zinc.500}"}}},{default:f(()=>[b(F,{class:"grid w-full auto-rows-[22rem] grid-cols-3 gap-4 lg:grid-rows-3"},{default:f(()=>[(s(!0),l(O,null,E(a.features,(h,T)=>(s(),x(D,c({key:T,ref_for:!0},h,{class:h.class}),W({_:2},[h.image?{name:"background",fn:f(()=>[i("div",{class:"absolute right-0 top-0 size-full bg-center opacity-40 transition duration-150 ease-in-out group-hover:opacity-20",style:Q(`background-image: url('${h.image}')`)},null,4)]),key:"0"}:void 0]),1040,["class"]))),128))]),_:1})]),_:1})]),_:1})])])}const Ye=M(De,[["render",Ie],["__scopeId","data-v-7b6770a0"]]);export{Ye as default};
