



function printPyramid() {
    
    var inputValue = document.getElementById("height").value;
    x = parseInt(inputValue);

    return drawPyramid(x);

    

}


var button = document.querySelector('button');
button.addEventListener("click", printPyramid);

 function drawPyramid(height) {    

	  var symbolInput = document.getElementById("symbols").value;
console.log(symbolInput);
let brick = symbolInput;
    
    // removes existing pyramid
    var pyramidDiv = document.getElementById("pyramid");
    while (pyramidDiv.firstChild) {
        pyramidDiv.removeChild(pyramidDiv.firstChild);
    }


    for (var row = 0; row < height; row++) {

        var numBricks = row + 2;
        var numSpaces = height - row - 1;

    
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += ".";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick;

        }

        textElem = document.createTextNode(rowStr);

        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);


        document.getElementById("pyramid").appendChild(rowElem);
    }
}