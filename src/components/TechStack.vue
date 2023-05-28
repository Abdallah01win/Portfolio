<script setup>
import Js from './icons/Js.vue';
import VueLogo from './icons/VueLogo.vue';
import LaravelLogo from './icons/LaravelLogo.vue';
import PythonLogo from './icons/PythonLogo.vue';
import HtmlLogo from './icons/HtmlLogo.vue';
import CssLogo from './icons/CssLogo.vue';
import SassLogo from './icons/SassLogo.vue';
</script>
<template>
    <section class="xl:max-w-[1024px] mx-auto my-12">
        <h2 class="text-3xl font-bold mb-8">
            <span>Featured </span>
            <span class="text-myGray-500 italic">Technologies</span>
        </h2>

        <div class="grid grid-cols-4 gap-6">
            <div class="border border-myDark-100 rounded-full /py-2 /px-4">
                <span class="flex items-center justify-center gap-x-3 py-3">
                    <Js class="w-8 fill-myDark-100"/>
                    <span class="text-sm font-semibold">
                        Javascript
                    </span>
                </span>
            </div>
            <div class="border border-myDark-100 rounded-full /py-2 /px-4">
                <span class="flex items-center justify-center gap-x-3 py-3">
                    <VueLogo class="w-8 fill-myDark-100"/>
                    <span class="text-sm font-semibold">
                        Vue.js
                    </span>
                </span>
            </div>
            <div class="border border-myDark-100 rounded-full /py-2 /px-4">
                <span class="flex items-center justify-center gap-x-3 py-3">
                    <LaravelLogo class="w-8 fill-myDark-100"/>
                    <span class="text-sm font-semibold">
                        Laravel
                    </span>
                </span>
            </div>
            <div class="border border-myDark-100 rounded-full /py-2 /px-4">
                <span class="flex items-center justify-center gap-x-3 py-3">
                    <PythonLogo class="w-8 fill-myDark-100"/>
                    <span class="text-sm font-semibold">
                        Python
                    </span>
                </span>
            </div>
            <div class="border border-myDark-100 rounded-full /py-2 /px-4">
                <span class="flex items-center justify-center gap-x-3 py-3">
                    <HtmlLogo class="w-8 fill-myDark-100"/>
                    <span class="text-sm font-semibold">
                        HTML
                    </span>
                </span>
            </div>
            <div class="border border-myDark-100 rounded-full /py-2 /px-4">
                <span class="flex items-center justify-center gap-x-3 py-3">
                    <CssLogo class="w-8 fill-myDark-100"/>
                    <span class="text-sm font-semibold">
                        CSS
                    </span>
                </span>
            </div>
            <div class="border border-myDark-100 rounded-full /py-2 /px-4">
                <span class="flex items-center justify-center gap-x-3 py-3">
                    <SassLogo class="w-8 fill-myDark-100"/>
                    <span class="text-sm font-semibold">
                        Sass
                    </span>
                </span>
            </div>
        </div>
    </section>
</template>