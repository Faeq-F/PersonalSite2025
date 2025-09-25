<script lang="ts" setup>
import { onMounted, ref, useTemplateRef, watch } from 'vue';
import type { StepperItem } from '@nuxt/ui'
import contentPanels from '~/components/layoutSections/contentPanels.vue';
import IntroCard from '~/components/aboutMeCards/IntroductionCard.vue';
import Card2010 from '~/components/aboutMeCards/2010Card.vue';
import Card2016 from '~/components/aboutMeCards/2016Card.vue';
import Card2018 from '~/components/aboutMeCards/2018Card.vue';
import Card2020 from '~/components/aboutMeCards/2020Card.vue';
import Card2022 from '~/components/aboutMeCards/2022Card.vue';
import Card2025 from '~/components/aboutMeCards/2025Card.vue';


const items: StepperItem[] = [
  {
    title: 'Introduction',
    description: 'A little on me',
    label: 'Introduction',
    icon: 'i-lucide-house'
  },
  {
    title: '2010',
    description: '6 years old',
    label: 'Modding',
    icon: 'i-lucide-wrench'
  },
  {
    title: '2016',
    description: '12 years old',
    label: 'Programming',
    icon: 'i-lucide-square-function'
  },
  {
    title: '2018',
    description: '14 years old',
    label: 'The Web',
    icon: 'i-lucide-link'
  },
  {
    title: '2020',
    description: '16 years old',
    label: 'GCSEs',
    icon: 'i-lucide-school'
  },
  {
    title: '2022',
    description: '18 years old',
    label: 'A-levels',
    icon: 'i-lucide-book-text'
  },
  {
    title: '2025',
    description: '21 years old',
    label: 'My Degree',
    icon: 'i-lucide-graduation-cap'
  },
]

const stepper = useTemplateRef('stepper')
const active = ref(0)

watch(active, (newActiveVal) => {
  document.getElementById('contentPanelsContent')!.scrollTo({ top: document.getElementById('AboutMeCard' + newActiveVal)!.offsetTop, behavior: 'smooth' })
})

// Update about-me timeline as you scroll
class Scroller {
  static headers: (Element | null)[];
  static ticking: boolean;
  static activeHeader: any;

  static init() {
    const rootContainer = document.getElementById("contentPanelsContent");
    this.headers = Array.from(document.querySelectorAll("#AboutMeCard0, #AboutMeCard1, #AboutMeCard2, #AboutMeCard3, #AboutMeCard4, #AboutMeCard5, #AboutMeCard6"))
    this.ticking = false;
    rootContainer!.addEventListener('scroll', (e) => {
      this.onScroll()
    })
  }

  static onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(this.update.bind(this));
      this.ticking = true;
    }
  }

  static update() {
    this.activeHeader ||= this.headers[0];
    let activeIndex = this.headers.findIndex((header) => {
      return header!.getBoundingClientRect().top > 180;
    });
    if (activeIndex == -1) {
      activeIndex = this.headers.length - 1;
    } else if (activeIndex > 0) {
      activeIndex--;
    }
    let activeH = this.headers[activeIndex];
    if (activeH !== this.activeHeader) {
      this.activeHeader = activeH;
      active.value = activeIndex
    }
    this.ticking = false;
  }
}

onMounted(() => { Scroller.init(); })

</script>

<template>
  <contentPanels>
    <template #left-panel-header>
      <div class="font-bold" style="line-height: 1;">
        <p class="text-[3rem] varela">About me</p>
        <p class="text-[1rem]">Who I am and what I get up to</p>
      </div>
    </template>

    <template #left-panel-content>
      <UStepper ref="stepper" :items="items" orientation="vertical"
        v-model="active" class="h-full w-full -mt-4 stepper"
        style="--ui-primary: #4a5565"
        :ui="{ separator: 'h-8 transition-all ease-in-out duration-200', item: 'mt-4', indicator: 'transition-all ease-in-out duration-200 dark:text-white', trigger: 'transition-all ease-in-out duration-200' }"
        disabled />
    </template>

    <template #left-panel-footer>
      <div>
        <div class="flex gap-2 justify-between mt-4">
          <UButton leading-icon="i-lucide-arrow-left"
            :disabled="!stepper?.hasPrev" @click="stepper?.prev()"
            style="--ui-primary: #4a5565" class="dark:text-white">
            Prev
          </UButton>
          <span class="pt-1">{{ items[active].label }}</span>
          <UButton trailing-icon="i-lucide-arrow-right"
            :disabled="!stepper?.hasNext" @click="stepper?.next()"
            style="--ui-primary: #4a5565" class="dark:text-white">
            Next
          </UButton>
        </div>
      </div>
    </template>

    <template #content>
      <IntroCard />
      <Card2010 />
      <Card2016 />
      <Card2018 />
      <Card2020 />
      <Card2022 />
      <Card2025 />
    </template>

  </contentPanels>

</template>