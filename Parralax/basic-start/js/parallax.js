$(document).ready(function() {
    $(window).on('scroll', function(e) {
        parallax();
    });
});

function parallax() {
    var scrollPosition = $(window).scrollTop();
    $('#pattern').css('top',(0 - (scrollPosition * .2))+'px' );
}