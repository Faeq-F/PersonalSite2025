<template>
  <button
    class="lg:inline-flex hidden items-center gap-2 pl-3 pr-4 py-2 rounded-full dark:bg-white/20 bg-black/15 dark:hover:bg-white/40 hover:bg-black/30 transition-all duration-500 border dark:border-white/40 border-black/40 text-current">
    <slot />
  </button>
</template>

<style scoped>
html:not(.zTheme) button {
  transition: all;
  transition-duration: 200ms;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.07);
  background: white;
  color: rgb(33, 33, 38);
  border-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
}

html:not(.zTheme) button:hover {
  box-shadow: inset rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
}

html:not(.zTheme).dark button {
  background: #2d2d2d;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.07);
  color: rgb(255, 255, 255);
  border-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px, rgba(255, 255, 255, 0.07) 0px 0px 0px 1px;
}

html:not(.zTheme).dark button:hover {
  box-shadow: inset rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px, rgba(255, 255, 255, 0.07) 0px 0px 0px 1px;
}
</style>
