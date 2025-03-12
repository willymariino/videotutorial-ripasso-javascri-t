
//tutorial 06 gli array

let data1 = ["Milano", "Torino", "Roma", "Venezia"] // array di partenza

///////////////////////////////////////////////


// se faccio //
console.log(data1) // mi restituisce l'array come scritto li


// mentre se faccio così mi restituisce i singoli valori


for (i = 0; i < data1.length; i++) {

    console.log(data1[i])

}

let citta2 = "Milano,Torino,Roma,Venezia" // mentre se voglio trasformare questa stringa in un array, faccio così

let data2 = citta2.split(",")

console.log(data2)

///////////////////////

let citta3 = ["Milano", "Torino", "Roma", "Venezia"]

let data3 = citta3.join(",")

console.log(data3)