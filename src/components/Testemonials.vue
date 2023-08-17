<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const options = {
    type: 'loop',
    perPage: 2,
    focus: 1,
    gap: '2.3rem',
    pagination: false,
}

const testamonials = [
    {
        name: 'Hicham Abazine',
        title: 'Backend & Mobile Developer',
        Image: 'https://dummyimage.com/106x106',
        links: {
            twitter: 'https://twitter.com/AbdallahDev01',
            linkedin: 'https://www.linkedin.com/in/abdallahbari/',
            github: 'https://github.com/Abdallah01win',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus?',

    },
    {
        name: 'Hicham Terban',
        title: 'Graphic Designer',
        Image: 'https://dummyimage.com/106x106',
        links: {
            twitter: 'https://twitter.com/AbdallahDev01',
            linkedin: 'https://www.linkedin.com/in/abdallahbari/',
            github: 'https://github.com/Abdallah01win',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus?',

    },
    {
        name: 'John',
        title: 'CEO',
        Image: 'https://dummyimage.com/106x106',
        links: {
            twitter: 'https://twitter.com/AbdallahDev01',
            linkedin: 'https://www.linkedin.com/in/abdallahbari/',
            github: 'https://github.com/Abdallah01win',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus?',

    },
]
</script>
<template>
    <section class="xl:max-w-[1024px] mx-auto mb-24" id="testemonials">
        <h2 class="text-3xl font-bold mb-8">
            <span>Client's </span>
            <span class="text-myGray-500 italic">Testimonials</span>
        </h2>
        <div>
            <Splide ref="splide" :options="options" aria-label="testamonials">
                <SplideSlide v-for="(item, index) in  testamonials" :key="index">
                    <div class="flex flex-col justify-between h-72 p-8 rounded-3xl border border-myGray-500/80">
                        <p class="leading-6 text-sm text-myDark-400">
                            {{ item.text }}
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="inline-flex items-center">
                                <img alt="testimonial" :src="item.Image"
                                    class="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center" />
                                <span class="flex-grow flex flex-col pl-4">
                                    <span class="title-font font-medium text-sm text-gray-900">{{ item.name }}</span>
                                    <span class="text-xs">{{ item.title }}</span>
                                </span>
                            </div>
                            <div class="flex items-center gap-x-2">
                                <div v-for="link in item.links" :key="link">
                                    <a :href="link" target="_blank">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </section>
</template>

<style>
#testemonials .splide__arrow {
    padding: 8px;
}
</style>