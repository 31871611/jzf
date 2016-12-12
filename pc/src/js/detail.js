$(function(){
    //找回密码切换
    tab($(".showTab"),$(".contentBox"));


    //滚动tab浮动
    scrollTab($(".detailTab"));


    setTimeout(function(){

    },3000)

    //图片放大镜效果
    if($("#magnifier").length > 0 && $("#magnifier").children().length > 0){
        var openevt = new Event(),
            openMagnifier = new Magnifier(openevt);
            openMagnifier.attach({
                thumb: '#thumb-img',
                largeWrapper: 'preview',
                zoom: 2,
                zoomable: true
            });

        $("#magnifier").bind("mouseover",function(){
            $(this).css("overflow","inherit");
        }).bind("mouseout",function(){
            $(this).css("overflow","");
            $("#preview").mouseover(function(){
                $(this).hide();
            }).mouseout(function(){
                $(this).show();
            })
        });
    }


    //关注收藏
    $("#detailFollow").on("click",function(){
        //console.log(this.id);
        BoxAlert.follow({
            content:"关注成功",
            obj:this.id,
            timeout:5
        });
    });

});


//滚动tab浮动
function scrollTab(id){
    var detailTab=id;
    //设置宽度
    var btn=detailTab.find("a");
    var len=btn.length;
    var width=988 / len;
    btn.css({
        width:width + "px"
    });

    //设置浮动
    var detailTabTop=detailTab.offset().top;
    var detailTabLeft=detailTab.offset().left;
    $(window).on("scroll",function(){
        if($(this).scrollTop() >= detailTabTop){
            detailTab.css({
                position: "fixed",
                left: detailTabLeft + "px",
                top: 0 + "px"
            })
        }else{
            detailTab.css({
                position: "",
                left: "",
                top: ""
            })
        }
    })
}