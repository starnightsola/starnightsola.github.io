$(window).on('load',function(){
    $(".center").delay(3200).fadeOut('slow');
    $("#pageLoading").delay(3500).fadeOut('slow',function(){
        $('body').addClass('appear');
    });
    $(".splashbg").on('animationend',function(){

    });
});