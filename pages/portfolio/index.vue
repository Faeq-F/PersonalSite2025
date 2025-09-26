<script lang="ts" setup>
import contentPanels from '~/components/layoutSections/contentPanels.vue';
import type { InputMenuItem, TabsItem } from '@nuxt/ui'
import { ref } from 'vue';

import Card1 from '~/components/portfolioCards/1Card.vue';
import Card2 from '~/components/portfolioCards/2Card.vue';
import Card3 from '~/components/portfolioCards/3Card.vue';
import Card4 from '~/components/portfolioCards/4Card.vue';
import Card5 from '~/components/portfolioCards/5Card.vue';
import Card6 from '~/components/portfolioCards/6Card.vue';
import Card7 from '~/components/portfolioCards/7Card.vue';
import Card8 from '~/components/portfolioCards/8Card.vue';
import Card9 from '~/components/portfolioCards/9Card.vue';
import Card10 from '~/components/portfolioCards/10Card.vue';
import Card11 from '~/components/portfolioCards/11Card.vue';
import Card12 from '~/components/portfolioCards/12Card.vue';
import Card13 from '~/components/portfolioCards/13Card.vue';
import Card14 from '~/components/portfolioCards/14Card.vue';
import Card15 from '~/components/portfolioCards/15Card.vue';
import Card16 from '~/components/portfolioCards/16Card.vue';
import Card17 from '~/components/portfolioCards/17Card.vue';
import Card18 from '~/components/portfolioCards/18Card.vue';
import Card19 from '~/components/portfolioCards/19Card.vue';
import Card20 from '~/components/portfolioCards/20Card.vue';
import Card21 from '~/components/portfolioCards/21Card.vue';
import Card22 from '~/components/portfolioCards/22Card.vue';
import Card23 from '~/components/portfolioCards/23Card.vue';
import Card24 from '~/components/portfolioCards/24Card.vue';
import Card25 from '~/components/portfolioCards/25Card.vue';
import Card26 from '~/components/portfolioCards/26Card.vue';
import Card27 from '~/components/portfolioCards/27Card.vue';
import Card28 from '~/components/portfolioCards/28Card.vue';
import Card29 from '~/components/portfolioCards/29Card.vue';
import Card30 from '~/components/portfolioCards/30Card.vue';
import Card31 from '~/components/portfolioCards/31Card.vue';
import Card32 from '~/components/portfolioCards/32Card.vue';
import Card33 from '~/components/portfolioCards/33Card.vue';
import Card34 from '~/components/portfolioCards/34Card.vue';
import Card35 from '~/components/portfolioCards/35Card.vue';
import Card36 from '~/components/portfolioCards/36Card.vue';
import Card37 from '~/components/portfolioCards/37Card.vue';
import Card38 from '~/components/portfolioCards/38Card.vue';
import Card39 from '~/components/portfolioCards/39Card.vue';
import Card40 from '~/components/portfolioCards/40Card.vue';
import Card41 from '~/components/portfolioCards/41Card.vue';
import Card42 from '~/components/portfolioCards/42Card.vue';
import Card43 from '~/components/portfolioCards/43Card.vue';
import Card44 from '~/components/portfolioCards/44Card.vue';
import Card45 from '~/components/portfolioCards/45Card.vue';
import Card46 from '~/components/portfolioCards/46Card.vue';
import Card47 from '~/components/portfolioCards/47Card.vue';
import Card48 from '~/components/portfolioCards/48Card.vue';
import Card49 from '~/components/portfolioCards/49Card.vue';
import Card50 from '~/components/portfolioCards/50Card.vue';

import { useRoute } from 'nuxt/app';
const route = useRoute()

const certsOptions = ref<TabsItem[]>([
  {
    label: 'Only Certificates',
    icon: 'i-lucide-file-badge',
    value: 'onlyCerts'
  },
  {
    label: 'All Content',
    icon: 'i-lucide-gallery-vertical-end',
    value: 'all'
  },
  {
    label: 'No Certificates',
    icon: 'i-lucide-square-kanban',
    value: 'noCerts'
  }
])
const certsActive = ref((route.query.certs as string) || 'all')


