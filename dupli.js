var data = [
    { name: "Tanuja", roll_num: "23P35A0411", college: "ACET", gender: "female", update: "UPDATE", remove: "REMOVE" },
    { name: "Parimala", roll_num: "23P35A0412", college: "ACET", gender: "female", update: "UPDATE", remove: "REMOVE" },
    { name: "Anusha", roll_num: "23P35A0414", college: "ACET", gender: "female", update: "UPDATE", remove: "REMOVE" },
    { name: "Chandrika", roll_num: "2376GY5C2", college: "AEC", gender: "female", update: "UPDATE", remove: "REMOVE" },
];

// Header Creation
var a = document.getElementsByClassName("button_1")[0];
a.style = 'width:10%;height:8%;padding:10px;font-weight:600;font-size:25px;border-radius:10px;box-shadow:0px 0px 15px black;margin-top:30%;margin-left:43%';
var tr_1 = document.createElement("tr");
var parent = document.getElementsByClassName("my_table")[0];
parent.appendChild(tr_1);

var headers = ["Name", "Roll Number", "College", "Gender", "Updation", "Deletion"];
headers.forEach(header => {
    var th = document.createElement("th");
    th.innerHTML = header;
    tr_1.appendChild(th);
});
tr_1.style = "background-color:orange";

var x = document.getElementsByClassName("my_table")[0];
x.style = "display:none;width:fit-content;height:fit-content;position:absolute;top:30%;left:35%;border:none";

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

// 3on updateCell(input) {
//     var cell = input.parentElement;
//     cell.innerHTML = input.value;
// }

addRemoveFunctionality(); // To add functionality to initial data
addUpdateFunctionality(); // To add functionality to initial data