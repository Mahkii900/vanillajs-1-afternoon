console.log("Goodbye Cruel World")
let board = []

function play(clickedId) {
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }

    if (board[1] === board[2] && board[0] === board[1] && board[0] !== undefined) {
        //Top Across
        alert(`${board[0]}'s wins!`)
    } else if (board[0] === board[4] && board[0] === board[8] && board[0] !== undefined) {
        //Left Diagonal
        alert(`${board[0]}'s wins!`)
    } else if (board[0] === board[3] && board[0] === board[6] && board[0] !== undefined) {
        //Left Down
        alert(`${board[0]}'s wins!`)
    } else if (board[1] === board[4] && board[1] === board[7] && board[1] !== undefined) {
        //Center Down
        alert(`${board[1]}'s wins!`)
    } else if (board[2] === board[5] && board[2] === board[8] && board[2] !== undefined) {
        //Right Down
        alert(`${board[2]}'s wins!`)
    } else if (board[2] === board[4] && board[2] === board[6] && board[2] !== undefined) {
        //Right Diagonal
        alert(`${board[2]}'s wins!`)
    } else if (board[3] === board[4] && board[3] === board[5] && board[3] !== undefined) {
        //Middle Across
        alert(`${board[3]}'s wins!`)
    } else if (board[6] === board[7] && board[6] === board[8] && board[6] !== undefined) {
        //Bottom Across
        alert(`${board[6]}'s wins!`)
    }

    let boardFull = true;
    for (let i = 0; i < 9; i++) {
        if (board[i] === undefined) {
            boardFull = false
        }
    }
    if (boardFull === true) {
        alert("Cat's game")
    }
}