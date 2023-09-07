<script setup>
import ArrowUp from "@/components/icons/ArrowUp.vue";

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
    <section class="xl:max-w-[1024px] 2xl:max-w-[1280px]  mx-auto py-24">
        <div class="mb-10">
            <div class="border border-myDark-100 py-2 px-6 w-fit rounded-full text-lg font-semibold mb-10">My Services</div>

            <p class="w-[90%] font-primary text-3xl leading-10">My name is Abdallah Bari. I'm a Self-thought software
                engineer and web developer with an undying passion for innovation. I utilize my experties in the digital
                landscape to help businesses gain an edge over the competition.</p>
        </div>

        <div class="grid grid-cols-1 gap-x-8">
            <div class="text-lg">
                <div v-for="(service, index) in services" :key="service" class="border-b border-myGray-500/40 py-7">
                    <div class="grid grid-cols-12">
                        <div class="col-span-6 flex items-center gap-x-10">
                            <div class="text-3xl font-primaryBold">{{ service.title }}</div>
                        </div>
                        <div class="col-span-5 text-myGray-400 text-base leading-5">
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
