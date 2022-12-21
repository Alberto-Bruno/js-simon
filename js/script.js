console.log('JS OK');


// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano dal Natale?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?


const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');


// Countdown a Natale 

const countDownDate = new Date("Dec 24, 2022 23:59:00").getTime();

// Aggiorno il conto alla rovescia ogni secondo

const xmasDay = setInterval(function() {
    
    // Data di oggi 
    const now = new Date().getTime();

    // Distanza tra oggi e la data del Natale
    const distance = countDownDate - now;

    // Calcolo del tempo in giorni, ore, minuti e secondi
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // Stampo in pagina 
    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;

    if(days < 10) {
        daysElement.innerText = 0 + days;
    } else if (hours < 10) {
        hoursElement.innerText = 0 + hours;
    } else if (minutes < 10) {
        minutesElement.innerText = 0 + minutes;
    } else if (seconds < 10) {
        secondsElement.innerText = 0 + seconds;
    } else {
        return;
    }

    if (distance < 0) {
        clearInterval();
    }
}, 1000);
