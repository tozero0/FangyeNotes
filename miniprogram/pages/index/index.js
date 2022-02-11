// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '点击进入小程序',
    // startY: 0,     //滑动开始y轴位置
    // lastY: 0,     //滑动结束y轴位置
    moveDistance: 0,
    screenHeight: wx.getSystemInfoSync().screenHeight,
    screenWidth: wx.getSystemInfoSync().screenWidth,
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    progressRemain: 8,
  },

  onLoad() {
    this.setData({
      moveDistance: 0
    })
  },

  // //监听用户向下滑动动作
  // handletouchmove (event) {
  //   let currentY = event.changedTouches[0].clientY;
  //   let that = this;
  //   if (currentY > this.data.startY) return;
  //   this.setData({
  //     moveDistance: this.data.moveDistance > -100 ? (currentY - that.data.startY)*0.6 : -100 //*号后的数字是滑动灵敏度
  //   })
  //   console.log(this.data.moveDistance)
  // },
  // //滑动开始事件
  // handletouchstart: function (event) {
  //   this.data.startY = event.changedTouches[0].clientY
  // },
  // //触摸结束
  // handletouchend: function (event) {
  //   if (this.data.moveDistance <= -50) {
  //     console.log('进入小程序')
  //     this.enterProgram()
  //   }
  //   this.setData({
  //     moveDistance: 0
  //   })
  // },

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
    wx.switchTab({
      url: '../../pages/intro/intro',
    })
  },

  /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      let that = this
    
      setTimeout(function() {
        that.reloadCard()
      }, 200);
    },
})
