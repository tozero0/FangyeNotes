// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'cloud1-7ggr5g4zf5b62344',
        traceUser: true,
      })
    }
  },
  globalData: {
    userInfo: {},
    enterFlag: false,
    showCardFlag: [false, false, false, false, false, false],
    detailFlag: [false, false, false, false, false, false], //是否显示“详情”
    logged: false,  //是否授权登录
    nickName: '',
    profile: '',
  }
})
