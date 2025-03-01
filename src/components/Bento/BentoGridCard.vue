<template>
  <Transition name="slide-fade-from-bottom" appear v-if="appear">
    <div :key="name" :class="cn(
      'group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl',
      // light styles
      'bg-[#fff] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      // dark styles
      'transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      props.class,
    )">
      <slot name="background" />

      <div
        class="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <component :is="icon" v-if="icon"
          class="size-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
        <div v-else
          class="size-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75">
        </div>
        <h3 class="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {{ name }}
        </h3>
        <p class="max-w-lg text-neutral-600  dark:text-neutral-400">{{
          description
        }}
        </p>
      </div>

      <div
        class="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <button variant="ghost" as-child size="sm" class="pointer-events-auto">
          <a :href="href"> {{ cta }} → </a>
        </button>
      </div>
      <div
        class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";

interface Props {
  name: string;
  class?: HTMLAttributes["class"];
  icon?: string;
  description: string;
  href: string;
  cta: string;
}

const props = defineProps<Props>();

const appear = ref(false)

function delayCard() {
  setTimeout(() => appear.value = true, 150);
}

onMounted(() => delayCard())

</script>

<style>
.slide-fade-from-bottom-enter-active {
  transition: all 0.7s ease-out;
}

.slide-fade-from-bottom-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-from-bottom-enter-from,
.slide-fade-from-bottom-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
