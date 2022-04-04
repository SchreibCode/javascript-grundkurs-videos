/*
 * Eine Ternary hat Ahnlichkeiten mit einem if...else Statement
 *
 * So sieht eine Ternary ganz allgemein aus:
 * Bedingung ? fallsTrue : fallsFalse
 */

console.log(10 > 11 ? `10 > 5` : `10 NICHT > 5`);

/*
 * Oft benutzt man Ternarys um Variablen dynamisch zuzuweisen
 */

const alter = 17;

const darfAutoFahren = alter >= 18 ? `Darf fahren` : `Darf NICHT fahren`;
console.log(darfAutoFahren);

/*
 * Man kann auch Code in einer Ternary ausführen
 */

const kuchenÜbrig = 5;
kuchenÜbrig === 0
    ? console.log(`Wo ist der Kuchen?`)
    : console.log(`Es sind noch ${kuchenÜbrig} Kuchen übrig`);

/*
 * Oder Ternarys schachteln
 */

const alterDevin = 17;
const alterMia = 17;
altersCheck1 = alterDevin > 16;
altersCheck2 = alterMia > 16;

console.log(
    altersCheck1 ? (altersCheck2 ? `beide dürfen` : `zu jung`) : `zu jung`
);

/*
 * Trennt man Ausdrücke durch ein Komma und klammert sie ein
 * können auch mehrere Zeilen Code in einem Ternary ablaufen
 */

10 > 1
    ? (console.log("Ist größer"), console.log("10 ist eine coole Zahl"))
    : console.log("Ist kleiner");
