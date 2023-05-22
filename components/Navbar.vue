<template>
    <nav class="px-6 lg:px-24 py-2 xl:px-48 md:py-4 flex items-center justify-between fixed w-full z-50 duration-300 ease-in-out"
        :class="showMobileNav ? 'bg-[#242424]' : 'bg-[#fbf6f2] shadow-sm'">
        <a href="#hero" @click="() => showMobileNav = false" class="font-semibold text-xl"
            :class="showMobileNav ? 'text-[#eee]' : 'text-[#242424]'">Che
            Abuela</a>
        <div class="hidden md:flex gap-8 text-md">
            <a class="font-light mx-4 border-b-2 border-transparent hover:border-[#242424] transition-all duration-300"
                href="#about">Nosotros</a>
            <a class="font-light mx-4 border-b-2 border-transparent hover:border-[#242424] transition-all duration-300"
                href="#products">Postres</a>
            <a class="font-light mx-4 border-b-2 border-transparent hover:border-[#242424] transition-all duration-300"
                href="#orders">Pedidos</a>
            <a class="font-light mx-4 border-b-2 border-transparent hover:border-[#242424] transition-all duration-300"
                href="#faq">FAQ</a>
        </div>
        <div class="flex md:hidden text-lg z-8 ml-auto" @click="() => showMobileNav = !showMobileNav">
            <Icon name="ri:menu-3-fill" size="30" :color="showMobileNav ? '#eee' : '#242424'" />
        </div>
    </nav>
    <div class="h-screen px-6 w-full flex flex-col items-end fixed bg-[#242424] z-10 duration-300 ease-in-out top-8"
        :class="showMobileNav ? 'left-0' : 'left-[-100%]'">
        <div class="flex flex-col gap-8 text-3xl text-right mt-16">
            <a class="font-semibold text-[#eee]" href="#about" @click="() => showMobileNav = false">Nosotros</a>
            <a class="font-semibold text-[#eee]" href="#products" @click="() => showMobileNav = false">Postres</a>
            <a class="font-semibold text-[#eee]" href="#orders" @click="() => showMobileNav = false">Pedidos</a>
            <a class="font-semibold text-[#eee]" href="#faq" @click="() => showMobileNav = false">FAQ</a>
        </div>
        <div class="gap-4 items-end flex flex-col mt-16">
            <div class="flex items-center gap-2 text-[#eee]">
                <p>@cheabuela</p>
                <Icon name="ri:instagram-fill" color="#eee" size="36" class="cursor-pointer" />
            </div>
            <div class="flex items-center gap-2 text-[#eee]">
                <p>+51 987 123 432</p>
                <Icon name="ri:whatsapp-fill" color="#eee" size="32" class="cursor-pointer" />
            </div>
            <div class="flex items-center gap-2 text-[#eee]">
                <p>Che Abuela</p>
                <Icon name="ri:facebook-circle-fill" color="#eee" size="32" class="cursor-pointer" />
            </div>
        </div>
    </div>
</template>

<script setup>
const showMobileNav = ref(false);

</script>

<style scoped></style> 