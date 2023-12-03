<script setup>
import { RouterLink } from "vue-router";
import ArrowUp from "@/components/icons/ArrowUp.vue";
</script>
<template>
  <section
    id="about"
    class="3xs:max-w-[320px] 2xs:max-w-[360px] xs:max-w-[390px] sm:max-w-[475px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto py-14 sm:py-18 sm:py-18 md:py-24 border-b border-myGray-500/40"
  >
    <div class="grid md:grid-cols-[.5fr,1fr] lg:grid-cols-[.6fr,1fr]">
      <div
        class="border border-myDark-100 py-2 px-6 w-fit h-fit rounded-full text-base lg:text-lg font-semibold mb-6 sm:mb-8 lg:mb-10 capitalize"
      >
        about me
      </div>
      <div>
        <p
          class="font-primary text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.35] md:leading-[1.1] tracking-wide mb-8"
        >
          I turn websites into powerful online assets that maximize your digital
          potential.
        </p>
        <div>
          <div class="leading-7 sm:leading-8 /text-base sm:text-lg font-medium">
            My name is Abdallah Bari, I'm a seasoned web developer dedicated to
            crafting exceptional online experiences. With a rich background in
            web development spanning over 5 years, i've picked up a special
            combination of strategy, design, and marketing that enables me to
            deliver, not only, flawlessly functioning, but also esthetically
            pleasing websites with a lasting impression.
          </div>
        </div>

        <button
          class="bg-myDark-100 text-white text-lg mt-8 tracking-wide rounded-full py-2 px-8 mr-4 flex items-center gap-x-1"
        >
          <span>Learn more</span>
          <span>
            <ArrowUp class="w-5" />
          </span>
        </button>
      </div>
    </div>
  </section>
</template>
