<script setup>
import navbar from '../components/layoutSections/navbar.vue'
const route = useRoute()


//import { onMounted, ref } from "vue";
// import { db } from '@/lib/db';

onMounted(async () => {
  document.getElementById("video-bg-elem").play();

  //   const id = await db.friends.add({
  //     name: "Faeq",
  //     age: 20
  //   });

  //   console.log(id)

})

</script>

<template>
  <div class="h-full w-full rounded-3xl" id="bodyPanel">

    <div id="vidBG" class="border-default rounded-none border border-accent">
      <video autoplay loop disablePictureInPicture muted id="video-bg-elem"
        class="h-full w-full">
        <source src="/media/bg.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="fogWrap" id="fogWrap">
      <img src="/media/cloud.png" v-for="i in Array.from(Array(100).keys())" />
    </div>

    <div id="pageContent" class="overflow-hidden">
      <div style="height: calc(100% - 4.5rem)" class="w-full">
        <transition name="slide" mode="out-in">
          <div :key="route.name" class="h-full w-full">
            <slot />
          </div>
        </transition>
      </div>
      <navbar />
    </div>

  </div>
  <UDrawer direction="bottom" title="Credits" description="Thank you!" inset
    :handle="false" :ui="{ content: 'rounded-3xl' }">
    <div id="credits" class="hover:underline">
      Made with ❤️ by Faeq &copy;</div>

    <template #content>
      <div class="h-64 p-4 pb-0 w-full">
        This site was built by <a target="_blank"
          href="https://github.com/faeq-f" class="underline">Faeq</a> using:
        <div class="rounded-2xl w-full h-full mt-2 ">
          <div class="flex h-1/5">
            <nuxt-link target="_blank" to="https://youtu.be/Bj0h4VtMDQA"
              class="w-1/4 rounded-none rounded-tl-2xl border-t border-r border-accented border-l">
              <UButton
                class="p-2.5 rounded-none rounded-tl-2xl hover:bg-[var(--ui-bg-elevated)] w-full h-full"
                icon="i-lucide-image-play" size="md" color="neutral "
                variant="ghost">
                Background video
              </UButton>
            </nuxt-link>
            <UButton icon="i-lucide-component" size="md" color="neutral"
              variant="ghost"
              class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented">
              Maz UI
            </UButton>
            <UButton icon="i-lucide-puzzle" size="md" color="neutral"
              variant="ghost"
              class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented ">
              Nuxt UI
            </UButton>
            <UButton
              class=" rounded-none rounded-tr-2xl p-2.5 w-1/4 border-t border-r border-accented "
              icon="i-lucide-cylinder" size="md" color="neutral"
              variant="ghost">
              Pinia
            </UButton>
          </div>
          <div class="flex h-1/5">
            <UButton icon="i-lucide-type-outline" size="md" color="neutral"
              variant="ghost"
              class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented  border-l">
              Varela Font
            </UButton>
            <UButton icon="i-lucide-case-sensitive" size="md" color="neutral"
              variant="ghost"
              class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented ">
              Outfit Font
            </UButton>
            <UButton icon="i-lucide-code-xml" size="md" color="neutral"
              variant="ghost"
              class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented ">
              SVGL icons
            </UButton>
            <UButton icon="i-lucide-shell" size="md" color="neutral"
              variant="ghost"
              class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented ">
              Lucide icons
            </UButton>
          </div>
          <div class="flex h-1/5">
            <UButton icon="i-lucide-wind" size="md" color="neutral"
              variant="ghost"
              class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented  border-l">
              TailwindCSS
            </UButton>
            <UButton icon="i-lucide-mouse-pointer-2" size="md" color="neutral"
              variant="ghost"
              class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented ">
              Cursors
            </UButton>
            <UButton icon="i-lucide-database" size="md" color="neutral"
              variant="ghost"
              class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented ">
              Dexie.js
            </UButton>
            <UButton icon="i-lucide-gallery-vertical" size="md" color="neutral"
              variant="ghost"
              class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented ">
              Scroller
            </UButton>
          </div>
          <div class="flex h-1/5">
            <UButton
              class=" rounded-none rounded-bl-2xl p-2.5 w-1/4 border-t border-r border-accented border-b border-l"
              icon="i-lucide-binoculars" size="md" color="neutral"
              variant="ghost">
              Fuse.js
            </UButton>
            <UButton disabled size="md" color="neutral" variant="ghost"
              class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented border-b">
            </UButton>
            <UButton disabled size="md" color="neutral" variant="ghost"
              class=" rounded-none p-2.5 w-1/4 border-t border-r border-accented border-b">
            </UButton>
            <UButton
              class=" rounded-none rounded-br-2xl p-2.5 w-1/4 border-t border-r border-accented border-b"
              disabled size="md" color="neutral" variant="ghost">
            </UButton>
          </div>
        </div>
      </div>
    </template>
  </UDrawer>

</template>

<style lang="scss">
@use 'sass:math';

//=-------------------------------------------------------------------
//== Page transitions ==//

.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 1s ease,
}

.slide-enter-from,
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