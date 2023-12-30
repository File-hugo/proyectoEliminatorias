

function functionCambioFecha1(){
    document.getElementById('tablaFecha1').style.display = 'table';
    document.getElementById('tablaFecha2').style.display = 'none';
    document.getElementById('tablaFecha3').style.display = 'none';
    document.getElementById('tablaFecha4').style.display = 'none';

}

function functionCambioFecha2(){
    document.getElementById('tablaFecha2').style.display = 'table';
    document.getElementById('tablaFecha1').style.display = 'none';
    document.getElementById('tablaFecha3').style.display = 'none';
    document.getElementById('tablaFecha4').style.display = 'none';
}

function functionCambioFecha3(){
    document.getElementById('tablaFecha2').style.display = 'none';
    document.getElementById('tablaFecha1').style.display = 'none';
    document.getElementById('tablaFecha3').style.display = 'table';
    document.getElementById('tablaFecha4').style.display = 'none';
}

function functionCambioFecha4(){
    document.getElementById('tablaFecha1').style.display = 'none';
    document.getElementById('tablaFecha2').style.display = 'none';
    document.getElementById('tablaFecha3').style.display = 'none';
    document.getElementById('tablaFecha4').style.display = 'table';
}
