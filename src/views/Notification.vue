<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container fluid>
    <v-row
    class="d-flex aling-center justify-center"
    >
      <h1 class="">Notificações</h1>
    </v-row>
    <v-divider class="mt-4 mb-6"/>
    <v-row class="mb-16">
        <!-- <v-col
        v-for="item in cart.items"
        :key="item.id"
        >
            <ItemCart
            :product="item"
            ></ItemCart>
        </v-col> -->
    </v-row>
    <div
    class="animate__animated animate__fadeInUp d-flex align-center flex-column"
    >
        <v-img
        width="250"
        src="./images/noNotifications.svg"
        class="mt-10 mb-6"
        ></v-img>
        Sem notificações
    </div>
  </v-container>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
