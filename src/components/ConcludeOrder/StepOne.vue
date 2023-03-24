
<script setup>
import { useCartStore } from '../../stores/cart'

const cart = useCartStore();
 
</script>

<template>
    <v-container>
        <h1>Itens do Pedido</h1>
        <hr class="mb-2">
        <v-card
            v-for="item in cart.items"
            :key="item.id"
            class="animate__animated animate__fadeIn mb-1"
            width="100%"
            >
                <div 
                class="d-flex flex-no-wrap justify-space-between"
                >
                    <v-avatar
                        class="ma-3"
                        size="95"
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
        <hr class="my-2">
        <div class="d-flex justify-end">
            <strong>Total: </strong><span>R$ {{ cart.getCartValue }}</span>
        </div>
    </v-container>
</template>

<style scoped>
.quantity{
    font-size: .8rem;
}
</style>