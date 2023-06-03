<script setup>
import ArrowUp from './icons/ArrowUp.vue'
</script>
<template>
    <section class="xl:max-w-[1024px] mx-auto my-12">
        <!-- <h2 class="text-3xl font-bold mb-6">
            <span>Contact </span>
            <span class="text-myGray-500 italic">Me</span>
        </h2> -->
        <div class="bg-myGray-600 p-10 rounded-3xl grid grid-cols-2 gap-x-8">
            <div>
                <!-- <div>
                    <h2 class="text-3xl font-bold mb-4">
                        <span>Contact </span>
                        <span class="text-myGray-500 italic">Me</span>
                    </h2>
                </div> -->
                <h2 class="text-3xl font-bold mb-1">Have an Idea? I got the skills.</h2>
                <p class="leading-6">Let's work together to make your visions a reality. Tell us more about yourself
                    and
                    what's on your mind.</p>
            
            <form action="#" method="post" class="flex flex-col gap-y-2 mt-4">
                <input type="text" name="name" id="name" placeholder="Your name"
                    class="bg-transparent border-b border-myDark-100 py-2 placeholder:text-myGray-500 placeholder:font-normal focus:outline-none">
                <input type="email" name="email" id="email" placeholder="Email Adress"
                    class="bg-transparent border-b border-myDark-100 py-2 placeholder:text-myGray-500 placeholder:font-normal focus:outline-none">
                <select name="intrest" id="intrest"
                    class="bg-transparent border-b border-myDark-100 py-2 focus:outline-none select">
                    <option value="full-stack">Full-Stack Web Application</option>
                    <option value="front">Front-End Web Application</option>
                    <option value="api">API Development</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" name="description" placeholder="Short description of your project"
                    class="bg-transparent border-b border-myDark-100 py-2 placeholder:text-myGray-500 placeholder:font-normal focus:outline-none">
                <button
                    class="rounded-full py-2 px-6 bg-myDark-100 text-myWhite gap-x-2 flex justify-center font-normal mt-5">
                    <span>Send Email</span>
                    <span>
                        <ArrowUp class="w-5" />
                    </span>
                </button>
            </form>
        </div>
        </div>
    </section>
</template>

<style scoped>
.select {
    color: #969696;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%23000000' viewBox='0 0 256 256'><path d='M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z'></path></svg>");
    background-repeat: no-repeat;
    background-position-x: 98%;
    background-position-y: 50%;
}
</style>