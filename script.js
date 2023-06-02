function mostrar() {
    document.getElementById("mensaje-inicial").style.display = "none";
    document.getElementById("mensaje-final").style.display = "inline-block";
}

function validar(mensaje) {
    let restriccion = /[A-ZÁ-Úá-ú´']/;
    if (mensaje === '') {
        alert("⚠️ No has ingresado ningún texto");
        return true;
    } else if (restriccion.test(mensaje)) {
        alert("⚠️ Solo letras minúsculas y sin acentos");
        return true;
    } else {
        return false;
    }
}

function encriptar() {

    var textoInicial = document.getElementById("ingreso").value;
    var textoFinal = textoInicial.replaceAll("e","enter");
    let textoEncriptado = document.getElementById("ingreso").value;
    
    if (!validar(textoEncriptado)) { 

        textoFinal = textoFinal.replaceAll("i","imes");
        textoFinal = textoFinal.replaceAll("a","ai");
        textoFinal = textoFinal.replaceAll("o","ober");
        textoFinal = textoFinal.replaceAll("u","ufat");
        document.getElementById("copia").value = textoFinal;
        mostrar();
        document.getElementById("ingreso").value = "";
    }

    else {
        validar();
    }

}

function desencriptar(){

    var textoCodificado = document.getElementById("ingreso").value;
    var textoObtenido = textoCodificado.replaceAll("ufat","u");
    let textoDesencriptado = document.getElementById("ingreso").value;

    if (!validar(textoDesencriptado)) {

    textoObtenido = textoObtenido.replaceAll("ober","o");
    textoObtenido = textoObtenido.replaceAll("ai","a");
    textoObtenido = textoObtenido.replaceAll("imes","i");
    textoObtenido = textoObtenido.replaceAll("enter","e");
    document.getElementById("copia").value = textoObtenido;
    mostrar();
    document.getElementById("ingreso").value = ""; 

    }
    
    else {
        validar();
    }
}


function copiar() {
    var textoCopiado = document.getElementById("copia");

    textoCopiado.select();

    navigator.clipboard.writeText(textoCopiado.value);

}



