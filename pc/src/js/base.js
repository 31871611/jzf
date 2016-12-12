//返回顶部
function toTop(){
    $('html,body').animate({scrollTop:0},'fast');
}


//切换
function tab(ck,box){
    ck.find("a").bind("click",function(){
        var _this=$(this);
        var index=$(this).index();
        _this.addClass("select").siblings("a").removeClass("select");
        box.children(".con").eq(index).removeClass("hide").siblings(".con").addClass("hide");
    });
}


//商城首页轮播
function mallSlider(opt){

    var opt = opt || {};
    var sliderBox=opt.slider;
    var sliderList=opt.list;
    var tab=opt.tab;
    var left=opt.left;
    var right=opt.right;
    var speed=opt.speed;
    var index=0;
    var len=sliderList.children().length;
    var t=null;

    //初始
    sliderList.children(":gt(0)").hide();
    //生成圆点
    var html=[];
    for(var i=0;i<len;i++){
        if(i == 0){
            html +='<span class="select"><i></i></span>';
        }else{
            html +='<span class=""><i></i></span>';
        }
    }
    tab.html(html);


    //大于一张图
    if(len > 1){

        auto();      //自动
        function auto(){
            t=setTimeout(go,speed);
        }

        function go(){
            index++;
            if(index == len){
                index=0;
            }
            animate();
            auto();
        }

        function animate(){
            tab.children().removeClass("select").eq(index).addClass("select");
            sliderList.children().hide().eq(index).fadeIn("slow");
        }

        tab.children().on("click",function(){
            index=$(this).index();
            animate();
        });

        left.click(function(){
            if(index == 0){
                index=len;
            }
            index--;
            animate();
        }).mouseover(function(){
            clearTimeout(t);
        }).mouseout(function(){
            auto();
        });

        right.click(function(){
            index++;
            if(index == len){
                index=0;
            }
            animate();
        }).mouseover(function(){
            clearTimeout(t);
        }).mouseout(function(){
            auto();
        });

        tab.mouseover(function(){
            clearTimeout(t);
        }).mouseout(function(){
            auto();
        });

        sliderList.mouseover(function(){
            clearTimeout(t);
        }).mouseout(function(){
            auto();
        });

        sliderBox.mouseover(function(){
            left.removeClass('hide');
            right.removeClass('hide');
        }).mouseout(function(){
            left.addClass('hide');
            right.addClass('hide');
        });

    }
}



/********************************************************************************************************************/


//左右滑动
function slider(opt){
    var opt = opt || {};
    var slider = opt.slider;
    var left = opt.left;
    var right = opt.right;
    //列表已显示数量，默认1
    var num = opt.num;
    //间距
    var spacing = opt.spacing;
    //滑动速度
    var speed = opt.speed;

    //列表长度
    var len=slider.children().length;
    //始初值
    //var index = len % num;
    var index = 0;
    //滑动距离
    var width=slider.children().width() + spacing;
    //定时器
    var timer;
    //是否生成圆点
    var tabFlag=false;

    var first=[];
    var last=[];
    for(var i=0;i<num;i++){
        //复制开头
        first[i]=slider.find("li").eq(i).clone();
        //复制结尾
        last[i]=slider.find("li").eq(len - i - 1).clone();
    }
    for(var j=0;j<num;j++){
        //尾部插入
        slider.append(first[j]);
        //头部插入
        slider.prepend(last[j]);
    }

    //初始定位值
    slider.css("left","-"+width * num+"px");
    //初始宽度
    slider.css("width",width * (len + num * 2) +"px");


    if(tabFlag){
        //生成小圆点
        var roundList=[];
        for(var n=0;n<len;n++){
            roundList +='<span></span>';
        }
        tab.html(roundList);
        tab.children().eq(0).addClass("select");

        //一张图片不轮播
        if(len == 1){
            return false;
        }
    }

    //自动滚动
    auto();
    function go(){
        index++;
        slider.stop(true,false).animate({
            left:"-="+width+"px"
        },speed,function(){
            if(index == len){
                //console.log("等于");
                //始初值
                index=0;
                slider.css("left","-" + width * num + "px");
            }
            //console.log("index:"+index+"\r\n"+"len:"+len);
        });
    }

    function auto(){
        timer=setInterval(go,3000);
    }

    right.on("click",function(){
        clearInterval(timer);
        if(!slider.is(":animated")){
            index++;
            slider.stop(true,false).animate({
                left:"-="+width+"px"
            },speed,function(){
                if(index == len){
                    //console.log("等于");
                    //始初值
                    index=0;
                    slider.css("left","-" + width * num + "px");
                }
                auto();
                //console.log("index:"+index+"\r\n"+"len:"+len);
            });
        }
    });

    left.on("click",function(){
        clearInterval(timer);
        if(!slider.is(":animated")) {
            if (index == 0) {
                index = num;
            }
            index--;
            slider.stop(true, false).animate({
                left: "+=" + width + "px"
            }, speed, function () {
                if (index == 0) {
                    //console.log("等于");
                    //始初值
                    index = len;
                    slider.css("left", "-" + width * len + "px");
                }
                auto();
                //console.log("index:"+index+"\r\n"+"len:"+len);
            });
        }
    });

}




