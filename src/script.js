$(document).ready(function () {
    //about button animation
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

    //project links animation
    $(".project-headings").mouseenter(function () {
        $(this).animate(
            {
                fontSize: "65px",
            },
            "fast"
        );
    });

    $(".project-headings").mouseleave(function () {
        $(this).animate(
            {
                fontSize: "60px",
            },
            "fast"
        );
    });
});
