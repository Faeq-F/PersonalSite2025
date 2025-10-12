<script setup lang="ts">
import { type Project } from "~/assets/scripts/db";

const props = defineProps<{
  project: Project,
  images: string[],
  CarouselBG: boolean,
  CarouselScroll: boolean,
  widthClass: string,
  horizontal?: boolean
}>();

import { useSettingsStore } from '~/stores/settings'
const settings = useSettingsStore()

const projectStart = computed(() => {
  if (!props.project || !(props.project.startDate instanceof Date)) return '';
  const month = settings.months[props.project.startDate.getMonth()]?.substring(0, 3) ?? '';
  return `${month} ${props.project.startDate.getFullYear()}`;
});

const projectEnd = computed(() => {
  if (!props.project || !(props.project.endDate instanceof Date) || !(props.project.startDate instanceof Date)) return '';
  return props.project.endDate < props.project.startDate
    ? 'Present'
    : `${settings.months[props.project.endDate.getMonth()]?.substring(0, 3) ?? ''} ${props.project.endDate.getFullYear()}`;
});

const imagesCarousel = useTemplateRef('imagesCarousel');
let bgImages = ['axiom-pattern', 'cartographer', 'graphy-dark', 'inspiration-geometry', 'old-mathematics'];
var item = bgImages[Math.floor(Math.random() * bgImages.length)];
const carouselContainerBG = computed(() => {
  return props.CarouselBG ? `carouselContainerBG-${item}` : `noCarouselContainerBG-${item}`;
});
</script>
<template>
  <nuxt-link :to="'/project/' + project?.name.replaceAll(' ', '~')">
    <UCard
      class="opacity-80 cardShadow border border-[var(--ui-border)] m-4 hover:scale-105"
      :class="widthClass"
      @mouseenter="CarouselScroll ? imagesCarousel?.emblaApi?.plugins().autoScroll.play() : null"
      @mouseleave="CarouselScroll ? imagesCarousel?.emblaApi?.plugins().autoScroll.stop() : null">
      <template #header>
        <div class="flex justify-between items-center">
          <span class="font-bold varela underline decoration-1 text-2xl">
            {{ project?.name }}
          </span>
          <span class="text-xs ">
            {{ projectStart }} - {{ projectEnd }}
          </span>
        </div>
      </template>

      <div class="h-60" :class="horizontal ? 'flex justify-between' : ''">
        <div
          class=" w-full dark:border-gray-600 !border-default border rounded-2xl "
          :class="horizontal ? 'h-full' : 'h-[70%]'">
          <div class="relative h-full rounded-2xl" :class="carouselContainerBG">
          </div>
          <UCarousel v-slot="{ item }" loop :auto-scroll="{ playOnInit: false }"
            :items="images"
            class=" h-full max-h-full w-full p-1 relative translate-y-[-100%]"
            ref="imagesCarousel" :ui="{
              container: 'max-h-full h-full w-full rounded-2xl',
              viewport: 'max-h-full h-full w-full rounded-2xl',
              item: 'h-full basis-auto ps-1'
            }">
            <img :src="item" class="rounded-2xl h-full ">
          </UCarousel>
        </div>
        <div
          :class="horizontal ? 'flex min-w-50 max-w-50' : 'w-full max-h-13 mt-2'">
          <USeparator :orientation="horizontal ? 'vertical' : 'horizontal'"
            class="h-full mx-3"
            :ui="{ border: 'dark:border-gray-600 h-full' }" />
          <div class="w-full" :class="horizontal ? '' : 'mt-2'">
            <span
              class="font-bold varela text-sm text-center w-full block pr-2.5">Skills</span>
            <ul
              :class="horizontal ? 'skillsScrollBlur overflow-y-scroll h-full' : 'overflow-x-scroll h-13 pt-2 flex overflow-y-hidden justify-center'"
              data-lenis-prevent>
              <li v-for="(skill, i) in project?.skills || []" :key="i"
                class=" text-center"
                :class="horizontal ? 'mb-2' : 'inline mr-2'">
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

<style lang="scss">
$images: 'axiom-pattern', 'cartographer', 'graphy-dark', 'inspiration-geometry', 'old-mathematics';
$colors: #fff, #eee, #000, #bbb, #555, #888;

@keyframes fadeInBG {
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
}

@each $image in $images {
  .carouselContainerBG-#{$image} {
    background-color: nth($colors, random(length($colors)));
    background-image: url("/media/portfolioBackgrounds/" +#{$image}+".png");
    animation: fadeInBG 0.7s;
  }

  .noCarouselContainerBG-#{$image} {
    background-color: #00000000;
    animation: fadeOutBG-#{$image} 0.7s;
  }

  @keyframes fadeOutBG-#{$image} {
    0% {
      opacity: 1;
      background-image: url("/media/portfolioBackgrounds/" +#{$image}+".png");
    }

    100% {
      opacity: 0;
      background-image: none;
    }
  }
}
</style>