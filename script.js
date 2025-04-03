window.onload = function () {
    miBody = document.getElementsByTagName("body");
    miBody[0].setAttribute("class", "fondo");
};
let horasDecimales = 0;

document.getElementById("btn").onclick = function () {
    let gramos = parseFloat(document.getElementById("gramos").value);   //gramos usados
    let precio = parseFloat(document.getElementById("precio").value);   //precio de la resina
        
    if (!isNaN(gramos) && !isNaN(precio) && horasDecimales != 0) {
        let resina = Math.ceil((((precio+100)/1000)*gramos)+0.25);
        resina = resina + resina*0.23;
        let horas = Math.ceil(horasDecimales + 0.5)*2.5;
        let guantes = 5;
        let redondeo = 10;
        let total = Math.ceil(((resina + horas + guantes)*3)+redondeo)
        document.getElementById("resultado").textContent = "Precio: $ " + total.toFixed(2);
        //alert("$ " + total);
    }
    else { alert("Ingresa los datos solicitados"); }
}

function cambiarValor(tipo, cambio) {
    let valorElemento = document.getElementById(tipo);
    let valorActual = parseInt(valorElemento.textContent);

    // Asegurar que los valores no sean negativos
    if (tipo === 'horas') {
        valorActual = Math.max(0, valorActual + cambio);
    } else if (tipo === 'minutos') {
        valorActual = (valorActual + cambio + 60) % 60; // Mantener minutos entre 0-59
    }

    valorElemento.textContent = valorActual;

    actualizarResultado();
}

function actualizarResultado() {
    let horas = parseInt(document.getElementById("horas").textContent);
    let minutos = parseInt(document.getElementById("minutos").textContent);

    horasDecimales = (horas + (minutos / 60));
    //horasDecimales = horasDecimales.toFixed(2);

    document.getElementById("resulHoras").textContent = horasDecimales;

}
