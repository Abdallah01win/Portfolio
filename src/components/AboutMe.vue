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
  <section class="xl:max-w-[1024px] mx-auto py-24 border-b border-myGray-500/40">
    <div class="grid grid-cols-[.6fr,1fr] ">
      <div class="border border-myDark-100 py-2 px-6 w-fit h-fit rounded-full text-lg font-semibold mb-10 capitalize">about me</div>
      <div>
        <p class="font-primary text-5xl font-medium leading-[56px] mb-8">We have put together a special combination of
          strategy, marketting, design and digital experties.</p>
        <div>
          <div class="leading-8 text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            soluta corrupti non labore corporis dolorum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis, debitis? Lorem ipsum dolor sit amet.
          </div>
        </div>

        <button
          class="bg-myDark-100 text-white text-lg mt-8 tracking-wide rounded-full py-2 px-8 mr-4 flex items-center gap-x-1 ">
          <span>Learn more</span>
          <span>
            <ArrowUp class="w-5" />
          </span>
        </button>
      </div>
    </div>
  </section>

  <!-- <section class="xl:max-w-[1024px] mx-auto my-24">
    <div class="grid grid-cols-[0.7fr,1fr] gap-x-10">
      <div class="flex items-center">
        <div>
          <h2 class="text-3xl  mb-3 font-medium leading-[1.2]">Passionate Developer, Enginnere, and often, <br> a Dreamer.</h2>
          <p class="text-newGray-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat iure consequuntur maiores, placeat maxime,
            suscipit quam ratione itaque, quae natus rerum enim possimus. Mollitia, quaerat.</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div>
          <div class="grid place-content-center p-4 rounded-lg bg-newGray-100 w-fit mb-3">
            <Mountains class="w-5" />
          </div>
          <h3 class="text-xl mb-2 font-medium capitalize">client centric approach</h3>
          <p class="text-newGray-200 text-xs leading-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptatibus.</p>
        </div>
        <div>
          <div class="grid place-content-center p-4 rounded-lg bg-newGray-100 w-fit mb-3">
            <Mountains class="w-5" />
          </div>
          <h3 class="text-xl mb-2 font-medium capitalize">client centric approach</h3>
          <p class="text-newGray-200 text-xs leading-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptatibus.</p>
        </div>
        <div>
          <div class="grid place-content-center p-4 rounded-lg bg-newGray-100 w-fit mb-3">
            <Mountains class="w-5" />
          </div>
          <h3 class="text-xl mb-2 font-medium capitalize">client centric approach</h3>
          <p class="text-newGray-200 text-xs leading-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptatibus.</p>
        </div>
        <div>
          <div class="grid place-content-center p-4 rounded-lg bg-newGray-100 w-fit mb-3">
            <Mountains class="w-5" />
          </div>
          <h3 class="text-xl mb-2 font-medium capitalize">client centric approach</h3>
          <p class="text-newGray-200 text-xs leading-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptatibus.</p>
        </div>
        
      </div>
    </div>
  </section> -->
</template>