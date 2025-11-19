// 1. Función que ejecuta el flujo
async function ejecutarFlujo() {
    const url = "https://prod-00.westeurope.logic.azure.com:443/workflows/XXXXXXXXXXXX/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sig=YYYYYYYYYYYY"; 
    // Reemplaza la URL completa con la que te dio Power Automate

    const datos = {
        nombre: "Juan",
        accion: "prueba desde JS"
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


// 2. Evento del botón que ejecuta la función
document.getElementById("enviarBton").addEventListener("click", () => {
    ejecutarFlujo();
});
