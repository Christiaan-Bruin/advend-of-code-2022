const fs = require("fs");

const playedRounds = fs.readFileSync("day2.txt", { encoding: "utf-8" }) // read day??.txt content
    .replace(/\r/g, "")
    .trim()
    .split("\n")
    .map((round) => round.split(" "));

const moveValues = {
    rock: 1,
    paper: 2,
    scissors: 3
}

const moveInputs = {
    A: moveValues.rock,
    B: moveValues.paper,
    C: moveValues.scissors,
    X: moveValues.rock,
    Y: moveValues.paper,
    Z: moveValues.scissors,
}

const calculateRoundScore = (myMove, opponentMove) => {
    if (opponentMove === myMove) {

        // Draw
        return myMove + 3
    };
    if ((opponentMove === moveValues.rock && myMove === moveValues.paper) ||
        (opponentMove === moveValues.paper && myMove === moveValues.scissors) ||
        (opponentMove === moveValues.scissors && myMove === moveValues.rock)) {

        // Win
        return myMove + 6
    }

    // Loss
    return myMove;
}

const outcomes = playedRounds.map((round) => {
    const opponentMove = moveInputs[round[0]];
    const myMove = moveInputs[round[1]];
    return calculateRoundScore(myMove, opponentMove);
});

const calculateTotalScore = (roundScores) => {
    return roundScores.reduce((a, b) => a + b, 0)
}

console.log('Part 1: ' + calculateTotalScore(outcomes))