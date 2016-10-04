function azimuthToDipQuad(x)
{
    var dipangle = x.slice(5, 7);
    var azimuth = Number(x.slice(0, 3));
    var angle = 0;
    if (azimuth > 0 && azimuth < 90) {
        angle = azimuth;
        
    }
    else if (azimuth > 90 && azimuth < 180) {
        angle = azimuth - 90;
    }
    else if (azimuth > 180 && azimuth < 270) {
        angle = 270 - azimuth;
    }
    else if (azimuth > 270 && azimuth < 360) {
        angle = azimuth - 270
    }


    return dipangle + ", " + x.charAt(7) + angle + x.charAt(8);

}