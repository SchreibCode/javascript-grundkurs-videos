/*
 * Ein boolean Variablentyp kann zwei Werte haben
 * true oder false
 */

const booleanFalse = false;
console.log({ booleanFalse });
const booleanTrue = true;
console.log({ booleanTrue });

/*
 * Andere Variablentypen lassen sich durch
 * Vergleichs-Operatoren in einen Boolean verwandeln
 * Folgende Vergleiche gibt es: ===, !==, >, <, >=, <=
 */

// false
const istDreiGleichVier = 3 === 4;
console.log({ istDreiGleichVier });

// true
const istDreiKleinerVier = 3 < 4;
console.log({ istDreiKleinerVier });

// false
const istDreiGrößerGleichVier = 3 >= 4;
console.log({ istDreiGrößerGleichVier });

const apfel = "Apfel";
const banane = "Banane";
// false
const istApfelGleichBanane = apfel === banane;
console.log({ istApfelGleichBanane });

// true
const istApfelNichtGleichBanane = apfel !== banane;
console.log({ istApfelNichtGleichBanane });

const apfel2 = "Apfel";
// true
const istApfelGleichApfel2 = apfel === apfel2;
console.log({ istApfelGleichApfel2 });

// true
const istLaengeApfelGleichFuenf = apfel.length === 5;
console.log({ istLaengeApfelGleichFuenf });

/*
 * Mit dem logischen UND (&&) und dem logischen ODER (||) Operator
 * kann man noch mehr Logiken abbilden
 */

const pfirsich = "Pfirsich";
// false
const istApfelGleichApfel2UndBananeGleichPfirsich =
    //    true          &&      false
    apfel === apfel2 && banane === pfirsich;

console.log({ istApfelGleichApfel2UndBananeGleichPfirsich });

// true
const istApfelGleichApfel2OderBananeGleichPfirsich =
    //       true          ||      false
    apfel === apfel2 || banane === pfirsich;
console.log({ istApfelGleichApfel2OderBananeGleichPfirsich });
