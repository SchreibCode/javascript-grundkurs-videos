// Porsche 911 Turbo - mit Variablen

const markePorsche911Turbo = "Porsche";
const modellPorsche911Turbo = "911 Turbo";
const laengePorsche911Turbo = 4535; // mm
const breitePorsche911Turbo = 1900; // mm
const hoehePorsche911Turbo = 1303; // mm
const hubraumPorsche911Turbo = 3745; // cm3
const leistungPorsche911Turbo = 580; // PS
const drehmomentPorsche911Turbo = 750; // Nm
const gewichtPorsche911Turbo = 1640; // kg
const zylinderPorsche911Turbo = 6; // Stück
const kraftstoffPorsche911Turbo = "Super Plus";
const preisPorsche911Turbo = 194650; // €

console.log(
    `Der ${markePorsche911Turbo} ${modellPorsche911Turbo} hat ${leistungPorsche911Turbo} PS`
);

// Porsche 911 Turbo - mit Objekt

const porsche911Turbo = {
    marke: "Porsche",
    modell: "911 Turbo",
    laenge: 4535, // mm
    breite: 1900, // mm
    hoehe: 1303, // mm
    hubraum: 3745, // cm3
    leistung: 580, // PS
    drehmoment: 750, // Nm
    gewicht: 1640, // kg
    zylinder: 6, // Stück
    kraftstoff: "Super Plus",
    preis: 194650, // €
};

console.log(
    `Der ${porsche911Turbo.marke} ${porsche911Turbo.modell} hat ${porsche911Turbo.leistung} PS`
);
