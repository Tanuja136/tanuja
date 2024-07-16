var n = parseInt(window.prompt("Enter any Number To create N/N Grid"));
var m = document.getElementById("messageDisplay")
var c = document.getElementById("celeb")
var icon2=`<i id="i2" class="fa-brands fa-react"></i>`
var imgg =`<img class="celebrate" src="./celebration.gif">`

// let ros = 0;
// let col = 0;





var x=document.getElementsByClassName("my_table")[0];
var icon1=`<img class="img1" src="./dakooters-running (1).gif">`


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
        alert("Heyy..Stop you cannot move TOP")
    }
    else if(cr==n-1 && direction=='bottom')
    {
        alert("Heyy..Stop you cannot move BOTTOM")

    }
    else if(cc==0 && direction=='left')
        {
            alert("Heyy..Stop you cannot move LEFT")
    
        }
    else if(cc==n-1 && direction=='right')
            {
                alert("Heyy..Stop You cannot move RIGHT")
        
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
        if (score == 5) {
            var msg = document.createElement("span")
            msg.innerHTML="HURRAYY!!!...You Scored 5";
            m.appendChild(msg)
            var dec = document.createElement("div")
            dec.innerHTML = imgg;
            c.appendChild(dec)
    
        }
        rand()
        
     }

 document.getElementById(`${cr}${cc}`).innerHTML=icon1;
}
function fun()
{
    alert(score)
}
