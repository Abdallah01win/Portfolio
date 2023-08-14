<script setup>
import { ref } from 'vue'
import ArrowUp from './icons/ArrowUp.vue';
import { RouterLink } from 'vue-router';

const services = [
    {
        "title": "Custom Website Development",
        "description": "Crafting tailor-made websites that align with your brand's identity and goals. We create user-friendly interfaces and responsive designs to ensure a seamless and captivating user experience."
    },
    {
        "title": "Responsive Web Design",
        "description": "Ensure your website shines across all devices. Our responsive designs adapt flawlessly to various screen sizes, keeping your mobile-savvy audience engaged and connected."
    },
    {
        "title": "CMS Integration and Optimization",
        "description": "Take control of your content effortlessly. Our CMS integration and optimization service provides user-friendly interfaces and ensures peak performance, enabling easy management of your digital narrative."
    },
    {
        "title": "Website Maintenance and Support",
        "description": "We keep your website in prime condition with comprehensive maintenance and support. Focus on your core activities while we handle technical aspects, ensuring your website remains secure and glitch-free."
    }
]

const showDescription = ref([])
for (let i = 0; i < services.length; i++) {
    showDescription.value.push(false);
}
</script>

<template>
    <section class="xl:max-w-[1024px] mx-auto my-12">
        <h2 class="text-3xl font-bold mb-8">
            <span>My </span>
            <span class="text-myGray-500 italic">Solutions</span>
        </h2>

        <div class="grid grid-cols-2 gap-x-8">
            <div>
                <p class="leading-8 text-base text-myDark-400 mb-2">In today's fast-paced digital landscape, a captivating
                    online presence is paramount. I craft exceptional web solutions that don't just meet your needs but
                    exceed your expectations. With
                    a keen understanding of the challenges you face, I offer a suite of services designed to address your
                    needs and deliver results that matter. Harness the power of cutting-edge technology, seamless user
                    experiences, and eye-catching design to make your mark in the online world.</p>

                <!-- <RouterLink to="about"
                    class="w-fit rounded-full py-2 px-10 bg-myDark-100 text-myWhite flex items-center gap-x-2">
                    <span>Learn More</span>
                    <span>
                        <ArrowUp class="w-5" />
                    </span>
                </RouterLink> -->
            </div>

            <div class="text-lg font-semibold">
                <div v-for="(service, index) in services" :key="service"
                    :class="[index === services.length - 1 ? 'border-b' : '']"
                    class="border-t border-myGray-500/80 py-6 px-6">
                    <div class="flex items-center justify-between ">
                        <div class="flex items-center gap-x-10">
                            <div><span v-if="index < 9">0</span>{{ index + 1 }}</div>
                            <div>{{ service.title }}</div>
                        </div>
                        <div class="cursor-pointer" @click="showDescription[index] = !showDescription[index]"
                            :class="['transition-all duration-[0.3s]', { 'rotate-90': showDescription[index] }]">
                            <ArrowUp class="w-6" />
                        </div>
                    </div>
                    <div class="text-myGray-200 text-sm font-normal leading-6"
                        :class="['navigation', { show: showDescription[index] }]">
                        {{ service.description }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.navigation {
    height: 0;
    margin-top: 0px;
    overflow: hidden;
    transition: height, margin-top 0.3s ease;
}

.navigation.show {
    height: fit-content;
    margin-top: 16px;
}
</style>