<template>

    <div class="wrap">
        <header>
            <div v-touch:tap="onTap" class="indexSearch" :style="{background:'rgba(0,0,0,'+topSearchNum+')'}" data-a="{{topSearchNum}}">
                <div class="testClassify hide" @click="toggleClassify">分类</div>
                <div class="inputSearch">
                    <a href="search.html">输入关键词查找藏品</a>
                </div>
                <div class="indexNotice hide"><a href="bulletin.html">公告</a></div>
            </div>
        </header>

        <!--scrollHide-->
        <article class="main" @scroll="indexScroll($event)" @touchstart="indexScroll($event)" @touchmove="indexScroll($event)">
            <div id="onePage">

                <!-- 抽奖转盘图标 -->
                <!--<a href="http://www.baidu.com" class="lotteryIcon">-->
                    <!--<img :src="'./html/images/lotteryIcon.gif'" alt="">-->
                <!--</a>-->

                <!-- 轮播组件 indexAdMt-->
                <slider :items="picList" class=""></slider>

                <!--轮播-->
                <div class="indexAd indexAdMt hide" :style="{width:this.sliderWidth+'px'}" @touchstart="sliderStart($event)" @touchmove="sliderMove($event)" @touchend="sliderEnd($event)">
                    <ul id="sliderUl" :style="{left:'-'+sliderWidth*sliderIndex+'px'}">
                        <li v-for="item in sliderList" :style="{width:this.sliderWidth+'px'}"><a href="javascript:;"><img :src="item.list" alt="" /></a></li>
                    </ul>
                    <div class="indexAdTab">
                        <span v-for="index in sliderLen" :class="{select:$index==sliderIndex}"></span>
                    </div>
                </div>

                <!--次导航-->
                <div class="indexNav">
                    <a href="boutique.html">
                        <div class="img">
                            <img :src="'/html/picture/nav1.png'" alt="" />
                        </div>
                        <span>寿山石</span>
                    </a>
                    <a href="zhuanchang.html">
                        <div class="img">
                            <img :src="'/html/picture/nav2.png'" alt="" />
                        </div>
                        <span>珠宝</span>
                    </a>
                    <a href="">
                        <div class="img">
                            <img :src="'/html/picture/nav3.png'" alt="" />
                        </div>
                        <span>文玩</span>
                    </a>
                    <a href="">
                        <div class="img">
                            <img :src="'/html/picture/nav4.png'" alt="" />
                        </div>
                        <span>字画</span>
                    </a>
                    <a href="">
                        <div class="img">
                            <img :src="'/html/picture/nav5.png'" alt="" />
                        </div>
                        <span>私洽</span>
                    </a>
                </div>

                <!-- -->
                <div class="indexList">
                    <div class="indexBoutique">
                        <div class="title">
                            <h2>精品汇</h2>
                            <span>8月13日 上新</span>
                        </div>
                        <div class="box">
                            <a href=""><img :src="'/html/picture/a1.jpg'" alt=""></a>
                        </div>
                    </div>
                    <div class="indexHappy">
                        <div class="title">
                            <h2>乐淘</h2>
                            <span>8月13日 上新</span>
                        </div>
                        <div class="box">
                            <section>
                                <div class="flex">
                                    <a href=""><img :src="'/html/picture/a3.jpg'" alt=""></a>
                                </div>
                                <div class="flex">
                                    <a href=""><img :src="'/html/picture/a4.jpg'" alt=""></a>
                                </div>
                            </section>
                            <section>
                                <div class="flex">
                                    <a href=""><img :src="'/html/picture/a5.jpg'" alt=""></a>
                                </div>
                                <div class="flex">
                                    <a href=""><img :src="'/html/picture/a5.jpg'" alt=""></a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>


                <!-- 分类.精品汇
                <div class="indexBuying">
                    <div class="title">
                        <h2>精品汇</h2>
                        <span>8月13日 上新</span>
                    </div>
                    <div class="box">
                        <section>
                            <div class="flex">
                                <a href=""><img :src="'/html/picture/a1.jpg'" alt=""></a>
                            </div>
                        </section>
                        <section>
                            <div class="flex">
                                <a href=""><img :src="'/html/picture/a2.jpg'" alt=""></a>
                            </div>
                        </section>
                    </div>
                </div>-->


                <!-- 分类.乐淘
                <div class="indexBuying">
                    <div class="title">
                        <h2>乐淘</h2>
                        <span>8月15日 上新</span>
                    </div>
                    <div class="box">
                        <section>
                            <div class="flex">
                                <a href=""><img :src="'/html/picture/a3.jpg'" alt=""></a>
                            </div>
                        </section>
                        <section>
                            <div class="flex">
                                <a href=""><img :src="'/html/picture/a4.jpg'" alt=""></a>
                            </div>
                        </section>
                        <section>
                            <div class="flex">
                                <a href=""><img :src="'/html/picture/a5.jpg'" alt=""></a>
                            </div>
                        </section>
                        <section>
                            <div class="flex">
                                <a href=""><img :src="'/html/picture/a5.jpg'" alt=""></a>
                            </div>
                        </section>
                    </div>
                </div>-->


                <!-- 专场
                <div class="indexTitle hide">
                    <strong>精品汇</strong>
                </div>
                -->

                <div class="special">
                    <div class="title">
                        <h2>专场</h2>
                    </div>
                    <div class="indexSpecial">
                        <a href="">
                            <img :src="'/html/picture/2index2.jpg'" alt="" />
                            <div class="opacity"></div>
                            <section><div>
                                <h3>612父亲节</h3>
                                <h4>爱，您表达；礼，我们备。</h4>
                            </div></section>
                        </a>
                    </div>

                    <div class="indexSpecial">
                        <a href="">
                            <img :src="'/html/picture/2index3.jpg'" alt="" />
                            <div class="opacity"></div>
                            <section><div>
                                <h3>真花独步</h3>
                                <h4>2016年林飞作品展</h4>
                            </div></section>
                        </a>
                    </div>
                </div>


                <div class="special">
                    <div class="title">
                        <h2>私洽</h2>
                    </div>
                    <!-- 私洽 -->
                    <div class="indexStruck">
                        <a href="negotiate.html"><img :src="'/html/picture/index10.jpg'" alt="" /></a>
                    </div>
                </div>


                <div class="indexSpecialList hide">
                    <!-- width + margin-leftindexSpecialList * length -->
                    <section id="indexSpecialList">
                        <a href="" v-for="i in 6">
                            <img :src="'/html/picture/2index4.jpg'" alt="" />
                            <h3>金珀观音挂坠</h3>
                            <span>¥5,512</span>
                        </a>
                    </section>
                </div>

                <!--珍石惠-->
                <div class="indexRush">
                    <div class="rushTitle">
                        <h2>珍石惠</h2>
                        <div class="indexTime">
                            <span>1</span>
                            天
                            <span>00</span>
                            <em>:</em>
                            <span>00</span>
                            <em>:</em>
                            <span>00</span>
                            后开始
                        </div>
                        <a href="" class="more">更多 ></a>
                    </div>
                    <section>
                        <ul class="list">
                            <li><a href="">
                                <img :src="'/html/picture/2index1.jpg'" alt="" />
                                <div class="box">
                                    <h3>金珀如意挂坠金珀如意挂坠金珀如意挂坠金珀如意挂坠</h3>
                                    <!--<em>¥3,800</em>-->
                                    <span>¥3,000</span>
                                </div>
                            </a></li>
                            <li v-for="i in 6"><a href="">
                                <img :src="'/html/picture/2index1.jpg'" alt="" />
                                <div class="box">
                                    <h3>金珀如意挂坠</h3>
                                    <!--<em>¥3,800</em>-->
                                    <span>¥3,000</span>
                                </div>
                            </a></li>
                        </ul>
                    </section>
                </div>

                <div class="indexTitle">
                    <strong>精品推荐</strong>
                </div>

                <div class="goodsListBox">
                    <!-- 列表 -->
                    <normal></normal>
                </div>
            </div>
        </article>

        <footer>
            <!-- 集珍坊app首页添加下载广告 -->
            <appdown></appdown>
            <!-- 底部导航 -->
            <appnav></appnav>
        </footer>

    </div>

    <!--分类-->
    <div class="indexClassify" :class="{'hide':isClassify}">
        <div class="opacity" @click="toggleClassify"></div>
        <!-- :class="{'select':!isClassifySlide}" -->
        <div class="box classifyList">
            <h2><a href="">精品汇</a></h2>
            <div class="list">
                <a href="" class="select">4月07日</a>
                <a href="">4月02日</a>
                <a href="">4月02日</a>
            </div>
            <!--<h2><a href="">乐淘·寿山石</a></h2>-->
            <!--<div class="list">-->
            <!--<a href="">4月07日</a>-->
            <!--</div>-->
            <!--<h2><a href="">乐淘·珠宝</a></h2>-->
            <!--<div class="list">-->
            <!--<a href="">4月07日</a>-->
            <!--</div>-->
            <h2><a href="">寿山石</a></h2>
            <div class="list">
                <a href="">田黄石</a>
                <a href="">荔枝洞石</a>
                <a href="">芙蓉石</a>
                <a href="">纹洋石</a>
                <a href="">高山石</a>
                <a href="">都城坑石</a>
                <a href="">善伯洞石</a>
                <a href="">旗降石</a>
                <a href="">二号矿石</a>
                <a href="">寿山掘性石</a>
                <a href="">其它寿山石</a>
            </div>
            <h2><a href="">珠宝</a></h2>
            <div class="list">
                <a href="">翡翠</a>
                <a href="">琥珀蜜蜡</a>
                <a href="">珊瑚</a>
                <a href="">珍珠</a>
                <a href="">彩宝</a>
            </div>
        </div>
    </div>


    <!-- 引导页 -->
    <div class="appGuidePage" transition="enlarge" v-if="guideSlider.is" @touchstart="guideSliderStart($event)" @touchmove="guideSliderMove($event)" @touchend="guideSliderEnd($event)">
        <ul :style="{transform:'translate3d('+guideSlider.num+'px,0px, 0px)',transitionDuration:guideSlider.speed+'ms'}">
            <li><div class="box"><img :src="'http://app2.artjzf.com/images/appGuide1.jpg'" alt="" /></div></li>
            <li><div class="box"><img :src="'http://app2.artjzf.com/images/appGuide2.jpg'" alt="" /></div></li>
            <li><div class="box"><img :src="'http://app2.artjzf.com/images/appGuide3.jpg'" alt="" /></div></li>
            <li @click="guideClick"><div class="box"><img :src="'http://app2.artjzf.com/images/appGuide4.jpg'" alt="" /></div></li>
        </ul>
        <div class="tab">
            <span v-for="i in guideSlider.list" :class="{select:$index == guideSlider.index}"></span>
        </div>
    </div>

