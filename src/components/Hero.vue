<script setup>
import Navigation from "@/components/Navigation.vue";

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
    <section class="bg-myDark-100 text-white mesh h-screen">
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
            </div>
        </div>
    </section>
</template>


<style scoped>
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
    background-image: url('@/assets/images/Texture.png'),
        radial-gradient(at 41% 145%, rgb(97, 34, 214) 0, hsla(240, 85%, 69%, 0) 50%),
        radial-gradient(at 130% 110%, rgb(59, 104, 230) 0, hsla(192, 91%, 57%, 0) 50%);
}
</style>