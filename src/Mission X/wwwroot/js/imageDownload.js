


window.addEventListener("load", function () {

    var canvas = document.getElementById("my_Canvas");

    var link = document.createElement('a');
    var att = document.createAttribute("class");
    att.value = "mdl-button mdl-button--colored mdl-js-button mdl-button--raised mdl-js-ripple-effect";
    link.setAttributeNode(att);
    link.innerHTML = 'Download Figure';
    link.addEventListener('click', function (ev) {
        link.href = canvas.toDataURL("image/jpeg", 1.0);
        link.download = "image.jpeg";
    }, false);
    downloads.appendChild(link);


});