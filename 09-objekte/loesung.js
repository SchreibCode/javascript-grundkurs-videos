const bankkonto = {
    kontostand: 10000, // €
    iban: "DE67 1200 1200 5000",
    bankname: "DKB",
    kontoinhaber: "Lukas Hammeier",
    abheben: function (betrag) {
        const neuerKontostand = this.kontostand - betrag;

        if (neuerKontostand < 0) {
            console.log(`${betrag}€ konnte nicht abgehoben werden.`);
            return;
        }
        // Betrag abziehen
        this.kontostand = neuerKontostand;
        console.log(
            `${betrag}€ wurde erfolgreich abgehoben. Der neue Kontostand ist ${this.kontostand}€`
        );
    },
    einzahlen: function (betrag) {
        // Betrag hinzufügen
        this.kontostand = this.kontostand + betrag;
        console.log(
            `${betrag}€ wurde erfolgreich eingezahlt. Der neue Kontostand ist ${this.kontostand}€`
        );
    },
    zeigInfo: function () {
        console.log(
            `Dies ist eine Konto der ${this.bankname} Bank. Die IBAN dieses Kontos lautet: ${this.iban}.`
        );
    },
};

bankkonto.abheben(2000);
bankkonto.einzahlen(200);
bankkonto.zeigInfo();
bankkonto.abheben(90000);
console.log(bankkonto.kontostand);
