<script setup>
import { RouterView } from 'vue-router'
import BottomBar from './components/BottomBar/BottomBar.vue'
import LinkPreview from '@/lib/LinkPreview.vue'

import { ref } from "vue";
const visibleTop = ref(false);
</script>

<template>
  <div id="credits">&copy; Faeq - Built From The Ground Up - <span
      style="text-decoration: underline; pointer-events: all;cursor: pointer;"
      @click="visibleTop = true">credits</span>
  </div>
  <Drawer v-model:visible="visibleTop" header="Credits" position="top"
    style="height: auto">
    <p>Content will be placed here in future.</p>
  </Drawer>
  <Panel class="h-full w-full rounded-3xl " id="bodyPanel"
    style="clip-path: xywh(0 0 100% 100% round 1.5rem 1.5rem)">

    <video autoplay muted loop id="vidBG">
      <source src="/bg.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>

    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" class="z-[999]" />
      </transition>
    </router-view>

    <BottomBar />

    <div class="fogWrap" id="fogWrap">
      <img src="/cloud.png" v-for="i in Array.from(Array(100).keys())" />
    </div>

  </Panel>
  <div id="timeline">
    <LinkPreview url="https://faeq-f.github.io/PersonalSite2020" class="">
      2020
    </LinkPreview>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <LinkPreview url="https://faeq-f.github.io/PersonalSite2021" class="">
      2021
    </LinkPreview>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <LinkPreview url="https://faeq-f.github.io/PersonalSite2022" class="">
      2022
    </LinkPreview>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <LinkPreview url="https://faeq-f.github.io/PersonalSite2023" class="">
      2023
    </LinkPreview>
  </div>
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

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}

//=-------------------------------------------------------------------

#credits {
  position: fixed;
  top: 3px;
  font-size: x-small;
  width: 100vw;
  text-align: center;
  opacity: 0.7;
}

#timeline {
  position: fixed;
  bottom: 3px;
  font-size: x-small;
  width: 100vw;
  text-align: center;
  pointer-events: all;
}

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

html.dark {

  .shapeWrap img,
  .fogWrap img {
    filter: invert(1);
  }
}

html.zTheme .star-layers {
  display: none !important;
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

// From https://codepen.io/Ibrahim-Abdulhameed/pen/oNJMEGV

// Define a keyframe animation for stars
@keyframes animStar {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-2000px);
  }
}

// Function to generate multiple box-shadow values for stars
@function multiple-box-shadow($number_of_stars) {
  $value: '#{random(2000)}px #{random(2000)}px #cc99ff'; // Initial shadow

  @for $i from 2 through $number_of_stars {
    $value: '#{$value}, #{random(2000)}px #{random(2000)}px #cc99ff'; // Add more shadows
  }

  @return unquote($value); // Return the concatenated value
}

// Generate different sets of box-shadow values for stars of varying sizes
$shadows-small: multiple-box-shadow(700); // Small stars
$shadows-medium: multiple-box-shadow(200); // Medium stars
$shadows-big: multiple-box-shadow(100); // Big stars

// Styling for the star layers container
.star-layers {
  height: 100vh;
  bottom: 2.5rem;
  background: radial-gradient(ellipse at bottom, #00000000 0%, #00000000 100%);
  overflow: hidden;
  position: relative;

  // Styling for each star layer
  .star-layer {
    position: absolute;
    width: 1px;
    height: 1px;
    background: transparent;

    &::after {
      content: ' ';
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: transparent;
    }
  }

  // Apply styles to each star layer with different sizes
  #stars {
    box-shadow: $shadows-small; // Apply small star shadows
    animation: animStar 50s linear infinite;

    &::after {
      box-shadow: $shadows-small; // Apply small star shadows to pseudo-element
    }
  }

  #stars2 {
    width: 2px;
    height: 2px;
    box-shadow: $shadows-medium; // Apply medium star shadows
    animation: animStar 100s linear infinite;

    &::after {
      width: 2px;
      height: 2px;
      box-shadow: $shadows-medium; // Apply medium star shadows to pseudo-element
    }
  }

  #stars3 {
    width: 3px;
    height: 3px;
    box-shadow: $shadows-big; // Apply big star shadows
    animation: animStar 150s linear infinite;

    &::after {
      width: 3px;
      height: 3px;
      box-shadow: $shadows-big; // Apply big star shadows to pseudo-element
    }
  }
}
</style>
