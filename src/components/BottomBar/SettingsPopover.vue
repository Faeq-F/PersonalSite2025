<script>
import ToggleSwitch from 'primevue/toggleswitch'
import { useBgAnimStore } from '@/stores/store'

export default {
  data() {
    return {
      bgAnim: true,
      zTheme: false,
    }
  },
  watch: {
    zTheme(newZtheme) {
      document.getElementsByTagName('html')[0].classList.toggle('zTheme')
      document.getElementById('AuroraBackground').classList.toggle('hidden')
    },
    bgAnim(newBgAnim) {
      document.getElementById('fogWrap').classList.toggle('hidden')
      document.getElementById('star-layers').classList.toggle('hidden')
      document.getElementsByTagName('html')[0].classList.toggle('noAnim')
    },
  },
  methods: {
    toggleSettings(event) {
      this.$refs.settingsPopover.toggle(event)
    },
  },
}
</script>

<template>
  <ButtonC class="w-[45px] h-[40px] rounded-l-none" @click="toggleSettings">
    <i class="pi pi-spin pi-cog text-[20px]" v-if="bgAnim"></i>
    <i class="pi pi-cog text-[20px]" v-else></i>
  </ButtonC>
  <Popover
    ref="settingsPopover"
    id="settingsPopover"
    class="rounded-3xl dark:bg-white/15 bg-black/10 backdrop-blur-[6px] border dark:border-white/15 border-black/15 dark:shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] shadow-[0px_10px_10px_-8px_rgba(237,237,232,0.02),0px_2px_2px_-1.5px_rgba(237,237,232,0.02),0px_1px_1px_-0.5px_rgba(237,237,232,0.02)]"
  >
    <div class="flex flex-col gap-4">
      <div>
        <div class="flex items-center gap-2">
          <ToggleSwitch v-model="bgAnim" id="bgAnim">
            <template #handle="bgAnim">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#DDDDDD"
                  d="M45.1,-79.3C56.9,-71.3,63.9,-56.1,69.7,-41.7C75.5,-27.3,80.2,-13.6,82.3,1.2C84.3,16,83.8,32.1,76.2,43.4C68.6,54.7,53.9,61.2,40,67.9C26.1,74.6,13.1,81.4,-0.3,81.9C-13.7,82.5,-27.3,76.8,-40.9,69.9C-54.5,63.1,-68.1,55.1,-75.9,43.3C-83.8,31.4,-86,15.7,-83.5,1.4C-81.1,-12.9,-74,-25.8,-66.2,-37.6C-58.3,-49.5,-49.7,-60.4,-38.6,-68.8C-27.4,-77.2,-13.7,-83.1,1.5,-85.6C16.6,-88.2,33.3,-87.3,45.1,-79.3Z"
                  transform="translate(100 100)"
                />
              </svg>
            </template>
          </ToggleSwitch>
          <label for="bgAnim" class="font-text">Background animation</label>
        </div>
      </div>
      <div>
        <div class="flex items-center gap-2">
          <ToggleSwitch v-model="zTheme" id="zTheme">
            <template #handle="zTheme">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#DDDDDD"
                  d="M36.4,-67.2C47.3,-56.8,56.3,-47.3,63.2,-36.2C70.1,-25.1,75,-12.6,77.7,1.6C80.4,15.7,81.1,31.5,75,43.9C68.9,56.4,56,65.6,42.4,71.8C28.8,78,14.4,81.1,0.2,80.8C-14,80.5,-28.1,76.7,-42.5,71C-56.9,65.2,-71.6,57.6,-80.5,45.4C-89.3,33.2,-92.3,16.6,-89.6,1.6C-86.8,-13.5,-78.4,-27,-70.7,-41C-62.9,-55.1,-55.8,-69.7,-44.1,-79.6C-32.5,-89.5,-16.2,-94.7,-1.7,-91.7C12.8,-88.7,25.6,-77.6,36.4,-67.2Z"
                  transform="translate(100 100)"
                />
              </svg>
            </template>
          </ToggleSwitch>
          <label for="zTheme" class="font-text"
            ><span class="zTheme font-header">Zarlasht</span> theme</label
          >
        </div>
      </div>
    </div>
  </Popover>
</template>

<style>
#settingsPopover {
  top: unset !important;
  bottom: 6.5rem !important;
  left: 2.5rem !important;
}

.p-toggleswitch-handle {
  position: relative;
  top: 4px;
  background: transparent;
}

.p-toggleswitch-slider {
  background-color: rgb(0 0 0 / 0.1);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
    var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
    var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.p-toggleswitch:hover .p-toggleswitch-slider {
  background-color: rgb(0 0 0 / 0.4);
}

.p-toggleswitch-input:checked + .p-toggleswitch-slider {
  background-color: rgb(0 0 0 / 0.8);
}
</style>
