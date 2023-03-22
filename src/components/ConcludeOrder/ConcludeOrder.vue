<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useCartStore } from '../../stores/cart'
import { ref } from 'vue';

const cart = useCartStore();
 
const dialogConcludeOrder = ref(true)
const notifications = ref(false)
const sound = ref(true)
const widgets = ref(false)
const panel = ref([0])

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
                        @click="dialogConcludeOrder = false"
                    >
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-toolbar-title>Voltar</v-toolbar-title>
                </v-toolbar>
                <v-expansion-panels v-model="panel">
                    <v-expansion-panel
                        title="Itens do pedido"
                    >





                        <v-card
                        v-for="item in cart.items"
                        :key="item.id"
                        class="animate__animated animate__fadeIn"
                        width="100%"
                        >
                            <div 
                            class="d-flex flex-no-wrap justify-space-between"
                            >
                                <v-avatar
                                    class="ma-3"
                                    size="100"
                                    rounded="lg"
                                >
                                    <v-img 
                                    cover
                                    :src="item.image"
                                    ></v-img>
                                </v-avatar>
                                <div>
                                    <v-card-title class="text-h6">
                                        {{ item.name.slice(0,20) + "..." }}
                                    </v-card-title>
                                    
                                    <v-card-subtitle>
                                        {{ item.description.slice(0,30) + "..." }}
                                    </v-card-subtitle>

                                    <v-card-actions>
                                        <v-col
                                        cols="6"
                                        class="py-2"
                                        >
                                            
                                            <div class="quantity">
                                                <span >
                                                    Quantidade: {{ item.countRequests }}
                                                </span>
                                            </div>
                                        </v-col>

                                        <v-btn
                                        color="green"
                                        variant="text"
                                        >
                                            R${{ (item.countRequests * item.value).toFixed(2) }}
                                        </v-btn>
                                    </v-card-actions>
                                <div
                                v-if="item.complements[0]?.observation"
                                class="mb-2"
                                >
                                    <v-divider></v-divider>
                                    <strong>Observações: </strong>
                                    <span
                                    v-for="obs, index in item.complements"
                                    :key="index"
                                    >{{ obs.observation }}</span>
                                </div>
                            </div>
                        </div>
                        </v-card>





                    </v-expansion-panel>
                </v-expansion-panels>

                <v-divider></v-divider>
                <v-list
                lines="two"
                subheader
                >
                <v-list-subheader>Endereço</v-list-subheader>
                <v-list-item title="Casa" subtitle="Mesmo endereço da última entrega">
                    <template v-slot:prepend>
                    <v-checkbox v-model="notifications"></v-checkbox>
                    </template>
                </v-list-item>
                
                </v-list>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="red"
                    variant="flat"
                    >
                    Finalizar
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
    </v-row>
</template>

<style scoped>
.quantity{
    font-size: .8rem;
}
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
</style>