<script lang="ts">
import BlurReveal from '@/components/BlurReveal.vue';
export default {}
</script>

<template>
  <div class="absolute">
    <BlurReveal :delay="0.2" :duration="0.75" class="p-8">
      <div class="relative top-[15vh] left-[3vw]">
        <p id="Faeq" class="font-header text-current text-9xl">Faeq</p>
        <p class="font-subheader text-5xl">
          <TextGenerateEffect words="Software Engineer" :delay="1000" />
        </p>
      </div>
      <div id="HomeSocialButtonGroup" class="relative top-[15.1vh] left-[3vw]">
        <a href="mailto:faeqfaisal@hotmail.co.uk" target="_blank">
          <ButtonC class="justify-center mr-3 pl-4 w-16 ml-1">
            <i class="pi pi-envelope text-[20px]"></i>
          </ButtonC>
        </a>
        <a href="https://linkedin.com/in/faeq" target="_blank">
          <ButtonC class="justify-center mr-3 pl-4 w-16">
            <i class="pi pi-linkedin text-[20px]"></i>
          </ButtonC>
        </a>
        <a href="https://github.com/Faeq-F" target="_blank">
          <ButtonC class="justify-center mr-3 w-16 pl-4">
            <i class="pi pi-github text-[20px]"></i>
          </ButtonC>
        </a>
        <a href="http://stackoverflow.com/users/13165763/faeq" target="_blank">
          <ButtonC class="justify-center mr-3 w-16 pl-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
              width="15px" class="fill-current">
              <!-- !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.
          -->
              <path
                d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
            </svg>
          </ButtonC>
        </a>
        <a href="sms:+447775901092?&body=Hello%Faeq," target="_blank">
          <ButtonC class="justify-center mr-3 w-16 pl-4">
            <i class="pi pi-send text-[20px]"></i>
          </ButtonC>
        </a>
        <a href="https://cal.com/Faeq-F" target="_blank">
          <ButtonC class="justify-center mr-3 w-9 h-9 pl-[1.05rem]">
            <i class="pi pi-calendar-plus text-[20px]"></i>
          </ButtonC>
        </a>
      </div>
    </BlurReveal>
  </div>
</template>

<style scoped>
html:not(.zTheme) {
  #HomeSocialButtonGroup {
    margin-top: 5px;
  }
}

html:not(.zTheme) #Faeq::before {
  bottom: 3.8rem;
}
</style>
