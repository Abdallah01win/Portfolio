<script setup>
import ArrowUp from './icons/ArrowUp.vue';
import ArrowDown from './icons/ArrowDown.vue';
</script>
<template>
    <main class="xl:max-w-[1024px] mx-auto py-24">
        <div class="text-7xl font-bold">
            Design. Development. <span class="text-myGray-500 italic">Mastership</span>
        </div>
        <p class="xl:max-w-[60%] my-12 leading-8 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et, ipsum, blanditiis asperiores at non ad earum provident officia.
        </p>
        <div class="flex items-center gap-x-4 font-normal">
            <button class="rounded-full py-2 px-10 bg-myDark-100 text-myWhite flex items-center gap-x-2">
                <span>Contact</span>
                <span>
                    <ArrowUp class="w-5"/>
                </span>
            </button>
            <button class="border border-myDark-100 rounded-full py-2 px-10 flex items-center gap-x-2">
                <span>Projects</span>
                <span>
                    <ArrowDown class="w-5"/>
                </span>
            </button>
        </div>
    </main>
</template>