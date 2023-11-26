<script setup>
import ArrowUp from "@/components/icons/ArrowUp.vue";
import { onMounted } from 'vue';
import { circler_text } from '@/helpers/functions.js'

const address = import.meta.env.VITE_MAIL_TO_ADDRESS

onMounted(() => {
  circler_text('contact-circle-text', "Get in touch and • Let’s get started! ")
})
</script>

<template>
  <section id="contact"
    class="3xs:max-w-[320px] 2xs:max-w-[360px] xs:max-w-[390px] sm:max-w-[475px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto pt-14 sm:pt-18 md:pt-24 mb-24 md:mb-28 relative">
    <div>
      <div
        class="border border-myDark-100 py-2 px-6 w-fit rounded-full text-base lg:text-lg font-semibold mb-6 sm:mb-8 lg:mb-10">
        Contact
      </div>

      <p
        class="lg:w-[90%] font-primary text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-[1.35] md:leading-[1.1] tracking-wide pb-6 md:pb-36 lg:pb-20">
        Let's partner-up and witness the transformation of your website into a powerful asset for success.
      </p>
    </div>
    <div class="md:absolute bottom-0 right-0 w-fit">
      <a :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${address}`" target="_blank"
        class="cursor-pointer rounded-full relative grid place-content-center p-16 glass hover:scale-[1.1] transition-all">
        <ArrowUp class="w-12 fill-myDark-100" />
        <span class="contact-circle-text font-semibold text-myDark-100"></span>
      </a>
    </div>
  </section>
</template>
