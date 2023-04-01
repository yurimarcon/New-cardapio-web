<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useOrderStore } from '../../stores/order'
const order = useOrderStore();

const customerName = ref("");
const customerTel = ref("");

const adress = reactive({
    city: "",
    street: "",
    number: "",
    neighborhood: "",
    complement: "",
    reference: ""
});

const variantInput = 'outlined'

const handleChangeAdress = () =>{
    order.setAdress(adress);
    order.setName(customerName.value);
    order.setTel(customerTel.value);
}

onMounted(()=>{
    adress.city = order.order.adress.city;
    adress.street = order.order.adress.street;
    adress.number = order.order.adress.number;
    adress.neighborhood = order.order.adress.neighborhood;
    adress.complement = order.order.adress.complement;
    adress.reference = order.order.adress.reference;
    customerName.value = order.order.customerName;
    customerTel.value = order.order.customerTel;
})
</script>

<template>
    <v-layout>
      <v-app-bar
      class="mt-16"
        color="info"
        density="prominent"
        image="./images/map.jpeg"
      >
      </v-app-bar>

      <v-main>
        <v-container>
            <v-card 
            style="min-width: 350px"
            class="pa-2"
            >
                <v-row>
                    <v-col cols="6">
                        <v-text-field 
                        :variant="variantInput"
                        label="Nome"
                        hide-details="auto"
                        v-model="customerName"
                        density="compact"
                        @blur="handleChangeAdress()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field 
                        :variant="variantInput"
                        label="Telefone"
                        hide-details="auto"
                        v-model="customerTel"
                        density="compact"
                        @blur="handleChangeAdress()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field 
                        :variant="variantInput"
                        label="Cidade"
                        hide-details="auto"
                        v-model="adress.city"
                        density="compact"
                        
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field 
                        :variant="variantInput"
                        label="Rua"
                        hide-details="auto"
                        v-model="adress.street"
                        density="compact"
                        @blur="handleChangeAdress()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-text-field 
                        :variant="variantInput"
                        label="Número"
                        hide-details="auto"
                        v-model="adress.number"
                        density="compact"
                        @blur="handleChangeAdress()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <v-text-field 
                        :variant="variantInput"
                        label="Bairro"
                        hide-details="auto"
                        v-model="adress.neighborhood"
                        density="compact"
                        @blur="handleChangeAdress()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field 
                        :variant="variantInput"
                        label="Complemento"
                        hide-details="auto"
                        v-model="adress.complement"
                        density="compact"
                        @blur="handleChangeAdress()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field 
                        :variant="variantInput"
                        label="Ponto de referência"
                        hide-details="auto"
                        v-model="adress.reference"
                        density="compact"
                        @blur="handleChangeAdress()"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
      </v-main>
    </v-layout>
</template>

<style>

</style>