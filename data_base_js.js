// 
var data = [
    { name: "Tanuja", roll_num: "23P35A0411", college: "ACET", gender: "female", update: "UPDATE", remove: "REMOVE" },
    { name: "Parimala", roll_num: "23P35A0412", college: "ACET", gender: "female", update: "UPDATE", remove: "REMOVE" },
    { name: "Anusha", roll_num: "23P35A0414", college: "ACET", gender: "female", update: "UPDATE", remove: "REMOVE" },
    { name: "Chandrika", roll_num: "2376GY5C2", college: "AEC", gender: "female", update: "UPDATE", remove: "REMOVE" },
];

//Header Creation
var a = document.getElementsByClassName("button_1")[0];
a.style='background-color:aqua;width:10%;height:8%;padding:10px;font-weight:600;font-size:25px;border-radius:10px;box-shadow:0px 0px 15px black;margin-top:30%;margin-left:43%'


var tr_1=document.createElement("tr");
var parent = document.getElementsByClassName("my_table")[0];
parent.appendChild(tr_1);

// var th_2=document.createElement("th");
// var row_1=document.getElementsByTagName("tr")[0];
// row_1.appendChild(th_2).innerHTML="Name";
// row_1.style = "background-color:orange"

// var th_3=document.createElement("th");
// var row_1=document.getElementsByTagName("tr")[0];
// row_1.appendChild(th_3).innerHTML="Roll Number";

// var th_4=document.createElement("th");
// var row_1=document.getElementsByTagName("tr")[0];
// row_1.appendChild(th_4).innerHTML="College";

// var th_5=document.createElement("th");
// var row_1=document.getElementsByTagName("tr")[0];
// row_1.appendChild(th_5).innerHTML="Gender";

// var th_7=document.createElement("th");
// var row_1=document.getElementsByTagName("tr")[0];
// row_1.appendChild(th_7).innerHTML="Updation";

// var th_6=document.createElement("th");
// var row_1=document.getElementsByTagName("tr")[0];
// row_1.appendChild(th_6).innerHTML="Deletion";



var headers = ["Name", "Roll Number", "College", "Gender", "Updation", "Deletion"];
headers.forEach(header => {
    var th = document.createElement("th");
    th.innerHTML = header;
    tr_1.appendChild(th);
});
tr_1.style = "background-color:orange";


var x = document.getElementsByClassName("my_table")[0];
x.style="display:none;width:fit-content;height:fit-content;position:absolute;top:30%;left:35%;border:none";


//For Entering the array data into Table
entering_data(data)

function entering_data(data){
    for(var i=0;i < data.length;i++){
        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].roll_num}</td>
                        <td>${data[i].college}</td>
                        <td>${data[i].gender}</td>
                        <td>${data[i].update}</td>
                        <td>${data[i].remove}</td>
                    </tr>`
        x.innerHTML += row;
    }
}



//To add the data
function btn(){
    if(x.style.display != "block"){
        x.style.display = "block"
    }
    else{
        var obj = {
            name : window.prompt("Enter the Name"),
            roll_num : window.prompt("Enter your Roll Number"),
            college : window.prompt("Enter your Campus"),
            gender : window.prompt("Enter Gender"),
            update :"UPDATE",
            remove : "REMOVE",
        }
        // data.push(obj)
        var row = `<tr>
                        <td>${obj.name}</td>
                        <td>${obj.roll_num}</td>
                        <td>${obj.college}</td>
                        <td>${obj.gender}</td>
                        <td>${obj.update}</td>
                        <td>${obj.remove}</td>
                    </tr>`;
        x.innerHTML += row;
    }
}


//For deleting the row

// for(var i=1;i<x.rows.length;i++)
//     {
//         x.rows[i].cells[5].onclick = function(){

//             var index=this.parentElement.rowIndex;
//             x.deleteRow(index);
//         }
        
//     }

function addRemoveFunctionality() {
    var rows = x.getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i++) {
        var removeBtn = rows[i].getElementsByClassName("remove-btn")[0];
        removeBtn.onclick = function () {
            var row = this.parentElement;
            row.parentElement.removeChild(row);
        };
    }
}




























//For Deleting the rows
// function addRemoveFunctionality(){
//     var rows = x.getElementsByTagName("tr");
//     for(var i=1;i< rows.length;i++){
//         var removeBtn = getElementsByClassName("remove-btn")[0];
//         removeBtn.onclick = function(){
//             var row = this.parentElement;
//             row.parentElement.removeChild(rows);
//         };
//     }
// }




// For Updating the rows
// function addUpdateFunctionality(){
//     var rows = x.getElementsByTagName("tr");
//     for(var i=1;i < rows.length;i++){
//         var updateBtn = rows[i].getElementsByClassName("update-btn")[0];
//         updateBtn.onclick = function(){
//             var row = this.parentElement;
//             var cells = row.getElementsByTagName("td");

//             for(var j=0 ; j< cells.length-2 ; j++){
//                 var currrentValue = cells[j].innerText;
//                 cells[j].innerHTML = "<input type='text' value ='${currentValue}' onchange = 'updateCell(this)'/>";
//             }
//         }
//     }
// }



// function updateCell(input){
//     var cell = input.parentElement;
//     cell.innerHTML = input.value;
// }


// addRemoveFunctionality();
// addUpdateFunctionality();

































































