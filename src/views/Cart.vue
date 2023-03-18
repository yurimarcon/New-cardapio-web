<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import ItemCart from '../components/Cart/ItemCart.vue'
import { useCartStore } from '../stores/cart'

const cart = useCartStore();

</script>

<template>
    <v-container fluid>
        <v-row
        class="d-flex aling-center justify-center"
        >
            <h1 class="">Carrinho</h1>
        </v-row>
        <v-divider class="mt-4 mb-6"/>
        <v-row>
            <v-col
            v-for="item in cart.items"
            :key="item.id"
            >
                <ItemCart
                :product="item"
                ></ItemCart>
            </v-col>
        </v-row>
        <div
        v-if="!cart.items.length"
        class="animate__animated animate__fadeIn d-flex align-center flex-column"
        >
            <v-img
            width="100"
            src="../assets/images/empty.svg"
            ></v-img>
            Carrinho vazio...
        </div>

    </v-container>
</template>

<style>

</style>