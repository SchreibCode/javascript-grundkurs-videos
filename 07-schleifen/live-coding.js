/*
 * Mit JavaScript Schleifen wie while oder for
 * kann man Code wiederholen ohne ihn selbst mehrmals zu schreiben.
 *
 * Dank Schleifen können wir uns an die wichtige Regel "Don´t repeat yourself!" halten.
 * "Don´t repeat yourself!" oder auf Deutsch "Wiederhole dich nicht!" bedeutet,
 * dass man den selben Code nicht mehrmals schreiben sollte.
 *
 * So sollte man es nicht machen:
 */

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

/*
 * Die while Schleife wird ausgeführt, so lange die Bedingung true ergibt.
 *
 * while(bedingung){
 *
 * }
 */

let zahl = 1;
while (zahl < 11) {
    console.log(zahl);
    zahl++;
}

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Die for Schleife funktioniert genau wie die while Schleife, blos hat sie noch zwei zusätzliche Helfer für uns parat.
 * Die Initialisierung wird nur ein mal ganz am Anfang ausgeführt.
 * Die Nachhut wird nach jedem Schleifendurchlauf ausgeführt.
 *
 * for(initialisierung; bedingung; nachhut){
 *
 * }
 */

for (let i = 1; i < 11; i++) {
    console.log(i);
}
