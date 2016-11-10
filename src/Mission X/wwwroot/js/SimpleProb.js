function myFunction() {


    var a = document.getElementById("quadrant1").value;
    var b = document.getElementById("quadrant2").value;
    var c = document.getElementById("quadrant3").value;
    var La = document.getElementById("quadrant4").value;
    var Lc = document.getElementById("quadrant6").value;
    

    // only sides
    if (document.getElementById("option-1").checked) {
       

        if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            
            if (a == 0 && b > 0 && c > 0) {
                
                if (parseFloat(b) > parseFloat(c)) {
                    $(sidea).hide();
                    
                    a = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(c) * parseFloat(c))));
                    Canny(c, a, b);
                    document.getElementById("quadrant1").value = parseFloat(a);
                }
                else {
                    alert("hypotenuse is the largest side so b should be greater than other value");

                }
            }
            else if (b == 0 && a > 0 && c > 0) {
                $(sideb).hide();
                document.getElementById("quadrant2").value = Math.sqrt(parseFloat((parseFloat(a) * parseFloat(a)) + (parseFloat(c) * parseFloat(c))));
            }
            else if (c == 0 && a > 0 && b > 0) {
                if (parseFloat(b) > parseFloat(a)) {
                    $(sidec).hide();
                    document.getElementById("quadrant3").value = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(a) * parseFloat(a))));
                }
                else {
                    alert("hypotenuse is the largest side so b should be greater than other value");


                }
            }
            else {
                alert("please check the values and enter it in a correct sequence");


            }
        }

    }





        //only angles
    else if (document.getElementById("option-2").checked) {

        if (!isNaN(La) && !isNaN(Lc)) {
            if (La == 0 && Lc > 0) {
                if (Lc < 90) {
                    $(sideLc).hide();
                    document.getElementById("quadrant4").value = 180 - (90 + parseFloat(Lc));
                }
                else {
                    alert("Any of the angles in the triangle should not be zero or undefined");

                }

            }

            else if (Lc == 0 && La > 0) {
                if (La < 90) {
                    $(sideLa).hide();
                    document.getElementById("quadrant6").value = 180 - (90 + parseFloat(La));
                }
                else {
                    alert("Any of the angles in the triangle should not be zero or undefined");

                }

            }
            else {
                alert("Please Recheck the values");

            }
        }

    }


        // angles and sides
    else if (document.getElementById("option-3").checked) {
        if (!isNaN(La) && !isNaN(Lc) && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
            if (La > 0) {

                if (c == 0) {
                    // c

                    if (b > 0 && a == 0) {
                        $(sidec).hide();
                        document.getElementById("quadrant3").value = Math.round(parseFloat(b) * Math.cos(parseFloat(La) * 0.0174533));
                    }
                    else if (a > 0) {
                        document.getElementById("quadrant3").value = Math.round(parseFloat(a) / Math.tan(parseFloat(La) * 0.0174533));

                    }
                    else {
                        alert("Enter the valid input");

                    }
                }
                else if (a == 0) {
                    //a
                    if (c > 0) {
                        $(sidea).hide();
                        document.getElementById("quadrant1").value = Math.round(parseFloat(c) * Math.tan(parseFloat(La) * 0.0174533));
                    }
                    else if (b > 0) {
                        $(sidea).hide();
                        document.getElementById("quadrant1").value = Math.round(parseFloat(b) * Math.sin(parseFloat(La) * 0.0174533));
                    }
                    else {
                        alert("Enter the valid input");

                    }
                }
                else if (b == 0) {
                    // b
                    if (a > 0) {
                        $(sideb).hide();
                        document.getElementById("quadrant2").value = Math.round(parseFloat(a) / Math.sin(parseFloat(La) * 0.0174533));
                    }
                    else if (c > 0) {
                        $(sideb).hide();
                        document.getElementById("quadrant2").value = Math.round(parseFloat(c) * Math.cos(parseFloat(La) * 0.0174533));

                    }
                    else {
                        alert("Enter the valid input");

                    }
                }
                else {
                    alert("please enter valid input");

                }

            }
            else if (Lc > 0) {



                if (c == 0) {
                    // c
                    if (b > 0 && a == 0) {
                        $(sidec).hide();
                        document.getElementById("quadrant3").value = Math.round(parseFloat(b) * Math.sin(parseFloat(Lc) * 0.0174533));
                    }
                    else if (a > 0) {
                        $(sidec).hide();
                        document.getElementById("quadrant3").value = Math.round(parseFloat(a) * Math.tan(parseFloat(Lc) * 0.0174533));

                    }
                    else {
                        alert("Enter the valid input");

                    }
                }
                else if (a == 0) {
                    //a
                    if (c > 0) {
                        $(sidea).hide();
                        document.getElementById("quadrant1").value = Math.round(parseFloat(c) / Math.tan(parseFloat(Lc) * 0.0174533));
                    }
                    else if (b > 0) {
                        $(sidea).hide();
                        document.getElementById("quadrant1").value = Math.round(parseFloat(b) * Math.cos(parseFloat(Lc) * 0.0174533));
                    }
                    else {
                        alert("Enter the valid input");

                    }
                }
                else if (b == 0) {
                    // b
                    if (a > 0) {
                        $(sideb).hide();
                        document.getElementById("quadrant2").value = Math.round(parseFloat(a) / Math.cos(parseFloat(Lc) * 0.0174533));
                    }
                    else if (c > 0) {
                        $(sideb).hide();
                        document.getElementById("quadrant2").value = Math.round(parseFloat(c) / Math.sin(parseFloat(Lc) * 0.0174533));

                    }
                    else {
                        alert("Enter the valid input");

                    }
                }
                else {
                    alert("please enter valid input");

                }
            }

        }
    }

        // only angles using sides
    else if (document.getElementById("option-4").checked) {
        if (!isNaN(La) && !isNaN(Lc) && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
            var value = window.prompt("Please enter  which angle to find either LA or LC (either enter LC or C)");

            if (value != null) {

                if (Lc == 0 && (value == "LC" || value.toLowerCase() == "c")) {

                    if (a == 0 && b > 0 && c > 0) {
                        if (parseFloat(b) > parseFloat(c)) {
                            $(sideLc).hide();
                            document.getElementById("quadrant6").value = Math.round
                            (Math.asin(parseFloat(c) / parseFloat(b)) * 57.298);
                        }
                        else {
                            alert("hypotenuse is the largest side so b should be greater than other value");

                        }

                    }
                    else if (a > 0 && b == 0 && c > 0) {
                        $(sideLc).hide();
                        document.getElementById("quadrant6").value = Math.round(Math.atan(parseFloat(c) / parseFloat(a)) * 57.298);

                    }
                    else if (a > 0 && b > 0 && c == 0) {
                        if (parseFloat(b) > parseFloat(a)) {
                            $(sideLc).hide();
                            document.getElementById("quadrant6").value = Math.round(Math.acos(parseFloat(a) / parseFloat(b)) * 57.298);
                        }
                        else {
                            alert("hypotenuse is the largest side so b should be greater than other value");

                        }
                    }
                    else {
                        alert("Enter valid input");

                    }
                }
                else if (La == 0 && (value == "LA" || value.toLowerCase() == "a")) {
                    if (a == 0 && b > 0 && c > 0) {
                        
                        if (parseFloat(b) >= parseFloat(c))
                        {
                            $(sideLa).hide();
                            document.getElementById("quadrant4").value = Math.round
                            (Math.acos(parseFloat(c) / parseFloat(b)) * 57.298);
                        }
                        else
                        {
                            alert("1st block");

                        }

                    }
                    else if (a > 0 && b == 0 && c > 0) {
                        $(sideLa).hide();
                        document.getElementById("quadrant4").value = Math.round(Math.atan(parseFloat(a) / parseFloat(c)) * 57.298);

                    }
                    else if (a > 0 && b > 0 && c == 0) {
                        if (parseFloat(b) > parseFloat(a)) {
                            $(sideLa).hide();
                            document.getElementById("quadrant4").value = Math.round(Math.asin(parseFloat(a) / parseFloat(b)) * 57.298);
                        }
                        else {
                            alert("hypotenuse is the largest side so b should be greater than other value");

                        }
                    }
                    else {
                        alert("enter valid input");

                    }

                }
            }
            else {
                alert("please recheck and follow the notation like either LC or C");

            }
        }
        else {
            alert("please enter valid input");

        }

    }
}