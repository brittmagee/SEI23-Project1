//play planet audio and inact planet "glow" styling when user clicks the planet
let mercuryBeep = new Audio ("audio/mercury.mp3")
let venusBeep = new Audio ("audio/venus.mp3")
let earthBeep = new Audio ("audio/earth.mp3")
let marsBeep = new Audio ("audio/mars.mp3")
let lose = new Audio ("audio/lose.mp3")
let win = new Audio ("audio/win.mp3")


//what occurs when planet is clicked on its own
function planetBeep(i){
    if(i == "me"){
        //styling what happens when mercury is clicked 
        mercuryBeep.play();
        document.getElementById("mercury").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let meGlow = document.getElementById("mercury");
        meGlow.onclick = setTimeout(removeGlow, 400);


        //calls the user click based on the selected level
        userPlayEasy("mercury");
    }else if(i == "v"){
        //styling what happens when venus is clicked 
        venusBeep.play();
        document.getElementById("venus").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let vGlow = document.getElementById("venus");
        vGlow.onclick = setTimeout(removeGlow, 500);


        //calls the user click based on the selected level
        userPlayEasy("venus");
    }else if(i == "e"){
        //styling what happens when earth is clicked 
        earthBeep.play();
        document.getElementById("earth").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let eGlow = document.getElementById("earth");
        eGlow.onclick = setTimeout(removeGlow, 500);


        //calls the user click based on the selected level
        userPlayEasy("earth");
    }else if(i == "ma"){
        //styling what happens when mars is clicked 
        marsBeep.play();
        document.getElementById("mars").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let maGlow = document.getElementById("mars");
        maGlow.onclick = setTimeout(removeGlow, 600);


        //calls the user click based on the selected level
        userPlayEasy("mars");
    }
}

//function to have glow removed after clicked
function removeGlow(){
    document.getElementById("mercury").style.boxShadow = null;
    document.getElementById("venus").style.boxShadow = null;
    document.getElementById("earth").style.boxShadow = null;
    document.getElementById("mars").style.boxShadow = null;
}

//what happens mercury called
function mercurySequence (){
    mercuryBeep.play();
    document.getElementById("mercury").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
    let meGlow = document.getElementById("mercury");
    meGlow = setTimeout(removeGlow, 400);
    userMoves.push("mercury")//push into the empty userMoves array 
    // userPlayEasy("mercury");
}
//what happens venus called
function venusSequence (){
    venusBeep.play();
    document.getElementById("venus").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
    let vGlow = document.getElementById("venus");
    vGlow = setTimeout(removeGlow, 500);
    userMoves.push("venus")//push into the empty userMoves array 
    // userPlayEasy("venus");
}
//what happens earth called
function earthSequence(){
    earthBeep.play();
    document.getElementById("earth").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
    let eGlow = document.getElementById("earth");
    eGlow = setTimeout(removeGlow, 600);
    userMoves.push("earth")//push into the empty userMoves array 
    // userPlayEasy("earth");
}
//what happens mars called
function marsSequence(){
    marsBeep.play();
    document.getElementById("mars").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
    let maGlow = document.getElementById("mars");
    maGlow = setTimeout(removeGlow, 500);
    userMoves.push("mars")//push into the empty userMoves array 
    // userPlayEasy("mars");
}


//function for easy level (Using Math.floor and Math.random to generate 10 random planet sequence)
function easyLevelArray() {
        easyLevel.push(planets[Math.floor(Math.random()*4)]);//randomly selects one of the 4 planets 
}

//function for medium level (Using Math.floor and Math.random to generate 15 random planet sequence)
function mediumLevelArray(){
    for (let i = 0; i < 15; i++){
        mediumLevel.push(planets[Math.floor(Math.random()*4)]);//randomly selects one of the 4 planets 
    }
}

//function for hard level (Using Math.floor and Math.random to generate 20 random planet sequence)
function hardLevelArray(){
    for (let i = 0; i < 20; i++){
        hardLevel.push(planets[Math.floor(Math.random()*4)]);//randomly selects one of the 4 planets 
    }
}

//Sample easy array sequence(10)
//let easy = ["earth","venus","mars","mercury","earth","mercury","mars","venus","mercury","venus"];

//Easy Level: loop through array and activate features 
document.getElementById("easy").addEventListener("click", function(){
    easySimon();
    for(let i = 0; i < easyLevel.length; i++){
        console.log(easyLevel[i]);
        if(easyLevel[i]=== "mercury"){
            setTimeout(mercurySequence, 1000 * i);
        }else if (easyLevel[i]=== "venus"){
            setTimeout(venusSequence, 1000 * i); 
        }else if (easyLevel[i] === "earth"){
            setTimeout(earthSequence, 1000 * i); 
        }else if(easyLevel[i] === "mars"){
            setTimeout(marsSequence, 1000 * i); 
        }
    }
});

//Sample medium array sequence (15)
//let medium = ["mars","venus","mars","mercury","mercury","earth","venus",'Mars',"earth","mars","mercury","mercury","earth","venus","mars"];

