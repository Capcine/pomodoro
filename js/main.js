window.onload = function() {
    let createTimeInput = this.document.getElementById("time-input");
    let createTimeClear = document.getElementById("time-clear"); /* on récupère le bouton de suppr  */
    let createTimeAdd = document.getElementById("time-add"); /* on récupère le bouton d'ajout  */

    createTimeClear.addEventListener("click", function() { 
    createTimeInput.value = ""; /* on vide l'input  */
    createTimeInput.focus();
})
    createTimeAdd.addEventListener("click", function() {
    let timeValue = createTimeInput.value; /* on récupère la valeur de l'input  */
    if (timeValue !== "" && !isNaN(timeValue)) { /* si la valeur est vide  */
        temps = parseInt(timeValue) * 60; // convertir en secondes
        afficherTemps();
        createTimeInput.value = ""

    }
    });
    


    let temps = 0; // temps initail en secondes
    const timerElement = document.getElementById("timer");
    let interval = null;

    function afficherTemps() {

    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
    timerElement.innerText = minutes + ":" + secondes;
    }
    afficherTemps();


    let rotationInterval1 = null;
    let rotationInterval2 = null;
    let rotationInterval3 = null;

    function lancerRotation() {
    let angle1 = 20;
    let angle2 = 271;
    let angle3 = 167;

    let img1 = document.getElementById("tomato-1");
    rotationInterval1 = setInterval(function() {
        img1.style.transform = "rotate(" + angle1++ + "deg)";},1);

    let img2 = document.getElementById("tomato-2");
    rotationInterval2 = setInterval(function() {
        img2.style.transform = "rotate(" + angle2++ + "deg)";},0.5);

    let img3 = document.getElementById("tomato-3");
    rotationInterval3 = setInterval(function() {
        img3.style.transform = "rotate(" + angle3++ + "deg)";},3);

    }
    function arreterRotation() {
        if (rotationInterval1 !== null) {
            clearInterval(rotationInterval1);
            rotationInterval1 = null;
        }
        if (rotationInterval2 !== null) {
            clearInterval(rotationInterval2);
            rotationInterval2 = null;
        }
        if (rotationInterval3 !== null) {
            clearInterval(rotationInterval3);
            rotationInterval3 = null;
        }
    }


    function diminuerTemps() {
        if (temps > 0) {
        temps = temps <= 0 ? 0 : temps - 1;
        afficherTemps();
            if (temps <= 10 && rotationInterval1 === null) {
                lancerRotation(); 
                }
        }
        else {
            arreterRotation();
            
            let audio = document.getElementById("end-sound");
            audio.play();
            clearInterval(interval);
            interval = null;

            textButton = "►";
            playButton.innerText = textButton;
            playButton.style.background = "white";
        }
    }
    
    let playButton = document.getElementById("play-button");
    let textButton = playButton.innerText;

    playButton.addEventListener("click", function() {
        if (interval === null) {
        interval = setInterval(diminuerTemps, 1000);
        textButton = "⏸";
        playButton.innerText = textButton;
        playButton.style.background = "rgba(0, 0, 0, 0)";
        }
        else {
            clearInterval(interval);
            interval = null;
            textButton = "►";
            playButton.innerText = textButton;
            playButton.style.background = "white";
        }
    
    });



















}