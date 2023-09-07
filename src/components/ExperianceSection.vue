<script setup>
import ArrowUp from './icons/ArrowUp.vue';
</script>

<template>
    <section class="bg-myDark-100">
        <div class="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto py-24 text-white">
            <div class="border border-white py-2 px-6 w-fit rounded-full text-lg font-medium mb-10 capitalize">why choose me?
            </div>
            <div class="grid grid-cols-[1fr,.7fr]">
                <div>
                    <p class="w-[90%] font-primary text-5xl leading-[56px]">I deliver the best results for my clients in the
                        shortest time.</p>

                    <button
                        class="bg-white text-myDark-100 text-lg mt-10 tracking-wide font-semibold rounded-full py-2 px-8 mr-4 flex items-center gap-x-4 ">
                        <span>Let's work together!</span>
                        <span>
                            <ArrowUp class="w-6" />
                        </span>
                    </button>
                </div>

                <div>
                    <p class="leading-8 text-lg font-medium mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Molestias porro earum qui rerum, distinctio
                        dignissimos quisquam. Nihil explicabo iusto, eligendi earum assumenda nisi atque? Nostrum, voluptas!
                        Fuga ut
                        tempore, suscipit omnis non in debitis fugiat nemo atque hic.</p>
                    <p class="leading-8 text-lg font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Molestias
                        porro earum qui rerum, distinctio
                        dignissimos quisquam. Nihil explicabo iusto, eligendi earum assumenda nisi atque? Nostrum, voluptas!
                        Fuga.
                    </p>
                </div>
            </div>
            <div class="flex items-center justify-between mt-16">
                <div>
                    <div class="text-7xl mb-3 font-medium">03+</div>
                    <div class="text-xl">Years of Experiance</div>
                </div>
                <div>
                    <div class="text-7xl mb-3 font-medium">50+</div>
                    <div class="text-xl">Satisfied Clients</div>
                </div>
                <div>
                    <div class="text-7xl mb-3 font-medium">70+</div>
                    <div class="text-xl">Completed Projects</div>
                </div>
            </div>
        </div>
    </section>
</template>