//Medium Level: loop through array and activate features 
document.getElementById("medium").addEventListener("click", function(){
    mediumSimon(); 
    for(let i = 0; i < mediumLevel.length; i++){
        console.log(mediumLevel[i]);
        if(mediumLevel[i]=== "mercury"){
            setTimeout(mercurySequence, 1000 * i);
        }else if (mediumLevel[i]=== "venus"){
            setTimeout(venusSequence, 1000 * i); 
        }else if (mediumLevel[i] === "earth"){
            setTimeout(earthSequence, 1000 * i); 
        }else if(mediumLevel[i] === "mars"){
            setTimeout(marsSequence, 1000 * i); 
        }
    }
});

//Sample hard array sequence (20)
//let hard = ["venus","mercury","venus","mars","earth","mars","mercury","earth","venus","venus","mercury","mars","earth","mercury","mars","venus","venus","mercury","earth","mars"];

//Hard Level: loop through array and activate features 
document.getElementById("hard").addEventListener("click", function(){
    hardSimon(); 
    for(let i = 0; i < hardLevel.length; i++){
        console.log(medium[i]);
        if(hardLevel[i]=== "mercury"){
            setTimeout(mercurySequence, 1000 * i);
        }else if (hardLevel[i]=== "venus"){
            setTimeout(venusSequence, 1000 * i); 
        }else if (hardLevel[i] === "earth"){
            setTimeout(earthSequence, 1000 * i); 
        }else if(hardLevel[i] === "mars"){
            setTimeout(marsSequence, 1000 * i); 
        }
    }
});

let planets = ["mercury","venus","earth","mars"];
let easyLevel = [];
let mediumLevel = [];
let hardLevel = [];
let userMoves = [];
let simonTurn = true; //simon's turn when game loads
let userTurn = false;
let simonTurnIndex = 0;
let userTurnIndex = 0;
let moves = 0; 
let scoreBoard = document.getElementById("currentScore").innerText
let counter = 0;

//function for easy game
function easySimon(){
    if(simonTurn){
        easyLevelArray(); 
        for(let i=0; i<easyLevel.length; i++){
                if(easyLevel[i] == "mercury"){
                    setTimeout(mercurySequence, 1000 * i);
                }else if (easyLevel[i] == "venus"){
                    setTimeout(venusSequence, 1000 * i); 
                }else if (easyLevel[i] == "earth"){
                    setTimeout(earthSequence, 1000 * i); 
                }else if (easyLevel[i] == "mars"){
                    setTimeout(marsSequence, 1000 * i); 
                }
            // console.log(easyLevel)
        }
        simonTurnIndex += 1;
        simonTurn = false;
        userTurn = true;
        counter = 0; //resets the array to to go back to the first index and not go further in the index sequnece 
    }
}

function userPlayEasy(planet){
    if(userTurn){
        if(easyLevel[counter] == planet){
            counter += 1;
            console.log("right!")
        }else {
            lose.play();
            document.getElementById("mercury").style.boxShadow = "0px 0px 30px 2px rgb(233, 2, 2), 0px 0px 30px 2px rgb(233, 2, 2) inset";
            console.log("wrong!")
            }
        if(counter >= easyLevel.length){
            userTurn = false;
            simonTurn = true;
            setTimeout(easySimon, 2000);
            if (counter > 0){
                moves += 1;
                document.getElementById("currentScore").innerHTML = moves;
            }
        }
    }
}

//function for medium game
function mediumSimon(){
    if(simonTurn){
        mediumLevelArray(); 
        for(let i=0; i<mediumLevel.length; i++){
                if(mediumLevel[i] == "mercury"){
                    setTimeout(mercurySequence, 1000 * i);
                }else if (mediumLevel[i] == "venus"){
                    setTimeout(venusSequence, 1000 * i); 
                }else if (mediumLevel[i] == "earth"){
                    setTimeout(earthSequence, 1000 * i); 
                }else if (mediumLevel[i] == "mars"){
                    setTimeout(marsSequence, 1000 * i); 
                }
            // console.log(mediumLevel)
        }
        simonTurnIndex += 1;
        simonTurn = false;
        userTurn = true;
        counter = 0; //resets the array to to go back to the first index and not go further in the index sequnece 
    }
}

//function for hard game
function hardSimon(){
    if(simonTurn){
        hardLevelArray(); 
        for(let i=0; i<hardLevel.length; i++){
                if(hardLevel[i] == "mercury"){
                    setTimeout(mercurySequence, 1000 * i);
                }else if (hardLevel[i] == "venus"){
                    setTimeout(venusSequence, 1000 * i); 
                }else if (hardLevel[i] == "earth"){
                    setTimeout(earthSequence, 1000 * i); 
                }else if (hardLevel[i] == "mars"){
                    setTimeout(marsSequence, 1000 * i); 
                }
            // console.log(hardLevel)
        }
        simonTurnIndex += 1;
        simonTurn = false;
        userTurn = true;
        counter = 0; //resets the array to to go back to the first index and not go further in the index sequnece 
    }
}
