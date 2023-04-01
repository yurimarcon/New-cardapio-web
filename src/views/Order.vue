<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useOrderStore } from '../stores/order'

const order = useOrderStore()
</script>

<template>
    <v-container fluid>
        <v-row
        class="d-flex aling-center justify-center"
        >
            <h1 class="">Pedidos</h1>
        </v-row>
        <v-divider class="mt-4 mb-6"/>
        <v-row>
            <v-col
            v-for="item, index in order.lastOrders"
            :key="index"
            >
                {{ item }}
            </v-col>
        </v-row>
    </v-container>
</template>

<style>

</style>