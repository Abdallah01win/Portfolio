<script setup>
import ArrowUp from '@/components/icons/ArrowUp.vue';
</script>

<template>
    <div class="py-24 my-12 overflow-hidden relative flex items-center">
        <div class="text-6xl font-bold text-myGray-500/80 absolute top-[50%] left-[-5%] translate-y-[-50%] w-[200%]">
            <div>
                <span class="px-6">Get Free Quote</span>
                <span class="px-6">Get Free Quote</span>
                <span class="px-6">Get Free Quote</span>
                <span class="px-6">Get Free Quote</span>
                <span class="px-6">Get Free Quote</span>
            </div>
        </div>

        <div
            class="bg-myDark-100 text-white rounded-full p-14 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <ArrowUp class="w-10 fill-myWhite" />
            </div>
        </div>
    </div>
</template>