<script setup>
import Navigation from "@/components/Navigation.vue";
import ArrowDown from "@/components/icons/ArrowDown.vue";
</script>

<template>
    <section class="bg-myDark-100 text-white mesh relative overflow-hidden h-screen">
        <Navigation ref="nav" />
        <div class="border border-myGray-400/10 p-72 rounded-full absolute -left-28 -bottom-36"></div>
        <div class="border border-myGray-400/10 p-80 rounded-full absolute left-[8%] bottom-[-50%]"></div>
        <div class="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto pt-28 pb-16">
            <div class="text-6xl font-primaryBold leading-[1.3] tracking-wide mb-10">
                Your Digital Transformation Partner to Rise Above the Competition.
            </div>
            <p class="leading-8 text-xl text-myGray-400 w-[70%]">
                I am dedicated to being your
                trusted digital transformation partner. Together, we'll navigate the ever-evolving digital
                landscape,
                implementing strategies that not only.
            </p>

            <div class="flex items-center justify-end">
                <div class="cursor-pointer rounded-full grid place-content-center p-16 glass
                        hover:scale-[1.1] transition-all">
                    <ArrowDown class="w-12 fill-white" />
                </div>
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

.glass {
    background: rgba(255, 255, 255, 0.02);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.8px);
    -webkit-backdrop-filter: blur(4.8px);
}
</style>