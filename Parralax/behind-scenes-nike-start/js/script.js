/**
 * Parallax Scrolling Tutorial
 * For Smashing Magazine
 * July 2011
 *
 * Author: Richard Shepherd
 *           www.richardshepherd.com
 *           @richardshepherd
 */

// On your marks, get set...
$(document).ready(function () {

    $window = $(window);
    $('[data-type="sprite"],[data-type="video"]').each(function () {
        /*selecteer al de elementen die een data-type sprite of video gedefinieerd hebben en overloop ze 1 voor 1*/
        $(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
        /*voeg data toe aan het huidige element*/
        /*data-offsetY is een string in html, dus omzetten naar een getal*/
        $(this).data('Xposition', $(this).attr('data-Xposition'));
        $(this).data('speed', $(this).attr('data-speed'));
    });
    $('section[data-type="background"]').each(function () {

    });	// each data-type

    var $self = $(this),
        offsetCoords = $self.offset(), /* top en left*/
        topOffset = offsetCoords.top;
    /* enkel de top coordinaat van het element*/

    $(window).scroll(function () {
        if (($window.scrollTop() + $window.height()) > (topOffset) &&
            ( (topOffset + $self.height()) > $window.scrollTop() )) {
            var yPos = -($window.scrollTop() / $self.data('speed'));
            if ($self.data('offsetY')) {
                yPos += $self.data('offsetY');
            }
            var coords = '50% ' + yPos + 'px';
            $self.css({backgroundPosition: coords});
        }
        ; // in view
    }); // window scroll
    $($self).children('[data-type="sprite"],[data-type="video"]').each(function () {
        /*Vraag alle sprites op in deze section*/

        var $sprite = $(this);
        /* Cache de sprite*/

        var yPos = -($window.scrollTop() / $sprite.data('speed'));
        /* bereken ypositie*/

        if ($sprite.is('video')) {
            /* video moet enkel in y richting aangepast worden*/
            var coords = (yPos + $sprite.data('offsetY')) + 'px';
            /* stel coordinaten samen, offset wordt hier in 1 keer bijgerekend*/

            $sprite.css({
                top: coords
            });
        }

        else {
            var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';
            $sprite.css({
                backgroundPosition: coords
            });
        }

    }); // end sprites
}); // document ready
