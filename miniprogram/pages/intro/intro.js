// pages/intro/intro.js
import introCardList from "../../datas/introDatas.js"

var app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
      swiperPicture: [{
        name: 'pic1',
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/intro_swiper/swiper1.jpg'
      },{
        name: 'pic2',
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/intro_swiper/swiper2.jpg'
      },{
        name: 'pic3',
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/intro_swiper/swiper3.jpg'
      },{
        name: 'pic4',
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/intro_swiper/swiper4.jpg'
      },{
        name: 'pic5',
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/intro_swiper/swiper5.jpg'
      },{
        name: 'pic6',
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/intro_swiper/swiper6.jpg'
      },{
        name: 'pic7',
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/intro_swiper/swiper7.jpg'
      }],
      introCards: [],
      flag: [false, false, false], //后三张卡片是否左滑
      detailFlag: [false, false, false, false, false, false], //是否显示详情（由全局变量传入）
      detailExtend: [],
      screenWidth: wx.getSystemInfoSync().screenWidth,
      currentIndex: 0
    },

    showDetail: function (e) {
      let that = this
      console.log('用户点击了卡片' + e.currentTarget.dataset.index)
      let index = e.currentTarget.dataset.index
      that.data.currentIndex = index

      let temp = 'detailFlag[' + index + ']'
      that.setData({
        [temp]: true
      })
      console.log(that.data.detailFlag)

      //展开动画
      var animation = wx.createAnimation({
        delay: 100,
        duration: 400,
        timingFunction: 'ease'
      })
      animation.left(0.1*this.data.screenWidth).width(0.8*this.data.screenWidth).step()
      let temp2 = 'detailExtend[' + index + ']'
      setTimeout(() => {
        this.setData({
          [temp2]: animation.export()
        })
      }, 20);

      //使背景图片、文字显示
      
      this.detail[this.data.currentIndex].unhideBg()
      console.log('已执行展开动画')

    },

    closeDetail: function () {
      let that = this
      let temp = 'detailFlag[' + that.data.currentIndex + ']'
      that.setData({
        [temp]: false
      })
      console.log('关闭详情')
      var animation = wx.createAnimation({
        delay: 0,
        duration: 0
      })
      animation.width(0).left(0.5*that.data.screenWidth).step()
      let temp2 = 'detailExtend[' + that.data.currentIndex + ']'
      that.setData({
        [temp2]: animation.export()
      })

      this.detail[that.data.currentIndex].hideBg()
    },

    //跳转到“龙泉简介”页面
    viewBriefIntro: function () {
      wx.navigateTo({
        url: '../../pages/briefIntro/briefIntro'
      })
    },

    //跳转到“地理位置”页面
    viewMap: function () {
        wx.navigateTo({
          url: '../../pages/map/map',
        })
    },

    //跳转到“历史文化”页面
    viewHistory: function () {
      wx.navigateTo({
        url: '../../pages/history/history',
      })
    },

    //切换到“游玩攻略”页面
    viewGuide: function () {
      wx.switchTab({
        url: '../../pages/guide/index',
      })
    },

    //监听景区简介列表滚动
    scrollList: function (e) {
      let that = this;
      if (!that.data.flag[0] || !that.data.flag[1] || !that.data.flag[2]) {
        if (!that.data.flag[0] && e.detail.scrollTop > 120) {
          console.log('第四张左滑')
          that.selectAllComponents("#introCard")[3].showListCard('3')
          let temp = 'flag[' + 0 + ']'
          that.setData({
            [temp]: true
          })
        }
        if (!that.data.flag[1] && e.detail.scrollTop > 256) {
          console.log('第五张左滑')
          that.selectAllComponents("#introCard")[4].showListCard('4')
          let temp = 'flag[' + 1 + ']'
          that.setData({
            [temp]: true
          })
        }
        if (!that.data.flag[2] && e.detail.scrollTop > 392) {
          console.log('第六张左滑')
          that.selectAllComponents("#introCard")[5].showListCard('5')
          let temp = 'flag[' + 2 + ']'
          that.setData({
            [temp]: true
          })
        }
      }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.setData({
        introCards: introCardList.introCards
      })
      console.log(this.data.introCards)
      
      //先“播放”一次详情的动画
      var animation = wx.createAnimation({
        delay: 0,
        timingFunction: 'step-start',
        duration: 0
      })
      animation.left(0.5*this.data.screenWidth).width(0).step()

      let ani = animation.export()
      let temp0 = 'detailExtend[' + 0 + ']'
      let temp1 = 'detailExtend[' + 1 + ']'
      let temp2 = 'detailExtend[' + 2 + ']'
      let temp3 = 'detailExtend[' + 3 + ']'
      let temp4 = 'detailExtend[' + 4 + ']'
      let temp5 = 'detailExtend[' + 5 + ']'
      this.setData({
        [temp0]: ani,
        [temp1]: ani,
        [temp2]: ani,
        [temp3]: ani,
        [temp4]: ani,
        [temp5]: ani
      })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      this.detail = this.selectAllComponents('#detail')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      wx.getImageInfo({
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/user/user_card.jpg',
        complete (res) {}
      })
      wx.getImageInfo({
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/xijie.jpg',
        complete (res) {}
      })
      wx.getImageInfo({
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/baoxi.jpg',
        complete (res) {}
      })
      wx.getImageInfo({
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/zheda1.jpg',
        complete (res) {}
      })
      wx.getImageInfo({
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/qingci6.jpg',
        complete (res) {}
      })
      wx.getImageInfo({
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/mushroom5.jpg',
        complete (res) {}
      })
      wx.getImageInfo({
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/si1.jpg',
        complete (res) {}
      })
      wx.getImageInfo({
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/index1.jpg',
        complete (res) {}
      })
      wx.getImageInfo({
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/briefIntro/briefIntroBg.jpg',
        complete (res) {}
      })
      wx.getImageInfo({
        src: 'cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/history/bg_0.jpg',
        complete (res) {}
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