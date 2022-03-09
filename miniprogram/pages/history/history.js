// pages/history/history.js
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        startY: 0,     //滑动开始y轴位置
        lastY: 0,     //滑动结束y轴位置
        index: 0,   //值为0, 1, 2, 3分别表示当前显示初始画面、第一、二、三个画面
        touchendFlag: true, //检测到用户手指放开时，设为true，检测到上下滑动时设为false
        bgimg: [],
        textBody: [],
        screenHeight: wx.getSystemInfoSync().screenHeight,
        //loadFlag: false,    //页面是否显示
    },

    //滑动开始事件
    handletouchstart: function (event) {
        this.data.startY = event.changedTouches[0].clientY
    },

    //监听蒙版滑动
    handletouchmove: function (event) {
        let currentY = event.changedTouches[0].clientY
        if (currentY <= this.data.startY - 40) {
            console.log("向上滑动")
            if (this.data.touchendFlag) {
                this.swipeUp()
            }
            this.setData({
                touchendFlag: false
            })
        }
        if (currentY >= this.data.startY + 40) {
            console.log("向下滑动")
            if (this.data.touchendFlag) {
                this.swipeDown()
            }
            this.setData({
                touchendFlag: false
            })
        }
    },

    swipeUp: function () {
        if (this.data.index < 3) {
            console.log('触发向上滑动动画')
            this.setData({
                index: this.data.index + 1
            })
            console.log(this.data.index)
            var bgAnimation = wx.createAnimation({
                delay: 100,
                timingFunction: 'ease',
                duration: 800,
            })

            for (let i = 0; i < 4; i++) {
                var temp = "bgimg[" + i + "]"
                if (i == this.data.index) {
                    bgAnimation.opacity(1).step()
                    this.setData({
                        [temp]: bgAnimation.export()
                    })
                } else {
                    bgAnimation.opacity(0).step()
                    this.setData({
                        [temp]: bgAnimation.export()
                    })
                }
            }

            var animationText = wx.createAnimation({
              delay: 200,
              timingFunction: 'ease',
              duration: 800
            })

            if (this.data.index == 2) {
                animationText.top(-this.data.screenHeight).step()
                var temp2 = "textBody[" + 1 + "]"
                this.setData({
                    [temp2]: animationText.export()
                })
                animationText.top(0.24*this.data.screenHeight).step()
                temp2 = "textBody[" + 2 + "]"
                this.setData({
                    [temp2]: animationText.export()
                })
            } else if (this.data.index == 1) {
                animationText.top(0.25*this.data.screenHeight).step()
                var temp2 = "textBody[" + 1 + "]"
                this.setData({
                    [temp2]: animationText.export()
                })
            } else if (this.data.index == 3) {
                animationText.top(-this.data.screenHeight).step()
                var temp2 = "textBody[" + 2 + "]"
                this.setData({
                    [temp2]: animationText.export()
                })
                animationText.top(0.25*this.data.screenHeight).step()
                var temp2 = "textBody[" + 3 + "]"
                this.setData({
                    [temp2]: animationText.export()
                })
            }
        }
    },

    swipeDown: function () {
        if (this.data.index > 0) {
            console.log('触发向下滑动动画')
            this.setData({
                index: this.data.index - 1
            })
            console.log(this.data.index)
            var bgAnimation = wx.createAnimation({
                delay: 100,
                timingFunction: 'ease',
                duration: 800,
            })

            for (let i = 0; i < 4; i++) {
                var temp = "bgimg[" + i + "]"
                if (i == this.data.index) {
                    bgAnimation.opacity(1).step()
                    this.setData({
                        [temp]: bgAnimation.export()
                    })
                } else {
                    bgAnimation.opacity(0).step()
                    this.setData({
                        [temp]: bgAnimation.export()
                    })
                }
                console.log(this.data.bgimg[this.data.index])
            }

            var animationText = wx.createAnimation({
              delay: 200,
              timingFunction: 'ease',
              duration: 800
            })

            if (this.data.index == 1) {
                animationText.top(1.15*this.data.screenHeight).step()
                var temp2 = "textBody[" + 2 + "]"
                this.setData({
                    [temp2]: animationText.export()
                })
            } else if (this.data.index == 2) {
                animationText.top(-this.data.screenHeight).step()
                var temp2 = "textBody[" + 1 + "]"
                this.setData({
                    [temp2]: animationText.export()
                })
                animationText.top(1.2*this.data.screenHeight).step()
                var temp2 = "textBody[" + 3 + "]"
                this.setData({
                    [temp2]: animationText.export()
                }) 
            }

            var animationText = wx.createAnimation({
                delay: 200,
                timingFunction: 'ease',
                duration: 800
              })
  
              if (this.data.index == 1) {
                  animationText.top(0.25*this.data.screenHeight).step()
                  var temp2 = "textBody[" + 1 + "]"
                  this.setData({
                      [temp2]: animationText.export()
                  }) 
              } else if (!this.data.index) {
                  animationText.top(1.15*this.screenHeight).step()
                  var temp2 = "textBody[" + 1 + "]"
                  this.setData({
                    [temp2]: animationText.export()
                  })
              } else if (this.data.index == 2) {
                animationText.top(0.24*this.data.screenHeight).step()
                var temp2 = "textBody[" + 2 + "]"
                this.setData({
                  [temp2]: animationText.export()
                })
              }

            
        }
        
    },

    //监听用户放开手指
    handletouchend: function (event) {
        console.log('用户放开了手指')
        this.setData({
            touchendFlag: true
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // let that = this;
        // wx.showLoading({
        //   title: '加载中',
        //   success (res) {
        //     wx.getImageInfo({
        //         src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/history/bg_0.jpg',
        //         success (res) {
        //             wx.hideLoading({
        //               success: (res) => {
        //                   that.setData({
        //                       loadFlag: true
        //                   })
        //               },
        //             })
        //         }
        //       })
        //   }
        // })
        
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