function calcu() {
    var i = 0;
    // Retrieving the values 
    var point = document.getElementById("pointA").value;
    var point1 = document.getElementById("pointB").value;
    var point2 = document.getElementById("pointC").value;
    var dista = document.getElementById("dist").value;
    //difference between point B and A
        var subdist = point1 - point;
        var x = subdist / dista; 
    //calculating apparent dip
        var appdip = Math.atan(x);
    // difference between point C and B
        var temp = point2 - point1;
    //calculating distance and subtracting it
        var temp2 = temp / Math.tan(appdip);
        var temp3 = temp2 - dista;
    //Getting to know the coordinates of the point
        var point11 = point1 - temp3;
    //calculating strike
        if (point1 > point11) {
            var strike = point1 - point11;
        } else {
            var strike = point11 - point1;
        }
        document.getElementById('3error').innerHTML = strike;
}
