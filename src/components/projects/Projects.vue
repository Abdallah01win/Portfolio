<script setup>
import { ref } from "vue";
import { projects } from "@/helpers/projects.js"
import ArrowUp from "@/components/icons/ArrowUp.vue"
import Preview from "./components/Preview.vue"

const showDiv = ref([])
const project = ref({})

for (let i = 0; i < projects.length; i++) {
  showDiv.value.push(false);
}

const showPreview = (index) => {
  document.body.style.overflow = 'hidden';
  project.value = projects[index]
}

const resetProject = () => {
  document.body.style.overflow = '';
  project.value = {}
}
</script>

<template>
  <section id="projects"
    class="sm:max-w-[475px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto relative py-24 border-b border-myGray-500/40">
    <div class="mb-10">
      <div class="border border-myDark-100 py-2 px-6 w-fit rounded-full text-lg font-semibold mb-10">
        My work
      </div>

      <p class="lg:w-[90%] font-primary md:text-4xl xl:text-5xl font-bold leading-[1.1] tracking-wide mb-10">
        Check out my projects, custom-built to reflect each client's distinct needs.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
      <div v-for="(item, index) in projects" :key="item.title" class="rounded-3xl h-80 lg:h-72 xl:h-80 2xl:h-96 overflow-hidden bg-cover"
        :style="{ 'background-image': `url(${item.images[0]})` }" @mouseenter="showDiv[index] = true"
        @mouseleave="showDiv[index] = false"> 

        <div v-show="showDiv[index]" class="h-full bg-myGray-500/30 flex items-center justify-center transition-opacity">
          <div class="glass rounded-full p-8 hover:scale-[1.1] transition-all cursor-pointer" @click="showPreview(index)">
            <ArrowUp class="w-14 text-myWhite" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <Preview :project="project" @resetProject="resetProject" />
</template>
