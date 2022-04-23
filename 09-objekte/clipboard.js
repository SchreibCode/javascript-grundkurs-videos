// Copy

const porsche911Turbo = {
    marke: "Porsche",
    modell: "911 Turbo",
    kofferaumVorne: true,
    leistung: 580, // PS
    preis: 194650, // €
    modellReihen: ["911", "964", "993", "996", "997", "991", "992"],
};

// Final

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

porsche911Turbo.printInfo();
