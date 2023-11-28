<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="bg-myDark-100 text-white mesh relative h-screen">
    <div
      class="border border-myGray-400/10 p-72 rounded-full absolute -left-28 -bottom-36"
    ></div>
    <div
      class="border border-myGray-400/10 p-80 rounded-full absolute left-[8%] bottom-[-50%]"
    ></div>
    <div
      class="max-w-[1024px] 2xl:max-w-[1280px] mx-auto flex flex-col items-center justify-center h-full"
    >
      <div class="text-center text-9xl font-bold leading-[1.1]">
        404 Page Not Found
      </div>
      <RouterLink
        to="/"
        class="border border-white rounded-full w-fit px-10 py-3 mt-5 cursor-pointer active:scale-[0.96] transition-all z-10"
      >
        Go Back Home
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.mesh {
  background-image: url("@/assets/images/Texture.png"),
    radial-gradient(at 41% 145%, rgb(97, 34, 214) 0, hsla(240, 85%, 69%, 0) 50%),
    radial-gradient(
      at 130% 110%,
      rgb(59, 104, 230) 0,
      hsla(192, 91%, 57%, 0) 50%
    );
}
</style>
