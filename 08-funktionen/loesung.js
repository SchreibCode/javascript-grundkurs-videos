// 1

function getHHMMSS() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

console.log(getHHMMSS());

// 2

function getSizeOfRectangle(length, width) {
    return length * width;
}

console.log(getSizeOfRectangle(10, 5));

// 3

function countTo(number) {
    for (let i = 1; i <= number; i++) {
        console.log(i);
    }
}

countTo(10);
