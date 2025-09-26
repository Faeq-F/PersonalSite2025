<script lang="ts" setup>
import contentPanels from '~/components/layoutSections/contentPanels.vue';
import type { CheckboxGroupItem, CheckboxGroupValue, InputMenuItem, RadioGroupValue, TabsItem } from '@nuxt/ui'
import { ref } from 'vue';

import type { TimelineItem } from '@nuxt/ui'

const items = ref<TimelineItem[]>([
  {
    date: 'Mar 15, 2025',
    title: 'Project Kickoff',
    description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
    icon: 'i-lucide-rocket',
    to: '/about/'
  },
  {
    date: 'Mar 22 2025',
    title: 'Design Phase',
    description: 'User research and design workshops. Created wireframes and prototypes for user testing.',
    icon: 'i-lucide-palette',
    to: '/about/'
  },
  {
    date: 'Mar 29 2025',
    title: 'Development Sprint',
    description: 'Frontend and backend development. Implemented core features and integrated with APIs.',
    icon: 'i-lucide-code',
    to: '/about/'
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
    to: '/about/'
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
    to: '/about/'
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
    to: '/about/'
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
    to: '/about/'
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
    to: '/about/'
  },

  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
    to: '/about/'
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
    to: '/about/'
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
    to: '/about/'
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
    to: '/about/'
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
    to: '/about/'
  }
]);

const roles = ref<CheckboxGroupItem[]>([
  {
    label: 'Jobs',
    value: 'jobs',
    description: 'A paid position of regular employment'
  },
  {
    label: 'Education',
    value: 'education',
    description: 'Formal learning experiences, degrees, and certifications'
  },
  {
    label: 'Volunteering',
    value: 'volunteering',
    description: 'Unpaid work for the community or charitable organizations'
  },
  {
    label: 'Events',
    value: 'events',
    description: 'Various affairs taken part in'
  },
  {
    label: 'Long-term projects',
    value: 'projects',
    description: 'Significant undertakings with defined goals and timelines'
  }
])
const activeRole = ref<CheckboxGroupValue[]>(['jobs', 'education', 'projects', 'volunteering', 'events'])

const TagCatItems = ref([
  {
    type: 'label',
    label: 'Fruits',
  },
  {
    type: 'item',
    label: 'Apple',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Banana',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Blueberry',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Grapes',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Pineapple',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'separator'
  },
  {
    type: 'label',
    label: 'Vegetables',
  },
  {
    type: 'item',
    label: 'Broccoli',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Carrot',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Courgette',
    icon: 'i-lucide-circle-help'
  },
  {
    type: 'item',
    label: 'Leek',
    icon: 'i-lucide-circle-help'
  }
] satisfies InputMenuItem[])
const TagCatValue = ref()

function onInputOpen(open: boolean) {
  if (open) {
    // make popup scrollable
    setTimeout(() => {
      document.querySelectorAll('[data-reka-popper-content-wrapper]')[0].setAttribute("data-lenis-prevent", "");
    }, 100);
  }
}


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
const scrollActive = ref('snap')

</script>

<template>
  <contentPanels>
    <template #left-panel-header>
      <div class="font-bold " style="line-height: 1;">
        <p class="text-[3rem] varela">Experience</p>
        <p class="text-[1rem]">My professional growth</p>
      </div>
    </template>

    <template #left-panel-content>

      <UCheckboxGroup color="neutral" variant="table" :items="roles"
        v-model="activeRole" legend="Filter by role"
        :default-value="['jobs', 'education', 'projects', 'volunteering', 'events']">
        <template #legend>
          <UButton
            :icon="activeRole?.length! < 3 ? 'i-lucide-check-check' : 'i-lucide-squares-subtract'"
            color="neutral" variant="outline" size="sm"
            @click="activeRole?.length! < 3 ? activeRole = ['jobs', 'education', 'projects', 'volunteering', 'events'] : activeRole = []" />
          <div class="font-bold ml-1 align-text-bottom inline">Filter by role
          </div>
        </template>
      </UCheckboxGroup>

      <UInputMenu v-model="TagCatValue" :items="TagCatItems" multiple
        placeholder="Select for tag cat" variant="soft"
        style="--ui-primary: #4a5565" :icon="TagCatValue?.icon" :ui="{
          trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
        }" data-lenis-prevent class="mx-auto my-4 w-fit block"
        @update:open="onInputOpen">
        <template #tags-item-text="item">
          <UIcon :name="item.item.icon as string" />
          {{ item.item.label }}
        </template>
      </UInputMenu>

    </template>

    <template #left-panel-footer>
      <UTabs :content="false" :items="scrollOptions" v-model="scrollActive"
        :ui="{ trigger: 'self-start', label: 'dark:text-white', leadingIcon: 'dark:text-white' }"
        style="--ui-primary: #4a5565" size="sm" />
    </template>

    <template #content>
      <UTimeline :default-value="-1" :items="items" class="w-full "
        :class="scrollActive == 'snap' ? 'snapScroll' : ''" size="lg" :ui="{
          date: 'float-end ms-1 pr-4',
          description: 'px-3 mr-4 py-2 mt-2 rounded-md text-default cardShadow border border-[var(--ui-border)] bg-white dark:bg-black opacity-80',
          separator: 'cardShadow border border-[var(--ui-border)] bg-white dark:bg-black brightness-200',
          indicator: 'cardShadow border border-[var(--ui-border)] bg-white dark:bg-black opacity-80',
        }">
        <template #date="{ item }">
          <nuxt-link :to="item.to">
            {{ item.date }}
          </nuxt-link>
        </template>
        <template #title="{ item }">
          <nuxt-link :to="item.to">
            {{ item.title }}
          </nuxt-link>
        </template>
        <template #description="{ item }">
          <nuxt-link :to="item.to">
            <!-- Could use md here -->
            {{ item.description }}
          </nuxt-link>
        </template>
      </UTimeline>


    </template>

  </contentPanels>
</template>