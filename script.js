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
      <p>Consumo por galón: ${consumoPorGalon.toFixed(2)} km/galón</p>
      <p>Usuario: ${usuario}</p>
    `;
  
  
    document.getElementById('resultado').innerHTML = resultadoHTML;
}
function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00Z'); 
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`;
}



  