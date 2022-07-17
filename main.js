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
      if (this.board[i] === Move) {
        return true;
      }
    }

    return false;
  }

  //Funcion que setea el campo
  setMove(Move) {
    if (this.existMove(Move)) {
      console.log("The movement has already been done");
    } else {
      this.insertMove(Move);
    }
  }
  checkBoard() {
 const winningMoves = 
            [[0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]];

   

        for (let z = 0; z < winningMoves.length; z++) {
console.log("------------------------------")
            
             for(let i = 0 ; i<3;i++){

           console.log(winningMoves[z][i]);
            
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
    for (let i = 0; i < this.board.length; i++){
        this.board[i] = null;
        this.board.length = 0;
  }}
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




const buttons = document.querySelectorAll("button");
buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    if (round > 9) {
        gameboard.reset();
        round =1;
    } else if (round % 2 == 0) {
      gameboard.setMove(new Move(buttons.id, player1));
      console.log(gameboard);
      round++;
      gameboard.checkBoard();
    } else {
      gameboard.setMove(new Move(buttons.id, player2));
      console.log(gameboard);
      round++;
    }
  });
});

console.log(gameboard.getBoard());
console.log(gameboard);
const getMove = gameboard.getSquare(0);
console.log(gameboard);
