/**
 * Created by Administrator on 2016/8/8.
 *
 */
$(function(){
    $('.top_one').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },800)
    });
    $(window).on('scroll',function(){
        if($(window).scrollTop() > 300)
            $('.top_one').fadeIn();
        else
            $('.top_one').fadeOut();
    });
    $(window).trigger('scroll');
});
/*var a = 0
var  b = setInterval(function(){
    console.log(a++);
    if(a>5){
        clearInterval(b)
    }
},500);*/
setTimeout(function(){
    alert("v")
},500);