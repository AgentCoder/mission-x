function dipDipAzimuthToQuadrant(x)
{
    var dipazimuth = Number(x.substring(4));
    var dipangle = x.slice(0, 2);
    var dip = "";
    var strike = "";
    if (dipazimuth > 0 && dipazimuth < 90) 
    {
        dip = dipangle + "NE";
        strike = "N" + (90 - dipazimuth) + "W";
    }
    else if(dipazimuth > 90 && dipazimuth < 180)
    {
        dip = dipangle + "SE";
        strike = "N" + (dipazimuth - 90) + "E";
    }

    else if(dipazimuth >180 && dipazimuth < 270)
    {
        dip = dipangle + "SW";
        strike = "N" + (270 - dipazimuth) + "W";
    }
    else if(dipazimuth > 270 && dipazimuth < 360)
    {
        dip = dipangle + "NW";
        strike = "N" + (360 - dipazimuth) + "E";
    }
    else 
    {
        window.alert("Please provide valid input")
    }
    return strike + ", " + dip;


}