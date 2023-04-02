<script setup>
import { useGenericDataStore } from '../../stores/genericData';
import { useOrderStore } from '../../stores/order';
import { defineProps } from 'vue';

const genericData = useGenericDataStore();
const order = useOrderStore();

const props = defineProps({
    backStep: Function,
    changeWithdrawalMethod: Function
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
        <v-divider class="my-4"/>
        <v-row dense>
            <v-col cols="12">
                <h2>Resumo do pedido</h2>
            </v-col>
            <v-col cols="9">
                <strong>Subtotal</strong>
            </v-col>
            <v-col cols="3">
                <strong>R${{ order.order.value.toFixed(2) }}</strong>
            </v-col>
            <v-col cols="9">
                <strong>Frete</strong>
            </v-col>
            <v-col cols="3">
                <strong v-if="order.order.withdrawalMethod == 1">
                    R${{ order.order.deliveryFee.toFixed(2) }}
                </strong>
                <strong v-else>
                    Grátis
                </strong>
            </v-col>
            <v-divider class="my-0"/>
            <v-col cols="9">
                <strong>Total</strong>
            </v-col>
            <v-col cols="3">
                <strong>R${{ (order.order.value + order.order.deliveryFee).toFixed(2) }}</strong>
            </v-col>
        </v-row>
        <v-divider class="my-4"/>
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
                    :src="order.paymentMethods.find(w => w.id == order.order.paymentMethod)?.img"
                  ></v-img>
                </v-avatar>
            </v-col>
            <v-col class="text-left ms-2 d-flex align-center">
                <strong 
                v-html="order.paymentMethods.find(w => w.id == order.order.paymentMethod)?.name"
                ></strong>
            </v-col>
            <v-col cols="3">
                <v-btn
                color="red"
                variant="outlined"
                size="small"
                @click="props.backStep"
                >
                    Alterar
                </v-btn>
            </v-col>
        </v-row>
        <v-divider class="my-4"/>
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
                    :src="order.withdrawalMethods.find(w => w.id == order.order.withdrawalMethod)?.img"
                  ></v-img>
                </v-avatar>
            </v-col>
            <v-col class="text-left ms-2 d-flex align-center">
                <strong 
                v-html="order.withdrawalMethods.find(w => w.id == order.order.withdrawalMethod)?.name"
                ></strong>
            </v-col>
            <v-col cols="3">
                <v-btn
                color="red"
                variant="outlined"
                size="small"
                @click="props.changeWithdrawalMethod"
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