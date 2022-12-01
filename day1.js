const fs = require("fs");

const lines = fs
    .readFileSync("day1.txt", { encoding: "utf-8" })
    .split("\n")
    .filter((x) => x)
    .map((x) => x);

let max = 0;
let count = 0;

lines.forEach(line => {
    line == '\r' ? count = 0 : count += parseInt(line);
    if (count > max) max = count;
});

console.log(max)