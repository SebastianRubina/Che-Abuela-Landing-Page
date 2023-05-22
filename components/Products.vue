<template>
    <div id="products" class="flex flex-col px-6 py-16 lg:px-24 xl:px-48 bg-cover bg-center md:bg-right-top">
        <h2 class="text-[#242424] font-bold text-4xl mb-4 md:mb-6">Nuestros Postres</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="product in products">
                <div class="relative">
                    <h3 class="absolute top-4 py-1 px-2 border- bg-[#eee] font-bold text-md md:text-lg rounded-e-xl">{{
                        product.name }}
                    </h3>
                    <img class="rounded-xl aspect-square object-cover object-center shadow-xl"
                        :src="'/images/layout/products/' + product.image" alt="Product Image">
                </div>
                <p class="text-center mt-1 text-sm md:text-base">{{ product.description }}</p>
                <p class="text-center font-light text-sm md:text-base">S/. {{ product.price.toFixed(2) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const products = [
    {
        name: "Clásico",
        description: "El clásico que nunca falla, relleno de Dulce de Leche hecho en casa!",
        price: 6,
        image: "Clasico.jpg"
    },
    {
        name: "Lúcuma",
        description: "El clásico que nunca falla, relleno de Dulce de Leche hecho en casa!",
        price: 6,
        image: "Lucuma.jpg"
    },
    {
        name: "Fudge",
        description: "El clásico que nunca falla, relleno de Dulce de Leche hecho en casa!",
        price: 6,
        image: "Fudge.jpg"
    },
    {
        name: "Canela",
        description: "El clásico que nunca falla, relleno de Dulce de Leche hecho en casa!",
        price: 6,
        image: "Canela.jpg"
    },
    {
        name: "Dulce de Leche",
        description: "El clásico que nunca falla, relleno de Dulce de Leche hecho en casa!",
        price: 6,
        image: "DulceDeLeche.jpg"
    },
    {
        name: "Fudge Artesanal",
        description: "El clásico que nunca falla, relleno de Dulce de Leche hecho en casa!",
        price: 6,
        image: "FudgeArtesanal.jpg"
    },
    {
        name: "Che Pibitos",
        description: "El clásico que nunca falla, relleno de Dulce de Leche hecho en casa!",
        price: 6,
        image: "ChePibitos.jpg"
    },
    {
        name: "Rogel",
        description: "El clásico que nunca falla, relleno de Dulce de Leche hecho en casa!",
        price: 6,
        image: "Rogel.jpg"
    },
]
</script>

<style scoped></style>