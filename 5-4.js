"use strict";
    const button=document.querySelectorAll("button");
    button.forEach(element => element.addEventListener("click", function(event){
        let _ = event.target.parentNode;
        if (_.children[3].innerText == "Подробнее"){
            _.children[3].innerText="Отмена";
            _.children[1].style.display = "none";
            _.children[2].style.display = "inline-flex";

        }  else {
            _.children[3].innerText="Подробнее";
            _.children[1].style.display = "inline-flex";
            _.children[2].style.display = "none";
        }
    }));
