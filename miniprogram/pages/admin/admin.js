Page({
  data: {
    leads: [],
    events: [],
    metrics: {}
  },

  onShow() {
    const leads = wx.getStorageSync('leads') || [];
    const events = wx.getStorageSync('eventLogs') || [];
    this.setData({
      leads,
      events: events.slice().reverse().slice(0, 20),
      metrics: this.buildMetrics(leads, events)
    });
  },

  buildMetrics(leads, events) {
    const count = (name) => events.filter(item => item.event === name).length;
    const completed = events.filter(item => item.event === 'quiz_complete');
    const typeDistribution = completed.reduce((acc, item) => {
      const winner = item.payload?.winner || 'unknown';
      acc[winner] = (acc[winner] || 0) + 1;
      return acc;
    }, {});

    return {
      homeViews: count('home_view'),
      starts: count('quiz_start_click'),
      completes: completed.length,
      leads: leads.length,
      typeDistribution: JSON.stringify(typeDistribution)
    };
  }
});
