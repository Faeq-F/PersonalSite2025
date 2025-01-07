<script lang="ts"></script>

<template>
  <div class="absolute top-[20vh] left-[5vw]">
    <p id="Faeq" class="font-header text-current text-9xl">About me</p>
    <p class="font-subheader text-5xl text-transparent">What I do</p>
    <p class="font-subheader text-5xl right-0 absolute top-28">What I do</p>
  </div>
</template>

<style scoped>
#Faeq::after {
  content: '';
  background: url(/underline.png);
  position: absolute;
  width: 288px;
  height: 20px;
  bottom: 2.7rem;
  left: 4.7vw;
}
</style>
