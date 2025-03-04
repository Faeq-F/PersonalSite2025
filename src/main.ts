import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { VuePrlx } from 'vue3-prlx'
import VueSplide from '@splidejs/vue-splide'
import { MotionPlugin } from '@vueuse/motion'
import AnimateOnScroll from 'primevue/animateonscroll'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'primevue',
      darkModeSelector: '.dark',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
    },
  },
})

app.directive('animateonscroll', AnimateOnScroll)

app.use(VuePrlx)
app.use(VueSplide)
app.use(MotionPlugin)

app.use(createPinia())
app.use(router)

app.mount('#app')
