
//Javascript file for checking the validation and re - routing


var quad = document.getElementById("quadrant").value
var azum = document.getElementById("azimuthal").value
var ddquad = document.getElementById("ddquad").value
var ddazum = document.getElementById("ddazu").value

var i;
var counter = 0;



function check() {
    //******** VALIDATION for EMPTY TEXT FIELDS**********//

    if (quad != "" || quad != null) {
       
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


