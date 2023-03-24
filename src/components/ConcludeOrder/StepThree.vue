<script setup>

</script>

<template>
    <v-layout>
      <v-app-bar
      class="mt-16"
        color="info"
        density="prominent"
        image="./images/map.jpeg"
      >
      </v-app-bar>

      <v-main>
        <v-container>
            <v-card style="min-width: 350px">
                <v-row>
                    <v-col cols="6">
                        <v-text-field label="Cidade"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Bairro"></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <v-text-field label="Rua"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-text-field label="Número"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Complemento"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Ponto de referência"></v-text-field>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
      </v-main>
    </v-layout>
</template>

<style>

</style>