"use strict";
let style = document.createElement("style")
    style.innerHTML = '.message-close{display:none;}.message {color:green; position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); line-height:19; border:1px black solid; border-radius:5px;height:25%;width:50%;background-color:white;text-align:center;}.close{position:absolute; top: 88%; left: 50%; transform:translate(-50%, -50%);};';
    document.head.append(style)

let div = document.createElement('div');
    div.className = "message";
    div.id = "message"
    div.insertAdjacentHTML("afterbegin", `<div class="alert" style="display:inline"> <strong>Всем привет!</strong> Вы прочитали важное сообщение.</div>`);
    div.insertAdjacentHTML("beforeend", `<button class="close" id="button" style="display:inline"> Ясно-понятно</button>`);
    document.body.append(div);

let close = document.querySelector(".close");
    close.onclick = function(){
        div.classList.toggle("message-close");
    };