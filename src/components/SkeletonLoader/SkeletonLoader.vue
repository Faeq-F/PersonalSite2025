<script lang="ts">
import Skeleton from 'primevue/skeleton'
</script>

<template>
  <div class="card">
    <div class="flex flex-wrap">
      <div class="w-full xl:w-6/12 p-4">
        <h5>Rectangle</h5>
        <Skeleton class="mb-2"></Skeleton>
        <Skeleton width="10rem" class="mb-2"></Skeleton>
        <Skeleton width="5rem" class="mb-2"></Skeleton>
        <Skeleton height="2rem" class="mb-2"></Skeleton>
        <Skeleton width="10rem" height="4rem"></Skeleton>
      </div>
      <div class="w-full xl:w-6/12 p-4">
        <h5>Rounded</h5>
        <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
        <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
        <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
        <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
        <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
      </div>
      <div class="w-full xl:w-6/12 p-4">
        <h5 class="mt-4">Square</h5>
        <div class="flex items-end">
          <Skeleton size="2rem" class="mr-2"></Skeleton>
          <Skeleton size="3rem" class="mr-2"></Skeleton>
          <Skeleton size="4rem" class="mr-2"></Skeleton>
          <Skeleton size="5rem"></Skeleton>
        </div>
      </div>
      <div class="w-full xl:w-6/12 p-4">
        <h5 class="mt-4">Circle</h5>
        <div class="flex items-end">
          <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
          <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
          <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
          <Skeleton shape="circle" size="5rem"></Skeleton>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div
      class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900"
    >
      <div class="flex mb-4">
        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
        <div>
          <Skeleton width="10rem" class="mb-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
          <Skeleton height=".5rem"></Skeleton>
        </div>
      </div>
      <Skeleton width="100%" height="150px"></Skeleton>
      <div class="flex justify-between mt-4">
        <Skeleton width="4rem" height="2rem"></Skeleton>
        <Skeleton width="4rem" height="2rem"></Skeleton>
      </div>
    </div>
  </div>
</template>
