<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Alert from './components/Alert.vue';
import ConcludeOrder from './components/ConcludeOrder/ConcludeOrder.vue'
import { useOrderStore } from './stores/order'
import { useCartStore } from './stores/cart'

const order = useOrderStore();
const cart = useCartStore();

onMounted(()=>{
  order.getLocalstorageOrder();
  cart.getLocalstorageCart();
});
</script>

<template>
  <Alert />
  <RouterView />
  <ConcludeOrder />
  <Navigation/>
</template>

<style scoped>
*{
    color: rgb(107, 107, 107);
}
body{
  overflow: hidden;
  min-height: 100vh;
  position: relative;
}
::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}
::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment  {
	display: none;
}
::-webkit-scrollbar-track-piece  {
	background-color: #474747;
	-webkit-border-radius: 3px;
}
::-webkit-scrollbar-thumb:vertical {
	background-color: rgb(116, 116, 116);
	-webkit-border-radius: 3px;
}

</style>
