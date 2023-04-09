<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { useNavigationStore } from '../stores/navigation'

const cart = useCartStore();
const navigation = useNavigationStore();

// const selectedMenu = ref(0);
const options = [
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
      name: 'Notificação',
      to: '/notification',
      icon: 'mdi-bell-outline'
    }
]

</script>

<template>
  <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation
      v-model="navigation.acctive"
      active
      color="pink"
    >
      <RouterLink 
      v-for="item, index in options"
      :key="index"
      :to="item.to"
      >
        <v-btn 
        class="" 
        size="small"
        @click="navigation.setAcctive(index)"
        >
          <v-badge
          v-if="
            item.name == 'Carrinho' 
            ? cart.items.length 
            : false"
            :content="cart.items.length"
          color="error"
          class="animate__animated animate__heartBeat"
          >
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