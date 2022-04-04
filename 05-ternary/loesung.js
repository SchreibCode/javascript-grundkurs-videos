// 1
const alter = 21;

alter > 18
    ? console.log(`Du darfst Auto fahren`)
    : console.log(`Du darfst NICHT Auto fahren`);

// 2
const heutigerTag = `Freitag`;

heutigerTag === `Freitag` ? console.log(`Ich mag Freitag`) : null;

// 3
const istAuslandsLieferung = true;
const lieferKostenInland = 5;
const lieferKostenAusland = 29;
const kostenHandy = 399;

let kostenTotal = istAuslandsLieferung
    ? kostenHandy + lieferKostenAusland
    : kostenHandy + lieferKostenInland;

console.log(`Der Gesamtpreis ist ${kostenTotal}€`);

// 4
const auto1 = `Porsche`;
const auto2 = `Ferrari`;

const printThis =
    auto1 === `Porsche` || auto1 === `Ferrari`
        ? auto2 === `Porsche` || auto2 === `Ferrari`
            ? `Nur teure Karren hier`
            : `Keine schnellen Autos`
        : `Keine schnellen Autos`;

console.log(printThis);
