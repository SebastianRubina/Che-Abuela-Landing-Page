<template>
    <div id="orders"
        class="flex flex-col px-6 py-16 lg:px-24 xl:px-48 bg-[url('/images/layout/orders/OrdersBackground.png')] bg-cover bg-center md:bg-right-top">
        <h2 class="text-[#eee] font-bold text-4xl mb-4 md:mb-6">¡Haz tu pedido!</h2>
        <div class="flex flex-col md:flex-row justify-between">
            <p class="text-[#eee] font-light text-md md:w-1/2">
                ¡Haz tu pedido de nuestros deliciosos alfajores argentinos!
                <br /> <br />
                Contáctanos a través de <span class="font-bold">Whatsapp</span>, <span class="font-bold">Instagram</span> o
                <span class="font-bold">Facebook</span> para realizar tu
                pedido de forma rápida y sencilla.
                Simplemente haz clic en cualquiera de los botones de las redes sociales a continuación y estaremos
                encantados
                de atenderte.
                <br /> <br />

                Estamos listos para llevarte el sabor único de Che Abuela. ¡No esperes más y disfruta de nuestros exquisitos
                productos!
            </p>
            <div class="flex flex-col gap-4 justify-center items-center mt-8 md:mt-0">
                <a :href="button.href" target="_blank" v-for="button in orderButtons"
                    class="py-1 bg-[#eee] flex items-center w-64 justify-center gap-2 rounded-lg hover:scale-105 cursor-pointer">
                    <Icon :name="button.icon" color="#242424" :size="button.iconSize.toString()" class="cursor-pointer" />
                    <p>Pide por {{ button.name }}!</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const orderButtons = [
    {
        name: 'Instagram',
        icon: 'ri:instagram-fill',
        iconSize: 32,
        href: 'https://www.instagram.com/cheabuela'
    },
    {
        name: 'WhatsApp',
        icon: 'ri:whatsapp-fill',
        iconSize: 30,
        href: 'https://wa.me/51962714482?text=Hola!%20Quisiera%20hacer%20un%20pedido%20de%20Che%20Abuela!'
    },
    {
        name: 'Facebook',
        icon: 'ri:facebook-circle-fill',
        iconSize: 30,
        href: 'https://m.facebook.com/people/Che-Abuela/100057447879403/'
    },
]
</script>

<style scoped></style>