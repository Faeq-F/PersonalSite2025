<script setup lang="ts">
import navbar from '../components/layoutSections/navbar.vue'

//import { onMounted, ref } from "vue";
// import { db } from '@/lib/db';

// onMounted(async () => {
//   const id = await db.friends.add({
//     name: "Faeq",
//     age: 20
//   });

//   console.log(id)

// })
</script>
<template>

  <div class="h-full w-full rounded-3xl" id="bodyPanel"
    style="clip-path: xywh(0 0 100% 100% round 1.5rem 1.5rem)">

    <div id="vidBG" class="border-default border border-accent">
      <img src="/media/bg.gif" />
    </div>

    <div id="pageContent" class="overflow-hidden">
      <div style="height: calc(100% - 4.5rem)" class="w-full">
        <transition name="slide" mode="out-in">
          <slot />
        </transition>
      </div>
      <navbar />
    </div>

    <div class="fogWrap" id="fogWrap">
      <img src="/media/cloud.png" v-for="i in Array.from(Array(100).keys())" />
    </div>

  </div>
  <UDrawer direction="bottom" title="Credits" description="Thank you!" inset>
    <div id="credits">&copy; Faeq - Built From The Ground Up - <span
        style="text-decoration: underline; pointer-events: all;cursor: pointer;">credits</span>
    </div>

    <template #content>
      <div class="h-52">
        <a href="https://youtu.be/Bj0h4VtMDQA">Background video</a>
        Maz UI
        Nuxt UI
        Varela Font
        Outfit Font
        svgl icons
        tailwindcss
        lucide icons
      </div>
    </template>
  </UDrawer>

</template>

<style lang="scss">
@use 'sass:math';

//=-------------------------------------------------------------------
//== Page transitions ==//

// .slide-enter-active,
.slide-leave-active {
  transition:
    opacity 1s,
}

// .slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

//=-------------------------------------------------------------------
//== Fog for the Zarlasht theme ==//

.fogWrap {
  perspective-origin: 50% 50%;
}

.fogWrap img {
  position: absolute;
  bottom: -100vh;
  transform-style: preserve-3d;
  z-index: -1;
  max-width: 20px;
}

html.dark {
  .fogWrap img {
    filter: invert(1);
  }
}

html:not(.zTheme) .fogWrap {
  display: none !important;
}

$bgAnimation: 100;

@for $i from 1 through $bgAnimation {
  $scale: math.random(2) - 0.4;

  .fogWrap img:nth-child(#{$i}) {
    left: math.random(120) * 1% - 20;
    animation: raise#{$i} 7+math.random(15)+s linear infinite;
    animation-delay: math.random(5) - 5 + s;
    transform: scale(0.3 * $i - 0.6) rotate(math.random(360) + deg);
    z-index: $i + 99;

    @keyframes raise#{$i} {
      to {
        bottom: 150vh;
        transform: scale(0.3 * $i - 0.6) rotate(math.random(360) + deg);
      }
    }
  }
}
</style>