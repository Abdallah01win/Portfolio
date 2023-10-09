<script setup>
import ArrowUp from "@/components/icons/ArrowUp.vue";
import { onMounted } from 'vue';

onMounted(() => {
  const RING = document.querySelector('.text-circle')

  const OPTIONS = {
    text: "Get in touch and • Let’s get started! ",
    size: 1,
    spacing: 1,
  }

  const onUpdate = () => {
    RING.innerHTML = ''
    const CHARS = OPTIONS.text.split('')
    RING.style.setProperty('--total', CHARS.length)
    RING.style.setProperty('--character-width', OPTIONS.spacing)
    RING.style.setProperty('--font-size', OPTIONS.size)
    const HIDDEN_CHARS = Object.assign(document.createElement('span'), {
      ariaHidden: true,
    })

    for (let c = 0; c < CHARS.length; c++) {
      HIDDEN_CHARS.innerHTML += `<span style="--index: ${c}">${CHARS[c]}</span>`
    }
    RING.appendChild(HIDDEN_CHARS)
    RING.innerHTML += `<span class="sr-only">${OPTIONS.text}</span>`
  }

  onUpdate()
})
</script>

<template>
  <section class="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto mb-28 relative">
    <div>
      <div class="border border-myDark-100 py-2 px-6 w-fit rounded-full text-lg font-semibold mb-10">
        Contact
      </div>

      <p class="w-[90%] font-primary text-5xl font-bold leading-[1.1] tracking-wide pb-20">
        Let's partner-up and witness the transformation of your website into a powerful asset for success.
      </p>
    </div>
    <div class="absolute bottom-0 right-0 w-fit">
      <div
        class="cursor-pointer rounded-full relative grid place-content-center p-16 glass hover:scale-[1.1] transition-all">
        <ArrowUp class="w-12 fill-myDark-100" />
        <span class="text-circle font-semibold text-myDark-100"></span>
      </div>
    </div>
    <!-- <div class="grid grid-cols-[1fr_.5fr]">
      <form action="#" method="post">
        <div class="grid grid-cols-2 gap-x-6">
          <input type="text" placeholder="Name" required
            class="active:outline-none focus:outline-none w-full px-5 py-2.5  rounded-full border border-myGray-500/40 mb-6">
          <input type="text" placeholder="Company"
            class="active:outline-none focus:outline-none w-full px-5 py-2.5  rounded-full border border-myGray-500/40 mb-6">
          <input type="text" placeholder="Email" required
            class="active:outline-none focus:outline-none w-full px-5 py-2.5  rounded-full border border-myGray-500/40 mb-6">
          <input type="text" placeholder="Message" required
            class="active:outline-none focus:outline-none w-full px-5 py-2.5  rounded-full border border-myGray-500/40 mb-6">
          <button type="submit"
            class="bg-myDark-100 text-white text-lg tracking-wide rounded-full py-2 px-8 flex items-center justify-center gap-x-1">
            <span>Send Message</span>
            <span>
              <ArrowUp class="w-5" />
            </span>
          </button>
        </div>
      </form>

      <div></div>
    </div> -->
  </section>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.8px);
  -webkit-backdrop-filter: blur(4.8px);
}
</style>