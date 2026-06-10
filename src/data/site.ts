export const navItems = [
  { label: '首页', href: '#/', mobileLabel: '首页' },
  { label: '赛事大厅', href: '#/events', mobileLabel: '赛事' },
  { label: '俱乐部', href: '#/club', mobileLabel: '俱乐部' },
  { label: '装备车库', href: '#/robot', mobileLabel: '装备' },
  { label: '赛季榜', href: '#/rankings', mobileLabel: '榜单' },
  { label: '加入战队', href: '#/join' },
];

export const visualAssets = {
  heroRobot: '/assets/robots/hero-current-product.png',
  robotChassis: '/assets/robots/robot-chassis-detail.png',
  rankingRobots: [
    '/assets/robots/weekly-top-robot-1.jpg',
    '/assets/robots/weekly-top-robot-2.jpg',
    '/assets/robots/weekly-top-robot-3.jpg',
  ],
  community: {
    eventCloseup: '/assets/community/event-closeup.png',
    clubTraining: '/assets/community/club-training.png',
    workshopGuidance: '/assets/community/workshop-guidance.png',
    garageParts: '/assets/community/garage-parts.png',
    eventArenaWide: '/assets/community/event-arena-wide.png',
    rewardsKit: '/assets/community/rewards-kit.png',
    portalArena: '/assets/community/portal-arena.png',
    portalJoin: '/assets/community/portal-join.png',
    portalGarage: '/assets/community/portal-garage.png',
    portalRanking: '/assets/community/portal-ranking.png',
    battleKits: '/assets/community/battle-kits.png',
    matchTraining: '/assets/community/match-training-1v1.png',
    matchFlipper: '/assets/community/match-flipper-challenge.png',
    trainingGuidance: '/assets/community/training-guidance.png',
  },
  manual: {
    partsChecklist: '/assets/manual/parts-checklist.png',
    assemblySteps: '/assets/manual/assembly-steps.png',
    remoteControl: '/assets/manual/remote-control.png',
    batterySafety: '/assets/manual/battery-safety.png',
    battleRules: '/assets/manual/battle-rules.png',
  },
};

export const arenaStats = [
  { label: '本周开放席位', value: '6' },
  { label: '赛季活动', value: '8+' },
  { label: '上场检查', value: '100%' },
  { label: '积分榜机师', value: '32' },
];

export const homePortals = [
  { title: '赛事大厅', href: '#/events', description: '查看本周赛程、报名状态、名额和擂台规则。', kicker: 'Arena', image: visualAssets.community.portalArena },
  { title: '装备车库', href: '#/robot', description: '了解入门战车、武器模块和升级路线。', kicker: 'Garage', image: visualAssets.community.portalGarage },
  { title: '赛季榜单', href: '#/rankings', description: '追踪积分、连胜纪录和荣誉徽章。', kicker: 'Ranking', image: visualAssets.community.portalRanking },
  { title: '加入战队', href: '#/join', description: '提交报名咨询，进入下一场俱乐部活动。', kicker: 'Join', image: visualAssets.community.portalJoin },
];

export const playerLoop = ['入场', '训练', '对战', '复盘', '升级', '上榜'];

export const clubSystems = [
  {
    title: '赛事运营',
    description: '每周开放新手赛、积分赛和主题挑战，赛前检查、分组、裁判和奖励都清楚。',
    image: visualAssets.community.eventArenaWide,
  },
  {
    title: '约战入口',
    description: '机师可以发起 1v1 约战入口，也可以报名别人发布的挑战，现场确认规则和安全边界。',
    image: visualAssets.community.clubTraining,
  },
  {
    title: '武器成长',
    description: '参赛获得积分，兑换新的前铲、护甲、翻斗臂和限定外壳，让复玩变成成长路线。',
    image: visualAssets.community.garageParts,
  },
];

export const announcements = [
  {
    tag: '报名开放',
    title: '观锋周末新手擂台赛开放报名',
    date: '本周六 14:00',
    summary: '适合第一次上场的新手机师，现场完成规则说明、机器人检查和友好赛安排。',
    href: '#/events',
  },
  {
    tag: '武器工坊',
    title: '6 月主题：翻斗臂挑战',
    date: '6 月赛季',
    summary: '完成基础训练后，带上翻斗臂参加专项挑战，试试不同打法。',
    href: '#/club',
  },
  {
    tag: '上场规则',
    title: '所有机器人参赛前需完成电池与武器检查',
    date: '长期有效',
    summary: '禁止危险刀具、明火和高速飞射物，比赛需在指定擂台内进行。',
    href: '#/join',
  },
];

