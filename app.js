//play planet audio and inact planet "glow" styling when user clicks the planet
let mercuryBeep = new Audio ("audio/mercury.mp3")
let venusBeep = new Audio ("audio/venus.mp3")
let earthBeep = new Audio ("audio/earth.mp3")
let marsBeep = new Audio ("audio/mars.mp3")

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

function mercurySequence (){
    mercuryBeep.play();
    document.getElementById("mercury").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
    let meGlow = document.getElementById("mercury");
    meGlow = setTimeout(removeGlow, 400);
}


function venusSequence (){
    venusBeep.play();
    document.getElementById("venus").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
    let vGlow = document.getElementById("venus");
    vGlow = setTimeout(removeGlow, 500);
}

function earthSequence(){
    earthBeep.play();
    document.getElementById("earth").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
    let eGlow = document.getElementById("earth");
    eGlow = setTimeout(removeGlow, 600);
}

function marsSequence(){
    marsBeep.play();
    document.getElementById("mars").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
    let maGlow = document.getElementById("mars");
    maGlow = setTimeout(removeGlow, 500);
}

//Sample easy array sequence(10)
let easy = ["earth","venus","mars","mercury","earth","mercury","mars","venus","mercury","venus"];

//Easy Level: loop through array and activate features 
document.getElementById("easy").addEventListener("click", function(){
    for(let i = 0; i < easy.length; i++){
        console.log(easy[i]);
        if(easy[i]=== "mercury"){
            setTimeout(mercurySequence, 1000 * i);
        }else if (easy[i]=== "venus"){
            setTimeout(venusSequence, 1000 * i); 
        }else if (easy[i] === "earth"){
            setTimeout(earthSequence, 1000 * i); 
        }else if(easy[i] === "mars"){
            setTimeout(marsSequence, 1000 * i); 
        }
    }
});

//Sample medium array sequence (15)
let medium = ["mars","venus","mars","mercury","mercury","earth","venus",'Mars',"earth","mars","mercury","mercury","earth","venus","mars"];

//Medium Level: loop through array and activate features 
document.getElementById("medium").addEventListener("click", function(){
    for(let i = 0; i < medium.length; i++){
        console.log(medium[i]);
        if(medium[i]=== "mercury"){
            setTimeout(mercurySequence, 1000 * i);
        }else if (medium[i]=== "venus"){
            setTimeout(venusSequence, 1000 * i); 
        }else if (medium[i] === "earth"){
            setTimeout(earthSequence, 1000 * i); 
        }else if(medium[i] === "mars"){
            setTimeout(marsSequence, 1000 * i); 
        }
    }
});

//Sample hard array sequence (20)
let hard = ["venus","mercury","venus","mars","earth","mars","mercury","earth","venus","venus","mercury","mars","earth","mercury","mars","venus","venus","mercury","earth","mars"];

//Hard Level: loop through array and activate features 
document.getElementById("hard").addEventListener("click", function(){
    for(let i = 0; i < hard.length; i++){
        console.log(medium[i]);
        if(hard[i]=== "mercury"){
            setTimeout(mercurySequence, 1000 * i);
        }else if (hard[i]=== "venus"){
            setTimeout(venusSequence, 1000 * i); 
        }else if (hard[i] === "earth"){
            setTimeout(earthSequence, 1000 * i); 
        }else if(hard[i] === "mars"){
            setTimeout(marsSequence, 1000 * i); 
        }
    }
});

//function for easy level (10)
let planets = ["mercury","venus","earth","mars"];
let easyLevel = [];
let mediumLevel = [];
let hardLevel = [];
let userMoves = [];
let moves = 0; 


//function for easy level (10)
function easyLevelArray() {
    for (let i = 0; i < 10; i++){
        easyLevel.push(planets[Math.floor(Math.random()*4)]);//randomly selects one of the 4 planets 
    }
}
easyLevelArray();
console.log(easyLevel)

//function for medium level (15)
function mediumLevelArray(){
    for (let i = 0; i < 15; i++){
        mediumLevel.push(planets[Math.floor(Math.random()*4)]);//randomly selects one of the 4 planets 
    }
}
mediumLevelArray();
console.log(mediumLevel)

//function for hard level (20)
function hardLevelArray(){
    for (let i = 0; i < 20; i++){
        hardLevel.push(planets[Math.floor(Math.random()*4)]);//randomly selects one of the 4 planets 
    }
}
hardLevelArray();
console.log(hardLevel)
//     nextPlanet = Math.floor(Math.random()*5)
//     console.log(easy[i]);
//     document.getElementById("mercury").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
//     let meGlow = document.getElementById("mercury");
//     meGlow.onclick = setInterval(removeGlow, 300);
//     easyLevel.push(nextPlanet)
// }
