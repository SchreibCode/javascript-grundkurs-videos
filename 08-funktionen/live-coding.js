// Funktionen

const x = 5;

function test() {
    console.log("Hallo aus Funktion");
}

const ergebnis = x * 2;
console.log(ergebnis);

test();

// Parameter

function sagHallo(name) {
    console.log("Hallo " + name);
}

sagHallo("Hannes");

// Return

function addiereZwei(zahl) {
    return zahl + 2;
}

console.log(addiereZwei(2));
