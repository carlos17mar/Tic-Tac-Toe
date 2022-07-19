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
    //Meter los movimientos de cada player en un array y comprobar si coinciden
    const winningMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let player1 = [];
    let player2 = [];
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i].Player.getSign === "x") {
        console.log("hola");
      }
    }
  }

  //Funcion que comprueba si se a pulsado ese boton
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
    return this.Player.getSign;
  }
}

let round = 1;
const player1 = new Player("x");
const player2 = new Player("o");
let gameboard = new GameBoard();

const buttons = document.querySelectorAll("button");
buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    if (round > 9) {
      gameboard.reset();
      round = 1;
    } else if (round % 2 == 0) {
      if (gameboard.setMove(new Move(buttons.id, player1))) {
        transformButton(buttons.id, player1);
        round++;
      }

      console.log(gameboard);
      gameboard.checkBoard();
    } else {
      if (gameboard.setMove(new Move(buttons.id, player2))) {
        transformButton(buttons.id,player2);
        round++;
      }
      console.log(gameboard);

      gameboard.checkBoard();
    }
  });
});

function transformButton(buttonId, player) {
  const display = document.getElementsByClassName("container");
  const button = document.getElementById(`${buttonId}`);
  if(player  === player1){
    button.style.color='green';
    button.innerHTML='X';

  }else {
button.innerHTML='O';
button.style.color= 'blue';
  }
}

console.log(gameboard.getBoard());
console.log(gameboard);
const getMove = gameboard.getSquare(0);
console.log(gameboard);
