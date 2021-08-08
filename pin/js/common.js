$(function(){
    // $(".sum-hd").hover(function(){
    //     $(this).children(".sum-bd").stop().slideToggle();
    // });
    // $(".sum-hd").mouseover(function(){
    //     $(this).children(".sum-bd").show();
    // });
    // $(".sum-hd").mouseout(function(){
    //     $(this).children(".sum-bd").hide();
    // });
    $(".sum-hd").hover(function(){
        $(this).css("background-color","#fff").children(".sum-bd").show();;
        $(this).children("a").css("color","red").children("b").css({"transform":"rotate(225deg)","border-color":"red"});;
    },function(){
        $(this).css("background-color","#f1f1f1").children(".sum-bd").hide();;
        $(this).children("a").css("color","#666").children("b").css({"transform":"rotate(45deg)","border-color":"#666"});;
    });
});