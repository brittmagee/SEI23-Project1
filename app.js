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
        meGlow.onclick = setTimeout(removeGlow, 300);
    }else if(i == "v"){
        venusBeep.play();
        document.getElementById("venus").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let vGlow = document.getElementById("venus");
        vGlow.onclick = setTimeout(removeGlow, 300);
    }else if(i == "e"){
        earthBeep.play();
        document.getElementById("earth").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let eGlow = document.getElementById("earth");
        eGlow.onclick = setTimeout(removeGlow, 300);
    }else if(i == "ma"){
        marsBeep.play();
        document.getElementById("mars").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
        let maGlow = document.getElementById("mars");
        maGlow.onclick = setTimeout(removeGlow, 300);
    }
}

//function to have glow removed after .3s 
function removeGlow(){
    document.getElementById("mercury").style.boxShadow = null;
    document.getElementById("venus").style.boxShadow = null;
    document.getElementById("earth").style.boxShadow = null;
    document.getElementById("mars").style.boxShadow = null;
}

let easy = ["earth","venus","mars","mercury","mercury","earth","mercury","mars","venus","venus"];

function mercurySequence (){
    document.getElementById("mercury").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
    mercuryBeep.play();
    let meGlow = document.getElementById("mercury");
    meGlow = setTimeout(removeGlow, 300);
}


function venusSequence (){
    venusBeep.play();
    document.getElementById("venus").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
    let vGlow = document.getElementById("venus");
    vGlow = setTimeout(removeGlow, 300);
}


// earthBeep.play();
// document.getElementById("earth").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
// let eGlow = document.getElementById("earth");
// eGlow.onclick = setInterval(removeGlow, 300);

// marsBeep.play();
// document.getElementById("mars").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
// let maGlow = document.getElementById("mars");
// maGlow.onclick = setInterval(removeGlow, 300);



//select levels
document.getElementById("easy").addEventListener("click", function(){
    console.log("works!")
    for(let i = 0; i < easy.length; i++){
        console.log(easy[i]);
        if(easy[i]== "mercury"){
            setTimeout(mercurySequence, 300*i);
        } else if (easy[i]== "venus"){
            setTimeout(venusSequence, 300*i); 
        }
    }

});

document.getElementById("medium").addEventListener("click", function(){
    console.log("yeah!")
});

document.getElementById("hard").addEventListener("click", function(){
    console.log("woohoo!")
});

//function for easy level (10)

let planets = ["mercury","venus","earth","mars"]
let easyLevel = []

// {
//     nextPlanet = Math.floor(Math.random()*5)
//     console.log(easy[i]);
//     document.getElementById("mercury").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
//     let meGlow = document.getElementById("mercury");
//     meGlow.onclick = setInterval(removeGlow, 300);
//     easyLevel.push(nextPlanet)
// }


// function easyLevel (){
//     for(let i = 0; i < easy.length; i++){
//         console.log(easy[i]);
//         document.getElementById("mercury").style.boxShadow = "0px 0px 30px 2px rgb(105, 255, 85), 0px 0px 30px 2px rgb(105, 255, 85) inset";
//         let meGlow = document.getElementById("mercury");
//         meGlow.onclick = setInterval(removeGlow, 300);
//     }
//     console.log("works")
// }

// //function for medium level(15)
// let medium = ["mars","venus","mars","mercury","mercury","earth","venus",'Mars',"earth","mars","mercury","mercury","earth","venus","mars"];


// //function for hard level(20)
// let hard = ["venus","mercury","venus","mars","earth","mars","mercury","earth","venus","venus","mercury","mars","earth","mercury","mars","venus","venus","mercury","earth","mars"];