var n=parseInt(window.prompt("Enter Value Between 2-6"));

var icon2=`<i class="fa-solid fa-fish"></i>`

let ros = 0;
let col = 0;





var x=document.getElementsByClassName("mydiv1")[0];
var icon1=`<i class="fa-solid fa-cat"></i>`


function rand()
{
    ros=Math.trunc(Math.random()*n);
    col=Math.trunc(Math.random()*n);
    document.getElementById(`${ros}${col}`).innerHTML = icon2;
    // console.log(ros,col)

}


for(var i=0;i<n;i++)
{
    var row=document.createElement("tr");
    for(var j=0;j<n;j++)
    {
        
        var cell=document.createElement("td");
        // console.log(ran)
        cell.id=`${i}${j}`;
        if(i==0 && j==0)
            {
            //    cell.classList.add('active')
            cell.innerHTML = icon1;
            }
        row.appendChild(cell)
    }
    x.appendChild(row)

}
rand()



var cr=0;
var cc=0;
var score=0;
function move(direction)
{
    document.getElementById(`${cr}${cc}`).innerHTML='';
   
    if(cr==0 && direction=='top')
    {
        alert("Your Moving Top Out Of Bound")
    }
    else if(cr==n-1 && direction=='bottom')
    {
        alert("Your Moving Bottom Out Of Bound")

    }
    else if(cc==0 && direction=='left')
        {
            alert("Your Moving Left Out Of Bound")
    
        }
    else if(cc==n-1 && direction=='right')
            {
                alert("Your Moving Right Out Of Bound")
        
            }
    else if(direction=='top' && cr>0 )
    {
        cr--;
    }
    else if(direction=='bottom' && cr<n-1 )
    {
        cr++;
    }
    else if(direction=='left' && cc>0)
    {
        cc--;
    }
    else if(direction=='right' && cc<n-1)
     {
            cc++;
     }
     if(cc==col && cr==ros)
     {
        
        
        score++;
        rand()
        
     }

 document.getElementById(`${cr}${cc}`).innerHTML=icon1;
}
function fun()
{
    alert(score)
}

