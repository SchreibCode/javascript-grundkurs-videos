/*
 * Ein boolean kann zwei Werte haben
 * true oder false
 */

const booleanFalse = false;
console.log({ booleanFalse });
const booleanTrue = true;
console.log({ booleanTrue });

/*
 * Andere Variablentypen lassen sich durch Vergleiche in Booleans verwandeln
 */

const dreiGleichVier = 3 === 4;
console.log({ dreiGleichVier });

const dreiKleinerVier = 3 < 4;
console.log({ dreiKleinerVier });

const dreiGrößerGleichVier = 3 >= 4;
console.log({ dreiGrößerGleichVier });

const apfel = "Apfel";
const banane = "Banane";
const apfelGleichBanane = apfel === banane;
console.log({ apfelGleichBanane });

const apfelNichtGleichBanane = apfel !== banane;
console.log({ apfelNichtGleichBanane });

const apfel2 = "Apfel";
const apfelGleichApfel2 = apfel === apfel2;
console.log({ apfelGleichApfel2 });

const laengeApfelGleichFuenf = apfel.length === 5;
console.log({ laengeApfelGleichFuenf });

/*
 * Mit dem logischen UND (&&) und dem logischen ODER (||) Operator kann man noch mehr Variation schaffen
 */

const pfirsich = "Pfirsich";
const apfelGleichApfel2UndBananeGleichPfirsich =
    apfel === apfel2 && banane === pfirsich;
console.log({ apfelGleichApfel2UndBananeGleichPfirsich });

const apfelGleichApfel2OderBananeGleichPfirsich =
    apfel === apfel2 || banane === pfirsich;
console.log({ apfelGleichApfel2OderBananeGleichPfirsich });
