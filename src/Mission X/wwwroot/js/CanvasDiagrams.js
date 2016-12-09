var x, y, z, x1, y1, z1;
var link, canvasId, filename;
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

/** 
 * The event handler for the link's onclick event. We give THIS as a
 * parameter (=the link element), ID of the canvas and a filename.
*/
function down() {
    document.getElementById('download').addEventListener('click', function () {
        downloadCanvas(this, 'Simple_Canvas', 'problem.png');
    }, false);
}


function CanvasDiagram(x, y, z) {
    var e = document.getElementById("Distance");
    var canvasElement = document.querySelector("#Simple_Canvas");
    var context = canvasElement.getContext("2d");
    context.font = '16pt Times new roman';
    context.fillStyle = 'red';
    context.fillText('c = ' + x + e.options[e.selectedIndex].value , 0, 199);
    context.fillText('a = ' + y + e.options[e.selectedIndex].value, 125, 330);
    context.fillText('b = ' + z + e.options[e.selectedIndex].value, 215, 199);
    context.beginPath();
    context.moveTo(120, 120);
    context.lineTo(120, 300);
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
    var e = document.getElementById("Distance");
    var canvasElement = document.querySelector("#Simple_Canvas");
    var context = canvasElement.getContext("2d");
    context.font = '16pt Times new roman';
    context.fillStyle = 'red';
     y = 90;
    context.fillText('∠A = ' + x + '°', 85, 89);
    context.fillText('∠B = ' + y + '°', 15, 300);
    context.fillText('∠C = ' + z + '°', 315, 299);
    context.beginPath();
    context.moveTo(120, 120);
    context.lineTo(120, 300);
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
    var e = document.getElementById("Distance");

    var canvasElement = document.querySelector("#Simple_Canvas");
    var context = canvasElement.getContext("2d");
    context.font = '16pt Times new roman';
    context.fillStyle = 'red';
    y = 90;
    context.fillText('∠A = ' + x + '°', 85, 89);
    context.fillText('∠B = ' + y + '°', 15, 300);
    context.fillText('∠C = ' + z + '°', 315, 299);
    context.fillText('c = ' + x1 + e.options[e.selectedIndex].value, 25, 199);
    context.fillText('a = ' + y1 + e.options[e.selectedIndex].value, 125, 330);
    context.fillText('b = ' + z1 + e.options[e.selectedIndex].value, 215, 199);
    context.beginPath();
    context.moveTo(120, 120);
    context.lineTo(120, 300);
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
    var e = document.getElementById("Distance2");
    var canvasElement = document.querySelector("#my_Canvas3");
    var context = canvasElement.getContext("2d");
    context.font = '16pt Times new roman';
    context.fillStyle = 'red';
    context.fillText('∠B = ' + y + '°', 5, 330);
    context.fillText('c = ' + z1 + e.options[e.selectedIndex].value, 35, 199);
    context.fillText('a = ' + x1 + e.options[e.selectedIndex].value, 225, 330);
    context.fillText('∠C = ' + z + '°', 400, 330);
    context.fillText('b = ' + y1 + e.options[e.selectedIndex].value, 295, 180);
    context.fillText('∠A = ' + x + '°', 135, 85);

    context.beginPath();
    context.moveTo(170, 120);
    context.lineTo(120, 300);
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
    var e = document.getElementById("Distance1");
    var canvasElement = document.querySelector("#my_Canvas2");
    var context = canvasElement.getContext("2d");
    context.font = '16pt Times new roman';
    context.fillText('c = ' + x + e.options[e.selectedIndex].value, 5, 199);
    context.fillText('d = ' + y + e.options[e.selectedIndex].value, 125, 330);
    context.fillText('e = ' + z + e.options[e.selectedIndex].value, 315, 330);
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
    var canvasElement = document.querySelector("#Simple_Canvas");
    var context = canvasElement.getContext("2d");
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
}