<script setup>
import ArrowUp from "@/components/icons/ArrowUp.vue";

const address = import.meta.env.VITE_MAIL_TO_ADDRESS
</script>

<template>
    <section class="bg-myDark-100 texture">
        <div
            class="3xs:max-w-[320px] 2xs:max-w-[360px] xs:max-w-[390px] sm:max-w-[475px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto py-14 sm:py-18 md:py-24 text-white">
            <div
                class="border border-white py-2 px-6 w-fit rounded-full text-base lg:text-lg font-medium mb-6 sm:mb-8 lg:mb-10 capitalize">
                why choose me?
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0">
                <div>
                    <p class="lg:w-[90%] font-primary text-3xl xs:text-4xl xl:text-5xl leading-[1.35] md:leading-[1.1]">
                        I'm not here to push pre-made solutions onto your project.
                    </p>

                    <a :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${address}`" target="_blank"
                        class="bg-white text-myDark-100 text-lg mt-10 tracking-wide font-semibold rounded-full py-2 px-8 mr-4 flex items-center gap-x-4 w-fit">
                        <span>Let's work together!</span>
                        <span>
                            <ArrowUp class="w-6" />
                        </span>
                    </a>
                </div>

                <div class="leading-7 sm:leading-8 text-base sm:text-lg font-medium">
                    <p class="mb-8">
                        I'm here to listen, understand your unique needs, and tailor a web solution that's as unique as your
                        business. Expect open and transparent communication throughout our partnership, ensuring that your
                        ideas are not just heard but also brilliantly executed.
                    </p>
                    <p>
                        Because excellence lies in the details, I pay carful attention
                        to all aspects of a successful business website that will set you ahead of the competition. Your
                        success is my success, I and I'm
                        dedicated to make it happen.
                    </p>
                </div>
            </div>
            <div
                class="flex items-center justify-between mt-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <div>
                    <div class="mb-3 font-medium">05+</div>
                    <div class="text-sm sm:text-base md:text-lg lg:text-xl">Years of Experience</div>
                </div>
                <div>
                    <div class="mb-3 font-medium">25+</div>
                    <div class="text-sm sm:text-base md:text-lg lg:text-xl">Satisfied Clients</div>
                </div>
                <div>
                    <div class="mb-3 font-medium">40+</div>
                    <div class="text-sm sm:text-base md:text-lg lg:text-xl">Completed Projects</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.texture {
    background-image: url('@/assets/images/Texture.png');
}
</style>