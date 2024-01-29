$(document).ready(function() {
    // Get the current pathname
    var currentPath = window.location.pathname.split('/').pop();

    // Add "active" class to the corresponding nav-link
    $('.nav-link').each(function() {
        var linkPath = $(this).attr('href');
        if (linkPath === currentPath) {
            $(this).addClass('active');
        }
    });
});