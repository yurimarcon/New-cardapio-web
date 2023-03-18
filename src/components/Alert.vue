<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useAlertStore } from '../stores/alert'

const alert = useAlertStore();

</script>

<template>
    <v-container>
        <div 
        v-if="alert.info.show"
        class="alert d-flex align-center"
        >
            <v-alert
            class="animate__animated animate__fadeIn"
            color="blue"
            theme="dark"
            icon="mdi-info"
            variant="flat"
            >
                {{ alert.info.text }}
            </v-alert>
        </div>
    </v-container>
</template>

<style scoped>
.alert{
    position: fixed;
    z-index: 1;
    bottom: 60px;
    width: 93%;
}
</style>