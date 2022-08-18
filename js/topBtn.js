$(window).scroll(function(){
    if ($(this).scrollTop() > 500){
        $('.topBtn').show();
    } else{
        $('.topBtn').hide();
    }
});

$('.topBtn').click(function(){
    $('html, body').animate({scrollTop:0},400);
    return false;
});