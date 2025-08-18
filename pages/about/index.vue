<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';
import type { StepperItem } from '@nuxt/ui'
import contentPanels from '~/components/layoutSections/contentPanels.vue';

const items: StepperItem[] = [
  {
    title: 'Introduction',
    description: 'A little on me',
    icon: 'i-lucide-house'
  },
  {
    title: '2010',
    description: '6 years old',
    icon: 'i-lucide-truck'
  },
  {
    title: '2016',
    description: '12 years old',
    icon: 'i-lucide-truck'
  },
  {
    title: '2018',
    description: '14 years old',
    icon: 'i-lucide-truck'
  },
  {
    title: '2020',
    description: '16 years old',
    icon: 'i-lucide-truck'
  },
  {
    title: '2022',
    description: '18 years old',
    icon: 'i-lucide-truck'
  },
  {
    title: '2025',
    description: '21 years old - now',
    icon: 'i-lucide-truck'
  },
]

const stepper = useTemplateRef('stepper')
const active = ref(0)

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
        :ui="{ separator: 'h-8 transition-all ease-in-out duration-200', item: 'mt-4', indicator: 'transition-all ease-in-out duration-200', trigger: 'transition-all ease-in-out duration-200' }"
        disabled />
    </template>

    <template #left-panel-footer>
      <div>
        <div class="flex gap-2 justify-between mt-4">
          <UButton leading-icon="i-lucide-arrow-left"
            :disabled="!stepper?.hasPrev" @click="stepper?.prev()"
            style="--ui-primary: #4a5565">
            Prev
          </UButton>

          <UButton trailing-icon="i-lucide-arrow-right"
            :disabled="!stepper?.hasNext" @click="stepper?.next()"
            style="--ui-primary: #4a5565">
            Next
          </UButton>
        </div>
      </div>
    </template>

    <template #content>
      <UCard
        class="m-5 opacity-80 cardShadow border border-[var(--ui-border)] snap-always snap-start">

        <div class="min-h-96 flex max-h-96 w-full">
          <div class="grow">
            <div class="varela underline m-4">
              Introduction
            </div>
            <div class="mr-4 ml-8">
              I'm a software engineer with a passion for building
              useful things. I'm always working on a wide range of projects,
              with a diverse set of technologies, many of which are publicly
              available as open-source contributions.
              <br /><br />
              I am constantly learning, whether through formal education or
              independently. I completed my Bachelor's degree in Software
              Engineering at Royal Holloway, University of London, graduating
              with a First Class Honours. Now I'm expanding my expertise,
              learning new skills on the job while proactively exploring
              exciting, new technologies.
              <br /><br />
              <USeparator class="w-11/12 self-center " />
              <br />
              My current interests lie in declarative, functional
              programming, with a focus on concurrency and event-based
              architectures. I enjoy FOSS projects with plugin-based
              architectures and customizability. My preferred technologies
              include C#, Vue.js, TypeScript, TailwindCSS, Gleam, and Flutter.
              <br /><br />
              My main, current personal endeavor is
              <UPopover mode="hover">
                <nuxt-link to="https://faeq-f.github.io/Quokka" target="_blank"
                  class="boxLink">Quokka</nuxt-link>
                <template #content>
                  <p class="p-1 text-sm">(project site)</p>
                </template>
              </UPopover>
              <UPopover mode="hover">
                <nuxt-link to="/project/quokka" class="boxLink">
                  <UIcon name="i-lucide-info" />
                </nuxt-link>
                <template #content>
                  <p class="p-1 text-sm">(project information)</p>
                </template>
              </UPopover>
              , a portable keystroke launcher for Windows. It features fuzzy
              searching, plugins, and is highly customizable. As a completely
              free and open-source project, it is available for everyone to
              use and contribute to.
              <br /><br />
            </div>
          </div>
          <USeparator orientation="vertical" class="h-70 self-center " />
          <img src="/media/me.jpeg" class="min-h-96 max-h-96 rounded-lg ml-4" />
        </div>

        <template #footer>
          <div class="flex justify-evenly">
            <span>
              <UBadge icon="i-lucide-user" size="lg" color="neutral"
                variant="soft">Legal Name: Faeq Faisal</UBadge>
            </span>
            <span>
              <UBadge icon="i-lucide-map-pin-house" size="lg" color="neutral"
                variant="soft">Location: London, UK</UBadge>
            </span>
            <span>
              <nuxt-link to="/portfolio">
                <UBadge icon="i-lucide-square-kanban" size="lg" color="neutral"
                  variant="soft">Number of Projects: 00</UBadge>
              </nuxt-link>
            </span>
            <span>
              <nuxt-link to="/portfolio">
                <UBadge icon="i-lucide-file-badge" size="lg" color="neutral"
                  variant="soft">Number of Certifications: 00</UBadge>
              </nuxt-link>
            </span>
          </div>
        </template>
      </UCard>

      <UCard
        class="m-5 h-60 opacity-80 cardShadow border border-[var(--ui-border)] snap-always snap-start"
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
    </template>

  </contentPanels>

</template>