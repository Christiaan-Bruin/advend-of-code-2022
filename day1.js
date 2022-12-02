const fs = require("fs");

const elves = fs.readFileSync("day1.txt", { encoding: "utf-8" }) // read day??.txt content
    .replace(/\r/g, "")
    .trim()
    .split("\n\n");

const elfCalories = elves.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0)
});

const getMaxNumber = (numberArr) => {
    return Math.max(...numberArr);
}

const getTop3MaxNumbers = (numberArr) => {
    return numberArr
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((previous, current) => previous + current, 0)
}

console.log('Part 1: ' + getMaxNumber(elfCalories))
console.log('Part 2: ' + getTop3MaxNumbers(elfCalories))