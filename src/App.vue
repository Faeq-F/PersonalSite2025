<script lang="ts">
import { RouterView } from 'vue-router'
import type BottomBar from './components/BottomBar/BottomBar.vue'

export default {
  data() {
    return {
      bgAnimation: 100,
    }
  },
  computed: {
    cssVars() {
      return {
        '--bgAnimation': this.bgAnimation,
      }
    },
  },
}
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
    <BottomBar @bgAnimation="(val: number) => (bgAnimation = val)" />

    <div class="fogWrap" :style="cssVars">
      <img src="/cloud.png" v-for="i in Array.from(Array(bgAnimation).keys())" />
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

$bgAnimation: 100;

:export {
  bgAnimation: $bgAnimation;
}

@for $i from 1 through $bgAnimation {
  $scale: math.random(2) - 0.4;

  .fogWrap img:nth-child(#{$i}) {
    left: math.random(120) * 1% - 20;
    animation: raise#{$i} 7 + math.random(15) + s linear infinite;
    animation-delay: math.random(5) - 5 + s;
    transform: scale(0.3 * $i - 0.6) rotate(math.random(360) + deg);
    z-index: $i + 99;
    // filter: blur($i - 6 + px);

    @keyframes raise#{$i} {
      to {
        bottom: 150vh;
        transform: scale(0.3 * $i - 0.6) rotate(math.random(360) + deg);
      }
    }
  }
}
</style>
