$(function () {
    var count = 0;
    $(".counter").fitText(0.4);
    $(".button").fitText(0.3);
    $("#countValue").text(count);
    $("#plus").on("click", function() {
        count = count + 1;
        $("#countValue").text(count);
    });
    $("#minus").on("click", function () {
        count = count - 1;
        $("#countValue").text(count);
    });
    $("#clear").on("click", function () {
        count = 0;
        $("#countValue").text(count);
    });
    document.body.onmousedown = function () { return false; }
});