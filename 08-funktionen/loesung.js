// 1

function getHHMMSS() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

// 2

function getSizeOfRectangle(length, width) {
    return length * width;
}

// 3

function countTo(number) {
    for (let i = 1; i <= number; i++) {
        console.log(i);
    }
}
