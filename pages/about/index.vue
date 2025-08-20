<script lang="ts" setup>
import { ref, useTemplateRef, watch } from 'vue';
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
    description: '21 years old',
    icon: 'i-lucide-truck'
  },
]

const stepper = useTemplateRef('stepper')
const active = ref(0)

watch(active, (newActiveVal) => {
  document.getElementById('contentPanelsContent')!.scrollTo({ top: document.getElementById('AboutMeCard' + newActiveVal)!.offsetTop, behavior: 'smooth' })
})

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
      <UCard id="AboutMeCard0"
        class="my-5 mx-4 opacity-80 cardShadow border border-[var(--ui-border)]">

        <div class="min-h-[24.5rem] flex max-h-[24.5rem] w-full">
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
                  <p class="p-1 text-sm">Project Site</p>
                </template>
              </UPopover>
              <UPopover mode="hover">
                <nuxt-link to="/project/quokka" class="boxLink">
                  <UIcon name="i-lucide-info" />
                </nuxt-link>
                <template #content>
                  <p class="p-1 text-sm">Project Information</p>
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
                variant="soft">
                <USeparator orientation="vertical"
                  class="h-4 invert opacity-20" />
                Legal Name:
                <span class="opacity-80">
                  Faeq Faisal
                </span>
              </UBadge>
            </span>
            <span>
              <UBadge icon="i-lucide-map-pin-house" size="lg" color="neutral"
                variant="soft">
                <USeparator orientation="vertical"
                  class="h-4 invert opacity-20" />
                Location:
                <span class="opacity-80">
                  London, UK
                </span>
              </UBadge>
            </span>
            <span>
              <nuxt-link to="/portfolio">
                <UBadge icon="i-lucide-square-kanban" size="lg" color="neutral"
                  variant="soft">
                  <USeparator orientation="vertical"
                    class="h-4 invert opacity-20" />
                  Number of Projects:
                  <span class="opacity-80">
                    00
                  </span>
                </UBadge>
              </nuxt-link>
            </span>
            <span>
              <nuxt-link to="/portfolio">
                <UBadge icon="i-lucide-file-badge" size="lg" color="neutral"
                  variant="soft">
                  <USeparator orientation="vertical"
                    class="h-4 invert opacity-20" />
                  Number of Certifications:
                  <span class="opacity-80">
                    00
                  </span>
                </UBadge>
              </nuxt-link>
            </span>
          </div>
        </template>
      </UCard>

      <UCard id="AboutMeCard1"
        class="m-5 max-h-[15.5rem] min-h-[15.5rem] opacity-80 cardShadow border border-[var(--ui-border)]">
        <template #header>
          <div class="flex justify-between">
            <span class="flex items-center">
              2010
              <USeparator orientation="vertical"
                class="h-4 inline-block mx-4" />
              Modding
            </span>
            <span class="opacity-70">
              6 years old
            </span>
          </div>
        </template>

        <div class="flex">
          <div class="leading-[1.4]">
            My journey began with digital games. I was captivated by everything,
            from the puzzle widget on Windows XP, to the exhilarating 3D
            Brawlers on the Nintendo Wii.
            <br /><br />
            This soon led me to successfully
            modifying my Wii console to accommodate SD-cards formatted with the
            WBFS manager, allowing me to play any game without the need of a
            physical copy.
            <br /><br />
            This initiated my profound interest in technology
            and its vast potential. I quickly became a proficient tinkerer,
            focusing on high levels of customization.
          </div>
          <USeparator orientation="vertical"
            class="ml-4 self-center h-[6rem]" />
          <img src="/media/TimeLineImage1.png"
            class="rounded-lg ml-4 h-[9rem]" />
        </div>
      </UCard>

      <UCard id="AboutMeCard2"
        class="m-5 h-[24.5rem] opacity-80 cardShadow border border-[var(--ui-border)]">
        <template #header>
          <div class="flex justify-between">
            <span>
              2016
            </span>
            <span class="opacity-70">
              12 years old
            </span>
          </div>
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
      <UCard id="AboutMeCard3"
        class="m-5 h-[24.5rem] opacity-80 cardShadow border border-[var(--ui-border)]">
        <template #header>
          <div class="flex justify-between">
            <span>
              2018
            </span>
            <span class="opacity-70">
              14 years old
            </span>
          </div>
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
      <UCard id="AboutMeCard4"
        class="m-5 h-[24.5rem] opacity-80 cardShadow border border-[var(--ui-border)]">
        <template #header>
          <div class="flex justify-between">
            <span>
              2020
            </span>
            <span class="opacity-70">
              16 years old
            </span>
          </div>
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
      <UCard id="AboutMeCard5"
        class="m-5 h-[24.5rem] opacity-80 cardShadow border border-[var(--ui-border)]">
        <template #header>
          <div class="flex justify-between">
            <span>
              2022
            </span>
            <span class="opacity-70">
              18 years old
            </span>
          </div>
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
      <UCard id="AboutMeCard6"
        class="m-5 h-[24.5rem] opacity-80 cardShadow border border-[var(--ui-border)]">
        <template #header>
          <div class="flex justify-between">
            <span>
              2025
            </span>
            <span class="opacity-70">
              21 years old
            </span>
          </div>
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