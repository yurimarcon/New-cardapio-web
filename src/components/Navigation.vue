<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, reactive } from 'vue';
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'

const cart = useCartStore();

const selectedMenu = ref(0);
const menu = reactive({
    options:[
        {
          name: 'Cardápio',
          to: '/',
          icon: 'mdi-silverware'
        },
        {
          name: 'Carrinho',
          to: '/cart',
          icon: 'mdi-cart'
        },
        {
          name: 'Pedidos',
          to: '/order',
          icon: 'mdi-clipboard-text-clock-outline'
        },
        {
          name: 'Sobre',
          to: '/about',
          icon: 'mdi-information-variant'
        }
    ]
})
</script>

<template>
  <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation
      v-model="selectedMenu"
      active
      color="pink"
    >
      <RouterLink 
      v-for="item, index in menu.options"
      :key="index"
      :to="item.to"
      >
        <v-btn 
        class="" 
        size="small"
        >
          <v-badge
          v-if="
          item.name == 'Carrinho' 
          ? cart.items.length 
          : false"
          :content="cart.items.length"
          color="error">
            <v-icon>{{ item.icon }}</v-icon>
          </v-badge>

          <v-icon v-else>{{ item.icon }}</v-icon>
          
          {{ item.name }}
        </v-btn>
      </RouterLink>
    </v-bottom-navigation>
  </v-layout>
</template>

<style scoped>

</style>