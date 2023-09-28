<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import Quote from "@/components/icons/Quote.vue";

const options = {
  type: "loop",
  perPage: 1,
  focus: 0,
  pagination: false,
};

const testimonials = [
  {
    name: "Hicham Abazine",
    title: "Abdallah was a game changer",
    role: "Backend & Mobile Developer",
    Image: "../src/assets/images/avatars/HichamAbazine.jpeg",
    links: {
      linkedin: "https://www.linkedin.com/in/hichamabazine/",
      github: "https://github.com/Abdallah01win",
    },
    text: "For so long, I have struggled with establishing a strong online presence. Abdallah provided expertise and insights that I, even with my technical background, found invaluable. He was able to understand and easily communicate my values and vision in a way that resonated with my target audience. It's always a pleasure to work with him.",
  },
  // {
  //   name: "Hicham Terben",
  //   title: "Graphic Designer",
  //   role: "Graphic Designer",
  //   Image: "https://dummyimage.com/106x106",
  //   links: {
  //     twitter: "https://twitter.com/hixham_t?s=20",
  //     linkedin: "https://www.linkedin.com/in/hicham-terben",
  //   },
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus?",
  // },
];
</script>

<template>
  <section class="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto py-24" id="testimonials">
    <div class="mb-10">
      <div class="border border-myDark-100 py-2 px-6 w-fit h-fit rounded-full text-lg font-semibold mb-10 capitalize">
        testimonials
      </div>

      <p class="w-[90%] font-primary text-5xl font-bold leading-[1.1] mb-10">
        Hear it from countless satisfied clients who achieved remarkable results with the impact I've had on their online presence.  
      </p>
    </div>
    <div class="border border-myGray-500/40 rounded-3xl">
      <Splide :options="options" aria-label="testimonials">
        <SplideSlide v-for="(item, index) in testimonials" :key="index">
          <div class="flex flex-col items-center px-12 py-16">
            <div>
              <Quote class="w-8 h-8 text-myGray-500/40 mb-9" />
            </div>
            <div class="text-3xl font-primaryBold mb-3">"{{ item.title }}"</div>
            <p class="leading-8 text-lg font-medium text-center w-[80%] mx-auto mb-6">
              "{{ item.text }}"
            </p>
            <div class="inline-flex items-center">
              <img alt="testimonial" :src="item.Image"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
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

<style>
.splide__arrow {
  background: transparent;
  border: 1px solid #0c0c0c;
  padding: 8px;
}
</style>
