<script lang="ts">
import Card from '@/components/Card.vue';
import BentoGrid from '@/lib/BentoGrid.vue'
import BentoGridItem from '@/lib/BentoGridItem.vue'
import BentoGridCard from '@/lib/BentoGridCard.vue'
import Checkbox from 'primevue/checkbox';


// import '@splidejs/vue-splide/css'
// import { Splide as Core } from '@splidejs/splide'
// import { Splide, SplideSlide } from '@splidejs/vue-splide'

export default {
  // name: 'BasicExample',

  // components: {
  //   Splide,
  //   SplideSlide,
  // },

  data() {
    return {
      //     options: {
      //       rewind: true,
      //       gap: '2rem',
      //       perPage: 2,
      //     },
      //     enabled: true,
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
  }
}
</script>

<template>
  <div class="absolute">
    <div class="relative top-[15vh] left-[3vw]">
      <p id="Faeq" class="font-header text-current text-9xl">Portfolio</p>
      <span id="extraUnderline"></span>
      <p class="font-subheader text-5xl text-transparent">What I've done</p>
      <p class="font-subheader text-5xl left-[5vw] absolute top-28">What I have
        done
      </p>
    </div>
    <div class="relative -bottom-[15vh] left-[3vw]" id="About">
      <Card class="h-[50vh] w-[26vw] rounded-xl">
        <p>This page displays placeholder content</p>
        <Checkbox v-model="DisplayArchived" inputId="Archived"
          name="DisplayArchived" variant="filled" binary />
        <label for="Archived"> Display Archived </label>
      </Card>
    </div>
    <div class="relative left-[30vw] -top-[70vh]" id="Bento">
      <Card class="h-[85vh] w-[65vw] rounded-xl ">
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

      </Card>
    </div>
    <!-- <div id="HomeSocialButtonGroup" class="relative top-[15.1vh] left-[3vw]">
      <a href="mailto:faeqfaisal@hotmail.co.uk">
        <ButtonC class="justify-center mr-3 w-16 ml-1">
          <i class="pi pi-envelope text-[20px]"></i>
        </ButtonC>
      </a>
      <a href="https://linkedin.com/in/faeq">
        <ButtonC class="justify-center mr-3 w-16">
          <i class="pi pi-linkedin text-[20px]"></i>
        </ButtonC>
      </a>
      <a href="https://github.com/Faeq-F">
        <ButtonC class="justify-center mr-3 w-16">
          <i class="pi pi-github text-[20px]"></i>
        </ButtonC>
      </a>
      <a href="http://stackoverflow.com/users/13165763/faeq">
        <ButtonC class="justify-center mr-3 w-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
            width="15px" class="fill-current">

            <path
              d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
          </svg>
        </ButtonC>
      </a>
      <a href="sms:+447775901092?&body=Hello%Faeq,">
        <ButtonC class="justify-center mr-3 w-16">
          <i class="pi pi-send text-[20px]"></i>
        </ButtonC>
      </a>
    </div> -->


    <!-- <div
      class="z-[999] !pl-2 mb-20 transition-all duration-500 min-h-[50vh] absolute bottom-8 lg:bottom-10 inset-x-8 lg:inset-x-10 flex items-center justify-between pl-5 pr-5 lg:pr-2 py-2 rounded-3xl dark:bg-white/15 bg-black/10 backdrop-blur-[6px] border dark:border-white/15 border-black/15 dark:shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] shadow-[0px_10px_10px_-8px_rgba(237,237,232,0.02),0px_2px_2px_-1.5px_rgba(237,237,232,0.02),0px_1px_1px_-0.5px_rgba(237,237,232,0.02)]">
      <Splide aria-labelledby="My Projects" v-if="enabled" :options="options"
        class="min-h-[40vh]">
        <SplideSlide>
          <div class="CardContainer">
            <Card data-image="Quokka" header="Quokka"
              content="An extremely customizable keystroke launcher for Windows" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="CardContainer">
            <Card
              data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
              header="Beaches"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="CardContainer">
            <Card data-image="Quokka" header="Quokka"
              content="An extremely customizable keystroke launcher for Windows" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="CardContainer">
            <Card
              data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
              header="Beaches"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="CardContainer">
            <Card data-image="Quokka" header="Quokka"
              content="An extremely customizable keystroke launcher for Windows" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="CardContainer">
            <Card
              data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
              header="Beaches"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
          </div>
        </SplideSlide>
      </Splide>
    </div> -->
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

// .splide {
//   width: 100%;
// }

// .splide__slide {
//   width: fit-content !important;
// }

// .splide__slide:nth-of-type(1) {
//   margin-left: 2rem;
// }

// .splide__list {
//   height: 45vh;
// }

// .CardContainer {
//   // padding: 0;
//   // display: flex;
//   // flex-wrap: nowrap;
//   // justify-content: center;
//   // flex-direction: row;
//   // place-items: center;
//   // place-self: flex-start;
//   padding: 0;
//   display: flex;
//   flex-wrap: nowrap;
//   width: fit-content;
//   height: fit-content;
//   position: relative;
//   top: 50%;
//   -ms-transform: translateY(-50%);
//   transform: translateY(-50%);
// }

// $hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
// $returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

// .CardContainer .card-wrap {
//   margin: 10px;
//   transform: perspective(800px);
//   transform-style: preserve-3d;
//   cursor: pointer;
//   // background-color: #fff;

//   &:hover {
//     .card-info {
//       transform: translateY(0);
//     }

//     .card-info p {
//       opacity: 1;
//     }

//     .card-info,
//     .card-info p {
//       transition: 0.6s $hoverEasing;
//     }

//     .card-info:after {
//       transition: 5s $hoverEasing;
//       opacity: 1;
//       transform: translateY(0);
//     }

//     .card-bg {
//       transition:
//         0.6s $hoverEasing,
//         opacity 5s $hoverEasing;
//       opacity: 0.8;
//     }

//     .card {
//       transition:
//         0.6s $hoverEasing,
//         box-shadow 2s $hoverEasing;
//       box-shadow:
//         rgba(white, 0.2) 0 0 40px 5px,
//         rgba(white, 1) 0 0 0 1px,
//         rgba(black, 0.66) 0 30px 60px 0,
//         inset #333 0 0 0 5px,
//         inset white 0 0 0 6px;
//     }
//   }
// }

// .CardContainer .card {
//   position: relative;
//   flex: 0 0 240px;
//   width: 40vw;
//   height: 35vh;
//   background-color: #333;
//   overflow: hidden;
//   border-radius: 10px;
//   box-shadow:
//     rgba(black, 0.66) 0 30px 60px 0,
//     inset #333 0 0 0 5px,
//     inset rgba(white, 0.5) 0 0 0 6px;
//   transition: 1s $returnEasing;
// }

// .CardContainer .card-bg {
//   opacity: 0.5;
//   position: absolute;
//   top: 0px;
//   left: -20%;
//   width: 140%;
//   height: 120%;
//   padding: 20px;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   transition:
//     1s $returnEasing,
//     opacity 5s 1s $returnEasing;
//   pointer-events: none;
// }

// .CardContainer .card-info {
//   padding: 20px;
//   position: absolute;
//   bottom: 0;
//   color: #fff;
//   transform: translateY(20%);
//   transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

//   p {
//     opacity: 0;
//     text-shadow: rgba(black, 1) 0 2px 3px;
//     transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
//   }

//   * {
//     position: relative;
//     z-index: 1;
//   }

//   &:after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 0;
//     width: 200%;
//     height: 100%;
//     background-image: linear-gradient(to bottom, transparent 0%, rgba(#000, 0.6) 100%);
//     background-blend-mode: overlay;
//     opacity: 0;
//     transform: translateY(100%);
//     transition: 5s 1s $returnEasing;
//   }
// }

// .CardContainer .card-info h1 {
//   font-size: 36px;
//   font-weight: 700;
//   text-shadow: rgba(black, 0.5) 0 10px 10px;
// }
</style>
