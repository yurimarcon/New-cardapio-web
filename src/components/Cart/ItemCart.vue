<script setup>
import { ref } from  'vue';
import { useCartStore } from '../../stores/cart'

const cart = useCartStore();

const prop = defineProps({
    product : Object
});

const dialog = ref(false);
const loading = ref(false);

const deleteItemFromCart = async () =>{
    loading.value = true;
    setTimeout(()=>{
        cart.deleteItemFromCart(prop.product.id)
        dialog.value = false;
        loading.value = false;
    },500);
}

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
                        :src="prop.product.image"
                        ></v-img>
                    </v-avatar>
                    <div>
                        <v-card-title class="text-h6">
                            {{ prop.product.name.slice(0,20) + "..." }}
                        </v-card-title>
                        
                        <v-card-subtitle>
                            {{ prop.product.description.slice(0,30) + "..." }}
                        </v-card-subtitle>

                        <v-card-actions>
                        <v-btn
                        color="green"
                        variant="text"
                        >
                            R${{ (prop.product.countRequests * prop.product.value).toFixed(2) }}
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
                                    @click="cart.removeQuantityInItem(prop.product.id);" 
                                    >
                                        <v-icon>
                                            mdi-minus
                                        </v-icon>
                                    </v-btn>
                                </v-col>
            
                                <v-col cols="4">
                                    <div class="quantity">
                                        <span >
                                            {{ prop.product.countRequests }}
                                        </span>
                                    </div>
                                </v-col>
                                
                                <v-col cols="4">
                                    <v-btn
                                    size="small"
                                    color="red"
                                    variant="flat"
                                    rounded="lg"
                                    @click="cart.addQuantityInItem(prop.product.id);"
                                    >
                                        <v-icon>
                                            mdi-plus
                                        </v-icon>
                                    </v-btn>    
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-card-actions>
                    <div
                    v-if="prop.product.complements[0]?.observation"
                    class="mb-2"
                    >
                        <v-divider></v-divider>
                        <strong>Observações: </strong>
                        <span
                        v-for="obs, index in prop.product.complements"
                        :key="index"
                        >{{ obs.observation }}</span>
                    </div>
                </div>
                <v-btn
                v-bind="props"
                position="absolute"
                class="d-flex"
                icon="mdi-trash-can-outline" 
                color="red"
                ></v-btn>
            </div>
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
                <strong>{{ prop.product.name }}</strong>?
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
                @click="deleteItemFromCart()"
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