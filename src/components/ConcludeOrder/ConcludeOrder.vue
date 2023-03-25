<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useCartStore } from '../../stores/cart'
import { ref } from 'vue';
import StepOne from './StepOne.vue'
import StepTwo from './StepTwo.vue'
import StepThree from './StepThree.vue'
import StepFour from './StepFour.vue'
import StepFive from './StepFive.vue'
import FinishStep from './FinishStep.vue'
import { useRouter } from 'vue-router'

const cart = useCartStore();
const router = useRouter()

const steps = {
    stepOne: 0,
    stepTwo: 1,
    stepThree: 2,
    stepFour: 3,
    stepFive: 4,
    finishStep: 5
};
 
const dialogConcludeOrder = ref(true);
const step = ref(0);
const lastStep = ref(5);
const firstStep = ref(0);

const nextStep = () =>{
    if(step.value < lastStep.value)
        step.value++;
}
const backStep = () =>{
    if(step.value > firstStep.value)
        step.value--;
    else
        dialogConcludeOrder.value = false;
}
const handleDelivery = () =>{
    step.value = steps.stepThree;
}
const handleRetirada = () =>{
    step.value = steps.stepFour;
}
const handleSelectedPayment = () =>{
    step.value = steps.stepFive;
}
const handleBackStart = () =>{
    step.value = steps.stepOne;
}
const handleFinishOrder = () =>{
    router.push('/order');
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
                    <StepOne 
                    v-if="step == steps.stepOne"
                    />
    
                    <StepTwo 
                    v-if="step == steps.stepTwo"
                    :handleDelivery="handleDelivery"
                    :handleRetirada="handleRetirada"
                    />
    
                    <StepThree 
                    v-if="step == steps.stepThree" 
                    />
    
                    <StepFour 
                    v-if="step == steps.stepFour"
                    :handleSelectedPayment = "handleSelectedPayment"
                    />
                    
                    <StepFive 
                    v-if="step == steps.stepFive" 
                    />

                    <FinishStep
                    v-if="step == steps.finishStep"
                    :handleBackStart="handleBackStart"
                    :handleFinishOrder="handleFinishOrder"
                    />
                    <!-- END-STEPS-COMPONENTS -->
                </v-container>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    v-if="step != steps.stepTwo  &&
                          step != steps.stepFour &&
                          step != steps.finishStep "
                    class="btnNext mx-auto"
                    color="red"
                    variant="flat"
                    @click="nextStep()"
                    >
                        {{step == steps.stepOne
                        ?'Proseguir'
                        :step == steps.stepThree
                            ? 'Proseguir'
                            : 'Enviar pedido'
                        }}
                    </v-btn>
                    
                    <v-spacer></v-spacer>
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
    left: 36%;
}
</style>