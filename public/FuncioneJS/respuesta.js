var contSi = 0, contNo = 0;
var contSi2 = 0, contNo2 = 0;
var contSi3 = 0, contNo3 = 0;
var contSi4 = 0, contNo4 = 0;

function respuesta(res) {
  if (res === 'si') {
    contSi++;
  } else if (res === 'no') {
    contNo++;
  } else if (res === 'si2') {
    contSi2++;
  } else if (res === 'no2') {
    contNo2++;
  } else if (res === 'si3') {
    contSi3++;
  } else if (res === 'no3') {
    contNo3++;
  } else if (res === 'si4') {
    contSi4++;
  } else if (res === 'no4') {
    contNo4++;
  }

  if (contSi === 4) {
    window.location.href = "Interprete/inter4.html";
  }else if (contNo === 4) {
    window.location.href = "Interprete/inter16.html";
  }
  
  else if (contSi2 === 4) {
    window.location.href = "Interprete/inter8.html";
  }else if (contNo2 === 4) {
    window.location.href = "Interprete/inter4.html";
  }
  
  else if (contSi3 === 4) {
    window.location.href = "Interprete/inter12.html";
  }else if (contNo3 === 4) {
    window.location.href = "Interprete/inter8.html";
  }
  
  else if (contSi4 === 4) {
    window.location.href = "Interprete/inter16.html";
  }else if (contNo4 === 4) {
    window.location.href = "Interprete/inter12.html";
  }

  else if (((contSi === 2 && contNo === 2)
          && (contSi2 === 2 && contNo2 === 2)
          && (contSi3 === 2 && contNo3 === 2)
          && (contSi4 === 2 && contNo4 === 2))
          || ((contSi === 3 && contNo === 1)
            && (contSi2 === 3 && contNo2 === 1)
            && (contSi3 === 3 && contNo3 === 1)
            && (contSi4 === 3 && contNo4 === 1))
          || ((contSi === 1 && contNo === 3)
            && (contSi2 === 1 && contNo2 === 3)
            && (contSi3 === 1 && contNo3 === 3)
            && (contSi4 === 1 && contNo4 === 3))) {
    window.location.href = "Interprete/interNada.html";
  }

  else if (((contSi === 3 &&  contNo === 1)
          && ((contSi2 === 1 && contNo2 === 3) || (contSi2 === 2 && contNo2 === 2))
          && ((contSi3 === 1 && contNo3 === 3) || (contSi3 === 2 && contNo3 === 2))
          && ((contSi4 === 1 && contNo4 === 3) || (contSi4 === 2 && contNo4 === 2)))
          || ((contSi2 === 1 && contNo === 3)
              && ((contSi === 3 && contNo === 1) || (contSi === 2 && contNo === 2))
              && ((contSi3 === 3 && contNo3 === 1) || (contSi3 === 2 && contNo3 === 2))
              && ((contSi4 === 3 && contNo4 === 1) || (contSi4 === 2 && contNo4 === 2)))) {
    window.location.href = "Interprete/inter4.html"
  }

  else if (((contSi2 === 3 &&  contNo2 === 1)
          && ((contSi === 1 && contNo === 3) || (contSi === 2 && contNo === 2))
          && ((contSi3 === 1 && contNo3 === 3) || (contSi3 === 2 && contNo3 === 2))
          && ((contSi4 === 1 && contNo4 === 3) || (contSi4 === 2 && contNo4 === 2)))
          || ((contSi3 === 1 && contNo3 === 3)
              && ((contSi === 3 && contNo === 1) || (contSi === 2 && contNo === 2))
              && ((contSi2 === 3 && contNo2 === 1) || (contSi2 === 2 && contNo2 === 2))
              && ((contSi4 === 3 && contNo4 === 1) || (contSi4 === 2 && contNo4 === 2)))) {
    window.location.href = "Interprete/inter8.html"
  }

  else if (((contSi3 === 3 &&  contNo3 === 1)
          && ((contSi === 1 && contNo === 3) || (contSi === 2 && contNo === 2))
          && ((contSi2 === 1 && contNo2 === 3) || (contSi2 === 2 && contNo2 === 2))
          && ((contSi3 === 1 && contNo3 === 3) || (contSi3 === 2 && contNo3 === 2)))
          || ((contSi4 === 1 && contNo4 === 3)
              && ((contSi === 3 && contNo === 1) || (contSi === 2 && contNo === 2))
              && ((contSi2 === 3 && contNo2 === 1) || (contSi2 === 2 && contNo2 === 2))
              && ((contSi3 === 3 && contNo3 === 1) || (contSi3 === 2 && contNo3 === 2)))) {
    window.location.href = "Interprete/inter12.html"
  }

  else if (((contSi4 === 3 &&  contNo4 === 1)
          && ((contSi === 1 && contNo === 3) || (contSi === 2 && contNo === 2))
          && ((contSi2 === 1 && contNo2 === 3) || (contSi2 === 2 && contNo2 === 2))
          && ((contSi3 === 1 && contNo3 === 3) || (contSi3 === 2 && contNo3 === 2)))
          || ((contSi === 1 && contNo === 3)
              && ((contSi2 === 3 && contNo2 === 1) || (contSi2 === 2 && contNo2 === 2))
              && ((contSi3 === 3 && contNo3 === 1) || (contSi3 === 2 && contNo3 === 2))
              && ((contSi4 === 3 && contNo4 === 1) || (contSi4 === 2 && contNo4 === 2)))) {
    window.location.href = "Interprete/inter16.html"
  }
}