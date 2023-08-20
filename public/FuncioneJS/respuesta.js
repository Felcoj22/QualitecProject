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
  }else if (contSi2 === 4) {
    window.location.href = "Interprete/inter8.html"
  }else if (contNo2 === 4) {
    window.location.href = "Interprete/inter4.html"
  }else if (contSi3 === 4) {
    window.location.href = "Interprete/inter12.html"
  }else if (contNo3 === 4) {
    window.location.href = "Interprete/inter8.html"
  }else if (contSi4 === 4) {
    window.location.href = "Interprete/inter16.html"
  }else if (contNo4 === 4) {
    window.location.href = "Interprete/inter12.html"
  }else if ((contSi >= 1 && contNo >= 3)) {
    $('#P5').show();
    $('#P1, #P2, #P3, #P4').hide();
  }else if ((contSi2 >= 1 && contNo2 >= 3)) {
    $('#P9').show();
    $('#P5, #P6, #P7, #P8').hide();
  }else if ((contSi3 >= 1 && contNo3 >= 3)) {
    $('#P13').show();
    $('#P9, #P10, #P11, #P12').hide();
  }else if ((contSi3 >= 1 && contNo3 >= 3)) {
    $('Interprete/interNada.html').show();
  }
}

$(document).ready(function() {
  $('.Contenedor-Boton button').on('click', function() {
    var res = $(this).attr('data-respuesta');
    var nextDivId = $(this).closest('.Contenedor-Pregunta').next().attr('id');

    respuesta(res);
    $('#' + nextDivId).show();
    $(this).closest('.Contenedor-Pregunta').hide();
  });
});