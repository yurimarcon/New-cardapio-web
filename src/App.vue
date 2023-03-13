<script setup>
import { RouterLink, RouterView } from 'vue-router'
import WorkerHours from './components/Home/WorkerHours.vue'
import GroupInfoHome from './components/Home/GroupInfoHome.vue'
</script>

<template>
  <header>
  <div
  height="200px"
  >
    <v-img
    alt="Header"
    height="100"
    cover 
    src="https://s3.us-west-2.amazonaws.com/whatsmenu/production/brigadeirisa/tbPAPEL%20PERSONALIZADO%20BRINDE-100.jpg"
    >
  </v-img>
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
    <v-row>

    </v-row>
  </v-container>
  </div>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <section>
    <v-col cols="12">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h6">
                  3 Brownies Tradicionais
                </v-card-title>

                <v-card-subtitle>
                  3 Brownies Tradicionais
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    color="green"
                    variant="text"
                    @click="reserve"
                  >
                    R$14,00
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
                src="https://s3.us-west-2.amazonaws.com/whatsmenu/production/brigadeirisa/products/712688/tBrownie%20tradicional.jpeg"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
  </section>

  <RouterView />
</template>

<style scoped>
.description-store h1{
  font-size: .9rem;
}
.description-store p{
  font-size: .7rem;
}
</style>
