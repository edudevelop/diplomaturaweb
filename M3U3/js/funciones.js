function determinarTransporte() {
  let distancia = document.getElementById("distancia").value;

  if (distancia != "") {
    if (distancia <= 1000) {
      alert(
        "Para la distancia " +
          distancia +
          " metros el transporte adecuado es pie."
      );
    } else if (distancia > 1000 && distancia <= 10000) {
      alert(
        "Para la distancia " +
          distancia +
          " metros el transporte adecuado es bicicleta."
      );
    } else if (distancia > 10000 && distancia <= 30000) {
      alert(
        "Para la distancia " +
          distancia +
          " metros el transporte adecuado es colectivo."
      );
    } else if (distancia > 30000 && distancia <= 100000) {
      alert(
        "Para la distancia " +
          distancia +
          " metros el transporte adecuado es auto."
      );
    } else if (distancia > 100000) {
      alert(
        "Para la distancia " +
          distancia +
          " metros el transporte adecuado es avión."
      );
    }
  } else {
    alert("Debe ingresar una distancia en metros.");
  }
}

function obtenerMayor() {
  const arreglo = [8, 15, 2, 27, 1, 34, 14];
  let mayor;

  for (let i = 0; i < arreglo.length; i++) {
    if (i == 0) {
      mayor = arreglo[i];
    } else if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }

  alert("El mayor valor del arreglo es " + mayor);
}
