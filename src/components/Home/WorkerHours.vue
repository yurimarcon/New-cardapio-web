<script setup>
import {ref} from 'vue';

let dialog = ref(false);

</script>

<template>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        
        <v-btn
        v-bind="props"
        class="mt-2"
        variant="outlined"
        color="red"
        rounded="pill"
        >
          Loja Fechada
          <v-icon
          end
          icon="mdi-chevron-down"
          ></v-icon>

        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div> 
</template>


<style>

</style>