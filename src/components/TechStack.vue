<script>
import Js from "./icons/Js.vue";
import VueLogo from "./icons/VueLogo.vue";
import LaravelLogo from "./icons/LaravelLogo.vue";
import PythonLogo from "./icons/PythonLogo.vue";
import HtmlLogo from "./icons/HtmlLogo.vue";
import CssLogo from "./icons/CssLogo.vue";
import SassLogo from "./icons/SassLogo.vue";
import PhpLogo from "./icons/PhpLogo.vue";
import CLogo from "./icons/CLogo.vue";
import GitLogo from "./icons/GitLogo.vue";

export default {
  components: {
    Js,
    VueLogo,
    LaravelLogo,
    PythonLogo,
    HtmlLogo,
    CssLogo,
    SassLogo,
    CssLogo,
  },
  setup() {
    const technologies = [
      { name: "Laravel", logo: "LaravelLogo", image: null },
      { name: "Vue", logo: "VueLogo", image: null },
      { name: "Javascript", logo: "Js", image: null },
      { name: "PHP", logo: null, image: "src/assets/svg/php-logo.svg" },
      { name: "MySQL", logo: null, image: "src/assets/svg/mysql-official.svg" },
      { name: "Git", logo: null, image: "src/assets/svg/git-icon.svg" },
      { name: "Python", logo: "PythonLogo", image: null },
      {
          name: "Tailwind",
          logo: null,
          image: "src/assets/svg/tailwind-logo.svg",
        },
        { name: "SASS", logo: "SassLogo", image: null },
        { name: "C", logo: null, image: "src/assets/svg/c-logo.svg" },
        { name: "HTML", logo: "HtmlLogo", image: null },
        { name: "CSS", logo: "CssLogo", image: null },
    ];

    return {
      technologies,
    };
  },
};
</script>
<template>
  <section class="xl:max-w-[1024px] mx-auto my-12">
    <h2 class="text-3xl font-bold mb-8">
      <span>Featured </span>
      <span class="text-myGray-500 italic">Technologies</span>
    </h2>

    <div class="grid grid-cols-4 gap-6">
      <div
        class="border border-myDark-100 rounded-full flex items-center justify-center"
        v-for="tech in technologies"
        :key="tech.name"
      >
        <span class="flex items-center justify-center gap-x-3 py-2">
          <component
            v-if="tech.logo"
            :is="tech.logo"
            class="w-6 fill-myDark-100"
          />
          <img v-else :src="tech.image" :alt="tech.name" class="w-6" />
          <span class="font-normal">
            {{ tech.name }}
          </span>
        </span>
      </div>
    </div>

    <!-- <div class="flex items-center gap-x-10 mt-10">
            <div class="flex items-center gap-x-3">
                <span class="text-6xl font-bold">02+</span>
                <span class="text-lg uppercase flex flex-col text-myGray-500 justify-evenly">
                    <span>Years of</span>
                    <span>experiance</span>
                </span>
            </div>
        </div> -->
  </section>
</template>
