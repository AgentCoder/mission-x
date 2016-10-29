function myFunction2() {
    var a = document.getElementById("value-a").value;
    var b = document.getElementById("value-b").value;
    var c = document.getElementById("value-c").value;
    var d = document.getElementById("value-d").value;
    var e = document.getElementById("value-e").value;
    var f = document.getElementById("value-f").value;
    var La = document.getElementById("value-LA").value;
    var Lc = document.getElementById("value-LC").value;
    var Ld = document.getElementById("value-LD").value;


    if (!isNaN(La) && !isNaN(Lc) && !isNaN(Ld) && !isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && !isNaN(f)) {
        if (Lc > 0 && Ld > 0 && c == 0 && d == 0 && e > 0) {

            c = e * ((Math.tan(Ld * 0.0174533) * Math.tan(Lc * 0.0174533)) / (Math.tan(Ld * 0.0174533) - Math.tan(Lc * 0.0174533)));
            document.getElementById("value-c").value = c;
            d = c / Math.tan(Lc * 0.0174533);
            a = d + e;
            document.getElementById("value-a").value = a;


        }
        else if (Lc == 0 && d > 0 && c > 0 && f > 0) {
            e = (d * f) / (c - f);
            document.getElementById("value-e").value = e;
            document.getElementById("value-LC").value = Math.atan(f / e) * 57.298;

        }

    }
}