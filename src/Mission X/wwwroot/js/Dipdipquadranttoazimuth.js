var ddQuadNot = document.getElementById("ddquad").value;

//document.getElementById("ddquadtoazu").onclick = function() {ddquadToAzimuth(47,S47W)}

function ddquadToAzimuth()
{

    window.alert("reached function");
    var ddQuadNot = document.getElementById("ddquad").value;
    var azimuth = 0;
    var strike = 0;
    var dipangleWrtXAxis = 0;
    var strikeangleWrtXAxis = 0;
    var dipangle = Number(ddQuadNot.slice(4, 6));
    if(ddQuadNot.charAt(3) == "S" && ddQuadNot.charAt(6) == "W")
    {
        azimuth = 180 + dipangle;
        strike = azimuth - 90;
        dipangleWrtXAxis = 270 - dipangle;
        window.alert(azimuth + strike + dipangleWrtXAxis);

        
    }
}