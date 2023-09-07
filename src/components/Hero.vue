<script setup>
import Navigation from "@/components/Navigation.vue";
import GithubLogo from "@/components/icons/GithubLogo.vue";
import LinkedInLogo from "@/components/icons/LinkedInLogo.vue";
import TwitterLogo from "@/components/icons/TwitterLogo.vue";

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
    <section class="bg-myDark-100 text-white mesh">
        <Navigation />
        <div>
            <div class="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto py-16 relative">
                <div>
                    <div class="font-primaryBold ">
                        <div class="text-[10rem] h-[165px] flex items-center">Keep</div>
                        <div class="text-myGray-500 mask block text-[10rem]">
                            <span data-show>Dreaming.</span>
                            <span>Learning.</span>
                            <span>Working.</span>
                            <span>Achieving.</span>
                        </div>
                    </div>

                    <p class="w-[80%] font-primary text-2xl leading-9">My name is Abdallah Bari. I'm a Self-thought software
                        engineer and web developer with an undying passion for innovation. I utilize my experties in the
                        digital
                        landscape to help businesses gain an edge over the competition.</p>
                </div>
                <div class="flex flex-col items-center gap-x-8 w-fit absolute bottom-0 right-0 py-16 h-full">
                    <div class="h-full border-r border-myGray-500 mb-4"></div>
                    <div class="flex flex-col items-center gap-y-4">
                        <div>
                            <a href="https://github.com/Abdallah01win" target="_blank">
                                <GithubLogo class="w-6 fill-white" />
                            </a>
                        </div>
                        <div>
                            <a href="https://twitter.com/AbdallahDev01" target="_blank">
                                <TwitterLogo class="w-6 fill-white" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/abdallahbari/" target="_blank">
                                <LinkedInLogo class="w-6 fill-white" />
                            </a>
                        </div>
                    </div>
                    <div class="h-full border-r border-myGray-500 mt-4"></div>
                </div>
            </div>
        </div>
    </section>
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

.mesh {
    background-image: url('../assets/images/Texture.png'), radial-gradient(at 10% 97%, hsla(240, 85%, 69%, 1) 0, hsla(240, 85%, 69%, 0) 50%),
        radial-gradient(at 51% 95%, hsla(192, 91%, 57%, 1) 0, hsla(192, 91%, 57%, 0) 50%),
        radial-gradient(at 52% 49%, hsla(271, 89%, 65%, 1) 0, hsla(271, 89%, 65%, 0) 50%);
    /* rest of your CSS properties... */




    /* background-image: radial-gradient(at 21% 59%, hsla(225, 88%, 50%, 1) 0, hsla(225, 88%, 50%, 0) 50%),
        radial-gradient(at 2% 68%, hsla(249, 95%, 63%, 1) 0, hsla(249, 95%, 63%, 0) 50%),
        radial-gradient(at 66% 35%, hsla(219, 90%, 51%, 1) 0, hsla(219, 90%, 51%, 0) 50%); */

    /* background-image: radial-gradient(at 9% 48%, hsla(259, 88%, 58%, 1) 0, hsla(259, 88%, 58%, 0) 50%),
        radial-gradient(at 28% 66%, hsla(238, 95%, 65%, 1) 0, hsla(238, 95%, 65%, 0) 50%),
        radial-gradient(at 35% 0%, hsla(220, 92%, 52%, 1) 0, hsla(220, 92%, 52%, 0) 50%); */
}
</style>