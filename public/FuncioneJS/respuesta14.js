var contSi = 0;
var contNo = 0;

function respuesta(res) {
  if (res === 'si') {
    contSi++;
  } else if (res === 'no') {
    contNo++;
  }

  if (contSi === 4) {
    window.location.href = "../Interprete/interprete4.html"
  }else if (contNo === 4 || (contSi === 1 && contNo === 3) || (contSi === 2 && contNo === 2) || (contSi === 3 && contNo === 1)) {
    window.location.href = "p5.html"
  }
}