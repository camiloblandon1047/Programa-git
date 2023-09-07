var tb = document.getElementById("info");
var fil = 0,
  col = 0;
var op = false;
function agregar() {
  var producto = document.getElementById("Producto").value;
  var precio = document.getElementById("Precio").value;
  var cantidad = document.getElementById("Cantidad").value;
  if (verificar(producto)) {
    var x = tb.rows[fil].cells;
    var x2 = parseInt(x[2].innerHTML) + parseInt(cantidad);
    x[2].innerHTML = x2;
    x[3].innerHTML = parseInt(precio) * x2;
    resultado();
    op = false;
  } else {
    var n = tb.rows.length;
    var row = tb.insertRow(n);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = producto;
    cell2.innerHTML = precio;
    cell3.innerHTML = cantidad;
    cell4.innerHTML = precio * cantidad;
    resultado();
    alert("producto agregado con éxito!!");
  }
}

function verificar(p) {
  for (var i = 0; i < tb.rows.length; i++) {
    if (tb.rows[i].cells[0].innerHTML == p) {
      op = true;
      fil = i;
      col = 0;
    }
  }
  return op;
}

function resultado() {
  var suma = 0;
  for (var i = 1; i < tb.rows.length; i++) {
    suma = suma + parseInt(tb.rows[i].cells[3].innerHTML);
  }
  document.getElementById("Total").value = suma;
}
