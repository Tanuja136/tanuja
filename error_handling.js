// try{
// {
//     let x=2;
// }
// console.log(x);
// }
// catch(er){
//     console.log(er);
//     console.log(er.name);
//     console.log(er.message);
// }
// finally{
//     console.log("It is execute irrespective of any errors in the code")
// }




//To print CUSTOMIZED ERRORS  ===>  we use THROW

try{
    {
    let a = window.prompt("enter any name");
    if(a == "tanu"){
        throw{
            name:'tanu',
            message:'error'
        }
    }
}
    console.log(a)
}
catch(err){
    console.log(err);
    console.log(err.name);
    console.log(err.message);
}
finally{
    console.log("It is execute irrespective of any errors in the code")
}