</template>


<script>
    /**
     请求旧页面时候 data 初始化里读取localstorage的数值 节省了一个服务器请求的时间  然后在created方法里请求服务器 对比缓存 如果存在差异 就更新到data里的对应数据 和更新缓存
     https://github.com/ihanyang/cnode-vue 我看他这个就用localstorage保存状态和数据
     */
    import appnav from './appnav.vue';
    import appdown from './index/appdown.vue';
    import normal from './list/normal.vue';
    import slider from './index/slider.vue';
    export default{
        data(){
            return {
                topSearchNum:0,         //顶部搜索透明值
                /***************************************************/
                topSearch:true,        //顶部搜索
                scrollTop:0,
                height:0,
                mainHeight:0,
                /***************************************/
                //轮播
                sliderTimer:true,
                sliderList:"",
                sliderWidth:"",
                sliderIndex:0,
                sliderLen:0,
                sliderFlag:true,
                sliderStartX:0,
                sliderStartY:0,
                sliderEndX:0,
                sliderEndY:0,
                //是否显示分类
                isClassify:true,
                //引导页
                guideSlider:{
                    is:false,                                   //是否显示全屏滑动图片
                    list:[1,2,3,4],                             //滑动图片列表
                    num:0,
                    time:0,
                    index:0,
                    startX:0,
                    startY:0,
                    moveX:0,
                    moveY:0,
                    endX:0,
                    endY:0,
                    speed:500           //滑动速度500ms
                },
                //轮播
                //picList:[]              //要使用数组[]
                picList:window.localStorage.getItem("sliderData") ? JSON.parse(window.localStorage.getItem("sliderData")) : []
            }
        },
        created: function () {
            this.$http.get('/index',{type:'slider'}).then(function (response) {
                // get status
                //alert(response.status);
                // get all headers
                //console.log(response.headers());
                // get 'expires' header
                //console.log(response.headers('expires'));
                // set data on vm
//                this.$set('sliderList',response.data);
                //存储数据
                if(window.localStorage) {
                    /*
                     localStorage的大小一般限定为4M左右，这点可以根据实际浏览器来测试。
                     那么，如何检测自己已经消耗了多少空间呢？
                     可以直接将localStorage序列化，看看其字节数，就可以算出其已经占用的空间了(可能会有点误差，这样做会把一些转移符号算进去，可以消除掉后再算)。
                     如图3.4.1，我们看出了自己大约已经使用了61个字节的
                     linehgt=多少字节
                     console.log(JSON.stringify(response.data.lists).length);
                     //先判断是否已保存
                     //在判断是否相同
                     console.log(JSON.stringify(response.data.lists));
                     */
                    //console.log(window.localStorage.getItem("sliderData"));
                    //console.log(JSON.stringify(response.data.lists));
                    if (window.localStorage.getItem("sliderData") && window.localStorage.getItem("sliderData") == JSON.stringify(response.data.lists)) {
                        //存在 && 对比字符串、数组
                        console.log("正确");
                    }else{
                        console.log("不正确");
                        //保存、更新数据
                        localStorage.setItem("sliderData", JSON.stringify(response.data.lists));
                    }
                    this.picList=JSON.parse(window.localStorage.getItem("sliderData"));
                }else {
                    alert("不支持localStorage");
                }
                //轮播
                //this.picList=response.data.lists;
                //旧轮播
                this.sliderList=response.data.lists;
                this.sliderLen=response.data.lists.length;
//                console.log(this.sliderList);
            },{
//                headers: {'Content-Type': 'Access-Control-Allow-Origin'}
            }, function (response) {
                // error callback
            });
        },
        ready:function(){
            //判断引导页是否已经出现
            if(window.localStorage) {
                if (!window.localStorage.getItem("appGuidePage")) {
                    this.guideSlider.is = true;
                }
            }else {
                alert("不支持localStorage");
            }
            //屏幕宽度
            this.sliderWidth=document.body.clientWidth;
            //自动轮播
            var _self=this;
            slider();
            function slider(){
                //一张图片不轮播
                if(_self.sliderLen == 1){
                    return false;
                }
                //复制第一个li节点
                //var copyState=true;
                //自动滚动
                auto();
                function auto(){
                    _self.sliderTimer=setInterval(go,3000);
                }
                function go(){
//                    if(copyState){
//                        var ul=document.querySelector("#sliderUl");
//                        var li=ul.getElementsByTagName("li")[0].cloneNode(true);
//                        ul.appendChild(li);
//                        copyState=false;
//                    }
//                    _self.sliderIndex++;
//                    console.log(_self.sliderIndex);
                    //if(_self.sliderIndex < _self.sliderLen){
                    _self.sliderIndex++;
                    if(_self.sliderIndex == _self.sliderLen){
                        _self.sliderIndex=0;
                    }
                    //}
                }
            }
        },
        methods:{
            onTap:function(){
                alert(1);
            },
            ///第一版*******************************************/
            indexScroll:function(){
                var self=document.querySelector(".main");
                //滚动值
                this.scrollTop=self.scrollTop;
                //页面高度
                this.height=self.scrollHeight;
                //窗口可视高度
                this.mainHeight=self.clientHeight;
                //滚动大于50切换顶部搜索
                this.scrollTop > 50 ? this.topSearch = false : this.topSearch = true;
                //顶部搜索透明值
                if(this.scrollTop < 100){
                    this.topSearchNum=this.scrollTop / 100;
                }else{
                    this.topSearchNum=1;
                }
                //console.log( this.scrollTop / 100);
            },
            //轮播
            sliderStart: function (event) {
                clearInterval(this.sliderTimer);
                var touch=event.changedTouches[0];
                this.sliderStartX= touch.clientX;
                this.sliderStartY= touch.clientY;
            },
            sliderMove: function (event) {
                event.preventDefault();
            },
            sliderEnd: function (event) {
                var touch=event.changedTouches[0];
                this.sliderEndX=touch.clientX - this.sliderStartX;
                this.sliderEndY=touch.clientY - this.sliderStartY;
                if(Math.abs(this.sliderEndX) > Math.abs(this.sliderEndY) && this.sliderFlag){
                    var _self=this;
                    this.sliderFlag=false;
                    if(this.sliderEndX > 0){
                        //alert("右");
                        this.sliderIndex--;
                        if(this.sliderIndex < 0 ){
                            this.sliderIndex=(this.sliderLen-1)
                        }
                        setTimeout(function(){
                            _self.sliderFlag=true;
                        },500);
                    }else{
                        //alert("左");
                        this.sliderIndex++;
                        if(this.sliderIndex == this.sliderLen){
                            this.sliderIndex=0;
                        }
                        setTimeout(function(){
                            _self.sliderFlag=true;
                        },500);
                    }
                }
            },
            //显示公告
            toggleClassify:function(){
                var _this=this;
                _this.isClassify=!_this.isClassify;
            },
            //*********************************************************/
            //关闭引导页
            guideClick:function(){
                if(window.localStorage) {
                    //隐藏
                    localStorage.setItem("appGuidePage", true);
                    this.guideSlider.is = false;
                }else {
                    alert("不支持localStorage");
                }
            },
            //启动页图片开始滑动
            guideSliderStart:function(event){
                var touch=event.changedTouches[0];
                this.guideSlider.startX = touch.clientX;
                this.guideSlider.startY = touch.clientY;
                this.guideSlider.time = new Date();
            },
            //启动页图片滑动
            guideSliderMove:function(event){
                var touch=event.changedTouches[0];
                this.guideSlider.moveX = touch.clientX - this.guideSlider.startX;
                this.guideSlider.moveY = touch.clientY - this.guideSlider.startY;
                //时间250=true
                //拖动距离20=true
                if(Math.abs(this.guideSlider.moveX) > Math.abs(this.guideSlider.moveY) ){
                    //左右划
                    event.preventDefault();
                    //过渡延续时间清空为0
                    this.guideSlider.speed=0;
                    //左右拖动值
                    this.guideSlider.num=this.guideSlider.moveX-this.guideSlider.index*this.sliderWidth;
                }
            },
            //启动页图片结束滑动
            guideSliderEnd:function(event){
                var touch=event.changedTouches[0];
                this.guideSlider.endX=touch.clientX - this.guideSlider.startX;
                var time=new Date();
                //过渡延续时间
                this.guideSlider.speed=500;
                //time-this.imgSlider.time < 250
                if(this.guideSlider.endX > 20){
                    //console.log("右");
                    this.guideSlider.index--;
                    if(this.guideSlider.index < 0){
                        this.guideSlider.index = 0;
                    }
                }else if(this.guideSlider.endX < -20){
                    //console.log("左");
                    this.guideSlider.index++;
                    //长度
                    if(this.guideSlider.index == this.guideSlider.list.length){
                        //加载数据...
                        //到最后一张图片了
                        this.guideSlider.index = this.guideSlider.list.length-1;
                        //隐藏
                        //localStorage.setItem("appGuidePage",true);
                        //this.guideSlider.is=true;
                    }
                }
                this.guideSlider.num="-"+this.sliderWidth*this.guideSlider.index;
            }
        },
        components:{
            appnav,
            appdown,
            normal,
            slider
        }
    }
</script>