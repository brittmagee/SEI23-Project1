//play planet audio and inact planet "glow" styling when user clicks the planet
let mercuryBeep = new Audio ("audio/mercury.mp3")
let venusBeep = new Audio ("audio/venus.mp3")
let earthBeep = new Audio ("audio/earth.mp3")
let marsBeep = new Audio ("audio/mars.mp3")
let lose = new Audio ("audio/lose.mp3")
let win = new Audio ("audio/win.mp3")

function planetBeep(i){
    if(i == "me"){
        mercuryBeep.play();
        document.getElementById("mercury").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let meGlow = document.getElementById("mercury");
        meGlow.onclick = setTimeout(removeGlow, 400);
    }else if(i == "v"){
        venusBeep.play();
        document.getElementById("venus").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let vGlow = document.getElementById("venus");
        vGlow.onclick = setTimeout(removeGlow, 500);
    }else if(i == "e"){
        earthBeep.play();
        document.getElementById("earth").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let eGlow = document.getElementById("earth");
        eGlow.onclick = setTimeout(removeGlow, 500);
    }else if(i == "ma"){
        marsBeep.play();
        document.getElementById("mars").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let maGlow = document.getElementById("mars");
        maGlow.onclick = setTimeout(removeGlow, 600);
    }
}

//function to have glow removed after .3s 
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

//Sample easy array sequence(10)
//let easy = ["earth","venus","mars","mercury","earth","mercury","mars","venus","mercury","venus"];

//Easy Level: loop through array and activate features 
document.getElementById("easy").addEventListener("click", function(){
    easyLevelArray();
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
    mediumLevelArray();
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
    hardLevelArray();
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


//function for easy level (random 10 planets)
function easyLevelArray() {
    for (let i = 0; i < 10; i++){
        easyLevel.push(planets[Math.floor(Math.random()*4)]);//randomly selects one of the 4 planets 
    }
}

//function for medium level (random 15 planets)
function mediumLevelArray(){
    for (let i = 0; i < 15; i++){
        mediumLevel.push(planets[Math.floor(Math.random()*4)]);//randomly selects one of the 4 planets 
    }
}

//function for hard level (random 20 planets)
function hardLevelArray(){
    for (let i = 0; i < 20; i++){
        hardLevel.push(planets[Math.floor(Math.random()*4)]);//randomly selects one of the 4 planets 
    }
}


function easyGameStart (){
    if(simonTurn){
        for(let i=0; i<easyLevelArray.length; i++){
            if(easyLevelArray[i] == "mercury"){
                mercurySequence();
            }else if (easyLevelArray[i] == "venus"){
                venusSequence();
            }else if (easyLevelArray[i] == "earth"){
                earthSequence();
            }else if (easyLevelArray[i] == "mars"){
                marsSequence();
            }
        }
        simonTurnIndex +1;
        simonTurn = false;
    }
}

//     nextPlanet = Math.floor(Math.random()*5)
//     console.log(easy[i]);
//     document.getElementById("mercury").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
//     let meGlow = document.getElementById("mercury");
//     meGlow.onclick = setInterval(removeGlow, 300);
//     easyLevel.push(nextPlanet)
