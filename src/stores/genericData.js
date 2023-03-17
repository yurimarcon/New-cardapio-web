import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGenericDataStore = defineStore('genericData', () => {

  const baseUrl = "https://raw.githubusercontent.com/yurimarcon/New-cardapio-web/main/src/Data/Data.json";   
  const searchWord = ref("");
  const categories = reactive(ref([]));
  const genericData = reactive(ref([]));
    
  const categoriesFiltered = computed(() =>{
    if(categories.value && searchWord.value){
      return categories.value.filter(category=>
        category.name.toLowerCase().includes(searchWord.value.toLowerCase())
      )
    }
    return categories.value;
  });

  function getData(){
    fetch(baseUrl)
      .then(res=>res.json())
      .then(res=>{
        categories.value = res.categories;
        genericData.value = res;
    })
  }

  return { genericData, categories, categoriesFiltered, getData }
})
