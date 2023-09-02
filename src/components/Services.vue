<script setup>
import ArrowUp from './icons/ArrowUp.vue';

const services = [
    {
        "title": "Custom Website Development",
        "description": "We create user-friendly interfaces and responsive designs to ensure a seamless and captivating user experience."
    },
    {
        "title": "Responsive Web Design",
        "description": "Our responsive designs adapt flawlessly to various screen sizes, keeping your audience engaged."
    },
    {
        "title": "CMS Integration and Optimization",
        "description": "Our CMS integration and optimization service provides user-friendly interfaces and ensures peak performance."
    },
    {
        "title": "Website Maintenance and Support",
        "description": "We keep your website in prime condition so you can focus on your core activities while we handle technical aspects."
    }
]
</script>

<template>
    <section class="xl:max-w-[1024px] mx-auto my-16">
        <div class="flex flex-col items-center justify-center mb-10">
            <h2 class="text-5xl w-[50%] text-center mb-5 leading-[1.2]">
                Solutions Taylored To Your Needs
            </h2>
            <p class="text-gray-400 w-[55%] text-center leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fugiat, itaque? Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="grid grid-cols-1 gap-x-8">
            <div class="text-lg font-semibold">
                <div v-for="(service, index) in services" :key="service" class="border-b border-myGray-500/80 py-7">
                    <div class="grid grid-cols-12">
                        <div class="col-span-6 flex items-center gap-x-10">
                            <div class="text-2xl font-normal">{{ service.title }}</div>
                        </div>
                        <div class="col-span-5 text-gray-400 text-sm font-normal leading-5">
                            {{ service.description }}
                        </div>
                        <div class="col-span-1 flex items-center justify-end cursor-pointer transition-all duration-[0.3s]">
                            <ArrowUp class="w-8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
