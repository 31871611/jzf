$(function () {


    //精品推荐滑动
    slider({
        slider:$("#boutiqueList"),
        left:$("#boutiqueLeft"),
        right:$("#boutiqueRight"),
        num:5,
        spacing:33,
        speed:500
    });


    //设置精品长度
    function setBoutiqueList(id){

        var boutiqueList=id;

        var width=boutiqueList.children().width();
        var len=boutiqueList.children().length;

        //boutiqueList.css({
        //    width:(width + 20) * len + "px"
        //});

        return (width + 20) * len;
    }

    //$("#boutiqueList").css({
    //    width:setBoutiqueList($("#boutiqueList"))
    //});


    mallSlider({
        slider:$(".mallSlider"),
        list:$("#sliderBox"),
        tab:$("#sliderTab"),
        left:$("#sliderLeft"),
        right:$("#sliderRight"),
        speed:3000
    });

});




