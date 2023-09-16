<script setup>
import Navigation from "@/components/Navigation.vue";
import ArrowDown from "@/components/icons/ArrowDown.vue";

import { ref, onMounted } from 'vue';

const ring = ref(null);
const options = {
    text: 'Circular text with CSS Trigonometric functions • ',
    size: 1,
    spacing: 1,
};

const onUpdate = () => {
    ring.value.innerHTML = '';
    const CHARS = options.text.split('');
    ring.value.style.setProperty('--total', CHARS.length);
    ring.value.style.setProperty('--character-width', options.spacing);
    ring.value.style.setProperty('--font-size', options.size + 'rem');
    const HIDDEN_CHARS = document.createElement('span');
    HIDDEN_CHARS.setAttribute('aria-hidden', 'true');

    for (let c = 0; c < CHARS.length; c++) {
        HIDDEN_CHARS.innerHTML += `<span style="--index: ${c}">${CHARS[c]}</span>`;
    }
    ring.value.appendChild(HIDDEN_CHARS);
    ring.value.innerHTML += `<span class="sr-only">${options.text}</span>`;
};

onMounted(() => {
    ring.value = document.querySelector('.text-ring');
    onUpdate();
});

const ringStyle = {
    '--total': '0',
    '--character-width': '0',
    '--font-size': '0rem',
};
</script>

<template>
    <section class="bg-myDark-100 text-white mesh relative overflow-hidden h-screen">
        <Navigation ref="nav" />
        <div class="border border-myGray-400/10 p-72 rounded-full absolute -left-28 -bottom-36"></div>
        <div class="border border-myGray-400/10 p-80 rounded-full absolute left-[8%] bottom-[-50%]"></div>
        <div class="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto pt-28 pb-16">
            <div class="text-6xl font-primaryBold leading-[1.3] tracking-wide mb-10">
                Your Digital Transformation Partner to Rise Above the Competition.
            </div>
            <p class="leading-8 text-xl text-myGray-400 w-[70%]">
                I am dedicated to being your
                trusted digital transformation partner. Together, we'll navigate the ever-evolving digital
                landscape,
                implementing strategies that not only.
            </p>

            <div class="flex items-center justify-end">
                <div class="cursor-pointer rounded-full grid place-content-center p-16 glass
                        hover:scale-[1.1] transition-all">
                    <ArrowDown class="w-12 fill-white" />
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="text-ring">
            <div ref="ring" :style="ringStyle"></div>
        </div>
    </section>
</template>


<style scoped>
.mesh {
    background-image: url('@/assets/images/Texture.png'),
        radial-gradient(at 41% 145%, rgb(97, 34, 214) 0, hsla(240, 85%, 69%, 0) 50%),
        radial-gradient(at 130% 110%, rgb(59, 104, 230) 0, hsla(192, 91%, 57%, 0) 50%);
}

.glass {
    background: rgba(255, 255, 255, 0.02);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.8px);
    -webkit-backdrop-filter: blur(4.8px);
}

/* Colors */
:root {
    --gray-0: #f8f9fa;
    --gray-1: #f1f3f5;
    --gray-2: #e9ecef;
    --gray-3: #dee2e6;
    --gray-4: #ced4da;
    --gray-5: #adb5bd;
    --gray-6: #868e96;
    --gray-7: #495057;
    --gray-8: #343a40;
    --gray-9: #212529;
    --gray-10: #16191d;
    --gray-11: #0d0f12;
    --gray-12: #030507;

    /* Text Colors */
    --text-1: var(--gray-12);
    --text-2: var(--gray-10);
    --text-3: var(--gray-8);
    --text-4: var(--gray-7);

    /* Surface Colors */
    --surface-1: var(--gray-0);
    --surface-2: var(--gray-1);
    --surface-3: var(--gray-2);
    --surface-4: var(--gray-3);
}

@media (prefers-color-scheme: dark) {
    :root {
        /* Dark Mode Text Colors */
        --text-1: var(--gray-1);
        --text-2: var(--gray-3);
        --text-3: var(--gray-5);
        --text-4: var(--gray-6);

        /* Dark Mode Surface Colors */
        --surface-1: var(--gray-10);
        --surface-2: var(--gray-9);
        --surface-3: var(--gray-8);
        --surface-4: var(--gray-7);
    }
}

/* Global Styles */
*,
*:after,
*:before {
    box-sizing: border-box;
}

body {
    display: grid;
    place-items: center;
    min-height: 100vh;
    font-family: 'Google Sans', sans-serif, system-ui;
    overflow: hidden;
    background: var(--surface-3);
    color: var(--text-2);
}

.aside {
    position: fixed;
    padding: 1rem;
    border: 2px solid hsl(45 80% 50%);
    background: #fff;
    color: #222;
    z-index: 2;
    top: 1rem;
    left: 1rem;
}

@supports (top: calc(sin(1) * 1px)) {
    .aside {
        display: none;
    }
}

/* Text Ring Styles */
.text-ring {
    position: relative;
}

.text-ring [style*="--index"] {
    /* In "ch" units */
    --inner-angle: calc((360 / var(--total)) * 1deg);
    --radius: calc((var(--character-width, 1) / sin(var(--inner-angle))) * -1ch);
    font-weight: bold;
    font-family: monospace;
    text-transform: uppercase;
    font-size: calc(var(--font-size, 2) * 1rem);
    position: absolute;
    top: 50%;
    left: 50%;
    transform:
        translate(-50%, -50%) rotate(calc(var(--inner-angle) * var(--index))) translateY(var(--radius, -5ch));
}

/* Dat.GUI Styles */
.dg :is(.cr.string, .cr.number) input[type="text"] {
    color: white;
    line-height: 1;
}

/* Screen Reader Styles */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
</style>