$(function(){

    (function($){

        var arrList=[];
        var flag=true;
        $(".retrievalNavMore").on("click",function(){
            var select=$(this).children("i").hasClass("select");
            var item=$(this).siblings(".box").children('.item');
            var len=item.length;

            //更多选项切换
            if(select){
                for(var i=0;i<arrList.length;i++){
                    //隐藏更多
                    item.eq(arrList[i]).addClass("hide");
                }
                //修改小箭头方向.下
                $(this).children("i").removeClass("select");
                $(this).children("span").text("更多选项");
            }else{
                for(var i=0;i<len;i++){
                    if(item.eq(i).hasClass("hide")){
                        if(flag){
                            //保存索引
                            arrList.push(i);
                        }
                        //显示更多
                        item.eq(i).removeClass("hide");
                    }
                }
                //修改小箭头方向.上
                $(this).children("i").addClass("select");
                $(this).children("span").text("收起");
                flag=false;
            }

        })

    })($);


});