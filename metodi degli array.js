
//tutorial 06 gli array

let data1 = ["Milano", "Torino", "Roma", "Venezia"] // array di partenza

///////////////////////////////////////////////


// se faccio //
console.log(data1) // mi restituisce l'array come scritto sopra


// mentre se uso un ciclo for mi restituisce i singoli valori in console uno sotto l'altro



for (i = 0; i < data1.length; i++) {

    console.log(data1[i])

}

////////////////////////////////////////////////////////////


let citta2 = "Milano,Torino,Roma,Venezia" // mentre se voglio trasformare questa stringa in un array, faccio così

let data2 = citta2.split(",")

console.log(data2)

////////////////////////////////////////////////////////////

let citta3 = ["Milano", "Torino", "Roma", "Venezia"] // se invece voglio fare il contrario, da array a stringa, uso .join

let data3 = citta3.join(",") // posso cambiare la virgola con trattini e non cambia nulla

console.log(data3)

////////////////////////////////////////////////////////////

let citta4 = ["Milano", "Torino", "Roma", "Venezia"] // se voglio aggiungere una nuova città in fondo alla'array

citta4.push("Firenze")

console.log(citta4)

////////////////////////////////////////////////////////////

let citta5 = ["Milano", "Torino", "Roma", "Venezia"] // con pop vado ad eliminare l'ultimo elemento

citta5.pop() // quindi pop praticamente toglie dalla coda

console.log(citta5)

////////////////////////////////////////////////////////////

let citta6 = ["Milano", "Torino", "Roma", "Venezia"]

citta6.unshift("Firenze") // unshift come push, ma invece che aggiungere alla fine, aggiunge all'inizio

console.log(citta6)

////////////////////////////////////////////////////////////

let citta7 = ["Milano", "Torino", "Roma", "Venezia"]

citta7.shift() // shift mi rimuove il primo elemento dell'array

console.log(citta7)