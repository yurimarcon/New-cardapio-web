import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order',{
    state: () => ({
        lastOrders:[],
        order: {
            items: [],
            withdrawalMethod: null,
            customerName: null,
            customerTel: null,
            adress: {},
            deliveryFee: 10.0,
            paymentMethod: null,
            value: 0.0,
            status: null,
            history:[{
                title: "Criação do pedido",
                creationDate: new Date(),
                comments: null
            }]
        },
        paymentMethods: [
            {
                id: 1,
                name: "PIX",
                description: "PIX",
                img: "https://logospng.org/download/pix/logo-pix-icone-256.png"
            },
            {
                id: 2,
                name: "Cartão de Débito",
                description: "Débito",
                img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Credit_or_Debit_Card_Flat_Icon_Vector.svg"
            },
            {
                id: 3,
                name: "Cartão de Crédito",
                description: "Crédito",
                img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Credit_or_Debit_Card_Flat_Icon_Vector.svg"
            },
            {
                id: 4,
                name: "Dinheiro",
                description: "Dinheiro",
                img: "https://assets.materialup.com/uploads/bcf6dd06-7117-424f-9a6e-4bb795c8fb4d/preview.png"
            }
        ],
        withdrawalMethods:[
            {
                id: 1,
                name: "Delivery",
                img: "./images/delivery.png"
            },
            {
                id: 2,
                name: "Retirada",
                img: "./images/retirar.png"
            }
        ]
    }),
    actions:{
        createOrder(order){
            this.order = order;
        },
        addItems(items){
            this.order.items = items;
            console.log("this.order", this.order)
        },
        setValue(value){
            this.order.value = parseFloat(value);
            console.log("this.order", this.order)
        },
        setWithdrawalMethod(methodId){
            this.order.withdrawalMethod = methodId;
            console.log("this.order", this.order)
        },
        setAdress(adress){
            this.order.adress = adress;
            console.log("this.order", this.order)
        },
        setDeliveryFee(fee){
            this.order.deliveryFee = fee;
            console.log("this.order", this.order)
        },
        setPaymentMethod(paymentId){
            this.order.paymentMethod = paymentId;
            console.log("this.order", this.order)
        },
        setName(name){
            this.order.customerName = name;
            console.log("this.order", this.order)
        },
        setTel(tel){
            this.order.customerTel = tel;
            console.log("this.order", this.order)
        },
        finishOrder(){
            this.lastOrders.push(this.order);
        }
    }
})