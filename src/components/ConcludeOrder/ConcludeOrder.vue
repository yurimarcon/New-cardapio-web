<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useCartStore } from '../../stores/cart'
import { useOrderStore } from '../../stores/order'
import { ref } from 'vue';
import CheckItems from './CheckItems.vue'
import DeliveryMethod from './DeliveryMethod.vue'
import Adress from './Adress.vue'
import CustomerData from './CustomerData.vue'
import PaymentMethod from './PaymentMethod.vue'
import OrderResume from './OrderResume.vue'
import FinishStep from './FinishStep.vue'
import { useRouter } from 'vue-router'

const cart = useCartStore();
const order = useOrderStore();
const router = useRouter()

const steps = {
    CheckItems: 0,
    DeliveryMethod: 1,
    Adress: 2,
    CustomerData: 3,
    PaymentMethod: 4,
    OrderResume: 5,
    finishStep: 6
};

const paymentMethod = {
    delivery: 1,
    withdrawal: 2
};
 
const dialogConcludeOrder = ref(false);
const step = ref(0);
const lastStep = ref(6);
const firstStep = ref(0);

const nextStep = () =>{
    if(step.value < lastStep.value){
        if(step.value == steps.CheckItems){
            step.value = steps.DeliveryMethod;
            
        }else if(step.value == steps.Adress){
            step.value = steps.PaymentMethod;
            order.setAdress(order.order.adress)
        }else if(step.value == steps.CustomerData){
            step.value = steps.PaymentMethod;
        }else
            step.value++;
    }
}
const backStep = () =>{
    if(step.value > firstStep.value){
        if( step.value == steps.PaymentMethod){
            step.value = 
                order.order.withdrawalMethod == paymentMethod.withdrawal
                ? steps.CustomerData
                : steps.Adress                
        }else if(step.value == steps.CustomerData){
            step.value = steps.DeliveryMethod
        }else if(step.value == steps.Adress){
            step.value = steps.DeliveryMethod
        }else
            step.value--;
    }else
        dialogConcludeOrder.value = false;
}
const changeWithdrawalMethod = () =>{
    step.value = steps.DeliveryMethod;
}

const handleDelivery = () =>{
    step.value = steps.Adress;
    order.setWithdrawalMethod(paymentMethod.delivery)
}
const handleWithdrawal = () =>{
    step.value = steps.CustomerData;
    order.setWithdrawalMethod(paymentMethod.withdrawal)
}
const handleSelectedPayment = (paymewntId) =>{
    order.setPaymentMethod(paymewntId)
    step.value = steps.OrderResume;
}
const handleBackStart = () =>{
    step.value = steps.CheckItems;
}
const handleFinishOrder = () =>{
    order.finishOrder();
    cart.cleanCart();
    step.value = steps.CheckItems;

    router.push('/order');
    dialogConcludeOrder.value = false;
}
const handleAddMoreItens = () =>{
    router.push('/');
    dialogConcludeOrder.value = false;
}
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
            @click="dialogConcludeOrder = !dialogConcludeOrder"
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

        <v-row justify="center">
            <v-dialog
            v-model="dialogConcludeOrder"
            fullscreen
            :scrim="false"
            transition="dialog-bottom-transition"
            >
            <v-card>
                <v-toolbar
                dark
                color="pink"
                >
                    <v-btn
                        icon
                        dark
                        @click="backStep()"
                    >
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-toolbar-title>Voltar</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                        class="mr-4"
                        density="compact" 
                        @click="dialogConcludeOrder = false"
                        icon="mdi-close"></v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <v-container>
                    <!-- STEPS-COMPONENTS -->
                    <CheckItems
                    v-if="step == steps.CheckItems"
                    :items="cart.items"
                    :value="cart.getCartValue"
                    />
    
                    <DeliveryMethod 
                    v-if="step == steps.DeliveryMethod"
                    :handleDelivery="handleDelivery"
                    :handleWithdrawal="handleWithdrawal"
                    />
    
                    <Adress 
                    v-if="step == steps.Adress"
                    :adress="order.order.adress"
                    />
                    
                    <CustomerData 
                    v-if="step == steps.CustomerData"
                    :adress="order.order.adress"
                    />
    
                    <PaymentMethod 
                    v-if="step == steps.PaymentMethod"
                    :handleSelectedPayment = "handleSelectedPayment"
                    :paymentMethods = "order.paymentMethods"
                    />
                    
                    <OrderResume 
                    v-if="step == steps.OrderResume"
                    :backStep="backStep"
                    :changeWithdrawalMethod="changeWithdrawalMethod"
                    :handleAddMoreItens="handleAddMoreItens"
                    />

                    <FinishStep
                    v-if="step == steps.finishStep"
                    :handleBackStart="handleBackStart"
                    :handleFinishOrder="handleFinishOrder"
                    />
                    <!-- END-STEPS-COMPONENTS -->
                </v-container>

                <v-card-actions>
                    <v-btn
                    v-if="step != steps.DeliveryMethod  &&
                          step != steps.PaymentMethod &&
                          step != steps.finishStep "
                    class="btnNext mx-auto"
                    color="red"
                    variant="flat"
                    @click="nextStep()"
                    >
                        {{step == steps.CheckItems
                        ?'Proseguir'
                        :step == steps.Adress
                            ? 'Proseguir'
                            : 'Enviar pedido'
                        }}
                    </v-btn>
                    
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
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
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
.btnNext{
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}
</style>