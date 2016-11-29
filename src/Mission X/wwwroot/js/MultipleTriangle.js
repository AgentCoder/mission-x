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


    if (!isNaN(La) && !isNaN(Lc) && !isNaN(Ld) && !isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && !isNaN(f))
    {

        if (Lc > 0 && Ld > 0 && c == 0 && d == 0 && e > 0) {

            c = e * ((Math.tan(Ld * 0.0174533) * Math.tan(Lc * 0.0174533)) / (Math.tan(Ld * 0.0174533) - Math.tan(Lc * 0.0174533)));     
            d = c / Math.tan(Lc * 0.0174533);
            a = d + e;
            La = 90 - (parseFloat(c));
            b = parseFloat(c) / Math.sin(parseFloat(Lc) * 0.0174533);
            f = parseFloat(c) / Math.sin(parseFloat(Ld));
            document.getElementById("value-a").value = parseFloat(a).toFixed(2);
            document.getElementById("value-b").value = parseFloat(b).toFixed(2);
            document.getElementById("value-c").value = parseFloat(c).toFixed(2);
            document.getElementById("value-d").value = parseFloat(d).toFixed(2);
            document.getElementById("value-e").value = parseFloat(e).toFixed(2);
            document.getElementById("value-f").value = parseFloat(f).toFixed(2);
            document.getElementById("value-LA").value = parseFloat(La).toFixed(2);
            document.getElementById("value-LC").value = parseFloat(Lc).toFixed(2);
            document.getElementById("value-LD").value = parseFloat(Ld).toFixed(2);
            ComplexCanvasDiagram(parseFloat(c).toFixed(2), parseFloat(d).toFixed(2), parseFloat(e).toFixed(2), parseFloat(Lc).toFixed(1));
        }

        else if (Lc == 0 && d > 0 && c > 0 && f > 0) {
            e = (d * f) / (c - f);
            document.getElementById("value-e").value = parseFloat(e).toFixed(2);
            document.getElementById("value-LC").value = parseFloat(Math.atan(f / e) * 57.298).toFixed(2);
            ComplexCanvasDiagram(parseFloat(c).toFixed(2), parseFloat(d).toFixed(2), parseFloat(e).toFixed(2), parseFloat(Lc).toFixed(1));

        }

    }
    else
    {
        window.alert("Please enter valid input and try again later");
    }
}