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
        if(gameLevel === "easy"){
            userPlayEasy("mercury");
        }else if(gameLevel === "medium"){
            userPlayMedium("mercury");
        }else if(gameLevel ==="hard"){
            userPlayHard("mercury");
        }

    }else if(i == "v"){
        //styling what happens when venus is clicked 
        venusBeep.play();
        document.getElementById("venus").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let vGlow = document.getElementById("venus");
        vGlow.onclick = setTimeout(removeGlow, 500);


        //calls the user click based on the selected level
        if(gameLevel === "easy"){
            userPlayEasy("venus");
        }else if(gameLevel === "medium"){
            userPlayMedium("venus");
        }else if(gameLevel ==="hard"){
            userPlayHard("venus");
        }
    }else if(i == "e"){
        //styling what happens when earth is clicked 
        earthBeep.play();
        document.getElementById("earth").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let eGlow = document.getElementById("earth");
        eGlow.onclick = setTimeout(removeGlow, 500);


        //calls the user click based on the selected level
        if(gameLevel === "easy"){
            userPlayEasy("earth");
        }else if(gameLevel === "medium"){
            userPlayMedium("earth");
        }else if(gameLevel ==="hard"){
            userPlayHard("earth");
        }
    }else if(i == "ma"){
        //styling what happens when mars is clicked 
        marsBeep.play();
        document.getElementById("mars").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let maGlow = document.getElementById("mars");
        maGlow.onclick = setTimeout(removeGlow, 600);


        //calls the user click based on the selected level
        if(gameLevel === "easy"){
            userPlayEasy("mars");
        }else if(gameLevel === "medium"){
            userPlayMedium("mars");
        }else if(gameLevel ==="hard"){
            userPlayHard("mars");
        }
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
}
//what happens venus called
function venusSequence (){
    venusBeep.play();
    document.getElementById("venus").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
    let vGlow = document.getElementById("venus");
    vGlow = setTimeout(removeGlow, 500);
    userMoves.push("venus")//push into the empty userMoves array  
}
//what happens earth called
function earthSequence(){
    earthBeep.play();
    document.getElementById("earth").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
    let eGlow = document.getElementById("earth");
    eGlow = setTimeout(removeGlow, 600);
    userMoves.push("earth")//push into the empty userMoves array 
}
//what happens mars called
function marsSequence(){
    marsBeep.play();
    document.getElementById("mars").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
    let maGlow = document.getElementById("mars");
    maGlow = setTimeout(removeGlow, 500);
    userMoves.push("mars")//push into the empty userMoves array 
}

//What happens when player wins game
function winGame (){
    //rotate mercury and turn purple when player wins
    document.getElementById("mercury").animate([
        { transform: "rotate(-360deg)"},  //rotate clockwise 
        { boxShadow: "0px 0px 40px 20px rgb(190, 68, 190), 0px 0px 40px 20px rgb(190, 68, 190) inset"}, 
        ], { 
        duration: 1200, //this duration helps planets not spin too fast
        iterations: Infinity
        });
    //rotate venus and turn green when player wins
    document.getElementById("venus").animate([
        { transform: "rotate(-360deg)"}, 
        { boxShadow: "0px 0px 40px 20px rgb(55, 136, 73), 0px 0px 40px 20px rgb(55, 136, 73) inset"}, 
        ], { 
        duration: 1200, //this duration helps planets not spin too fast
        iterations: Infinity
        });
    //rotate earth and turn golden when player wins
    document.getElementById("earth").animate([
        { transform: "rotate(-360deg)"}, 
        { boxShadow: "0px 0px 40px 20px goldenrod, 0px 0px 40px 20px goldenrod inset"}, 
        ], { 
        duration: 1200, //this duration helps planets not spin too fast
        iterations: Infinity
        });
    //rotate mars and turn golden when player wins
    document.getElementById("mars").animate([
        { transform: "rotate(-360deg)"}, 
        { boxShadow: "0px 0px 40px 20px rgb(55, 136, 136), 0px 0px 40px 20px rgb(55, 136, 136) inset"}, 
        ], { 
        duration: 1200, //this duration helps planets not spin too fast
        iterations: Infinity
        });
}

