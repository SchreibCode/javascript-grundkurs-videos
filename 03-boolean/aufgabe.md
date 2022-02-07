# Wie eine Maschine denken

## Aufgabenstellung

-   Lies den folgenen Code links nach rechts und Zeile für Zeile wie eine Maschine. Überlege dir was jeder der acht console.log Anweisungen auf der Konsole ausgibt. Überprüfe deine Antwort indem du den Code in einer Datei namens loesung.js ausführst.

```js
const automarke = "Porsche";
const automarke2 = "Ferrari";
const lisaAlter = 23;
const johannesAlter = 17;
const ps = 545;
const führerScheinAb17Moeglich = true;

// 1
console.log(lisaAlter >= 23);

// 2
console.log(lisaAlter !== johannesAlter);

// 3
const istCool = automarke === "Porsche" && ps > 500;
console.log(istCool);

// 4
console.log(automarke.length === automarke2.length);

// 5
const darfFahren = johannesAlter >= 18 || führerScheinAb17Moeglich;
console.log(darfFahren);

// 6
console.log(automarke !== automarke2 || lisaAlter !== johannesAlter);

// 7
const enthaltenBuchstabeE =
    automarke.indexOf("e") >= 0 && automarke2.indexOf("e") >= 0;
console.log(enthaltenBuchstabeE);

// 8
console.log(automarke.indexOf("e") === automarke2.length);
```
