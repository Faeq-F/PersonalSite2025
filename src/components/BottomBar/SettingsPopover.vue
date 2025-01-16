<script>
import ToggleSwitch from 'primevue/toggleswitch'
import { useBgAnimStore } from '@/stores/store'

// const store = useBgAnimStore()

export default {
  data() {
    return {
      bgAnim: true,
    }
  },
  watch: {
    bgAnim(newBgAnim) {
      // store.flip()
      if (newBgAnim) {
        document.getElementById('fogWrap').style.display = 'block'
      } else {
        document.getElementById('fogWrap').style.display = 'none'
      }
    },
  },
  mounted() {
    // this.bgAnim = store.count
    if (document.getElementById('fogWrap').style.display == 'block') {
      this.bgAnim = true
    } else {
      this.bgAnim = false
    }
  },
}
</script>

<template>
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
</template>
