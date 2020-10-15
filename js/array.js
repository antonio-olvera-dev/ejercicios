//------------------------map--------------

// const num = [10, 12, 17, 40, 50, 60, 70, 80, 90, 100];
// let newNum = [];

// newNum = num.map((elem)=>{

//     let nu = elem*4;
//     console.log('El número multiplicado por 4 es: ',nu);
// return nu;
// });

// console.log(newNum);

//--------------filter-------------------------------



// let menores = num.filter((elem) => {

//     return elem < 18;
// });

// let mayores = num.filter((elem) => {


//     return elem >= 18;
// });

// console.log('Menores de edad',menores);
// console.log('Mayores de edad',mayores);


//--------------reduce-------------------------------
let num2 = [];
for (let i = 0; i < 10; i++) {

    num2.push(Math.random() * 10);

}
console.log(num2);

let redondear = num2.reduce((total, elem) => {

    let finish =  Math.round(total +elem);
    return finish;
});

console.log(redondear);