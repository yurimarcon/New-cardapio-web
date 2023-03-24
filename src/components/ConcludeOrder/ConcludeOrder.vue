<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useCartStore } from '../../stores/cart'
import { ref } from 'vue';
import StepOne from './StepOne.vue'
import StepTwo from './StepTwo.vue'
import StepThree from './StepThree.vue'

const cart = useCartStore();
 
const dialogConcludeOrder = ref(true);
const step = ref(0);
const lastStep = ref(2);
const firstStep = ref(0);

const nextStep = () =>{
    if(step.value < lastStep.value)
        step.value++;
}
const backStep = () =>{
    if(step.value > firstStep.value)
        step.value--;
    else
        dialogConcludeOrder.value = !dialogConcludeOrder.value
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
                </v-toolbar>
                
                <StepOne v-if="step == 0" />

                <StepTwo v-if="step == 1" />

                <StepThree v-if="step == 2" />

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    class="btnNext mx-auto"
                    color="red"
                    variant="flat"
                    @click="nextStep()"
                    >
                    Prosseguir
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