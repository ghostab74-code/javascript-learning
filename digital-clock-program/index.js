// DIGITAL CLOCK PROGRAM

let is24Hour = true;

function updateClock(){

    const now = new Date();
    
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    let timeString;

    if (is24Hour) {

        hours = hours.toString().padStart(2, 0);

        timeString = `${hours}:${minutes}:${seconds}`;
    }
    else {

        const amPm = hours >= 12 ? "Pm" : "Am";

        hours = hours % 12 || 12;

        timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
    }

    document.getElementById("clock").textContent = timeString;

    const dateString = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

document.getElementById("date").textContent = dateString;
}

 // 12 / 24 HOUR BUTTON  

const formatButton = document.getElementById("format-button");

formatButton.addEventListener("click", function(){

    is24Hour = !is24Hour;

    if (is24Hour) {
        formatButton.textContent = "Switch to 12-Hour";
    }
    else {
        formatButton.textContent = "Switch to 24-Hour";
    }

    updateClock();
});

updateClock();
setInterval(updateClock, 1000);


// STOPWATCH PROGRAM
// STOPWATCH VARIABLES



let stopwatchInterval;

let elapsedTime = 0;

let startTime = 0;

let isRunning = false;

let laps = [];

let lastLapTime = 0;



// SAVE STOPWATCH



function saveStopwatch(){

    localStorage.setItem("stopwatch", JSON.stringify({

        elapsedTime: elapsedTime,

        startTime: startTime,

        isRunning: isRunning,

        laps: laps,

        lastLapTime: lastLapTime

    }));

}



// LOAD STOPWATCH



function loadStopwatch(){

    const savedStopwatch =

        localStorage.getItem("stopwatch");

    if (savedStopwatch) {

        const data =

            JSON.parse(savedStopwatch);

        elapsedTime = data.elapsedTime;

        startTime = data.startTime;

        isRunning = data.isRunning;

        laps = data.laps || [];

        lastLapTime = data.lastLapTime || 0;

        if (isRunning) {

            elapsedTime = Date.now() - startTime;

        }

    }

}

loadStopwatch();



// FORMAT STOPWATCH TIME



function formatTime(time){

    const hours =

        Math.floor(time / 3600000);

    const minutes =

        Math.floor(

            (time % 3600000) / 60000

        );

    const seconds =

        Math.floor(

            (time % 60000) / 1000

        );

    return `${hours.toString().padStart(2, 0)}:` +

           `${minutes.toString().padStart(2, 0)}:` +

           `${seconds.toString().padStart(2, 0)}`;

}



// UPDATE STOPWATCH DISPLAY



function updateStopwatch(){

    document.getElementById("stopwatch").textContent =

        formatTime(elapsedTime);

}

updateStopwatch();



// RESUME STOPWATCH AFTER REFRESH



if (isRunning) {

    elapsedTime = Date.now() - startTime;

    stopwatchInterval = setInterval(function(){

        elapsedTime = Date.now() - startTime;

        updateStopwatch();

    }, 10);

}



// BUTTONS



const startButton =

    document.getElementById("start-button");

const stopButton =

    document.getElementById("stop-button");

const resetButton =

    document.getElementById("reset-button");

const lapButton =

    document.getElementById("lap-button");



// START



startButton.addEventListener("click", function(){

    if (!isRunning) {

        isRunning = true;

        startTime =

            Date.now() - elapsedTime;

        saveStopwatch();

        stopwatchInterval =

            setInterval(function(){

                elapsedTime =

                    Date.now() - startTime;

                updateStopwatch();

            }, 10);

    }

});



// STOP



stopButton.addEventListener("click", function(){

    if (isRunning) {

        clearInterval(stopwatchInterval);

        isRunning = false;

        saveStopwatch();

    }

});



// RESET



resetButton.addEventListener("click", function(){

    clearInterval(stopwatchInterval);

    stopwatchInterval = null;

    elapsedTime = 0;

    startTime = 0;

    isRunning = false;

    laps = [];

    lastLapTime = 0;

    localStorage.removeItem("stopwatch");

    updateStopwatch();

    displayLaps();

});



// LAP


lapButton.addEventListener("click", function(){

    if (isRunning) {

        const lapTime =

            elapsedTime - lastLapTime;

        laps.push(lapTime);

        lastLapTime =

            elapsedTime;

        saveStopwatch();

        displayLaps();

    }

});



// DISPLAY LAPS



function displayLaps(){

    const lapsContainer =

        document.getElementById("laps");

    lapsContainer.innerHTML = "";

    laps.forEach(function(lap, index){

        const lapElement =

            document.createElement("div");

        lapElement.textContent =

            `Lap ${index + 1}: ${formatTime(lap)}`;

        lapsContainer.appendChild(lapElement);

    });

}

displayLaps();