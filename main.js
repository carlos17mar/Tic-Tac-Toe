const Player = (sign) => {
    this.sign = sign;
    getSign();

    function getSign() {
        function getSign() {
            return sign;
        }
    }
};

const GameBoard = () => {
  let board = new Array(8);
  board.fill(1);
 
};
let board = GameBoard();
const Move = (_Player, move) => {
  const player = _Player;
  this.move = move;

  return { player, move };
}

const player1 = Player("x");
const player2 = Player("o");

console.log(player1);
console.log(player2.getSign());
console.log(board);