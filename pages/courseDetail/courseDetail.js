// pages/courseDetail/courseDetail.js
const app = getApp()
import courseDetail from '../../wxsdk/courseDetail.js';
//载入解析html插件js文件
var wxParse = require('../../wxsdk/cryptojs/lib/htmlTransference/wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacher_list: '授课教师',
    course_detail: '课程信息',
    course_name: '课程名称',
    lesson_num: '课时数',
    lesson_name: '课时名称',
    lesson_duration: '课时时长',
    is_free: '收费',
    not_is_free: '免费',
    course_name: '课程名称',
    free: '是否收费',
    price: '价格',
    true_price: '现价',
    lesson_name: '课时名称',
    lesson_duration: '课时时长'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.courseDetail(options.cid);
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

  //课程详情
  courseDetail: function(cid){
    var that = this;
    var data = [];
    data.cid = cid ? cid : '37544';
    var returndata = courseDetail.courseDetail(data).then(
      function (result) {
        if (result.code == 200) {
          that.setData({
            detail: result.data
          })
          //获取要解析的数据
          var intro = result.data.intro;
          /**
          * 解析html
          * WxParse.wxParse(bindName , type, data, target,imagePadding)
          * 1.bindName绑定的数据名(必填)
          * 2.type可以为html或者md(必填)
          * 3.data为传入的具体数据(必填)
          * 4.target为Page对象,一般为this(必填)
          * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
          */
          wxParse.wxParse('intro', 'html', intro, that);
        }else{
          that.setData({
            detail: []
          })
        }
      }
    );
  },

  //视频播放
  toLive: function(e){
    var url = e.currentTarget.dataset.index;
    var urlParams = this.parseUrl(url);
    if (url == '' || urlParams['vid'] == '' || urlParams['token'] == '') {
      wx.showToast({
        title: '视频播放地址错误',
        icon: 'none',
        duration: 2000,
        mask: true
      })
    }else{
      url = encodeURIComponent(url);
      wx.navigateTo({
      url: '/pages/videoPlay/videoPlay?url='+url,
    })
    }
  },

  //处理url  获取url中的所有参数并转换成数组
  parseUrl: function(url){
      var result = [];
      if(url){
        var query = url.split("?")[1];
        var queryArr = query.split("&");
        queryArr.forEach(function (item) {
          var key = item.split("=")[0];
          var value = item.split("=")[1];
          result[key] = value;
        });
      }
      return result;
  }
})
