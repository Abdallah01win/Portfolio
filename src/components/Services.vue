<script>
import Puzzel from './icons/Puzzel.vue';
import Maintainance from './icons/Maintainance.vue';
import Code from './icons/Code.vue';
import Settings from './icons/Settings.vue';
export default {
    components: {
        Puzzel,
        Maintainance,
        Code,
        Settings
    }
}
</script>
<template>
    <Section class="bg-myGray-600 py-8 px-10 rounded-3xl xl:max-w-[1024px] mx-auto">
        <h2 class="text-3xl font-bold mb-6">
            <span>My </span>
            <span class="text-myGray-500 italic">Services</span>
        </h2>

        <div class="flex items-center justify-between gap-x-6">

            <div class="">
                <div class="flex items-center gap-x-3 mb-2">
                    <span class="bg-myWhite rounded-full p-2 grid place-content-center">
                        <Code class="w-5 fill-myDark-100" />
                    </span>
                    <h2 class="font-bold text-lg">Full SDLC</h2>
                </div>
                <p class="leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores repellat totam ea
                    consequuntur obcaecati impedit dolorem vitae at nostrum
                </p>
            </div>
            <div class="">
                <div class="flex items-center gap-x-3 mb-2">
                    <span class="bg-myWhite rounded-full p-2 grid place-content-center">
                        <Settings class="w-5 fill-myDark-100" />
                    </span>
                    <h2 class="font-bold text-lg">Maintainance</h2>
                </div>
                <p class="leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores repellat totam ea
                    consequuntur obcaecati impedit dolorem vitae at nostrum
                </p>
            </div>
            <div class="">
                <div class="flex items-center gap-x-3 mb-2">
                    <span class="bg-myWhite rounded-full p-2 grid place-content-center">
                        <Puzzel class="w-5 fill-myDark-100" />
                    </span>
                    <h2 class="font-bold text-lg">Feature Development</h2>
                </div>
                <p class="leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores repellat totam ea
                    consequuntur obcaecati impedit dolorem vitae at nostrum
                </p>
            </div>
        </div>
    </Section>
</template>