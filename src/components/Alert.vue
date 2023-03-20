<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useAlertStore } from '../stores/alert'

const alert = useAlertStore();

</script>

<template>
    <div 
    v-if="alert.info.show"    
    class="alertArea d-flex align-center"
    >
        <v-alert
        class="animate__animated animate__backInRight"
        color="blue"
        theme="dark"
        icon="mdi-check"
        variant="flat"
        >
            {{ alert.info.text }}
        </v-alert>
    </div>
</template>

<style scoped>
.alertArea{
    position: fixed;
    z-index: 2;
    bottom: 60px;
    width: 100%;
    padding: 0 10% 50px 10%;
}
</style>