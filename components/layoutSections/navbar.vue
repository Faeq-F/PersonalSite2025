<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { onMounted, ref, watch } from 'vue';
import { useMiddleNavbarItems } from '~/stores/navbar'
const middleItems = useMiddleNavbarItems()

import { useThemeHandler } from 'maz-ui'

const {
  setDarkTheme,
  setLightTheme,
  setSystemTheme,
  autoSetTheme
} = useThemeHandler({
  watchChanges: true,
})

function toggleTheme(theme) {
  if (theme == 1) {
    setLightTheme()
  } else if (theme == 0) {
    setDarkTheme()
  } else {
    setSystemTheme()
  }
}

const zarlashtTheme = ref(false);
const bgAnimation = ref(true);

const themeItems = ref<NavigationMenuItem[][]>([
  [
    {
      icon: 'i-lucide-sun-moon',
      label: '',
      children: [
        {
          label: 'Light',
          icon: 'i-lucide-sun',
          onSelect: () => toggleTheme(1),
        },
        {
          label: 'Dark',
          icon: 'i-lucide-moon',
          onSelect: () => toggleTheme(0),
        },
        {
          label: 'System',
          icon: 'i-lucide-laptop-minimal',
          onSelect: () => toggleTheme(-1),
        },
      ]
    },
    {
      icon: 'i-lucide-cog',
      label: '',
      slot: 'settings' as const,
    }
  ]
])

watch(zarlashtTheme, () => {
  document.getElementsByTagName('html')[0].classList.toggle('zTheme')
})


watch(bgAnimation, () => {
  document.getElementById('fogWrap')!.classList.toggle('hidden')
  document.getElementsByTagName('html')[0].classList.toggle('noAnim')
  let videoBGelem = document.getElementById("video-bg-elem") as HTMLVideoElement;
  if (videoBGelem.paused) videoBGelem.play();
  else videoBGelem.pause();
})

autoSetTheme()
</script>

<template>
  <MazAnimatedElement direction="up" :duration="700" id="navbar">
    <div
      class="max-h-12 rounded-3xl flex items-center gap-3 border-default border border-accent sticky top-0 bg-white dark:bg-[var(--ui-bg)] navbar"
      style="width: calc(100% - 3rem); margin: 0 auto;">
      <MazAnimatedElement direction="right" :delay='300' :duration="700"
        class="flex items-center hover:text-black dark:hover:text-white">
        <nuxt-link to="/">
          <UIcon name="i-lucide-home" class="mx-6.5 mt-1.5 text-[#90a1b9]" />
        </nuxt-link>
        <USeparator orientation="vertical" class="h-8 self-center " />
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="700" :duration="700"
        class="w-full justify-center flex">
        <UNavigationMenu highlight highlight-color="neutral" color="neutral"
          orientation="horizontal" :items="middleItems.items" variant="link"
          :ui="{
            viewport: '!px-70 -translate-y-14/12 min-h-96 max-h-96',
            content: '',
            childLink: 'bg-white hover:bg-gray-100 dark:bg-[var(--ui-bg)] dark:hover:bg-gray-800',
            childLinkDescription: 'text-balance line-clamp-2',
            linkTrailingIcon: 'rotate-180 group-data-[state=open]:rotate-0'
          }" />
      </MazAnimatedElement>
      <MazAnimatedElement direction="left" :delay="900" :duration="700"
        class="relative flex w-auto justify-end">
        <!-- Theme Switch -->
        <UNavigationMenu content-orientation="vertical" color="neutral"
          :items="themeItems" variant="link" trailing-icon=" " :ui="{
            viewport: '-translate-y-18/12 -translate-x-4 min-h-32 max-h-32 pr-28',
            content: 'w-auto  ml-0.5',
            childList: 'w-auto',
            childLabel: 'w-full',
            childLinkDescription: 'line-clamp-1'
          }"
          class="relative flex w-auto justify-end bg-[#f6f7fa] dark:bg-[#0e0d0d] rounded-full px-3 mr-1.5 h-8 transition-all ease-in-out duration-200">
          <template #item="{ item }">
            <UIcon :name="item.icon" class="!size-4.5" />
          </template>
          <template #settings="{ item }">
            <USeparator orientation="vertical"
              class="h-4 mx-4 -ml-0.5 invert opacity-20" />
            <UIcon :name="item.icon" class="!size-4.5"
              :class="bgAnimation ? 'animate-[spin_3s_linear_infinite]' : ''" />
          </template>
          <template #settings-content>
            <div class="px-0.5 flex flex-col items-start justify-around !h-32">
              <USwitch v-model="bgAnimation" color="neutral" size="xs"
                description="Background" label="Animating" />
              <USwitch v-model="zarlashtTheme" color="neutral" size="xs"
                description="theme" label="Zarlasht" />
            </div>
          </template>
        </UNavigationMenu>
      </MazAnimatedElement>
    </div>
  </MazAnimatedElement>
</template>