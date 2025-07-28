<script setup lang="ts">
import stackoverflow from '~/components/icons/stackoverflow.vue'
import github from '~/components/icons/github.vue'
import linkedin from '~/components/icons/linkedin.vue'
</script>

<template>
  <div class="p-8">
    <div class="text-3xl font-bold mb-5 varela">
      <!-- change this text -->
      Hi there, I'm Faeq! 👋
    </div>
    <!-- add popups on hover-->
    <div id="HomeSocialButtonGroup" class="">
      <a href="mailto:faeqfaisal@hotmail.co.uk" target="_blank">
        <button
          class="lg:inline-flex hidden items-center gap-2 pr-4 py-2 rounded-full  text-current justify-center mr-3 pl-4 w-16 ml-1">
          <UIcon name="i-lucide-mail"
            class="!size-5 contrast-0 hover:contrast-100  transition-all ease-in-out duration-200" />
        </button>
      </a>
      <a href="https://linkedin.com/in/faeq" target="_blank">
        <button
          class="lg:inline-flex hidden items-center gap-2 pr-4 py-2 rounded-full  text-current justify-center mr-3 pl-4 w-16">
          <linkedin
            class="grayscale contrast-0 hover:contrast-100 hover:grayscale-0 transition-all ease-in-out duration-200 size-5" />
        </button>
      </a>
      <a href="https://github.com/Faeq-F" target="_blank">
        <button
          class="lg:inline-flex hidden items-center gap-2 pr-4 py-2 rounded-full  text-current justify-center mr-3 w-16 pl-4">
          <github
            class="contrast-0 hover:contrast-100 transition-all ease-in-out duration-200 size-5" />
        </button>
      </a>
      <a href="http://stackoverflow.com/users/13165763/faeq" target="_blank">
        <button
          class="lg:inline-flex hidden items-center gap-2 pr-4 py-2 rounded-full  text-current justify-center mr-3 w-16 pl-4">
          <stackoverflow
            class="grayscale hover:grayscale-0 transition-all ease-in-out duration-200 size-5" />
        </button>
      </a>
      <a href="sms:+447775901092?&amp;body=Hello%Faeq," target="_blank">
        <button
          class="lg:inline-flex hidden items-center gap-2 pr-4 py-2 rounded-full  text-current justify-center mr-3 w-16 pl-4">
          <UIcon name="i-lucide-message-square-text"
            class="!size-5 contrast-0 hover:contrast-100  transition-all ease-in-out duration-200" />
        </button>
      </a>
      <a href="https://cal.com/Faeq-F" target="_blank">
        <button
          class="lg:inline-flex hidden items-center gap-2 py-2 rounded-full  text-current justify-center mr-3 w-9 ">
          <UIcon name="i-lucide-calendar-plus-2"
            class="!size-5 contrast-0 hover:contrast-100  transition-all ease-in-out duration-200" />
        </button>
      </a>
    </div>
  </div>
</template>

<style scoped>
button {
  transition: all;
  transition-duration: .2s;
  border-style: solid;
  border-color: #00000012;
  background: #fff;
  color: #212126;
  border-width: 0px;
  box-shadow: #00000014 0 5px 15px, #191c2133 0 15px 35px -5px, #00000012 0 0 0 1px;
}
</style>