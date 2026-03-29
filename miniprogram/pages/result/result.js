const app = getApp();

Page({
  data: {
    result: null,
    typeEntries: []
  },

  onShow() {
    const result = app.globalData.result || wx.getStorageSync('quizResult');
    if (!result) {
      wx.redirectTo({ url: '/pages/index/index' });
      return;
    }
    app.track('result_view', { winner: result.winner });
    this.setData({
      result,
      typeEntries: result.ranking.map(([key, score]) => ({ key, score }))
    });
  },

  goLead() {
    app.track('lead_cta_click', { winner: this.data.result.winner });
    wx.navigateTo({ url: '/pages/lead/lead' });
  },

  restart() {
    wx.redirectTo({ url: '/pages/index/index' });
  }
});
