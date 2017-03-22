$(function(){

var help={
    init:function(){
        //滚动时左侧导航浮动
        this.scroll();
        //点击左侧导航效果
        this.nav();
        //点击左侧子导航效果加高亮红
        this.subNav();
        //点击底部刷新本页
        this.reload();
        //解析链接
        this.url();
    },
    //保存相关dom
    obj:{
        left:$("#helpLeft"),
        right:$("#helpRight"),
        //title:$("#helpTitle"),
        href:location.href
    },
    //滚动时左侧定位设置
    scroll:function(){
        var _this=this;
        var top=_this.obj.left.offset().top;
        var left=_this.obj.left.offset().left;
        $(window).scroll(function(){
            if($(this).scrollTop() > top){
                _this.obj.left.css({
                    "position":"fixed",
                    "top":2+"px"
                });
            }else{
                _this.obj.left.css("position","");
            }
        });
    },
    //点击左侧导航效果
    nav:function(){
        var _this=this;
        _this.obj.left.children('h3').on('click',function(){
            var _index=$(this).data('index');
            //本身添加select，兄弟节点删除select
            $(this).addClass('select').siblings("h3").removeClass('select');
            //显示更多子导航
            $(this).next('ul').slideToggle('fast').siblings('ul').slideUp('fast');
            //显示相关内容
            //_this.obj.right.children(".content").addClass('hide').eq(_index).removeClass('hide').children('.list').eq(0).removeClass("hide");

            //修改左边的标题
            //var text=$(this).text();
            //_this.obj.title.html(text);
        });
    },
    //点击左侧子导航效果加高亮红.显示相关内容
    subNav:function(){
        var _this=this;
        _this.obj.left.find('li').on('click',function(){
            var _index=$(this).index();
            $(this).addClass('select').siblings().removeClass('select');
            //根据上级导航显示相关内容
            var parentIndex=$(this).parent().data('index');
            //显示相关内容
            _this.obj.right.children(".content").addClass('hide').eq(parentIndex).removeClass('hide').children('.list').addClass("hide").eq(_index).removeClass("hide");

            //修改左边的标题
            //var text=$(this).text();
            //_this.obj.title.html(text);
        });
    },
    //解析链接
    url:function(){
        var _this=this;

        //var con_r=$('.con_r');
        //提取url中描点
        var urlStr=_this.obj.href.substring(_this.obj.href.indexOf("#"),_this.obj.href.length);

        //自提流程take_it
        //关于保价费charge
        if(urlStr === "#bid_dai" || urlStr === "#take_it" || urlStr === "#charge"){
            var _ch_af_sale=$('#ch_af_sale');
            _ch_af_sale.addClass('bg_sel').siblings('a').removeClass('bg_sel');
            _ch_af_sale.next('ul').show().children('li:eq(0)').children('a').addClass('sel');
            $('#ch_sale').removeClass('hide').siblings('.con_r').addClass('hide');
            $(window).scrollTop($(urlStr).offset().top);
        }else{
            //查找导航
            for(var i=0;i<_this.obj.left.children('ul').length;i++){
                //var _img2=_help_left.children('a').eq(i).data('img');
                for(var j=0;j<_this.obj.left.children('ul').eq(i).children('li').length;j++){
                    //查找导航href
                    var _value=_this.obj.left.children('ul').eq(i).find('li').eq(j).children('a').attr('href');
                    //url描点与左边导航描点进行对比
                    if(urlStr === _value){
                        //根据导航index显示相关内容
                        var parentIndex=_this.obj.left.children('ul').eq(i).data('index');
                        //显示右边相关内容
                        _this.obj.right.children(".content").addClass('hide').eq(parentIndex).removeClass('hide').children('.list').addClass("hide").eq(j).removeClass("hide");
                        //_this.obj.right.children(".content").eq(i).removeClass('hide').siblings('.content').addClass('hide');
                        //定位到相关内容位置
                        //$(window).scrollTop($(_value).offset().top);
                        //显示左边导航内容
                        _this.obj.left.children('h3').eq(i).addClass('select').siblings('h3').removeClass('select');
                        _this.obj.left.children('h3').eq(i).next('ul').show().siblings('ul').hide();
                        _this.obj.left.children('ul').eq(i).find('li').eq(j).addClass('select');
                        //$('.help_ban').children('img').attr('src',_img2);
                    }
                }
            }
        }
    },
    //点击底部刷新本页
    reload:function(){
        $(".footer").find("dl").find("a").bind("click",function(){
            window.location.reload(true);
        });
    }
};


help.init();


});


(function($){
    $(function(){
        console.log($('#div').length);
    })
})(jQuery);

