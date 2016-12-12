$(function(){

    //删除弹窗
    $(".remove").on("click",function(){
        var removeid=$(this).data("removeid");
        var offset = $(this).offset();

        var removeAlert=$("#removeAlert");
        //显示弹窗
        removeAlert.removeClass("hide");

        //设置弹窗位置
        removeAlert.css({
            top: offset.top + 25 + "px",
            left: offset.left - removeAlert.outerWidth() / 2 + 14 + "px"
        });

        //确定
        removeAlert.find(".ok").on("click",function(){
            alert(removeid);
            removeAlert.addClass("hide");
        });

        //关闭弹窗
        removeAlert.find(".exit").on("click",function(){
            removeAlert.addClass("hide");
            //解绑click
            removeAlert.find(".ok").off();
        });

        $('body').on("click",function(e){
            var eid='';

            if (e.srcElement) {
                eid = e.srcElement.className;
            } else if (e.toElement) {
                eid = e.toElement.className;
            } else if (e.target) {
                eid = e.target.className
            } else {
                eid = e.originalTarget.className;
            } //获取触发点击事件元素

            if (!(eid == 'removeAlert' || eid == 'remove')) {
                if (!removeAlert.hasClass("hide")){
                    removeAlert.addClass("hide");
                    //解绑click
                    removeAlert.find(".ok").off();
                }
            }

        });

        //下拉元素有重叠
        //现在元素没重叠
    });


    //精品推荐滑动
    slider({
        slider:$("#boutiqueList"),
        left:$("#boutiqueLeft"),
        right:$("#boutiqueRight"),
        num:5,
        spacing:33,
        speed:500
    });

});

