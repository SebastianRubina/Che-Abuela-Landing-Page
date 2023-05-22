<template>
    <div id="hero"
        class="flex flex-col-reverse px-6 lg:px-24 xl:px-48 lg:flex-row justify-center md:justify-start items-center h-screen">
        <div class="flex flex-col md:w-1/2">
            <h1 class="text-5xl md:text-7xl font-extrabold">CHE ABUELA!</h1>
            <h2 class="text-xl md:text-2xl font-light mt-4">El tradicional alfajor <span
                    class="border-b-4 border-[#6BADE4]">Argentino</span></h2>
            <div class="my-2 border-b-[1px] border-[#242424]"></div>
            <p class="font-light text-sm">La auténtica receta de los alfajores y dulce de leche de la Abuela, disponibles en
                Dulce
                de Leche, Lúcuma,
                Vainilla y Fudge.</p>
            <a href="#orders"
                class=" cursor-pointer border-2 border-[#eee] mt-8 text-[#eee] bg-[#242424] w-fit px-6 py-1 text-xl rounded-sm hover:bg-[#eee] hover:text-[#242424] hover:border-[#242424] transition-all duration-300">Pide
                Ahora!</a>

        </div>
        <img class="md:w-1/2" src="/images/layout/MainImage.png" alt="Foto de Alfajor">
        <div class="hidden md:flex gap-4 items-center absolute bottom-10">
            <a href="https://www.instagram.com/cheabuela/" target="_blank">
                <Icon name="ri:instagram-fill" color="#242424" size="36" class="cursor-pointer" />
            </a>
            <a href="https://wa.me/51962714482?text=Hola!%20Quisiera%20hacer%20un%20pedido%20de%20Che%20Abuela!"
                target="_blank">
                <Icon name="ri:whatsapp-fill" color="#242424" size="32" class="cursor-pointer" />
            </a>
            <a href="https://m.facebook.com/people/Che-Abuela/100057447879403/" target="_blank">
                <Icon name="ri:facebook-circle-fill" color="#242424" size="32" class="cursor-pointer" />
            </a>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
h2 span {
    display: inline-block;
    line-height: 0.75em;
}
</style>