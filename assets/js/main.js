// preloader of page
$(window).load(function () {
    $(".se-pre-con").fadeOut("slow");;
});

// sidebar Load
$(function () {
    $("#sidebar").load("sidebar.html");
});

// header Load
$(function () {
    $("#header").load("header.html");
});

// capitalize string
String.prototype.capitalizeWords = function () {
    return this.split(" ").map(function (ele) {
        return ele[0].toUpperCase() + ele.slice(1).toLowerCase();
    }).join(" ");
};

// page title and heading load
$(function () {
    var top = location.pathname.substring(1);
    var str = top.substring(0, top.indexOf('.'));
    var res = str.split("-").join(' ');
    res = res.capitalizeWords();
    document.title = (res + " | Resosurces");
    document.getElementById("page-heading").innerHTML = res;
});