/*
 * Ein boolean kann zwei Werte haben
 * true oder false
 */

const booleanFalse = false;
console.log({ booleanFalse });
const booleanTrue = true;
console.log({ booleanTrue });

/*
 * Andere Variablentypen lassen sich durch Vergleiche in einen Boolean verwandeln
 */

const istDreiGleichVier = 3 === 4;
console.log({ istDreiGleichVier });

const istDreiKleinerVier = 3 < 4;
console.log({ istDreiKleinerVier });

const istDreiGrößerGleichVier = 3 >= 4;
console.log({ istDreiGrößerGleichVier });

const apfel = "Apfel";
const banane = "Banane";
const istApfelGleichBanane = apfel === banane;
console.log({ istApfelGleichBanane });

const istApfelNichtGleichBanane = apfel !== banane;
console.log({ istApfelNichtGleichBanane });

const apfel2 = "Apfel";
const istApfelGleichApfel2 = apfel === apfel2;
console.log({ istApfelGleichApfel2 });

const istLaengeApfelGleichFuenf = apfel.length === 5;
console.log({ istLaengeApfelGleichFuenf });

/*
 * Mit dem logischen UND (&&) und dem logischen ODER (||) Operator kann man noch mehr Variation schaffen
 */

const pfirsich = "Pfirsich";
const istApfelGleichApfel2UndBananeGleichPfirsich =
    apfel === apfel2 && banane === pfirsich;
console.log({ istApfelGleichApfel2UndBananeGleichPfirsich });

const istApfelGleichApfel2OderBananeGleichPfirsich =
    apfel === apfel2 || banane === pfirsich;
console.log({ istApfelGleichApfel2OderBananeGleichPfirsich });
