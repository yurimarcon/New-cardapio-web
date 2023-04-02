<script setup>
import { ref, defineProps } from  'vue';
import { useOrderStore } from '../../stores/order';
const order = useOrderStore();

const prop = defineProps({
    item : Object
});

const dialog = ref(false);
const loading = ref(false);

</script>

<template>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
        <template v-slot:activator="{ props }">
            <v-card
            class="animate__animated animate__fadeIn mb-2"
            
            width="100%"
            >
                <!-- <div
                class="d-flex flex-no-wrap justify-space-between"
                >
                    <div>
                        <v-card-title class="text-h6">
                            Pedido 1
                        </v-card-title>
                        
                        <v-card-subtitle>
                            Pedido 1
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn
                            color="green"
                            variant="text"
                            >
                                R$22,00
                            </v-btn>

                            <v-col
                            cols="6"
                            class="py-2"
                            >
                                <v-row>
                                    <v-col cols="4">
                                        <v-btn
                                        size="small"
                                        color="red"
                                        variant="flat"
                                        rounded="lg"
                                        >
                                            <v-icon>
                                                mdi-minus
                                            </v-icon>
                                        </v-btn>
                                    </v-col>
                
                                    <v-col cols="4">
                                        <div class="quantity">
                                            <span >
                                                0
                                            </span>
                                        </div>
                                    </v-col>
                                    
                                    <v-col cols="4">
                                        <v-btn
                                        size="small"
                                        color="red"
                                        variant="flat"
                                        rounded="lg"
                                        >
                                            <v-icon>
                                                mdi-plus
                                            </v-icon>
                                        </v-btn>    
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-card-actions>
                    </div>
                    <v-btn
                    v-bind="props"
                    position="absolute"
                    class="d-flex"
                    icon="mdi-trash-can-outline" 
                    color="red"
                    ></v-btn>
                </div> -->
                <v-card
                    color="pink"
                    theme="dark"
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="text-h5">
                        Pedido: 001
                        </v-card-title>

                        <v-card-subtitle>R$22,00</v-card-subtitle>

                        <v-card-actions>
                        <v-btn
                            v-bind="props"
                            class="ms-2"
                            icon="mdi-home"
                            variant="text"
                        ></v-btn>
                        </v-card-actions>
                    </div>

                    <v-avatar
                        class="ma-3"
                        size="125"
                        rounded="0"
                    >
                        <v-img 
                        :src="order.withdrawalMethods.find(w => w.id == item.withdrawalMethod)?.img"
                        ></v-img>
                        <!-- src="https://cdn.vuetifyjs.com/images/cards/halcyon.png" -->
                    </v-avatar>
                    </div>
                </v-card>
            </v-card>
        </template>

        <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
        >
            <template v-slot:loader="{ isActive }">
                <v-progress-linear
                :active="isActive"
                color="pink"
                height="4"
                indeterminate
                ></v-progress-linear>
            </template>

            <v-img
            height="150"
            aspect-ratio="16/9"
            cover
            src="./images/sad.svg"
            ></v-img>
        
            <v-card-text>
                Realmente deseja excluir: <br>
                <strong>Pedido 1</strong>?
            </v-card-text>
    
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="blue"
                variant="flat"
                @click="dialog = false"
                >
                    Não
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                color="red"
                variant="outlined"
                >
                Sim
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
    
</template>


<style scoped>
.quantity{
    margin: 1px auto 0 8px;
    width: 35px;
    height: 20px;
    border: 1px solid rgb(139, 139, 139);
    border-radius: 5px;
    display: flex;
    padding: inherit;
    align-items: center;
}
.quantity span{
    margin: 0 auto 0 auto;
}
.description-card-modal{
    max-height: 100px;
    overflow: auto;
    font-size: .9rem;
}
</style>