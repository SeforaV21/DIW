var operandoa;
var operandob;
var operacion;


function init(){
    //valables 
    var resultado= document.getElementById("resultado");

    var porcentaje= document.getElementById("porcentaje");
    var borrar= document.getElementById("borrar");
    var eliminar= document.getElementById("eliminar");
    var fracciones= document.getElementById("fracciones");
    var elevarpotencia= document.getElementById("elevarpotencia");
	var raizcuadrada= document.getElementById("raizcuadrada");
    var dividir= document.getElementById("dividir");
    var restasuma= document.getElementById("restasuma");
    var coma= document.getElementById("coma");
    var igual= document.getElementById("igual");
    var cero= document.getElementById("cero");
	var siete= document.getElementById("siete");
    var ocho= document.getElementById("ocho");
    var nueve= document.getElementById("nueve");
    var multiplicar= document.getElementById("multiplicar");
    var cuatro= document.getElementById("cuatro");
    var cinco= document.getElementById("cinco");
	var seis= document.getElementById("seis");
    var resta= document.getElementById("resta");
    var uno= document.getElementById("uno");
    var dos= document.getElementById("dos");
    var tres= document.getElementById("tres");
    var sumar= document.getElementById("sumar");
    
    //eventos

    uno.onclick= function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick= function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick= function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick= function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick= function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick= function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick= function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick= function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick= function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick= function(e){
        resultado.textContent = resultado.textContent + "0";
    }
  
    borrar.onclick = function(e){
        resetear();
    }

    sumar.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar(); 
    }

    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar(); 
    }

    multiplicar.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar(); 
    }

    dividir.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar(); 
    }

    igual.onclick = function(e){
        operandob= resultado.textContent;
        resolver(); 
    }
   
}

function limpiar(){
    resultado.textContent= "";
}

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
        switch(operacion){
            case "+":
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;

            case "-":
                 res = parseFloat(operandoa) - parseFloat(operandob);
                 break;
                    
            case "*":
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;

            case "/":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;
        }
    resetear();
    resultado.textContent = res;    
}