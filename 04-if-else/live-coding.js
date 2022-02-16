/*
 * Der Code in einem if statement wird ausgeführt
 * wenn die Bedingung zwischen den Klammern true ist
 *
 * if(bedingung ist true){
 *     dann führ das aus
 * }
 *
 * if...else bedeutet übrigens nicht entweder...oder
 * sondern: falls...sonst
 *
 */

if (10 > 4) {
    console.log(`10 ist größer als vier`);
}

/*
 * Der Code im else statement wird ausgeführt
 * wenn die Bedingung im if statement false ist
 */

if ("Apfel" === "Banane") {
    console.log(`Apfel ist gleich Banane`);
} else {
    console.log(`Apfel ist NICHT gleich Banane`);
}

/*
 * Hinter einem else statement kann ein weiteres if statement folgen
 * Den Ablauf kann man theoretisch ewig so fortsetzen...
 */

const zahl = 3;

if (zahl >= 1 && zahl <= 10) {
    console.log(`Zahl ist zwischen 1 und 10`);
} else if (zahl >= 11 && zahl <= 20) {
    console.log(`Zahl ist zwischen 11 und 20`);
} else {
    console.log(`Zahl ist nicht zwischen 1 und 20`);
}

/*
 * Besteht der Code in einem if statment aus nur einer Zeile
 * brauch man keine { } Klammern
 */

const isTrue = true;

if (isTrue) console.log("Ist true");
else console.log(`Nicht true`);
