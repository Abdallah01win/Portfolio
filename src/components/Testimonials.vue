<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import { testimonials } from "@/helpers/testemonials";
import Quote from "@/components/icons/Quote.vue";

const options = {
  type: "loop",
  perPage: 1,
  focus: 0,
  pagination: false,
};
</script>

<template>
  <section
    id="testimonials"
    class="3xs:max-w-[320px] 2xs:max-w-[360px] xs:max-w-[390px] sm:max-w-[475px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto pt-14 sm:pt-18 md:pt-24"
  >
    <div class="mb-10">
      <div
        class="border border-myDark-100 py-2 px-6 w-fit h-fit rounded-full text-base lg:text-lg font-semibold mb-6 sm:mb-8 lg:mb-10 capitalize"
      >
        testimonials
      </div>

      <p
        class="lg:w-[90%] font-primary text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-[1.35] md:leading-[1.1] tracking-wide mb-10"
      >
        Hear it from countless satisfied clients who achieved remarkable
        results.
      </p>
    </div>
    <div class="border border-myGray-500/40 rounded-3xl">
      <Splide :options="options" aria-label="testimonials">
        <SplideSlide v-for="(item, index) in testimonials" :key="index">
          <div
            class="flex flex-col items-center px-8 md:px-12 py-8 md:py-10 lg:py-16"
          >
            <div>
              <Quote
                class="w-6 md:w-8 h-6 md:h-8 text-myGray-500/40 mb-4 md:mb-9"
              />
            </div>
            <div
              class="sm:text-xl md:text-3xl font-primaryBold mb-3 md:mb-5 lg:mb-3"
            >
              "{{ item.title }}"
            </div>
            <p
              class="leading-6 md:leading-8 text-sm md:text-base lg:text-lg font-medium text-center lg:w-[80%] mx-auto mb-6"
            >
              "{{ item.text }}"
            </p>
            <div class="inline-flex items-center">
              <img
                alt="testimonial"
                :src="item.Image"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span class="flex-grow flex flex-col pl-4 gap-y-0.5">
                <span class="font-semibold">{{ item.name }}</span>
                <span class="text-sm text-myGray-400">{{ item.role }}</span>
              </span>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<style scoped>
:deep(.splide__arrow) {
  background: transparent;
  border: 1px solid #0c0c0c;
  padding: 8px;
}
</style>
