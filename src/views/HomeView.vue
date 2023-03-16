<script setup>
import WorkerHours from '../components/Home/WorkerHours.vue'
import GroupInfoHome from '../components/Home/GroupInfoHome.vue'
import Footer from '../components/Footer.vue'
import CardProduct from '../components/Home/Product/CardPoduct.vue'
import { ref, reactive, onMounted } from 'vue';

let dataStore = ref(reactive({}));
const baseUrl = "http://localhost:3001/Brigadeirisa"; 

onMounted(()=>{
  fetch(baseUrl)
  .then(res=>res.json())
  .then(res=>{
    dataStore.value = res;
    console.log(dataStore);
  })
});

const tab = ref(null);

</script>

<template>
  <div>
    <header>
      <div
      height="200px"
      >
        <v-img
        alt="Header"
        height="100"
        cover 
        src="https://s3.us-west-2.amazonaws.com/whatsmenu/production/brigadeirisa/tbPAPEL%20PERSONALIZADO%20BRINDE-100.jpg"
        ></v-img>

        <v-container
        style="margin-top: -70px;"
        >
          <v-row
          justify="center"
          >
            <v-avatar
            color="info" 
            size="100"
            justify="center"
            >
              <v-img
              cover 
              src="https://s3.us-west-2.amazonaws.com/whatsmenu/production/brigadeirisa/tSUBMARK%20(2).png"
              ></v-img>
            </v-avatar>

          </v-row>

          <v-row justify="center">
            <div class="d-flex align-center flex-column description-store">
              <h1 class="my-2">BRIGADEIRISA</h1>
              <p>Tornamos seu dia + FELIZ através dos nossos doces.</p>
              <p>Estamos localizados em Santa Terezinha - Santo André.</p>
              <WorkerHours/>
            </div>
          </v-row>

          <v-row>
            <GroupInfoHome/>
          </v-row>
        </v-container>
      </div>
    </header>

    <section
    style="margin-top: -20px;"
    >
      <v-tabs
      v-model="tab"
      color="red"
      align-tabs="center"
      >
        <v-tab :value="1">COMBO DOS QUERIDINHOS</v-tab>
        <v-tab :value="2">Mais Vendidos</v-tab>
        <v-tab :value="3">Pudim</v-tab>
        <v-tab :value="4">Cone Trufado</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item
          v-for="n, index in 4"
          :key="index"
          :value="n"
        >
          <v-container fluid>
            <v-row>
              <v-col
              v-for="category in dataStore.categories"
              :key="category.id"
              cols="12"
              md="6"
              lg="4"
              >
                <CardProduct
                v-for="item in category.products"
                :key="item.id"
                :product="item"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </section>
    <Footer />
  </div>
</template>

<style scoped>
.description-store h1{
  font-size: .9rem;
}
.description-store p{
  font-size: .7rem;
}
</style>