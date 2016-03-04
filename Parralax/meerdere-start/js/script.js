
$(document).ready(function () {
    $window = $(window);

    $('section[data-type="background"]').each(function () {
        var $bgSection = $(this);
    });

    $(window).scroll(function () {
        var yPos = -($window.scrollTop() / $bgSection.data('speed'));
        var coordinaten = '100% ' + yPos + 'px';
        $bgSection.css({backgroundPosition: coordinaten});
    });
});