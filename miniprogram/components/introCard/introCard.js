// components/introCard/introCard.js
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
                var animation = wx.createAnimation({
                    delay: 0,
                    timingFunction: 'ease-out',
                    duration: 600
                  })
                  animation.left(0).step()
                  that.setData({
                      showCard: animation.export()
                  })
            }
        },

        showDetail: function () {
            if (!this.data.flag) {
                this.setData({
                    flag: true
                })
                console.log('显示弹框')
                var animation = wx.createAnimation({
                  duration: 300,
                  timingFunction: "ease-out",
                  delay: 200
                })
                animation.opacity(0.94).left(0.1*this.data.screenWidth).width(0.8*this.data.screenWidth).step();
                this.setData({
                    showPopup: animation.export()
                })
                setTimeout(() => {
                    this.setData({
                        flagDetail: true
                    })
                }, 500);
            }
            
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

        checkGuide: function () {
            console.log('前往旅游攻略页面' + this.properties.text)
            switch (this.properties.text) {
                case '0':
                    wx.navigateTo({
                      url: '../../pages/xijie/index',
                    })
                    break;
                case '1':
                    wx.navigateTo({
                      url: '../../pages/baoxi/index',
                    })
                    break;
                case '2':
                    wx.navigateTo({
                      url: '../../pages/zheda/index',
                    })
                    break;
                case '3':
                    wx.navigateTo({
                      url: '../../pages/qingci_museum/index',
                    })
                    break;
                case '4':
                    wx.navigateTo({
                      url: '../../pages/mushroom_index/index',
                    })
                    break;
                case '5':
                    wx.navigateTo({
                      url: '../../pages/qipanshan/index',
                    })
                    break;
            }
        },
    },

    pageLifetimes: {
        show: function () {
            let that = this;
            setTimeout(() => {  //鬼知道为什么这里加了setTimeout()真机上才正常播放 눈_눈
                if (that.properties.text < 3) {
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
            }, 200);

        },

    }
})
