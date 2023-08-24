<script setup>
import ArrowUp from './icons/ArrowUp.vue';
import ArrowDown from './icons/ArrowDown.vue';
import GithubLogo from './icons/GithubLogo.vue';
import LinkedInLogo from './icons/LinkedInLogo.vue';
import TwitterLogo from './icons/TwitterLogo.vue';
</script>

<template>
    <main class=" xl:max-w-[1024px] mx-auto pt-24 pb-12 relative">
        <div class="flex flex-col items-center justify-center">
            <div class="text-7xl font-bold text-center">
                Design. Development. <span class="text-myGray-500 italic">Mastership</span>
            </div>
            <p class="xl:max-w-[60%] my-12 leading-8 text-base text-center">
                I <span class="italic capitalize font-semibold">design</span>, <span
                    class="italic capitalize font-semibold">develop</span>, and <span
                    class="italic capitalize font-semibold">maintain</span> high-quality software systems and applications
                that make life easier and, hopefully, the world <span class="italic capitalize font-semibold">a better
                    place</span>.
            </p>
            <div class="flex items-center gap-x-4 font-normal">
                <button class="rounded-full py-2 px-10 bg-myDark-100 text-myWhite flex items-center gap-x-2">
                    <span>Contact Me</span>
                    <span>
                        <ArrowUp class="w-5" />
                    </span>
                </button>
                <button class="border border-myDark-100 rounded-full py-2 px-10 flex items-center gap-x-2">
                    <span>My Projects</span>
                    <span>
                        <ArrowDown class="w-5" />
                    </span>
                </button>
            </div>
        </div>
        <div class="flex items-center gap-x-8 w-full py-20 h-full">
            <div class="w-full border-t border-myGray-500 mr-4"></div>
            <div class="flex items-center gap-x-4">
                <div>
                    <a href="https://github.com/Abdallah01win" target="_blank">
                        <GithubLogo class="w-6 fill-myDark-100" />
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/AbdallahDev01" target="_blank">
                        <TwitterLogo class="w-6 fill-myDark-100" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/abdallahbari/" target="_blank">
                        <LinkedInLogo class="w-6 fill-myDark-100" />
                    </a>
                </div>
            </div>
            <div class="w-full border-t border-myGray-500 mr-4"></div>
        </div>
    </main>
</template>
