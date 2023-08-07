<script>
import ArrowUp from "./icons/ArrowUp.vue";
import { ref } from "vue";
import X from "./icons/X.vue";
import GithubLogo from "./icons/GithubLogo.vue";
export default {
  components: {
    ArrowUp,
    X,
    GithubLogo,
  },
  setup() {
    const showDiv = ref([])
    const items = [
      {
        title: "Passworld",
        tags: ['Vue', 'Tailwind', 'Vite'],
        discription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem natus dolore repellendus quasi aliquid, molestias recusandae tempora odio excepturi, aut laboriosam distinctio nulla fuga.",
        image: "src/assets/images/passworld.png",
        repo: "https://github.com/Abdallah01win/generated-passwords/tree/mine",
        preview: "https://passworld.pages.dev/",

      },
      {
        title: "News Magazine Website",
        tags: ['Vue', 'Tailwind', 'Vite'],
        discription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem natus dolore repellendus quasi aliquid, molestias recusandae tempora odio excepturi, aut laboriosam distinctio nulla fuga.",
        image: "src/assets/images/passworld.png",
        repo: "",
        preview: ""
      },
      {
        title: "News Magazine Website",
        tags: ['Vue', 'Tailwind', 'Vite'],
        discription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem natus dolore repellendus quasi aliquid, molestias recusandae tempora odio excepturi, aut laboriosam distinctio nulla fuga.",
        image: "src/assets/images/passworld.png",
        repo: "",
        preview: ""
      },
      {
        title: "News Magazine Website",
        tags: ['Vue', 'Tailwind', 'Vite'],
        discription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem natus dolore repellendus quasi aliquid, molestias recusandae tempora odio excepturi, aut laboriosam distinctio nulla fuga.",
        image: "src/assets/images/passworld.png",
        repo: "",
        preview: ""
      },
    ];
    for (let i = 0; i < items.length; i++) {
      showDiv.value.push(false);
    }
    return {
      showDiv,
      items,
    };
  },
};
</script>
<template>
  <section class="xl:max-w-[1024px] mx-auto mb-24">
    <h2 class="text-3xl font-bold mb-8">
      <span>My </span>
      <span class="text-myGray-500 italic">Projects</span>
    </h2>

    <div class="grid grid-cols-2 gap-8">
      <div v-for="(item, index) in items" :key="index">
        <div class="bg-myGray-600 rounded-3xl h-72 /mb-3 relative border border-myGray-500/80 overflow-hidden">

          <!-- Exported image at 1300 * 720 -->
          <div class="rounded-full bg-myWhite w-fit p-2.5 absolute bottom-0 right-0 mr-5 mb-4 cursor-pointer z-20"
            @click="showDiv[index] = !showDiv[index]">
            <X :class="!showDiv[index] ? 'rotate-45' : ''" class="transition-all" />
          </div>
          <div v-if="showDiv[index]" class=" rounded-3xl py-4 px-5 h-full relative ">
            <div class="flex items-center justify-between mb-3">
              <div class="text-base">{{ item.title }}</div>
              <div class="flex items-center gap-x-3">
                <a :href="item.repo" target="_blank" class="p-2 bg-myWhite rounded-full w-fit">
                  <GithubLogo class="w-5 fill-myDark-100" />
                </a>
                <a :href="item.preview" target="_blank" class="p-2 bg-myWhite rounded-full w-fit">
                  <ArrowUp class="w-5 fill-myDark-100" />
                </a>
              </div>
            </div>
            <div>
              <p class="leading-6 font-normal">{{ item.discription }}</p>
            </div>
            <div class="flex items-center gap-x-3 mt-auto rounded-full ml-4 mb-4 w-fit bottom-0 left-0 absolute">
              <div class="bg-white rounded-full text-xs px-4 py-1.5" v-for="tag in item.tags" :key="tag">{{ tag }}</div>
            </div>
          </div>
          <img :src="item.image" :alt="item.title" class="h-full w-full">
        </div>
      </div>
    </div>

    <!-- <div class="flex items-center justify-center mt-4">
      <button
        class="rounded-full py-3 px-8 flex items-center justify-center gap-x-3 border border-myDark-100 //text-sm"
      >
        <span>See More Projects</span>
        <ArrowUp class="w-5" />
      </button>
    </div> -->
  </section>
</template>
