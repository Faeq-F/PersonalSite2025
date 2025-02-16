<script lang="ts">
export default {
  props: {
    classes: String,
  },
}
</script>
<template>
  <RouterLink to="/portfolio">
    <button :class="classes">
      <i class="pi pi-images text-[20px] animate-duration-1000"
        v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }"></i>
      <span class="font-medium font-text text-[26px] ml-1 animate-duration-1000"
        v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }">Portfolio</span>
    </button>
  </RouterLink>
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

html:not(.zTheme) button.notLeftmost {
  box-shadow: rgba(0, 0, 0, 0.08) 20px 0px 15px 0px, rgba(25, 28, 33, 0.2) 20px 0px 20px -30px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
}


html:not(.zTheme) button.notLeftmost:hover {
  box-shadow: inset rgba(0, 0, 0, 0.08) 20px 0px 15px 0px, rgba(25, 28, 33, 0.2) 20px 0px 20px -30px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
}
</style>
