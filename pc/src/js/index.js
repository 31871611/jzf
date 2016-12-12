$(function () {

    //轮播
    mallSlider({
        slider:$(".mallSlider"),
        list:$("#sliderBox"),
        tab:$("#sliderTab"),
        left:$("#sliderLeft"),
        right:$("#sliderRight"),
        speed:3000
    });

    //滚动头部
    scrollHeader($(".indexHeader"));


    setTimeout(function(){},1000);


});


//滚动头部
function scrollHeader(id){
    var header=id;
    var top=header.offset().top;
    $(window).on("scroll",function(){
        if($(this).scrollTop() >= top){
            header.css({
                position: "fixed",
                top: 0 + "px"
            })
        }else{
            header.css({
                position: "",
                top: ""
            })
        }
    })
}

