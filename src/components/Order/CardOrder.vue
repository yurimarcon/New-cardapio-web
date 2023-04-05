<script setup>
import { ref, defineProps } from  'vue';
import { useRouter } from 'vue-router'
import { useOrderStore } from '../../stores/order';
import { useCartStore } from '../../stores/cart';
import TimelineOrder from './TimelineOrder.vue';
const order = useOrderStore();
const cart = useCartStore();
const router = useRouter()

const prop = defineProps({
    item : Object
});

console.log("prop.item", prop.item)

const dialog = ref(false);
const loading = ref(false);

const resendSameOrder = () =>{
    prop.item.items.forEach( it => {
        cart.addItemIntoCart(it, it.countRequests, it.complements[0].observation)
    });
    dialog.value = false;
    router.push('/cart');
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
                <v-card >
                    <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="text-h5">
                        Pedido: 001
                        </v-card-title>

                        <v-card-subtitle>R${{ prop.item.value.toFixed(2) }}</v-card-subtitle>
                        <v-card-subtitle v-if="!prop.item.adress.street"> 
                            Retirada no estabelecimento
                        </v-card-subtitle>
                        <v-card-subtitle v-else> 
                            {{ `${prop.item.adress.street}, ${prop.item.adress.number}` }}
                        </v-card-subtitle>
                        <v-card-subtitle v-if="prop.item.adress.complement"> 
                            {{ `${prop.item.adress.complement}` }}
                        </v-card-subtitle>
                        <v-card-subtitle >
                            <v-avatar
                            class="rounded"
                            size="30"
                            >
                                <v-img 
                                :src="order.paymentMethods.find(s => s.id == prop.item.paymentMethod).img"
                                ></v-img>
                            </v-avatar>
                            {{ order.paymentMethods.find(s => s.id == prop.item.paymentMethod).name }}
                        </v-card-subtitle>

                        <v-card-actions>
                        <v-btn
                            v-bind="props"
                            color="pink"
                            class="ms-2"
                            variant="outlined"
                        >Detalhes</v-btn>
                        </v-card-actions>
                    </div>

                    <v-avatar
                        class="ma-3 rounded-lg"
                        size="125"
                    >
                        <v-img 
                        :src="order.withdrawalMethods.find(w => w.id == prop.item.withdrawalMethod)?.img"
                        ></v-img>
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

            <v-card-title class="text-h5 d-flex">
                <v-spacer></v-spacer>
                Pedido: 001
                <v-spacer></v-spacer>
                <v-btn
                class="mr-0"
                density="compact" 
                color="red-lighten-1"
                variant="outlined"
                @click="dialog = false"
                icon="mdi-close"
                ></v-btn>
            </v-card-title>
            <v-divider/>
        
            <v-card-text>
                <v-list lines="one">
                    <v-list-item
                    v-for="item in prop.item.items"
                    :key="item.id"
                    :title="item.name"
                    :subtitle="'Quantidade: ' + item.countRequests"
                    :prepend-avatar="item.image"
                    ></v-list-item>
                </v-list>
                <v-divider />

                <TimelineOrder />

            </v-card-text>
    
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="blue"
                variant="flat"
                @click="resendSameOrder()"
                >
                    refazer esse pedido
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