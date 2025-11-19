async function ejecutarFlujo() {

    const url = "https://default1c0051dd45964b1a9849d060735057.69.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/280836cede964890b672ea6ac52901f1/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=NMNk4omolwOglfQWRqQeIJpInjxrGJU2yGmxhTZylko";

    // Aquí lees los valores de tus inputs
    const datos = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("apellidos").value
    };

    try {
        const respuesta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();
        console.log("Respuesta del flujo:", resultado);

    } catch (error) {
        console.error("Error ejecutando el flujo:", error);
    }
}

document.getElementById("enviarBton").addEventListener("click", () => {
    ejecutarFlujo();
});

