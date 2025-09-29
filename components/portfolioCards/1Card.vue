<script setup lang="ts">
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
  'https://faeq-f.github.io/Quokka/media/AppScreenshots/AllApps.png',
  'https://faeq-f.github.io/Quokka/media/AppScreenshots/AllApps.png',
  'https://faeq-f.github.io/Quokka/media/AppScreenshots/AllApps.png',
  'https://faeq-f.github.io/Quokka/media/AppScreenshots/AllApps.png',
]
</script>

<template>
  <nuxt-link to="/project/Quokka">
    <UCard
      class="opacity-80 cardShadow border border-[var(--ui-border)] m-4 min-w-230 max-w-230 hover:scale-105">
      <template #header>
        <div class="flex justify-between items-center">
          <span class="font-bold varela underline decoration-1 text-2xl">
            {{ project?.name }}
          </span>
          <span>{{ projectStart }} - {{ projectEnd }}</span>
        </div>
      </template>

      <div class="h-60 flex justify-between">
        <div class="h-full">
          {{ project }}
        </div>
        <div class="min-w-50 max-w-50 flex">
          <USeparator orientation="vertical" class="h-full mx-3"
            :ui="{ border: 'dark:border-gray-600 h-full' }" />
          <div class="w-full">
            <span
              class="font-bold varela text-sm text-center w-full block pr-2.5">Skills</span>
            <ul class="overflow-y-scroll skillsScrollBlur h-full">
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