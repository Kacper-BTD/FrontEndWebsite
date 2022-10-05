
//Toggle light mode als je op de button klikt
light_mode_button = document.querySelector("header nav section button")

light_mode_button.addEventListener("click", () => {
    changeMode()
})

darkmode = 1

function changeMode() {
    if(darkmode == 1){
    document.querySelector("[href='styles/style.css']").setAttribute('href', 'styles/lightmode.css')
    darkmode = 0
    return
    }
    
    if(darkmode == 0){
    document.querySelector("[href='styles/lightmode.css']").setAttribute('href', 'styles/style.css')
    darkmode = 1
    return
    }
}



//Laser verschijnt als je op 'L' klikt (+audio)


var audio_laser = new Audio("assets/laserShot.mp3")

function deactiveLaser() {
    document.querySelector(" .index > div:nth-of-type(1) img").style.opacity = "0"
}

function laser(event) {
    if (event.keyCode == 76) {

        document.querySelector(" .index  > div:nth-of-type(1) img").style.opacity = "1"
        audio_laser.play()
        setTimeout(deactiveLaser, 350)
    }
}
document.addEventListener("keydown", laser);



//Audio afspelen bij buttons play/pause 1e artiest

play_musicSky = document.querySelector(".index main section:nth-of-type(1) div>div button")

play_musicSky.addEventListener("click", () => {
    play_audioSky()
})

var audioSky = new Audio('assets/playboicarti_Sky.mp3');
audioIsPlayingSky = false


function play_audioSky() {
    if (audioIsPlayingSky == true) {
        audioSky.pause()
        play_musicSky.innerHTML = "Play"
        audioIsPlayingSky = false
        return
    }

    if (audioIsPlayingSky == false) {
        audioSky.play()
        play_musicSky.innerHTML = "Pause"
        audioIsPlayingSky = true
        return
    }

}

//Audio afspelen bij buttons play/pause 2e artiest

play_musicChosen = document.querySelector(".index main section:nth-of-type(3) div>div button")
var audioChosen = new Audio('assets/polog_Chosen1.mp3');
audioIsPlayingChosen = false


play_musicChosen.addEventListener("click", () => {
    play_audioChosen()
})


function play_audioChosen() {
    if (audioIsPlayingChosen == true) {
        audioChosen.pause()
        play_musicChosen.innerHTML = "Play"
        audioIsPlayingChosen = false
        return
    }

    if (audioIsPlayingChosen == false) {
        audioChosen.play()
        play_musicChosen.innerHTML = "Pause"
        audioIsPlayingChosen = true
        return
    }

}



//Gifje amongus popptje

function stopMongus() {
    document.querySelector(".index > div:nth-of-type(2) img").style.opacity = "0"
}

function mongus(event) {
    if (event.keyCode == 83) {

        document.querySelector(".index > div:nth-of-type(2) img").style.opacity = "1"
        setTimeout(stopMongus, 5000)
    }
}
document.addEventListener("keydown", mongus);



//Check of gebruik dark/light mode gebruikt

const isDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const isLightMode = () => {
    return window.matchMedia('(prefers-color-scheme: light)').matches;
}


 