/****************************************************************************************/


var BoxAlert={
    setting:{
        id:"com",
        title:"标题",
        content:"内容",
        width:402,
        icon:"warning",
        yesText:"确认",
        yesUrl:"javascript:;",
        noText:"取消",
        noUrl:"javascript:;",
        prev:null,                      //是否删除遮罩
        timeout:3
    },
    run:function(setting){
        setting.id=setting.id || this.setting.id;
        setting.title=setting.title || this.setting.title;
        setting.content=setting.content || this.setting.content;
        setting.yesText=setting.yesText || this.setting.yesText;
        setting.yesUrl=setting.yesUrl || this.setting.yesUrl;
        setting.noUrl=setting.noUrl || this.setting.noUrl;
        setting.prev=setting.prev || this.setting.prev;

        var html=[];
        if($("#opacity").length == 0){
            html.push('<div id="opacity" style="z-index:1000"></div>');
        }
        html.push('<div class="boxAlert" style="z-index:1001;width:'+setting.width+'px" id="'+setting.id+'">');
        html.push('<div class="title"><h2>'+setting.title+'</h2><a href="javascript:;" class="exit"></a></div>');
        html.push('<div class="content">');
        if(setting.icon){
            html.push('<div class="infoIco"><i class=ico-'+setting.icon+'></i><b>'+setting.content+'</b></div>');
        }else{
            html.push('<p class="infoText">'+setting.content+'</p>');
        }
        html.push('</div>');
        html.push('<div class="btn">');
        html.push('<a href="'+setting.yesUrl+'" target="_blank" class="confirm">'+setting.yesText+'</a>');
        if(setting.noText){
            html.push('<a href="'+setting.noUrl+'" target="_blank" class="step close">'+setting.noText+'</a>');
        }
        html.push('</div>');

        //生成窗体
        $("body").append(html.join(""));
        //显示窗体
        $("#"+setting.id).removeClass("hide");
        //浏览器宽与高
        var w=$(window).width() / 2;
        var h=$(window).height() / 2;
        //窗体宽与高
        var alertW=$("#"+setting.id).width()/2;
        var alertH=$("#"+setting.id).height()/2;
        //中心显示
        $("#"+setting.id).css({
            "position":"fixed",
            "left":w-alertW+"px",
            "top":h-alertH+"px"
        });

        //关闭窗体
        $("#"+setting.id).find(".exit").on("click",function(){
            if(setting.exit){
                setting.exit();
            }
            destroy();
            return false;
        });

        //点击确定
        $("#"+setting.id).find(".confirm").on("click",function(){
            if(setting.confirm){
                setting.confirm();
            }
            destroy();
            if(setting.yesUrl == "javascript:;"){
                return false;
            }
        });

        //取消
        $("#"+setting.id).find(".close").on("click",function(){
            if(setting.close){
                setting.close();
            }
            destroy();
            if(setting.noUrl == "javascript:;"){
                return false;
            }
        });

        function destroy(){
            //是否删除遮罩
            if(!setting.prev){
                $("#opacity").remove();
            }
            $("#"+setting.id).remove();
            $("#"+setting.id).find(".exit").off();
            $("#"+setting.id).find(".confirm").off();
            $("#"+setting.id).find(".close").off();
        }

    },
    center:function(setting){
        setting.id=setting.id || this.setting.id;
        setting.prev=setting.prev || this.setting.prev;

        //判断是否已存在id=opacity元素
        if($("#opacity").length < 1){
            $("body").append('<div id="opacity" style="z-index:1000"></div>');
        }

        //显示窗体
        $("#"+setting.id).removeClass("hide");
        //浏览器宽与高
        var w=$(window).width() / 2;
        var h=$(window).height() / 2;
        //窗体宽与高
        var alertW=$("#"+setting.id).width()/2;
        var alertH=$("#"+setting.id).height()/2;
        //中心显示
        $("#"+setting.id).css({
            "position":"fixed",
            "left":w-alertW+"px",
            "top":h-alertH+"px",
            "zIndex":"1001"
        });

        //关闭窗体
        $("#"+setting.id).find(".exit").on("click",function(){
            if(setting.exit){
                setting.exit();
            }
            destroy();
            return false;
        });

        function destroy(){
            //是否删除遮罩
            if(!setting.prev){
                $("#opacity").remove();
            }
            $("#"+setting.id).remove();
            $("#"+setting.id).find(".exit").off();
        }

    },
    follow:function(setting){
        setting.id=setting.id || this.setting.id;
        setting.content=setting.content || this.setting.content;
        setting.obj=setting.obj || this.setting.obj;        //点击元素的id
        setting.timeout=setting.timeout || this.setting.timeout;
        setting.left=setting.left || 10;    //移量
        setting.top=setting.top || -25;


        var html=[];
        html.push('<div class="followSuccess" style="z-index:1001" id="'+setting.id+'">'+setting.content+'</div>');
        //生成窗体
        $("body").append(html.join(""));

        var left=$("#"+setting.obj).offset().left-(setting.left);
        var top=$("#"+setting.obj).offset().top-(setting.top);

        //显示
        $("#"+setting.id).css({
//            "position":"fixed",
            "left":left+"px",
            "top":top+"px"
        });

        //显示时间
        var t=setTimeout(function(){
            $("#"+setting.id).remove();
        },setting.timeout * 1000)
    }
};





