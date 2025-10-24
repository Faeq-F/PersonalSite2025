<template>
  <UCard
    class="m-5 my-4 max-h-[15.5rem] min-h-[15.5rem] opacity-80 cardShadow border border-[var(--ui-border)]">
    <template #header>
      <div class="flex justify-between">
        <span class="flex items-center">
          2020
          <USeparator orientation="vertical" class="h-4 inline-block mx-4" />
          GCSEs
        </span>
        <span class="opacity-70">
          16 years old
        </span>
      </div>
    </template>

    <div class="flex justify-between aboutContent">
      <div class="leading-[1.9] -mt-2">
        With a clear career path in mind, prior to my first national exams,
        I built a relevant foundation by studying
        <UPopover mode="hover" :ui="{ content: 'popoverContent' }">
          <nuxt-link target="_blank"
            to="https://web.archive.org/web/20200920060658/https://www.aqa.org.uk/subjects/computer-science-and-it/gcse/computer-science-8525"
            class="boxLink">Computer Science</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See specification</p>
          </template>
        </UPopover> and
        <UPopover mode="hover" :ui="{ content: 'popoverContent' }">
          <nuxt-link target="_blank"
            to="https://web.archive.org/web/20180315022607/https://www.ocr.org.uk/qualifications/by-type/gcse-related/science/"
            class="boxLink">Triple Science</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See specification</p>
          </template>
        </UPopover> (also known as separate sciences).
        <div class="h-4"></div>
        <nuxt-link to="/certificate/GCSEs">
          <span class="underline decoration-dotted text-muted decoration-1">
            My certificates are available in my portfolio<br />
          </span>
          <span class="text-muted">
            10 GCSEs total, including Computer Science (9), Mathematics (7),
            Physics
            (7),
            English
            (7),
            Biology (8)
          </span>
        </nuxt-link>
      </div>
      <div class="flex mx-4">
        <USeparator orientation="vertical" class=" self-center h-[6rem]" />
        <img src="/media/TimeLineImage4.webp"
          class="rounded-lg ml-4 h-[9rem]" />
      </div>
    </div>
  </UCard>
</template>