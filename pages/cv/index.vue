<script setup lang="ts">
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import '@tato30/vue-pdf/style.css'
import { ref, watch } from 'vue'

const { pdf, pages } = usePDF('/PersonalSite2025/cv.pdf')

const scale = ref(1)

import type { TabsItem } from '@nuxt/ui'
const viewOptions = ref<TabsItem[]>([
  {
    label: 'Single Page',
    icon: 'i-lucide-table',
    value: 'single'
  },
  {
    label: 'Dual Page',
    icon: 'i-lucide-rows-3',
    value: 'dual'
  },
])
const viewActive = ref('dual')

const scrollOptions = ref<TabsItem[]>([
  {
    label: 'Regular Scroll',
    icon: 'i-lucide-table',
    value: 'normal'
  },
  {
    label: 'Snap Scroll',
    icon: 'i-lucide-rows-3',
    value: 'snap'
  },
])
const scrollActive = ref('normal')

const highlightText = ref('')
const highlightOptions = ref({
  completeWords: false,
  ignoreCase: true,
})

const page = ref(1)
watch(page, (newPageVal) => {
  document.getElementById('cvContainer')!.scrollTo({ top: document.getElementById('cvPage' + newPageVal)!.offsetTop, left: document.getElementById('cvPage' + newPageVal)!.offsetLeft, behavior: 'smooth' })
})

</script>


<template>
  <div class="flex w-full p-8 h-full">

    <div class="p-8 pb-0 h-full transition-all duration-200"
      :class="viewActive == 'single' ? 'flex-auto' : ''">

      <UCard
        class="h-full w-full opacity-80 cardShadow border border-[var(--ui-border)]">

        <template #header>
          <div class="flex gap-4 items-center justify-between">
            <div class="font-bold" style="line-height: 1;">
              <p class="text-[3rem] varela">Curriculum Vitae</p>
            </div>
            <a href="./cv.pdf" download="cv.pdf">
              <UButton leading-icon="i-lucide-download" size="xl"
                style="--ui-primary: #4a5565" class="dark:text-white" />
            </a>
          </div>
        </template>

        <div class="">
          <p class="font-bold text-[1rem]">Related content</p>
          <USeparator class="w-28 mb-4 mt-0.5 self-center " />
          <div class="max-h-[40vh] overflow-y-scroll flex flex-col gap-2 p-2"
            data-lenis-prevent>
            <div class="flex flex-col gap-2">
              <nuxt-link to="/">
                <UCard
                  class="h-full w-full opacity-80 cardShadow border border-[var(--ui-border)]">
                  content
                </UCard>
              </nuxt-link>
              <nuxt-link to="/">
                <UCard
                  class="h-full w-full opacity-80 cardShadow border border-[var(--ui-border)]">
                  content
                </UCard>
              </nuxt-link>
            </div>
            <USeparator class="w-28 my-4 self-center " />
            <div class="flex gap-1">
              <nuxt-link to="/" class="flex-1/2">
                <UCard
                  class="h-full w-full opacity-80 cardShadow border border-[var(--ui-border)]">
                  content
                </UCard>
              </nuxt-link>
              <nuxt-link to="/" class="flex-1/2">
                <UCard
                  class="h-full w-full opacity-80 cardShadow border border-[var(--ui-border)]">
                  content
                </UCard>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/">
                <UCard
                  class="h-full w-full opacity-80 cardShadow border border-[var(--ui-border)]">
                  content
                </UCard>
              </nuxt-link>
            </div>
            <USeparator class="w-28 my-4 self-center " />
            <div>
              <nuxt-link to="/">
                <UCard
                  class="h-full w-full opacity-80 cardShadow border border-[var(--ui-border)]">
                  content
                </UCard>
              </nuxt-link>
            </div>
            <div class="flex gap-1">
              <nuxt-link to="/" class="flex-1/2">
                <UCard
                  class="h-full w-full opacity-80 cardShadow border border-[var(--ui-border)]">
                  content
                </UCard>
              </nuxt-link>
              <nuxt-link to="/" class="flex-1/2">
                <UCard
                  class="h-full w-full opacity-80 cardShadow border border-[var(--ui-border)]">
                  content
                </UCard>
              </nuxt-link>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex flex-col gap-4">
            <div class="flex gap-4">
              <UFormField label="Page">
                <UInputNumber v-model="page" :min="1" :max="pages"
                  orientation="vertical" color="neutral"
                  placeholder="Enter a page number" />
              </UFormField>
              <UFormField label="Scale">
                <UInputNumber v-model="scale" :min="0.1" :max="2"
                  color="neutral" placeholder="Enter a zoom amount" :step="0.05"
                  :format-options="{
                    style: 'percent'
                  }" />
              </UFormField>
            </div>
            <div class="flex gap-4">
              <UTabs :content="false" :items="viewOptions" v-model="viewActive"
                :ui="{ trigger: 'self-start', label: 'dark:text-white', leadingIcon: 'dark:text-white' }"
                style="--ui-primary: #4a5565" />
              <UTabs :content="false" :items="scrollOptions"
                v-model="scrollActive"
                :ui="{ trigger: 'self-start', label: 'dark:text-white', leadingIcon: 'dark:text-white' }"
                style="--ui-primary: #4a5565" />
            </div>
            <div
              class="flex flex-col border border-[var(--ui-border)] rounded-lg">
              <UInput v-model="highlightText" icon="i-lucide-search"
                placeholder="Search..." color="neutral" variant="none">
                <template #trailing v-if="highlightText?.length">
                  <div class="flex items-center gap-4">
                    <UButton color="neutral" variant="link" size="sm"
                      icon="i-lucide-circle-x" aria-label="Clear input"
                      @click="highlightText = ''" />
                  </div>
                </template>
              </UInput>
              <USeparator class="w-full px-2 pb-1 my-0" />
              <div class="flex items-center justify-around pb-1">
                <UCheckbox v-model="highlightOptions.completeWords"
                  label="Complete Words" color="neutral" class="opacity-80" />
                <UCheckbox v-model="highlightOptions.ignoreCase"
                  label="Ignore Case" color="neutral" class="opacity-80" />
              </div>
            </div>
          </div>
        </template>

      </UCard>
    </div>

    <div
      class="opacity-80 m-4 h-full overflow-y-scroll transition-all snap-mandatory snap-both"
      id="cvContainer" data-lenis-prevent
      :class="viewActive == 'single' ? scrollActive == 'snap' ? 'scrollCV' : '' : 'flex-auto flex -mx-4'">
      <div v-for="page in pages" :key="page" :id="`cvPage${page}`"
        class="my-4 mr-2 cardShadow border border-[var(--ui-border)] rounded-md w-fit">
        <VuePDF :pdf="pdf" :page="page" text-layer
          :highlight-text="highlightText" :highlight-options="highlightOptions"
          :scale="scale" />
      </div>
    </div>

  </div>
</template>

<style>
#cvContainer canvas {
  border-radius: 0.5rem;
}
</style>