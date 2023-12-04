<script setup>
import { ref } from "vue";
import ArrowUp from "@/components/icons/ArrowUp.vue";
import { myServices } from "@/helpers/services";

const services = ref(myServices);
const toggleAccordion = (index) => {
  services.value.forEach((s, i) => {
    s.isOpen = i === index ? !s.isOpen : false;
  });
};

const showDescription = ref([]);
for (let i = 0; i < services.length; i++) {
  showDescription.value.push(false);
}
</script>

<template>
  <section
    id="services"
    class="3xs:max-w-[320px] 2xs:max-w-[360px] xs:max-w-[390px] sm:max-w-[475px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto py-14 sm:py-18 md:py-24"
  >
    <div class="mb-10">
      <div
        class="border border-myDark py-2 px-6 w-fit rounded-full text-base lg:text-lg font-semibold mb-6 sm:mb-8 lg:mb-10"
      >
        My Services
      </div>
      <p
        class="lg:w-[90%] font-primary text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-[1.35] md:leading-[1.1] tracking-wide mb-10"
      >
        My solutions to transform your site into a user-friendly platform.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-x-8">
      <div class="text-lg">
        <div
          v-for="(service, index) in services"
          :key="service"
          class="border-b border-myGray-200/40 pb-5 md:pb-7"
          :class="{ 'pt-5 md:pt-7': index !== 0 }"
        >
          <div class="grid grid-cols-12 max-md:gap-x-0 gap-x-10">
            <div class="max-md:col-span-10 col-span-6 flex items-center">
              <div class="sm:text-xl md:text-2xl font-primaryBold">
                {{ service.title }}
              </div>
            </div>
            <div
              class="col-span-6 text-base leading-5 max-md:hidden"
            >
              {{ service.description }}
            </div>
            <div
              class="col-span-2 max-md:flex hidden items-center justify-end cursor-pointer transition-all duration-[0.3s] noTapHeightlight"
            >
              <ArrowUp
                class="w-6 md:w-8 transition-all"
                :class="{ 'rotate-180': service.isOpen }"
                @click="toggleAccordion(index)"
              />
            </div>
          </div>
          <div v-if="service.isOpen" class="mt-3">
            {{ service.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
