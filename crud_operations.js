var data = [
    {
        name:"Tanuja",
        roll_num:"23P35A0411",
        college:"ACET",
        gender:"female",
    },
    {
        name:"Parimala",
        roll_num:"23P35A0412",
        college:"ACET",
        gender:"female",
    },
    {
        name:"Anusha",
        roll_num:"23P35A0414",
        college:"ACET",
        gender:"female",
    },
    {
        name:"Chandrika",
        roll_num:"2376GY5C2",
        college:"AEC",
        gender:"female",
    },
]

var table_d = true;

function btn(){
    if(table_d == true)
        {
var t = document.getElementsByClassName("my_table")[0];
data.map((ele) =>{
    // console.log(ele)
    var table_row = document.createElement("tr");
    Object.entries(ele).map(data_2 =>{
        // console.log(data_2)
        var table_data = document.createElement("td")
        table_data.innerHTML=data_2[1]
        table_row.appendChild(table_data);
    })
    t.appendChild(table_row);
})

table_d= false;
        }
        else{
            // console.log("dhv")
            var table_row = document.createElement("tr");
            Object.entries(data[0]).map(data_2 =>{
                // console.log(data_3)
                var table_data = document.createElement("td")
                table_data.innerHTML = window.prompt(data_2[0])
                table_row.appendChild(table_data)
            })
            t.appendChild(table_row);
        }
}