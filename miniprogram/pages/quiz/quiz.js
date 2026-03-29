const app = getApp();
const { QUESTIONS, calculateResult } = require('../../utils/quiz');

Page({
  data: {
    questions: QUESTIONS,
    currentIndex: 0,
    selectedIndex: -1,
    answers: [],
    progress: 0
  },

  onLoad() {
    app.track('quiz_view');
    const session = wx.getStorageSync('quizSession') || { startedAt: Date.now(), answers: [] };
    this.setData({ answers: session.answers || [] });
  },

  selectOption(e) {
    const selectedIndex = Number(e.currentTarget.dataset.index);
    this.setData({ selectedIndex });
  },

  nextQuestion() {
    const { currentIndex, selectedIndex, answers, questions } = this.data;
    if (selectedIndex < 0) {
      wx.showToast({ title: '请选择一个选项', icon: 'none' });
      return;
    }

    const nextAnswers = [...answers];
    nextAnswers[currentIndex] = selectedIndex;

    app.track('quiz_answer', {
      questionId: questions[currentIndex].id,
      answerIndex: selectedIndex,
      questionIndex: currentIndex
    });

    if (currentIndex === questions.length - 1) {
      const result = calculateResult(nextAnswers);
      const session = {
        startedAt: app.globalData.quizSession?.startedAt || Date.now(),
        completedAt: Date.now(),
        answers: nextAnswers,
        result
      };
      app.globalData.quizSession = session;
      app.globalData.result = result;
      wx.setStorageSync('quizSession', session);
      wx.setStorageSync('quizResult', result);
      app.track('quiz_complete', {
        winner: result.winner,
        duration: session.completedAt - session.startedAt
      });
      wx.redirectTo({ url: '/pages/result/result' });
      return;
    }

    const nextIndex = currentIndex + 1;
    this.setData({
      answers: nextAnswers,
      currentIndex: nextIndex,
      selectedIndex: nextAnswers[nextIndex] ?? -1,
      progress: Math.round((nextIndex / questions.length) * 100)
    });
  },

  prevQuestion() {
    const { currentIndex, answers, questions } = this.data;
    if (currentIndex === 0) {
      wx.navigateBack();
      return;
    }
    const prevIndex = currentIndex - 1;
    this.setData({
      currentIndex: prevIndex,
      selectedIndex: answers[prevIndex] ?? -1,
      progress: Math.round((prevIndex / questions.length) * 100)
    });
    app.track('quiz_prev', { questionId: questions[prevIndex].id });
  }
});