//What happens when player loses game 
function loseGame(){
    //lose styling: planets glow red and sun engulfs planets 
    document.getElementById("mercury").style.boxShadow = "0px 0px 30px 2px rgb(233, 2, 2), 0px 0px 30px 2px rgb(233, 2, 2) inset";
    document.getElementById("venus").style.boxShadow = "0px 0px 30px 2px rgb(233, 2, 2), 0px 0px 30px 2px rgb(233, 2, 2) inset";
    document.getElementById("earth").style.boxShadow = "0px 0px 30px 2px rgb(233, 2, 2), 0px 0px 30px 2px rgb(233, 2, 2) inset";
    document.getElementById("mars").style.boxShadow = "0px 0px 30px 2px rgb(233, 2, 2), 0px 0px 30px 2px rgb(233, 2, 2) inset";
}

//function for easy level (Using Math.floor and Math.random to generate 5 random planet sequence)
function easyLevelArray() {
        easyLevel.push(planets[Math.floor(Math.random()*4)]);//randomly selects one of the 4 planets 
}

//function for medium level (Using Math.floor and Math.random to generate 10 random planet sequence)
function mediumLevelArray(){
        mediumLevel.push(planets[Math.floor(Math.random()*4)]);//randomly selects one of the 4 planets 
}

//function for hard level (Using Math.floor and Math.random to generate 15 random planet sequence)
function hardLevelArray(){
        hardLevel.push(planets[Math.floor(Math.random()*4)]);//randomly selects one of the 4 planets 
}

//Sample easy array sequence(10)
//let easy = ["earth","venus","mars","mercury","earth","mercury","mars","venus","mercury","venus"];

//When click Easy Level: loop through array and activate features 
document.getElementById("easy").addEventListener("click", function(){
    easySimon();
    document.getElementById("easy").style.color= "green"; //turn the Easy text green
    for(let i = 0; i < easyLevel.length; i++){
        console.log(easyLevel[i]);
        if(easyLevel[i]=== "mercury"){
            setTimeout(mercurySequence, 1000 * i); //mercury sequnece ignited for each time mercury is called in the array 
        }else if (easyLevel[i]=== "venus"){
            setTimeout(venusSequence, 1000 * i); //venus sequnece ignited for each time mercury is called in the array 
        }else if (easyLevel[i] === "earth"){
            setTimeout(earthSequence, 1000 * i); //earth sequnece ignited for each time mercury is called in the array 
        }else if(easyLevel[i] === "mars"){
            setTimeout(marsSequence, 1000 * i); //mars sequnece ignited for each time mercury is called in the array 
        }
    }
});

//Sample medium array sequence (15)
//let medium = ["mars","venus","mars","mercury","mercury","earth","venus","Mars","earth","mars","mercury","mercury","earth","venus","mars"];

//Medium Level: loop through array and activate features 
document.getElementById("medium").addEventListener("click", function(){
    mediumSimon(); 
    document.getElementById("medium").style.color= "yellow"; //turn the Medium text yellow 
    for(let i = 0; i < mediumLevel.length; i++){
        console.log(mediumLevel[i]);
        if(mediumLevel[i]=== "mercury"){
            setTimeout(mercurySequence, 1000 * i); //mercury sequnece ignited for each time mercury is called in the array 
        }else if (mediumLevel[i]=== "venus"){
            setTimeout(venusSequence, 1000 * i); //venus sequnece ignited for each time mercury is called in the array 
        }else if (mediumLevel[i] === "earth"){
            setTimeout(earthSequence, 1000 * i); //earth sequnece ignited for each time mercury is called in the array 
        }else if(mediumLevel[i] === "mars"){
            setTimeout(marsSequence, 1000 * i); //mars sequnece ignited for each time mercury is called in the array 
        }
    }
});

