// for(let index = 10; index >= 0; index--){
//     console.log(index);
// }


// const cars = ["spark , captiva , mol , san"]


// for ( let index = 0; index < cars.length; index++){
//     console.log(cars[index]);
// }



// const son = 7;

// if (son % 2 === 0) {
//     console.log(son + " juft son");
// } else {
//     console.log(son + " toq son");
// }

// let start = 1;  
// let end = 10;   

// for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " juft son");
//     } else {
//         console.log(i + " toq son");
//     }
// }

let boshlangichAray = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(boshlangichAray,"boshlangichAray");
let juftaray = [2, 4, 9, 10, 45, 67, 8, 90];
let juftSonlar = boshlangichAray.filter(num => num % 2 === 0);

console.log("Juft sonlar:", juftSonlar);
