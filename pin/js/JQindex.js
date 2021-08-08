$(function(){
    var toolTop = $(".recom").offset().top;
    var flag =true;
 toggleTool();
    function toggleTool(){
        if($(document).scrollTop() >=toolTop){
            $(".fixedtool").fadeIn();
        }else{
            $(".fixedtool").fadeOut();
        }
    };
    $(window).scroll(function(){
        toggleTool();
        if(flag){
            $(".floor .box-hd").each(function(i,ele){
                if($(document).scrollTop() >=$(ele).offset().top){
                    // console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }
    });
    $(".fixedtool li").click(function(){
        flag = false;
        var current = $(".floor .box-hd").eq($(this).index()).offset().top;
        $("body,html").stop().animate({
            scrollTop:current
        },function(){
            flag =true;
        });
        $(this).addClass("current").siblings().removeClass();
    });
    $("#Topback").click(function(){
        $("body,html").stop().animate({
            scrollTop:0
        })
    });
});
$(function(){
    $(".tab_list li" ).click(function(){
         $(this).addClass("current").siblings().removeClass("current");
         var index =$(this).index();
         // console.log(index);
         $(".tab_con .item").eq(index).show().siblings().hide();
     });
});