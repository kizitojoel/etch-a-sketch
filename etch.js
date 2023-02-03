//Select global elements to avoid redefining of variables in each function
const grid = document.querySelector(".container");

//Select the slider for the gride and listen for any changes to the number of grid boxes
const slider = document.querySelector("#gridSize");
slider.addEventListener('change', drawGrid);


//Function that draws the number of boxes in the grid
function drawGrid(){
    //Clear anything that is present in the grid
    grid.innerHTML = "";
    const gridNumber = this.value;
    //For gridNumber number of rows, add a row to the container
    for (let i = 0; i < gridNumber; i++)
    {
        let gridRow = document.createElement("div");
        gridRow.setAttribute("class", "container-row");
        grid.appendChild(gridRow)
        //For gridNumber number of columns, add an item to the container
        for(let j = 0; j < gridNumber; j++)
        {
            const gridItem = document.createElement("div");
            gridItem.setAttribute("class", "grid-item");
            gridRow.appendChild(gridItem);
        }


    }
}