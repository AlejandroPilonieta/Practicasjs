let name = prompt("Ingrese Nombre ").toLowerCase();
let age = prompt("Ingrese su edad");
let country = prompt("Ingresa tu país").toLowerCase();
let city = prompt("Ingrese su ciudad").toLowerCase();

if (
  (country === "canada" || country === "canadá") &&
  age >= "18" &&
  city === "toronto"
) {
  alert("Felicidades, usted cumple con los requisitos para la beca");
} else {
  alert("Lo sentimos, usted no cumple con los requisitos para la beca");
}
