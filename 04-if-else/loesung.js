// Aufgabenstellung
// Erstelle eine Variable mit dem Namen aktuelleStunde
// Weise der Variable deine aktuelle Uhrzeit zu.
// Schreibe Code der auf der Konsole ausgibt:
// "Guten Morgen" falls aktuelleStunde zwischen 5 und 9 ist
// "Guten Mittag" falls aktuelleStunde zwischen 10 und 14 ist
// "Guten Nachmittag" falls aktuelleStunde zwischen 15 und 17 ist
// "Guten Abend" falls aktuelleStunde zwischen 18 und 22 ist
// "Gute Nacht" falls davor nichts zutrifft

const aktuelleStunde = new Date().getHours();

if (aktuelleStunde >= 5 && aktuelleStunde <= 9) {
    console.log("Guten Morgen");
} else if (aktuelleStunde >= 10 && aktuelleStunde <= 14) {
    console.log("Guten Mittag");
} else if (aktuelleStunde >= 15 && aktuelleStunde <= 17) {
    console.log("Guten Nachmittag");
} else if (aktuelleStunde >= 18 && aktuelleStunde <= 22) {
    console.log("Guten Abend");
} else {
    console.log("Gute Nacht");
}
