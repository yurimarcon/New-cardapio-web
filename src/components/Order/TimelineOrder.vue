<script setup>
import { ref } from 'vue';

const colors = {
    done: "green-darken-1",
    waiting: "blue-grey-lighten-4"
}

const data = ref(new Date());



</script>

<template>
    <v-timeline side="end" align="start">
        <v-timeline-item
        :dot-color="colors.done"
        size="small"
        >
            <div class="d-flex align-center">
                <small class="me-4">{{data.toLocaleTimeString().slice(0,-3)}}</small>
                <div>
                    <strong>Esperando Aprovação</strong>
                </div>
            </div>
        </v-timeline-item>
  
        <v-timeline-item
            :dot-color="colors.waiting"
            size="small"
        >
            <div class="d-flex align-center">
                <small v-if="false" class="me-4">
                    {{data.toLocaleTimeString().slice(0,-3)}}
                </small>
                <small v-else class="me-4">
                    ------
                </small>
                <div>
                    <strong>Preparando</strong>
                </div>
            </div>
        </v-timeline-item>
    
        <v-timeline-item
        :dot-color="colors.waiting"
        size="small"
        >
            <div class="d-flex align-center">
                <small v-if="false" class="me-4">
                    {{data.toLocaleTimeString().slice(0,-3)}}
                </small>
                <small v-else class="me-4">
                    ------
                </small>
                <div>
                    <strong>Saiu para entrega</strong>
                </div>
            </div>
        </v-timeline-item>
    
        <v-timeline-item
        :dot-color="colors.waiting"
        size="small"
        >
            <div class="d-flex align-center">
                <small v-if="false" class="me-4">
                    {{data.toLocaleTimeString().slice(0,-3)}}
                </small>
                <small v-else class="me-4">
                    ------
                </small>
                <div>
                    <strong>Entregue</strong>
                </div>
            </div>
        </v-timeline-item>
    </v-timeline>
  </template>