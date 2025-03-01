<script lang="ts"></script>

<template>
  <div class="absolute">
    <BlurReveal :delay="0.2" :duration="0.75" class="p-8">
      <div class="relative top-[15vh] left-[3vw]">
        <p id="Faeq" class="font-header text-current text-9xl">About me</p>
        <p class="font-subheader text-5xl text-transparent">What I do</p>
        <p class="font-subheader text-5xl -right-[20px] absolute top-[6.5rem]">
          <TextGenerateEffect words="What I do" :delay="1000" />
        </p>
      </div>
    </BlurReveal>
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
