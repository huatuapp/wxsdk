// pages/myCourse/myCourse.js
import myCourse from '../../wxsdk/myCourse.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabTxt: [{
      'text': '学习平台',
      'active': false,
      'child': [{
          'id': 1,
          'text': '学习平台'
        },
        {
          'id': 2,
          'text': '腰果'
        },
      ],
      'type': 1
    }],
    course_type: 1, //课程来源类型 1 学习平台 2 腰果 Required
    page: 1, //页码，默认1 
    limit: 5, //每页返回数据，默认10
    myCourse: [], //放置返回的数据
    message: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.myCourse();
  },
  //菜单点击  json文件里引入插件；wxml里书写<droplist>标签和方法--------------------------------------------------
  getList({
    detail
  }) {
    var that = this;
    // console.log(detail);
    that.setData({
      page: 1,
      course_type: detail.searchParamId[0],
    })
    //先清空原来的数据
    that.data.myCourse = [];
    //获取所需数据
    that.myCourse();
  },

  //菜单处理结束----------------------------------------------------------
  //我的课程
  myCourse: function(data) {
    var that = this;
    var data = [];
    data.course_type = this.data.course_type;
    data.page = this.data.page;
    data.limit = this.data.limit;
    let myCourseList = [];
    var returndata = myCourse.myCourse(data).then(
      function(result) {
        if (result.code == 200 && result.data != null) {
          that.setData({
            showmessage: false
          })
        }
        if (result.code != 200) {
          result.data = [];
          that.setData({
            showmessage: true,
            message: result.message,
          })
        }
        myCourseList = that.data.myCourse.concat(result.data);
        that.setData({
          myCourse: myCourseList,
          courseType: that.data.course_type,
        })
      }
    );
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //下拉刷新
  onPullDownRefresh: function() {
    var that = this;
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function() {
      // complete
      //页数置为1，数据清空
      that.setData({
        page: 1
      })
      that.data.myCourse = [];
      that.myCourse();

      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    //页码+1
    this.setData({
      page: this.data.page + 1
    })
    this.myCourse();
  },

  //课程详情
  toDetail: function(e) {
    var cid = e.currentTarget.dataset.index;
    if (cid) {
      wx.navigateTo({
        url: '/pages/courseDetail/courseDetail?cid=' + cid,
      })
    } else {
      wx.showToast({
        title: '参数错误',
        icon: 'none',
        duration: 2000,
        mask: true
      })
    }
  }
})