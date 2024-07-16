var data = {
    firstname:"",
    secondname:"",
    dob:"",
    fathername:"",
    mothername:"",
    address:"",
    gender:"",
    certify:"",
    skills:"",
    hobies:"",
    profile:"",
    badges:"",
    description:"",
}

function firstname(event){
    data.firstname = event.target.value;
}
function secondname(event){
    data.secondname = event.target.value;
}
function dob(event){
    data.dob = event.target.value;
}
function fathername(event){
    data.fathername = event.target.value;
}
function mothername(event){
    data.mothername = event.target.value;
}
function address(event){
    data.address = event.target.value;
}
function gender(event){
    data.gender = event.target.value;
}
function certify(event){
    data.certify = event.target.value;
}
function skills(event){
    data.skills = event.target.value;
}
function hobies(event){
    data.hobies = event.target.value;
}
function profile(event){
    data.profile = event.target.value;
}
function badges(event){
    data.badges = event.target.value;
}
function description(event){
    data.description = event.target.value;
}




var ssc = {
    yop_1:"",
    per_1:"",
    marks_1:"",
}
var inter = {
    yop_2:"",
    per_2:"",
    marks_2:"",
}
var diploma = {
    yop_3:"",
    per_3:"",
    marks_3:"",
}


function yop_1(event){
    data.yop_1 = event.target.value;
}
function per_1(event){
    data.per_1 = event.target.value;
}
function marks_1(event){
    data.marks_1 = event.target.value;
}
function yop_2(event){
    data.yop_2 = event.target.value;
}
function per_2(event){
    data.per_2 = event.target.value;
}
function marks_2(event){
    data.marks_2 = event.target.value;
}
function yop_3(event){
    data.yop_3 = event.target.value;
}
function per_3(event){
    data.per_3 = event.target.value;
}
function marks_3(event){
    data.marks_3= event.target.value;
}







function submit(event){
    console.log(data);
}