//Sample hard array sequence (20)
//let hard = ["venus","mercury","venus","mars","earth","mars","mercury","earth","venus","venus","mercury","mars","earth","mercury","mars","venus","venus","mercury","earth","mars"];

//Hard Level: loop through array and activate features 
document.getElementById("hard").addEventListener("click", function(){
    hardSimon(); 
    document.getElementById("hard").style.color= "red"; //turn the Hard text red
    for(let i = 0; i < hardLevel.length; i++){
        console.log(hardLevel[i]);
        if(hardLevel[i]=== "mercury"){
            setTimeout(mercurySequence, 1000 * i); //mercury sequnece ignited for each time mercury is called in the array 
        }else if (hardLevel[i]=== "venus"){
            setTimeout(venusSequence, 1000 * i); //venus sequnece ignited for each time mercury is called in the array 
        }else if (hardLevel[i] === "earth"){
            setTimeout(earthSequence, 1000 * i); //earth sequnece ignited for each time mercury is called in the array 
        }else if(hardLevel[i] === "mars"){
            setTimeout(marsSequence, 1000 * i); //mars sequnece ignited for each time mercury is called in the array 
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
let gameLevel;

//function for easy game
function easySimon(){
    gameLevel = "easy"
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

//function for user playing easy game
function userPlayEasy(planet){
    if(userTurn){
        if(easyLevel[counter] == planet){
            counter += 1;
            console.log("right!")
        }else{
            lose.play();
            loseGame();
            console.log("wrong!")
            userTurn = false; //game ends when the user loses
            simonTurn = false; //game ends when the user loses
            }

         //increment to next round   
        if(counter >= easyLevel.length){
            userTurn = false;
            simonTurn = true;
            setTimeout(easySimon, 2000);
            if (counter > 0 ){
                //when incremnets to next round, adds 1 to score 
                moves += 1;
                document.getElementById("currentScore").innerHTML = moves;
            }
            if (moves === 4){ //player plays 5 times successfully
                //if player wins, the "win" audio plays and the planets turn colors in the background. (Hope to have planets blink) 
                win.play();
                winGame();    
                userTurn = false; //game ends when the user wins
                simonTurn = false; //game ends when the user wins
            }
        }
    }
}

//function for medium game
function mediumSimon(){
    gameLevel = "medium"
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

//function for user playing medium game
function userPlayMedium(planet){
    if(userTurn){
        if(mediumLevel[counter] == planet){
            counter += 1;
            console.log("right!")
        }else {
            lose.play();
            loseGame();
            console.log("wrong!")
            userTurn = false; //game ends when the user loses
            simonTurn = false; //game ends when the user loses
            }


         //increment to next round   
        if(counter >= mediumLevel.length){
            userTurn = false;
            simonTurn = true;
            setTimeout(mediumSimon, 2000);
            if (counter > 0){
                //when incremnets to next round, adds 1 to score 
                moves += 1;
                document.getElementById("currentScore").innerHTML = moves;
            }
            if (moves === 3){//player plays 10 times successfully
                win.play();
                winGame(); 
                userTurn = false; //game ends when the user wins
                simonTurn = false; //game ends when the user wins
            }
        }
    }
}

//function for hard game
function hardSimon(){
    gameLevel = "hard"
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

//function for user playing hard game
function userPlayHard(planet){
    if(userTurn){
        if(hardLevel[counter] == planet){
            counter += 1;
            console.log("right!")
        }else {
            lose.play();
            loseGame();
            console.log("wrong!")
            userTurn = false; //game ends when the user loses
            simonTurn = false; //game ends when the user loses
            }

        
         //increment to next round   
        if(counter >= hardLevel.length){
            userTurn = false;
            simonTurn = true;
            setTimeout(hardSimon, 2000);
            if (counter > 0){
                //when incremnets to next round, adds 1 to score 
                moves += 1;
                document.getElementById("currentScore").innerHTML = moves;
            }
            if (moves === 12){//player plays 15 times successfully
                win.play();
                winGame(); 
                userTurn = false; //game ends when the user wins
                simonTurn = false; //game ends when the user wins
            }
        }
    }
}