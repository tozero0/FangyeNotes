// pages/user/user.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
        screenWidth: wx.getSystemInfoSync().screenWidth
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

    //跳转到使用帮助页面
    handleHelp: function () {
      wx.navigateTo({
        url: '../../pages/help/help',
      })
    },

    //跳转到常用链接页面
    handleLink: function () {
      wx.navigateTo({
        url: '../../pages/link/link',
      })
    },

    getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  handleAbout: function (){
    wx.navigateTo({
      url: '../../pages/about/about',
    })
  },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        if (wx.getUserProfile) {
          this.setData({
            canIUseGetUserProfile: true
          })
        }
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