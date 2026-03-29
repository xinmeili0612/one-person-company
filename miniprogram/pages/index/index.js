const app = getApp();

Page({
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
  }
});
