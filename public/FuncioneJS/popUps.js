const abrirBtnC = document.getElementById('popUpContenido');
const abrirBtnE = document.getElementById('popUpEnfoque');
const abrirBtnU = document.getElementById('popUpUniversidad');

const mostPopUp1 = document.getElementById('mostPopUpCont');
const mostPopUp2 = document.getElementById('mostPopUpEnfo');
const mostPopUp3 = document.getElementById('mostPopUpUni');

const cerrarBtn1 = document.getElementById('cerrarPopUp1');
const cerrarBtn2 = document.getElementById('cerrarPopUp2');
const cerrarBtn3 = document.getElementById('cerrarPopUp3');

function openPopup1() {
    mostPopUp1.style.display = 'block';
}
function closePopup1() {
    mostPopUp1.style.display = 'none';
}
abrirBtnC.addEventListener('click', openPopup1);
cerrarBtn1.addEventListener('click', closePopup1);

function openPopup2() {
    mostPopUp2.style.display = 'block';
}
function closePopup2() {
    mostPopUp2.style.display = 'none';
}
abrirBtnE.addEventListener('click', openPopup2);
cerrarBtn2.addEventListener('click', closePopup2);

function openPopup3() {
    mostPopUp3.style.display = 'block';
}
function closePopup3() {
    mostPopUp3.style.display = 'none';
}
abrirBtnU.addEventListener('click', openPopup3);
cerrarBtn3.addEventListener('click', closePopup3);