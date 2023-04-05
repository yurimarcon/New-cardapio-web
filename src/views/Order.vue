<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useOrderStore } from '../stores/order'
import CardOrder from '../components/Order/CardOrder.vue'

const order = useOrderStore()
console.log("lastOrders", order.lastOrders)

</script>

<template>
    <v-container fluid>
        <v-row
        class="d-flex aling-center justify-center"
        >
            <h1 class="">Pedidos</h1>
        </v-row>
        <v-divider class="mt-4 mb-6"/>
        <v-row class="mb-16">
            <v-col
            v-for="item, index in order.lastOrders"
            :key="index"
            >
                <CardOrder 
                :item="item"
                />
            </v-col>
        </v-row>
        <div
        v-if="!order.lastOrders.length"
        class="animate__animated animate__fadeInUp d-flex align-center flex-column"
        >
            <v-img
            width="250"
            src="./images/noOrders.svg"
            class="mt-10 mb-6"
            ></v-img>
            Nenhum Pedido
        </div>
    </v-container>
</template>

<style>

</style>