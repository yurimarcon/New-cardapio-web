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
            <ItemCart
            v-for="item in cart.items"
            :key="item.id"
            :product="item"
            ></ItemCart>
        </v-row>

    </v-container>
</template>

<style>

</style>