<script setup>
import { RouterView } from 'vue-router'
import BottomBar from './components/BottomBar/BottomBar.vue'
</script>

<template>
  <Panel
    class="h-full w-full rounded-3xl"
    id="bodyPanel"
    style="clip-path: xywh(0 0 100% 100% round 1.5rem 1.5rem)"
  >
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" class="z-[999]" />
      </transition>
    </router-view>
    <BottomBar />

    <div class="fogWrap" id="fogWrap">
      <img src="/cloud.png" v-for="i in Array.from(Array(100).keys())" />
    </div>
    <div class="shapeWrap" id="shapeWrap">
      <img src="/shape.svg" v-for="i in Array.from(Array(10).keys())" />
    </div>
  </Panel>
</template>

<style lang="scss">
@use 'sass:math';

@layer tailwind-base, primevue, tailwind-utilities;

@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}

@import 'primeicons/primeicons.css';
@tailwind base;
@tailwind components;
@tailwind utilities;

.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 1s,
    transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.shapeWrap,
.fogWrap {
  perspective-origin: 50% 50%;
}

.shapeWrap img,
.fogWrap img {
  position: absolute;
  bottom: -100vh;
  transform-style: preserve-3d;
  z-index: -1;
  max-width: 20px;
}

.shapeWrap img {
  max-width: unset;
}

html.dark {
  .shapeWrap img,
  .fogWrap img {
    filter: invert(1);
  }
}

html.zTheme .shapeWrap {
  display: none !important;
}

html:not(.zTheme) .fogWrap {
  display: none !important;
}

$bgAnimation: 100;

@for $i from 1 through $bgAnimation {
  $scale: math.random(2) - 0.4;

  .shapeWrap img:nth-child(#{$i}) {
    left: math.random(120) * 1% - 20;
    animation: raise#{$i} 7 + math.random(15) + s linear infinite;
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

  .fogWrap img:nth-child(#{$i}) {
    left: math.random(120) * 1% - 20;
    animation: raise#{$i} 7 + math.random(15) + s linear infinite;
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
