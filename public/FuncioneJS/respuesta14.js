var contSi = 0, contNo = 0;
var contSi2 = 0, contNo2 = 0;

function respuesta(res) {
  if (res === 'si') {
    contSi++;
  } else if (res === 'no') {
    contNo++;
  }

  if (contSi === 4) {
    window.location.href = "../Interprete/interprete4.html"
  }else if (contNo === 4 || (contSi === 1 && contNo === 3) || (contSi === 2 && contNo === 2) || (contSi === 3 && contNo === 1)) {
    window.location.href = "#P5"
  }

  if (res === 'si2') {
    contSi2++;
  } else if (res === 'no2') {
    contNo2++;
  }

  if (contSi2 === 4) {
    window.location.href = "../Interprete/interprete8.html"
  }else if (contNo2 === 4 || (contSi2 === 1 && contNo2 === 3) || (contSi2 === 2 && contNo2 === 2) || (contSi2 === 3 && contNo2 === 1)) {
    window.location.href = "#P9"
  }
}