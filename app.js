//play planet audio
let mercuryBeep = new Audio ("audio/mercury.mp3")
let venusBeep = new Audio ("audio/venus.mp3")
let earthBeep = new Audio ("audio/earth.mp3")
let marsBeep = new Audio ("audio/mars.mp3")
function planetBeep(i){
    if(i == "me"){
        mercuryBeep.play();
    }else if(i == "v"){
        venusBeep.play();
    }else if(i == "e"){
        earthBeep.play();
    }else if(i == "ma"){
        marsBeep.play();
    }
}

