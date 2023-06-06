<script>
import ArrowUp from './icons/ArrowUp.vue';
import ArrowDown from './icons/ArrowDown.vue';
import GithubLogo from './icons/GithubLogo.vue';
import LinkedInLogo from './icons/LinkedInLogo.vue';
import TwitterLogo from './icons/TwitterLogo.vue';
import { ref, onMounted } from 'vue';

export default {
    components: {
        ArrowUp,
        ArrowDown,
        GithubLogo,
        LinkedInLogo,
        TwitterLogo,
    },
    setup() {

        const circleTextRef = ref(null);
        onMounted(() => {
            if (circleTextRef.value) {
                circleTextRef.value.innerHTML = circleTextRef.value.innerText
                    .split("")
                    .map((char, i) => `<span style="transform:rotate(${i * 8.3}deg); transform-origin:0px 100px;" class="absolute left-[50%]">${char}</span>`)
                    .join("");
            }
        });
        return {
            circleTextRef,
        };
    }
}

</script>
<template>
    <main class="xl:max-w-[1024px] mx-auto py-24 /hero relative">
        <div>
            <div class="text-7xl font-bold">
                Design. Development. <span class="text-myGray-500 italic">Mastership</span>
            </div>
            <p class="xl:max-w-[60%] my-12 leading-8 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et, ipsum, blanditiis asperiores at non ad
                earum provident officia.
            </p>
            <div class="flex items-center gap-x-4 font-normal">
                <button class="rounded-full py-2 px-10 bg-myDark-100 text-myWhite flex items-center gap-x-2">
                    <span>Contact</span>
                    <span>
                        <ArrowUp class="w-5" />
                    </span>
                </button>
                <button class="border border-myDark-100 rounded-full py-2 px-10 flex items-center gap-x-2">
                    <span>Projects</span>
                    <span>
                        <ArrowDown class="w-5" />
                    </span>
                </button>
            </div>
        </div>
        <div class="flex gap-x-8 w-fit absolute bottom-0 right-0 pb-24 /translate-y-[-50%]">
            <!-- <div class="flex items-center justify-center w-[200px] h-[200px] rounded-full border border-myDark-100 relative">
                <div class="w-full h-full absolute">
                    <div ref="circleTextRef" class="text">Abdallah Bari - Web Development</div>
                </div>
                <ArrowUp class="w-8" />
            </div> -->
            <div class="flex flex-col items-center /justify-evenly gap-y-4">
                <!-- <div class="/h-14 border-r border-myDark-100 mb-1"></div> -->
                <div>
                    <a href="https://github.com/Abdallah01win" target="_blank">
                        <GithubLogo class="w-6 fill-myDark-100" />
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/AbdallahDev01" target="_blank">
                        <TwitterLogo class="w-6 fill-myDark-100" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/abdallahbari/" target="_blank">
                        <LinkedInLogo class="w-6 fill-myDark-100" />
                    </a>
                </div>

                <div class="h-16 border-r border-myDark-100 mt-1"></div>
            </div>
        </div>
    </main>
</template>

<style scoped>

.text span{
    transform-origin: 0 100px;
}
.hero {
    background-color: hsla(151, 0%, 100%, 1);
    background-image:
        radial-gradient(at 91% 62%, hsla(339, 61%, 76%, 1) 0px, transparent 50%),
        radial-gradient(at 27% 83%, hsla(194, 61%, 71%, 1) 0px, transparent 50%),
        radial-gradient(at 98% 90%, hsla(3, 92%, 62%, 1) 0px, transparent 50%),
        radial-gradient(at 75% 12%, hsla(247, 69%, 69%, 1) 0px, transparent 50%),
        radial-gradient(at 51% 79%, hsla(265, 90%, 69%, 1) 0px, transparent 50%),
        radial-gradient(at 0% 65%, hsla(253, 64%, 69%, 1) 0px, transparent 50%),
        radial-gradient(at 77% 74%, hsla(264, 78%, 78%, 1) 0px, transparent 50%);
}
</style>