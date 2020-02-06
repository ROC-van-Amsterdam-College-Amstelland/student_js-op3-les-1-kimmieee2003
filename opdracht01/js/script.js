var stop = "rood";
var maybe = "oranje";
var go = "groen";

window.onload = function () {
    //JOUW CODE HIER
    document.getElementById("light-top").innerHTML = stop;
    document.getElementById("light-middle").innerHTML = maybe;
    document.getElementById("light-bottom").innerHTML = go;

    if (go = "groen") {
        document.getElementById("light-top").style.backgroundColor = "green";


    }

    if (maybe = "oranje") {
        document.getElementById("light-middle").style.backgroundColor = "orange";
    }

    if (stop = "red") {
        document.getElementById("light-bottom").style.backgroundColor = "red";
    }
}
