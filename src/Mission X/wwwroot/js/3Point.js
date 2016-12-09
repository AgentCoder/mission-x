function calcu() {
    // Retrieving the values 
    var point = document.getElementById("pointA").value;
    var point1 = document.getElementById("pointB").value;
    var point2 = document.getElementById("pointC").value;
    var dista = document.getElementById("dist").value;
    var beara = document.getElementById("bear1").value;
    var bearb = document.getElementById("bear2").value;
    // finding angle of strike
    var temp = point1 - point2;
    var temp1 = point - point2;
    var diff = temp1 * 100 / temp;
    diff = diff.toFixed(1);
    //document.getElementById('msg1').innerHTML = diff;
    if (360<beara<270 && 270<bearb<180) {
        var temp2 = beara - 270;
        var tem = Math.tan(temp2 * Math.PI / 180.0);
        tem = tem.toFixed(1);
        var side = 50 /tem;
        var ang = diff - 50;
        var angl = ang / side;
        angl = angl.toFixed(2);
       //document.getElementById('msg1').innerHTML = angl;
        var angle = Math.atan(angl);
        angle =90+(angle * 180.0) / Math.PI;
        document.getElementById('msg').innerHTML = angle;
    }
    else if(270<beara<180 && 180 <bearb<90){
        var temp2 = beara - 180;
        var tem = Math.tan(temp2 * Math.PI / 180.0);
        tem = tem.toFixed(1);
        var side = 50 / tem;
        var ang = diff - 50;
        var angl = ang / side;
        angl = angl.toFixed(2);
        //document.getElementById('msg1').innerHTML = angl;
        var angle = Math.atan(angl);
        angle = 0 + (angle * 180.0) / Math.PI;
        document.getElementById('msg1').innerHTML = angle;
    }
    else if (180 < beara < 90 && 0 < bearb < 90) {
        var temp2 = beara - 90;
        var tem = Math.tan(temp2 * Math.PI / 180.0);
        tem = tem.toFixed(1);
        var side = 50 / tem;
        var ang = diff - 50;
        var angl = ang / side;
        angl = angl.toFixed(2);
        //document.getElementById('msg1').innerHTML = angl;
        var angle = Math.atan(angl);
        angle = 180 + (angle * 180.0) / Math.PI;
        document.getElementById('msg2').innerHTML = angle;
    }
    else if (90 < beara < 0 && 360 < bearb < 270) {
        var temp2 = beara - 90;
        var tem = Math.tan(temp2 * Math.PI / 180.0);
        tem = tem.toFixed(1);
        var side = 50 / tem;
        var ang = diff - 50;
        var angl = ang / side;
        angl = angl.toFixed(2);
        //document.getElementById('msg1').innerHTML = angl;
        var angle = Math.atan(angl);
        angle = 180 + (angle * 180.0) / Math.PI;
        document.getElementById('msg3').innerHTML = angle;
    }
    var dip = point1 / point;
    dip = dip.toFixed(2);
    dip = Math.atan(dip);
    var dipa = (dip * 180.0) / Math.PI;
    document.getElementById('msg4').innerHTML = dipa;
    param();
}

