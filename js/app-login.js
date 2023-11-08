function validarForm() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Comprueba si el usuario y la contraseña son correctos
    if (usuario === "cmonitoreo" && contrasena === "admin") {
        // Redirecciona al otro archivo HTML
        window.location.href = "store/store.html";
        return false;
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        return false;
    }
}