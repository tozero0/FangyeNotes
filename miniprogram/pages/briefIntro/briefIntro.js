// pages/briefIntro/briefIntro.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swipe_up: {},   //详细介绍动画
        topPara: {},    //简介文字动画
        mask: {},   //蒙版透明度变化动画
        logoY: {},  //logo位置动画
        windowHeight: wx.getSystemInfoSync().windowHeight,
        startY: 0,     //滑动开始y轴位置
        lastY: 0,     //滑动结束y轴位置
        moveDistance: 0,
        flag: false,    //“更多介绍”是否显示
        loadFlag: false,    //背景图片是否加载完毕
    },

    //监听背景加载完成
    bgLoad: function () {
        wx.hideLoading({
          success: (res) => {
              console.log('背景图片加载完毕')
              this.setData({
                  loadFlag: true
              })
          },
        })
    },

    //“更多介绍”显示动画
    handleSwipeUp: function () {
        var animation1 = wx.createAnimation({
          duration: 500,
          timingFunction: 'ease',
        })

        animation1.top(0.2*this.data.windowHeight).step();

        this.setData({
            swipe_up: animation1.export()
        })
        console.log('上滑' + this.data.swipe_up)

        var animation2 = wx.createAnimation({
            duration: 800,
            timingFunction: 'ease',
        })
        animation2.opacity(0).step();

        this.setData({
            topPara: animation2.export()
        })

        var animation3 = wx.createAnimation({
            delay: 200,
            timingFunction: 'ease',
        })
        animation3.opacity(0.2).step();
  
        this.setData({
            mask: animation3.export()
        })
        console.log(this.data.mask)

        var animation4 = wx.createAnimation({
          delay: 0,
          timingFunction: 'ease',
          duration: 600
        })
        animation4.top(50).step()

        this.setData({
            logoY: animation4.export()
        })
    },

    //“更多介绍”隐藏动画
    handleSwipeDown: function () {
        var animation1 = wx.createAnimation({
            duration: 800,
            timingFunction: 'ease',
        })
        

        animation1.top(this.data.windowHeight).step();

        this.setData({
            swipe_up: animation1.export()
        })

        console.log('下滑' + this.data.swipe_up)

        var animation2 = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease-in',
        })
        animation2.opacity(1).step();

        this.setData({
            topPara: animation2.export()
        })

        var animation3 = wx.createAnimation({
          delay: 200,
          timingFunction: 'ease',
        })
        animation3.opacity(0).step();

        this.setData({
            mask: animation3.export()
        })

        var animation4 = wx.createAnimation({
            delay: 0,
            timingFunction: 'ease',
            duration: 600
          })
          animation4.top(100).step()
  
          this.setData({
              logoY: animation4.export()
          })
    },

    //滑动开始事件
    handletouchstart: function (event) {
        this.data.startY = event.changedTouches[0].clientY
    },

    //监听蒙版滑动
    handletouchmove: function (event) {
        let currentY = event.changedTouches[0].clientY
        if (currentY <= this.data.startY - 10) {
            this.setData({
              showSearch: false
            })
            console.log("向上滑动")
            if (!this.data.flag) {
                this.handleSwipeUp();
                this.setData({
                    flag: true
                })
            }
        }
        if (currentY >= this.data.startY + 10) {
            this.setData({
              showSearch: false
            })
            console.log("向下滑动")
            if (this.data.flag) {
                this.handleSwipeDown();
                this.setData({
                    flag: false
                })
            }
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
        var animation = wx.createAnimation({
          delay: 200,
          timingFunction: 'ease-out'
        })
        animation.opacity(0).step()
        this.setData({
            mask: animation.export()
        })
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