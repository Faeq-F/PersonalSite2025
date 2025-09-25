<template>
  <UCard id="AboutMeCard2"
    class="m-5 my-4 max-h-[15.5rem] min-h-[15.5rem] opacity-80 cardShadow border border-[var(--ui-border)]">
    <template #header>
      <div class="flex justify-between">
        <span class="flex items-center">
          2016
          <USeparator orientation="vertical" class="h-4 inline-block mx-4" />
          Programming
        </span>
        <span class="opacity-70">
          12 years old
        </span>
      </div>
    </template>

    <div class="flex justify-between">
      <div class="leading-[1.9] -mt-2">
        I began programming as a hobby throughout my primary school years.
        <div class="h-4"></div>
        Beginning with block-based programming on
        <UPopover mode="hover">
          <nuxt-link to="https://en.scratch-wiki.info/wiki/Scratch_1.4"
            target="_blank" class="boxLink">Scratch 1.4</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See Scratch 1.4</p>
          </template>
        </UPopover> &
        <UPopover mode="hover">
          <nuxt-link to="https://en.scratch-wiki.info/wiki/Scratch_2.0"
            target="_blank" class="boxLink">2.0</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See Scratch 2.0</p>
          </template>
        </UPopover>, I
        explored my creativity and developed
        engaging programs, including games such as
        <UPopover mode="hover">
          <nuxt-link to="https://en.wikipedia.org/wiki/Pac-Man" target="_blank"
            class="boxLink">Pac-Man</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See Pac-Man</p>
          </template>
        </UPopover>.
        <div class="h-4"></div>
        As my skills
        progressed, I delved into the realm of text-based programming with
        <UPopover mode="hover">
          <nuxt-link to="https://www.python.org/" target="_blank"
            class="boxLink">Python</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See Python</p>
          </template>
        </UPopover>, immersing myself, learning from professionals, and
        occasionally
        <UPopover mode="hover">
          <nuxt-link to="https://stackoverflow.com/users/13165763/faeq"
            target="_blank" class="boxLink">contributing myself</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See StackOverflow</p>
          </template>
        </UPopover>.
      </div>
      <div class="flex mx-4">
        <USeparator orientation="vertical" class="self-center h-[6rem]" />
        <img src="/media/TimeLineImage2.png" class="rounded-lg ml-4 h-[9rem]" />
      </div>
    </div>
  </UCard>
</template>