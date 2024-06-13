class Member {
  private id: string
  readonly grade: string
  readonly avatar: string
  readonly name: string
  readonly major: string
  readonly introduction: string

  constructor(grade: string, major: string, avatar: string, name: string, introduction: string) {
    this.id = this.grade = grade
    this.avatar = avatar
    this.name = name
    this.major = major
    this.introduction = introduction
  }
}

enum Major {
  CS = '计算机科学与技术',
  SE = '软件工程',
  NE = '网络工程',
  CS_NORMAL = '计算机科学与技术（师范）',
  MATH_NORMAL = '数学与应用数学（师范）'
}

enum Grade {
  CLASS_OF_2017 = '2017',
  CLASS_OF_2018 = '2018',
  CLASS_OF_2019 = '2019',
  CLASS_OF_2020 = '2020',
  CLASS_OF_2021 = '2021',
  CLASS_OF_2022 = '2022',
  CLASS_OF_2023 = '2023',
  CLASS_OF_2024 = '2024'
}

const members_2017: Member[] = [
  new Member(
    Grade.CLASS_OF_2017,
    Major.SE,
    new URL('@/assets/member/陈子豪.jpg', import.meta.url).href,
    '陈子豪',
    '大学时曾获得全国大学生计算机程序设计二等奖，大二时在滴滴实习，拥有丰富的实战经验，曾于小红书从事后端开发，现于百度就职。'
  ),
  new Member(
    Grade.CLASS_OF_2017,
    Major.NE,
    new URL('@/assets/member/王东.jpg', import.meta.url).href,
    '王东',
    '2019、2020届全国计算机设计大赛国家级三等奖获得者，目前于北京东方国信科技股份有限公司从事分布式数据库存储过程执行引擎研发工作。'
  )
]

const members_2018: Member[] = [
  new Member(
    Grade.CLASS_OF_2018,
    Major.CS,
    new URL('@/assets/member/刘琦.jpg', import.meta.url).href,
    '刘琦',
    '曾在度小满（原百度金融）实习八个月并获得最佳实习生奖项，大学时曾获得大创国家级奖项，多次获得学习一等奖学金、科学研究奖学金，2020年全国高校计算机能力挑战赛Java程序设计赛国家级二等奖，辽宁省“优秀大学毕业生“称号。目前保研至吉林大学软件工程专业，研究方向为深度学习和数据库内核。'
  ),
  new Member(
    Grade.CLASS_OF_2018,
    Major.SE,
    new URL('@/assets/member/龚雪莹.jpg', import.meta.url).href,
    '龚雪莹',
    '研究生在读，曾获全国智能创新大赛国二、计算机设计大赛省三等七八项省奖、若干校奖、写了杂七杂八论文两篇，大四保研至东华大学。最喜欢就是疫情前和曹老师还有大三四届学长学姐吃饭唠嗑，也喜欢和sky工作室一起打比赛一起学习一起卷一起摆、无论带着飞还是被带飞，真好。'
  ),
  new Member(
    Grade.CLASS_OF_2018,
    Major.CS,
    new URL('@/assets/member/陈坤.png', import.meta.url).href,
    '陈坤',
    '老家江西鹰潭，大学期间曾在高途教育、百度实习，后校招进入字节跳动，目前在互娱直播部门从事后端研发工程师的工作。十分怀念在sky学习的时光，希望刚刚踏入沈师的学弟学妹们也能够喜欢sky，加入sky。'
  ),
  new Member(
    Grade.CLASS_OF_2018,
    Major.CS,
    new URL('@/assets/member/靳智多.jpg', import.meta.url).href,
    '靳智多',
    '大数据领域数据治理方向产品经理，任职于东方国信。大学期间，累计获得国家级4项、省级11项、市级1项、校级53项等荣誉。Sky是一个无比温暖与治愈的地方，相信我，Sky会改变你的人生！'
  ),
  new Member(
    Grade.CLASS_OF_2018,
    Major.SE,
    new URL('@/assets/member/练羽童.jpg', import.meta.url).href,
    '练羽童',
    '重度代码洁癖患者，前端技术爱好者（JavaScript专治语言选择困难症~）目前就职于百度，担任前端开发工程师。'
  ),
  new Member(
    Grade.CLASS_OF_2018,
    Major.NE,
    new URL('@/assets/member/梁玥.jpg', import.meta.url).href,
    '梁玥',
    '在竞赛方面：曾获得计算机设计大赛国家级三等奖，蓝桥杯省级二等奖等多项省级奖项。在学习方面：三年智育成绩专业第二，综合测评成绩专业第二，获得2020-2021学年辽宁省政府奖学金，多项校内奖学金，目前保研至东华大学。'
  )
]

