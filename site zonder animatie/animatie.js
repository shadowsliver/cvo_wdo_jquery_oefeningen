$(document).ready(function(){

    $('ul#nav li a').on('click', function(e){
        toLoad = $(this).attr('href') + ' #content';
        $('#content').hide('fast', loadContent);
        $('#wrapper').append('<span id="load">LOADING...</span>');
        $('#load').fadeIn(400);
        e.preventDefault();
    });

    function loadContent() {
        $('#content').load(toLoad, '', showContent);
    }
        function showContent(){
            $('#content').show('fast', hideLoader);
        }

        function hideLoader(){
            $('#load').fadeOut(400);
            $('#load').remove();
        }
});