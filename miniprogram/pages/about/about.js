// pages/about/about.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        developerEmail: '1219879477@qq.com'
    },

    //跳转到隐私保护指引页面
    handlePrivacy: function (){
        wx.navigateTo({
          url: '../../pages/privacy/privacy',
        })
    },

    //跳转到芳野札记微信公众号
    handleOfficalAccount: function (){

        return;

        wx.showModal({
          title: '跳转到“芳野札记”公众号',
          success (res) {
              if (res.confirm) {
                  console.log('跳转到芳野札记公众号')
              }
          }
        })
    },

    //复制开发者邮箱
    copyEmail: function (){
        wx.setClipboardData({
          data: this.data.developerEmail,
          success: function (res) {
              wx.getClipboardData({
                success: (option) => {
                    console.log('已复制邮箱')
                },
              })
          }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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