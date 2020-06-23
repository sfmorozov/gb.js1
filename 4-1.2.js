// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства
// объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать
// его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date.
// Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также
// в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
// Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать
// свойству highlighted значение true.

"use strict";
/**
 * Реализация задачи на es5
 */

function Post(author, text, date) {
    this.author = author,
    this.text = text,
    this.date = date
    this.edit = function (text) {
        this.text = text
    }
}
let letter = new Post("Admin", "You account data in attach", "10.10.10");
console.log(letter);
letter.edit("You account data in attach archive below");
console.log(letter);

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false
    this.makeTextHighlighted = function () {
        this.highlighted = true
    }
}

letter = new AttachedPost("User", "Thx a lot", "11.10.10");
console.log(letter);
letter.makeTextHighlighted();
console.log(letter);
letter.edit("Thx")
console.log(letter);


/**
 * Реализация задачи на es6
 */

class Post {
    constructor(author, text, date) {
        this.author = author,
        this.text = text,
        this.date = date
    }

    edit(text) {
        this.text = text
    }
}
let letter = new Post("Admin", "You account data in attach", "10.10.10");
console.log(letter);
letter.edit("You account data in attach archive below");
console.log(letter);

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date),
        this.highlighted = false
    }

    makeTextHighlighted() {
        this.highlighted = true
    }
}
letter = new AttachedPost("User", "Thx a lot", "11.10.10");
console.log(letter);
letter.makeTextHighlighted();
console.log(letter);
letter.edit("Thx")
console.log(letter);