import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () =>({
        items: [
            {
                "id": 640230,
                "categoryId": 96673,
                "status": 1,
                "order": 0,
                "name": "Palha Italiana Ninho&Nutella",
                "description": "Feito com um delicioso brigadeiro branco, bolacha maisena e nutella pura dando um toque super especial e saboroso na palha. (aproxi. 80gr)",
                "value": 10,
                "promoteValue": 6.99,
                "promoteStatus": 0,
                "valueTable": 0,
                "promoteValueTable": 0,
                "promoteStatusTable": 0,
                "countRequests": 1,
                "image": "https://s3.us-west-2.amazonaws.com/whatsmenu/production/brigadeirisa/products/640230/tpalhaitaliananinhonutellajpeg",
                "created_at": "2022-07-06 15:35:18",
                "updated_at": "2023-02-28 11:02:03",
                "complements": []
            },
            {
                "id": 712694,
                "categoryId": 96673,
                "status": 1,
                "order": 0,
                "name": "Pão de mel Doce de Leite",
                "description": "Massa fofinha e umida recheado com doce de leite caseiro (aquele cozido na panela de pressão, sabe?) Peso aprox. 90gr 6x6",
                "value": 6,
                "promoteValue": 10.99,
                "promoteStatus": 0,
                "valueTable": 0,
                "promoteValueTable": 0,
                "promoteStatusTable": 0,
                "countRequests": 2,
                "image": "https://s3.us-west-2.amazonaws.com/whatsmenu/production/brigadeirisa/products/712694/t202208071206142jpg",
                "created_at": "2022-08-31 12:53:29",
                "updated_at": "2023-03-16 13:08:55",
                "complements": []
            }
        ]
    }),
    getters:{
        getCartValue: (state)=>{
            // if(!state.items.length)
            //     return 0;
            
            let total = 0;
            state.items.forEach(item=>{
                total += (item.countRequests * item.value)
            })
            return total.toFixed(2);
        }
    },
    actions: {
        addQuantityInItem(paramItemId){
            this.items.forEach(item => {
                if(item.id == paramItemId){
                    item.countRequests++;
                }
            })
        },
        removeQuantityInItem(paramItemId){
            this.items.forEach(item => {
                if(item.id == paramItemId){
                    if(item.countRequests > 1){
                        item.countRequests--;
                    }
                }
            })
        },
        addItemIntoCart(item, quantity, observation){
            console.log(observation)
            item.countRequests = quantity
            this.items.push({
                ...item,
                countRequests: quantity,
                complements:[{
                    observation: observation
                }]
            })
        },
        deleteItemFromCart(paramItemId){
            this.items = this.items.filter(item => item.id != paramItemId );
        },
        cleanCart(){
            this.items = [];
        }
    }
})