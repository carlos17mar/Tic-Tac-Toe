class Player {
  constructor(sign) {
    this.sign = sign;
  }
  getSign() {
    return this.sign;
  }
}

class GameBoard {
  constructor(board = []) {
    this.board = board;
  }
  existMove(Move) {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i].coordinates === Move.coordinates) {
        return true;
      }
    }

    return false;
  }

  //Funcion que setea el campo
  setMove(Move) {
    if (this.existMove(Move)) {
      console.log("The movement has already been done");
      return false;
    } else {
      this.insertMove(Move);
      return true;
    }
  }
  checkBoard() {
    const winningMoves = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["3", "6", "9"],
      ["1", "5", "9"],
      ["3", "5", "7"],
    ];
    let player1 = [];
    let player2 = [];
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i].Player.sign === "x") {
        player1.push(this.board[i].coordinates);
      } else {
        player2.push(this.board[i].coordinates);
      }
    }

    function arrayContainsAnotherArray(needle, haystack) {
      for (var i = 0; i < needle.length; i++) {
        if (haystack.indexOf(needle[i]) === -1) return false;
      }
      return true;
    }
    for (let z = 0; z < winningMoves.length; z++) {
      let dummyArray = [];
      dummyArray = winningMoves[z];

      if (arrayContainsAnotherArray(dummyArray, player1)) {
        alert("The winner is Player 1");
        return true;
      } else if (arrayContainsAnotherArray(dummyArray, player2)) {
        alert("The winner is Player 2");
        return true;
      }
    }
    return false;
  }

  getBoard() {
    return this.board;
  }
  getSquare(coordinates) {
    return this.board[coordinates];
  }
  reset() {
    for (let i = 0; i < this.board.length; i++) {
      this.board[i] = null;
      this.board.length = 0;
    }
  }
  insertMove(Move) {
    this.board.push(Move);
  }
}

class Move {
  constructor(coordinates, Player) {
    this.coordinates = coordinates;
    this.Player = Player;
  }

  getCoordinates() {
    return this.move;
  }
  getPlayer() {
    return this.Player;
  }
}

let round = 1;
const player1 = new Player("x");
const player2 = new Player("o");
let gameboard = new GameBoard();
function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}
const buttons = document.querySelectorAll("button");
buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    if (round > 9) {
      boardReset();
      gameboard.reset();
      round = 1;
      alert("Its a tie.");
    } else if (round % 2 == 0) {
      if (gameboard.setMove(new Move(buttons.id, player1))) {
        transformButton(buttons.id, player1);
        round++;
        if (gameboard.checkBoard()) {
          wait(500);
          boardReset();
          gameboard.reset();
          round = 1;
        }
      }
    } else {
      if (gameboard.setMove(new Move(buttons.id, player2))) {
        transformButton(buttons.id, player2);
       
        round++;
        if (gameboard.checkBoard()) {
            
          wait(500);
          boardReset();
          gameboard.reset();
          round = 1;
        }
      }
    }
  });
});
function boardReset() {
  let buttons = document.getElementsByClassName("gameButton");
  for (let i = 1; i <= 9; i++) {
    let button = document.getElementById(`${i}`);
    button.innerHTML = " ";
  }
}

function transformButton(buttonId, player) {
  const button = document.getElementById(`${buttonId}`);
  if (player === player1) {
    button.style.color = "green";
    button.innerHTML = "X";
  } else {
    button.innerHTML = "O";
    button.style.color = "blue";
  }
}

