<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Alert from './components/Alert.vue';
</script>

<template>
  <Alert />
  <RouterView />
  <Navigation/>
</template>

<style scoped>
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
