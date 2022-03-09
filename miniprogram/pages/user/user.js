// pages/user/user.js
const app = getApp()
const db = wx.cloud.database({
  env: 'cloud1-7ggr5g4zf5b62344'
})

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
        screenWidth: wx.getSystemInfoSync().screenWidth,
        logged: false,  //是否登录
        nickName: '',
        profile: ''
      },

    loginApp: function() {
      let that = this
      if (!app.globalData.logged) {
        wx.getUserProfile({
          desc: '用于完善用户资料',
          success: res => {
            wx.showLoading({
              title: '登录中',
              mask: true
            })
            that.setData({
              nickName: res.userInfo.nickName,
              profile: res.userInfo.avatarUrl,
              logged: true
            })
            app.globalData.userInfo = res.userInfo
            console.log(app.globalData.openid)
            //向数据库添加信息
            db.collection('users').add({
              data: {
                openid: app.globalData.openid,
                nickName: res.userInfo.nickName,
                profile: res.userInfo.avatarUrl
              },
              success: function(res_) {
                console.log('已向数据库添加用户' + res.userInfo.nickName + '的信息')
                wx.hideLoading({
                  success: (res) => {},
                })
              }
            })
          },
          fail: function(res) {
            console.log('取消登录')
            wx.showToast({
              title: '取消登录',
              icon: 'none'
            })
          }
        })
      }
    },

    //获取“意见反馈”消息
    handleContact: function (e) {
      console.log(e)
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
      if (app.globalData.logged) {
        this.setData({
          nickName: app.globalData.nickName,
          profile: app.globalData.profile
        })
      }
        wx.getImageInfo({
          src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/help/help_1.png',
          complete (res) {}
        })
        wx.getImageInfo({
          src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/help/help_2.png',
          complete (res) {}
        })
        wx.getImageInfo({
          src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/help/help_3.png',
          complete (res) {}
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
      this.setData({
        logged: app.globalData.logged
      })
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