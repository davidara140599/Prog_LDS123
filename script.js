function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;

    document.getElementById("resultado").innerHTML =
        "Nombre completo: " + nombre + " " + apellidos;
}
