$(document).ready(function () {
    $("#about-button").mouseenter(function () {
        $(this).animate(
            {
                fontSize: "25px",
            },
            "fast"
        );
    });

    $("#about-button").mouseleave(function () {
        $(this).animate(
            {
                fontSize: "20px",
            },
            "fast"
        );
    });
});
