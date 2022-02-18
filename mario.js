

var userSelection = document.querySelector('Select');
userSelection.addEventListener("change", printPyramid);

var inputHeight = document.getElementById("height");
inputHeight.addEventListener("input", printPyramid);

function printPyramid() {
    
    var inputValue = document.getElementById("height").value;
    x = parseInt(inputValue);
    return drawPyramid(x);  

}

 function drawPyramid(height) {    

	  var symbolInput = document.getElementById("symbols").value;
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

				document.getElementById("sliderValue").innerHTML = height;
			
    }
}

