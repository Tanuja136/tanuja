function createGridWithBalls(n) {
    // Select the container where the grid will be appended
    var container = document.getElementById('gridContainer');

    // Create a new table element
    var table = document.createElement('table');

    // Create rows and cells dynamically
    for (var i = 0; i < n; i++) {
        // Create a table row (<tr>)
        var row = document.createElement('tr');

        for (var j = 0; j < n; j++) {
            // Create a table cell (<td>)
            var cell = document.createElement('td');

            // Create a ball (a colored circle)
            var ball = document.createElement('div');
            ball.className = 'ball'; // Apply CSS class for styling

            // Append the ball to the cell
            cell.appendChild(ball);

            // Append the cell to the current row
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }

    // Append the table to the container
    container.appendChild(table);
}

// Example usage: create a 3x3 grid with balls in each cell
createGridWithBalls(3);