const members_2019: Member[] = [
  new Member(
    Grade.CLASS_OF_2019,
    Major.CS,
    new URL('@/assets/member/张丹丹.jpg', import.meta.url).href,
    '张丹丹',
    '竞赛积极者，曾获第三届传智杯国赛二等奖，计算机设计大赛国赛二等奖，第十二届蓝桥杯国赛优秀奖，互联网+省级铜奖等十余项省级奖项，校奖若干。现已保研至杭州电子科技大学计算机科学与技术，知识图谱方向。'
  ),
  new Member(
    Grade.CLASS_OF_2019,
    Major.CS_NORMAL,
    new URL('@/assets/member/曹晗.jpg', import.meta.url).href,
    '曹晗',
    '一个喜欢摄影和电影的文艺女青年，在校期间获得多项个人荣誉，如“学创杯”校级二等奖，沈阳师范大学第十五届“计算机设计大赛”一等奖，2020“朔日杯”辽宁省高校计算机设计竞赛三等奖，第八届全国高校数字艺术设计大赛东北赛区二等奖，互联网+大赛省级三等奖等。'
  ),
  new Member(
    Grade.CLASS_OF_2019,
    Major.NE,
    new URL('@/assets/member/郑颂阳.jpg', import.meta.url).href,
    '郑颂阳',
    '20，21，22三年蓝桥杯c语言活java组省二等奖，21，22两年计算机博弈大赛藏族久棋省三等奖，大一学习奖学金，大二学习+科研奖学金，爱好打游戏和球类运动。'
  )
]

const members_2020: Member[] = [
  new Member(
    Grade.CLASS_OF_2020,
    Major.CS,
    new URL('@/assets/member/李英嘉.png', import.meta.url).href,
    '李英嘉',
    '两年智育、综测均专业第一，平均学分绩点3.65。担任21级、22级新生助理辅导员，积极参加各类创新竞赛共获得国家级3项、省级10项、校级24项、其余奖项若干，现已保研至中央财经大学。加入Sky！一起摸鱼，一起卷，等你们来！'
  ),
  new Member(
    Grade.CLASS_OF_2020,
    Major.MATH_NORMAL,
    new URL('@/assets/member/王书琳.png', import.meta.url).href,
    '王书琳',
    '原软件学院计算机科学与技术（师范）专业学生，平均学分绩点3.52，智育、综测均专业第一。曾任软件学院21级新生助理辅导员。大二转入数学学应用数学（师范）专业，智育排名前4%,获省级奖项四项，校级五余项。乐衷于参加大学数学建模竞赛及创新创业类竞赛，多次取得省、校级奖项，现已保研至东北师范大学。'
  ),
  new Member(
    Grade.CLASS_OF_2020,
    Major.CS,
    new URL('@/assets/member/李沅卿.png', import.meta.url).href,
    '李沅卿',
    '曾获2021年第十五届挑战杯红色专项活动国家级项目，辽宁省大学生创新创业训练项目省级项目，全国大学生电子商务“创新、创业及创意”挑战赛校级特等奖，光明大调研专项社会实践活动校级优秀团队。'
  ),
  new Member(
    Grade.CLASS_OF_2020,
    Major.NE,
    new URL('@/assets/member/刘云鹤.jpg', import.meta.url).href,
    '刘云鹤',
    '辽宁沈阳人，方向是JAVA后端。比较擅长钻研一件事情，曾获得过第十二届蓝桥杯省级一等奖，第三届传智杯二等奖等。以后的大概路线是走JAVA后端开发，现在还在努力学习中，望与君共勉。'
  ),
  new Member(
    Grade.CLASS_OF_2020,
    Major.SE,
    new URL('@/assets/member/刘兆源.jpg', import.meta.url).href,
    '刘兆源',
    '主要学习JAVA后端方向 曾获大学生创新创业大赛国家级项目曾在团学组织以综合成绩第一被录取 院优秀学生干部 多次取得奖学金。'
  ),
  new Member(
    Grade.CLASS_OF_2020,
    Major.CS,
    new URL('@/assets/member/于博.jpg', import.meta.url).href,
    '于博',
    '于博，2020级计算机科学与技术专业，曾获得20年软件学院计算机程序设计大赛二等奖，第十二届蓝桥杯全国软件和信息技术辽宁赛区c/c++程序设计一等奖。'
  ),
  new Member(
    Grade.CLASS_OF_2020,
    Major.CS,
    new URL('@/assets/member/郑赫.jpg', import.meta.url).href,
    '郑赫',
    '方向go语言，热爱技术，极客。曾获计算机博弈竞赛三等奖。钻研技术是我最喜欢做的事情，希望能和工作室的大家一起探索技术，分享技术。用技术造福世界。'
  )
]

