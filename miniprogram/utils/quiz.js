const TYPES = {
  service: {
    key: 'service',
    name: '服务型一人公司',
    intro: '你更适合从 服务型一人公司 开始。',
    why: '你更适合直接把已有能力卖给客户，而不是先花很长时间做内容或做产品。你的优势在于：解决问题、快速交付、先拿结果。',
    strengths: ['变现路径最短', '最容易拿到第一笔收入', '最适合从技能变现起步'],
    risks: ['容易被一对一交付绑住', '收入容易跟时间强绑定', '如果不做标准化，会越做越累'],
    plan: ['明确一个你最能解决的问题', '定义一个最小服务产品', '写清楚服务对象、价格、交付方式', '找 10 个潜在客户做访谈或试卖', '争取拿到第一个真实反馈或订单']
  },
  content: {
    key: 'content',
    name: '内容型一人公司',
    intro: '你更适合从 内容型一人公司 开始。',
    why: '你更擅长表达、建立信任、持续输出。你的一人公司更适合通过内容吸引人，再逐步完成变现。',
    strengths: ['更适合长期积累个人资产', '更容易建立信任和影响力', '后续能延展课程、社群、咨询、产品'],
    risks: ['前期容易只有流量没有收入', '很容易输出很多，却没有商业闭环', '如果不聚焦，很容易做成“内容很勤奋，业务没起色”'],
    plan: ['明确一个细分主题', '确定一个目标用户', '连续输出 7 条围绕同一问题的内容', '观察哪类内容最有反馈', '设计第一个低门槛变现入口']
  },
  product: {
    key: 'product',
    name: '产品型一人公司',
    intro: '你更适合从 产品型一人公司 开始。',
    why: '你更偏向标准化、系统化、可重复售卖的模式。你不想长期依赖一对一交付，更希望积累能放大的资产。',
    strengths: ['更容易脱离时间换钱', '长期天花板更高', '一旦打磨好，复用效率很高'],
    risks: ['很容易闭门造产品', '早期可能离收入较远', '如果没有真实需求验证，容易做无效产品'],
    plan: ['先找一个具体人群', '明确一个高频问题', '设计一个最小产品雏形', '先卖预售或做验证，而不是闷头开发', '用真实反馈决定是否继续投入']
  },
  hybrid: {
    key: 'hybrid',
    name: '混合型一人公司',
    intro: '你更适合走 混合型一人公司 路线。',
    why: '你既需要现实收入，也适合逐步积累长期资产。最适合你的路径不是一步到位，而是：先服务，后内容，再产品化。',
    strengths: ['路径最现实', '现金流和长期积累可以兼顾', '最适合多数普通人起步'],
    risks: ['容易什么都做一点，最后不聚焦', '节奏不对时，会同时很忙又没积累', '如果不设阶段目标，很容易混乱'],
    plan: ['先定义一个可卖服务', '同时开始记录你的方法和案例', '把交付过程整理成内容素材', '从服务中提炼模板或小产品', '逐步把“靠自己做”变成“靠流程和资产做”']
  }
};

