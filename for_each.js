import { student_data } from "./for_each2.js";
student_data.forEach(item => {
    if(item.roll == 1){
        item.name = "TANUJA";
    }
    
});
// console.log(student_data);
export default student_data;







// function generatePass() {
//     let pass = '';
//     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
//         'abcdefghijklmnopqrstuvwxyz0123456789@#$';

//     for (let i = 1; i <= 10; i++) {
//         let char = Math.floor(Math.random()* str.length + 1);

//         pass += str.charAt(char)
//     }

//     return pass;
// }

// console.log(generatePass());





// function generatePass(){
//     var password='';
//     var string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$";
//     for(var i=0 ; i<10; i++){
//         var num = Math.floor(Math.random()*string.length);
//         password += string.charAt(num);

//     }
//     return password;
// }
// console.log(generatePass());
