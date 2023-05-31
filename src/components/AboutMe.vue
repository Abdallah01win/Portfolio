<script setup>
import TwitterLogo from "./icons/TwitterLogo.vue";
</script>
<template>
  <section class="xl:max-w-[1024px] mx-auto mb-12">
    <h2 class="text-3xl font-bold mb-8">
      <span>About </span>
      <span class="text-myGray-500 italic">Me</span>
    </h2>
    <div class="grid grid-cols-3 gap-y-8">
      <div class="rounded-3xl border border-myDark-100 px-8 py-6 col-span-2">
        <div class="flex items-center gap-x-4 mb-2">
          <div class="p-2 border border-myDark-100 rounded-full w-fit">
            <TwitterLogo class="w-5" />
          </div>
          <hr class="w-full p-y-2" />
        </div>
        <p class="leading-8 font-light text-base"> 
            <!-- English and relizing i love tech and giving up the masters -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias
          exercitationem. Odit qui deserunt error ab ea aspernatur eligendi
          voluptas alias, modi et nobis. Est sed amet dolore earum sequi vel,
          aperiam libero quaerat sunt iure sapiente praesentium inventore
          dolorem numquam quisquam quia quod, iusto rerum reiciendis corrupti
          debitis ut.
        </p>
      </div>
      <div
        class="rounded-3xl border border-myDark-100 p-8 py-6 col-span-2 col-start-2"
      >
        <div class="flex items-center gap-x-4 mb-2">
          <div class="p-2 border border-myDark-100 rounded-full w-fit">
            <TwitterLogo class="w-5" />
          </div>
          <hr class="w-full p-y-2" />
        </div>
        <p class="leading-8 font-light text-base">
            <!-- The strugel and journy to learn  -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias
          exercitationem. Odit qui deserunt error ab ea aspernatur eligendi
          voluptas alias, modi et nobis. Est sed amet dolore earum sequi vel,
          aperiam libero quaerat sunt iure sapiente praesentium inventore
          dolorem numquam quisquam quia quod, iusto rerum reiciendis corrupti
          debitis ut.
        </p>
      </div>
      <div
        class="/bg-myDark-100 rounded-3xl border border-myDark-100 /text-myWhite p-8 /w-[55%] col-span-2"
      >
        <p class="leading-8 font-light text-base">
            <!-- The present and idk what else -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias
          exercitationem. Odit qui deserunt error ab ea aspernatur eligendi
          voluptas alias, modi et nobis. Est sed amet dolore earum sequi vel,
          aperiam libero quaerat sunt iure sapiente praesentium inventore
          dolorem numquam quisquam quia quod, iusto rerum reiciendis corrupti
          debitis ut.
        </p>
      </div>
      <div
        class="/bg-myDark-100 rounded-3xl border border-myDark-100 /text-myWhite p-8 /w-[55%] col-span-2 col-start-2"
      >
        <p class="leading-8 font-light text-base">
            <!-- The future vision and how you want to grow as dev -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias
          exercitationem. Odit qui deserunt error ab ea aspernatur eligendi
          voluptas alias, modi et nobis. Est sed amet dolore earum sequi vel,
          aperiam libero quaerat sunt iure sapiente praesentium inventore
          dolorem numquam quisquam quia quod, iusto rerum reiciendis corrupti
          debitis ut.
        </p>
      </div>
    </div>
  </section>
</template>
