// index.js
// 获取应用实例
const app = getApp()
const db = wx.cloud.database({
  env: 'cloud1-7ggr5g4zf5b62344'
})

Page({
  data: {
    motto: '点击进入小程序',
    // startY: 0,     //滑动开始y轴位置
    // lastY: 0,     //滑动结束y轴位置
    moveDistance: 0,
    screenHeight: wx.getSystemInfoSync().screenHeight,
    screenWidth: wx.getSystemInfoSync().screenWidth,
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    progressRemain: 9,
    logged: false,  //是否已登录
  },

  onLoad() {
    this.setData({
      moveDistance: 0
    })
    let that = this
    var openid = ''
    wx.cloud.callFunction({
      name: 'loginApp',
      complete: res => {
        app.globalData.userInfo = res.result
        app.globalData.openid = res.result.openid
        openid = res.result.openid
        console.log('已获取用户openid：' + openid)
        db.collection('users').where({
          openid: openid
        }).get({
          success: function(res) {
            if (!res.data.length) {
              console.log('新用户，向数据库添加用户信息')
            } else {
              console.log('已查找到用户信息')
              that.data.logged = true
              app.globalData.logged = true
              app.globalData.nickName = res.data[0].nickName
              app.globalData.profile = res.data[0].profile
            }
            if (!--that.data.progressRemain) {
              that.enterProgram()
            }
          }
        })
      }
    })
  },

  //预先加载introCard图片
  reloadCard: function () {
    let that = this;
    wx.getImageInfo({
      src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/xijie.jpg',
      complete (res) {
        console.log('完成1')
        if (!--that.data.progressRemain) {
          that.enterProgram()
        }
      }
    })
    wx.getImageInfo({
      src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/baoxi.jpg',
      complete (res) {
        console.log('完成2')
        if (!--that.data.progressRemain) {
          that.enterProgram()
        }
      }
    })
    wx.getImageInfo({
      src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/zheda3.jpg',
      complete (res) {
        console.log('完成3')
        if (!--that.data.progressRemain) {
          that.enterProgram()
        }
      }
    })
    wx.getImageInfo({
      src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/qingci.jpg',
      complete (res) {
        console.log('完成4')
        if (!--that.data.progressRemain) {
          that.enterProgram()
        }
      }
    })
    wx.getImageInfo({
      src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/mushroom5.jpg',
      complete (res) {
        console.log('完成5')
        if (!--that.data.progressRemain) {
          that.enterProgram()
        }
      }
    })
    wx.getImageInfo({
      src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/si2.jpg',
      complete (res) {
        console.log('完成6')
        if (!--that.data.progressRemain) {
          that.enterProgram()
        }
      }
    })
    wx.getImageInfo({
      src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/intro_swiper/swiper1.jpg',
      complete (res) {
        console.log('完成7')
        if (!--that.data.progressRemain) {
          that.enterProgram()
        }
      }
    })
    wx.getImageInfo({
      src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/intro_swiper/swiper2.jpg',
      complete (res) {
        console.log('完成8')
        if (!--that.data.progressRemain) {
          that.enterProgram()
        }
      }
    })
  },

  //点击按钮进入小程序
  enterProgram: function () {
    if (!app.globalData.enterFlag) {
      wx.switchTab({
        url: '../../pages/intro/intro',
      })
    }
  },

  /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      let that = this
      setTimeout(function() {
        that.reloadCard()
      }, 200);
      setTimeout(function () {
        if (!app.globalData.enterFlag) {
          that.enterProgram()
        }
        console.log('备用事件')
      }, 6000)
    },

    onUnload: function () {
      app.globalData.enterFlag = true
    },
})
