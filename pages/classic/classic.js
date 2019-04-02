// pages/classic/classic.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    like: false,
    count: 88,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onLike(event) {
    console.log('click like:', event);
  }
});
