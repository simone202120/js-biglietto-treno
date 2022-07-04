const kMTratta = parseInt(prompt('Inserisci KM Tratta'));
const Età = parseInt(prompt('Inserisci età'));

if (Età >= 65)  {
    const costoBiglietto =parseInt (kMTratta * 0.21) - 45%
    alert ('il costo del biglietto è'+ costoBiglietto + '€');
} else if (Età <=18) {
    const costoBiglietto = parseInt (kMTratta * 0.21) - 20%
    alert ('il costo del biglietto è'+ costoBiglietto + '€');
} else {
    const costoBiglietto = parseInt (kMTratta * 0.21);
    alert ('il costo del biglietto è'+ costoBiglietto + '€');
} 