export const productSpecs = [
  { label: '机身结构', value: '3D 打印外壳', detail: '可观察结构、螺丝和装配逻辑，也便于后续更换外壳与配件。' },
  { label: '对战操控', value: '双马达驱动', detail: '稳定轮式驱动，适合推铲、冲撞、转向和基础战术训练。' },
  { label: '武器模块', value: '可拆装前置结构', detail: '支持推铲、翻斗臂、护甲等不同打法，改装会直接影响进攻、防守和控场。' },
  { label: '俱乐部体验', value: '赛事 / 积分 / 兑换', detail: '持续参与活动，获得积分、徽章和武器升级目标。' },
];

export const sellingPoints = [
  { label: '真实比赛', value: '不是一次性玩具', detail: '周末擂台赛、新手友谊赛和主题挑战持续开放，每次上场都有新目标。' },
  { label: '工程改装', value: '边打边调战车', detail: '通过拆装、调试、复盘，理解动力、控制、重心和场地规则。' },
  { label: '安全上场', value: '赛前完成检查', detail: '所有活动在指定擂台进行，机器人、电池和武器结构需通过检查。' },
  { label: '长期成长', value: '积分与武器升级', detail: '通过参赛和训练获得积分，兑换限定配件和荣誉徽章。' },
];

export const productVersions = [
  { name: '新手入门套装', price: '首次体验推荐', features: ['机器人本体', '遥控器与电池', '基础推铲', '新手赛报名指引'] },
  { name: '竞技升级套装', price: '赛事机师推荐', features: ['入门套装', '额外武器包', '专属编号铭牌', '首场赛事报名券'] },
  { name: '战队对战套装', price: '双人/机构推荐', features: ['2 台机器人', '对战训练建议', '战队注册资格', '双人赛事报名权益'] },
];

export const clubBenefits = [
  { title: '真实擂台', description: '每月安排新手赛、周末擂台赛和主题挑战，下一场目标一眼就能看到。' },
  { title: '队友与对手', description: '在俱乐部找到对手和队友，从单人操控变成真正的擂台对战。' },
  { title: '规则与复盘', description: '上场前完成安全检查，比赛按规则进行，赛后复盘打法和改装方向。' },
  { title: '赛季成长', description: '通过积分、徽章、排行榜和武器兑换，让每次到场都有新挑战。' },
];

export const events = [
  {
    slug: 'rookie-arena-weekend',
    title: '观锋周末新手擂台赛',
    status: '报名中',
    category: '新手赛',
    image: visualAssets.community.eventCloseup,
    date: '本周六 14:00',
    place: '观锋训练场 A 区',
    age: '7-14 岁',
    capacity: '剩余 6 席 / 共 24 席',
    audience: '适合第一次上场的新手机师',
    description: '从规则说明、战车检查到 1v1 友谊赛，完成第一次正式上场。',
    prize: '新手机师认证 + 观锋徽章',
    schedule: ['13:30 签到与战车检查', '14:00 规则说明与热身训练', '14:40 分组对战', '16:00 战报复盘与徽章发放'],
    signupNote: '报名后请携带机器人、遥控器与电池，到场完成安全检查。',
    rules: ['1-3 分钟单场对战', '现场完成规则说明与安全检查', '禁止危险刀具、明火和高速飞射物'],
  },
  {
    slug: 'city-points-season',
    title: '城市擂台积分赛 · 第一季',
    status: '即将开始',
    category: '积分赛',
    image: visualAssets.community.portalRanking,
    date: '下周日 10:30',
    place: '创客教室 2F',
    age: '8-14 岁',
    capacity: '10/16 已报名',
    audience: '适合有基础操控经验的机师',
    description: '以赛季积分制记录胜场、连胜和徽章，冲击本月战力榜。',
    prize: '赛季积分 + 限定金属推铲',
    schedule: ['10:00 签到检查', '10:30 小组赛', '13:30 淘汰赛', '15:00 颁发积分与奖励'],
    signupNote: '积分赛需提前提交装备状态，改装件通过检查后可上场。',
    rules: ['推出擂台或失去行动能力即获胜', '按积分进入月度荣誉榜', '赛后复盘战术与控场表现'],
  },
  {
    slug: 'flipper-arm-challenge',
    title: '武器主题挑战：翻斗臂',
    status: '招募中',
    category: '武器挑战',
    image: visualAssets.community.battleKits,
    date: '6 月赛季',
    place: '观锋俱乐部擂台',
    age: '9-14 岁',
    capacity: '剩余 4 席 / 共 12 席',
    audience: '适合想尝试改装策略的机师',
    description: '限定翻斗臂结构，在控场、时机和稳定性之间找到最佳打法。',
    prize: '冠军限定外壳兑换资格',
    schedule: ['武器结构检查', '专项控场训练', '主题挑战赛', '改装策略复盘'],
    signupNote: '翻斗臂与舵机结构需通过现场检查后上场。',
    rules: ['限定翻斗臂结构', '按主动进攻和场地控制判定', '改装件需通过俱乐部检查'],
  },
];

