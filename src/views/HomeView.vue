<script lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

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
  <main>
    <div class="absolute top-[20vh] left-[20vw]">
      <p id="Faeq" class="font-header text-current text-9xl">Faeq</p>
      <p class="font-subheader text-5xl">Software Engineer</p>
    </div>
    <img
      src="/Faeq.png"
      alt="An image of me"
      style="
        mix-blend-mode: overlay;
        height: 50vh;
        display: block;
        filter: grayscale(1) brightness(1.1);
      "
    />
    <BottomBar>
      <nav>
        <RouterLink to="/about">
          <button
            class="lg:inline-flex hidden items-center gap-2 pl-3 pr-4 py-2 rounded-full rounded-r-none dark:bg-white/20 bg-black/15 dark:hover:bg-white/40 hover:bg-black/30 transition-all duration-500 border dark:border-white/40 border-black/40 text-current"
          >
            <i class="pi pi-user text-[20px]"></i>
            <span class="font-medium font-text text-[26px] ml-1">About Me</span>
          </button>
        </RouterLink>
        <RouterLink to="/portfolio">
          <button
            class="lg:inline-flex hidden items-center gap-2 pl-3 pr-4 py-2 rounded-none dark:bg-white/20 bg-black/15 dark:hover:bg-white/40 hover:bg-black/30 transition-all duration-500 border dark:border-white/40 border-black/40 text-current"
          >
            <i class="pi pi-images text-[20px]"></i>
            <span class="font-medium font-text text-[26px] ml-1">Portfolio</span>
          </button>
        </RouterLink>
        <RouterLink to="/experience">
          <button
            class="lg:inline-flex hidden items-center gap-2 pl-3 pr-4 py-2 rounded-full rounded-l-none dark:bg-white/20 bg-black/15 dark:hover:bg-white/40 hover:bg-black/30 transition-all duration-500 border dark:border-white/40 border-black/40 text-current"
          >
            <i class="pi pi-briefcase text-[20px]"></i>
            <span class="font-medium font-text text-[26px] ml-1">Experience</span>
          </button>
        </RouterLink>
      </nav>
    </BottomBar>
  </main>
</template>
