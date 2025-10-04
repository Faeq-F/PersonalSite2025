<script lang="ts" setup>
import { VueLenis, useLenis } from 'lenis/vue'
import Snap from 'lenis/snap'
import type { TabsItem } from '@nuxt/ui'

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
const scrollActive = ref('normal')

let options = {}
onMounted(() => {
  options = {
    autoRaf: true,
    lerp: 0.1,
    anchors: true,
    content: document.getElementById('leniscontent'),
    wrapper: document.getElementById('contentPanelsContent'),
  }

  const lenis = useLenis();
  const snap = new Snap(lenis.value!, {})

  Array.from(document.getElementById('leniscontent')!.children).forEach((s) => {
    snap.add(s.getBoundingClientRect().top);
  });

  scrollActive.value = 'snap' // fixes scrolling inability issue with lenis
})

const emit = defineEmits(['snap'])
watch(scrollActive, (newVal) => { emit('snap', newVal); })

</script>

<template>
  <div class="p-8 h-full w-full">
    <div class="flex h-full w-full">
      <UCard
        class="m-4 h-full w-96 opacity-80 cardShadow border border-[var(--ui-border)]">
        <template #header>
          <slot name="left-panel-header"></slot>
        </template>

        <div class="min-h-[60vh]">
          <slot name="left-panel-content"></slot>
        </div>

        <template #footer>
          <div class="flex gap-4 flex-col">
            <slot name="left-panel-footer"></slot>
            <UTabs :content="false" :items="scrollOptions"
              v-model="scrollActive"
              :ui="{ trigger: 'self-start', label: 'dark:text-white', leadingIcon: 'dark:text-white' }"
              style="--ui-primary: #4a5565" size="sm" />
          </div>
        </template>
      </UCard>
      <div id="contentPanelsContent"
        class="flex flex-col h-full w-full mr-8 mt-4 overflow-y-scroll overflow-x-hidden snap-mandatory snap-y ScrollBlur">
        <VueLenis root :options="options" />
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>