$(function(){

    //下拉
    if($(".dropDown").length > 0){
        $("body,html").bind("click",function(){
            $(".dropDown").children("ul").addClass("hide");
        });
        $(".dropDown").bind("click",function(e){
//            $(".drop-down").children("ul").addClass("hide");
            if($(this).children("ul").hasClass("hide")){
                $(this).children("ul").removeClass("hide");
                e.stopPropagation();
                $(this).find("li").click(function(e){
                    $(this).parent().siblings("span").html($(this).text()).css("color","#333");
                    $(this).parent().addClass("hide");
                    e.stopPropagation();
                });
            }else{
                $(this).children("ul").addClass("hide");
                e.stopPropagation();
            }
        })
    }













/*

    BoxAlert.run({
        id:"idididid",
        title:"说明说明说明说明",
        //content:"内容内容内容内容",               //纯汉字18，纯数字31
        icon:"warning",                         //success成功 warning警告 info通知 error错误
        yesText:"确认",
        //yesUrl:"http://www.baidu.com",
        confirm:function(){
            console.log("点击了确认！");
            alert("点击了确认！");
        },
        prev:true,                              //是否删除遮罩
        //noText:"取消",
        //noUrl:"javascript:;",
        //close:function(){
        //    console.log("点击了取消！");
        //    alert("点击了取消！");
        //},
        //timeout:3
    });


    BoxAlert.center({
        id:"id",
        prev:true
    })
*/





});



