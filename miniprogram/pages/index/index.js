const app = getApp();

Page({
  data: {
    types: [
      {
        name: '服务型',
        desc: '适合先卖能力，快速拿到第一笔真实收入。'
      },
      {
        name: '内容型',
        desc: '适合靠表达建立信任，再完成后续变现。'
      },
      {
        name: '产品型',
        desc: '适合把经验沉淀成标准化、可重复卖的产品。'
      },
      {
        name: '混合型',
        desc: '适合先服务、再内容化、再产品化的现实路径。'
      }
    ]
  },

  onShow() {
    app.track('home_view');
  },

  startQuiz() {
    const session = {
      startedAt: Date.now(),
      answers: []
    };
    app.globalData.quizSession = session;
    wx.setStorageSync('quizSession', session);
    app.track('quiz_start_click');
    wx.navigateTo({ url: '/pages/quiz/quiz' });
  },

  goPreview() {
    app.track('home_preview_click');
    wx.pageScrollTo({
      selector: '#type-preview',
      duration: 280
    });
  }
});
