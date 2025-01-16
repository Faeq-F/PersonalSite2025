<script>
import ToggleSwitch from 'primevue/toggleswitch'
import { useBgAnimStore } from '@/stores/store'

export default {
  data() {
    return {
      bgAnim: true,
    }
  },
  watch: {
    bgAnim(newBgAnim) {
      if (newBgAnim) {
        document.getElementById('fogWrap').style.display = 'block'
      } else {
        document.getElementById('fogWrap').style.display = 'none'
      }
    },
  },
  methods: {
    toggleSettings(event) {
      this.$refs.settingsPopover.toggle(event)
    },
  },
  // mounted() {
  //   if (document.getElementById('fogWrap').style.display == 'block') {
  //     this.bgAnim = true
  //   } else {
  //     this.bgAnim = false
  //   }
  // },
}
</script>

<template>
  <ButtonC class="w-[45px] h-[40px] rounded-l-none" @click="toggleSettings">
    <i class="pi pi-spin pi-cog text-[20px]" v-if="bgAnim"></i>
    <i class="pi pi-cog text-[20px]" v-else></i>
  </ButtonC>
  <Popover
    ref="settingsPopover"
    class="dark:bg-white/15 bg-black/10 backdrop-blur-[6px] border dark:border-white/15 border-black/15 dark:shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] shadow-[0px_10px_10px_-8px_rgba(237,237,232,0.02),0px_2px_2px_-1.5px_rgba(237,237,232,0.02),0px_1px_1px_-0.5px_rgba(237,237,232,0.02)]"
  >
    <div class="flex flex-col gap-4">
      <div>
        <div class="flex items-center gap-2">
          <ToggleSwitch v-model="bgAnim" />
          <label for="bgAnim" class="font-text">Background Animation</label>
        </div>
      </div>
      <!-- <div>
      <span class="font-medium block mb-2">Invite Member</span>
      <InputGroup>
        <InputText disabled />
        <Button label="Invite" icon="pi pi-users"></Button>
      </InputGroup>
    </div>
    <div>
      <span class="font-medium block mb-2">Team Members</span>
      <ul class="list-none p-0 m-0 flex flex-col gap-4"></ul>
    </div> -->
    </div>
  </Popover>
</template>
