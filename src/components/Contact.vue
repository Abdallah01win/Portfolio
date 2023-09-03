<script setup>
import ArrowUp from "./icons/ArrowUp.vue";
import FAQSection from "./FAQSection.vue";
</script>
<template>
  <section class="xl:max-w-[1024px] mx-auto mb-24">
    <h2 class="text-3xl font-bold mb-8">
      <span>Contact </span>
      <span class="text-myGray-500 italic">Me</span>
    </h2>
    <div class="rounded-3xl ">
      <div class="grid grid-cols-7 gap-x-10 ">
        <form action="#" method="post" class="flex flex-col gap-y-2.5 col-span-7">
          <div class="mb-3">
            <p class="leading-8 text-base text-myDark-400">I would love to hear from <span
                class="italic font-semibold">you!</span>
              Let's
              embark on a
              journey of <span class="italic font-semibold">creativity</span> and innovation <span
                class="italic font-semibold">together!</span></p>
          </div>
          <div class="flex items-center gap-x-6">

            <input type="text" name="name" id="name" placeholder="Your name"
              class="grow bg-transparent border-b border-myGray-500 py-2 placeholder:text-myGray-500 placeholder:font-normal focus:outline-none" />
            <input type="email" name="email" id="email" placeholder="Email Adress"
              class="grow bg-transparent border-b border-myGray-500 py-2 placeholder:text-myGray-500 placeholder:font-normal focus:outline-none" />
          </div>
          <div class="flex items-center gap-x-6">
            <input type="text" name="intrest" id="intrest" placeholder="Intrested in"
              class="grow bg-transparent border-b border-myGray-500 py-2 placeholder:text-myGray-500 placeholder:font-normal focus:outline-none" />
            <input type="text" name="company" id="company" placeholder="Company"
              class="grow bg-transparent border-b border-myGray-500 py-2 placeholder:text-myGray-500 placeholder:font-normal focus:outline-none" />
          </div>
          <input type="text" name="description" placeholder="Message"
            class="bg-transparent border-b border-myGray-500 py-2 placeholder:text-myGray-500 placeholder:font-normal focus:outline-none" />
          <button class="rounded-full py-3 px-6 bg-myDark-100 text-myWhite gap-x-2 flex justify-center font-normal mt-6">
            <span>Send Email</span>
            <span>
              <ArrowUp class="w-5" />
            </span>
          </button>
        </form>

        <div class="col-span-3">
          <!-- <FAQSection /> -->
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
