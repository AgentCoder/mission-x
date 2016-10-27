function myFunction3() {

    var a = document.getElementById("value-a1").value;
    var b = document.getElementById("value-b1").value;
    var c = document.getElementById("value-c1").value;
    var d = document.getElementById("value-d1").value;
    var La = document.getElementById("value-LA1").value;
    var Lb = document.getElementById("value-LB1").value;
    var Lc = document.getElementById("value-LC1").value;
    var Ld = document.getElementById("value-LD1").value;

    if (Lc > 0 && Ld > 0)
    {
        if (a > 0 && c == 0 && b>= 0)
        {
            Lb = 90 - Ld;
            La = 180 - (parseFloat(Lb) + parseFloat(Lc));
            c = (Math.sin(parseFloat(Lc) * 0.0174533) / Math.sin(parseFloat(La) * 0.0174533)) * a;
            document.getElementById("value-LA1").value = La;
            document.getElementById("value-LB1").value = Lb;
            document.getElementById("value-c1").value = Math.round(parseFloat(c));

        }
    }
    else {
        alert("Enter a valid input");

    }
}