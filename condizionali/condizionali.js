let nome = "Luca"
let age = 15

if (nome == "Luca") {       // == controlla solo il contenut, mentre === anche tipo
    console.log("ciao Luca")
}

else if (nome == "Marco") {     // possiamo avere infiniti else if
    console.log("ciao marco")
}

else {
    console.log("ciao persona anonima")       /* sull'else finale non ci va la condizione perchè è un 
                                                se niente di quello che c'è sopra è verificato, allora fai questo */
}

/* ricordarsi che l'operatore comparativo di differenza ha un uguale in meno
   quindi sono == e ===, mentre per la diversità sono: != e !== */

let numero = 20

if (numero < 20) { // se un numero è minore di 20, mi controlli se è pari o dispari, perchè sopra il 20 non ci interessa
    if (numero % 2 === 0) {         // qui sto innestando un if dentro un if
        console.log("numero pari")
    } else {
        console.log("numero dispari")
    }

}