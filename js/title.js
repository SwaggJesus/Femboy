// CRY animated

if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 600);

}

var x = 0;

var titleText = ["$ $ $ $", "S $ $ $", "S W $ $", "S W A $", "S W A G", "$ W A G", "$ $ A G", "$ $ $ G", "$ $ $ $"];


function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}