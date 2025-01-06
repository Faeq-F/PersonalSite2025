<script lang="ts">
export default {
  data() {
    return {
      themeIcon: 'pi pi-sun',
    }
  },
  methods: {
    toggleDarkMode() {
      document.documentElement.classList.toggle('dark')
      if (this.themeIcon == 'pi pi-sun') {
        this.themeIcon = 'pi pi-moon'
      } else {
        this.themeIcon = 'pi pi-sun'
      }
    },
  },
}
</script>

<template>
  <div id="BottomBar">
    <div
      class="!pl-2 transition-all duration-500 min-h-10 absolute bottom-8 lg:bottom-10 inset-x-8 lg:inset-x-10 flex items-center justify-between pl-5 pr-5 lg:pr-2 py-2 rounded-full dark:bg-white/15 bg-black/10 backdrop-blur-[6px] border dark:border-white/15 border-black/15 dark:shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] shadow-[0px_10px_10px_-8px_rgba(237,237,232,0.02),0px_2px_2px_-1.5px_rgba(237,237,232,0.02),0px_1px_1px_-0.5px_rgba(237,237,232,0.02)]"
    >
      <div class="w-96">
        <ButtonC @click="toggleDarkMode()" class="w-[45px] h-[40px]">
          <i :class="themeIcon" class="text-[20px]"></i>
        </ButtonC>
      </div>
      <slot />
      <div class="w-96 flex justify-end">
        <ButtonC>
          <i class="pi pi-eject text-[20px]"></i
          ><span class="font-medium font-text text-[26px]">Curriculum Vitae</span>
        </ButtonC>
      </div>
    </div>
  </div>
</template>
