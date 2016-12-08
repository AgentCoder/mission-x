function refresh() {

    setTimeout(function () {
        location.reload()
    }, 1);
    
}


function myFunction() {

   
    var a = document.getElementById("quadrant1").value;
    var b = document.getElementById("quadrant2").value;
    var c = document.getElementById("quadrant3").value;
    var La = document.getElementById("quadrant4").value;
    var Lc = document.getElementById("quadrant6").value;
    
   
    // only sides
    if (document.getElementById("option-1").checked) {
        
        
        if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            clearDiagram();
           
            if (a == 0 && b > 0 && c > 0) {
                
                if (parseFloat(b) > parseFloat(c)) {
                    $(sidea).hide();
                    
                    a = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(c) * parseFloat(c)))).toFixed(2);
                   

                    CanvasDiagram(c, a, b);
                    document.getElementById("quadrant1").value = parseFloat(a).toFixed(2);

                }
                else {
                    alert("hypotenuse is the largest side so b should be greater than other value");

                }
            }
            else if (b == 0 && a > 0 && c > 0) {
                $(sideb).hide();
                b = Math.sqrt(parseFloat((parseFloat(a) * parseFloat(a)) + (parseFloat(c) * parseFloat(c)))).toFixed(2);
                

                CanvasDiagram(c, a, b);
                document.getElementById("quadrant2").value = parseFloat(b).toFixed(2);
            }
            else if (c == 0 && a > 0 && b > 0) {
                if (parseFloat(b) > parseFloat(a)) {
                    $(sidec).hide();
                    c = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(a) * parseFloat(a)))).toFixed(2);
                    

                   CanvasDiagram(c, a, b);
                   document.getElementById("quadrant3").value = parseFloat(c).toFixed(2);
                }
                else {
                    alert("hypotenuse is the largest side so b should be greater than other value");


                }
            }
            else {
                alert("please re - check the values and enter valid input");


            }
        }

    }





        //only angles
    else if (document.getElementById("option-2").checked) {
        clearDiagram();
       
        if (!isNaN(La) && !isNaN(Lc)) {
            clearDiagram();
            if (La == 0 && Lc > 0) {
                if (Lc < 90) {
                    $(sideLa).hide();
                    La = (180 - (90 + parseFloat(Lc)));
                    onlyAngles(La, Lc);
                    document.getElementById("quadrant4").value = Math.round(parseFloat(La));
                    document.getElementById("quadrant6").value = Math.round(parseFloat(Lc));
                }
                else {
                    alert("Please check the value you entered for angle C and enter a value less than 90");

                }

            }

            else if (Lc == 0 && La > 0) {
                if (La < 90) {
                    $(sideLc).hide();
                    Lc = (180 - (90 + parseFloat(La))).toFixed(2);
                    onlyAngles(La, Lc);
                    document.getElementById("quadrant6").value = Math.round(parseFloat(Lc));
                    document.getElementById("quadrant4").value = Math.round(parseFloat(La));
                }
                else {
                    alert("Please check the value you entered for angle A and enter a value less than 90");

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
            clearDiagram();
            if (La > 0 && La < 90) {

                if (c == 0) {
                    // c

                    if (b > 0 && a == 0) {
                        $(sidec).hide();
                        c = parseFloat(b).toFixed(2) * Math.cos(parseFloat(La).toFixed(2) * 0.0174533).toFixed(2);
                        document.getElementById("quadrant3").value = parseFloat(c);
                        a = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(c) * parseFloat(c)))).toFixed(2);
                        Lc = 90 - parseFloat(La);
                        sidesAndAngles(La, Lc, c,a,b);
                    }
                    else if (a > 0) {
                        c = (parseFloat(a).toFixed(2) / Math.tan(parseFloat(La).toFixed(2) * 0.0174533)).toFixed(2);
                        document.getElementById("quadrant3").value = parseFloat(c);
                        b = Math.sqrt(parseFloat((parseFloat(a) * parseFloat(a)) + (parseFloat(c) * parseFloat(c)))).toFixed(2);
                        Lc = 90 - parseFloat(La);
                        sidesAndAngles(La, Lc, c,a,b);

                    }
                    else {
                        alert("Enter the valid input");

                    }
                }
                else if (a == 0) {
                    //a
                    if (c > 0 && b == 0) {
                        $(sidea).hide();
                        a = (parseFloat(c).toFixed(2) * Math.tan(parseFloat(La).toFixed(2) * 0.0174533)).toFixed(2);
                        document.getElementById("quadrant1").value = parseFloat(a);
                        Lc = 90 - parseFloat(La);
                        b = Math.sqrt(parseFloat((parseFloat(a) * parseFloat(a)) + (parseFloat(c) * parseFloat(c)))).toFixed(2);
                        sidesAndAngles(La, Lc, c,a,b);
                    }
                    else if (b > 0) {
                        $(sidea).hide();
                        a = (parseFloat(b).toFixed(2) * Math.sin(parseFloat(La).toFixed(2) * 0.0174533));
                        document.getElementById("quadrant1").value = parseFloat(a);
                        Lc = 90 - parseFloat(La);
                        c = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(a) * parseFloat(a)))).toFixed(2);
                        sidesAndAngles(La, Lc, c,a,b);
                    }
                    else {
                        alert("Enter the valid input");

                    }
                }
                else if (b == 0) {
                    // b
                    if (a > 0 && c == 0) {
                        $(sideb).hide();
                        b = (parseFloat(a).toFixed(2) / Math.sin(parseFloat(La).toFixed(2) * 0.0174533)).toFixed(2);
                        document.getElementById("quadrant2").value = parseFloat(b);
                        c = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(a) * parseFloat(a)))).toFixed(2);
                        Lc = 90 - parseFloat(La);
                        sidesAndAngles(La, Lc, c,a,b);
                    }
                    else if (c > 0) {
                        $(sideb).hide();
                        b = (parseFloat(c).toFixed(2) * Math.cos(parseFloat(La).toFixed(2) * 0.0174533)).toFixed(2);
                        document.getElementById("quadrant2").value = parseFloat(b);
                        Lc = 90 - parseFloat(La);
                        a = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(c) * parseFloat(c)))).toFixed(2);
                        sidesAndAngles(La, Lc,c,a,b);
                    }
                    else {
                        alert("Enter the valid input");

                    }
                }
                else {
                    alert("please enter valid input");

                }

            }
            else if (Lc > 0 && Lc < 90) {



                if (c == 0) {
                    // c
                    if (b > 0 && a == 0) {
                        $(sidec).hide();
                        c = (parseFloat(b).toFixed(2) * Math.sin(parseFloat(Lc).toFixed(2) * 0.0174533)).toFixed(2);
                        document.getElementById("quadrant3").value = parseFloat(c);
                        La = 90 - Lc;
                        a = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(c) * parseFloat(c)))).toFixed(2);
                        sidesAndAngles(La, Lc, c, a, b);
                    }
                    else if (a > 0) {
                        $(sidec).hide();
                        c = (parseFloat(a).toFixed(2) * Math.tan(parseFloat(Lc).toFixed(2) * 0.0174533)).toFixed(2);
                        document.getElementById("quadrant3").value = parseFloat(c);
                        La = 90 - Lc;
                        b = Math.sqrt(parseFloat((parseFloat(a) * parseFloat(a)) + (parseFloat(c) * parseFloat(c)))).toFixed(2);
                        sidesAndAngles(La, Lc, c, a, b);
                    }
                    else {
                        alert("Enter the valid input");

                    }
                }
                else if (a == 0) {
                    //a
                    if (c > 0 && b == 0) {
                        $(sidea).hide();
                        a = (parseFloat(c).toFixed(2) / Math.tan(parseFloat(Lc).toFixed(2) * 0.0174533)).toFixed(2);
                        document.getElementById("quadrant1").value = parseFloat(a);
                        La = 90 - Lc;
                        b = Math.sqrt(parseFloat((parseFloat(a) * parseFloat(a)) + (parseFloat(c) * parseFloat(c)))).toFixed(2);
                        sidesAndAngles(La, Lc, c, a, b);
                    }
                    else if (b > 0) {
                        $(sidea).hide();
                        a = (parseFloat(b).toFixed(2) * Math.cos(parseFloat(Lc).toFixed(2) * 0.0174533)).toFixed(2);
                        document.getElementById("quadrant1").value = parseFloat(a);
                        La = 90 - Lc;
                        c = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(a) * parseFloat(a)))).toFixed(2);
                        sidesAndAngles(La, Lc, c, a, b);
                    }
                    else {
                        alert("Enter the valid input");

                    }
                }
                else if (b == 0) {
                    // b
                    if (a > 0 && c == 0) {
                        $(sideb).hide();
                        b = (parseFloat(a).toFixed(2) / Math.cos(parseFloat(Lc).toFixed(2) * 0.0174533)).toFixed(2);
                        document.getElementById("quadrant2").value = parseFloat(b);
                        c = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(a) * parseFloat(a)))).toFixed(2);
                        La = 90 - Lc;
                        sidesAndAngles(La, Lc, c, a, b);
                    }
                    else if (c > 0) {
                        $(sideb).hide();
                        b = (parseFloat(c).toFixed(2) / Math.sin(parseFloat(Lc).toFixed(2) * 0.0174533)).toFixed(2);
                        document.getElementById("quadrant2").value = parseFloat(b);
                        a = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(c) * parseFloat(c)))).toFixed(2);
                        La = 90 - Lc;
                        sidesAndAngles(La, Lc, c, a, b);
                    }
                    else {
                        alert("Enter the valid input");

                    }
                }
                else {
                    alert("Please enter a valid input");

                }
            }
            else
            {
                alert("Please enter the correct set of inputs");
            }

        }
    }

        // only angles using sides
    else if (document.getElementById("option-4").checked)
    {
        if (!isNaN(La) && !isNaN(Lc) && !isNaN(a) && !isNaN(b) && !isNaN(c))
        {
            if (((a == 0 && b > 0 && c > 0) || a > 0 && b == 0 && c > 0 || a > 0 && b > 0 && c == 0) && Lc == 0 && La == 0)
            {


                var value = window.prompt("Please enter  which angle to find either LA or LC (either enter LC or C)");

                if (value != null) {

                    if (Lc == 0 && (value == "LC" || value.toLowerCase() == "c")) {

                        if (a == 0 && b > 0 && c > 0) {
                            if (parseFloat(b).toFixed(2) > parseFloat(c).toFixed(2)) {
                                $(sideLc).hide();
                                Lc = Math.round(Math.asin(parseFloat(c).toFixed(2) / parseFloat(b).toFixed(2)) * 57.298);
                                document.getElementById("quadrant6").value = parseFloat(Lc);
                                La = 90 - parseFloat(Lc);
                                a = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(c) * parseFloat(c)))).toFixed(2);
                                sidesAndAngles(La, Lc, c, a, b);
                            }
                            else {
                                alert("hypotenuse is the largest side so b should be greater than other value");

                            }

                        }
                        else if (a > 0 && b == 0 && c > 0) {
                            $(sideLc).hide();
                            Lc = Math.round(Math.atan(parseFloat(c).toFixed(2) / parseFloat(a).toFixed(2)) * 57.298);
                            document.getElementById("quadrant6").value = parseFloat(Lc);
                            La = 90 - parseFloat(Lc);
                            b = Math.sqrt(parseFloat((parseFloat(a) * parseFloat(a)) + (parseFloat(c) * parseFloat(c)))).toFixed(2);
                            sidesAndAngles(La, Lc, c, a, b);
                        }
                        else if (a > 0 && b > 0 && c == 0) {
                            if (parseFloat(b).toFixed(2) > parseFloat(a).toFixed(2)) {
                                $(sideLc).hide();
                                Lc = Math.round(Math.acos(parseFloat(a).toFixed(2) / parseFloat(b).toFixed(2)) * 57.298);
                                document.getElementById("quadrant6").value = parseFloat(Lc);
                                La = 90 - parseFloat(Lc);
                                c = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(a) * parseFloat(a)))).toFixed(2);
                                sidesAndAngles(La, Lc, c, a, b);


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

                            if (parseFloat(b).toFixed(2) >= parseFloat(c).toFixed(2)) {
                                $(sideLa).hide();
                                La = Math.round(Math.acos(parseFloat(c).toFixed(2) / parseFloat(b).toFixed(2)) * 57.298);
                                document.getElementById("quadrant4").value = parseFloat(La);
                                Lc = 90 - parseFloat(La);
                                a = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(c) * parseFloat(c)))).toFixed(2);
                                sidesAndAngles(La, Lc, c, a, b);
                            }
                            else {
                                alert("hypotenuse is the largest side so b should be greater than other value");

                            }

                        }
                        else if (a > 0 && b == 0 && c > 0) {
                            $(sideLa).hide();
                            La = Math.round(Math.atan(parseFloat(a).toFixed(2) / parseFloat(c).toFixed(2)) * 57.298);
                            document.getElementById("quadrant4").value = parseFloat(La);
                            Lc = 90 - parseFloat(La);
                            b = Math.sqrt(parseFloat((parseFloat(a) * parseFloat(a)) + (parseFloat(c) * parseFloat(c)))).toFixed(2);
                            sidesAndAngles(La, Lc, c, a, b);

                        }
                        else if (a > 0 && b > 0 && c == 0) {
                            if (parseFloat(b).toFixed(2) > parseFloat(a).toFixed(2)) {
                                $(sideLa).hide();
                                La = Math.round(Math.asin(parseFloat(a).toFixed(2) / parseFloat(b).toFixed(2)) * 57.298);
                                document.getElementById("quadrant4").value = parseFloat(La);
                                Lc = 90 - parseFloat(La);
                                c = Math.sqrt(parseFloat((parseFloat(b) * parseFloat(b)) - (parseFloat(a) * parseFloat(a)))).toFixed(2);
                                sidesAndAngles(La, Lc, c, a, b);
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
            else
            {
                alert("please enter valid set of inputs");
            }
        }
        else
        {
            alert("please enter valid set of inputs");
        }
       

    }
    else
    {
        alert("Please check on any one type of problems");
    }
}