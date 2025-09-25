<template>
  <UCard id="AboutMeCard5"
    class="m-5 my-4 max-h-[15.5rem] min-h-[15.5rem] opacity-80 cardShadow border border-[var(--ui-border)]">
    <template #header>
      <div class="flex justify-between">
        <span class="flex items-center">
          2022
          <USeparator orientation="vertical" class="h-4 inline-block mx-4" />
          A-levels
        </span>
        <span class="opacity-70">
          18 years old
        </span>
      </div>
    </template>

    <div class="flex justify-between">
      <div class="leading-[1.9] -mt-2">
        Continuing with obtaining
        <UPopover mode="hover">
          <nuxt-link target="_blank"
            to="https://www.gov.uk/what-different-qualification-levels-mean/list-of-qualification-levels#level-3"
            class="boxLink">national
            qualifications</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See qualification level</p>
          </template>
        </UPopover>, I took three
        <UPopover mode="hover">
          <nuxt-link target="_blank" to="https://en.wikipedia.org/wiki/A-level"
            class="boxLink">A-level</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See qualification</p>
          </template>
        </UPopover>
        subjects;
        <UPopover mode="hover">
          <nuxt-link target="_blank"
            to="https://web.archive.org/web/20190329023323/https://www.ocr.org.uk/qualifications/as-and-a-level/computer-science-h046-h446-from-2015/"
            class="boxLink">Computer Science</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See specification</p>
          </template>
        </UPopover>,
        <UPopover mode="hover">
          <nuxt-link target="_blank"
            to="https://web.archive.org/web/20190116222943/https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.html"
            class="boxLink">Mathematics</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See specification</p>
          </template>
        </UPopover> and
        <UPopover mode="hover">
          <nuxt-link target="_blank"
            to="https://web.archive.org/web/20190329023643/https://www.ocr.org.uk/qualifications/as-and-a-level/physics-a-h156-h556-from-2015/"
            class="boxLink">Physics</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See specification</p>
          </template>
        </UPopover>.<div class="h-4"></div>
        <nuxt-link to="/certificate/A-levels">
          <span class="underline decoration-dotted text-muted decoration-1">
            My certificates are available in my portfolio<br />
          </span>
          <span class="text-muted">
            3 A-levels total, including Computer Science (A), Mathematics (B),
            Physics (C)
          </span>
        </nuxt-link>
      </div>
      <div class="flex ml-4">
        <USeparator orientation="vertical" class=" self-center h-[6rem]" />
        <img src="/media/TimeLineImage5.jpg" class="rounded-lg ml-4 h-[9rem]" />
      </div>
    </div>
  </UCard>
</template>