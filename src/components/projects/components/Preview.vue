<script setup>
import { ref, nextTick, watch } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import X from "@/components/icons/X.vue";

const emit = defineEmits(["resetProject"]);
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const isPreviewShown = ref(false);

watch(
  () => props.project.title,
  () => {
    if (props.project.title) {
      nextTick(() => (isPreviewShown.value = true));
    }
  },
  { deep: true },
);

const closePreview = () => {
  isPreviewShown.value = false;
  emit("resetProject");
};

const options = {
  type: "loop",
  perPage: 1,
  focus: 0,
  pagination: false,
  classes: {
    arrow: "splide__arrow splide__preview",
  },
};
</script>

<template>
  <div
    v-if="isPreviewShown"
    @keydown.escape="closePreview"
    class="fixed top-0 left-0 w-full h-screen z-10 bg-myGray-500/80 glass"
    tabindex="0"
  >
    <div
      class="glass p-3 bg-myWhite rounded-full w-fit absolute right-0 top-0 cursor-pointer mr-6 mt-6 hover:scale-[1.1] transition-all z-20"
      @click="closePreview"
    >
      <X class="w-5 hover:fill-black" />
    </div>

    <Splide :options="options" aria-label="projectImages">
      <SplideSlide v-for="(image, index) in project.images" :key="index">
        <div
          class="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto flex items-center h-screen"
        >
          <img
            :src="image"
            :alt="project?.title"
            class="w-full h-[60%] md:h-[65%] lg:h-full"
          />
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped>
:deep(.splide__preview) {
  background: #fafffd;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 10px;
  backdrop-filter: blur(4.8px);
  -webkit-backdrop-filter: blur(4.8px);
}

:deep(.splide__arrow--prev) {
  left: 24px;
}

:deep(.splide__arrow--next) {
  right: 24px;
}
</style>
