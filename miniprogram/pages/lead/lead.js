const app = getApp();

Page({
  data: {
    nickname: '',
    phone: '',
    wechatId: '',
    painPoint: ''
  },

  onShow() {
    app.track('lead_view');
  },

  onInput(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({ [field]: e.detail.value });
  },

  submitLead() {
    const { nickname, phone, wechatId, painPoint } = this.data;
    if (!phone && !wechatId) {
      wx.showToast({ title: '手机号和微信号至少填一个', icon: 'none' });
      return;
    }

    const lead = {
      nickname,
      phone,
      wechatId,
      painPoint,
      result: app.globalData.result?.winner || wx.getStorageSync('quizResult')?.winner || '',
      createdAt: Date.now()
    };

    const leads = wx.getStorageSync('leads') || [];
    leads.push(lead);
    wx.setStorageSync('leads', leads);
    app.globalData.leadForm = lead;
    app.track('lead_submit', { hasPhone: !!phone, hasWechatId: !!wechatId, result: lead.result });

    wx.showModal({
      title: '提交成功',
      content: '我们已收到你的信息，后续可用于详细方案转化。',
      showCancel: false,
      success: () => wx.redirectTo({ url: '/pages/admin/admin' })
    });
  }
});
