// pages/myOrder/myOrder.js
import myOrder from '../../wxsdk/myOrder.js';
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
      },
      {
        'text': '全部',
        'active': false,
        'child': [{
            'id': -1,
            'text': '全部'
          }, {
            'id': 0,
            'text': '未付款'
          }, {
            'id': 1,
            'text': '已付款'
          },
          {
            'id': 2,
            'text': '已取消'
          },
          {
            'id': 3,
            'text': '已退款'
          }
        ],
        'type': -1
      },
    ], // 菜单选项列表
    source_type: 1, //订单来源类型 1 学习平台 2 腰果 Required
    paytype: -1, //订单类型，-1为全部，0为未付款,1为已付款,2为已取消，3为退款订单 ，4-支付中，6部分退款 Required
    page: 1, //页码，默认1
    limit: 5, //每页返回数据，默认10
    myOrder: [], //放置返回的数据
    message: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //onLoad调取数据
    this.getMyOrder();
  },
  //菜单点击  json文件里引入插件；wxml里书写<droplist>标签和方法--------------------------------------------------

  getList({ detail}) {
    var that=this;
    that.setData({
      page: 1,
      source_type: detail.searchParamId[0],
      paytype: detail.searchParamId[1]
    })
    //先清空原来的数据
    that.data.myOrder = [];
    //获取所需数据
    that.getMyOrder();
  },

  //菜单处理结束----------------------------------------------------------
  //获取我的订单 公用方法
  getMyOrder: function(data) {
    var that = this;
    var data = [];
    data.source_type = this.data.source_type;
    data.paytype = this.data.paytype;
    data.page = this.data.page;
    data.limit = this.data.limit;
    let myOrderList = [];
    var returndata = myOrder.myOrder(data).then(
      function(result) {
        //标题过长处理
        if (result.code == 200 && result.data != null) {
          that.setData({
            showmessage: false
          })
        }
        if (result.code != 200) {
          result.data = [];
          that.setData({
            showmessage: true,
            message: result.message
          })
        }
        myOrderList = that.data.myOrder.concat(result.data);
        that.setData({
          myOrder: myOrderList
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
      that.data.myOrder = [];
      that.getMyOrder();

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
    this.getMyOrder();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})