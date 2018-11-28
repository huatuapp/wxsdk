//app.js
import MakeMd5 from 'wxsdk/md5.js';
var WXBizDataCrypt = require('wxsdk/cryptojs/RdWXBizDataCrypt.js');
App({
  onLaunch: function() {
    var that = this;
    wx.checkSession({
      success: function () {
        //session_key 未过期，并且在本生命周期一直有效
      },
      fail: function () {
        // session_key 已经失效，需要重新执行登录流程
        wx.login({
          success: res => {
            var params = {
              "appid": that.globalData.appid,
              "jscode": res.code,
              "timestamp": Date.now().toString().substring(0, 10)
            };
            var str = '';
            var arr = Object.keys(params);
            arr.sort();
            for (var i in arr) {
              str += arr[i] + "=" + params[arr[i]] + "&"
            }
            params.sign = MakeMd5.md5(str + "key=" + that.globalData.signSecret).toUpperCase();
            wx.request({
              url: that.globalData.apimain + "wxapp/user/wx_session_key",
              data: params,
              header: {
                "Content-Type": "application/json"
              },
              method: 'GET',
              success: (res) => {
                wx.setStorageSync('session_key', res.data.data);
              },
              fail: (res) => {
                console.log(res);
              }
            })
          }
        })
      }
    })
    // 展示本地存储能力
    //var logs = wx.getStorageSync('logs') || []
    //logs.unshift(Date.now())
    //wx.setStorageSync('logs', logs)
  },
  globalData: {
    appid: '',//小程序APPID
    signSecret: '',//加密串
    apimain: '',//请求接口主域名
    userInfo: null
  }

})