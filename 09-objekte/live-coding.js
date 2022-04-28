// Porsche 911 Turbo - mit Variablen

const markePorsche911Turbo = "Porsche";
const modellPorsche911Turbo = "911 Turbo";
const kofferaumVornePorsche911Turbo = true;
const leistungPorsche911Turbo = 580; // PS
const preisPorsche911Turbo = 194650; // €
const modellReihenPorsche911Turbo = [
    "911",
    "964",
    "993",
    "996",
    "997",
    "991",
    "992",
];
function printInfoPorsche911Turbo() {
    console.log(
        `Der ${markePorsche911Turbo} ${modellPorsche911Turbo} hat ${leistungPorsche911Turbo} PS`
    );
}

printInfoPorsche911Turbo();

// Porsche 911 mit Objekt

const porsche911Turbo = {
    marke: "Porsche",
    modell: "911 Turbo",
    kofferaumVorne: true,
    leistung: 580, // PS
    preis: 194650, // €
    modellReihen: ["911", "964", "993", "996", "997", "991", "992"],
    printInfo: function () {
        console.log(`Der ${this.marke} ${this.modell} hat ${this.leistung} PS`);
    },
};

const fiatFiesta = {
    marke: "Fiat",
    modell: "Fiesta",
    kofferaumVorne: true,
    leistung: 580, // PS
    preis: 194650, // €
    modellReihen: ["911", "964", "993", "996", "997", "991", "992"],
    printInfo: function () {
        console.log(`Der ${this.marke} ${this.modell} hat ${this.leistung} PS`);
    },
};

fiatFiesta.printInfo();
