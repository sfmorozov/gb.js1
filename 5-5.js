"use strict";
function paintPlate(){
    const parent = document.querySelector(".chessPlate");
    const cells = [];
        for(let i=0;i<64;i++){
        cells.push({
            color: i%2?'black':'white',
            x: i%8,
            y: ~~(i/8)
        });

    };
console.log(cells);
};


// for (let row=1; row<=8; row++){
//     for (let cell=1; cell<=8; cell++){
//             const div = document.createElement('div');
//             if (row%2 == 0 && cell%2 == 0){
//                 div.className = "cell blck";
//             }div.className = "cell";
            
//         };
//     };
// };