// pages/clearing/clearing.js
Page({
  data:{
    date:'2017-01-01',
    isDate:true
  },
  radioVoucher: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  bindDateChange:function(e){
    var _this = this;
    // 已修改过一次
    if(!this.data.isDate){
        wx.showModal({
          title: '修改失败',
          content: '自提时间只能修改一次！',
          showCancel : false,
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
        return false;
    } 
    // 提示只能修改一次
    wx.showModal({
      title: '修改自提时间',
      content: '自提时间可在最后期限基础上延长3天，点击“确定”完成修改，仅限修改一次',
      success: function(res) {
        if (res.confirm) {
          // 时间相同
          if(_this.data.date == e.detail.value){
            wx.showModal({
              //title: '提示',
              content: '失败',
              showCancel : false,
              success: function(res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
          }else{
            // 修改相关数据
            _this.setData({
                date: e.detail.value,
                isDate: false
            })
          }
        }
      }
    })
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
  },
  onUnload:function(){
    // 页面关闭
  }
})