const guessesAllowed = 6;
const numOfLettersPerWord = 5;
const board = document.getElementById("board");

for (let i = 0; i < guessesAllowed; i++) {
    const row = document.createElement("div")
    board.appendChild(row)

    for (let j = 0; j < numOfLettersPerWord; j++) {
        const column = document.createElement("div")
        row.appendChild(column)
    }
}

function play() {

}