// pages/coupon/coupon.js
Page({
  data:{
    className:'',
    isAlert:true,
    list:{
      photo : '../../public/images/230x230.jpg'
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏

    // 关闭弹窗
    this.setData({
      isAlert:true,
      className:'SlideTopBottom-leave'
    })
  },
  onUnload:function(){
    // 页面关闭

  },
  // 显示弹窗
  showAlert:function(){
      this.setData({
        isAlert:false,
        className:'SlideTopBottom-enter'
      })
  },
  // 关闭弹窗
  exitAlert:function(){
    var _this = this;
    this.setData({
      className:'SlideTopBottom-leave'
    })
    setTimeout(function(){
      _this.setData({
        isAlert:true,
        className:''
      })
    },400)
  }
})