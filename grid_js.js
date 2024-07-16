var n=parseInt(window.prompt("Enter The Number"))

var x=document.getElementsByClassName("tab")[0];


var icon2=`<i class="fa-solid fa-fish"></i>`

let ros = 0;
let cols = 0;
function rand()
{
    ros=Math.trunc(Math.random()*n);
    cols=Math.trunc(Math.random()*n);
    document.getElementById(`${ros}${cols}`).innerHTML = icon2;
    console.log(ros,cols)

}




for(var i=0;i<n;i++)
{
    var row=document.createElement("tr");
    for(var j=0; j<n; j++)
    {

        var col = document.createElement("td");
        row.appendChild(col);
        if(i==0 && j==0){
            var ball = document.createElement("div")
            ball.style = "height:80%;width:90%;border-radius:100%;background: rgb(240,150,90);background: radial-gradient(circle, rgba(240,150,90,1) 41%, rgba(236,233,246,1) 100%);box-shadow: 0px 0px 13px 5px rgb(237, 211, 211);border:1px solid #f4ae7f;margin-left:5%";
           ball.id = "ball";
            col.appendChild(ball)

        }

    }
    x.appendChild(row);
}

var currentRow = 0;
var currentCol = 0;

function moveRight() {
    moveBall(currentRow, (currentCol + 0) % n);
    if (currentCol < n - 1) {
        moveBall(currentRow, currentCol + 1);
    } else {
        alert("Cannot move right");
    }
}

function moveLeft() {
    moveBall(currentRow, (currentCol - 0 + n) % n);
    if (currentCol > 0) {
        moveBall(currentRow, currentCol - 1);
    } else {
        alert("Cannot move left");
    }
}

function moveUp() {
    moveBall((currentRow - 0 + n) % n, currentCol);
    if (currentRow > 0) {
        moveBall(currentRow - 1, currentCol);
    } else {
        alert("Cannot move up");
    }
}

function moveDown() {
    moveBall((currentRow + 0) % n, currentCol);
    if (currentRow < n - 1) {
        moveBall(currentRow + 1, currentCol);
    } else {
        alert("Cannot move down");
    }
}









function moveBall(newRow, newCol) {
    var ball = document.getElementById('ball');
    var rows = document.getElementsByTagName('tr');

    // Remove the ball from the current cell
    rows[currentRow].getElementsByTagName('td')[currentCol].removeChild(ball);

    // Update the ball's position
    currentRow = newRow;
    currentCol = newCol;

    // Append the ball to the new cell
    rows[currentRow].getElementsByTagName('td')[currentCol].appendChild(ball);
}











