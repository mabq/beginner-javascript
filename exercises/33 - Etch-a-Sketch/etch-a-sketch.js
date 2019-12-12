const config = {
  _lineWidth: 50,
  _moveOptions: ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"],
  lineWidth() {
    return config._lineWidth;
  },
  moveOptions() {
    return config._moveOptions;
  }
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const canvas = {
  _ctx: undefined,
  _width: undefined,
  _height: undefined,
  ctx() {
    return canvas._ctx;
  },
  width() {
    return canvas._width;
  },
  height() {
    return canvas._height;
  }
};

function initializeCanvas() {
  const _canvas = document.querySelector("#etch-a-sketch");
  if (!_canvas.getContext) {
    alert("Your browser is not supported.");
    throw Error("No canvas support!");
  }
  canvas._ctx = _canvas.getContext("2d");
  canvas._width = _canvas.width;
  canvas._height = _canvas.height;
}

const state = {
  _x: undefined,
  _y: undefined,
  x() {
    return state._x;
  },
  y() {
    return state._y;
  },
  setX(x) {
    state._x = x;
  },
  setY(y) {
    state._y = y;
  }
};

function initializePos() {
  const lineWidth = config.lineWidth();
  state.setX(
    randomIntFromInterval(lineWidth / 2, canvas.width() - lineWidth / 2)
  );
  state.setY(
    randomIntFromInterval(lineWidth / 2, canvas.height() - lineWidth / 2)
  );
}

function colorGenerator() {
  const colors = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "goldenrod",
    "gold",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavenderblush",
    "lavender",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "tan",
    "steelblue",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    // "white",
    "whitesmoke",
    "yellow",
    "yellowgreen"
  ];
  return function() {
    const n = randomIntFromInterval(0, colors.length - 1);
    return colors[n];
  };
}

const getColor = colorGenerator();

function drawLine({
  ctx,
  lineWidth = 15,
  lineCap = "butt",
  color = "black",
  fromX = 50,
  fromY = 50,
  toX = 100,
  toY = 100
}) {
  ctx.lineWidth = lineWidth;
  ctx.lineCap = lineCap;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();
}

function draw(move) {
  const lineWidth = config.lineWidth();
  const lineRoom = lineWidth / 2;

  const fromX = state.x();
  const fromY = state.y();

  const moveOptions = config.moveOptions();

  let toX = fromX;
  let toY = fromY;
  let invalid = false;
  if (move === moveOptions[0]) {
    // ArrowUp
    toY = fromY - lineWidth;
  } else if (move === moveOptions[1]) {
    // ArrowRight
    toX = fromX + lineWidth;
  } else if (move === moveOptions[2]) {
    // ArrowDown
    toY = fromY + lineWidth;
  } else if (move === moveOptions[3]) {
    // ArrowLeft
    toX = fromX - lineWidth;
  } else {
    invalid = true;
  }

  if (
    invalid
    // ||
    // toX < lineRoom ||
    // toX > canvas.width() - lineRoom ||
    // toY < lineRoom ||
    // toY > canvas.height() - lineRoom
  ) {
    console.log("Invalid move");
    return false;
  }

  drawLine({
    ctx: canvas.ctx(),
    lineWidth,
    lineCap: "round",
    color: getColor(),
    fromX,
    fromY,
    toX,
    toY
  });

  state.setX(toX);
  state.setY(toY);

  return true;
}

function clearCanvas() {
  const ctx = canvas.ctx();
  ctx.clearRect(0, 0, canvas.width(), canvas.height());
}

function resetGame() {
  clearCanvas();
  initializePos();

  const options = config.moveOptions();

  let way, n;
  while (true) {
    n = randomIntFromInterval(0, options.length - 1);
    way = options[n];
    if (draw(way)) {
      break;
    }
  }
}

function initialize() {
  initializeCanvas();
  resetGame();

  document.addEventListener("keydown", e => {
    e.preventDefault();
    draw(e.code);
  });
}

const shake = document.querySelector("#shake");
shake.addEventListener("click", resetGame);

initialize();
