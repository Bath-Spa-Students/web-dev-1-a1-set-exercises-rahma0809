//Rgb color guessing game

const colorDisplay= document.getElementById('colorDisplay');
const message= document.getElementById('message');
const colorOptions=document.getElementById("colorOptions");
const resetButton=document.getElementById("resetButton");
const scoreValue=document.getElementById("scoreValue");

//Initializing game variables
let colors=[];
let pickedColor;
let score=0;
let attempts= 3; // number of attempts

//Generating random RGB colors

function  getRandomColor(){
    const r = Math.floor(Math.random() *256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g}, ${b})`;
}

//Initializing game
function init(){
    //generate new colors and pick a color
    colors= generateRandomColors(3);
    pickedColor= pickColor();

    //displayed picked color
    colorDisplay.style.backgroundColor=pickedColor;

    //render color options
    renderColorOptions();

    //clear message;
    message.textContent="";

    //displaying instructions
    message.textContent="Click on the color that matches with the RGB value above";

}

//generating random colors array
function generateRandomColors(numColors){
    const arr = [];
    for (let i=0 ; i< numColors;i++){
        arr.push(getRandomColor());
    }
    return arr;
}

//pick a random color from array of colors
function pickColor(){
    const randomIndex= Math.floor(Math.random()*colors.length);
    return colors[randomIndex];
}

// checking if the color guessed is correct
function checkColor(clickedColor){
    if(clickedColor===pickedColor) {
        message.textContent='Correct!';
        score++;
        scoreValue.textContent=score;
        init();
    } else{
        attempts--;
        console.log("Attempts left:",attempts);
        if (attempts===0){
            message.textContent=`Oh no, You Lost! Final Score: ${score}`;
            resetButton.textContent="Play Again";
            resetButton.removeEventListener('click',resetGame);
            resetButton.addEventListener('click', resetGame);
        } else {
                message.textContent=`Wrong! Try again. ${attempts} attempt(s) left`;
            } 

        }
    }

//Rendering color options
function renderColorOptions(){
    colorOptions.innerHTML= '';
    colors.forEach(color => {
        const colorOption= document.createElement('div');
        colorOption.style.backgroundColor= color;
        colorOption.addEventListener( 'click' , function () {
            checkColor(color);
        });
        colorOptions.appendChild(colorOption);
    }); 
}

//Rest game
function resetGame(){
    console.log("Reset Game");
    attempts= 3;
    score = 0;
    scoreValue.textContent=score;
    resetButton.textContent= "New Colors" ;
    init();
}

//event listener for reset button
resetButton.addEventListener('click', resetGame);

//initialing game
init();