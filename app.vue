<script setup lang="ts">
// import { VueLenis } from 'lenis/vue'
// const lenisOptions = {
//   anchors: true
// }
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollSmoother.create({
//   smooth: 3,
//   normalizeScroll: true,
//   ignoreMobileResize: true,
//   effects: true,
//   smoothTouch: 0.1,
// });

let ctx: any;
let smoother: any;
onMounted(() => {
  ctx = gsap.context(() => {
    // create the smooth scroller FIRST!
    smoother = ScrollSmoother.create({
      content: 'contentPanelsContent',
      smooth: 2,
      speed: 0.5,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: false,
      smoothTouch: 0.1,
    });

    ScrollTrigger.normalizeScroll({
      allowNestedScroll: true
    })
  });
});
onUnmounted(() => {
  ctx.revert();
});
</script>
<template>
  <!-- <VueLenis root :options="lenisOptions" /> -->
  <UApp id="smooth-wrapper">
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>