export const clubUpdates = [
  {
    title: '上周冠军：蓝焰机师',
    meta: '城市擂台赛 · 第一季',
    summary: '凭借稳定推铲和场地控制拿下 4 连胜，进入本月荣誉榜第一名。',
  },
  {
    title: '新手体验日：12 组机师完成首次试战',
    meta: '创客教室 2F',
    summary: '完成遥控练习、规则说明和 1v1 友谊赛，全部机器人通过上场检查。',
  },
  {
    title: '积分兑换上新：重装护甲',
    meta: '武器工坊',
    summary: '适合稳健防守型打法，可用于下月主题挑战，需通过安全检查后上场。',
  },
];

export const challengePreviews = [
  { title: '周五放学后 1v1 推铲训练', time: '周五 17:30', place: '俱乐部小擂台', status: '招募中' },
  { title: '新手机师友谊战', time: '周六 10:00', place: '创客教室', status: '可报名' },
];

export const matchRequests = [
  {
    title: '推铲控场训练局',
    host: '钢甲小队长',
    time: '周五 17:30',
    place: '小擂台 A',
    level: '新手友好',
    seats: '2/4',
    rule: '限定基础推铲，练习抢中线和贴边控场。',
  },
  {
    title: '翻斗臂专项挑战',
    host: '蓝焰机师',
    time: '周六 15:00',
    place: '主擂台',
    level: '有基础',
    seats: '3/6',
    rule: '必须携带翻斗臂结构，按主动进攻和翻起次数计分。',
  },
];

export const weaponModules = [
  {
    name: '楔形推铲',
    type: '基础控场',
    points: '120 积分',
    difficulty: '入门',
    image: visualAssets.community.garageParts,
    effect: '抢中线、贴边推进、把对手推出擂台边界。',
  },
  {
    name: '翻斗臂套件',
    type: '主动武器',
    points: '240 积分',
    difficulty: '进阶',
    image: visualAssets.community.workshopGuidance,
    effect: '训练时机判断和舵机机构调试，适合主题挑战。',
  },
  {
    name: '重装护甲',
    type: '防守升级',
    points: '180 积分',
    difficulty: '入门',
    image: visualAssets.community.rewardsKit,
    effect: '提升抗撞能力，适合稳健防守和反推战术。',
  },
  {
    name: '冠军限定外壳',
    type: '赛季奖励',
    points: '冠军兑换',
    difficulty: '荣誉',
    image: visualAssets.community.eventCloseup,
    effect: '赛季冠军或主题挑战获胜者专属，展示战队身份。',
  },
];

export const rewardLadder = [
  { level: '完成首次上场', reward: '新手机师徽章', points: '+30' },
  { level: '参加主题挑战', reward: '武器工坊折扣券', points: '+80' },
  { level: '进入月榜前三', reward: '限定外壳兑换资格', points: '+200' },
  { level: '连续三周参赛', reward: '战队铭牌 + 训练券', points: '+260' },
];

export const rankings = [
  { rank: 1, pilot: '蓝焰机师', robot: 'Azure Fang', level: 'Lv.5 擂台冠军', points: 1860, record: '21胜 / 4负', streak: '6 连胜' },
  { rank: 2, pilot: '钢甲小队长', robot: 'Iron Cub', level: 'Lv.4 战术改装师', points: 1320, record: '16胜 / 6负', streak: '3 连胜' },
  { rank: 3, pilot: '闪电推铲', robot: 'Volt Ram', level: 'Lv.4 战术改装师', points: 1180, record: '14胜 / 5负', streak: '新晋前三' },
  { rank: 4, pilot: '红角挑战者', robot: 'Red Horn', level: 'Lv.3 观锋驾驶员', points: 760, record: '9胜 / 7负', streak: '翻斗专精' },
];

export const safetyNotes = [
  '所有对战在指定擂台内进行，服从裁判与安全员指引。',
  '改装件、电池和武器结构需通过现场检查后上场。',
  '禁止危险刀具、明火和高速飞射物。',
];
