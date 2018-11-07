// pages/ygDetail/detail.js
var course = require('../../wxsdk/ygDetail.js');
//载入解析html插件js文件
var wxParse = require('../../wxsdk/cryptojs/lib/htmlTransference/wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[],
    teacher_list: '授课教师',
    course_detail: '课程信息',
    course_name: '课程名称',
    lesson_num: '课时数',
    lesson_name: '课时名称',
    lesson_duration: '开课时间',
    is_free: '收费',
    not_is_free: '免费',
    course_name: '课程姓名',
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
    this.getData(options)
  },

  //获取课程详情
  getData: function (params) {
    var that = this;
    var data = [];
    data.cid = params.cid ? params.cid : '5075'
    course.getDetail(data).then(function (result) {
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
      } else {
        that.setData({
          detail: []
        })
      }
    });
  },

  //视频播放
  play: function (params) {
    var data = [];
    var that = this;
    data.cid = params.currentTarget.dataset.courseId;
    data.classid = params.currentTarget.dataset.classId;

    if (data.cid == '' || data.classid == '') {
      that.alertMessage('缺少播放参数');
    } else {
      course.play(data).then(function(result){
        if(result.code == 200){
          var url = result.data.url;
          wx.navigateTo({
            url: '/pages/videoPlay/videoPlay?url=' + url,
          })
        }else{
          that.alertMessage(result.message);
        }
      })
    }
  },

  /*共用弹窗*/
  alertMessage:function(msg){
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 2000,
      mask: true
    })
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

  }
})