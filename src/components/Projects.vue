<script>
import ArrowUp from "@/components/icons/ArrowUp.vue";
import { ref } from "vue";
import X from "@/components/icons/X.vue";
import GithubLogo from "@/components/icons/GithubLogo.vue";
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
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem natus dolore repellendus quasi aliquid, molestias recusandae tempora odio excepturi, aut laboriosam distinctio nulla fuga.",
        image: "src/assets/images/passworld.png",
        repo: "https://github.com/Abdallah01win/generated-passwords/tree/mine",
        preview: "https://passworld.pages.dev/",

      },
      {
        title: "Voyager",
        tags: ['Vue', 'Tailwind', 'Vite'],
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem natus dolore repellendus quasi aliquid, molestias recusandae tempora odio excepturi, aut laboriosam distinctio nulla fuga.",
        image: "src/assets/images/passworld.png",
        repo: "",
        preview: ""
      },
      {
        title: "News Magazine Website",
        tags: ['Vue', 'Tailwind', 'Vite'],
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem natus dolore repellendus quasi aliquid, molestias recusandae tempora odio excepturi, aut laboriosam distinctio nulla fuga.",
        image: "src/assets/images/passworld.png",
        repo: "",
        preview: ""
      },
      {
        title: "News Magazine Website",
        tags: ['Vue', 'Tailwind', 'Vite'],
        description:
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
  <section class="xl:max-w-[1024px] mx-auto py-24 border-b border-myGray-500/40">

    <div class="border border-myDark-100 py-2 px-6 w-fit h-fit rounded-full text-lg font-semibold mb-10 capitalize">my projects</div>
    <div class="grid grid-cols-2 gap-8">
      <div v-for="(item, index) in items" :key="index">
        <div class="bg-myGray-600 rounded-3xl h-72 relative border border-myGray-500/40 overflow-hidden">

          <!-- Exported image at 1300 * 720 -->
          <div
            class="rounded-full bg-myWhite w-fit p-2.5 absolute bottom-0 right-0 mr-5 mb-4 cursor-pointer z-20 border border-myGray-500/80"
            @click="showDiv[index] = !showDiv[index]">
            <X :class="!showDiv[index] ? 'rotate-45' : ''" class="transition-all" />
          </div>
          <Transition name="fade">
            <div v-show="showDiv[index]" class=" rounded-3xl py-4 px-5 h-full absolute top-0 left-0 w-full bg-white">
              <div class="flex items-center justify-between mb-3">
                <div class="text-base font-bold">{{ item.title }}</div>
                <div class="flex items-center gap-x-3">
                  <a :href="item.repo" target="_blank"
                    class="p-2 bg-myWhite rounded-full border border-myGray-500/80 w-fit">
                    <GithubLogo class="w-5 fill-myDark-100" />
                  </a>
                  <a :href="item.preview" target="_blank"
                    class="p-2 bg-myWhite rounded-full border border-myGray-500/80 w-fit">
                    <ArrowUp class="w-5 fill-myDark-100" />
                  </a>
                </div>
              </div>
              <div>
                <p class="leading-6 text-sm text-myDark-400">{{ item.description }}</p>
              </div>
              <div class="flex items-center gap-x-3 mt-auto rounded-full ml-4 mb-4 w-fit bottom-0 left-0 absolute">
                <div class="bg-myWhite rounded-full border border-myGray-500/80 text-xs px-4 py-1.5"
                  v-for="tag in item.tags" :key="tag">{{ tag }}</div>
              </div>
            </div>
          </Transition>
          <img :src="item.image" :alt="item.title" class="h-full w-full">
        </div>
      </div>
    </div>

    <!-- <div class="flex items-center justify-center mt-4">
      <button class="rounded-full py-3 px-8 flex items-center justify-center gap-x-3 border border-myDark-100 //text-sm">
        <span>See More Projects</span>
        <ArrowUp class="w-5" />
      </button>
    </div> -->
  </section>
</template>


<style scoped>
.fade-enter-active {
  transition: opacity 0.3s ease;
}

.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>