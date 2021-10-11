
// età e km richiesti

let UserKm = parseInt(prompt("Quanti km vuoi percorrere ?"))
let UserAge = parseInt(prompt("Qual è la tua età ?"))
const ticketprice = 0.21 * UserKm
const scontoU18 = 0.8
const scontoO65 = 0.6

// calcolo sconto

if (UserAge < 18) {
    var finalticketprice = (ticketprice * scontoU18).toFixed(2);  
} else if (UserAge > 65) {
    var finalticketprice = (ticketprice * scontoO65).toFixed(2);
} else {
    var finalticketprice = ticketprice.toFixed(2);
}

// visualizzazione del prezzo

document.getElementById('price').innerHTML = 'Il costo del biglietto è di: € ' + finalticketprice;