const members_2021: Member[] = [
  new Member(
    Grade.CLASS_OF_2021,
    Major.SE,
    new URL('@/assets/member/高铮.jpg', import.meta.url).href,
    '高铮',
    'sky工作室UI设计师，sky工作室官网UI创建者。曾获《蓝桥杯海报设计一等奖》《蓝桥杯吉祥物设计二等奖》奖项，从事UI设计，3D模型，PIXIV画师，海报设计，网站前端等。'
  ),
  new Member(
    Grade.CLASS_OF_2021,
    Major.SE,
    new URL('@/assets/member/李秋瑜.jpg', import.meta.url).href,
    '李秋瑜',
    '主要学习后端go语言方向，大一学年综测专业第一，曾获得第十三届蓝桥杯省级一等奖，日常喜欢打打排球，在平衡学习和生活的道路上仍在努力中。'
  ),
  new Member(
    Grade.CLASS_OF_2021,
    Major.CS,
    new URL('@/assets/member/刘晏榕.jpg', import.meta.url).href,
    '刘晏榕',
    '目前选择前端方向，也有点健忘，大一学年商务分析专业方向智育第二，综测第二，曾获“创新创意及创业挑战赛”校级二等奖，“传智杯全国大学生IT技能大赛”全国区域赛三等奖，没有天赋异禀，所以愿意努力翻山越岭。有点社恐，但乐意为新的一轮月亮和日落欢呼。'
  ),
  new Member(
    Grade.CLASS_OF_2021,
    Major.NE,
    new URL('@/assets/member/王鹤蒙.jpg', import.meta.url).href,
    '王鹤蒙',
    '目前选择golang语言方向 大一学年智育综测均专业第一曾获第十三届“蓝桥杯”辽宁省赛三等奖 三创赛校级一等奖“互联网+”创业创新赛校级铜奖 是个“自由”主义派 永远快乐才是人生真谛想吹风 想自由 去看海 绕世界流浪 有一些小小的梦想计划着一点点去靠近实现 始终相信 心之所愿 定能如愿～'
  ),
  new Member(
    Grade.CLASS_OF_2021,
    Major.CS,
    new URL('@/assets/member/闫正心.jpg', import.meta.url).href,
    '闫正心',
    '本人性格开朗，热情活泼，喜欢画画，旅游和做一些手工。我很荣幸加入了skylab成为了一名skyer，在这一年里我学习到了很多专业知识，也有了自己的学习方向，收获颇丰，积累了很多经验。“星光不问赶路人,时光不负有心人”我会一直努力向前。期待大家加入skylab，成为我们的一员！'
  ),
  new Member(
    Grade.CLASS_OF_2021,
    Major.CS_NORMAL,
    new URL('@/assets/member/祖铭鸿.jpg', import.meta.url).href,
    '祖铭鸿',
    '后端golong方向。性格上适应力强，初识时比较腼腆，爱好广泛，大一期间曾获各个级别的比赛和志愿活动奖项六项，对算法很感兴趣，愿意从头思考。'
  ),
  new Member(
    Grade.CLASS_OF_2021,
    Major.NE,
    new URL('@/assets/member/李毅.jpg', import.meta.url).href,
    '李毅',
    '待人友好，性格开朗，适应力强，心理素质良好。主要学习后端java和golang语言，对电脑接触较早，动手能力强，对电脑硬件方面比较感兴趣，平时有尝试给硬件超频。平时爱好打乒乓球，玩游戏。'
  ),
  new Member(
    Grade.CLASS_OF_2021,
    Major.CS,
    new URL('@/assets/member/曹君如.jpg', import.meta.url).href,
    '曹君如',
    '平时喜欢研究关于电脑的一切东西，无论是软件还是硬件都略有了解。大一学年综测排名第四，《第十三届蓝桥杯大赛》省级三等奖。很荣幸成为skylab的一名成员，期待大家的加入！'
  ),
  new Member(
    Grade.CLASS_OF_2021,
    Major.CS,
    new URL('@/assets/member/戴佳昊.jpg', import.meta.url).href,
    '戴佳昊',
    '来自江苏，性格开朗热情，幽默诙谐，大一学年曾获《第四届传智杯全国大学生IT技能大赛全国区域赛三等奖》《第十三届蓝桥杯辽宁省赛二等奖》《互联网+校级铜奖》奖项；并取得了智育第四，综测第五的成绩，积极进取，思想上进；学习能力强，喜欢钻研；“吾生也有涯，而知也无涯”是我的座右铭。'
  ),
  new Member(
    Grade.CLASS_OF_2021,
    Major.CS,
    new URL('@/assets/member/王昕哲.jpg', import.meta.url).href,
    '王昕哲',
    '我是王昕哲，曾获蓝桥杯省级三等奖、第十二届全国大学生电子商务“创新、创意及创业”挑战性校级一等奖，软件学院2021--2022计算机专业智育测评第6，德育测评第3综合素质测评第4，基本掌握了c/c++语言，略掌握pr技巧，欢迎学弟学妹加入我们的工作室。'
  ),
  new Member(
    Grade.CLASS_OF_2021,
    Major.CS,
    new URL('@/assets/member/秦梓轩.jpg', import.meta.url).href,
    '秦梓轩',
    '来自沈阳，性格开朗，幽默，曾获《第四届传智杯全国大学生IT技能大赛全国区域赛三等奖》 《互联网+校级铜奖》等奖项；我喜欢健身，打篮球，打游戏；期待大家加入skylab，彼此共同进步！'
  )
    new Member(
      Grade.CLASS_OF_2021,
      Major.CS,
      new URL('@/assets/member/李俊奕.jpg', import.meta.url).href,
      '李俊奕',
      '喜欢编程、游泳、健身、web3、FPS、动漫，一些莫名其妙奖学金的获得者，蓝桥杯、传智杯、全国大学生电子商务等一些莫名其妙比赛的获奖者。个人技术方向为go开发，对web3非常感兴趣。'
    )
]

