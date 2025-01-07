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
      <i
        class="pi pi-images text-[20px] animate-duration-1000"
        v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }"
      ></i>
      <span
        class="font-medium font-text text-[26px] ml-1 animate-duration-1000"
        v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }"
        >Portfolio</span
      >
    </button>
  </RouterLink>
</template>
