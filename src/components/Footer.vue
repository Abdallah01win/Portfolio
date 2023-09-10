<script setup>
import GithubLogo from "@/components/icons/GithubLogo.vue";
import LinkedInLogo from "@/components/icons/LinkedInLogo.vue";
import TwitterLogo from "@/components/icons/TwitterLogo.vue";
</script>
<template>
    <section class="bg-myDark-100 mesh">
        <footer class="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto text-white">
            <div class="py-16">
                <div class="flex items-center mb-16">
                    <div class="text-8xl font-primaryBold">Let's work together!</div>
                </div>
                <div class="grid grid-cols-[1fr,0.7fr]">
                    <div>
                        <div>
                            <div class="flex items-center gap-x-6 mb-3">
                                <!-- <span>AB</span> -->
                                <span class="tracking-wide text-xl">Abdallah Bari</span>
                            </div>
                            <p class="w-[70%] text-myGray-500 leading-7 mb-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos eligendi placeat
                                eos et quisquam.
                            </p>

                            <div class="flex items-center gap-x-6">
                                <span>
                                    <a href="https://github.com/Abdallah01win" target="_blank">
                                        <GithubLogo class="w-6 fill-white" />
                                    </a>
                                </span>
                                <span>
                                    <a href="https://twitter.com/AbdallahDev01" target="_blank">
                                        <TwitterLogo class="w-6 fill-white" />
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/in/abdallahbari" target="_blank">
                                        <LinkedInLogo class="w-6 fill-white" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-3 gap-x-6 justify-between">
                        <div>
                            <div class="text-2xl tracking-wide mb-4">Info</div>
                            <ul class="text-myGray-500 text-lg flex flex-col gap-y-3">
                                <li>About me</li>
                                <li>Projects</li>
                                <li>Services</li>
                                <li>Approach</li>
                            </ul>
                        </div>
                        <div>
                            <div class="text-2xl tracking-wide mb-4">Info</div>
                            <ul class="text-myGray-500 text-lg flex flex-col gap-y-3">
                                <li>About Me</li>
                                <li>Projects</li>
                                <li>Services</li>
                                <li>Approach</li>
                            </ul>
                        </div>
                        <div>
                            <div class="text-2xl tracking-wide mb-4">Legal</div>
                            <ul class="text-myGray-500 text-lg flex flex-col gap-y-3">
                                <li>Privacy Policy</li>
                                <li>Terms</li>
                                <li>Services</li>
                                <li>Approach</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center py-8 tracking-wide border-t border-myGray-500/30">
                &#169; Copyright 2023 Abdallah Bari. All rights reserved.
            </div>
        </footer>
    </section>
</template>


<style scoped>
.mesh {
    background-image: url('@/assets/images/Texture.png'),
        radial-gradient(at 38% 145%, rgb(97, 34, 214) 0, hsla(240, 85%, 69%, 0) 50%),
        radial-gradient(at 130% 110%, rgb(59, 104, 230) 0, hsla(192, 91%, 57%, 0) 50%);
}
</style>