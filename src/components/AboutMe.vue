<script setup>
import Code from "./icons/Code.vue";
import Mountains from './icons/Mountains.vue';
import Compus from './icons/Compus.vue';
import MapPin from './icons/MapPin.vue';
</script>
<template>
  <section class="xl:max-w-[1024px] mx-auto mb-20">
    <h2 class="text-3xl font-bold mb-8">
      <span>About </span>
      <span class="text-myGray-500 italic">Me</span>
    </h2>
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
        <p class="leading-8 text-base text-myDark-400">
          Hi there, my name is <span class="italic font-semibold">Abdallah Bari</span>, or just Abdo if you like. I'm a
          <span class="italic font-semibold">Self-thought</span> software engineer and full-stack web developer with over
          two years of experience in the tech industry, and it all began with an HTML "Hello world!".
        </p>
      </div>

      <div class="relative h-[350px]">
        <div class="absolute w-[85%] top-[50%] left-0 translate-y-[-50%] z-10">
          <img src="../assets/images/carbonImage.png" alt="carbon">
        </div>
        <div class="rounded-full border border-red-600 w-[300px] h-[300px] absolute top-[50%] right-0 translate-y-[-50%]"></div>
      </div>
    </div>
  </section>
</template>