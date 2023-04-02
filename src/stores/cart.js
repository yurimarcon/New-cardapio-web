import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () =>({
        items: [
            // {
            //     "id": 640230,
            //     "categoryId": 96673,
            //     "status": 1,
            //     "order": 0,
            //     "name": "Palha Italiana Ninho&Nutella",
            //     "description": "Feito com um delicioso brigadeiro branco, bolacha maisena e nutella pura dando um toque super especial e saboroso na palha. (aproxi. 80gr)",
            //     "value": 10,
            //     "promoteValue": 6.99,
            //     "promoteStatus": 0,
            //     "valueTable": 0,
            //     "promoteValueTable": 0,
            //     "promoteStatusTable": 0,
            //     "countRequests": 1,
            //     "image": "https://s3.us-west-2.amazonaws.com/whatsmenu/production/brigadeirisa/products/640230/tpalhaitaliananinhonutellajpeg",
            //     "created_at": "2022-07-06 15:35:18",
            //     "updated_at": "2023-02-28 11:02:03",
            //     "complements": []
            // }
        ]
    }),
    getters:{
        getCartValue: (state)=>{
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
            let duplicatedItem = false;
            this.items.forEach(itemInCart =>{
                if(itemInCart.id == item.id){
                    itemInCart.countRequests += quantity;
                    itemInCart.complements.push({ 
                        observation: observation 
                    });
                    duplicatedItem = true;
                }
            })
            if(!duplicatedItem){
                item.countRequests = quantity
                this.items.push({
                    ...item,
                    countRequests: quantity,
                    complements:[{
                        observation: observation
                    }]
                })
            }
        },
        deleteItemFromCart(paramItemId){
            this.items = this.items.filter(item => item.id != paramItemId );
        },
        cleanCart(){
            this.items = [];
        }
    }
})