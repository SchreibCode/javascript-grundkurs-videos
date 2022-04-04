// 1

const lieblingsTiere = ["Robbe", "Löwe", "Hund", "Adler", "Papagei"];

//console.log(lieblingsTiere);

// 2

const buchstaben = ["h", "a", "l", "l", "o"];
const hello = buchstaben.join("");
//console.log(hello);

// 3

const mischmasch = [
    "ABC",
    32,
    "DEF",
    "GHI",
    9,
    "JKL",
    1,
    3,
    "MNO",
    "PQRSTUVW",
    "XYZ",
];

mischmasch.splice(1, 1);
mischmasch.splice(3, 1);
mischmasch.splice(4, 2);
const alphabet = mischmasch.join("");
console.log(alphabet);

// 4

const technik = ["Maus", "Keyboard", "Computer", "Bildschirm"];

console.log(technik.indexOf("Computer"));
