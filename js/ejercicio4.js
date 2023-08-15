let password = prompt("Ingrese su contraseña");

if (password === null || password === "") {
    alert("datos no válidos")
} else {
    password = password;
    if (password === "alejandro") {
        alert("Bienvenido!")
    } else {
        alert("Contraseña inválida")
    }
}