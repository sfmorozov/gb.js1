//1. Получить все товары, у которых есть фотографии
//2. Отсортируйте товары по цене (от низкой цены к высокой)

'use strict'
const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 780,
    },
    {
        id: 1,
        price: 7,
    },
    {
        id: 4,
        price: 99,
        photos: [
            "5.jpg"
        ]
    },
    {
        id: 999,
        price: 78,
        photos: [
            "8.jpg",
            "9.jpg",
            "4.jpg",
        ]
    },
];

let result = products.filter(products => 
    Array.isArray(products.photos) &&
    products.photos != 0);
console.log(result);

products.sort(function (a, b) {
    if (a.price < b.price) {
        return a.price - b.price;
    }
});
console.log(products);