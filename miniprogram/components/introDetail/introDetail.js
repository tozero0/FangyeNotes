// components/introDetail/introDetail.js
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
        flag: false,    //该组件是否显示
        showPopup: {},  //显示弹框的动画
        screenWidth: wx.getSystemInfoSync().screenWidth,
        bgFlag: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
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
        unhideBg: function () {
            setTimeout(() => {
                this.setData({
                    bgFlag: true
                })
            }, 480);
        },
        hideBg: function () {
            this.setData({
                bgFlag: false
            })
        }
    }
})
