// Copy

const porsche911Turbo = {
    marke: "Porsche",
    modell: "911 Turbo",
    kofferaumVorne: true,
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
    modellReihen: ["911", "964", "993", "996", "997", "991", "992"],
};

// Final

const porsche911Turbo = {
    marke: "Porsche",
    modell: "911 Turbo",
    kofferaumVorne: true,
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
    modellReihen: ["911", "964", "993", "996", "997", "991", "992"],
    printInfo: function () {
        console.log(`Der ${this.marke} ${this.modell} hat ${this.leistung} PS`);
    },
};

porsche911Turbo.printInfo();
