//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navigators: [
      {
        url: '/pages/login/login',
        title: '登录'
      },
      {
        url: '/pages/category/category',
        title: '科目列表'
      },
      {
        "url": '/pages/areaList/areaList',
        'title': '区域列表'
      },
      {
        url: '/pages/live/live',
        title: '学习平台课程列表'
      },
      {
        url: '/pages/courseDetail/courseDetail',
        title: '学习平台课程详情'
      },
      {
        url: '/pages/videoPlay/videoPlay',
        title: '学习平台网课播放'
      },
      {
        url: '/pages/ygCourse/list',
        title: '腰果课程列表'
      },         
      {
        "url": '/pages/createOrder/createOrder',
        'title': '创建订单'
      },
      {
        "url": '/pages/notify/notify',
        'title': '支付回调地址'
      },
      {
        "url": '/pages/myCourse/myCourse',
        'title': '我的课程'
      },
      {
        "url": '/pages/myOrder/myOrder',
        'title': "我的订单列表"
      },
      {
        "url": '/pages/dropList/dropList',
        'title': '下拉列表插件标签drop-list'
      },
      {
        "url": '/pages/cutText/cutText',
        'title': '截取字符串插件标签cut-text'
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})