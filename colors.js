let bgColors = ["red", "blue", "yellow", "green", "orange", "purple", "black", "pink"];
const htmlCols = document.getElementsByClassName("col-4");

let chosenColor;

//users score (tally one to correct and incorrect as user chooses colors)
let correct = 0;
let incorrect = 0;
let score;

const calcScore = () => {
    score = correct/(correct + incorrect) * 100;

    if(score.toString().length > 5) {
        score = score.toString().slice(0,5);
    }

    document.getElementById("score").innerHTML = "Correct: " + correct + " Incorrect: " + incorrect + " (" + score + "%)";
}

const checkColor = (x) => {
    let colorClicked = x.id;
    if(colorClicked != chosenColor) {
        incorrect += 1;
        calcScore();
    } else {
        //re-generates colored boxes
        bgColors = ["red", "blue", "yellow", "green", "orange", "purple", "black", "pink"];
        correct += 1;
        addStyle();
        calcScore();
    }
}

//generates colored boxes on screen
const addStyle = () => {
    for(i=0; i<htmlCols.length; ++i) {
        let x = Math.floor(Math.random() * bgColors.length) + 0;
        let color = bgColors[x];

        htmlCols[i].style.height = "25vh";
        htmlCols[i].style.minHeight = "75px";
        htmlCols[i].style.backgroundColor = color;
        htmlCols[i].style.cursor = "pointer";
        htmlCols[i].setAttribute("id", color);        

        htmlCols[0].style.borderTopLeftRadius = "10px";
        htmlCols[0].style.borderBottomLeftRadius = "10px";
        htmlCols[2].style.borderTopRightRadius = "10px";
        htmlCols[2].style.borderBottomRightRadius = "10px";

        bgColors.splice(x, 1);
    }

    let x = Math.floor(Math.random() * htmlCols.length) + 0;
    chosenColor = htmlCols[x].id;
    document.getElementById("task-prompt").innerHTML = "Select the " + chosenColor + " box";

}

window.onload = () => {
    addStyle();
}