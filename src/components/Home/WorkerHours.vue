<script setup>
import {ref, onMounted} from 'vue';

const prop = defineProps({
  weekDay: Object
})
let dialog = ref(false);

onMounted(()=>{
  console.log(prop.weekDay)
})
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
          
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">
                    Dia
                  </th>
                  <th class="text-left">
                    Horários
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Domingo</td>
                  <td v-if="prop.weekDay.sunday[0]?.open">
                    {{ prop.weekDay.sunday[0]?.open + " às " + prop.weekDay.sunday[0]?.close }}
                  </td>
                  <td v-else>
                    Fechado
                  </td>
                </tr>
                <tr>
                  <td>Segunda</td>
                  <td v-if="prop.weekDay.monday[0]?.open">
                    {{ prop.weekDay.monday[0]?.open + " às " + prop.weekDay.monday[0]?.close }}
                  </td>
                  <td v-else>
                    Fechado
                  </td>
                </tr>
                <tr>
                  <td>Terça</td>
                  <td v-if="prop.weekDay.tuesday[0]?.open">
                    <tr>
                      {{ prop.weekDay.tuesday[0]?.open + " às " + prop.weekDay.tuesday[0]?.close }}
                    </tr>
                    <tr v-if="prop.weekDay.tuesday[1]?.open">
                      {{ prop.weekDay.tuesday[1]?.open + " às " + prop.weekDay.tuesday[1]?.close }}
                    </tr>
                  </td>
                  <td v-else>
                    Fechado
                  </td>
                </tr>
                <tr>
                  <td>Quarta</td>
                  <td v-if="prop.weekDay.wednesday[0]?.open">
                    {{ prop.weekDay.wednesday[0]?.open + " às " + prop.weekDay.wednesday[0]?.close }}
                  </td>
                  <td v-else>
                    Fechado
                  </td>
                </tr>
                <tr>
                  <td>Quinta</td>
                  <td v-if="prop.weekDay.thursday[0]?.open">
                    {{ prop.weekDay.thursday[0]?.open + " às " + prop.weekDay.thursday[0]?.close }}
                  </td>
                  <td v-else>
                    Fechado
                  </td>
                </tr>
                <tr>
                  <td>Sexta</td>
                  <td v-if="prop.weekDay.friday[0]?.open">
                    {{ prop.weekDay.friday[0]?.open + " às " + prop.weekDay.friday[0]?.close }}
                  </td>
                  <td v-else>
                    Fechado
                  </td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td v-if="prop.weekDay.saturday[0]?.open">
                    {{ prop.weekDay.saturday[0]?.open + " às " + prop.weekDay.saturday[0]?.close }}
                  </td>
                  <td v-else>
                    Fechado
                  </td>
                </tr>
              </tbody>
            </v-table>
          
        </v-card-text>
        <v-card-actions>
          
          <v-btn 
          class="mx-auto mb-3"
          color="red"
          variant="outlined"
          rounded="pill"
          @click="dialog = false">
            Close Dialog
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div> 
</template>


<style>

</style>