// pages/dropList/dropList.js
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getList({ detail }) {
    this.setData({detail})
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