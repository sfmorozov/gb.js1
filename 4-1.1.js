//Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который
// принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product
// должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.

"use strict";
/**
 * Реализация задачи на es5
 */

function Product(name, price) {
    this.name = name;
    this.price = price;
    this.make25PercentDiscount = function () {
        this.price = this.price - (this.price * 0, 25);
        return this.price;
    };
};

let products = new Product("bread", 100);

console.log(products);
products.make25PercentDiscount();
console.log(products);

/**
 * Реализация задачи на es6
 */

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * 0, 25);
    }
}

let products = new Product("bread", 100);

console.log(products);
products.make25PercentDiscount();
console.log(products);