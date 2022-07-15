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
  getBoard() {
    return this.board;
  }
  getSquare(coordinates){
    return this.board[coordinates];

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
  getPlayer(){
    return this.Player;

  }
}

const player1 = new Player("x");
const player2 = new Player("o");
let gameboard = new GameBoard();
let move1 = new Move(4,player2);
console.log(move1.getPlayer());
gameboard.insertMove(move1);
console.log(gameboard.getBoard());
console.log(move1);
console.log(gameboard);
const getMove = gameboard.getSquare(0);
console.log(getMove.getPlayer().getSign());
