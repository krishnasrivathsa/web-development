var board = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];
var q = {
  x: 0,
  y: 4,
};
console.log("q cur pos:" + board[q.x][q.y]);
function update(dir, step) {
  switch (dir) {
    case "N": {
      q.x = q.x - step;
      if (q.x > 8) console.log("out of board");
      else console.log(q.x);
      break;
    }
    case "S": {
      q.x = q.x + step;
      if (q.x < 0) console.log("out of board");
      else console.log(q.x);
      break;
    }
    case "E": {
      q.y = q.y + step;
      if (q.y > 8) console.log("out of board");
      else console.log(q.x);
      break;
    }
    case "W": {
      q.y = q.y - step;
      if (q.y < 0) console.log("out of board");
      else console.log(q.Y);
      break;
    }
    case "NE": {
      q.x = q.x - step;
      q.y = q.y + step;
      if (q.x > 8 || q.y > 8 || q.x < 0 || q.y < 0) console.log("out of board");
      else console.log(q.x, q.Y);
      break;
    }
    case "Nw": {
      q.x = q.x - step;
      q.y = q.y - step;
      if (q.x > 8 || q.y > 8 || q.x < 0 || q.y < 0) console.log("out of board");
      else console.log(q.x, q.Y);
      break;
    }
    case "SE": {
      q.x = q.x + step;
      q.y = q.y + step;
      if (q.x > 8 || q.y > 8 || q.x < 0 || q.y < 0) console.log("out of board");
      else console.log(q.x, q.Y);
      break;
    }
    case "Sw": {
      q.x = q.x + step;
      q.y = q.y - step;
      if (q.x > 8 || q.y > 8 || q.x < 0 || q.y < 0) console.log("out of board");
      else console.log(q.x, q.Y);
      break;
    }
  }
}
function move() {
  var p = value.split(" ");
  console.log(p);
  p.forEach((q) => {
    let step = Number(m.slice(q.length - 1));
    let dir = m.slice(0, q.length - 1);
    update(dir, step);
    console.log(dir);
    console.log(step);
  });

  var i = q.x;
  var j = q.y;
  var qposition = "x-axis y-axis:" + i + " " + j;
  console.log(qposition);
  console.log("q changed pos:" + board[q.x][q.y]);
}
var value = "Sw3";
move();
