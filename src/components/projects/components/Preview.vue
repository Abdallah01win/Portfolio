<script setup>
import X from '@/components/icons/X.vue'

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['resetProject'])
</script>

<template>
    <div :class="{ 'hidden': !props.project?.title }" @keydown.escape="emit('resetProject')"
        class="fixed top-0 left-0 w-full h-screen z-10 bg-myGray-500/80 glass px-6 overflow-y-auto" tabindex="0">

        <div class="glass p-3 bg-myWhite rounded-full w-fit absolute right-0 top-0 cursor-pointer mr-6 mt-6 hover:scale-[1.1] transition-all"
            @click="emit('resetProject')">
            <X class="w-5 hover:fill-black" />
        </div>

        <div class="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto">
            <div>
                <img :src="project?.thumbnail" :alt="project?.title" class="w-full h-screen">
            </div>
        </div>
    </div>
</template>