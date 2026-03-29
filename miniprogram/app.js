App({
  globalData: {
    quizSession: null,
    result: null,
    leadForm: null,
    events: []
  },

  onLaunch() {
    const logs = wx.getStorageSync('eventLogs') || [];
    this.globalData.events = logs;
    this.track('app_launch');
  },

  track(event, payload = {}) {
    const logs = wx.getStorageSync('eventLogs') || [];
    const item = {
      event,
      payload,
      ts: Date.now()
    };
    logs.push(item);
    wx.setStorageSync('eventLogs', logs);
    this.globalData.events = logs;
  }
});
