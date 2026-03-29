const TYPES = {
  service: {
    key: 'service',
    name: '服务型一人公司',
    intro: '你更适合先用已有专业能力直接服务客户，先跑通现金流，再逐步标准化。',
    strengths: ['离钱近，验证快', '容易拿到第一批真实客户', '适合顾问、咨询、代做、陪跑'],
    risks: ['容易被一对一交付绑住', '规模化难度高', '如果不做产品化，收入上限明显'],
    plan: ['第 1-2 天：列出你能卖的 3 项服务', '第 3-4 天：写出 1 页服务介绍', '第 5 天：联系 10 个潜在客户', '第 6-7 天：拿到第一次深聊或试单']
  },
  content: {
    key: 'content',
    name: '内容型一人公司',
    intro: '你更适合通过持续表达建立信任，再把影响力转化为咨询、社群、知识产品或合作机会。',
    strengths: ['适合长期积累复利', '容易建立个人品牌', '能形成稳定信任关系'],
    risks: ['起量慢', '短期收入不稳定', '只输出不转化会空转'],
    plan: ['第 1 天：确定一个细分主题', '第 2-3 天：写出 5 个内容选题', '第 4-5 天：发布前 2 篇内容', '第 6-7 天：设计一个引导私聊/留资的钩子']
  },
  product: {
    key: 'product',
    name: '产品型一人公司',
    intro: '你更适合做标准化产品，把个人能力沉淀成模板、工具、数字产品或小型 SaaS。',
    strengths: ['可复制，边际成本低', '不强依赖一对一交付', '更容易形成长期资产'],
    risks: ['前期打磨周期更长', '容易闭门造车', '需要持续验证需求'],
    plan: ['第 1-2 天：定义一个最小产品', '第 3-4 天：做出可演示版本', '第 5 天：找 5 个目标用户试用', '第 6-7 天：根据反馈砍掉无效功能']
  },
  hybrid: {
    key: 'hybrid',
    name: '混合型一人公司',
    intro: '你既有服务能力，也有表达和产品化潜力，适合先服务、再内容化、再产品化。',
    strengths: ['路径最现实', '能滚动验证', '既能赚钱也能积累资产'],
    risks: ['容易方向过多', '执行分散', '如果节奏不好会什么都做不深'],
    plan: ['第 1-2 天：定义一个高价值服务', '第 3-4 天：把服务过程整理成内容', '第 5-6 天：提炼一个可复用模板', '第 7 天：明确下一步主路径，只保留一个重点']
  }
};

