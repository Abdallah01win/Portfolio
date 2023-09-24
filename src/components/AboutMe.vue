<script setup>
import { RouterLink } from "vue-router";
import ArrowUp from "@/components/icons/ArrowUp.vue";
</script>
<template>
  <section class="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto py-24 border-b border-myGray-500/40">
    <div class="grid grid-cols-[.6fr,1fr]">
      <div class="border border-myDark-100 py-2 px-6 w-fit h-fit rounded-full text-lg font-semibold mb-10 capitalize">
        about me
      </div>
      <div>
        <p class="font-primary text-5xl font-semibold leading-[1.1] mb-8">
          I turn websites into powerful online assets that maximize your digital potential.
        </p>
        <div>
          <div class="leading-8 text-lg font-medium">
            My name is Abdallah Bari, I'm a seasoned web developer dedicated to crafting exceptional online experiences. With a rich background in web development spanning over 4 years, i've picked up a special combination of strategy, design, and marketting that enables me to deliver, not only, flawlessly functioning, but also esthetically pleasing websites with a lasting impression.
          </div>
        </div>

        <button
          class="bg-myDark-100 text-white text-lg mt-8 tracking-wide rounded-full py-2 px-8 mr-4 flex items-center gap-x-1">
          <span>Learn more</span>
          <span>
            <ArrowUp class="w-5" />
          </span>
        </button>
      </div>
    </div>
  </section>
</template>