const members_2022: Member[] = [
  new Member(
    Grade.CLASS_OF_2022,
    Major.CS,
    new URL('@/assets/member/张瀚聪.jpg', import.meta.url).href,
    '张瀚聪',
    '曾获第十四届蓝桥杯省级一等奖、“互联网+”省级二等奖、校级优秀团员、社会实践先进个人等省、校、院级奖项共计二十余项。现任职软件学院第二十届团学组织学生会执行主席。感谢sky的包容与开放，给予每个灵魂滚烫发光的机会。'
  ),
  new Member(
    Grade.CLASS_OF_2022,
    Major.CS,
    new URL('@/assets/member/孙治宇.jpg', import.meta.url).href,
    '孙治宇',
    '曾获得大学生创新创业比赛国家级奖项，计算机设计大赛省奖，互联网+银奖铜奖，挑战杯校级，传智杯优秀奖，大一曾获得学习奖学金，并通过了英语的四六级，爱好篮球足球和kpop。人生就是旷野，旷野的规则是永不回头，所以继续勇敢地向前走吧。'
  ),
  new Member(
    Grade.CLASS_OF_2022,
    Major.NE,
    new URL('@/assets/member/彭思齐.jpg', import.meta.url).href,
    '彭思齐',
    '23辽宁省数学建模竞赛省级一等奖、23年美赛s奖、24年蓝桥杯c++组省级二等奖、24年东三省数学建模竞赛省级二等奖、24年三创赛校级二等奖。个人技术主攻前端方向，兴趣爱好涉猎广泛，喜爱音乐，在网易云平台上有beat发行。喜好运动，如篮球，跑步等。个人座右铭:落彩赋寒川，翻山逐暖阳。'
  )
]

