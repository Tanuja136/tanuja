// console.log("hii")

// a=parseInt(window.prompt("Enter first value"));
// b=parseInt(window.prompt("Enter second value"));
// if(a>b){
//     console.log(a);
// }
// else{
//     console.log(b,typeof b);
// }

// var x=[10,11,12,13,15];
// console.log(x)
// console.log(x.length,typeof x)

// var t=[1,2,3,14,25,6];
// t.splice(2,1,7,8,9);
// console.log(t.slice(1,5));

// var p=['tanu','param'];
// p.map(ele =>{
//     console.log(ele,typeof ele);
//     console.log(ele,typeof p);
// })


// console.log("tanu"+1+2)


// To Check PRIME NUMBER OR NOT,

const num=parseInt(prompt("enter number"));
if(num === 1){
    console.log("1 is neither prime nor composite")
}
else if(num > 1){
for(var i=2;i <num;i++){
    if(num % i == 0){
        console.log(num + " is not a prime number");
    }
    else{
        console.log(num + " is a prime number");
    }
}
}




//to check number is positive negative or zero

// const number=parseInt(prompt("enter a number"));
// if(number === 0){
//     console.log("number is zero")
// }
// else if(number > 0){
//     console.log("number is positive")
// }
// else{
//     console.log("number is negative")
// }


