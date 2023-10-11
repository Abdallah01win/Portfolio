<script setup>
import { ref } from "vue";
import ArrowUp from "@/components/icons/ArrowUp.vue";
import X from "@/components/icons/X.vue";
import GithubLogo from "@/components/icons/GithubLogo.vue";

const showDiv = ref([])
const items = [
  {
    title: "Passworld",
    tags: ['Vue', 'Tailwind', 'Vite'],
    description: "",
    image: "src/assets/images/projects/alasturu.png",
    repo: "https://github.com/Abdallah01win/generated-passwords/tree/mine",
    preview: "https://passworld.pages.dev/",

  },
  {
    title: "Voyager",
    tags: ['Vue', 'Tailwind', 'Vite'],
    description: "",
    image: "src/assets/images/projects/doluma.png",
    repo: "",
    preview: ""
  },
  {
    title: "News Magazine Website",
    tags: ['Vue', 'Tailwind', 'Vite'],
    description: "",
    image: "src/assets/images/projects/optiRik.png",
    repo: "",
    preview: ""
  },
  {
    title: "News Magazine Website",
    tags: ['Vue', 'Tailwind', 'Vite'],
    description: "",
    image: "src/assets/images/projects/buildinz.png",
    repo: "",
    preview: ""
  },
];

for (let i = 0; i < items.length; i++) {
  showDiv.value.push(false);
}
</script>
<template>
  <section id="projects" class="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto py-24 border-b border-myGray-500/40">
    <div class="mb-10">
      <div class="border border-myDark-100 py-2 px-6 w-fit rounded-full text-lg font-semibold mb-10">
        My work
      </div>

      <p class="w-[90%] font-primary text-5xl font-bold leading-[1.1] tracking-wide mb-10">
        Check out my projects, custom-built to reflect each client's distinct needs.
      </p>
    </div>

    <div class="grid grid-cols-2 gap-12">
      <div v-for="item in items" :key="item.title" class="rounded-3xl h-80 2xl:h-96 overflow-hidden cursor-pointer">
        <img :src="item.image" :alt="item.title" class="w-full h-full object-cover rounded-3xl">
      </div>
    </div>
  </section>
</template>