const members_2023: Member[] = [
  new Member(
    Grade.CLASS_OF_2023,
    Major.NE,
    new URL('@/assets/member/宋瑞涵.jpg', import.meta.url).href,
    '宋瑞涵',
    '目前获得蓝桥杯省三奖项，大创校级奖，日常热情开朗，有点抽象，喜欢打羽毛球，希望在sky度过难忘的岁月！'
  ),
  new Member(
    Grade.CLASS_OF_2023,
    Major.CS,
    new URL('@/assets/member/周晓函.jpg', import.meta.url).href,
    '周晓函',
    '目前获得大创校级奖，海报校级一等奖，校园心理情景剧二等奖，性格开朗大方，希望学弟学妹们可以在工作室不断学习，努力提高 ，超越自己 ，成就梦想'
  ),
  new Member(
    Grade.CLASS_OF_2023,
    Major.CS,
    new URL('@/assets/member/苑文浩.jpg', import.meta.url).href,
    '苑文浩',
    '个人荣誉：23年创新创业大赛省级三等奖、23年创新创业大赛校级三等奖、24年“21世纪杯”英语演讲校级一等奖。希望新生们抓住机会，筚路蓝缕·栉风沐雨，做自己想做的，花香蝶自来。'
  ),
  new Member(
    Grade.CLASS_OF_2023,
    Major.CS,
    new URL('@/assets/member/于佳禾.jpg', import.meta.url).href,
    '于佳禾',
    '个人荣誉：2023年辽宁省大学生体育+创新创业大赛省级三等奖、2024年大学生创新创业校奖；喜欢写书法、弹古筝、旅行……希望在sky这个大家庭和大家共同学习进步，收获、成长，度过美好充实的大学时光！山高路远，道阻且长，行则将至！'
  ),
  new Member(
    Grade.CLASS_OF_2023,
    Major.CS,
    new URL('@/assets/member/胡安媛.jpg', import.meta.url).href,
    '胡安媛',
    '个人荣誉:24年东北三省数学建模省级二等奖；24年大学生创新创业校级立项；23年第六届传智杯比赛校级三等奖；祝你明亮，任由阳光盈满，祝你道路悠长，得见旷野繁星，长街灯光。'
  ),
  new Member(
    Grade.CLASS_OF_2023,
    Major.NE,
    new URL('@/assets/member/崔心甜.jpg', import.meta.url).href,
    '崔心甜',
    '个人荣誉：蓝桥杯省二奖项、大创校级。喜欢听歌追剧，期望与大家共谱绚丽篇章，留下美好回忆！'
  ),
  new Member(
    Grade.CLASS_OF_2023,
    Major.CS,
    new URL('@/assets/member/张智涵.jpg', import.meta.url).href,
    '张智涵',
    '计科三班班长，获蓝桥杯省二，23年第六届传智杯比赛校级三等奖，三创赛校二，对FPS游戏、小说、历史都有浓厚的兴趣，喜欢旅游，想在读万卷书的同时行万里路，努力丰富自己，会在帮助别人的同时获得快乐，坚信文字具有力量，会经常记录生活！希望学弟学妹能加入我们Sky这个大家庭，成为一个新的skyer！'
  )
]

const members_2024: Member[] = [
  new Member('', '', '', '', ''),
  new Member('', '', '', '', ''),
  new Member('', '', '', '', '')
]

const allMember: Member[][] = [
  members_2017,
  members_2018,
  members_2019,
  members_2020,
  members_2021,
  members_2022,
  members_2023,
  members_2024
]

export { Member, Grade, Major, allMember }
