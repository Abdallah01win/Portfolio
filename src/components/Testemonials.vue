<script setup>
import { ref, onMounted } from 'vue'
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import TwitterLogo from "./icons/TwitterLogo.vue";
import LinkedinLogo from "./icons/LinkedinLogo.vue";
import GithubLogo from "./icons/GithubLogo.vue";

const options = {
    type: 'loop',
    perPage: 2,
    focus: 1,
    gap: '2.3rem',
}

const customArrows = ref(null)
const splide = ref(null)

onMounted(() => {
    const splideElement = splide.value.$el;
    if (splideElement) {
        const pagination = splideElement.querySelector(".splide__pagination");
        const prevArrow = splideElement.querySelector(".splide__arrow--prev");
        const nextArrow = splideElement.querySelector(".splide__arrow--next");

        customArrows.value.appendChild(prevArrow);
        customArrows.value.appendChild(pagination);
        customArrows.value.appendChild(nextArrow);
    }
})

const testamonials = [
    {
        name: 'Hicham Abazine',
        title: 'Backend & Mobile Developer',
        Image: '../src/assets/images/avatars/HichamAbazine.jpeg',
        links: {
            linkedin: 'https://www.linkedin.com/in/hichamabazine/',
            github: 'https://github.com/Abdallah01win',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus?',

    },
    {
        name: 'Hicham Terben',
        title: 'Graphic Designer',
        Image: 'https://dummyimage.com/106x106',
        links: {
            twitter: 'https://twitter.com/hixham_t?s=20',
            linkedin: 'https://www.linkedin.com/in/hicham-terben',
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
                                <span class="flex-grow flex flex-col pl-4 gap-y-0.5">
                                    <span class="title-font font-medium text-sm">{{ item.name }}</span>
                                    <span class="text-xs text-myGray-500">{{ item.title }}</span>
                                </span>
                            </div>
                            <div class="flex items-center gap-x-3">
                                <div v-for="link in item.links" :key="link">
                                    <a :href="link" target="_blank">
                                        <span v-if="link.includes('github')">
                                            <GithubLogo class="w-5 fill-myDark-100" />
                                        </span>
                                        <span v-if="link.includes('twitter')">
                                            <TwitterLogo class="w-5 fill-myDark-100" />
                                        </span>
                                        <span v-if="link.includes('linkedin')">
                                            <LinkedinLogo class="w-5 fill-myDark-100" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
            <div class="">
                <div ref="customArrows" class="bolck flex items-center gap-2 bg-red-600 h-4 relative mt-5"></div>
            </div>
        </div>
    </section>
</template>

<style>
.splide__arrow {
    padding: 8px;
}

.splide__pagination {
    bottom: 0;
    margin: 0px 10px;
}
</style>