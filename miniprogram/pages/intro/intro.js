// pages/intro/intro.js
import introCardList from "../../datas/introDatas.js"
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
      flag: [false, false, false] //后三张卡片是否左滑
    },

    //跳转到“龙泉简介”页面
    viewBriefIntro: function () {
      wx.navigateTo({
        url: '../../pages/briefIntro/briefIntro',
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