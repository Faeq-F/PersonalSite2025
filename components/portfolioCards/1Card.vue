<script setup lang="ts">
const props = defineProps<{
  CarouselBG: boolean,
  CarouselScroll: boolean
}>();

import { db, type Project } from "~/assets/scripts/db";
import { liveQuery } from 'dexie';
import { useObservable } from "@vueuse/rxjs";
import { from } from "rxjs";

import { useSettingsStore } from '~/stores/settings'
const settings = useSettingsStore()
const project = useObservable<Project | undefined>(from(liveQuery(async () => await db.projects.get('Quokka'))));

const projectStart = computed(() => {
  if (!project.value || !project.value.startDate) return '';
  const month = settings.months[project.value.startDate.getMonth() ?? 0]?.substring(0, 3) ?? '';
  return `${month} ${project.value.startDate.getFullYear()}`;
});

const projectEnd = computed(() => {
  if (!project.value || !project.value.endDate || !project.value.startDate) return '';
  return project.value.endDate < project.value.startDate
    ? 'Present'
    : `${settings.months[project.value.endDate.getMonth()]?.substring(0, 3) ?? ''} ${project.value.endDate.getFullYear()}`;
});

const images = [
  'https://faeq-f.github.io/Quokka/media/AppScreenshots/AllApps.png',
  '/media/QuokkaLight.png',
  'https://faeq-f.github.io/Quokka/media/AppScreenshots/AllApps.png',
  '/media/QuokkaLight.png',
]

const imagesCarousel = useTemplateRef('imagesCarousel');
const carouselContainerBG = computed(() => {
  return props.CarouselBG ? 'carouselContainerBG' : 'noCarouselContainerBG';
});
</script>

<template>
  <nuxt-link to="/project/Quokka">
    <UCard
      class="opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-230 max-w-230 hover:scale-105"
      @mouseenter="CarouselScroll ? imagesCarousel?.emblaApi?.plugins().autoScroll.play() : null"
      @mouseleave="CarouselScroll ? imagesCarousel?.emblaApi?.plugins().autoScroll.stop() : null">
      <template #header>
        <div class="flex justify-between items-center">
          <span class="font-bold varela underline decoration-1 text-2xl">
            {{ project?.name }}
          </span>
          <span>{{ projectStart }} - {{ projectEnd }}</span>
        </div>
      </template>

      <div class="h-60 flex justify-between">
        <div
          class="h-full w-full dark:border-gray-600 !border-default border rounded-2xl ">
          <div class="relative h-full rounded-2xl" :class="carouselContainerBG">
          </div>
          <UCarousel v-slot="{ item }" loop :auto-scroll="{ playOnInit: false }"
            :items="images"
            class="h-full max-h-full w-full p-1 relative translate-y-[-100%]"
            ref="imagesCarousel" :ui="{
              container: 'max-h-full h-full w-full rounded-2xl',
              viewport: 'max-h-full h-full w-full rounded-2xl',
              item: 'h-full basis-auto ps-1'
            }">
            <img :src="item" class="rounded-2xl h-full ">
          </UCarousel>
        </div>
        <div class="min-w-50 max-w-50 flex">
          <USeparator orientation="vertical" class="h-full mx-3"
            :ui="{ border: 'dark:border-gray-600 h-full' }" />
          <div class="w-full">
            <span
              class="font-bold varela text-sm text-center w-full block pr-2.5">Skills</span>
            <ul class="overflow-y-scroll skillsScrollBlur h-full"
              data-lenis-prevent>
              <li v-for="(skill, i) in project?.skills || []" :key="i"
                class="mb-2 text-center">
                <UPopover mode="hover">
                  <nuxt-link :to="'/skill/' + skill"
                    class="boxLink !no-underline">
                    {{ skill }}
                  </nuxt-link>
                  <template #content>
                    <p class="p-1 text-sm">See this skill</p>
                  </template>
                </UPopover>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <template #footer>
        <div>
          {{ project?.description }}
        </div>
      </template>
    </UCard>
  </nuxt-link>
</template>

<style lang="css">
.carouselContainerBG {
  background-color: #ffffff;
  background-image: url("/media/portfolioBackgrounds/cartographer.png");
  animation: fadeInBG 0.7s;
}

@keyframes fadeInBG {
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
}

.noCarouselContainerBG {
  background-color: #00000000;
  animation: fadeOutBG 0.7s;
}

@keyframes fadeOutBG {
  0% {
    opacity: 1;
    background-image: url("/media/portfolioBackgrounds/cartographer.png");
  }

  100% {
    opacity: 0;
    background-image: none;
  }
}
</style>