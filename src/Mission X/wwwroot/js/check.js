//Javascript file for checking the validation and re - routing



function check() {


    //******** VALIDATION for EMPTY TEXT FIELDS**********//

    
    var counter = 0;

    var quad = document.getElementById("quadrant1").value;
    var azum = document.getElementById("azimuthal").value;
    var ddquad = document.getElementById("ddquad").value;
    var ddazum = document.getElementById("ddazu").value;



    if (quad == "" && azum == "" && ddquad == "" && ddazum == "") {

        window.alert("Please enter atleast one input");

    }

    if (quad != "") {

        counter++;

    }


    if (azum != "") {

        counter++;
    }

    if (ddquad != "") {

        counter++;
    }

    if (ddazum != "") {

        counter++;
    }

    //******** END OF VALIDATION for EMPTY TEXT FIELDS**********//

 

}



// *********************** Routing ********************** //




function quadtoazu(x) {



    if (x.length == 10) {



        document.getElementById('quadinfo').style.visibility = "hidden";
        var azimuth = quadrantToAzimuth(x);
        var dipdipquadrant = azimuthToDipQuad(azimuth);
        var dipdipazimuth = dipDipQuadrantToDipDipAzimuth(dipdipquadrant);
        $(azimuthlabel).hide();
        $(azimuthal).val(azimuth);
        $(dipdipquadlabel).hide();
        $(ddquad).val(dipdipquadrant);
        $(ddazulabel).hide();
        $(ddazu).val(dipdipazimuth);

    }

    else  if (x.length < 10 || x.length > 10) {

        document.getElementById('quadinfo').innerHTML = "Insuffcient or invalid Input ";
    }

}

function azutoddquad(x) {


    if (x.length == 9) {


        document.getElementById('azuinfo').style.visibility = "hidden";
        

    }

    else {

        document.getElementById('azuinfo').innerHTML = "Insuffcient Input";
    }



}



function ddquadtoddazu(x) {


    if (x.length == 8) {


        document.getElementById('ddquadinfo').style.visibility = "hidden";


    }

    else {

        document.getElementById('ddquadinfo').innerHTML = "Insuffcient Input";
    }




}



function ddazutoquad(x) {



    if (x.length == 7) {


        document.getElementById('ddazuinfo').style.visibility = "hidden";


    }

    else {

        document.getElementById('ddazuinfo').innerHTML = "Insuffcient Input";
    }


}
