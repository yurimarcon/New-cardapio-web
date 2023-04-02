<script setup>
import { ref, defineProps } from  'vue';
import { useOrderStore } from '../../stores/order';
const order = useOrderStore();

const prop = defineProps({
    item : Object
});

console.log("prop.item", prop.item)

const dialog = ref(true);
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
                <v-card >
                    <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="text-h5">
                        Pedido: 001
                        </v-card-title>

                        <v-card-subtitle>R${{ prop.item.value.toFixed(2) }}</v-card-subtitle>
                        <v-card-subtitle> {{ order.status.find(s => s.id == prop.item.status).name }}</v-card-subtitle>

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

            <v-card-title class="text-h5 text-center">
            Pedido: 001
            </v-card-title>
            <v-divider/>
        
            <v-card-text>
                <div>
                    Detalhes: <br>
                </div>
                <strong>Itens:</strong>
            </v-card-text>
    
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="blue"
                variant="flat"
                @click="dialog = false"
                >
                    Ok
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