//Variabelen die knoppen selecteren uit html en achtergrond muziek

var blueBodyButton = document.querySelector("#blueBody");
var redBodyButton = document.querySelector("#redBody");
var greenBodyButton = document.querySelector("#greenBody");
var pinkBodyButton = document.querySelector("#pinkBody");
var randomBodyButton = document.querySelector("#shuffleButtonBody")
var bodyImage = document.querySelector("#blikjeBody");

var greyConeButton = document.querySelector("#greyCone");
var mintConeButton = document.querySelector("#mintCone");
var orangeConeButton = document.querySelector("#orangeCone");
var purpleConeButton = document.querySelector("#purpleCone");
var randomConeButton = document.querySelector("#shuffleButtonCone");
var coneImage = document.querySelector("#coneImage");

var labelinputText = document.querySelector('input')
var labelSubmitButton = document.querySelector("#submitLabelButton");
var realLabeltext = document.querySelector("#labelText")

var squareButton = document.querySelector("#shapeSquare")
var rectangleButton = document.querySelector("#shapeRectangle")
var hexagonButton = document.querySelector("#shapeHexagon")
var circleButton = document.querySelector("#shapeCircle")
var labelShapeImage = document.querySelector("#labelShape");
var randomShapeButton = document.querySelector("#shuffleButtonShape")


 var backgroundAudio = new Audio('sounds/kahootTheme.mp3');
 backgroundAudio.play();
 backgroundAudio.loop = true;
 backgroundAudio.volume = 0.008;
 

// var backgroundAudio = document.getElementById("achtergrondMuziek");
 

     backgroundAudio.onload = function(){
     backgroundAudio.play();
     backgroundAudio.loop = true
     backgroundAudio.volume = 0.008
 }

//Klik events die de functies onnderaan uitvoeren 

labelSubmitButton.addEventListener("click", () => {
    labelNameChange()
})

blueBodyButton.addEventListener("click", () => {
    bodyChangeColor("blue")
});

redBodyButton.addEventListener("click", () => {
    bodyChangeColor("red")
});

greenBodyButton.addEventListener("click", () => {
    bodyChangeColor("green")
});

pinkBodyButton.addEventListener("click", () => {
    bodyChangeColor("pink")
});

greyConeButton.addEventListener("click", () => {
    coneChangeColor("grey")
})

mintConeButton.addEventListener("click", () => {
    coneChangeColor("mint")
})

orangeConeButton.addEventListener("click", () => {
    coneChangeColor("orange")
})

purpleConeButton.addEventListener("click", () => {
    coneChangeColor("purple")
})
rectangleButton.addEventListener("click", () => {
    changeLabelShape("rectangle");
});

squareButton.addEventListener("click", () => {
    changeLabelShape("square");
});

circleButton.addEventListener("click", () => {
    changeLabelShape("circle");
});

hexagonButton.addEventListener("click", () => {
    changeLabelShape("hexagon");
})



//Klik event op de random knop die een random getal pakt, en met de getal door de array leest en het uitvoert
randomBodyButton.addEventListener("click", () => {
    var randomNumber = Math.floor(Math.random() * 4);
    var colors = ["blue", "red", "green", "pink"];
    bodyChangeColor(colors[randomNumber]);
})

randomConeButton.addEventListener("click", () => {
    var randomNumber = Math.floor(Math.random() * 4);
    var colors = ["grey", "mint", "orange", "purple"];
    coneChangeColor(colors[randomNumber]);
})

randomShapeButton.addEventListener("click", () => {
    var randomNumber = Math.floor(Math.random() * 4);
    var shapes = ["square", "rectangle", "circle", "hexagon"];
    changeLabelShape(shapes[randomNumber]);
})


//Functies die ervoor zorgen dat als de knopjes geklikt worden, de plaatje word vervangen 
function bodyChangeColor(color) {

    if (color == "blue") {
        bodyImage.src = "images/blikjeBlauw.svg";
    }

    if (color == "red") {
        bodyImage.src = "images/blikjeRood.svg";
    }

    if (color == "green") {
        bodyImage.src = "images/blikjeGroen.svg";
    }

    if (color == "pink") {
        bodyImage.src = "images/blikjeRoze.svg";
    }

}

function coneChangeColor(color) {

    if (color == "grey") {
        coneImage.src = "images/coneGrijs.svg";
    }

    if (color == "mint") {
        coneImage.src = "images/coneMint.svg";
    }

    if (color == "orange") {
        coneImage.src = "images/coneOranje.svg";
    }

    if (color == "purple") {
        coneImage.src = "images/conePaars.svg";
    }

}

function changeLabelShape(shape) {

    if (shape == "rectangle") {
        labelShapeImage.src = "images/rectangleGeel.svg";
    }

    if (shape == "square") {
        labelShapeImage.src = "images/squareGeel.svg";
    }

    if (shape == "circle") {
        labelShapeImage.src = "images/circleGeel.svg";
    }

    if (shape == "hexagon") {
        labelShapeImage.src = "images/hexagonGeel.svg";
    }

}

//Functie waar ik een alert geef als de string langer is dan 13 chars
function labelNameChange() {

    if (labelinputText.value.length > 13) {
        alert("You can only insert 13 characters in the label")
        return
    } else {
        realLabeltext.textContent = labelinputText.value
    }
}