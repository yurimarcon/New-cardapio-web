<script setup>
import { ref } from  'vue';
import { useCartStore } from '../../../stores/cart'
import { useAlertStore } from '../../../stores/alert'

const cart = useCartStore();
const alert = useAlertStore();

const prop = defineProps({
    product : Object
});

const dialog = ref(false);
const loading = ref(false);
const quantity = ref(1);
const observation = ref("");

const putIntoCart = () =>{
    loading.value = true;
    setTimeout(()=>{
        cart.addItemIntoCart(prop.product, quantity.value, observation.value);
        alert.showInfo("Produto no carrinho!")
        dialog.value = false;
        loading.value = false;
    },500);
}

const addQuantity = () => quantity.value ++;
const removeQuantity = () => {
    if(quantity.value > 1) 
        quantity.value --;
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
            v-bind="props"
            width="100%"
            >
                <div 
                class="d-flex flex-no-wrap justify-space-between"
                >
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
                            @click="reserve"
                        >
                            R${{ prop.product.value.toFixed(2) }}
                        </v-btn>
                        </v-card-actions>
                    </div>

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
                </div>
            </v-card>
        </template>

        <v-card
        :loading="loading"
        class="mx-auto my-4"
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
                aspect-ratio="16/9"
                cover
                max-height="220"
                :src="prop.product.image"
            >
                    <div class="d-flex justify-end ma-2">
                        <v-btn
                        size="x-small"
                        color="red"
                        icon="mdi-close"
                        @click="dialog = false"
                        ></v-btn>
                    </div>
            </v-img>
        
            <v-card-item>
                <v-card-title>{{ prop.product.name }}</v-card-title>
            </v-card-item>
    
            <v-card-text>
                <v-row
                align="center"
                class="mx-0"
                >
                    <v-rating
                        :model-value="4.5"
                        color="amber"
                        density="compact"
                        half-increments
                        readonly
                        size="small"
                    ></v-rating>
        
                    <div class="text-grey ms-4">
                        4.5 (413)
                    </div>
                </v-row>
    
                <div 
                class="mt-4 description-card-modal"
                >
                    {{ prop.product.description }}
                </div>
            </v-card-text>
    
            <v-divider class="mx-4 mb-1"></v-divider>
    
            <v-col
            cols="12"
            >
                <v-textarea
                label="Observação"
                auto-grow
                variant="outlined"
                rows="2"
                row-height="20"
                shaped
                v-model="observation"
                ></v-textarea>
            </v-col>
    
            <v-card-actions
            style="margin-top: -30px;"
            class="mr-8"
            >
                <v-col
                cols="6"
                class="py-2"
                >
                    <v-btn
                    style="font-size: .7rem;"
                    color="red"
                    variant="flat"
                    rounded="lg"
                    @click="putIntoCart()"
                    >
                        Adicionar R${{ (quantity * prop.product.value).toFixed(2) }}
                    </v-btn>
                </v-col>

                <v-col
                cols="6"
                class="py-2"
                >
                    <v-row>
                        <v-col cols="4">
                            <v-btn
                            color="red"
                            variant="flat"
                            rounded="lg"
                            @click="removeQuantity()" 
                            >
                                <v-icon>
                                    mdi-minus
                                </v-icon>
                            </v-btn>
                        </v-col>
    
                        <v-col cols="4">
                            <div class="quantity">
                                <span >
                                    {{ quantity }}
                                </span>
                            </div>
                        </v-col>
                        
                        <v-col cols="4">
                            <v-btn
                            color="red"
                            variant="flat"
                            rounded="lg"
                            @click="addQuantity()"
                            >
                                <v-icon>
                                    mdi-plus
                                </v-icon>
                            </v-btn>    
                        </v-col>
                    </v-row>
                </v-col>
            </v-card-actions>
        </v-card>
    </v-dialog>
    
</template>


<style scoped>
.quantity{
    margin: .5px 0 0 12.5px;
    width: 38px;
    height: 35px;
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