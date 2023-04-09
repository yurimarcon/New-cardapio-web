import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation',{
    state: ()=>({
        acctive: 0
    }),
    actions: {
        setAcctive(value){
            this.acctive = value
        }
    }
})
