/*
 * Arrays:
 * Ein JavaScript Array ist wie ein Zug mit Waggons aber ohne Lokomotive
 * In jedem Waggon kann ein Datentyp liegen.
 * So sieht ein Array aus: [waggon, waggon, waggon, ...];
 */

console.log(["Hallo", 23, false]);

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Arrays gehören zur Familie der Objekte und Objekte sind Datentypen.
 * Deshalb kann man Arrays genauso in Variablen ablegen wie Strings, Numbers und Booleans
 */

// const automarken = ["Porsche", "Mercedes", "Audi", "Tesla"];
// console.log(automarken);

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Arrays können verändert werden
 *
 * push fügt ein Element am Ende hinzu
 * unshift fügt ein Element am Anfang hinzu
 * pop löscht das letzte Element
 * shift löscht das erste Element
 */

// let fruechte = ["Banane", "Apfel", "Birne"];
// console.log(fruechte);

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Jetz zum Schwierigsten Teil des Videos
 * Das erste Element eines Arrays hat die Position 0 
 * Das letzte Element hat die Position Länge-1
 * 
 * Wie ruft man Elemente aus dem Array auf?
 */

const länder = ["Frankreich", "Mexiko", "Südafrika", "Irland"];
const längeLänderArray = länder.length;
console.log(längeLänderArray);