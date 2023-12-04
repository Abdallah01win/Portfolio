<script setup>
import GithubLogo from "@/components/icons/GithubLogo.vue";
import LinkedInLogo from "@/components/icons/LinkedInLogo.vue";
import TwitterLogo from "@/components/icons/TwitterLogo.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="bg-myDark mesh">
    <footer
      class="3xs:max-w-[320px] 2xs:max-w-[360px] xs:max-w-[390px] sm:max-w-[475px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto text-white">
      <div class="py-16">
        <div class="flex items-center mb-12 md:mb-16">
          <div class="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-primaryBold">
            Let's elevate your business!
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-[1fr,0.7fr] gap-y-10 md:gap-y-0">
          <div>
            <div class="flex items-center gap-x-6 mb-3">
              <RouterLink to="/" class="font-bold text-xl">Abdallah<span class="text-myGray-200 italic">Bari</span>
              </RouterLink>
            </div>
            <p class="md:w-[70%] text-myGray-200 leading-7 mb-8">
              Feel free to reach-out to me on these platforms or follow me for
              updates on current and future projects.
            </p>

            <div class="flex items-center gap-x-6">
              <span class="hover:scale-[1.1] transition-all">
                <a href="https://github.com/Abdallah01win" target="_blank" title="GitHub">
                  <GithubLogo class="w-6 fill-white" />
                </a>
              </span>
              <span class="hover:scale-[1.1] transition-all">
                <a href="https://twitter.com/AbdallahDev01" target="_blank" title="Twitter">
                  <TwitterLogo class="w-6 fill-white" />
                </a>
              </span>
              <span class="hover:scale-[1.1] transition-all">
                <a href="https://www.linkedin.com/in/abdallahbari" target="_blank" title="LinkedIn">
                  <LinkedInLogo class="w-6 fill-white" />
                </a>
              </span>
            </div>
          </div>

          <div class="flex items-start gap-x-14 md:justify-end">
            <div>
              <div class="text-xl tracking-wide mb-4">Links</div>
              <ul class="text-myGray-200 flex flex-col gap-y-3">
                <li class="hover:text-white">
                  <a href="#about">About me</a>
                </li>
                <li class="hover:text-white">
                  <a href="#services">Services</a>
                </li>
                <li class="hover:text-white">
                  <a href="#projects">Projects</a>
                </li>
              </ul>
            </div>
            <div>
              <div class="text-xl tracking-wide mb-4">Legal</div>
              <ul class="text-myGray-200 flex flex-col gap-y-3">
                <li class="hover:text-white">
                  <span>Approach</span>
                </li>
                <li class="hover:text-white">
                  <span>Agreement</span>
                </li>
                <li class="hover:text-white">
                  <span>Privacy Policy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="text-sm md:text-base text-center py-8 tracking-wide text-myGray-200 border-t border-myGray-200/30">
        &#169; Copyright 2023 Abdallah Bari. All rights reserved.
      </div>
    </footer>
  </section>
</template>

<style scoped>
.mesh {
  background-image: url("@/assets/images/Texture.png"),
    radial-gradient(at 38% 145%, rgb(97, 34, 214) 0, hsla(240, 85%, 69%, 0) 50%),
    radial-gradient(at 130% 110%,
      rgb(59, 104, 230) 0,
      hsla(192, 91%, 57%, 0) 50%);
}
</style>
