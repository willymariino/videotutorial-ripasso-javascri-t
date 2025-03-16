let arrayy = [23, 13, 24, 25, 99]

// non conoscendo i loop, dovrei fare 

// console.log(arrayy[0])
// console.log(arrayy[1])
// console.log(arrayy[2])
// console.log(arrayy[3])
// console.log(arrayy[4])

/* e noi possiamo non sapere neanche quanti sono gli elementi, potrebbero essere infiniti
mentre con un ciclo sarebbe */

//  contatore -  condizione -  incremento
for (let i = 0; i < arrayy.length; i++) {
    console.log(arrayy[i])
    //  se invece voglio fermarlo ad un elemento specifico, faccio
    if (arrayy[i] == 24) {
        break // cosi fermo l'indice [i] in posizione 24 e il console log va sopra a break, perchè se no non va a schermo, perchè si ferma col break
    }
}

for (let i = 0; i < arrayy.length; i++) {

    //  se invece voglio saltare un elemento specifico, faccio
    if (arrayy[i] == 24) {
        continue // così invece che fermarsi al 24, lo salta, e prosegue con l'elemento dopo
    }
    console.log(arrayy[i])
}

// posso usare il continue anche per saltare i numeri pari, e mettere solo i dispari

for (let i = 0; i < arrayy.length; i++) {


    if (arrayy[i] % 2 === 0) {
        continue
    }
    console.log(arrayy[i])
} 