// wxsdk/live.js
var live = require('../../wxsdk/live.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist: [],//列表数据
    page: 1,//页码
    limit: 6,//每页的数据条数默认10条
    type: 4,//类型（0-直播1-今日直播 2-往期回顾3-录播 4-直播与录播5-往期回顾与录播）
    subject_id: 2,//科目分类
    area_id:86//区域id,可不传，不传的时候查分校数据，当同时存在，会优先area_id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData();
  },

  getData:function(){
    var that = this;
    var params = [];
    var tempList = [];
    params.subject_id = that.data.subject_id;
    params.type = that.data.type;
    params.page = that.data.page;
    params.limit = that.data.limit;
    params.area_id=that.data.area_id;    

    live.getList(params).then(function (result) {
      if (result.code == 200) {
        tempList = that.data.datalist.concat(result.data);
        that.setData({
          datalist: tempList
        })
      }else{
        that.setData({
          datalist:[]
        })
      }
    });
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
    var that = this;
    that.setData({
      page:that.data.page + 1
    })
    
    that.getData();

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})