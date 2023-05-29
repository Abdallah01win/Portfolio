<script setup>
import ArrowUp from "./icons/ArrowUp.vue";
import Glob from "./icons/Glob.vue";
import List from "./icons/List.vue";
</script>
<template>
  <nav class="flex items-center justify-between py-4 xl:max-w-[1024px] mx-auto">
    <div class="font-bold text-lg">Abdallah</div>
    <!-- <ul class="flex items-center gap-x-8">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul> -->
    <div class="flex items-center gap-x-4">
      <button
        class="bg-myDark-100 text-myWhite rounded-full py-2 px-8 flex items-center gap-x-1 font-normal"
      >
        <span>Get in-touch</span>
        <span>
          <ArrowUp class="w-5" />
        </span>
      </button>

      <div
        class="flex items-center gap-x-2 border border-myDark-100 rounded-full py-2 px-3 cursor-pointer font-normal"
      >
        <Glob class="w-5" />
        <span>En</span>
      </div>

      <div
        class="grid place-content-center p-3 border border-myDark-100 rounded-full cursor-pointer"
      >
        <List class="w-5" />
      </div>
    </div>
  </nav>
</template>
