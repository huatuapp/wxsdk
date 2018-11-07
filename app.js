//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    appid: '',
    signSecret: '',//加密串
    apimain: 'https://app-alpha.huatu.com/',//请求接口主域名
    userInfo: null
  }

})