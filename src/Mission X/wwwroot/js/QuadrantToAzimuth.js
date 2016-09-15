var generatedValue = "asldkljfsdkl";

function quadrantToAzimuth() {
    var quadNot = document.getElementById("quadrant").value;

    quadNot = quadNot.trim();
    quadNot = quadNot.toUpperCase();

    var val = quadNot.slice(1, 3);
    var generatedValue = "";

    if (quadNot.charAt(0) == "N" && quadNot.charAt(3) == "E") {
        generatedValue = val;

    }
    else if (quadNot.charAt(0) == "N" && quadNot.charAt(3) == "W") {
        generatedValue = 360 - Number(val);

    }
    else if (quadNot.charAt(0) == "S" && quadNot.charAt(3) == "E") {

        generatedValue = 180 - Number(val);
    }
    else if (quadNot.charAt(0) == "S" && quadNot.charAt(3) == "W") {
        generatedValue = 180 + Number(val);

    }
    document.getElementById("azimuthal").innerHTML.value = generatedValue;
    xyz = generatedValue;
    
    window.alert(generatedValue + quadNot.substr(4));

    generateFigure(xyz);
    
}

function generateFigure(angle)
{
    var radians = Number(57.3) * (Math.PI / 180);
    var y_cordinate = Math.sin(radians);
    var x_cordinate = Math.cos(radians);
    window.alert(y_cordinate);
    window.alert(x_cordinate);
     
}




