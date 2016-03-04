$(document).ready(function(){
    $button = $('button#teller');
    $count = parseInt($button.html());
    if($count == 0){
        console.log($count);
    }
    $button.click(function(){
        $count = parseInt($button.html())+1;
        console.log($count);
        $button.html($count);

    });

});