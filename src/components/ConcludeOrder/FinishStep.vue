<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    handleBackStart: Function,
    handleFinishOrder: Function
})

</script>

<template>
    <v-container fluid>
        <h1 class="text-center">Enviar pedido?</h1>
        <hr class="mb-2">
        <v-row class="mt-2">
            
            <v-col 
            cols="12"
            class="text-center"
            >
                <span class="mt-10">
                    Seu pedido será enviado, se necessário, você poderá entrar em contato diretamente com o estabelecimento.
                </span>
            </v-col>
            
        </v-row>
        <v-row class="mt-16">
            <v-col
            cols="5"
            class="d-flex align-center flex-column"
            >
                <v-card
                class="d-flex align-center flex-column pa-4 cardSenderMethod"
                max-width="200"
                @click="props.handleBackStart()"
                >
                    <v-icon 
                    icon="mdi-step-backward-2"
                    size="70"
                    ></v-icon>
                    <strong>Voltar</strong>
                </v-card>
            </v-col>
            <v-col 
            cols="2"
            class="d-flex align-center flex-column pa-4"
            >
                <span class="mt-10">ou</span>
            </v-col>
            <v-col 
            cols="5"
            class="d-flex align-center flex-column"
            >
                <v-card 
                class="d-flex align-center flex-column pa-4 cardSenderMethod"
                max-width="200"
                @click="props.handleFinishOrder()"
                >
                    <v-icon 
                    icon="mdi-thumb-up-outline"
                    size="70"
                    ></v-icon>
                    <strong>Eviar</strong>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
*{
    color: rgb(107, 107, 107);
}
.cardSenderMethod{
    cursor: pointer;
}
.cardSenderMethod :hover{
    margin: 2px;
}
</style>