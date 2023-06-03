<template>
    <section class="xl:max-w-[1024px] mx-auto my-12">
        <h2 class="text-3xl font-bold mb-6">
            <span>Contact </span>
            <span class="text-myGray-500 italic">Me</span>
        </h2>
        <div class="bg-myGray-600 p-10 rounded-3xl">
            <h2 class="text-2xl font-bold mb-1">Have an Idea? I got the skills.</h2>
            <p class="/text-base">Let's work together to make your visions a reality. Tell us more about yourself and what's on your mind.</p>
            <form action="#" method="post" class="flex flex-col gap-y-2 mt-6">
                <input type="text" name="name" id="name" placeholder="Your name" class="bg-transparent border-b border-myDark-100 py-2 placeholder:text-myGray-500 placeholder:font-normal">
                <input type="email" name="email" id="email" placeholder="Email Adress" class="bg-transparent border-b border-myDark-100 py-2 placeholder:text-myGray-500 placeholder:font-normal">
                <select name="intrest" id="intrest" class="bg-transparent border-b border-myDark-100 py-2">
                    <option value="full-stack">Full-Stack Web Application</option>
                    <option value="front">Front-End Web Application</option>
                    <option value="api">API Development</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" name="description" placeholder="Short description of your project" class="bg-transparent border-b border-myDark-100 py-2 placeholder:text-myGray-500 placeholder:font-normal">
                <button type="submit" class="bg-myDark-100 py-2 px-6 rounded-full text-myWhite font-light mt-6">Send Email</button>
            </form>
        </div>
    </section>
</template>