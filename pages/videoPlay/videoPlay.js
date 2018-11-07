// pages/videoPlay/videoPlay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.play(options.url);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //视频播放
  play: function(url){
    this.sdkVersion();
    var url = url ? decodeURIComponent(url) : "https://www.iqiyi.com/v_19rr16se48.html?spm=a2h0k.11417342.soresults.dselectbutton";
    this.setData({
     url: url
    })
  },

  //获取当前小程序基础库版本
  sdkVersion: function() {
    wx.getSystemInfo({
      success: function (res) {
        var version = res.SDKVersion;
        version = version.replace(/\./g, "");
        if (parseInt(version) < 164) {   // 小于1.6.4的版本
          wx.showModal({
            title: '提示',
            content: '当前页面web-view组件仅支持基础库1.6.4以上版本，请注意基础库升级',
          })
        }
      }
    })
  }
})