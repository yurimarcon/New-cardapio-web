import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order',{
    state: () => ({
        order: null
    }),
    actions:{
        createOrder(order){
            this.order = order;
        }
    }
})