// Variables para almacenar el nombre
let nombreUser = prompt("Escribe tu nombre");
alert("Bienvenid@ " + nombreUser);

// Alertas de información al usuario
alert("En la siguiente pantalla podrás observar los precios de los productos");
alert("- El Producto 1: Lemon Pie $10 - El Producto 2: Apple Pie $12 - El Producto 3: Ice Cream Cake $17");

// Definición de productos y sus precios
const productos = [
  { nombre: "Lemon Pie", precio: 10 },
  { nombre: "Apple Pie", precio: 12 },
  { nombre: "Ice Cream Cake", precio: 17 }
];

// Función para validar si la entrada es un número
function esNumero(valor) {
  return !isNaN(valor) && !isNaN(parseFloat(valor));
}

// Función para calcular el costo total
function calcularCostoTotal(cantidades) {
  const costoTotal = productos.reduce((total, producto, index) => {
    const cantidad = cantidades[index] || 0;

    // Validación para asegurarse de que la cantidad sea un número válido y no negativo
    if (!esNumero(cantidad) || cantidad < 0) {
      throw new Error("Por favor, ingrese cantidades válidas y no negativas.");
    }

    return total + cantidad * producto.precio;
  }, 0);

  return `El costo total de los productos es $${costoTotal.toFixed(2)}`;
}

// Función para obtener las cantidades de productos del usuario y mostrar el resultado
function calcularCosto() {
  const cantidades = productos.map((producto, index) => {
    let cantidad;

    do {
      cantidad = prompt(`Ingrese la cantidad deseada de ${producto.nombre}:`);
      
      // Validación para asegurarse de que la entrada sea un número
      if (!esNumero(cantidad)) {
        alert("Por favor, ingrese un número válido.");
      }
    } while (!esNumero(cantidad));

    return parseInt(cantidad) || 0;
  });

  try {
    const resultado = calcularCostoTotal(cantidades);
    alert(resultado);
  } catch (error) {
    alert(error.message);
  }
}

// Llamar a la función para que el usuario ingrese las cantidades y se muestre el resultado
calcularCosto();