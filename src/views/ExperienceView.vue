<script lang="ts"></script>

<template>
  <div class="absolute top-[20vh] left-[5vw]">
    <p id="Faeq" class="font-header text-current text-9xl">Experience</p>
    <p class="font-subheader text-5xl text-transparent">What I do</p>
    <p class="font-subheader text-5xl right-0 absolute top-28">How I have got here
    </p>
  </div>
</template>

<style scoped>
html:not(.zTheme) #Faeq::after {
  width: 60px;
  left: 130px;
  background-position: right;
}

html:not(.zTheme) #Faeq::before {
  width: 130px;
}

#Faeq::after {
  content: '';
  background: url(/underline.png);
  position: absolute;
  width: 288px;
  height: 20px;
  bottom: 2.7rem;
  left: 2.5vw;
}
</style>
