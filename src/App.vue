<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import type BottomBar from './components/BottomBar.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <!--min-h-10 absolute bottom-8 lg:bottom-10 inset-x-8 lg:inset-x-10 flex items-center justify-between pl-5 pr-5 lg:pr-2 py-2 rounded-full bg-white/12 backdrop-blur-[6px] border border-white/12 shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)]-->
  <Panel class="h-full w-full rounded-3xl" id="bodyPanel">
    <RouterView />
  </Panel>
</template>

<style lang="scss">
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
</style>
