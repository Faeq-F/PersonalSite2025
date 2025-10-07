<template>
  <UCard
    class="m-5 my-4 max-h-[15.5rem] min-h-[15.5rem] opacity-80 cardShadow border border-[var(--ui-border)]">
    <template #header>
      <div class="flex justify-between">
        <span class="flex items-center">
          2025
          <USeparator orientation="vertical" class="h-4 inline-block mx-4" />
          My Degree
        </span>
        <span class="opacity-70">
          21 years old
        </span>
      </div>
    </template>

    <div class="flex justify-between">
      <div class="leading-[1.9] -mt-2">
        As the culminating step, I earned a
        <UPopover mode="hover">
          <nuxt-link target="_blank"
            to="https://en.wikipedia.org/wiki/Bachelor_of_Science#United_Kingdom"
            class="boxLink">Bachelor of Science (Hons)</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See qualification</p>
          </template>
        </UPopover>
        in
        <UPopover mode="hover">
          <nuxt-link target="_blank"
            to="https://web.archive.org/web/20221127112742/https://www.royalholloway.ac.uk/studying-here/undergraduate/computer-science/computer-science-software-engineering/"
            class="boxLink">Software
            Engineering</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See specification</p>
          </template>
        </UPopover>, which equipped me with
        advanced, industry-ready skills for my chosen career.
        <div class="h-4"></div>
        <nuxt-link to="/certificate/degree">
          <span class="underline decoration-dotted text-muted decoration-1">
            My certificate is available in my portfolio<br />
          </span>
          <span class="text-muted">
            First Class Honours, BSc Computer Science (Software Engineering)
          </span>
        </nuxt-link>
      </div>
      <div class="flex">
        <USeparator orientation="vertical" class=" self-center h-[6rem]" />
        <img src="/media/TimeLineImage6.webp"
          class="rounded-lg ml-4 h-[9rem]" />
      </div>
    </div>
  </UCard>
</template>