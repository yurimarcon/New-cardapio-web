<script setup>
import { useGenericDataStore } from '../../stores/genericData'
import { reactive } from 'vue';

const genericData = useGenericDataStore();

const delivery = reactive({
    type: 'delivery',
    description: 'Delivery'
})

</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col cols="2">
                <v-avatar
                  size="56px"
                >
                  <v-img
                    alt="Avatar"
                    :src="genericData.genericData.logo"
                  ></v-img>
                </v-avatar>
            </v-col>
            <v-col class="text-left ms-2 d-flex align-start flex-column">
                <strong 
                v-html="genericData.genericData.name"
                ></strong>
                <v-btn
                color="red"
                variant="outlined"
                size="small"
                >
                    Adicionar mais itens
                </v-btn>
            </v-col>
        </v-row>
        <hr class="my-4">
        <v-row dense>
            <v-col cols="12">
                <h2>Resumo do pedido</h2>
            </v-col>
            <v-col cols="9">
                <strong>Subtotal</strong>
            </v-col>
            <v-col cols="3">
                <strong>R$0,99</strong>
            </v-col>
            <v-col cols="9">
                <strong>Frete</strong>
            </v-col>
            <v-col cols="3">
                <strong>Grátis</strong>
            </v-col>
            <v-col cols="9">
                <strong>Total</strong>
            </v-col>
            <v-col cols="3">
                <strong>R$0,99</strong>
            </v-col>
        </v-row>
        <hr class="my-4">
        <v-row dense>
            <v-col cols="12">
                <h2>Forma de pagamento</h2>
            </v-col>
            <v-col cols="2">
                <v-avatar
                  size="56px"
                >
                  <v-img
                    alt="Avatar"
                    src="https://logospng.org/download/pix/logo-pix-icone-256.png"
                  ></v-img>
                </v-avatar>
            </v-col>
            <v-col class="text-left ms-2 d-flex align-center">
                <strong 
                v-html="'PIX'"
                ></strong>
            </v-col>
            <v-col cols="3">
                <v-btn
                color="red"
                variant="outlined"
                size="small"
                >
                    Alterar
                </v-btn>
            </v-col>
        </v-row>
        <hr class="my-4">
        <v-row dense>
            <v-col cols="12">
                <h2>Tipo de entrega</h2>
            </v-col>
            <v-col cols="2">
                <v-avatar
                  size="56px"
                >
                  <v-img
                    alt="Avatar"
                    :src="delivery.type == 'delivery'
                        ? './images/delivery.png'
                        : './images/retirar.png'"
                  ></v-img>
                </v-avatar>
            </v-col>
            <v-col class="text-left ms-2 d-flex align-center">
                <strong 
                v-html="delivery.description"
                ></strong>
            </v-col>
            <v-col cols="3">
                <v-btn
                color="red"
                variant="outlined"
                size="small"
                >
                    Alterar
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
*{
    color: rgb(107, 107, 107);
}
</style>