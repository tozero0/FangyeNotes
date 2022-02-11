// pages/help/help.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        flag: false,    //页面是否显示
        progressRemain: 3,
    },

    imageLoad: function () {
        if (!--this.data.progressRemain) {
            wx.hideLoading({
              success: (res) => {
                  console.log('页面图片加载完毕')
                  this.setData({
                      flag: true
                  })
              },
            })
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showLoading({
            title: '加载中',
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