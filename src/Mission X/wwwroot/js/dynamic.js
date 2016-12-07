

/**
 * Function that is responsible for adding and deleting the text fields in Simple Plan View Problems - Without Tabs.
 * This function is called as soon as the document is ready and loaded.
*/

function collectFunc(x, y) {


   

    $("#strikeAngle").html(x);
    $("#dipAngle").html(y);
    var dd = document.getElementById("select11");
    var ddSelected = dd.options[dd.selectedIndex].value;

    if (ddSelected == "None") {

        $("#azmt").show();
        $("#azmt").html("Enter the Dip Direction");
        $("#qdnt").show();
        $("#qdnt").html("Enter the Dip Direction");
        $("#ddQUAD").show();
        $("#ddQUAD").html("Enter the Dip Direction");
        $("#ddAzum").show();
        $("#ddAzum").html("Enter the Dip Direction");


    }

    if (((x >= 0 && x <= 90) || (x > 180 && x <= 270)) && (ddSelected == 'NE' || ddSelected == 'SW')) {
        $("#azmt").show();
        $("#azmt").html("Invalid Dip Direction");
        $("#qdnt").show();
        $("#qdnt").html("Invalid Dip Direction");
        $("#ddQUAD").show();
        $("#ddQUAD").html("Invalid Dip Direction");
        $("#ddAzum").show();
        $("#ddAzum").html("Invalid Dip Direction");

        return false;
    }

    if (((x >= 90 && x <= 180) || (x > 270 && x <= 360)) && (ddSelected == 'NW' || ddSelected == 'SE')) {
        $("#azmt").show();
        $("#azmt").html("Invalid Dip Direction");
        $("#qdnt").show();
        $("#qdnt").html("Invalid Dip Direction");
        $("#ddQUAD").show();
        $("#ddQUAD").html("Invalid Dip Direction");
        $("#ddAzum").show();
        $("#ddAzum").html("Invalid Dip Direction");

        return false;

    }




    //var radios = document.getElementsByName("symbols");
    //for (var i = 0; i < radios.length; i++) {
    //    if (radios[i].checked) {
    //        var checkedRadio = radios[i].value;
            
    //    }
       
    //}


    if (x == 0 || y == 0) {
        $("#er").show();
        $("#er").html("Enter strike and dip values");
        return false;
    }
    else {
        $("#er").hide();
        $("#azmt").html("");
        $("#qdnt").html("");
        $("#ddQUAD").html("");
        $("#ddAzum").html("");
        Azimuthal(x, y,ddSelected);
    }

}

function Azimuthal(x, y,ddSelected) {

    
    if (x >= 0 &&  x <= 9)
    {
        x = "00" + x;
    }
    else if (x >= 10 && x <= 99)
    {
        x = "0" + x;
    }
    var zmth = x + ', ' + y + ddSelected;
    $("#azmt").html(zmth);
    var dqnt = azimuthToDipQuad(zmth)
    $("#ddQUAD").html(dqnt);
    var ddz = dipDipQuadrantToDipDipAzimuth(dqnt);
    $("#ddAzum").html(ddz);
    var _qdnt = dipDipAzimuthToQuadrant(ddz);
    $("#qdnt").html(_qdnt);
    var radios = document.getElementsByName("symbols");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            var checkedRadio = radios[i].value;

        }

    }
    
    quadrantToAzimuth(_qdnt, checkedRadio);
    



    
}








