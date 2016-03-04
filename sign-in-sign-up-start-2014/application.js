$(document).ready(function () {
    $('ul li a').on('click'), function () {
        $('div' + $(this).attr('href')).show(500);
        $(test).siblings(".forms").hide(500);
        event.preventDefault();
    }

    $('#sign_up_confirmation').on('keyup', function () {
        if ($('#wrong')) {
            $('wrong').remove();
        }
        if ($(this).val() != $('#sign_up_password').val()) {
            $(this).addclass('error').after('<span id="wrong">Fout</span>');
        } else {
            $(this).removeClass('error');
        }

    })
});