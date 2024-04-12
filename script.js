function calcularRendimiento() {
    const fecha = document.getElementById('fecha').value;
    const unidad = document.getElementById('unidad').value;
    const ruta = document.getElementById('ruta').value;
    const kmInicial = parseFloat(document.getElementById('kmInicial').value);
    const kmFinal = parseFloat(document.getElementById('kmFinal').value);
    const galonaje = parseFloat(document.getElementById('galonaje').value);
    const usuario = document.getElementById('usuario').value;
    const fechaFormateada = formatDate(fecha);

    if (!fecha || !unidad || !ruta || isNaN(kmInicial) || isNaN(kmFinal) || isNaN(galonaje) || !usuario) {
        alert("Debes ingresar todos los datos");
        return;
    }
  
    const recorrido = kmFinal - kmInicial;
    const consumoPorGalon = recorrido / galonaje;

    const resultadoHTML = `
      <h2>Resultado:</h2>
      <p>Fecha: ${fechaFormateada}</p>
      <p>Unidad: ${unidad}</p>
      <p>Ruta: ${ruta}</p>
      <p>KM Inicial: ${kmInicial}</p>
      <p>KM Final: ${kmFinal}</p>
      <p>Recorrido: ${recorrido} km</p>
      <p>Galonaje: ${galonaje} galones</p>
      <p>Rendimiento: ${consumoPorGalon.toFixed(2)} km/galón</p>
      <p>Usuario: ${usuario}</p>
    `;

    // Abrir una ventana emergente con los resultados
    const nuevaVentana = window.open('', '_blank', 'width=400,height=400,scrollbars=yes,resizable=yes');
    nuevaVentana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resultado de Rendimiento de Camión</title>
            <link rel="stylesheet" href="styles.css">
            <style>
                /* Estilos adicionales para la ventana emergente */
                body {
                    font-size: 16px;
                    padding: 20px;
                }
            </style>
        </head>
        <body>
            ${resultadoHTML}
        </body>
        </html>
    `);
}

function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00Z'); 
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`;
}