const scrollOptions = ref<TabsItem[]>([
  {
    label: 'Regular Scroll',
    icon: 'i-lucide-align-vertical-space-between',
    value: 'normal'
  },
  {
    label: 'Snap Scroll',
    icon: 'i-lucide-align-vertical-space-around',
    value: 'snap'
  },
])
const scrollActive = ref('snap')


const TagCatItems = ref([
  {
    type: 'label',
    label: 'Fruits',
  },
  {
    type: 'item',
    label: 'Apple',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Banana',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Blueberry',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Grapes',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Pineapple',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'separator'
  },
  {
    type: 'label',
    label: 'Vegetables',
  },
  {
    type: 'item',
    label: 'Broccoli',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Carrot',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Courgette',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Leek',
    icon: 'i-lucide-circle-help'
  }
] satisfies InputMenuItem[])
const TagCatValue = ref()

function onInputOpen(open: boolean) {
  if (open) {
    // make popup scrollable
    setTimeout(() => {
      document.querySelectorAll('[data-reka-popper-content-wrapper]')[0].setAttribute("data-lenis-prevent", "");
    }, 100);
  }
}

import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import { from } from "rxjs";
import { db, type Certificate, type Project } from "~/assets/scripts/db";

let myCertificates = useObservable<Certificate[]>(from(liveQuery<Certificate[]>(() => db.certificates.toArray())))
let myProjects = useObservable<Project[]>(from(liveQuery<Project[]>(() => db.projects.toArray())))

</script>

<template>
  <contentPanels>
    <template #left-panel-header>
      <div class="font-bold " style="line-height: 1;">
        <p class="text-[3rem] varela">Portfolio</p>
        <p class="text-[1rem]">What I have worked on</p>
      </div>
    </template>

    <template #left-panel-content>
      filters here

      <UInputMenu v-model="TagCatValue" :items="TagCatItems" multiple
        placeholder="Select for tag cat" variant="soft"
        style="--ui-primary: #4a5565" :icon="TagCatValue?.icon" :ui="{
          trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
        }" data-lenis-prevent class="mx-auto my-4 w-fit block"
        @update:open="onInputOpen">
        <template #tags-item-text="item">
          <UIcon :name="item.item.icon as string" />
          {{ item.item.label }}
        </template>
      </UInputMenu>



      <UTabs :content="false" :items="certsOptions" class="mx-auto my-4 w-fit"
        style="--ui-primary: #4a5565" orientation="vertical"
        v-model="certsActive"
        :ui="{ trigger: 'self-start', label: 'dark:text-white', leadingIcon: 'dark:text-white' }" />

    </template>

    <template #left-panel-footer>
      <UTabs :content="false" :items="scrollOptions" v-model="scrollActive"
        :ui="{ trigger: 'self-start', label: 'dark:text-white', leadingIcon: 'dark:text-white' }"
        style="--ui-primary: #4a5565" size="sm" />
    </template>

    <template #content>

      <div class="flex justify-evenly flex-wrap"
        :class="scrollActive == 'snap' ? 'snapScroll' : ''">

        {{ myCertificates }}
        {{ myProjects }}

        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
        <Card7 />
        <Card8 />
        <Card9 />
        <Card10 />
        <Card11 />
        <Card12 />
        <Card13 />
        <Card14 />
        <Card15 />
        <Card16 />
        <Card17 />
        <Card18 />
        <Card19 />
        <Card20 />
        <Card21 />
        <Card22 />
        <Card23 />
        <Card24 />
        <Card25 />
        <Card26 />
        <Card27 />
        <Card28 />
        <Card29 />
        <Card30 />
        <Card31 />
        <Card32 />
        <Card33 />
        <Card34 />
        <Card35 />
        <Card36 />
        <Card37 />
        <Card38 />
        <Card39 />
        <Card40 />
        <Card41 />
        <Card42 />
        <Card43 />
        <Card44 />
        <Card45 />
        <Card46 />
        <Card47 />
        <Card48 />
        <Card49 />
        <Card50 />

      </div>

    </template>

  </contentPanels>
</template>