<script lang="ts" setup>




</script>

<template>
  <div class="p-8 h-full w-full">
    <div class="flex h-full w-full">
      <UCard
        class="m-4 h-full w-96 opacity-80 cardShadow border border-[var(--ui-border)]">
        <template #header>
          <div class="font-bold varela" style="line-height: 1;">
            <p class="text-[3rem]">Portfolio</p>
            <p class="text-[1rem]">What I have worked on</p>
          </div>
        </template>

        <div class="min-h-[60vh]">
          filters here
          <div>
            certificate selector
          </div>
        </div>

        <template #footer>
          View switch
        </template>
      </UCard>
      <!-- Snap scroll these or transition them -->
      <div
        class="flex flex-col h-full w-full mr-8 mt-4 overflow-y-scroll overflow-x-hidden"
        data-lenis-prevent>
        <UCard
          class="m-4 h-60 opacity-80 cardShadow border border-[var(--ui-border)]"
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
      </div>
    </div>
  </div>
</template>