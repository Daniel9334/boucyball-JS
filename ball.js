const board = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "1", "0", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "Y", "0", "X"],
  ["X", "0", "0", "X", "X", "X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "Y", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
];

const directions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
  { dx: 1, dy: 1 },
  { dx: 1, dy: -1 },
  { dx: -1, dy: 1 },
  { dx: -1, dy: -1 },
];

let ball = { x: 1, y: 1 };
let direction = directions[Math.floor(Math.random() * directions.length)];

// Function drawing board
function drawBoard() {
  const boardElement = document.getElementById("board");
  boardElement.innerHTML = "";
  board.forEach((row) => {
    row.forEach((cell) => {
      const cellElement = document.createElement("div");
      cellElement.className =
        "cell " +
        (cell === "X"
          ? "X"
          : cell === "Y"
          ? "Y"
          : cell === "1"
          ? "one"
          : "zero");
      cellElement.textContent = cell;
      boardElement.appendChild(cellElement);
    });
  });
}

//Function moving ball on board
function moveBall() {
  const newX = ball.x + direction.dx;
  const newY = ball.y + direction.dy;

  if (board[newY][newX] === "X") {
    direction = directions[Math.floor(Math.random() * directions.length)]; 
  } else if (board[newY][newX] === "Y") {
    direction = directions.filter(
      (d) => !(d.dx === -direction.dx && d.dy === -direction.dy)
    )[Math.floor(Math.random() * (directions.length - 1))];
    board[newY][newX] = "0";
  } else if (board[newY][newX] === "0") {
    board[ball.y][ball.x] = "0";
    ball.x = newX;
    ball.y = newY;
    board[ball.y][ball.x] = "1";
  }

  // Update board
  drawBoard();
  // Delay before next step
  setTimeout(moveBall, 200);
}

drawBoard();
moveBall();
