# Ternary Himmel

## Aufgabenstellung

Schreibe folgenden Code um, so dass kein if else mehr darin vorkommt.

```js
// 1
const alter = 21;
if (alter > 18) {
    console.log(`Du darfst Auto fahren`);
} else {
    console.log(`Du darfst NICHT Auto fahren`);
}

// 2
const heutigerTag = `Freitag`;
if (heutigerTag === `Freitag`) console.log(`Ich mag Freitag`);

// 3
const istAuslandsLieferung = true;
const lieferKostenInland = 5;
const lieferKostenAusland = 29;
const kostenHandy = 399;
let kostenTotal;
if (istAuslandsLieferung) {
    kostenTotal = kostenHandy + lieferKostenAusland;
} else {
    kostenTotal = kostenHandy + lieferKostenInland;
}
console.log(`Der Gesamtpreis ist ${kostenTotal}€`);

// 4
const auto1 = `Porsche`;
const auto2 = `Ferrari`;

if (auto1 === `Porsche` || auto1 === `Ferrari`) {
    if (auto2 === `Porsche` || auto2 === `Ferrari`) {
        console.log(`Nur teure Karren hier`);
    } else {
        console.log(`Keine schnellen Autos`);
    }
} else {
    console.log(`Keine schnellen Autos`);
}
```
