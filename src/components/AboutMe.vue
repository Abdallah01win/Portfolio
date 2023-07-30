<script setup>

import { RouterLink } from 'vue-router';
import ArrowUp from './icons/ArrowUp.vue';
import Code from "./icons/Code.vue";
import Mountains from './icons/Mountains.vue';
import Compus from './icons/Compus.vue';
import MapPin from './icons/MapPin.vue';
import Js from "./icons/Js.vue";
import VueLogo from "./icons/VueLogo.vue";
import LaravelLogo from "./icons/LaravelLogo.vue";
import PythonLogo from "./icons/PythonLogo.vue";
</script>
<template>
  <section class="xl:max-w-[1024px] mx-auto mb-24">
    <!-- <h2 class="text-3xl font-bold mb-8">
      <span>About </span>
      <span class="text-myGray-500 italic">Me</span>
    </h2> -->
    <!-- <div class="grid grid-cols-3 gap-y-8">
      <div class="rounded-3xl border border-myDark-100 px-8 py-6 col-span-2">
        <div class="flex items-center gap-x-4 mb-2">
          <div class="p-2 border border-myDark-100 rounded-full w-fit">
            <Compus class="w-6 fill-myDark-100" />
          </div>
          <hr class="w-full" />
        </div>
        <p class="leading-8 font-normal text-base text-myDark-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias
          exercitationem. Odit qui deserunt error ab ea aspernatur eligendi
          voluptas alias, modi et nobis. Est sed amet dolore earum sequi vel,
          aperiam libero quaerat sunt iure sapiente praesentium inventore
          dolorem numquam quisquam quia quod, iusto rerum reiciendis corrupti
          debitis ut.
        </p>
      </div>
      <div
        class="rounded-3xl border border-myDark-100 p-8 py-6 col-span-2 col-start-2"
      >
        <div class="flex items-center gap-x-4 mb-2">
          <div class="p-2 border border-myDark-100 rounded-full w-fit">
            <Code class="w-6 fill-myDark-100" />
          </div>
          <hr class="w-full" />
        </div>
        <p class="leading-8 font-normal text-base text-myDark-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias
          exercitationem. Odit qui deserunt error ab ea aspernatur eligendi
          voluptas alias, modi et nobis. Est sed amet dolore earum sequi vel,
          aperiam libero quaerat sunt iure sapiente praesentium inventore
          dolorem numquam quisquam quia quod, iusto rerum reiciendis corrupti
          debitis ut.
        </p>
      </div>
      <div
        class="/bg-myDark-100 rounded-3xl border border-myDark-100 /text-myWhite p-8 /w-[55%] col-span-2"
      >
        <div class="flex items-center gap-x-4 mb-2">
          <div class="p-2 border border-myDark-100 rounded-full w-fit">
            <MapPin class="w-6 fill-myDark-100" />
          </div>
          <hr class="w-full" />
        </div>
        <p class="leading-8 font-normal text-base text-myDark-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias
          exercitationem. Odit qui deserunt error ab ea aspernatur eligendi
          voluptas alias, modi et nobis. Est sed amet dolore earum sequi vel,
          aperiam libero quaerat sunt iure sapiente praesentium inventore
          dolorem numquam quisquam quia quod, iusto rerum reiciendis corrupti
          debitis ut.
        </p>
      </div>
      <div
        class="/bg-myDark-100 rounded-3xl border border-myDark-100 /text-myWhite p-8 /w-[55%] col-span-2 col-start-2"
      >
        <div class="flex items-center gap-x-4 mb-2">
          <div class="p-2 border border-myDark-100 rounded-full w-fit">
            <Mountains class="w-6 fill-myDark-100" />
          </div>
          <hr class="w-full" />
        </div>
        <p class="leading-8 font-normal text-base text-myDark-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias
          exercitationem. Odit qui deserunt error ab ea aspernatur eligendi
          voluptas alias, modi et nobis. Est sed amet dolore earum sequi vel,
          aperiam libero quaerat sunt iure sapiente praesentium inventore
          dolorem numquam quisquam quia quod, iusto rerum reiciendis corrupti
          debitis ut.
        </p>
      </div>
    </div> -->
    <div class="grid grid-cols-2 gap-x-8">
      <div>
        <h2 class="text-3xl font-bold mb-8">
          <span>About </span>
          <span class="text-myGray-500 italic">Me</span>
        </h2>
        <p class="leading-8 text-base text-myDark-400 mb-2">
          Hi there, my name is <span class="italic font-semibold">Abdallah Bari</span>, or just Abdo if you like. I'm a
          <span class="italic font-semibold">Self-thought</span> software engineer and full-stack web developer with an
          undying passion for learning and <span class="italic font-semibold">innovation</span>.
        </p>
        <p class="leading-8 text-base text-myDark-400 mb-6">
          My <span class="italic font-semibold">passion</span> for development fuels my desire to continuously hone my
          skill set, learn new technologies, and strive
          to be <span class="italic font-semibold">the best developer possible</span>.
          And throughout my career, I aimed to do so by embracing every obstacle as an <span
            class="italic font-semibold">opportunity</span> to evolve.
        </p>
        <RouterLink to="about" class="w-fit rounded-full py-2 px-10 bg-myDark-100 text-myWhite flex items-center gap-x-2">
          <span>Learn More</span>
          <span>
            <ArrowUp class="w-5" />
          </span>
        </RouterLink>

      </div>

      <div class="relative  flex items-center">
        <div class="h-[320px]">
          <div class="absolute w-[83%] top-[50%] left-0 translate-y-[-50%] z-10">
            <img src="../assets/images/carbonImage.png" alt="carbon">
          </div>
          <div
            class="rounded-full border border-myGray-500 w-[320px] h-[320px] absolute top-[50%] right-0 translate-y-[-50%] rotate-[45deg]">

            <!-- 2nd Cyrcle -->
            <div
              class="rounded-full border border-myGray-500 w-[220px] h-[220px] absolute top-[50%] right-[50%] translate-y-[-50%] translate-x-[50%] rotate-[-45deg] ">
              <div
                class="rounded-full bg-myGray-600 w-fit p-2 position absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] grid place-content-center">
                <Js class="w-6" />
              </div>
              <div
                class="rounded-full bg-myGray-600 w-fit p-2 position absolute top-[50%] right-0 translate-x-[50%] translate-y-[-50%]">
                <img src="src/assets/svg/git-icon.svg" alt="git" class="w-6">
              </div>
              <div
                class="rounded-full bg-myGray-600 w-fit p-2 position absolute bottom-0 right-[50%] translate-x-[50%] translate-y-[50%]">
                <img src="src/assets/svg/c-logo.svg" alt="" class="w-6">
              </div>
            </div>
            <!-- End 2nd Cyrcle -->

            <!-- 1st Cyrcle Icons -->
            <div
              class="rounded-full bg-myGray-600 w-fit p-2 position absolute top-[50%] left-0 translate-x-[-50%] translate-y-50%] rotate-[-45deg]">
              <LaravelLogo class="w-6" />
            </div>
            <div
              class="rounded-full bg-myGray-600 w-fit p-2 position absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] grid place-content-center rotate-[-45deg]">
              <VueLogo class="w-6" />
            </div>
            <div
              class="rounded-full bg-myGray-600 w-fit p-2 position absolute top-[50%] right-0 translate-x-[50%] translate-y-[-50%] rotate-[-45deg]">
              <img src="src/assets/svg/php-logo.svg" alt="" class="w-7">
            </div>
            <div
              class="rounded-full bg-myGray-600 w-fit p-2 position absolute bottom-0 right-[50%] translate-x-[50%] translate-y-[50%] rotate-[-45deg]">
              <PythonLogo class="w-6" />
            </div>
            <!-- End 1st Cyrcle Icons -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>