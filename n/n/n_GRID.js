var n=parseInt(window.prompt("Enter The Number"))

var x=document.getElementsByClassName("tab")[0];
for(var i=0;i<n;i++)
{
    var row=document.createElement("tr");
    for(var j=0; j<n; j++)
    {
        var col = document.createElement("td");
        row.appendChild(col);

    }
    x.appendChild(row);
}
