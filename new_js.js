var data = [
    { name: "Tanuja", roll_num: "23P35A0411", college: "ACET", gender: "female", update: "UPDATE", remove: "REMOVE" },
    { name: "Parimala", roll_num: "23P35A0412", college: "ACET", gender: "female", update: "UPDATE", remove: "REMOVE" },
    { name: "Anusha", roll_num: "23P35A0414", college: "ACET", gender: "female", update: "UPDATE", remove: "REMOVE" },
    { name: "Chandrika", roll_num: "2376GY5C2", college: "AEC", gender: "female", update: "UPDATE", remove: "REMOVE" },
];



var a = document.getElementsByClassName("button_1")[0];
a.style = 'background-color:aqua;width:10%;height:8%;padding:10px;font-weight:600;font-size:25px;border-radius:10px;box-shadow:0px 0px 15px black;margin-top:30%;margin-left:43%';
var tr_1 = document.createElement("tr");
var parent = document.getElementsByClassName("my_table")[0];
parent.appendChild(tr_1);

var headers = ["NAME", "ROLL NUMBER", "COLLEGE", "GENDER", "UPDATION", "DELETION"];
headers.forEach(header => {
    var th = document.createElement("th");
    th.innerHTML = header;
    tr_1.appendChild(th);
});
tr_1.style = "background-color:#CCE6EC;font-weight:900";

var x = document.getElementsByClassName("my_table")[0];
x.style = "display:none;width:fit-content;height:fit-content;position:absolute;top:15%;left:25%;";




// For Entering the array data into Table
entering_data(data);
function entering_data(data) {
    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].roll_num}</td>
                        <td>${data[i].college}</td>
                        <td>${data[i].gender}</td>
                        <td class="update-btn">${data[i].update}</td>
                        <td class="remove-btn">${data[i].remove}</td>
                    </tr>`;
        x.innerHTML += row;
    }
    addRemoveFunctionality();
    addUpdateFunctionality();
}



// To add the data
function btn() {
    if (x.style.display != "block") {
        x.style.display = "block";
    } else {
        var obj = {
            name: window.prompt("Enter the Name"),
            roll_num: window.prompt("Enter your Roll Number"),
            college: window.prompt("Enter your Campus"),
            gender: window.prompt("Enter Gender"),
            update: "UPDATE",
            remove: "REMOVE",
        };
        var row = `<tr>
                        <td>${obj.name}</td>
                        <td>${obj.roll_num}</td>
                        <td>${obj.college}</td>
                        <td>${obj.gender}</td>
                        <td class="update-btn">${obj.update}</td>
                        <td class="remove-btn">${obj.remove}</td>
                    </tr>`;
        x.innerHTML += row;
        addRemoveFunctionality();
        addUpdateFunctionality();
    }
}




// For Deleting the rows
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





// For Updating the rows
function addUpdateFunctionality() {
    var rows = x.getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i++) {
        var updateBtn = rows[i].getElementsByClassName("update-btn")[0];
        updateBtn.onclick = function () {
            var row = this.parentElement;
            var cells = row.getElementsByTagName("td");

            for (var j = 0; j < cells.length - 2; j++) {     // Exclude update and remove cells

                var currentValue = cells[j].innerText;
                cells[j].innerHTML = `<input type='text' value='${currentValue}' onchange='updateCell(this)'>`;

            }
        };
    }
}



function updateCell(input) {
    var cell = input.parentElement;
    cell.innerHTML = input.value;
}

addRemoveFunctionality(); // To add functionality to initial data
addUpdateFunctionality(); // To add functionality to initial data

