// pages/map/map.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        locationLatitude: 28.0743,
        locationLongitude: 119.14163,
        longquanMarkers: [{
            id: 1,
            latitude: 28.0743,
            longitude: 119.14163,
            name: '龙泉'
        }],
        mapLoadFlag: false,  //监听地图是否加载完毕
        trafficFlag: true,
        satelliteFlag: false
    },

    //响应switch组件
    changeTraffic: function (e) {
        this.setData({
            trafficFlag: e.detail.value
        })
        console.log('交通显示：' + this.data.trafficFlag)
    },
    changeSatellite: function (e) {
        this.setData({
            satelliteFlag: e.detail.value
        })
        console.log('卫星显示：' + this.data.satelliteFlag)
    },

    //未使用
    mapLoad: function () {
        wx.hideLoading({
          success: (res) => {
              console.log('地图加载完毕')
              this.setData({
                  mapLoadFlag: true
              })
          },
        })
    },

    moveToLongquan: function () {
        this.setData({
            locationLatitude: 28.0743,
            locationLongitude: 119.14163
        })
    },

    moveToLocation: function () {
        this.MapContext.moveToLocation({
            success: function (res){
                console.log("已移动到用户位置")
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // wx.showLoading({
        //   title: '加载中',
        //   mask: true
        // })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.MapContext = wx.createMapContext('longquanLocation')
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