<script lang="ts" setup>
import contentPanels from '~/components/layoutSections/contentPanels.vue';
import type { TabsItem } from '@nuxt/ui'
import { ref } from 'vue';

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
const certsActive = ref('all')

const viewOptions = ref<TabsItem[]>([
  {
    label: 'Grid',
    icon: 'i-lucide-table',
    value: 'grid'
  },
  {
    label: 'List',
    icon: 'i-lucide-rows-3',
    value: 'list'
  },
])
const viewActive = ref('grid')

const TagCatItems = ref([
  {
    type: 'label',
    label: 'Fruits',
    icon: 'i-lucide-circle-help'

  },
  'Apple',
  'Banana',
  'Blueberry',
  'Grapes',
  'Pineapple',
  {
    type: 'separator'
  },
  {
    type: 'label',
    label: 'Vegetables',
    icon: 'i-lucide-circle-help'

  },
  {
    label: 'Vegetables',
    icon: 'i-lucide-circle-help'

  },
  'Broccoli',
  'Carrot',
  'Courgette',
  'Leek'
])
const TagCatValue = ref()

function onInputOpen(open) {
  if (open) {
    // make popup scrollable
    setTimeout(() => {
      document.querySelectorAll('[data-reka-popper-content-wrapper]')[0].setAttribute("data-lenis-prevent", "");
    }, 100);
  }
}

</script>

<template>
  <contentPanels>
    <template #left-panel-header>
      <div class="font-bold varela" style="line-height: 1;">
        <p class="text-[3rem]">Portfolio</p>
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
          <UIcon :name="item.item.icon" />
          {{ item.item.label }}
        </template>
      </UInputMenu>



      <UTabs :content="false" :items="certsOptions" class="mx-auto my-4 w-fit"
        style="--ui-primary: #4a5565" orientation="vertical"
        v-model="certsActive"
        :ui="{ trigger: 'self-start', label: 'dark:text-white', leadingIcon: 'dark:text-white' }" />

    </template>

    <template #left-panel-footer>
      <UTabs :content="false" :items="viewOptions" class="mx-auto my-4 w-fit "
        style="--ui-primary: #4a5565" v-model="viewActive"
        :ui="{ trigger: 'self-start', label: 'dark:text-white', leadingIcon: 'dark:text-white' }" />
    </template>

    <template #content>
      <transition name="slide" mode="out-in">
        <div class="" v-if="viewActive == 'list'">
          <UCard
            class="opacity-80 cardShadow border border-[var(--ui-border)] m-4 h-60"
            v-for="i in Array(8).keys()">
            <template #header>
              header
            </template>

            <div class="min-h-20">
              content
            </div>

            <template #footer>
              <div>
                footer
              </div>
            </template>
          </UCard>
        </div>
        <div class="flex justify-evenly flex-wrap" v-else>
          <UCard
            class="opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-4/9"
            v-for="i in Array(8).keys()">
            <template #header>
              header
            </template>

            <div class="min-h-20">
              content
            </div>

            <template #footer>
              <div>
                footer
              </div>
            </template>
          </UCard>
        </div>
      </transition>
    </template>

  </contentPanels>
</template>