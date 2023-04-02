<script setup>
import { ref, onMounted } from 'vue';
import { useOrderStore } from '../../stores/order'
const order = useOrderStore();

const customerName = ref("");
const customerTel = ref("");

const variantInput = 'outlined'

const handleChangeNameAndTel = () =>{
    order.setName(customerName.value);
    order.setTel(customerTel.value);
    order.setDeliveryFee(0.0);
}

onMounted(()=>{
    customerName.value = order.order.customerName;
    customerTel.value = order.order.customerTel;
})
</script>

<template>
    <v-layout>
        <v-app-bar
        class="mt-16"
        color="info"
        density="prominent"
        image="./images/map.jpeg"
        >
        </v-app-bar>

        <v-main>
            <v-container>
                <v-card 
                style="min-width: 350px"
                class="pa-2"
                >
                    <v-row>
                        <v-col cols="12">
                            <v-text-field 
                            :variant="variantInput"
                            label="Nome"
                            hide-details="auto"
                            v-model="customerName"
                            density="compact"
                            @blur="handleChangeNameAndTel()"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field 
                            :variant="variantInput"
                            label="Telefone"
                            hide-details="auto"
                            v-model="customerTel"
                            density="compact"
                            @blur="handleChangeNameAndTel()"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </v-main>
    </v-layout>
</template>

<style>

</style>