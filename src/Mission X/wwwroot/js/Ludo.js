var x, y, z;
function Canny(x, y, z) {
    var canvasElement = document.querySelector("#my_Canvas");
    var context = canvasElement.getContext("2d");
    context.font = '20pt Calibri';
    context.fillStyle = 'black';
    context.fillText('c = '+x, 25, 199);
    context.fillText('a = ' + y, 125, 330);
    context.fillText('b = ' + z, 215, 199);
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(100, 300);
    context.lineTo(300, 300);
    context.closePath();
    context.lineWidth = 10;
    context.strokeStyle = 'Black';
    context.stroke();
    context.fillStyle = "white";
    context.fill();
}