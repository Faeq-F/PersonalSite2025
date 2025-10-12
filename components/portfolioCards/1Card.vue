<script setup lang="ts">
import PortfolioCard from '~/components/layoutSections/portfolioCard.vue'
const props = defineProps<{
  CarouselBG: boolean,
  CarouselScroll: boolean
}>();

import { db, type Project } from "~/assets/scripts/db";
import { liveQuery } from 'dexie';
import { useObservable } from "@vueuse/rxjs";
import { from } from "rxjs";

const project = useObservable<Project | undefined>(from(liveQuery(async () => await db.projects.get('Quokka'))));

const images = [
  'https://faeq-f.github.io/Quokka/media/AppScreenshots/AllApps.png',
  '/media/QuokkaLight.png',
  'https://faeq-f.github.io/Quokka/media/AppScreenshots/AllApps.png',
  '/media/QuokkaLight.png',
]
</script>

<template>
  <PortfolioCard :project="project!" :images="images" :CarouselBG="CarouselBG"
    :CarouselScroll="CarouselScroll" widthClass="min-w-230 max-w-230"
    horizontal />
</template>