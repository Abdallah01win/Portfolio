<script setup>
const props = defineProps({
    project: {
        type: Object,
        required: false
    }
})
</script>

<template>
    <div :class="{ 'hidden': !props.project?.title }" class="bg-myGray-500/40">
        <div>{{ props.project?.title }}</div>
        <div>This is the preview</div>
    </div>
</template>