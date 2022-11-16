window.onscroll = function () {

    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("icon-heart");
    var elemento2 = document.getElementById("icon-fire");

    elemento1.style.bottom = posicion * 0.3 + "px";
    elemento2.style.top = posicion * 0.2 + "px";

}