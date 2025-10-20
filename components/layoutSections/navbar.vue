<script setup lang="ts">
import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'
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

function toggleTheme(theme: number) {
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

//temp
const pages = [
  {
    title: 'About Me',
    description: 'A brief introduction about myself',
    icon: 'i-lucide-user',
    category: 'About Me',
    url: '/about'
  },
  {
    title: 'Experience',
    description: 'My professional journey and experiences',
    icon: 'i-lucide-briefcase',
    category: 'About Me',
    url: '/experience'
  },
  {
    title: 'Projects',
    description: 'Showcasing my projects and contributions',
    icon: 'i-lucide-folder',
    category: 'About Me',
    url: '/about'
  },
  {
    title: 'Skills',
    description: 'My technical skills and proficiencies',
    icon: 'i-lucide-code',
    category: 'About Me',
    url: '/about'
  },
  {
    title: 'Contact',
    description: 'How to get in touch with me',
    icon: 'i-lucide-mail',
    category: 'About Me',
    url: '/about'
  },
  {
    title: 'Degree',
    description: 'My academic qualifications',
    icon: 'i-lucide-mail',
    category: 'About Me',
    url: '/about'
  }
]

import Fuse from 'fuse.js'
const searchVal = ref('')
const searchedPages = ref(pages)
const fuse = new Fuse(pages, {
  keys: ['description', 'title', 'category'],
});

watch(searchVal, (newSearch, _oldSearch) => {
  if (newSearch === '') {
    searchedPages.value = pages;
  } else {
    searchedPages.value = fuse.search(newSearch).map((result) => result.item);
  }
})
</script>

<template>
  <MazAnimatedElement direction="up" :duration="700" id="navbar">
    <div
      class="max-h-12 rounded-3xl flex items-center gap-3 border-default border border-accent sticky top-0 bg-white dark:bg-[var(--ui-bg)] navbar"
      style="width: calc(100% - 3rem); margin: 0 auto;">
      <MazAnimatedElement direction="right" :delay='300' :duration="700"
        class="flex items-center">
        <div
          class="flex items-center bg-[#f6f7fa] dark:bg-[#0e0d0d] rounded-full px-3 ml-1.5 h-8 transition-all ease-in-out duration-200">
          <nuxt-link to="/" class="contents">
            <UIcon name="i-lucide-home"
              class="!size-4.5 hover:text-black dark:hover:text-white text-muted mx-2 my-1.5" />
          </nuxt-link>
          <USeparator orientation="vertical"
            class="h-4 mx-2.5 invert opacity-20" />
          <UPopover :ui="{ content: '-translate-y-6 ml-6' }">
            <UIcon name="i-lucide-search"
              class="!size-4.5 h-full clickable hover:text-black dark:hover:text-white text-muted mx-2.5 my-1.5" />
            <template #content>
              <div class="min-h-96 max-h-96 w-96">
                <UInput icon="i-lucide-search" size="md" variant="none"
                  placeholder="Search Pages..." class="w-full p-1"
                  v-model="searchVal" />
                <USeparator class="w-full " />
                <ul class="overflow-y-scroll max-h-86 min-h-86 pt-2 mr-0.5"
                  data-lenis-prevent>
                  <TransitionGroup name="list">
                    <li v-for="(page, i) in searchedPages" :key="i"
                      class="w-full p-2 pt-0 pr-1">
                      <nuxt-link :to="page.url">
                        <UButton :icon="page.icon" size="md" color="neutral"
                          variant="soft" class="w-full">
                          <USeparator orientation="vertical"
                            class="h-6 invert opacity-20 ml-1" />
                          <div class="w-full">
                            <div
                              class="w-full text-left pl-1.5 flex items-center justify-between">
                              <span>
                                {{ page.title }}
                              </span>
                              <UBadge size="sm" color="neutral"
                                variant="outline"
                                class="text-muted flex items-center opacity-80">
                                {{ page.category }}
                              </UBadge>
                            </div>
                            <div class="text-muted pl-1.5 w-full text-left">
                              {{ page.description }}
                            </div>
                          </div>
                        </UButton>
                      </nuxt-link>
                    </li>
                  </TransitionGroup>
                </ul>
              </div>
            </template>
          </UPopover>
        </div>
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="700" :duration="700"
        class="w-full justify-center flex">
        <UNavigationMenu highlight highlight-color="neutral" color="neutral"
          orientation="horizontal" :items="middleItems.items" variant="link"
          class="middleItems" :ui="{
            childItem: 'zNav',
            viewport: '!px-70 mt-[1px] -translate-y-15/12 min-h-65 max-h-65',
            childLink: 'bg-white hover:bg-gray-100 dark:bg-[var(--ui-bg)] dark:hover:bg-gray-800 rounded-lg',
            childLinkDescription: 'text-balance line-clamp-2',
            linkTrailingIcon: 'rotate-180 group-data-[state=open]:rotate-0'
          }" />
      </MazAnimatedElement>
      <MazAnimatedElement direction="left" :delay="900" :duration="700"
        class="relative flex w-auto justify-end">
        <!-- Theme Switch -->
        <UNavigationMenu content-orientation="vertical" color="neutral"
          :items="themeItems" variant="link" trailing-icon=" " :ui="{
            viewport: '-translate-y-46 -translate-x-4 min-h-32 max-h-32 pr-28 ',
            content: 'w-auto  ml-0.5',
            childList: 'w-auto flex flex-col',
            childLabel: 'w-full',
            childLinkIcon: 'mt-0.5',
            childLinkDescription: 'line-clamp-1',
            childLink: '-mt-0.25 bg-white hover:bg-gray-100 dark:bg-[var(--ui-bg)] dark:hover:bg-gray-800 rounded-lg',
          }"
          class="relative flex w-auto justify-end bg-[#f6f7fa] dark:bg-[#0e0d0d] rounded-full px-3 mr-1.5 h-8 transition-all ease-in-out duration-200">
          <template #item="{ item }">
            <UIcon :name="item.icon!" class="!size-4.5 " />
          </template>
          <template #settings="{ item }: { item: NavigationMenuItem }">
            <USeparator orientation="vertical"
              class="h-4 mx-4 -ml-0.5 invert opacity-20" />
            <UIcon :name="item.icon!" class="!size-4.5"
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

