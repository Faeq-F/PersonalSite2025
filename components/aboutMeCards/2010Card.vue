<template>
  <UCard id="AboutMeCard1"
    class="m-5 max-h-[15.5rem] min-h-[15.5rem] opacity-80 cardShadow border border-[var(--ui-border)]">
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
      <USeparator orientation="vertical" class="ml-4 self-center h-[6rem]" />
      <img src="/media/TimeLineImage1.png" class="rounded-lg ml-4 h-[9rem]" />
    </div>
  </UCard>
</template>