function azimuthToQuadrant()
{
    var givenString = document.getElementById("azimuthal").value;
    var azimuthNotation = givenString.trim();
    azimuthNotation = azimuthNotation.toUpperCase();

    var pos = azimuthNotation.indexOf(",");
    var azimuth = Number(azimuthNotation.slice(0, pos));
    var quadNot = "";
    if(azimuth >0 && azimuth <= 90)
    {
        quadNot = "N" + azimuth + "E";
    }
    else if(azimuth >90 && azimuth < 180)
    {
        quadNot = "S" + (180 - azimuth) + "E";
    }
    else if(azimuth > 180 && azimuth < 270 )
    {
        quadNot = "S" + (90 - ((270 - (azimuth)))) + "W";
    }
    else if(azimuth > 270 && azimuth < 360)
    {
        quadNot = "N" + (360 - (azimuth)) + "W";
    }
    else 
    {
        
        quadNot = "Please enter a valid azimuth notation";
    }
    window.alert(quadNot + azimuthNotation.substr(pos));


}