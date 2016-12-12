(function($){

    var open,openSave;

    /*

        简单
        居中---关闭---确定
        是否要保留上一个弹窗

     */

    var BoxAlert=function(){

        this.opt={
            id:"alertBox",
            title:"标题",
            content:"内容",
            width:402,
            icon:null,                      //success成功 warning警告 info通知 error错误
            yesText:"确认",
            yesUrl:"javascript:;",
            confirm:null,                   //确定按钮回调函数
            noText:null,                    //取消按钮文字
            noUrl:"javascript:;",
            close:null,                     //取消按钮回调函数
            prev:null,                      //是否要保留上一个弹窗
            timeout:3
        };

    };


    //需要一个透明背景
    var opacity=function(){
        //判断是否已存在id=opacity元素
        if($("#opacity").length < 1){
            //添加
            $("body").append('<div id="opacity" style="z-index:1000"></div>');
        }
    };

    //居中显示
    var position=function(opt){

        //显示宽与高
        var w=$(window).width() / 2;
        var h=$(window).height() / 2;

        //窗体宽与高
        var alertW=$("#"+opt.id).width()/2;
        var alertH=$("#"+opt.id).height()/2;

        //console.log(w+"|"+h+"|"+alertW+"|"+alertH);

        //中心
        $("#"+opt.id).css({
            "position":"fixed",
            "left":w-alertW+"px",
            "top":h-alertH+"px"
        });
    };

    //简单弹窗
    BoxAlert.prototype.run=function(opts){
        var opt=$.extend(this.opt,opts);

        //生成透明背景
        opacity();

        //生成界面
        ui(opt);

        //定位
        position(opt);

        //关闭
        exit(opt);

        //确定
        confirm(opt);

        //取消
        close(opt);

    };

    //居中显示
    BoxAlert.prototype.center=function(opts){
        var opt=$.extend(this.opt,opts);

        //生成透明背景
        opacity();

        //设置z-index
        $("#"+opt.id).css({
           "zIndex":"1001"
        }).removeClass("hide");

        //定位
        position(opt);

        //关闭
        exit(opt);

    };

    //界面
    function ui(opt){
        var html=[];
        html += '<div class="boxAlert" style="z-index:1001;width:'+opt.width+'px" id="'+opt.id+'">';
        html += '<div class="title">';
        html += '<h2>'+ opt.title +'</h2>';
        html += '<a href="javascript:;" class="exit"></a>';
        html += '</div>';
        html += '<div class="content">';
        if(opt.icon){
            html += '<div class="infoIco"><i class=ico-'+opt.icon+'></i><b>'+opt.content+'</b></div>';
        }else{
            html += '<p class="infoText">'+opt.content+'</p>';
        }
        html += '</div>';
        html += '<div class="btn">';

        html += '<a href="'+opt.yesUrl+'" target="_blank" class="confirm">'+opt.yesText+'</a>';
        if(opt.noText) {
            html += '<a href="'+opt.noUrl+'" target="_blank" class="step close">'+opt.noText+'</a>';
        }
        html += '</div>';
        html += '</div>';
        //生成窗体
        $("body").append(html);
    }

    //关闭窗体
    function exit(opt){
        $("#"+opt.id).find(".exit").on("click",function(){
            destroy(opt);
        });
    }

    //点击确定
    function confirm(opt){
        $("#"+opt.id).find(".confirm").on("click",function(){
            alert("确定");
            if(opt.confirm){
                opt.confirm();
            }
            destroy(opt);
        });
    }

    //取消
    function close(opt){
        $("#"+opt.id).find(".close").on("click",function(){
            if(opt.close){
                opt.close();
            }
            destroy(opt);
        });
    }

    //删除弹窗
    function destroy(opt){
        alert(opt.id);
        $("#opacity").remove();
        $("#"+opt.id).find(".exit").off();
        $("#"+opt.id).find(".confirm").off();
        $("#"+opt.id).find(".close").off();
        $("#"+opt.id).remove();
    }


    window.BoxAlert=new BoxAlert();

})(jQuery);