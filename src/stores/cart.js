import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useCartStore = defineStore('cart', ()=>{
    const items = reactive([
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
            "countRequests": 0,
            "image": "https://s3.us-west-2.amazonaws.com/whatsmenu/production/brigadeirisa/products/640230/tpalhaitaliananinhonutellajpeg",
            "disponibility": {
                "week": {
                    "friday": [
                        {
                            "code": "dca8dr",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 5
                        }
                    ],
                    "monday": [
                        {
                            "code": "edipjq",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 1
                        }
                    ],
                    "sunday": [
                        {
                            "code": "qrm3e6",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 7
                        }
                    ],
                    "tuesday": [
                        {
                            "code": "xjkbql",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 2
                        }
                    ],
                    "saturday": [
                        {
                            "code": "payh84",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 6
                        }
                    ],
                    "thursday": [
                        {
                            "code": "u7m37g",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 4
                        }
                    ],
                    "wednesday": [
                        {
                            "code": "ezso6l",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 3
                        }
                    ]
                },
                "store": {
                    "table": false,
                    "package": false,
                    "delivery": true
                }
            },
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
            "countRequests": 0,
            "image": "https://s3.us-west-2.amazonaws.com/whatsmenu/production/brigadeirisa/products/712694/t202208071206142jpg",
            "disponibility": {
                "week": {
                    "friday": [
                        {
                            "code": "gahsqz",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 5
                        }
                    ],
                    "monday": [
                        {
                            "code": "zvr8rd",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 1
                        }
                    ],
                    "sunday": [
                        {
                            "code": "zu7byz",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 7
                        }
                    ],
                    "tuesday": [
                        {
                            "code": "n66bmf",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 2
                        }
                    ],
                    "saturday": [
                        {
                            "code": "6ammrd",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 6
                        }
                    ],
                    "thursday": [
                        {
                            "code": "ahecgq",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 4
                        }
                    ],
                    "wednesday": [
                        {
                            "code": "ndjgwp",
                            "open": "00:00",
                            "close": "23:59",
                            "active": true,
                            "weekDay": 3
                        }
                    ]
                },
                "store": {
                    "table": false,
                    "package": false,
                    "delivery": true
                }
            },
            "created_at": "2022-08-31 12:53:29",
            "updated_at": "2023-03-16 13:08:55",
            "complements": []
        }
    ])

    return { items };
})