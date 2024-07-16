var data = {
    firstname:"",
    college:"",
}

function firstname(event){
    data.firstname = event.target.value;
}
function college(event){
    data.college = event.target.value;
}

function submit(event){
    console.log(data);
}