wx-Page({

  /**
   * 页面的初始数据
   */
  data: {
    position_list:[
      {
        id:1,
        name:"西街",
        icon:"cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/xijie.jpg",
        url:"/pages/xijie/index"
      },
      {
        id:2,
        name:"宝溪",
        icon:"cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/baoxi.jpg",
        url:"/pages/baoxi/index"
      },
      {
        id:3,
        name:"浙大旧址公园",
        icon:"cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/zheda1.jpg",
        url:"/pages/zheda/index"
      },
      {
        id:4,
        name:"龙泉青瓷博物馆",
        icon:"cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/qingci6.jpg",
        url:"/pages/qingci_museum/index"
      },
      {
        id:5,
        name:"龙泉香菇博物馆",
        icon:"cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/mushroom5.jpg",
        url:"/pages/mushroom_index/index"
      },
      {
        id:6,
        name:"崇仁寺",
        icon:"cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/si1.jpg",
        url:"/pages/qipanshan/index"
      }
    ],
    pic :[
      {
        index:1,
        url:"cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/index1.jpg"
      },
      {
        index:2,
        url:"cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/index2.jpg"
      },
      {
        index:3,
        url:"cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/index3.jpg"
      },
      {
        index:4,
        url:"cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/index4.jpg"
      },
      {
        index:5,
        url:"cloud://cloud1-7ggr5g4zf5b62344.636c-cloud1-7ggr5g4zf5b62344-1309374777/guide/index5.jpg"
      }

    ]
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
    
  },
  handleImgTap: function(e){
      const index=e.currentTarget.dataset.index;
      // console.log(this.data.position_list[index].url)
      wx.navigateTo({
        url: this.data.position_list[index-1].url
      })
  }
})