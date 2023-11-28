<script setup>
import { RouterLink } from "vue-router";

const address = import.meta.env.VITE_MAIL_TO_ADDRESS;
</script>
<template>
  <section class="text-white">
    <nav
      class="3xs:max-w-[320px] 2xs:max-w-[360px] xs:max-w-[390px] sm:max-w-[475px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto flex items-center justify-between py-5 border-b border-myGray-400/30"
    >
      <RouterLink to="/" class="font-bold text-xl"
        >Abdallah<span class="text-myGray-500 italic">Bari</span></RouterLink
      >

      <ul
        class="hidden md:flex items-center gap-x-8 tracking-wide text-sm text-myGray-500"
      >
        <li class="hover:text-white cursor-pointer transition-all">
          <a href="#about">About</a>
        </li>
        <li class="hover:text-white cursor-pointer transition-all">
          <a href="#services">Services</a>
        </li>
        <li class="hover:text-white cursor-pointer transition-all">
          <a href="#testimonials">Testimonials</a>
        </li>
        <li class="hover:text-white cursor-pointer transition-all">
          <a href="#projects">Projects</a>
        </li>
      </ul>

      <a
        :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${address}`"
        target="_blank"
        class="cursor-pointer border border-myGray-400/40 rounded-full px-8 py-2 tracking-wide text-sm"
        >Contact</a
      >
    </nav>
  </section>
</template>
