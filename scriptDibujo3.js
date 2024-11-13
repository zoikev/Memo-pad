
var area_de_dibujo = document.getElementById("area_dibujo");
var papel = area_de_dibujo.getContext("2d");


var x = 150;
var y = 150;
var colorTrazo = "Blue";

document.addEventListener("mousedown", clickMouse);

function clickMouse(mouseClick) {
  var xMouseClick = mouseClick.screenX;
  var yMouseClick = mouseClick.screenY;
}

area_de_dibujo.addEventListener("mousemove", dibujarMouse);

function dibujarMouse(mouseDown) {
  var xMouseMoveFinal = mouseDown.offsetX;
  var yMouseMoveFinal = mouseDown.offsetY;
  var xMouseMoveInicial = xMouseMoveFinal + mouseDown.movementX;
  var yMouseMoveInicial = yMouseMoveFinal + mouseDown.movementY;
  paint(colorTrazo, xMouseMoveInicial, yMouseMoveInicial, xMouseMoveFinal, yMouseMoveFinal, papel);
}


function paint(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

document.addEventListener("keydown", dibujarTeclado);
function dibujarTeclado(evento) {
  var teclas = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};
  var movimiento = 5;
  switch(evento.keyCode) {
    case teclas.UP:
      paint(colorTrazo, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      paint(colorTrazo, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      paint(colorTrazo, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      paint(colorTrazo, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
}