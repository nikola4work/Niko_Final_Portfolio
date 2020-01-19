$(document).ready(function() {
    $("#resume").click(function() {
        $(".resume-container").toggle(1000);
    });

    // redirect user once he clicks submit button
    $("#submit").click(function() {
        alert("Page Under Construction - Please send me an email :)");
        window.location.replace("http://127.0.0.1:5500/index.html");
    });
});