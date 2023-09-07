<script>
import ArrowUp from "./icons/ArrowUp.vue";
import Glob from "./icons/Glob.vue";
import List from "./icons/List.vue";
import X from "./icons/X.vue"
import { ref, onMounted } from "vue";
export default {
  components: {
    ArrowUp,
    Glob,
    List,
    X,
  },
  setup() {
    const isNavOpen = ref(false);
    const toggelMenu = () => {
      isNavOpen.value = !isNavOpen.value;
    };
    return {
      isNavOpen,
      toggelMenu,
    };
  },
};
</script>
<template>
  <section class="bg-myDark-100 text-white">
    <nav class="flex items-center justify-between py-4 xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto">
      <RouterLink to="/" class="font-bold text-xl">Abdallah<span class="text-myGray-500 italic">Bari</span></RouterLink>

      <div class="flex items-center /gap-x-4">
        <button class="bg-white text-myDark-100 rounded-full py-2 px-8 mr-4 flex items-center gap-x-1 font-semibold">
          <span>Get in-touch</span>
          <span>
            <ArrowUp class="w-5 fill-white" />
          </span>
        </button>

        <div class="flex items-center gap-x-2 border border-white rounded-full py-2 px-3 cursor-pointer font-normal">
          <Glob class="w-5 fill-white" />
          <span>En</span>
        </div>

        <hr class="hr /rotate-90 h-8 w-[1px] bg-myGray-500 mx-4" />
        <div :class="['navigation', { show: isNavOpen }]">
          <ul class="flex items-center gap-x-8 nav-links">
            <RouterLink to="/about">About</RouterLink>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        <div class="grid place-content-center p-2 border border-white rounded-full cursor-pointer toggle-button"
          @click="toggelMenu()">
          <X v-if="isNavOpen" class="w-5 fill-white" />
          <List v-else class="w-5 fill-white" />
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped>
.navigation {
  width: 0;
  overflow: hidden;
  transition: width 0.3s ease;
}

.navigation.show {
  width: 230px;
}

.nav-links {
  list-style: none;
  padding: 0;
}

.toggle-button {
  cursor: pointer;
}

@keyframes x-animation {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(25deg);
  }

  100% {
    transform: rotate(45deg);
  }
}
</style>
