<script setup>
import ArrowUp from './icons/ArrowUp.vue';
import ArrowDown from './icons/ArrowDown.vue';
import GithubLogo from './icons/GithubLogo.vue';
import LinkedInLogo from './icons/LinkedInLogo.vue';
import TwitterLogo from './icons/TwitterLogo.vue';

setInterval(function () {
    const show = document.querySelector('.mask span[data-show]')
    const next = show.nextElementSibling || document.querySelector('.mask span:first-child')
    const up = document.querySelector('span[data-up]')

    if (up) {
        up.removeAttribute('data-up')
    }

    show.removeAttribute('data-show')
    show.setAttribute('data-up', '')

    next.setAttribute('data-show', '')
}, 2000)
</script>

<template>
    <main class="xl:max-w-[1024px] mx-auto py-16 relative">
        <div>
            <div class="font-primaryBold">
                <div class="text-[10rem] h-[165px] flex items-center">Keep</div>
                <div class="text-myGray-500 mask block text-[10rem]">   
                    <span data-show>Dreaming.</span>
                    <span>Learning.</span>
                    <span>Working.</span>
                    <span>Achieving.</span>
                </div>
            </div>

            <p class="w-[80%] font-primary text-2xl leading-9">My name is Abdallah Bari. I'm a Self-thought software
                engineer and web developer with an undying passion for innovation. I utilize my experties in the digital
                landscape to help businesses gain an edge over the competition.</p>
        </div>
        <div class="flex flex-col items-center gap-x-8 w-fit absolute bottom-0 right-0 py-16 h-full">
            <div class="h-full border-r border-myGray-500 mb-4"></div>
            <div class="flex flex-col items-center gap-y-4">
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
            </div>
            <div class="h-full border-r border-myGray-500 mt-4"></div>
        </div>
    </main>
</template>


<style>
.mask {
    height: 186px;
    position: relative;
    overflow: hidden;
    margin-top: 10px;
}

.mask span {
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: 246px;
    height: 100%;
    background: transparent;
    color: #C2C8C1;

    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.mask span[data-show] {
    transform: translateY(-100%);
    transition: .5s transform ease-in-out;
}

.mask span[data-up] {
    transform: translateY(-200%);
    transition: .5s transform ease-in-out;
}
</style>