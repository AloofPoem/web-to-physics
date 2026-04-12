var boton = document.getElementById('btn-conversion');
const tipoUnidadSelect = document.getElementById("tipoUnidad");

/*
    Función para ocultar y mostrar las listas dependiendo del
    tipo de unidad seleccionada
 */

tipoUnidadSelect.addEventListener("change", function() {
    const tipoUnidad = tipoUnidadSelect.value;

    const converLong    = document.getElementById("tipoConversionLongitud");
    const converAr    = document.getElementById("tipoConversionArea");
    const converVol = document.getElementById("tipoConversionVolumen");
    const converTi  = document.getElementById("tipoConversionTiempo");
    const labelLong = document.getElementById("labelLong");
    const labelAr   = document.getElementById("labelAr");
    const labelVol  = document.getElementById("labelVol");
    const labelTi   = document.getElementById("labelTi");

    const selects = [converLong, converAr, converVol, converTi,
        labelLong, labelAr, labelVol, labelTi];
    
    selects.forEach(sel => {
        sel.hidden = true;
    });

    switch(tipoUnidad) {
        case "longitud":
            converLong.hidden = false;
            labelLong.hidden = false;
            break;
        case "area":
            converAr.hidden = false;
            labelAr.hidden = false;
            break;
        case "volumen":
            converVol.hidden = false;
            labelVol.hidden = false;
            break;
        case "tiempo":
            converTi.hidden = false;
            labelTi.hidden = false;
            break;
    }
});


// Lógica de conversiones
boton.addEventListener("click", function(){
    const tipoUnidad = document.getElementById("tipoUnidad").value;
    const dato = parseFloat(document.getElementById("inputDato").value);
    let conversion = null;
    let resultado = null;

    if (isNaN(dato)){
        alert('coloca un número a convertir');
        return;
    }

    if (tipoUnidad === "longitud") {
    conversion = document.getElementById("tipoConversionLongitud").value;
    } else if (tipoUnidad === "area") {
    conversion = document.getElementById("tipoConversionArea").value;
    } else if (tipoUnidad === "volumen") {
    conversion = document.getElementById("tipoConversionVolumen").value;
    } else if (tipoUnidad === "tiempo") {
    conversion = document.getElementById("tipoConversionTiempo").value;
    }



    switch(conversion) {
    // Distancia
    case "kmAhm": resultado = dato * 10; break;
    case "hmAkm": resultado = dato / 10; break;
    case "hmAdam": resultado = dato * 10; break;
    case "damAhm": resultado = dato / 10; break;
    case "damAm": resultado = dato * 10; break;
    case "mAdam": resultado = dato / 10; break;
    case "mAdm": resultado = dato * 10; break;
    case "dmAm": resultado = dato / 10; break;
    case "dmAcm": resultado = dato * 10; break;
    case "cmAdm": resultado = dato / 10; break;
    case "cmAmm": resultado = dato * 10; break;
    case "mmAcm": resultado = dato / 10; break;

    // Área
    case "km2Ahm2": resultado = dato * 100; break;
    case "hm2Akm2": resultado = dato / 100; break;
    case "hm2Adam2": resultado = dato * 100; break;
    case "dam2Ahm2": resultado = dato / 100; break;
    case "dam2Am2": resultado = dato * 100; break;
    case "m2Adam2": resultado = dato / 100; break;
    case "m2Adm2": resultado = dato * 100; break;
    case "dm2Am2": resultado = dato / 100; break;
    case "dm2Acm2": resultado = dato * 100; break;
    case "cm2Adm2": resultado = dato / 100; break;
    case "cm2Amm2": resultado = dato * 100; break;
    case "mm2Acm2": resultado = dato / 100; break;

    // Volumen
    case "km3Ahm3": resultado = dato * 1000; break;
    case "hm3Akm3": resultado = dato / 1000; break;
    case "hm3Adam3": resultado = dato * 1000; break;
    case "dam3Ahm3": resultado = dato / 1000; break;
    case "dam3Am3": resultado = dato * 1000; break;
    case "m3Adam3": resultado = dato / 1000; break;
    case "m3Adm3": resultado = dato * 1000; break;
    case "dm3Am3": resultado = dato / 1000; break;
    case "dm3Acm3": resultado = dato * 1000; break;
    case "cm3Adm3": resultado = dato / 1000; break;
    case "cm3Amm3": resultado = dato * 1000; break;
    case "mm3Acm3": resultado = dato / 1000; break;

    // Tiempo
    case "segAmin": resultado = dato / 60; break;
    case "minAseg": resultado = dato * 60; break;
    case "minAh": resultado = dato / 60; break;
    case "hAmin": resultado = dato * 60; break;
    case "hAd": resultado = dato / 24; break;
    case "dAh": resultado = dato * 24; break;
    case "dAsem": resultado = dato / 7; break;
    case "semAd": resultado = dato * 7; break;
    case "semAmes": resultado = dato / 4; break;
    case "mesAsem": resultado = dato * 4; break;
    case "mesAa": resultado = dato / 12; break;
    case "aAmes": resultado = dato * 12; break;
    default: alert('seleccione una conversión');
}

    document.getElementById('resultadoConversion').value = resultado ;
});
