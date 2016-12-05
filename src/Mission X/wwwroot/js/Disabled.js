function doIT()
{
    
    document.getElementById("quadrant1").value = "";
    document.getElementById("quadrant2").value = "";
    document.getElementById("quadrant3").value = "";
    document.getElementById("quadrant4").value = "";
    document.getElementById("quadrant6").value = "";
   
}
function option1() {
    doIT();
    $(sidea).show();
    $(sideb).show();
    $(sidec).show();
    $(sideLa).show();
    $(sideLc).show();
    document.getElementById("quadrant1").disabled = false;
    document.getElementById("quadrant2").disabled = false;
    document.getElementById("quadrant3").disabled = false;
    document.getElementById("quadrant4").disabled = true;
    document.getElementById("quadrant6").disabled = true;
    

}

function option2() {
    doIT();
    $(sidea).show();
    $(sideb).show();
    $(sidec).show();
    $(sideLa).show();
    $(sideLc).show();
    document.getElementById("quadrant4").disabled = false;
    document.getElementById("quadrant6").disabled = false;
    document.getElementById("quadrant1").disabled = true;
    document.getElementById("quadrant2").disabled = true;
    document.getElementById("quadrant3").disabled = true;
    

}

function option3() {
    doIT();
    document.getElementById("quadrant1").disabled = false;
    document.getElementById("quadrant2").disabled = false;
    document.getElementById("quadrant3").disabled = false;
    document.getElementById("quadrant4").disabled = false;
    document.getElementById("quadrant6").disabled = false;
    
}

function option4() {
    doIT();
    $(sidea).show();
    $(sideb).show();
    $(sidec).show();
    $(sideLa).show();
    $(sideLc).show();
    document.getElementById("quadrant1").disabled = false;
    document.getElementById("quadrant2").disabled = false;
    document.getElementById("quadrant3").disabled = false;
    document.getElementById("quadrant4").disabled = false;
    
}

