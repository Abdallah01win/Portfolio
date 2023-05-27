<script>
import ArrowUp from './icons/ArrowUp.vue';
import { ref } from 'vue';
export default {
    components: {
        ArrowUp
    },
    setup() {
        const showDiv = ref([]);
        const items = [
            { title: 'News Magazine Website', tasks: 'Front-end, Back-end, Design', discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem natus dolore repellendus quasi aliquid, molestias recusandae tempora odio excepturi, aut laboriosam distinctio nulla fuga.' },
            { title: 'News Magazine Website', tasks: 'Front-end, Back-end, Design', discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem natus dolore repellendus quasi aliquid, molestias recusandae tempora odio excepturi, aut laboriosam distinctio nulla fuga.' },
            { title: 'News Magazine Website', tasks: 'Front-end, Back-end, Design', discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem natus dolore repellendus quasi aliquid, molestias recusandae tempora odio excepturi, aut laboriosam distinctio nulla fuga.' },
            { title: 'News Magazine Website', tasks: 'Front-end, Back-end, Design', discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem natus dolore repellendus quasi aliquid, molestias recusandae tempora odio excepturi, aut laboriosam distinctio nulla fuga.' },
        ];
        for (let i = 0; i < items.length; i++) {
            showDiv.value.push(false);
        }
        return {
            showDiv,
            items,
        };
    },
};
</script>
<template>
    <section class="xl:max-w-[1024px] mx-auto">
        <h2 class="text-3xl font-bold mb-8">
            <span>Featured </span>
            <span class="text-myGray-500 italic">Projects</span>
        </h2>

        <div class="grid grid-cols-2 gap-8">
            <div v-for="(item, index) in items" :key="index">
                <div class="rounded-3xl h-64 bg-myYellow mb-3 relative">
                    <div class="rounded-full bg-myWhite w-fit p-3 absolute bottom-0 right-0 mr-4 mb-4 cursor-pointer"
                        @click="showDiv[index] = !showDiv[index]">
                        <ArrowUp class="w-6" />
                    </div>
                    <div v-if="showDiv[index]" class="bg-myGray-300 rounded-3xl py-3 px-6 h-full">
                        <p>{{ item.discription }}</p>
                    </div>
                </div>
                <div>
                    <div class="font-bold">{{ item.title }}</div>
                    <p class="text-myGray-500 text-sm">{{ item.tasks }}</p>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center mt-12">
            <button class="rounded-full py-3 px-8 flex items-center justify-center gap-x-3 border border-myDark-100 text-sm">
                <span>See More Projects</span>
                <ArrowUp class="w-5"/>
            </button>
        </div>
    </section>
</template>