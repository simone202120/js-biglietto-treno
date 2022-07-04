const kMTratta = parseInt(prompt('Inserisci KM Tratta'));
const Età = parseInt(prompt('Inserisci età'));


if (Età >= 65)  {
    const costoBiglietto = (kMTratta * 0.21) - ((kMTratta * 0.21) * 0.45);
    const rounded = Math.round((costoBiglietto + Number.EPSILON) * 100) / 100;
    alert (`il costo del biglietto è di ${rounded}€`);
} else if (Età <=18) {
    const costoBiglietto = (kMTratta * 0.21) - ((kMTratta * 0.21) * 0.20);
    const rounded = Math.round((costoBiglietto + Number.EPSILON) * 100) / 100;
    alert (`il costo del biglietto è di ${rounded}€`);
} else {
    const costoBiglietto =  kMTratta * 0.21;
    const rounded = Math.round((costoBiglietto + Number.EPSILON) * 100) / 100;
    alert (`il costo del biglietto è di ${rounded} €`);
} 