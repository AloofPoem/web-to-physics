

var boton = document.getElementById('btn-graficar');
boton.addEventListener('click', graficar);
TESTER = document.getElementById('tester');

function graficar() {
    
    var tendencia = document.getElementById('tendencia').value;
    let inputX = document.querySelectorAll('.xData');
    let inputY = document.querySelectorAll('.yData');

    let xData = [];
    let yData = [];
  
    for (let i = 0; i < inputX.length; i++) {
        var x = parseFloat(inputX[i].value); 
        var y = parseFloat(inputY[i].value);
        
        //NaN = No a Number
        if (!isNaN(x) && !isNaN(y)) {
            xData.push(x);
            yData.push(y);
        }
    }

    if (xData.length == 0 || yData.length == 0) {
        alert('colocar datos');
        return;
    }
    

    let tracePoints = {
        x: xData,
        y: yData,
        mode: 'markers'
    };

    var data = [tracePoints];

    switch (tendencia) {
        case 'lineal':
            data.push(lineal(xData, yData));
        break;
        
        case 'cuadratica': 
            data.push(cuadratica(xData,yData))
        break;
            
        default:
            break;
    }    
    Plotly.newPlot( TESTER,data , {margin: { t: 0 } } );
        
    
    //console.log( Plotly.BUILD );
        
}

function lineal(xData, yData) {

    var n = xData.length;
    var sumX = 0;
    var sumY = 0;
    var sumXY = 0;
    var sumX2 = 0;

    for (let i = 0; i < n; i++) {
        sumX += xData[i];
        sumY += yData[i];
        sumXY += (xData[i] * yData[i]);
        sumX2 += xData[i] ** 2;
    }

    var m = (n * sumXY - sumX * sumY)/(n * sumX2 - sumX ** 2);
    var b = (sumY - m * sumX) / n;

    var xMax = Math.max(...xData);
    var xMin = Math.min(...xData);
    
    var traceLine = {
                x: [xMin, xMax],
                y: [(m * xMin + b), (m * xMax + b)],
                name: `y = ${m}x + ${b}`,
                mode: 'lines',
                line: {dash: 'dot'}
            }

    return traceLine;
}

function cuadratica(xData, yData) {
    
    var n = xData.length;
    var sumX = 0;
    var sumY = 0;
    var sumXY = 0
    var sumX2 = 0;
    var sumX3 = 0;
    var sumX4 = 0;
    var sumX2Y = 0;

    for (let i = 0; i < n; i++) {
        sumX += xData[i];
        sumY += yData[i];
        sumXY += (xData[i] * yData[i]);
        sumX2 += xData[i] ** 2;
        sumX3 += xData[i] ** 3;
        sumX4 += xData[i] ** 4;
        sumX2Y += ((xData[i] ** 2) * yData[i]);
    }

    var det = n   * (sumX2*sumX4 - sumX3*sumX3)
            - sumX * (sumX *sumX4 - sumX3*sumX2)
            + sumX2* (sumX *sumX3 - sumX2*sumX2);

    var a = ( sumY  * (sumX2*sumX4 - sumX3*sumX3)
            - sumX  * (sumXY*sumX4 - sumX3*sumX2Y)
            + sumX2 * (sumXY*sumX3 - sumX2*sumX2Y) ) / det;

    var b = ( n     * (sumXY*sumX4 - sumX2Y*sumX3)
            - sumY  * (sumX*sumX4  - sumX3*sumX2)
            + sumX2 * (sumX*sumX2Y - sumXY*sumX2) ) / det;

    var c = ( n     * (sumX2*sumX2Y - sumX3*sumXY)
            - sumX  * (sumX*sumX2Y  - sumXY*sumX2)
            + sumY  * (sumX*sumX3   - sumX2*sumX2) ) / det;

    var xMax = Math.max(...xData);
    var xMin = Math.min(...xData);

    var xCurva = [];
    var yCurva = [];

    for (let i = 0; i <= 100; i++) {
        var x = xMin + (xMax - xMin) * (i / 100);  
        var y = a + b * x + c * (x ** 2);
        xCurva.push(x);
        yCurva.push(y);
    }

    var traceLine = {
                x: xCurva,
                y: yCurva,
                name: `y = ${c}x² + ${b}x + ${a}` ,
                mode: 'lines',
                line: {dash: 'dot'}
            }

    return traceLine;
}
        