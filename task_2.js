const goods = {
    1: {
        id: 1,
        name: "Пальто",
        desription: "Пальто из шерсти",
        sizes: [44, 46, 50, 52],
        price: 10000,
        available: true,
    },
    2: {
        id: 2,
        name: "Кепка",
        desription: "NHL",
        sizes: [50],
        price: 2000,
        available: true,
    },
    3: {
        id: 3,
        name: "Рубашка",
        desription: "Белая",
        sizes: [48, 56],
        price: 2500,
        available: true,
    },
    4: {
        id: 4,
        name: "Брюки>",
        desription: "Guess",
        sizes: [46, 52],
        price: 5000,
        available: true,
    },
    5: {
        id: 5,
        name: "Ремень",
        desription: "Черный",
        sizes: [],
        price: 1500,
        available: true,
    },
}


const basket = [
    {
        goodID: 2,
        amount: 3,
    },
    {
        goodID: 4,
        amount: 2,
    },
    {
        goodID: 5,
        amount: 1,
    },
    {
        goodID: 3,
        amount: 5,
    },
]


function basketDeletePosition(a, i) {
    delete a[i];
}


function basketAddPosition(a, id, amount) {
    a.push({
        goodID: id,
        amount: amount,
    })
}


function basketClear(a) {
    a.forEach(function(elem, i) {
        delete a[i];
    }); 
}


function amountAndPrice(order) {
    var totalAmount = 0;
    var totalSumm = 0
    order.forEach(function(elem) {
        totalAmount += elem.amount;
        totalSumm += goods[elem.goodID].price * elem.amount;
    });
    result = {
        totalAmount: totalAmount,
        totalSumm: totalSumm
    }
    return result
}


basketDeletePosition(basket, 0) //удаление первого элемента из корзины
basketAddPosition(basket, 1, 1) //добавление товара ID = 1
basketClear(basket) //очищение корзины
basketAddPosition(basket, 5, 2) //добавление товара ID = 5
basketAddPosition(basket, 3, 4) //добавление товара ID = 3
console.log(amountAndPrice(basket)) //подсчет количества товара в корзине, а также его стоимость
