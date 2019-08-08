//play planet audio
let mercuryBeep = new Audio ("audio/mercury.mp3")
let venusBeep = new Audio ("audio/venus.mp3")
let earthBeep = new Audio ("audio/earth.mp3")
let marsBeep = new Audio ("audio/mars.mp3")
function planetBeep(i){
    if(i == "me"){
        mercuryBeep.play();
        document.getElementById("mercury").style.border = "1px solid #4195fc";
    }else if(i == "v"){
        venusBeep.play();
        document.getElementById("venus").style.border = "1px solid #4195fc";
    }else if(i == "e"){
        earthBeep.play();
    }else if(i == "ma"){
        marsBeep.play();
    }
}

