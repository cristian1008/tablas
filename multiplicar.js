

function generarTablas(){



    let contenido="";
    let multiplo=5;

    for(let i=1; i<=10; i++){
        contenido=contenido+"<div class='fila'><span class='operacion'>"+multiplo+"<span>×</span>"+i+"</span><span class='resultado'>"+multiplo*i+"</span></div>";
    }

    let meta1=document.getElementById("meta1");
    meta1.setAttribute("content", "Tabla de multiplicar del "+multiplo+" con una interfaz tecnológica y adaptable.");


    let titulo1=document.getElementById("titulo1");
    titulo1.textContent="Tabla del "+multiplo+" | TechLab";


    let cabeza1=document.getElementById("cabeza1");
    cabeza1.textContent="del "+multiplo+".";


    let cabeza2=document.getElementById("cabeza2");
    cabeza2.textContent="x"+multiplo;


    let tabla=document.getElementById("tabla");
    tabla.setAttribute("aria-label","Tabla de multiplicar del "+multiplo);


    let multiplicar=document.getElementById("multiplicar");
    multiplicar.innerHTML=contenido;




}