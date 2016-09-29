
//Javascript file for checking the validation and re - routing



var i;
var counter = 0;



function check() {
    //******** VALIDATION for EMPTY TEXT FIELDS**********//

    window.alert("reached check");
    var quad = document.getElementById("quadrant1").value;

    if (quad != "" || quad != null) {
        var azimuth = quadrantToAzimuth(quad);
        var dipdipquadrant = azimuthToDipQuad(azimuth);
        var dipdipazimuth = dipDipQuadrantToDipDipAzimuth(dipdipquadrant);
        $(azimuthlabel).hide();
        $(azimuthal).val(azimuth);
        $(dipdipquadlabel).hide();
        $(ddquad).val(dipdipquadrant);
        $(ddazulabel).hide();
        $(ddazu).val(dipdipazimuth);
        counter++;
    }
      
    
    if (azum != "" || azum != null) {

        counter++;
    }

    if (ddquad != "" || ddquad != null) {

        counter++;
    }

    if (ddazum != "" || ddazum != null) {

        counter++;
    }

    //******** END OF VALIDATION for EMPTY TEXT FIELDS**********//







    //******** VALIDATION for DOUBLE TRIPLE TEXT FIELDS**********//

    if (counter == 0) {

        window.alert("Produce atleast one input");

    }

    if (counter >= 2) {

        window.alert("Produce only one input");

    } else {




    }

    //******** END OF VALIDATION for DOUBLE TRIPLE TEXT FIELDS**********//


}


