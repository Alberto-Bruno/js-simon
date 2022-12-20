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

const countDownDate = new Date("Dec 24, 2022 00:00:00").getTime();

// Aggiorno il conto alla rovescia ogni secondo

const christmasDay = setInterval(function() {
    
    // Data di oggi 
    const now = new Date().getTime();

    // Distanza tra oggi e la data del Natale
    const distance = countDownDate - now;

    // Calcolo del tempo in giorni, ore, minuti e secondi
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
});
