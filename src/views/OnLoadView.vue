<script lang="ts">
export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
}
</script>

<template>
  <div class="h-screen w-screen bg-white dark:bg-black absolute top-0 left-0 z-[9999]">
    <div v-show="!loading" class="absolute">
      Turn off animations?<RouterLink to="/home"><button>Continue</button></RouterLink>
    </div>
    <SkeletonLoader v-show="loading" />
  </div>
</template>
