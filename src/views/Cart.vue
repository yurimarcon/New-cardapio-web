<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted } from 'vue';
import ItemCart from '../components/Cart/ItemCart.vue'
import { useCartStore } from '../stores/cart'
import { useNavigationStore } from '../stores/navigation'

const cart = useCartStore();
const navigation = useNavigationStore();

onMounted(()=>{
    navigation.setAcctive(1)
})
</script>

<template>
    <v-container fluid>
        <v-row
        class="d-flex aling-center justify-center"
        >
            <h1 class="">Carrinho</h1>
        </v-row>
        <v-divider class="mt-4 mb-6"/>
        <v-row class="mb-16">
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
        class="animate__animated animate__fadeInUp d-flex align-center flex-column"
        >
            <v-img
            width="250"
            src="./images/emptyCart.svg"
            class="mt-10 mb-6"
            ></v-img>
            Carrinho vazio.
        </div>

    </v-container>
</template>

<style>

</style>