import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alert', {
    state: () =>({
        info:{
            icon: "mdi-info",
            text: "",
            show: false
        }
    }),
    actions: {
        showInfo(message){
            this.info.text = message;
            this.info.show = true;
            setTimeout(()=>{
                this.info.show = false;
            }, 2000)
        }
    }
})