var estado = false;          // estado del click      
var area = document.getElementById('area_dibujo');
var papel = area.getContext("2d");
var xMouse;                      // guardar coordenada en X
var yMouse;                      // guardar coordenada en Y
area.addEventListener("mousedown",presionarMouse);  //cuando presionas click
area.addEventListener("mouseup",soltarMouse);       //cuando sueltas click

// Funcion para mousemove
function dibujarMouse(evento){
  var colorLinea = document.getElementById("colorTrazo").value;    // color a la linea
  var gruesoLinea = document.getElementById("grosorTrazo").value;
  if (estado == true) {   // solo se dibujara si esta el click del mouse presionado
    dibujarLinea(colorLinea, gruesoLinea, xMouse, yMouse, evento.offsetX, evento.offsetY, papel);
  }
  xMouse = evento.offsetX;
  yMouse = evento.offsetY;
}

// Funcion para mousedown
function presionarMouse(mousePosition){
  var xpoint = mousePosition.offsetX;
  var ypoint = mousePosition.offsetY;
  var colorLinea = document.getElementById("colorTrazo").value;    // color a la linea
  var gruesoLinea = document.getElementById("grosorTrazo").value;
  if (gruesoLinea>2) {
    dibujarLinea(colorLinea, gruesoLinea, xpoint - 1, ypoint - 1, xpoint + 1, ypoint + 1, papel);
    dibujarLinea(colorLinea, gruesoLinea, xpoint + 1, ypoint - 1, xpoint - 1, ypoint + 1, papel);
    dibujarLinea(colorLinea, gruesoLinea, xpoint - 1, ypoint, xpoint + 1, ypoint, papel);
    dibujarLinea(colorLinea, gruesoLinea, xpoint, ypoint - 1, xpoint, ypoint + 1, papel);
  }

  area.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse
  estado = true;         //click presionado
}

// Funcion para mouseup
function soltarMouse(){
  estado = false;         // click suelto
}
function dibujarLinea(color, grueso, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = grueso;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estilo de trazo
  lienzo.closePath();                  // Cierra el dibujo
}

function resetMemoPad() {
  location.reload()
}
