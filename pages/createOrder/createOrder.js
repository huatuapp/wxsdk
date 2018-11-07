// pages/createOrder/createOrder.js
import createOrder from '../../wxsdk/createOrder.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cid:'',
    source_type:'',
    createOrder:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ createOrder:false })
  },
  //点击下单
  createOrder: function (e) {
    var data = {};
    var that = this;
    data.cid = e.currentTarget.dataset.cid;//need 课程ID  Required
    data.source_type = e.currentTarget.dataset.source;//need 课程来源  Required
    var returndata = createOrder.createOrder(data).then(
      function (result) {
        if (result.code == 200){
          that.createOrderSuccess(result);
        }else{
          that.createOrderError(result);
        }
        that.setData({ createOrder: result })
      }
    );
  },
  //下订单成功处理
  createOrderSuccess: function (e){
    wx.showToast({
      title: e.message,
      image: '/images/success.png',
      duration: 3000
    });

  },
  //下订单失败处理
  createOrderError: function (e) {
    wx.showToast({
      title: e.message,
      image: '/images/error.png',
      duration: 3000
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