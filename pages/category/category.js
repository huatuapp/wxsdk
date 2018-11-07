// pages/category/category.js
var category = require('../../wxsdk/category.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    subjectlist:[],
    sid:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategory();
  },

  //获取分类
  getCategory: function(){
    var that = this;
    var params = [];
    var tempList = [];

    category.getList(params).then(function (result) {
      if (result.code == 200) {
        tempList = that.data.datalist.concat(result.data);
        that.setData({
          datalist: tempList
        })
      } else {
        that.setData({
          datalist: []
        })
      }
    });
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