const QUESTIONS = [
  {
    id: 1,
    dimension: 'start',
    title: '如果让你现在开始赚钱，你更愿意靠哪种方式起步？',
    options: [
      { text: '直接用现有能力帮别人解决问题', scores: { service: 2 } },
      { text: '持续输出内容，先积累信任', scores: { content: 2 } },
      { text: '做一个可重复卖的产品', scores: { product: 2 } },
      { text: '先接服务，再慢慢做内容和产品', scores: { hybrid: 2 } }
    ]
  },
  {
    id: 2,
    dimension: 'advantage',
    title: '你现在最拿得出手的优势是什么？',
    options: [
      { text: '有明确技能，可以直接服务客户', scores: { service: 2 } },
      { text: '会表达，会讲，会输出观点', scores: { content: 2 } },
      { text: '擅长整理方法、工具、流程', scores: { product: 2 } },
      { text: '几样都有一点，但都还没完全放大', scores: { hybrid: 2 } }
    ]
  },
  {
    id: 3,
    dimension: 'sales',
    title: '面对陌生客户，你的接受度更接近哪种？',
    options: [
      { text: '可以直接聊需求、谈合作', scores: { service: 2 } },
      { text: '不太想硬聊，更想通过内容吸引', scores: { content: 2 } },
      { text: '希望尽量少靠一对一销售', scores: { product: 2 } },
      { text: '前期能接受，后期想降低对销售依赖', scores: { hybrid: 2 } }
    ]
  },
  {
    id: 4,
    dimension: 'workstyle',
    title: '你更喜欢哪种工作状态？',
    options: [
      { text: '直接服务人，快速拿结果', scores: { service: 2 } },
      { text: '创作、表达、建立影响力', scores: { content: 2 } },
      { text: '搭系统、做产品、一次做好多次卖', scores: { product: 2 } },
      { text: '先靠服务活下来，再逐步系统化', scores: { hybrid: 2 } }
    ]
  },
  {
    id: 5,
    dimension: 'monetization',
    title: '你对“先慢慢积累，再后面变现”这件事怎么看？',
    options: [
      { text: '不太行，我更想先赚到钱', scores: { service: 2 } },
      { text: '可以接受，只要方向对', scores: { content: 2 } },
      { text: '可以，但最终还是想靠产品放大', scores: { product: 2 } },
      { text: '能接受一部分，但不能太久没收入', scores: { hybrid: 2 } }
    ]
  },
  {
    id: 6,
    dimension: 'income',
    title: '如果你未来的一人公司只保留一种核心收入，你更想要哪种？',
    options: [
      { text: '高客单服务费', scores: { service: 2 } },
      { text: '内容带来的广告/课程/社群收入', scores: { content: 2 } },
      { text: '数字产品/工具/订阅收入', scores: { product: 2 } },
      { text: '服务 + 内容/产品的组合收入', scores: { hybrid: 2 } }
    ]
  },
  {
    id: 7,
    dimension: 'skill',
    title: '你更擅长哪种事情？',
    options: [
      { text: '针对具体问题给方案并落地', scores: { service: 2 } },
      { text: '把复杂东西讲清楚', scores: { content: 2 } },
      { text: '把经验做成模板、工具、流程', scores: { product: 2 } },
      { text: '发现机会并把几种方式串起来', scores: { hybrid: 2 } }
    ]
  },
  {
    id: 8,
    dimension: 'risk',
    title: '你对风险的态度更像哪种？',
    options: [
      { text: '先赚钱，稳一点', scores: { service: 2 } },
      { text: '可以接受前期投入换长期收益', scores: { content: 2 } },
      { text: '愿意花时间做更可规模化的东西', scores: { product: 2 } },
      { text: '希望先稳住现金流，再逐步升级', scores: { hybrid: 2 } }
    ]
  },
  {
    id: 9,
    dimension: 'positioning',
    title: '你更想让别人因为什么来找你？',
    options: [
      { text: '你能直接帮他解决问题', scores: { service: 2 } },
      { text: '你有观点、有方法、有影响力', scores: { content: 2 } },
      { text: '你有好产品或好工具', scores: { product: 2 } },
      { text: '你既能帮忙，也能提供方法和产品', scores: { hybrid: 2 } }
    ]
  },
  {
    id: 10,
    dimension: 'thirtyDays',
    title: '如果给你 30 天时间，你更愿意做哪件事？',
    options: [
      { text: '拿下第一个付费客户', scores: { service: 2 } },
      { text: '连续输出 20 条优质内容', scores: { content: 2 } },
      { text: '做出一个最小可卖产品', scores: { product: 2 } },
      { text: '一边接单一边测试内容和产品', scores: { hybrid: 2 } }
    ]
  },
  {
    id: 11,
    dimension: 'avoidance',
    title: '你最不想长期依赖的是什么？',
    options: [
      { text: '长时间免费输出', scores: { service: 2 } },
      { text: '高频一对一交付', scores: { content: 2 } },
      { text: '反复定制、每次都重做', scores: { product: 2 } },
      { text: '单一收入来源', scores: { hybrid: 2 } }
    ]
  },
  {
    id: 12,
    dimension: 'ideal',
    title: '你最理想的一人公司状态是什么？',
    options: [
      { text: '客单价高，客户少但收入稳', scores: { service: 2 } },
      { text: '有稳定内容影响力和信任资产', scores: { content: 2 } },
      { text: '有标准化产品，睡后也能成交', scores: { product: 2 } },
      { text: '既有现金流，又能逐步积累资产', scores: { hybrid: 2 } }
    ]
  }
];

function calculateResult(answers = []) {
  const total = { service: 0, content: 0, product: 0, hybrid: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = QUESTIONS[questionIndex];
    const option = question?.options?.[answerIndex];
    if (!option) return;
    Object.entries(option.scores).forEach(([key, value]) => {
      total[key] += value;
    });
  });

  const ranking = Object.entries(total).sort((a, b) => b[1] - a[1]);
  const [firstKey, firstScore] = ranking[0] || ['hybrid', 0];
  const [, secondScore] = ranking[1] || ['service', 0];

  let winner = firstKey;
  if (firstKey === 'hybrid' || firstScore - secondScore <= 2) {
    winner = 'hybrid';
  }

  return {
    total,
    ranking,
    winner,
    profile: TYPES[winner]
  };
}

module.exports = {
  TYPES,
  QUESTIONS,
  calculateResult
};
