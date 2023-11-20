<script setup>
import Navigation from "@/components/Navigation.vue";
import ArrowDown from "@/components/icons/ArrowDown.vue";
import { onMounted } from 'vue';
import { circler_text } from '@/helpers/functions.js'

onMounted(() => {
    circler_text('hero-circle-text', "Hi I’m Abdallah Bari • Let’s get started! ")
})
</script>

<template>
    <section class="bg-myDark-100 text-white mesh relative overflow-hidden screen">
        <Navigation ref="nav" />
        <div class="border border-myGray-400/10 p-72 rounded-full absolute -left-28 -bottom-36"></div>
        <div class="border border-myGray-400/10 p-80 rounded-full absolute left-[8%] bottom-[-50%]"></div>
        <div
            class="3xs:max-w-[320px] 2xs:max-w-[360px] xs:max-w-[390px] sm:max-w-[475px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto pt-28 pb-16">
            <div
                class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primaryBold 2xs:leading-[1.5] xs:leading-[1.35] lg:leading-[1.3] tracking-wide mb-6 xs:mb-10">
                Your digital transformation partner for a captivating online presence.
            </div>

            <p class="xs:leading-8 xs:text-xl text-myGray-400 md:w-[85%] lg:w-[70%] max-sm:mb-6">
                I specialize in giving small and medium-sized businesses the modern and professional websites they deserve
                to stand out from the competition.
            </p>

            <div class="flex items-center justify-end">
                <a href="#about"
                    class="cursor-pointer rounded-full relative grid place-content-center p-16 glass hover:scale-[1.1] transition-all">
                    <ArrowDown class="w-12 fill-white" />
                    <span class="hero-circle-text font-semibold"></span>
                </a>
            </div>
        </div>
    </section>
</template>


<style scoped>
.mesh {
    background-image: url('@/assets/images/Texture.png'),
        radial-gradient(at 41% 145%, rgb(97, 34, 214) 0, hsla(240, 85%, 69%, 0) 50%),
        radial-gradient(at 130% 110%, rgb(59, 104, 230) 0, hsla(192, 91%, 57%, 0) 50%);
}

@media screen and (max-height: 1024px) {
    .screen {
        height: 100vh;
    }
}
</style>