<script lang="ts">
export default {
  props: {
    classes: String,
  },
}
</script>
<template>
  <RouterLink to="/experience">
    <button :class="classes">
      <i
        class="pi pi-briefcase text-[20px] animate-duration-1000"
        v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }"
      ></i>
      <span
        class="font-medium font-text text-[26px] ml-1 animate-duration-1000"
        v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }"
        >Experience</span
      >
    </button>
  </RouterLink>
</template>
