//index.js
//获取应用实例
var login = require('../../wxsdk/login.js');

Page({
  data: {
    motto: '注销',
    userInfo: {},
    hasUserInfo: false,
    hasBindMobile: false
  },
  onLoad: function () {
    var _this = this;
    wx.getStorage({
      key: 'userinfo',
      success: function (res) {
        if (res.errMsg == "getStorage:ok"){
          _this.setData({
            hasBindMobile: true,
            hasUserInfo: true,
            userInfo: res.data
          })
        }else{
          console.log("获取登录缓存信息失败");
        }
      },
      fail: function(err){
        wx.getStorage({
          key: 'wxUserInfo',
          success: function (wxres) {
            if (wxres.errMsg == "getStorage:ok") {
              _this.setData({
                hasBindMobile: false,
                hasUserInfo: true
              })
              console.log("已授权微信登录，未授权获取手机号");
            } else {
              console.log("获取授权微信登录缓存信息失败");
            }
            console.log(wxres);
          },
          fail: function (err) {
            console.log("未授权微信登录");
          }
        })
      }
    })
  },
  userLogin:function (e) {
    var _this = this;
    login.login(e).then(function(logFlag){
      if(logFlag.code == 200){
        _this.setData({
          hasBindMobile: true,
          hasUserInfo: true,
          userInfo: logFlag.userinfo
        })
      }else if(logFlag.code == -101){
        _this.setData({
          hasBindMobile: false,
          hasUserInfo: true
        })
      }
    })
  },
  getPhoneNumber: function (e) {
    var _this = this;
    if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '未授权',
        success: function (res) { }
      })
    } else {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '同意授权',
        success: function (res) { 
          login.bindMobileCode(e.detail.encryptedData, e.detail.iv).then(function (userInfo) {
            _this.setData({
              hasBindMobile: true,
              hasUserInfo: true,
              userInfo: userInfo
            })
          })
        }
      })
    }
  },
  loginout: function (e) {
    var that = this;
    wx.removeStorage({
      key: "wxUserInfo",
      success:function(res){
        wx.removeStorage({
          key: "userinfo",
          success: function (res) {
            that.setData({
              hasBindMobile: false,
              hasUserInfo: false
            })
          }
        });
      }
    });
  }
})