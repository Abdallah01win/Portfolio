<script setup>
import GithubLogo from './icons/GithubLogo.vue';
import Glob from './icons/Glob.vue';
import LinkedInLogo from './icons/LinkedInLogo.vue';
import TwitterLogo from './icons/TwitterLogo.vue';
</script>
<template>
    <footer class="xl:max-w-[1024px] mx-auto">

        <div></div>

        <div class="flex items-center justify-between  border-t border-myGray-500/80 py-6 ">
            <div class="">2023 &#169; By <span class="font-semibold">Abdallah Bari</span></div>
            <div class="flex items-center gap-x-5">
                <span>
                    <a href="https://github.com/Abdallah01win" target="_blank">
                        <GithubLogo class="w-6 fill-myDark-100"/>
                    </a>
                </span>
                <span>
                    <a href="https://twitter.com/AbdallahDev01" target="_blank">
                        <TwitterLogo class="w-6 fill-myDark-100"/>
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/abdallahbari/" target="_blank">
                        <LinkedInLogo class="w-6 fill-myDark-100"/>
                    </a>
                </span>
                <div
                    class="flex items-center gap-x-2 border border-myDark-100 rounded-full py-2 px-3 cursor-pointer font-normal">
                    <Glob class="w-5" />
                    <span>En</span>
                </div>
            </div>
        </div>
    </footer>
</template>