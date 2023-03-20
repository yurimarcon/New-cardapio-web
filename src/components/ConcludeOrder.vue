<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useCartStore } from '../stores/cart'

const cart = useCartStore();

</script>

<template>
    <v-row
    v-if="cart.items.length"
    >
        <v-card
        class="bannerConcludeOrder"
        >
            <v-btn
            color="red"
            variant="flat"
            block
            >
                <v-col cols="2">
                    <v-icon>mdi-storefront-check</v-icon>
                </v-col>
                <v-col cols="8">
                    Fechar Pedido
                </v-col>
                <v-col cols="2">
                    R$ {{ cart.getCartValue }}
                </v-col>
            </v-btn>
        </v-card>
    </v-row>
</template>

<style scoped>
.bannerConcludeOrder{
    margin: 0 0 0 11.5px !important;
    padding: 10px;
    position: fixed;
    z-index: 1;
    bottom: 55px;
    width: 100%;
}
</style>