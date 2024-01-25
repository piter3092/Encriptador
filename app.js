
let mensaje = '';
let newMensaje = '';

function capturarTexto(contenido){
    mensaje = document.getElementById(contenido).value;
}
    


function decodificar(texto){
    newMensaje = texto.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
    document.getElementById('salida').value = newMensaje;

    console.log(mensaje)
    
}

function codificar(texto){
    newMensaje = texto.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat');
    document.getElementById('salida').value = newMensaje;
        
}

function copiar(){

}