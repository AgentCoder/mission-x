function calcu() {
    var i = 0;
    // Retrieving the values 
    var point = document.getElementById("pointA").value;
    var point1 = document.getElementById("pointB").value;
    var point2 = document.getElementById("pointC").value;
    var dista = document.getElementById("dist").value;
    if (point == null || point == "", point1 == null || point1 == "", point2 == null || point2 == "", dista == null || dista == "") {
        alert("Please Fill All Required Fields");
        return false;
    }
    if (point == null || point == "" || point == 0)
    {
        alert("The first point is not appropriate");
        return false;
        
    }
    if (point1 == null || point1 == "" || point1 == 0) {
        alert("The second point is not appropriate");
        return false;

    }
    if (point2 == null || point2 == "" || point2 == 0) {
        alert("The third point is not appropriate");
        return false;

    }
    if(point==point1 || point==point2 || point == dista)
    {
        alert("Please check the first point again");
        return false;
    }
    if(point1== point2 || point1==dista){
        alert("Please check the second point again");
        return false;
    }
    if(point2==dista){
        alert("Please check the third point again");
        return false;
    }
    if (dista == null || dista == "" || dista == 0) {
        alert("The distance is not appropriate");
        return false;

    }
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
        param(appdip);
}
