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
            deliveryFee: 0.0,
            paymentMethod: null,
            value: 0.0,
            status: null,
            creatinDate: null,
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
        ],
        status: [
            {
                id: 1,
                name: "Em criação",
                icon: ""
            },
            {
                id: 2,
                name: "Enviado ao estabelecimento",
                icon: ""
            },
        ]
    }),
    actions:{
        createOrder(order){
            this.order = order;
        },
        addItems(items){
            this.order.items = items;
        },
        setValue(value){
            this.order.value = parseFloat(value);
        },
        setWithdrawalMethod(methodId){
            this.order.withdrawalMethod = methodId;
        },
        setAdress(adress){
            this.order.adress = adress;
        },
        setDeliveryFee(fee){
            this.order.deliveryFee = fee;
        },
        setPaymentMethod(paymentId){
            this.order.paymentMethod = paymentId;
        },
        setName(name){
            this.order.customerName = name;
        },
        setTel(tel){
            this.order.customerTel = tel;
        },
        finishOrder(){

            this.order.status = 2;
            this.order.creatinDate = new Date();
            this.lastOrders.push(this.order);

            this.order = {
                items: [],
                withdrawalMethod: null,
                customerName: null,
                customerTel: null,
                adress: {},
                deliveryFee: 0.0,
                paymentMethod: null,
                value: 0.0,
                status: null,
                history:[{
                    title: "Criação do pedido",
                    creationDate: new Date(),
                    comments: null
                }]
            };
        }
    }
})