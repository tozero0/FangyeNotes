// pages/link/link.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        longquanGov: 'http://www.longquan.gov.cn/',
        lishuiGov: 'http://www.lishui.gov.cn/'
    },

    //复制龙泉政府网址
    copyLongquan: function () {
        wx.setClipboardData({
            data: this.data.longquanGov,
            success: function (res) {
                wx.getClipboardData({
                  success: (option) => {
                      console.log('已复制龙泉政府网址')
                  },
                })
            }
          })
    },

    //复制丽水政府网址
    copyLishui: function () {
        wx.setClipboardData({
            data: this.data.lishuiGov,
            success: function (res) {
                wx.getClipboardData({
                  success: (option) => {
                      console.log('已复制丽水政府网址')
                  },
                })
            }
          })
    },

    //保存掌上龙泉二维码
    saveQR1: function () {
        wx.showActionSheet({
            itemList: ['保存到相册'],
            success (res) {
                wx.showLoading({
                  title: '保存中',
                })
                wx.saveImageToPhotosAlbum({
                    filePath: '/images/govQRCode.png',
                    success (res) {
                        console.log('保存至相册')
                        wx.hideLoading({
                          success: (res) => {},
                        })
                        wx.showToast({
                          title: '保存成功',
                          icon: 'success'
                        })
                    },
                    fail (res) {
                        wx.hideLoading({
                          success: (res) => {},
                        })
                        wx.showToast({
                          title: '保存失败',
                          icon: 'none'
                        })
                    }
                  })
            }
        })
    },

    //保存芳野札记二维码
    saveQR2: function () {
        wx.showActionSheet({
          itemList: ['保存到相册', 
        //  '前往“芳野札记”公众号'
        ],
          success (res) {
              if (!res.tapIndex) {
                  wx.showLoading({
                    title: '保存中',
                  })
                  wx.saveImageToPhotosAlbum({
                    filePath: '/images/fangyeQRCode.png',
                    success (res) {
                        console.log('保存至相册')
                        wx.hideLoading({
                          success: (res) => {},
                        })
                        wx.showToast({
                            title: '保存成功',
                            icon: 'success'
                          })
                    },
                    fail (res) {
                        wx.hideLoading({
                          success: (res) => {},
                        })
                        wx.showToast({
                          title: '保存失败',
                          icon: 'none'
                        })
                    }
                  })
              } else {
                  console.log('跳转到“芳野札记”公众号')
              }
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