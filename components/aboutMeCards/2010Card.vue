<template>
  <UCard id="AboutMeCard1"
    class="m-5 my-4 max-h-[15.5rem] min-h-[15.5rem] opacity-80 cardShadow border border-[var(--ui-border)]">
    <template #header>
      <div class="flex justify-between">
        <span class="flex items-center">
          2010
          <USeparator orientation="vertical" class="h-4 inline-block mx-4" />
          Modding
        </span>
        <span class="opacity-70">
          6 years old
        </span>
      </div>
    </template>

    <div class="flex justify-between">
      <div class="leading-[1.9] -mt-2">
        My journey began with digital games. I was completely immersed,
        from the puzzle
        <UPopover mode="hover">
          <nuxt-link to="https://en.wikipedia.org/wiki/Windows_Desktop_Gadgets"
            target="_blank" class="boxLink">widget</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See Windows Desktop Gadgets</p>
          </template>
        </UPopover> on
        <UPopover mode="hover">
          <nuxt-link to="https://en.wikipedia.org/wiki/Windows_XP"
            target="_blank" class="boxLink">Windows XP</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See Windows XP</p>
          </template>
        </UPopover>, to the exhilarating 3D
        Brawlers on the
        <UPopover mode="hover">
          <nuxt-link to="https://en.wikipedia.org/wiki/Wii" target="_blank"
            class="boxLink">Nintendo Wii</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See Nintendo Wii</p>
          </template>
        </UPopover>.
        <div class="h-4"></div>
        This soon led me to successfully
        modifying my Wii console to accommodate SD-cards formatted with the
        <UPopover mode="hover">
          <nuxt-link
            to="https://web.archive.org/web/20230303133311/https://wbfsmanager.com/"
            target="_blank" class="boxLink">WBFS manager</nuxt-link>
          <template #content>
            <p class="p-1 text-sm">See WBFS manager</p>
          </template>
        </UPopover>, allowing me to play any game without the need of a
        physical copy.
        <div class="h-4"></div>
        This initiated my profound interest in technology
        and its vast potential. I quickly became a proficient tinkerer,
        focusing on high levels of customization.
      </div>
      <div class="flex mx-4">
        <USeparator orientation="vertical" class="self-center h-[6rem]" />
        <img src="/media/TimeLineImage1.png" class="rounded-lg ml-4 h-[9rem]" />
      </div>
    </div>
  </UCard>
</template>