<style>
.zTheme #navbar {
  backdrop-filter: blur(6px) !important;
}


.zTheme .zNav,
.zTheme #navbar .navbar {
  border: 1px solid color-mix(in oklab, #000 15%, transparent);
  background-color: color-mix(in oklab, #000 10%, transparent);
  box-shadow: 0px 10px 10px -8px rgba(237, 237, 232, 0.02),
    0px 2px 2px -1.5px rgba(237, 237, 232, 0.02),
    0px 1px 1px -0.5px rgba(237, 237, 232, 0.02) !important;
}

.dark.zTheme .zNav,
.dark.zTheme #navbar .navbar {
  box-shadow: 0px 10px 10px -8px rgba(18, 18, 23, 0.02),
    0px 2px 2px -1.5px rgba(18, 18, 23, 0.02),
    0px 1px 1px -0.5px rgba(18, 18, 23, 0.02) !important;
  border: 1px solid color-mix(in oklab, #fff 15%, transparent) !important;
  background-color: color-mix(in oklab, #fff 15%, transparent) !important;
}

.zTheme .zNav {
  border-radius: calc(var(--ui-radius) * 2);
}

.zTheme #navbar .navbar .middleItems ul li a {
  background-color: #f6f7fa;
}

.dark.zTheme #navbar .navbar .middleItems ul li a {
  background-color: #0e0d0d;
}

.zTheme #navbar .navbar .middleItems ul li a[href="/PersonalSite2025/about"] {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.zTheme #navbar .navbar .middleItems ul li a[href="/PersonalSite2025/cv"] {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>