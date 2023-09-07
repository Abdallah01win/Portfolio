<script setup>
import GithubLogo from "@/components/icons/GithubLogo.vue";
import Glob from "@/components/icons/Glob.vue";
import LinkedInLogo from "@/components/icons/LinkedInLogo.vue";
import TwitterLogo from "@/components/icons/TwitterLogo.vue";
</script>
<template>
    <section class="bg-myDark-100 pt-24">

        <footer class="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto text-white">
            <div class="text-9xl font-primaryBold">AbdallahBari</div>
            <div class="flex items-center justify-between  border-t border-myGray-500/40 py-5 ">
                <div class="">2023 &#169; By <span class="font-semibold">Abdallah Bari</span></div>
                <div class="flex items-center gap-x-5">
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
                        <a href="https://www.linkedin.com/in/abdallahbari/" target="_blank">
                            <LinkedInLogo class="w-6 fill-white" />
                        </a>
                    </span>
                    <div
                        class="flex items-center gap-x-2 border border-white rounded-full py-2 px-3 cursor-pointer font-normal">
                        <Glob class="w-5 fill-white" />
                        <span>En</span>
                    </div>
                </div>
            </div>
        </footer>
    </section>
</template>