const QUESTIONS = [
  {
    id: 1,
    dimension: 'ability',
    title: '如果让你明天开始赚钱，你最自然的方式是？',
    options: [
      { text: '直接接项目、做咨询或代做', scores: { service: 3, hybrid: 1 } },
      { text: '先分享观点吸引人，再转化成交', scores: { content: 3, hybrid: 1 } },
      { text: '做一个可重复卖的模板或工具', scores: { product: 3, hybrid: 1 } },
      { text: '先接服务单，再把过程沉淀成内容或产品', scores: { hybrid: 3, service: 1 } }
    ]
  },
  {
    id: 2,
    dimension: 'ability',
    title: '你现阶段最拿得出手的是？',
    options: [
      { text: '专业经验，能直接帮人解决问题', scores: { service: 3, hybrid: 1 } },
      { text: '表达能力，能把复杂内容讲清楚', scores: { content: 3, hybrid: 1 } },
      { text: '结构化能力，能把东西做成标准品', scores: { product: 3, hybrid: 1 } },
      { text: '以上两种以上都还不错', scores: { hybrid: 3, content: 1, service: 1 } }
    ]
  },
  {
    id: 3,
    dimension: 'ability',
    title: '你更希望别人因为什么付费给你？',
    options: [
      { text: '我亲自出手解决问题', scores: { service: 3 } },
      { text: '我的观点、经验和认知', scores: { content: 3 } },
      { text: '我做出来的工具、模板或产品', scores: { product: 3 } },
      { text: '一开始是服务，后面升级成内容和产品', scores: { hybrid: 3, service: 1 } }
    ]
  },
  {
    id: 4,
    dimension: 'expression',
    title: '你对持续输出内容这件事的真实感受更接近？',
    options: [
      { text: '不排斥，但不想靠这个吃饭', scores: { service: 2, hybrid: 1 } },
      { text: '我愿意长期输出，越写越有感觉', scores: { content: 3 } },
      { text: '只在产品需要时输出，不想高频表达', scores: { product: 2 } },
      { text: '愿意输出，但更想让输出服务成交和产品', scores: { hybrid: 3, content: 1 } }
    ]
  },
  {
    id: 5,
    dimension: 'expression',
    title: '如果你要开一个公开账号，你最想发什么？',
    options: [
      { text: '案例拆解、实操经验', scores: { service: 2, hybrid: 1 } },
      { text: '观点、方法论、成长记录', scores: { content: 3 } },
      { text: '产品更新、工具教程、使用说明', scores: { product: 3 } },
      { text: '成交案例 + 方法总结 + 产品沉淀', scores: { hybrid: 3 } }
    ]
  },
  {
    id: 6,
    dimension: 'sales',
    title: '面对销售和成交，你更像哪一种？',
    options: [
      { text: '可以直接聊需求、报价、推进成交', scores: { service: 3, hybrid: 1 } },
      { text: '更适合先靠内容建立信任，再转化', scores: { content: 3 } },
      { text: '希望通过产品页面和自动化成交', scores: { product: 3 } },
      { text: '我能接受销售，但希望逐步减少纯手工成交', scores: { hybrid: 3, product: 1 } }
    ]
  },
  {
    id: 7,
    dimension: 'sales',
    title: '你最能接受的第一笔收入来源是？',
    options: [
      { text: '一对一咨询/陪跑', scores: { service: 3 } },
      { text: '内容带来的广告、社群或知识产品', scores: { content: 3 } },
      { text: '模板包、课程、工具订阅', scores: { product: 3 } },
      { text: '服务单先跑起来，再延伸其他收入', scores: { hybrid: 3, service: 1 } }
    ]
  },
  {
    id: 8,
    dimension: 'risk',
    title: '如果 30 天内必须验证方向，你会怎么选？',
    options: [
      { text: '选最快拿到钱的方式', scores: { service: 3 } },
      { text: '选最适合长期品牌积累的方向', scores: { content: 3 } },
      { text: '选能沉淀成资产的产品方向', scores: { product: 3 } },
      { text: '先用服务验证，再同步沉淀内容/产品', scores: { hybrid: 3 } }
    ]
  },
  {
    id: 9,
    dimension: 'risk',
    title: '你对不确定性的接受程度更接近？',
    options: [
      { text: '我希望尽快看见现金流', scores: { service: 3 } },
      { text: '我接受慢一点，但希望做出影响力', scores: { content: 3 } },
      { text: '我能忍前期打磨，换后期可复制', scores: { product: 3 } },
      { text: '我希望同时兼顾现实收入和长期资产', scores: { hybrid: 3 } }
    ]
  },
  {
    id: 10,
    dimension: 'preference',
    title: '你理想中的工作状态是？',
    options: [
      { text: '和客户深度合作，解决真实问题', scores: { service: 3 } },
      { text: '持续输出，吸引认可你的人', scores: { content: 3 } },
      { text: '优化一个产品，让它持续售卖', scores: { product: 3 } },
      { text: '先靠服务成交，再逐步标准化和放大', scores: { hybrid: 3 } }
    ]
  },
  {
    id: 11,
    dimension: 'preference',
    title: '你更想把时间花在哪里？',
    options: [
      { text: '高价值客户沟通和交付', scores: { service: 3 } },
      { text: '写作、表达、建立连接', scores: { content: 3 } },
      { text: '打磨产品、流程和系统', scores: { product: 3 } },
      { text: '把成交、表达、产品沉淀连起来', scores: { hybrid: 3 } }
    ]
  },
  {
    id: 12,
    dimension: 'preference',
    title: '未来 1 年，你最想看到哪种结果？',
    options: [
      { text: '有稳定高客单的服务收入', scores: { service: 3 } },
      { text: '有一批持续关注并信任你的人', scores: { content: 3 } },
      { text: '有一个能重复卖的产品', scores: { product: 3 } },
      { text: '先赚钱，再把方法沉淀成内容和产品', scores: { hybrid: 3 } }
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
  let winner = ranking[0][0];
  if (ranking[0][1] - ranking[1][1] <= 2) {
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
