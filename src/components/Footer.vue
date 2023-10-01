<script setup>
import GithubLogo from "@/components/icons/GithubLogo.vue";
import LinkedInLogo from "@/components/icons/LinkedInLogo.vue";
import TwitterLogo from "@/components/icons/TwitterLogo.vue";
import { RouterLink } from "vue-router";
</script>
<template>
    <section class="bg-myDark-100 mesh">
        <footer class="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto text-white">
            <div class="py-16">
                <div class="flex items-center mb-16">
                    <div class="text-9xl font-primaryBold">Let's elevate your business!</div>
                </div>
                <div class="grid grid-cols-[1fr,0.7fr]">
                    <div>
                        <div>
                            <div class="flex items-center gap-x-6 mb-3">
                                <RouterLink to="/">
                                    <span class="tracking-wide text-xl">
                                        Abdallah Bari
                                    </span>
                                </RouterLink>
                            </div>
                            <p class="w-[70%] text-myGray-500 leading-7 mb-8">
                                Let's partner-up and witness the
                                transformation of your website into a powerful asset for success.
                            </p>

                            <div class="flex items-center gap-x-6">
                                <span class="hover:scale-[1.1] transition-all">
                                    <a href="https://github.com/Abdallah01win" target="_blank" title="GitHub">
                                        <GithubLogo class="w-6 fill-white" />
                                    </a>
                                </span>
                                <span class="hover:scale-[1.1] transition-all">
                                    <a href="https://twitter.com/AbdallahDev01" target="_blank" title="Twitter">
                                        <TwitterLogo class="w-6 fill-white" />
                                    </a>
                                </span>
                                <span class="hover:scale-[1.1] transition-all">
                                    <a href="https://www.linkedin.com/in/abdallahbari" target="_blank" title="LinkedIn">
                                        <LinkedInLogo class="w-6 fill-white" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-start gap-x-14 justify-end">
                        <div>
                            <div class="text-xl tracking-wide mb-4">Links</div>
                            <ul class="text-myGray-500 flex flex-col gap-y-3">
                                <li class="hover:text-white">
                                    <a href="#about">About me</a>
                                </li>
                                <li class="hover:text-white">
                                    <a href="#services">Services</a>
                                </li>
                                <li class="hover:text-white">
                                    <a href="#projects">Projects</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div class="text-xl tracking-wide mb-4">Legal</div>
                            <ul class="text-myGray-500 flex flex-col gap-y-3">
                                <li class="hover:text-white">
                                    <a href="#">Approach</a>
                                </li>
                                <li class="hover:text-white">
                                    <a href="#">Agreement</a>
                                </li>
                                <li class="hover:text-white">
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center py-8 tracking-wide text-myGray-500 border-t border-myGray-500/30">
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