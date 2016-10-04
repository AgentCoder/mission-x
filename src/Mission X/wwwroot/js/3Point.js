function calcu() {

    
    var i = 0;
    var letters = /^[A-Za-z]+$/;
    var point = document.getElementById("pointA").value;
    window.alert(point);
    var point1 = document.getElementById("pointB").value;
    var point2 = document.getElementById("pointC").value;
        var dista = document.getElementById("dist").value;
        var subdist = point1 - point;
        var x = subdist / dista;
        var appdip = Math.atan(x);
        var temp = point2 - point1;
        var temp2 = temp / Math.tan(appdip);
        var temp3 = temp2 - dista;
        var point11 = point1 - temp3;

        if (point1 > point11) {
            var strike = point1 - point11;
        } else {
            var strike = point11 - point1;
        }

        document.getElementById('puli').innerHTML = strike

    }