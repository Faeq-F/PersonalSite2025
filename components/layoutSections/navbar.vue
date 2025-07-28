<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref } from 'vue';
import { useFetch } from 'nuxt/app';
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
        }
      ]
    }
  ]
])

const homeItem = ref<NavigationMenuItem[][]>([
  [
    {
      icon: 'i-lucide-home',
      label: '',
      to: '/',
    }
  ]
])

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
          <UIcon name="i-lucide-home" class="mx-6.5 mt-1.5 " />
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
        <USeparator orientation="vertical" class="h-8 self-center ml-4" />
        <UNavigationMenu content-orientation="vertical" color="neutral"
          :items="themeItems" variant="link" trailing-icon=" " :ui="{
            viewport: '-translate-y-18/12 -translate-x-8 min-h-32 max-h-32 pr-27',
            content: 'w-auto',
            childList: 'w-auto',
            childLabel: 'w-full',
            childLinkDescription: 'line-clamp-1'
          }" class="relative flex w-auto justify-end">
          <template #item="{ item }">
            <UIcon :name="item.icon" class="mx-4 !size-4.5" />
          </template>
        </UNavigationMenu>
      </MazAnimatedElement>
    </div>
  </MazAnimatedElement>
</template>