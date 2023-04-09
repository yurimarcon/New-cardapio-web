<script setup>
import WorkerHours from '../components/Home/WorkerHours.vue'
import GroupInfoHome from '../components/Home/GroupInfoHome.vue'
// import Footer from '../components/Footer.vue'
import CardProduct from '../components/Home/Product/CardPoduct.vue'
import { ref, onMounted } from 'vue';
import { useGenericDataStore } from '../stores/genericData'
import { useNavigationStore } from '../stores/navigation'

const navigation = useNavigationStore();

const store = useGenericDataStore();

onMounted(()=>{
  store.getData();
  navigation.setAcctive(0);
});

const tab = ref(0);

</script>

<template>
  <div class="mt-0">
    <header>
      <div
      height="200px"
      >
        <v-img
        class="animate__animated animate__fadeIn"
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
            class="animate__animated animate__fadeIn"
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
              <WorkerHours 
              :weekDay="store.genericData.week"
              />
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
      <div
      class=""
      >
        <v-tabs
        v-model="tab"
        color="pink"
        align-tabs="center"
        >
          <a 
          :href="'#' + index" 
          v-for="category, index in store.categoriesFiltered"
          :key="index"
          >
            <v-tab 
            :value="index"
            v-show="category.products[0]"
            >
                {{ category.name }}
              </v-tab>
          </a>
        </v-tabs>
        <v-text-field
        style="width: 80%;"
        class="mt-2 mb-4 mx-auto"
        density="compact"
        variant="solo"
        label="Pesquisar..."
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        v-model="store.searchWord"
        @click:append-inner="onClick"
        ></v-text-field>
      </div>

      <v-container 
      v-for="category, index in store.categoriesFiltered"
      :key="index"
      >
        <h4 v-if="category.products.length" :id="index">
          {{ category.name }}
        </h4>
        <v-row >
            <v-col
            cols="12"
            md="6"
            lg="4"
            v-for="item in category.products"
            :key="item.id"
            >
              <CardProduct
              :product="item"
              />
            </v-col>
          </v-row>
      </v-container>
    </section>
    <!-- <Footer /> -->
  </div>
</template>

<style scoped>
.description-store h1{
  font-size: .9rem;
}
.description-store p{
  font-size: .7rem;
}
.searchAndTabs{
  width: 100%;
  position: fixed;
  top: 0;
  background-color: aliceblue;
  z-index: 2000;
  box-shadow: 0 3px 12px 0 rgba(0,0,0,.08)
}
</style>