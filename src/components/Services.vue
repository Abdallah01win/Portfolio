<script setup>
import ArrowUp from "@/components/icons/ArrowUp.vue";

const services = [
    {
        "title": "Custom Website Development",
        "description": "I create user-friendly interfaces and responsive designs to ensure a seamless and captivating user experience."
    },
    {
        "title": "Responsive Web Design",
        "description": "My responsive designs adapt flawlessly to various screen sizes, keeping your audience engaged."
    },
    {
        "title": "SEO integration",
        "description": "Improve your search engine rankings and attract more organic traffic with comprehensive SEO."
    },
    {
        "title": "Website Maintenance and Support",
        "description": "I'll keep your website in prime condition so you can focus on your core activities while I handle technical aspects."
    }
]
</script>

<template>
    <section id="services" class="xl:max-w-[1024px] 2xl:max-w-[1280px]  mx-auto py-24">
        <div class="mb-10">
            <div class="border border-myDark-100 py-2 px-6 w-fit rounded-full text-lg font-semibold mb-10">My Services</div>

            <p class="w-[90%] font-primary text-5xl font-bold leading-[1.1] mb-10">
                Here are my solutions to transform your website into a user-friendly platform that converts visitors into
                loyal customers.
            </p>
        </div>

        <div class="grid grid-cols-1 gap-x-8">
            <div class="text-lg">
                <div v-for="service in services" :key="service" class="border-b border-myGray-500/40 py-7">
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
