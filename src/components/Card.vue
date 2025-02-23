<script lang="ts">


</script>
<template>
  <div
    class="barStyle z-[999] !pl-2 transition-all duration-500 min-h-10 bottom-8 lg:bottom-10 inset-x-8 lg:inset-x-10 flex items-center justify-between pl-5 pr-5 lg:pr-2 py-2 rounded-full dark:bg-white/15 bg-black/10 backdrop-blur-[6px] border dark:border-white/15 border-black/15 dark:shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] shadow-[0px_10px_10px_-8px_rgba(237,237,232,0.02),0px_2px_2px_-1.5px_rgba(237,237,232,0.02),0px_1px_1px_-0.5px_rgba(237,237,232,0.02)]">
    <slot></slot>

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
</style>
