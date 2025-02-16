<script lang="ts">
import type HomeButton from './HomeButton.vue'
import type AboutButton from './AboutButton.vue'
import type PortfolioButton from './PortfolioButton.vue'
import type ExperienceButton from './ExperienceButton.vue'

export default {
  data() {
    return {
      themeIcon: 'pi pi-sun',
      leftButtonGroupStyle:
        'lg:inline-flex hidden items-center gap-2 pl-3 pr-4 py-2 rounded-full rounded-r-none dark:bg-white/20 bg-black/15 dark:hover:bg-white/40 hover:bg-black/30 transition-all duration-500 border dark:border-white/40 border-black/40 text-current',
      centerButtonGroupStyle:
        'notLeftmost lg:inline-flex hidden items-center gap-2 pl-3 pr-4 py-2 rounded-none dark:bg-white/20 bg-black/15 dark:hover:bg-white/40 hover:bg-black/30 transition-all duration-500 border dark:border-white/40 border-black/40 text-current',
      rightButtonGroupStyle:
        'notLeftmost lg:inline-flex hidden items-center gap-2 pl-3 pr-4 py-2 rounded-full rounded-l-none dark:bg-white/20 bg-black/15 dark:hover:bg-white/40 hover:bg-black/30 transition-all duration-500 border dark:border-white/40 border-black/40 text-current',
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
  computed: {
    currentRouteName() {
      return this.$route.name
    },
  },
}
</script>

<template>
  <div id="BottomBar">
    <div
      class="barStyle z-[999] !pl-2 transition-all duration-500 min-h-10 absolute bottom-8 lg:bottom-10 inset-x-8 lg:inset-x-10 flex items-center justify-between pl-5 pr-5 lg:pr-2 py-2 rounded-full dark:bg-white/15 bg-black/10 backdrop-blur-[6px] border dark:border-white/15 border-black/15 dark:shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] shadow-[0px_10px_10px_-8px_rgba(237,237,232,0.02),0px_2px_2px_-1.5px_rgba(237,237,232,0.02),0px_1px_1px_-0.5px_rgba(237,237,232,0.02)]">
      <div class="w-96">
        <ButtonC @click="toggleDarkMode()"
          class="w-[45px] h-[40px] rounded-r-none">
          <i :class="themeIcon" class="text-[20px]"></i>
        </ButtonC>
        <SettingsPopover />
      </div>
      <nav>
        <transition name="fade" mode="out-in">
          <div v-if="currentRouteName === 'home'">
            <AboutButton :classes="leftButtonGroupStyle" />
            <PortfolioButton :classes="centerButtonGroupStyle" />
            <ExperienceButton :classes="rightButtonGroupStyle" />
          </div>
          <div v-else-if="currentRouteName === 'about'">
            <HomeButton :classes="leftButtonGroupStyle" />
            <PortfolioButton :classes="centerButtonGroupStyle" />
            <ExperienceButton :classes="rightButtonGroupStyle" />
          </div>
          <div v-else-if="currentRouteName === 'portfolio'">
            <HomeButton :classes="leftButtonGroupStyle" />
            <AboutButton :classes="centerButtonGroupStyle" />
            <ExperienceButton :classes="rightButtonGroupStyle" />
          </div>
          <div v-else-if="currentRouteName === 'experience'">
            <HomeButton :classes="leftButtonGroupStyle" />
            <AboutButton :classes="centerButtonGroupStyle" />
            <PortfolioButton :classes="rightButtonGroupStyle" />
          </div>
          <div v-else>
            <HomeButton
              class="lg:inline-flex hidden items-center gap-2 pl-3 pr-4 py-2 rounded-full dark:bg-white/20 bg-black/15 dark:hover:bg-white/40 hover:bg-black/30 transition-all duration-500 border dark:border-white/40 border-black/40 text-current">
              - Error 404 - Not found
            </HomeButton>
          </div>
        </transition>
      </nav>
      <div class="w-96 flex justify-end">
        <a href="./cv.pdf" target="_blank">
          <ButtonC>
            <i class="pi pi-sparkles text-[20px]"></i><span
              class="font-medium font-text text-[26px]">Curriculum Vitae</span>
          </ButtonC>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
html:not(.zTheme) .barStyle {
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.07);
  background: white;
  color: rgb(33, 33, 38);
  border-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
}

html:not(.zTheme).dark .barStyle {
  background: #2d2d2d;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.07);
  color: rgb(255, 255, 255);
  border-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px, rgba(255, 255, 255, 0.07) 0px 0px 0px 1px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// .p-popover {
//   left: 0 !important;
//   bottom: 0 !important;
// }
</style>
