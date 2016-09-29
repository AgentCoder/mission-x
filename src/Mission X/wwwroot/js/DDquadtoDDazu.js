function dipDipQuadrantToDipDipAzimuth(x)
{
    var dip = x.slice(0, 2);
    var dipquad = x.substring(4);
    var dipangle = Number(dipquad.slice(1, 3));
    var dipazimuth = 0;
    var angleWrtXAngle = 0;
    if (dipquad.charAt(0) == "S" && dipquad.charAt(3) == "W") {
        dipazimuth = dipangle + 180;
        angleWrtXAngle = 270 - dipangle;
    }
    else if (dipquad.charAt(0) == "S" && dipquad.charAt(3) == "E") {
        dipazimuth = 180 - dipangle;
        angleWrtXAngle = 270 + dipangle;
    }
    else if (dipquad.charAt(0) == "N" && dipquad.charAt(3) == "E") {
        dipazimuth = dipangle;
        angleWrtXAngle = 90 - dipangle;
    }
    else if (dipquad.charAt(0) == "N" && dipquad.charAt(3) == "W") {
        dipazimuth = 360 - dipangle;
        angleWrtXAngle = 90 + dipangle;
    }
    else {
        window.alert("provide a valid input");
    }
    return dip + ", " + dipazimuth;
}