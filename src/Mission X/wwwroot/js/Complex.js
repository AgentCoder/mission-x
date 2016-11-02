function myFunction3() {

    var a = document.getElementById("value-a1").value;
    var b = document.getElementById("value-b1").value;
    var c = document.getElementById("value-c1").value;
    var d = document.getElementById("value-d1").value;
    var La = document.getElementById("value-LA1").value;
    var Lb = document.getElementById("value-LB1").value;
    var Lc = document.getElementById("value-LC1").value;
    var Ld = document.getElementById("value-LD1").value;

    if (!isNaN(La) && !isNaN(Lb) && !isNaN(Lc) && !isNaN(Ld) && !isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d)) {

        if (Lc > 0 && Ld > 0) {



            if (a > 0) {
                var value = window.prompt("Please enter  which side to find either B or C ");
                if (value != null) {
                    if (c == 0 && (value == "C" || value.toLowerCase() == "c")) {


                        Lb = 90 - Ld;
                        La = 180 - (parseFloat(Lb) + parseFloat(Lc));
                        c = (Math.sin(parseFloat(Lc) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                        $(value-LA1).hide();
                        $(value-LB1).hide();
                        $(value-c1).hide();
                        document.getElementById("value-LA1").value = La;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-c1").value = Math.round(parseFloat(c));


                    }
                    else if (b == 0 && (value == "B" || value.toLowerCase() == "b")) {

                        Lb = 90 - Ld;
                        La = 180 - (parseFloat(Lb) + parseFloat(Lc));
                        b = (Math.sin(parseFloat(Lb) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                        $(value-LA1).hide();
                        $(value-LB1).hide();
                        $(value-b1).hide();
                        document.getElementById("value-LA1").value = La;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-b1").value = Math.round(parseFloat(b));

                    }
                }
            }

            else if (b > 0) {
                var value1 = window.prompt("Please enter  which side to find either A or C ");
                if (value1 != null) {
                    if (a == 0 && (value1 == "A" || value1.toLowerCase() == "a")) {

                        Lb = 90 - Ld;
                        La = 180 - (parseFloat(Lb) + parseFloat(Lc));
                        a = (Math.sin(parseFloat(La) * 0.0174533) / Math.sin(parseFloat(Lb) * 0.0174533)) * b;
                        $(value-LA1).hide();
                        $(value-LB1).hide();
                        $(value-a1).hide();
                        document.getElementById("value-LA1").value = La;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-a1").value = Math.round(parseFloat(a));


                    }
                    else if (c == 0 && (value1 == "C" || value1.toLowerCase() == "c")) {

                        Lb = 90 - Ld;
                        La = 180 - (parseFloat(Lb) + parseFloat(Lc));
                        c = (Math.sin(parseFloat(Lc) * 0.0174533) / Math.sin(parseFloat(Lb) * 0.0174533)) * b;
                        document.getElementById("value-LA1").value = La;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-c1").value = Math.round(parseFloat(c));

                    }
                }
            }



            else if (c > 0) {
                var value2 = window.prompt("Please enter  which side to find either A or B ");
                if (value2 != null) {

                    if (a == 0 && (value2 == "A" || value2.toLowerCase() == "a")) {

                        Lb = 90 - Ld;
                        La = 180 - (parseFloat(Lb) + parseFloat(Lc));
                        a = (Math.sin(parseFloat(La) * 0.0174533) / Math.sin(parseFloat(Lc) * 0.0174533)) * c;
                        document.getElementById("value-LA1").value = La;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-a1").value = Math.round(parseFloat(a));


                    }
                    else if (b == 0 && (value2 == "B" || value2.toLowerCase() == "b")) {

                        Lb = 90 - Ld;
                        La = 180 - (parseFloat(Lb) + parseFloat(Lc));
                        b = (Math.sin(parseFloat(Lb) * 0.0174533) / Math.sin(parseFloat(Lc) * 0.0174533)) * c;
                        document.getElementById("value-LA1").value = La;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-b1").value = Math.round(parseFloat(b));

                    }
                    else {
                        alert("4");
                    }
                }
            }
            else {
                alert("Enter a valid input");

            }
        }    // End of if for Lc and Ld given

        else if (La > 0 && Ld > 0) {



            if (a > 0) {
                var value = window.prompt("Please enter  which side to find either B or C ");
                if (value != null) {
                    if (c == 0 && (value == "C" || value.toLowerCase() == "c")) {


                        Lb = 90 - Ld;
                        Lc = 180 - (parseFloat(Lb) + parseFloat(La));
                        c = (Math.sin(parseFloat(Lc) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                        document.getElementById("value-LC1").value = Lc;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-c1").value = Math.round(parseFloat(c));


                    }
                    else if (b == 0 && (value == "B" || value.toLowerCase() == "b")) {

                        Lb = 90 - Ld;
                        Lc = 180 - (parseFloat(Lb) + parseFloat(La));
                        b = (Math.sin(parseFloat(Lb) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                        document.getElementById("value-LC1").value = Lc;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-b1").value = Math.round(parseFloat(b));

                    }
                }
            }

            else if (b > 0) {
                var value1 = window.prompt("Please enter  which side to find either A or C ");
                if (value1 != null) {
                    if (a == 0 && (value1 == "A" || value1.toLowerCase() == "a")) {

                        Lb = 90 - Ld;
                        Lc = 180 - (parseFloat(Lb) + parseFloat(La));
                        a = (Math.sin(parseFloat(La) * 0.0174533) / Math.sin(parseFloat(Lb) * 0.0174533)) * b;
                        document.getElementById("value-LC1").value = Lc;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-a1").value = Math.round(parseFloat(a));


                    }
                    else if (c == 0 && (value1 == "C" || value1.toLowerCase() == "c")) {

                        Lb = 90 - Ld;
                        Lc = 180 - (parseFloat(Lb) + parseFloat(La));
                        c = (Math.sin(parseFloat(Lc) * 0.0174533) / Math.sin(parseFloat(Lb) * 0.0174533)) * b;
                        document.getElementById("value-LC1").value = Lc;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-c1").value = Math.round(parseFloat(c));

                    }
                }
            }



            else if (c > 0) {
                var value2 = window.prompt("Please enter  which side to find either A or B ");
                if (value2 != null) {

                    if (a == 0 && (value2 == "A" || value2.toLowerCase() == "a")) {

                        Lb = 90 - Ld;
                        Lc = 180 - (parseFloat(Lb) + parseFloat(La));
                        a = (Math.sin(parseFloat(La) * 0.0174533) / Math.sin(parseFloat(Lc) * 0.0174533)) * c;
                        document.getElementById("value-LC1").value = Lc;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-a1").value = Math.round(parseFloat(a));


                    }
                    else if (b == 0 && (value2 == "B" || value2.toLowerCase() == "b")) {

                        Lb = 90 - Ld;
                        Lc = 180 - (parseFloat(Lb) + parseFloat(La));
                        b = (Math.sin(parseFloat(Lb) * 0.0174533) / Math.sin(parseFloat(Lc) * 0.0174533)) * c;
                        document.getElementById("value-LC1").value = Lc;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-b1").value = Math.round(parseFloat(b));

                    }
                    else {
                        alert("4");
                    }
                }
            }
            else {
                alert("Enter a valid input");

            }
        }    // End of if for La and Ld given

        else if (Lb > 0 && Lc > 0) {



            if (a > 0) {
                var value = window.prompt("Please enter  which side to find either B or C ");
                if (value != null) {
                    if (c == 0 && (value == "C" || value.toLowerCase() == "c")) {


                        Ld = 90 - Lb;
                        La = 180 - (parseFloat(Lb) + parseFloat(Lc));
                        c = (Math.sin(parseFloat(Lc) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                        document.getElementById("value-LA1").value = La;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-c1").value = Math.round(parseFloat(c));


                    }
                    else if (b == 0 && (value == "B" || value.toLowerCase() == "b")) {

                        Ld = 90 - Lb;
                        La = 180 - (parseFloat(Lb) + parseFloat(Lc));
                        b = (Math.sin(parseFloat(Lb) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                        document.getElementById("value-LA1").value = La;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-b1").value = Math.round(parseFloat(b));

                    }
                }
            }

            else if (b > 0) {
                var value1 = window.prompt("Please enter  which side to find either A or C ");
                if (value1 != null) {
                    if (a == 0 && (value1 == "A" || value1.toLowerCase() == "a")) {

                        Ld = 90 - Lb;
                        La = 180 - (parseFloat(Lb) + parseFloat(Lc));
                        a = (Math.sin(parseFloat(La) * 0.0174533) / Math.sin(parseFloat(Lb) * 0.0174533)) * b;
                        document.getElementById("value-LA1").value = La;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-a1").value = Math.round(parseFloat(a));


                    }
                    else if (c == 0 && (value1 == "C" || value1.toLowerCase() == "c")) {

                        Ld = 90 - Lb;
                        La = 180 - (parseFloat(Lb) + parseFloat(Lc));
                        c = (Math.sin(parseFloat(Lc) * 0.0174533) / Math.sin(parseFloat(Lb) * 0.0174533)) * b;
                        document.getElementById("value-LA1").value = La;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-c1").value = Math.round(parseFloat(c));

                    }
                }
            }



            else if (c > 0) {
                var value2 = window.prompt("Please enter  which side to find either A or B ");
                if (value2 != null) {

                    if (a == 0 && (value2 == "A" || value2.toLowerCase() == "a")) {

                        Ld = 90 - Lb;
                        La = 180 - (parseFloat(Lb) + parseFloat(Lc));
                        a = (Math.sin(parseFloat(La) * 0.0174533) / Math.sin(parseFloat(Lc) * 0.0174533)) * c;
                        document.getElementById("value-LA1").value = La;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-a1").value = Math.round(parseFloat(a));


                    }
                    else if (b == 0 && (value2 == "B" || value2.toLowerCase() == "b")) {

                        Ld = 90 - Lb;
                        La = 180 - (parseFloat(Lb) + parseFloat(Lc));
                        b = (Math.sin(parseFloat(Lb) * 0.0174533) / Math.sin(parseFloat(Lc) * 0.0174533)) * c;
                        document.getElementById("value-LA1").value = La;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-b1").value = Math.round(parseFloat(b));

                    }
                    else {
                        alert("4");
                    }
                }
            }
            else {
                alert("Enter a valid input");

            }
        }    // End of if for Lb and Lc given


        else if (Lb > 0 && La > 0) {

            if (a > 0) {
                var value = window.prompt("Please enter  which side to find either B or C ");
                if (value != null) {
                    if (c == 0 && (value == "C" || value.toLowerCase() == "c")) {


                        Ld = 90 - Lb;
                        Lc = 180 - (parseFloat(Lb) + parseFloat(La));
                        c = (Math.sin(parseFloat(Lc) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                        document.getElementById("value-LC1").value = Lc;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-c1").value = Math.round(parseFloat(c));


                    }
                    else if (b == 0 && (value == "B" || value.toLowerCase() == "b")) {

                        Ld = 90 - Lb;
                        Lc = 180 - (parseFloat(Lb) + parseFloat(La));
                        b = (Math.sin(parseFloat(Lb) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                        document.getElementById("value-LC1").value = Lc;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-b1").value = Math.round(parseFloat(b));

                    }
                }
            }
            else if (b > 0) {
                var value1 = window.prompt("Please enter  which side to find either A or C ");
                if (value1 != null) {
                    if (a == 0 && (value1 == "A" || value1.toLowerCase() == "a")) {

                        Ld = 90 - Lb;
                        Lc = 180 - (parseFloat(Lb) + parseFloat(La));
                        a = (Math.sin(parseFloat(La) * 0.0174533) / Math.sin(parseFloat(Lb) * 0.0174533)) * b;
                        document.getElementById("value-LC1").value = Lc;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-a1").value = Math.round(parseFloat(a));


                    }
                    else if (c == 0 && (value1 == "C" || value1.toLowerCase() == "c")) {

                        Ld = 90 - Lb;
                        Lc = 180 - (parseFloat(Lb) + parseFloat(La));
                        c = (Math.sin(parseFloat(Lc) * 0.0174533) / Math.sin(parseFloat(Lb) * 0.0174533)) * b;
                        document.getElementById("value-LC1").value = Lc;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-c1").value = Math.round(parseFloat(c));

                    }
                }
            }

            else if (c > 0) {
                var value2 = window.prompt("Please enter  which side to find either A or B ");
                if (value2 != null) {

                    if (a == 0 && (value2 == "A" || value2.toLowerCase() == "a")) {

                        Ld = 90 - Lb;
                        Lc = 180 - (parseFloat(Lb) + parseFloat(La));
                        a = (Math.sin(parseFloat(La) * 0.0174533) / Math.sin(parseFloat(Lc) * 0.0174533)) * c;
                        document.getElementById("value-LC1").value = Lc;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-a1").value = Math.round(parseFloat(a));


                    }
                    else if (b == 0 && (value2 == "B" || value2.toLowerCase() == "b")) {

                        Ld = 90 - Lb;
                        Lc = 180 - (parseFloat(Lb) + parseFloat(La));
                        b = (Math.sin(parseFloat(Lb) * 0.0174533) / Math.sin(parseFloat(Lc) * 0.0174533)) * c;
                        document.getElementById("value-LC1").value = Lc;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-b1").value = Math.round(parseFloat(b));

                    }
                    else {
                        alert("4");
                    }
                }
            }
            else {
                alert("Enter a valid input");

            }
        }    // End of if for Lb and La given

        else if (La > 0 && Lc > 0) {

            if (a > 0) {
                var value = window.prompt("Please enter  which side to find either B or C ");
                if (value != null) {
                    if (c == 0 && (value == "C" || value.toLowerCase() == "c")) {

                        Lb = 180 - (parseFloat(La) + parseFloat(Lc));
                        Ld = 90 - Lb;
                        c = (Math.sin(parseFloat(Lc) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-c1").value = Math.round(parseFloat(c));


                    }
                    else if (b == 0 && (value == "B" || value.toLowerCase() == "b")) {


                        Lb = 180 - (parseFloat(La) + parseFloat(Lc));
                        Ld = 90 - Lb;
                        b = (Math.sin(parseFloat(Lb) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-b1").value = Math.round(parseFloat(b));

                    }
                }
            }

            else if (b > 0) {
                var value1 = window.prompt("Please enter  which side to find either A or C ");
                if (value1 != null) {
                    if (a == 0 && (value1 == "A" || value1.toLowerCase() == "a")) {

                        Lb = 180 - (parseFloat(La) + parseFloat(Lc));
                        Ld = 90 - Lb;
                        a = (Math.sin(parseFloat(La) * 0.0174533) / Math.sin(parseFloat(Lb) * 0.0174533)) * b;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-a1").value = Math.round(parseFloat(a));


                    }
                    else if (c == 0 && (value1 == "C" || value1.toLowerCase() == "c")) {

                        Lb = 180 - (parseFloat(La) + parseFloat(Lc));
                        Ld = 90 - Lb;
                        c = (Math.sin(parseFloat(Lc) * 0.0174533) / Math.sin(parseFloat(Lb) * 0.0174533)) * b;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-c1").value = Math.round(parseFloat(c));

                    }
                }
            }



            else if (c > 0) {
                var value2 = window.prompt("Please enter  which side to find either A or B ");
                if (value2 != null) {

                    if (a == 0 && (value2 == "A" || value2.toLowerCase() == "a")) {

                        Lb = 180 - (parseFloat(La) + parseFloat(Lc));
                        Ld = 90 - Lb;
                        a = (Math.sin(parseFloat(La) * 0.0174533) / Math.sin(parseFloat(Lc) * 0.0174533)) * c;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-a1").value = Math.round(parseFloat(a));


                    }
                    else if (b == 0 && (value2 == "B" || value2.toLowerCase() == "b")) {

                        Lb = 180 - (parseFloat(La) + parseFloat(Lc));
                        Ld = 90 - Lb;
                        b = (Math.sin(parseFloat(Lb) * 0.0174533) / Math.sin(parseFloat(Lc) * 0.0174533)) * c;
                        document.getElementById("value-LD1").value = Ld;
                        document.getElementById("value-LB1").value = Lb;
                        document.getElementById("value-b1").value = Math.round(parseFloat(b));

                    }
                    else {
                        alert("4");
                    }
                }
            }
            else {
                alert("Enter a valid input");

            }
        } // end when La and Lc are given....

        else if (a > 0 && b > 0) {
            if (La > 0 && Lb == 0 && Lc == 0 && Ld == 0) {

                Lb = parseFloat(Math.asin((parseFloat(b) / parseFloat(a)) * Math.sin(parseFloat(La) * 0.0174533))) * 57.298;
                Ld = 90 - parseFloat(Lb);
                Lc = 180 - (parseFloat(La) + parseFloat(Lb));
                c = (Math.sin(parseFloat(Lc) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                document.getElementById("value-LA1").value = La;
                document.getElementById("value-LB1").value = Lb;
                document.getElementById("value-LC1").value = Lc;
                document.getElementById("value-LD1").value = Ld;
                document.getElementById("value-c1").value = Math.round(parseFloat(c));



            }


            else if (Lb > 0 && La == 0 && Lc == 0 && Ld ==0) {

                La = Math.asin((parseFloat(a) / parseFloat(b)) * Math.sin(parseFloat(Lb))) * 57.298;
                Ld = 90 - Lb;
                Lc = 180 - (La + Lb);
                c = (Math.sin(parseFloat(Lc) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                document.getElementById("value-LA1").value = La;
                document.getElementById("value-LB1").value = Lb;
                document.getElementById("value-LC1").value = Lc;
                document.getElementById("value-LD1").value = Ld;
                document.getElementById("value-c1").value = Math.round(parseFloat(c));



            }
            else if (Lc > 0 && Lb == 0 && La == 0 && Ld == 0) {
                if (c > 0) {
                    Lb = Math.asin((parseFloat(b) / parseFloat(c)) * Math.sin(parseFloat(Lc))) * 57.298;
                    Ld = 90 - Lb;
                    La = 180 - (Lc + Lb);

                    document.getElementById("value-LA1").value = La;
                    document.getElementById("value-LB1").value = Lb;
                    document.getElementById("value-LC1").value = Lc;
                    document.getElementById("value-LD1").value = Ld;
                    document.getElementById("value-c1").value = Math.round(parseFloat(c));
                }
                else {
                    alert("Insufficient inputs you must enter the value of c for these set of inputs");
                }
            }
        }   // end when a and b are given...

        else if (a > 0 && c > 0) {
            if (La > 0 && Lb == 0 && Lc == 0 && Ld == 0) {

                Lc = Math.asin((parseFloat(c) / parseFloat(a)) * Math.sin(parseFloat(La))) * 57.298;
                Lb = 180 - (La + Lc);
                Ld = 90 - Lb;
                b = (Math.sin(parseFloat(Lb) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                document.getElementById("value-LA1").value = La;
                document.getElementById("value-LB1").value = Lb;
                document.getElementById("value-LC1").value = Lc;
                document.getElementById("value-LD1").value = Ld;
                document.getElementById("value-b1").value = Math.round(parseFloat(b));


            }


            if (Lb > 0 && Lc == 0 && La == 0 && Ld == 0) {
                if (b > 0) {
                    La = Math.asin((parseFloat(a) / parseFloat(b)) * Math.sin(parseFloat(Lb))) * 57.298;
                    Ld = 90 - Lb;
                    Lc = 180 - (La + Lb);
                    document.getElementById("value-LA1").value = La;
                    document.getElementById("value-LB1").value = Lb;
                    document.getElementById("value-LC1").value = Lc;
                    document.getElementById("value-LD1").value = Ld;
                    document.getElementById("value-b1").value = Math.round(parseFloat(b));
                }
                else {
                    alert("Insufficient inputs you must enter the value of b for these set of inputs");
                }


            }
            if (Lc > 0 && Lb == 0 && La == 0 && Ld == 0) {
                La = Math.asin((parseFloat(a) / parseFloat(c)) * Math.sin(parseFloat(Lc))) * 57.298;
                Lb = 180 - (Lc + La);
                Ld = 90 - Lb;
                b = (Math.sin(parseFloat(Lb) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
                document.getElementById("value-LA1").value = La;
                document.getElementById("value-LB1").value = Lb;
                document.getElementById("value-LC1").value = Lc;
                document.getElementById("value-LD1").value = Ld;
                document.getElementById("value-b1").value = Math.round(parseFloat(b));
            }
        } // end when a and c are given...

        else if (b > 0 && c > 0) {
            if (La > 0 && Lb == 0 && Lc == 0 && Ld == 0)
            {

                if (a > 0) {
                    Lb = Math.asin((parseFloat(b) / parseFloat(a)) * Math.sin(parseFloat(La))) * 57.298;
                    Ld = 90 - Lb;
                    Lc = 180 - (La + Lb);
                    document.getElementById("value-LA1").value = La;
                    document.getElementById("value-LB1").value = Lb;
                    document.getElementById("value-LC1").value = Lc;
                    document.getElementById("value-LD1").value = Ld;
                    document.getElementById("value-a1").value = Math.round(parseFloat(a));
                }
                else {
                    alert("Insufficient inputs you must enter the value of b for these set of inputs");
                }


            }


            if (Lb > 0 && Lc == 0 && La == 0 && Ld == 0) {
                Lc = Math.asin((parseFloat(c) / parseFloat(b)) * Math.sin(parseFloat(Lb))) * 57.298;
                La = 180 - (Lc + Lb);
                Ld = 90 - Lb;
                a = (Math.sin(parseFloat(La) * 0.0174533) / Math.sin(parseFloat(Lb) * 0.0174533)) * b;
                document.getElementById("value-LA1").value = La;
                document.getElementById("value-LB1").value = Lb;
                document.getElementById("value-LC1").value = Lc;
                document.getElementById("value-LD1").value = Ld;
                document.getElementById("value-a1").value = Math.round(parseFloat(a));


            }
            if (Lc > 0 && Lb == 0 && La == 0 && Ld == 0) {
                Lb = Math.asin((parseFloat(b) / parseFloat(c)) * Math.sin(parseFloat(Lc))) * 57.298;
                La = 180 - (Lc + Lb);
                Ld = 90 - Lb;
                a = (Math.sin(parseFloat(La) * 0.0174533) / Math.sin(parseFloat(Lb) * 0.0174533)) * b;
                document.getElementById("value-LA1").value = La;
                document.getElementById("value-LB1").value = Lb;
                document.getElementById("value-LC1").value = Lc;
                document.getElementById("value-LD1").value = Ld;
                document.getElementById("value-a1").value = Math.round(parseFloat(a));
            }
        }// end when b and c are given..

        else
        {
            alert("Invalid set of inputs please check your inputs");
        }
    }
    

}
    
    

