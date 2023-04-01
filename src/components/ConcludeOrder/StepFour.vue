<script setup>
import { defineProps } from 'vue';

const props  = defineProps({
    handleSelectedPayment: Function,
    paymentMethods: Array
})
</script>

<template>
    <v-container>
        <h1 class="text-center">Forma de pagamento</h1>
        <hr class="mb-2">
        <v-row>
            <v-col
            v-for="payment in props.paymentMethods"
            :key="payment.name"
            cols="12"
            md="4"
            >
                <v-card
                class="animate__animated animate__fadeIn mb-1"
                @click="props.handleSelectedPayment(payment.id)"
                >
                    <div
                    class="d-flex"
                    >
                        <v-avatar
                        class="ma-3"
                        size="50"
                        rounded="lg"
                        >
                            <v-img 
                            cover
                            :src="payment.img"
                            ></v-img>
                        </v-avatar>
                        <div>
                            <v-card-title class="text-h6">
                                {{ payment.name }}
                            </v-card-title>
                            
                            <v-card-subtitle>
                                {{ payment.description }}
                            </v-card-subtitle>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
*{
    color: rgb(107, 107, 107);
}
</style>