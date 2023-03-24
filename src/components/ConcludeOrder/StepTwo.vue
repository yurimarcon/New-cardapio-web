<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    handleDelivery: Function,
    handleRetirada: Function
})

</script>

<template>
    <v-container fluid>
        <v-row class="mt-16">
            <v-col
            cols="5"
            class="d-flex align-center flex-column"
            >
                <v-card
                class="d-flex align-center flex-column pa-4 cardSenderMethod"
                max-width="200"
                @click="props.handleDelivery()"
                >
                    <v-icon 
                    icon="mdi-moped"
                    size="70"
                    ></v-icon>
                    <strong>Delivery</strong>
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
                @click="props.handleRetirada()"
                >
                    <v-icon 
                    icon="mdi-store"
                    size="70"
                    ></v-icon>
                    <strong>Retirada</strong>
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