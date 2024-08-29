const nombres = ["Ana", "Luis", "Carlos", "Marta", "Sofía"];

const nombreBuscado = "Ana";

const estaPresente = nombres.includes(nombreBuscado);

if (estaPresente) {
  console.log(`El nombre "${nombreBuscado}" está presente en el arreglo.`);
} else {
  console.log(`El nombre "${nombreBuscado}" no está presente en el arreglo.`);
}