$(function(){
    scrollWinningList();


/*

    1.不中
    2.田黄挂坠
    3.100元优惠券
    4.大漆手镯
    5.30元优惠券
    6.大漆对碗
    7.大漆手串
    8.200元优惠券
    9.翡翠胸牌
    10.50元优惠券
    11.大漆花瓶
    12.名家建盏
    13.30元优惠券

 */

    //转盘
    var index=0;
    var len=13;
    var step=315;
    var min=1;
    var max=2;
    var t=null;
    var num=4;


    //$(".turntableBtn").on("click",function(){
    //   go();
    //});

    function go(){
        index++;
        if(index == len){
            index=0;
        }

        if((index % len) == 0){
            min++;
        }
        $(".turntable").css("backgroundPosition","0 -" + step * index + "px");

        if(min == max && (index+1) == num){
            clearTimeout(t);
            $(".turntableBtn").off();
        }else{
            t=setTimeout(go,100);
        }

    }



});


//滚动中奖列表
function scrollWinningList(){
    var obj=$("#scrollList");
    var height=obj.children().outerHeight();
    obj.animate({"marginTop":"-"+height+"px"},1000,function(){
        obj.css("marginTop","0").find("li:first").appendTo(obj);
    });
    t=setTimeout("scrollWinningList()",3000);
}