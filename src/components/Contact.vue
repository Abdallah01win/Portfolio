<script setup>
import ArrowUp from "./icons/ArrowUp.vue";
import FAQSection from "./FAQSection.vue";
</script>
<template>
  <section class="xl:max-w-[1024px] mx-auto my-24">
    <h2 class="text-3xl font-bold mb-8">
      <span>Contact </span>
      <span class="text-myGray-500 italic">Me</span>
    </h2>
    <div class="/bg-myGray-600 /py-10 /px-8 rounded-3xl ">
      <div class="grid grid-cols-2 gap-x-12 ">
        <form action="#" method="post" class="flex flex-col gap-y-2">
          <div class="mb-3">
            <h2 class="text-xl font-bold mb-2">Ready to discuss your next project?</h2>
            <p class="leading-6 text-myDark-400">I would love to hear from you!
              Let's
              embark on a
              journey of creativity and innovation together!</p>
          </div>
          <input type="text" name="name" id="name" placeholder="Your name"
            class="bg-transparent border-b border-myGray-500 py-2 placeholder:text-myGray-500 placeholder:font-normal focus:outline-none" />
          <input type="email" name="email" id="email" placeholder="Email Adress"
            class="bg-transparent border-b border-myGray-500 py-2 placeholder:text-myGray-500 placeholder:font-normal focus:outline-none" />
          <select name="intrest" id="intrest"
            class="bg-transparent border-b border-myGray-500 py-2 focus:outline-none font-normal select">
            <option value="" class="text-myGray-500">I'm intrested in</option>
            <option value="full-stack">Full-Stack Web Application</option>
            <option value="front">Front-End Web Application</option>
            <option value="api">API Development</option>
            <option value="other">Other</option>
          </select>
          <input type="text" name="description" placeholder="Message"
            class="bg-transparent border-b border-myGray-500 py-2 placeholder:text-myGray-500 placeholder:font-normal focus:outline-none" />
          <button class="rounded-full py-3 px-6 bg-myDark-100 text-myWhite gap-x-2 flex justify-center font-normal mt-6">
            <span>Send Email</span>
            <span>
              <ArrowUp class="w-5" />
            </span>
          </button>
        </form>

        <div class="">
          <FAQSection />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%23C2C8C1' viewBox='0 0 256 256'><path d='M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z'></path></svg>");
  background-repeat: no-repeat;
  background-position-x: 98%;
  background-position-y: 50%;
}
</style>
