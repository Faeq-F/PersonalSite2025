<script lang="ts">
import Card from '@/components/Card.vue';
import BentoGrid from '@/components/Bento/BentoGrid.vue'
//import BentoGridItem from '@/lib/BentoGridItem.vue'
import BentoGridCard from '@/components/Bento/BentoGridCard.vue'
import Checkbox from 'primevue/checkbox';

export default {
  data() {
    return {
      PortfolioCards: false,
      Controls: false,

      DisplayArchived: true,

      features: [
        {
          name: "Quokka",
          description: "An extremely customizable, portable keystroke launcher with plugins",
          href: "/",
          image:
            "QuokkaLight.png",
          cta: "Learn more",
          class: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
        },
        {
          name: "Save your files",
          description: "We automatically save your files as you type.",
          href: "/",
          image:
            "https://images.pexels.com/photos/2762083/pexels-photo-2762083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          cta: "Learn more",
          class: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-6",
        },
        {
          name: "Full text search",
          description: "Search through all your files in one place.",
          href: "/",
          image:
            "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          cta: "Learn more",
          class: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
        },
        {
          name: "Full text search",
          description: "Search through all your files in one place.",
          href: "/",
          image:
            "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          cta: "Learn more",
          class: "lg:col-start-1 lg:col-end-2 lg:row-start-5 lg:row-end-6",
        },
        {
          name: "Multilingual",
          description: "Supports 100+ languages and counting.",
          href: "/",
          image: "https://images.pexels.com/photos/2762083/pexels-photo-2762083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          cta: "Learn more",
          class: "lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5",
        },
        {
          name: "Calendar",
          description: "Use the calendar to filter your files by date.",
          href: "/",
          image:
            "https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          cta: "Learn more",
          class: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
        },
        {
          name: "Notifications",
          description: "Get notified when someone shares a file or mentions you in a comment.",
          href: "/",
          image:
            "https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          cta: "Learn more",
          class: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-5",
        },

      ]
    }
  },
  methods: {
    delayPortfolioCards() {
      setTimeout(() => this.PortfolioCards = true, 2000);
    },
    delayControls() {
      setTimeout(() => this.Controls = true, 1000);
    },
  },
  mounted() {
    this.delayPortfolioCards()
    this.delayControls()
  },
}

</script>

<template>
  <div class="absolute">
    <BlurReveal :delay="0.2" :duration="0.75" class="p-8">
      <div class="relative top-[15vh] left-[3vw]">
        <p id="Faeq" class="font-header text-current text-9xl">Portfolio</p>
        <span id="extraUnderline"></span>
        <p class="font-subheader text-5xl text-transparent">What I've
          done</p>
        <p
          class="font-subheader text-5xl left-[5vw] absolute top-[6.5rem] w-[25vw]">
          <TextGenerateEffect words="What I have done" :delay="1000" />
        </p>
      </div>
    </BlurReveal>

    <div class="relative -bottom-[13vh] left-[4vw]" id="About" v-if="Controls">
      <Transition name="slide-fade-from-left" appear>
        <Card class="h-[45vh] w-[26vw] rounded-xl">
          <p>This page displays placeholder content</p>
          <Checkbox v-model="DisplayArchived" inputId="Archived"
            name="DisplayArchived" variant="filled" binary />
          <label for="Archived"> Display Archived </label>
        </Card>
      </Transition>
    </div>

    <div class="relative left-[31vw] -top-[72vh]" id="Bento"
      v-if="PortfolioCards">
      <Transition name="slide-fade-from-right" appear>

        <Card class="h-[85vh] w-[65vw] rounded-xl ">
          <div id="topShadow"></div>
          <ScrollPanel style="width: 100%; height: 100%" :dt="{
            bar: {
              background: '{zinc.500}'
            }
          }">
            <BentoGrid
              class="grid w-full auto-rows-[22rem] grid-cols-3 gap-4 lg:grid-rows-3">
              <BentoGridCard v-for="(feature, index) in features" :key="index"
                v-bind="feature" :class="feature.class">
                <template v-if="feature.image" #background>
                  <div
                    class="absolute right-0 top-0 size-full bg-center opacity-40 transition duration-150 ease-in-out group-hover:opacity-20"
                    :style="`background-image: url('${feature.image}')`"></div>
                </template>
              </BentoGridCard>
            </BentoGrid>
          </ScrollPanel>
          <div id="bottomShadow"></div>
        </Card>

      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
html:not(.zTheme) #Faeq::before {
  width: 80px;
  height: 20px;
  bottom: 2.7rem;
  left: 0vw;
}

html:not(.zTheme) #extraUnderline::before {
  content: "";
  background: url(/PersonalSite2025/underline.png) no-repeat;
  position: absolute;
  width: 80px;
  height: 20px;
  bottom: 2.7rem;
  left: 52px;
  background-position: right;
}

.dark #extraUnderline::before {
  filter: invert(1) brightness(1.5);
}

//--------------------------------------

#bottomShadow,
#topShadow {
  height: 20px;
  width: calc(100% - 1rem);
  position: absolute;
  top: 0;
  z-index: 99999;
  background: linear-gradient(white, transparent);
}

#bottomShadow {
  height: 50px;
  top: calc(100% - 50px);
  background: linear-gradient(transparent, white);
}

//--------------------------------------

.slide-fade-from-left-enter-active,
.slide-fade-from-right-enter-active {
  transition: all 0.7s ease-out;
}

.slide-fade-from-left-leave-active,
.slide-fade-from-right-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-from-right-enter-from,
.slide-fade-from-right-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.slide-fade-from-left-enter-from,
.slide-fade-from-left-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>

<style>
.dark #topShadow {
  background: linear-gradient(#2d2d2d, transparent);
}

.dark #bottomShadow {
  background: linear-gradient(transparent, #2d2d2d);
}
</style>
