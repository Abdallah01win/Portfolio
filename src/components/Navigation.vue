<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <section class="text-white">
    <nav
      class="flex items-center justify-between py-5 border-b border-myGray-400/30 xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto">
      <RouterLink to="/" class="font-bold text-xl">Abdallah<span class="text-myGray-500 italic">Bari</span></RouterLink>

      <ul class="flex items-center gap-x-8 tracking-wide text-sm text-myGray-500">
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

      <a href="#contact"
        class="cursor-pointer border border-myGray-400/40 rounded-full px-8 py-2 tracking-wide text-sm">Contact</a>
    </nav>
  </section>
</template>
