// components/introCard/introCard.js
var app = getApp();

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item: {
            type: Object,
            value: {}
        },
        text: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        flag: false,    //是否查看详情
        flagDetail: false,  //是否显示详情内容（为了使动画更自然）
        showPopup: {},  //显示弹框的动画
        screenWidth: wx.getSystemInfoSync().screenWidth,
        showCard: {},   //卡片左滑动画
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //滑动到相应位置，卡片左滑。由页面触发
        showListCard: function (e) {
            let that = this
            if (that.properties.text == e) {
                setTimeout (() => {
                    app.globalData.showCardFlag[that.properties.text] = true;
                    var animation = wx.createAnimation({
                        delay: 0,
                        timingFunction: 'ease',
                        duration: 600
                      })
                      animation.left(0).step()
                      that.setData({
                          showCard: animation.export()
                      })
                }, 200)
                
            }
        },

        //点击卡片后显示详情
        showDetail: function () {

            // if (!this.data.flag) {
            //     this.setData({
            //         flag: true
            //     })
            //     console.log('显示弹框')
            //     var animation = wx.createAnimation({
            //       duration: 300,
            //       timingFunction: "ease",
            //       delay: 200
            //     })
            //     animation.opacity(0.94).left(0.1*this.data.screenWidth).width(0.8*this.data.screenWidth).step();
            //     this.setData({
            //         showPopup: animation.export()
            //     })
            //     setTimeout(() => {
            //         this.setData({
            //             flagDetail: true
            //         })
            //     }, 500);
            // }
            
        },
        closeDetail: function () {
            this.setData({
                flag: false,
                flagDetail: false
            })
            var animation = wx.createAnimation({
              delay: 0,
              timingFunction: 'step-start'
            })
            animation.opacity(0).width(0).left(0.5*this.data.screenWidth).step()
            this.setData({
                showPopup: animation.export()
            })
        },

        
    },

    lifetimes: {
        ready: function () {
            let that = this;
            setTimeout(() => {
                if (that.properties.text < 3 && !app.globalData.showCardFlag[that.properties.text]) {
                    app.globalData.showCardFlag[that.properties.text] = true
                    var animation = wx.createAnimation({
                        delay: 200 + 100*that.properties.text,
                        timingFunction: 'ease-out',
                        duration: 600
                      })
                      animation.left(0).step()
                      that.setData({
                          showCard: animation.export()
                      })
                }
            }, 500);
            
            //以下代码的作用是使动画在ios系统下能正常播放
            if (!app.globalData.showCardFlag[this.properties.text]) {
                var animationPre = wx.createAnimation({
                    delay: 0,
                  })
                  animationPre.left(this.data.screenWidth).step()
                  this.setData({
                      showCard: animationPre
                  })
            } else {
                var animationPre = wx.createAnimation({
                    delay: 0,
                    timingFunction: 'step-end'
                  })
                  animationPre.left(0).step()
                  this.setData({
                      showCard: animationPre
                  })
            }
        }
    },

    pageLifetimes: {
        show: function () {
            
        },

    }
})
