var x, y, z,x1,y1,z1;
function CanvasDiagram(x, y, z) {
    
    var canvasElement = document.querySelector("#my_Canvas");
    var context = canvasElement.getContext("2d");
    context.font = '16pt Times new roman';
    context.fillStyle = 'black';
    context.fillText('c = '+x, 25, 199);
    context.fillText('a = ' + y, 125, 330);
    context.fillText('b = ' + z, 215, 199);
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(100, 300);
    context.lineTo(300, 300);
    context.closePath();
    context.lineWidth = 1.7;
    context.strokeStyle = 'Black';
    context.stroke();
    context.fillStyle = "Yellow";
    context.fill();
    
}
function onlyAngles(x,z)
{
    var canvasElement = document.querySelector("#my_Canvas");
    var context = canvasElement.getContext("2d");
    context.font = '16pt Times new roman';
    context.fillStyle = 'black';
     y = 90;
    context.fillText('∠A = ' + x + '°', 85, 89);
    context.fillText('∠B = ' + y + '°', 15, 300);
    context.fillText('∠C = ' + z + '°', 315, 299);
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(100, 300);
    context.lineTo(300, 300);
    context.closePath();
    context.lineWidth = 1.7;
    context.strokeStyle = 'Black';
    context.stroke();
    context.fillStyle = "yellow";
    context.fill();
}
function sidesAndAngles(x,z,x1,y1,z1)
{
    var canvasElement = document.querySelector("#my_Canvas");
    var context = canvasElement.getContext("2d");
    context.font = '16pt Times new roman';
    context.fillStyle = 'black';
    y = 90;
    context.fillText('∠A = ' + x + '°', 85, 89);
    context.fillText('∠B = ' + y + '°', 15, 300);
    context.fillText('∠C = ' + z + '°', 315, 299);
    context.fillText('c = ' + x1, 25, 199);
    context.fillText('a = ' + y1, 125, 330);
    context.fillText('b = ' + z1, 215, 199);
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(100, 300);
    context.lineTo(300, 300);
    context.closePath();
    context.lineWidth = 1.7;
    context.strokeStyle = 'Black';
    context.stroke();
    context.fillStyle = "yellow";
    context.fill();
}
function ComplexDiagram(x,y,z,x1,y1,z1)
{
    var canvasElement = document.querySelector("#my_Canvas3");
    var context = canvasElement.getContext("2d");
    context.font = '16pt Times new roman';
    context.fillText('∠B = ' + y + '°', 5, 330);
    context.fillText('c = ' + z1 + ' ft', 35, 199);
    context.fillText('a = ' + x1 + ' ft', 225, 330);
    context.fillText('∠C = ' + z + '°', 400, 330);
    context.fillText('b = ' + y1 + ' ft', 295, 180);
    context.fillText('∠A = ' + x + '°', 135, 85);

    context.beginPath();
    context.moveTo(170, 100);
    context.lineTo(100, 300);
    context.lineTo(450, 300);
    context.closePath();

    context.lineWidth = 2.7;
    context.strokeStyle = 'black';
    context.stroke();
    context.fillStyle = "yellow";
    context.fill();
}
function ComplexCanvasDiagram(x,y,z,x1)
{
    var canvasElement = document.querySelector("#my_Canvas2");
    var context = canvasElement.getContext("2d");
    context.font = '16pt Times new roman';
    context.fillText('c = ' + x + ' mi', 5, 199);
    context.fillText('d = ' + y + ' mi', 125, 330);
    context.fillText('e = ' + z + ' mi', 315, 330);
    context.fillText('Lc = ' + x1 , 335, 290);
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(100, 300);
    context.lineTo(450, 300);
    context.lineTo(250, 300);
    context.lineTo(100, 100);
    context.lineTo(450, 300);

    context.lineWidth = 1.7;
    context.strokeStyle = 'black';
    context.stroke();
    context.fillStyle = "yellow";

    context.fill();
}

function clearDiagram()
{
    var canvasElement = document.querySelector("#my_Canvas");
    var context = canvasElement.getContext("2d");
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
}