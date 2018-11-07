// pages/areaList/areaList.js
const app = getApp()
import areaList from '../../wxsdk/areaList.js';
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
    this.areaList();
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

  //区域列表
  areaList: function(){
    var that = this;
    var data = [];
    var returndata = areaList.areaList(data).then(
      function (result) {
        if (result.code == 200) {
          that.setData({
            list: result.data
          })
        }else{
          that.setData({
            list: []
          })
        }
      }
    );
  },
})
