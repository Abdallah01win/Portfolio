<script setup>
import ArrowUp from './icons/ArrowUp.vue';
</script>
<template>
  <div class="bg-myBlue-100">
    <nav
      class="flex items-center justify-between py-3 xl:max-w-[1024px] mx-auto"
    >
      <div>Abdallah</div>
      <ul class="flex items-center gap-x-8">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div>
        <Button class="bg-transparent border border-myWhite py-1 px-3 flex items-center gap-x-1">
            <span>Get in-touch</span>
            <span>
                <ArrowUp class="w-5"/>
            </span>
        </Button>
      </div>
    </nav>
  </div>
</template>
