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

if (numero <= 20) { // se un numero è minore di 20, mi controlli se è pari o dispari, perchè sopra il 20 non ci interessa
    if (numero % 2 === 0) {         // questo per controllare il pari o dispari si chiama modulo controllando se il resto è 0 significa che è pari
        console.log("numero pari")
    } else {                            // qui sto innestando un if dentro un if
        console.log("numero dispari")
    }

}

///////////////////////////////////////////////////////////////////////////////////////

// operatori logici AND // OR // NOT


// operatore AND  simbolo: &&

let numero2 = 16

if (numero2 < 20 && numero2 % 2 === 0) {
    console.log("ok")            // la prima condizione per verificarsi il numero deve essere sia pari che minore di 20
    // quindi se uso AND, tutto deve combaciare

} else {
    console.log("non va bene")
}

// operatore OR  simbolo: ||

if (numero2 < 20 || numero2 % 2 === 0) {
    console.log("ok")            // la prima condizione per verificarsi, basta cheanche solo una delle una
    // delle condizioni sia verificata.

} else {
    console.log("non va bene")
}

// operatore NOT  simbolo: !

if (!(nome === "Luca")) {       // praticamente sto dicendo il nome è diverso da Luca? per verificari il nome deve essere diverso
    console.log("ok")            // la risposta alla prima condizione è falso, il nome non è diverso da Luca
    // se invece il nome fosse stato Luuuca, la condizione sarebbe stata vera, e avrebbe stampato ok

} else {
    console.log("non va bene")
}

// Switch

switch (nome) {
    case "Luca":
        console.log("ciao Luca")
        break    // il break serve per evitare che il codice vada avanti, ha trovato
    case "Marco":
        console.log("ciao marco")
        break
    default:   // il default funziona praticamente come l'else
        console.log("non so il tuo nome")
}


// ternary operator   simbolo: ?

let numero3 = 18
let nome2 = (numero3 < 20) ? "Luca" : "Leonardo" // è come dire se il numero3 minore di 20?
// se si stampami Luca, se no stampami leonardo

console.log(nome2)



