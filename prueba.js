

var boton = document.getElementById('btn-graficar');
boton.addEventListener('click', graficar);
TESTER = document.getElementById('tester');
var tendencia = document.getElementById('tendencia').value;

function graficar() {
    
    let inputX = document.querySelectorAll('.xData');
    let inputY = document.querySelectorAll('.yData');

    let xData = [];
    let yData = [];
    let traceLine;

    inputX.forEach(element => {
        xData.push(element.value);
    });

    inputY.forEach(element => {
        yData.push(element.value);
    });

    if (tendencia == 'lineal') {
        
    } else if (tendencia == 'cuadratica') {
        
    } 

    let tracePoints = [{
        x: xData,
        y: yData,
        mode: 'lines+markers',
        line: {dash: 'dot',} 
    }]

    let data = [tracePoints, traceLine]
    
    Plotly.newPlot( TESTER, data, 
        {margin: { t: 0 } } );
        
    
    //console.log( Plotly.BUILD );
        
}
        