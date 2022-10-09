//Data e hora atual
function time_now() { 
    let time = new Date();

    let day = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();

    let hour = time.getHours();
    let min = time.getMinutes();

    let str_month = "";
    let str_min = "";

    if (month < 10) {
        str_month += '0' + month;
    } else {
        str_month += month;
    }

    if (min < 10) {
        str_min += '0' + min;
    } else {
        str_min += min;
    }

   // str_time = day + "/" + str_month + "/" + year + "\t" + hour + ":" + str_min;

    document.getElementsByTagName("h3")[0].innerHTML = str_time;
}

//Atualizar data e hora em tempo real
setInterval(time_now, 1000); 

//Selecionar tempo inicial do temporizador
function time_start_change(time_start) {
    document.getElementById("timer").innerHTML = time_start + ":00";
}

function start() {
    let action = document.getElementById("start-button").innerText;
    console.log(action);

    if (action == "Parar") {
        document.getElementById("start-button").innerText = "Reiniciar";
    }
    else if (action == "Iniciar") {
        timer();
        document.getElementById("start-button").innerText = "Parar";
    }
    else if (action == "Reiniciar") {
        // console.log("Aqui 3");
        document.getElementById("start-button").innerText = "Iniciar";
        document.getElementById("timer").innerHTML = "25:00";

    }
}

//Funcionamento do temporizador pomodoro
function timer() {
    let time_initial = document.getElementById("timer").innerText;
    var time_total = time_initial.split(':')[0] * 60 - 1;


    let second = setInterval(() => {

        action = document.getElementById("start-button").innerText;
        console.log(action);

        let min = Math.floor(time_total / 60);
        let seg = time_total % 60;

        str_seg = "";

        if (seg < 10) {
            str_seg += '0' + seg;
        } else {
            str_seg += seg;
        }

        if ((min == 0 && seg == 0) || action == "Stop" || action == "Reiniciar") {
            stop(second);
            document.getElementById("start-button").innerText = "Reiniciar";
            if (min == 0 && seg == 0) {
                alert("O tempo terminou!");
                play_song();
            }
        } 

        time_total -= 1;

        document.getElementById("timer").innerText = min + ":" + str_seg;
        
    }, 1000);
    
}

function play_song() {
    let audio = document.getElementsByTagName("audio")[0];
    audio.currentTime = 0.1;
    audio.play();
}

function stop(interval){
    console.log("PARAR")
    clearInterval(interval);
}