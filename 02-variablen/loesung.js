// Aufgabe 1

const hoeheEineKarte = 12.8 / 32;
const hoeheStapelMit22Karten = hoeheEineKarte * 22;
console.log("Aufgabe 1.", hoeheStapelMit22Karten, "mm");

// Aufgabe 2

const preisProWassereis = 0.9;
const anzahlWassereis = 28 * 20;
const preisAlleWassereis = anzahlWassereis * preisProWassereis;

const preisAlleWaffeleis = 756 - preisAlleWassereis;
const anzahlWaffeleis = 30 * 12;
const preisProWaffeleis = preisAlleWaffeleis / anzahlWaffeleis;
console.log("Aufgabe 2", preisProWaffeleis, "€");

// Aufgabe 3

const geldImGeldbeutel = 12;
const preisFuerCenterShock = 0.9;
const restGeld = geldImGeldbeutel - 11.7;
console.log("Aufgabe 3.", 0.3, "€ Restgeld");
console.log("Aufgabe 3.", 13, "Stück kann er kaufen");
