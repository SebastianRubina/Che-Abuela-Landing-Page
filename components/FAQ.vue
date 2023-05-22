<template>
    <div id="faq" class="flex flex-col px-6 py-16 lg:px-24 xl:px-48 bg-[#D6E7F5]">
        <h2 class="text-[#242424] font-bold text-4xl mb-4 md:mb-6">Preguntas Frecuentes</h2>
        <div class="flex flex-col">
            <div v-for="q in faq" class="flex flex-col cursor-pointer" @click="() => q.showAnswer = !q.showAnswer">
                <div class="flex py-4 gap-4">
                    <div class="w-4">
                        <Icon :name="q.showAnswer ? 'ri:subtract-fill' : 'ri:add-fill'" color="#E89E2C" size=24
                            class="cursor-pointer" />
                    </div>
                    <div class="flex flex-col items-start">
                        <p class="font-semibold w-full">{{ q.question }}</p>
                        <p v-if="q.showAnswer" class="text-sm mt-4">{{ q.answer }}</p>
                    </div>
                </div>
                <div class="my-2 border-b-[1px] border-[#aaa]"></div>
            </div>
        </div>
    </div>
</template>

<script setup>

const faq = reactive([
    {
        question: '¿Cuáles son los ingredientes principales de sus alfajores argentinos?',
        answer: 'Nuestros alfajores argentinos se elaboran de manera artesanal utilizando ingredientes de alta calidad, como dulce de leche, maicena y chocolate. La combinación de estos ingredientes cuidadosamente seleccionados crea un sabor único y delicioso en cada bocado.',
        showAnswer: false
    },
    {
        question: '¿Cuál es el tiempo de envío y entrega de los pedidos?',
        answer: 'Nuestros alfajores argentinos se elaboran de manera artesanal utilizando ingredientes de alta calidad, como dulce de leche, maicena y chocolate. La combinación de estos ingredientes cuidadosamente seleccionados crea un sabor único y delicioso en cada bocado.',
        showAnswer: false
    },
    {
        question: '¿Qué métodos de pago están disponibles?',
        answer: 'Nuestros alfajores argentinos se elaboran de manera artesanal utilizando ingredientes de alta calidad, como dulce de leche, maicena y chocolate. La combinación de estos ingredientes cuidadosamente seleccionados crea un sabor único y delicioso en cada bocado.',
        showAnswer: false
    },
    {
        question: '¿Ofrecen opciones para regalos o eventos especiales?',
        answer: 'Nuestros alfajores argentinos se elaboran de manera artesanal utilizando ingredientes de alta calidad, como dulce de leche, maicena y chocolate. La combinación de estos ingredientes cuidadosamente seleccionados crea un sabor único y delicioso en cada bocado.',
        showAnswer: false
    },
])
</script>

<style scoped></style>