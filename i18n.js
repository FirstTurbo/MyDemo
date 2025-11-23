// 国际化语言资源
const i18nResources = {
    'zh-CN': {
        appTitle: "人生计时器 ✨",
        language: "中文",
        darkMode: "黑夜模式",
        lightMode: "白天模式",
        selectBirthDate: "选择出生日期",
        datePlaceholder: "YYYY-MM-DD",
        selectYear: "选择年份",
        selectMonth: "选择月份",
        selectDay: "选择日期",
        confirm: "确定",
        noDateSelected: "未选择日期",
        lifeExpectancy: "预期寿命：",
        years: "岁",
        lifeExpectancyError: "请输入1-130之间的数字",
        currentAge: "当前年龄: --",
        lifeProgress: "人生进度: --%",
        daysLived: "已过天数",
        daysLeft: "剩余天数",
        lifePercentage: "人生进度",
        yearsShort: "岁",
        historicalEventsTitle: "🎯 在这个年龄，他们做到了：",
        selectDateFirst: "选择出生日期后显示历史事件",

        // 年龄调侃
        ageHumor: {
            0: "👶 哇，刚来到这个世界的小宝贝！",
            1: "🍼 一岁啦，开始探索世界的奇妙旅程",
            3: "🧸 三岁看大，七岁看老，但谁知道未来呢？",
            6: "🎒 小学生活开始啦，作业和友谊并存",
            12: "🚀 青春期来临，准备好迎接挑战了吗？",
            18: "🎓 成年啦！法律上说你是大人了，但心里呢？",
            22: "💼 大学毕业，正式踏入社会大舞台",
            25: "🏃 25岁，正是精力充沛、追逐梦想的年纪",
            30: "👨‍💼 三十而立，事业和家庭开始步入正轨",
            35: "🏠 三十五岁，人生半程，收获与挑战并存",
            40: "🌟 不惑之年，更清楚自己想要什么",
            45: "💪 中年黄金期，经验丰富，精力尚存",
            50: "🎯 知天命之年，更懂得珍惜当下",
            55: "🌈 五十五岁，人生第二春的开始",
            60: "🎉 花甲之年，退休生活的新篇章",
            65: "🌅 六十五岁，享受悠闲时光的好年纪",
            70: "👴 古稀之年，智慧与阅历的结晶",
            75: "🕰️ 七十五岁，活出精彩，不负时光",
            80: "🌠 耄耋之年，人生的宝贵财富",
            85: "💎 八十五岁，活着的每一天都是奇迹",
            90: "👑 九十岁，真正的人生赢家",
            95: "✨ 九十五岁，见证了近一个世纪的变迁",
            100: "🎊 百岁寿星，生命的传奇！"
        },

        // 历史事件
        historicalEvents: {
            15: [
                "比尔·盖茨开始为他的学校编写程序",
                "爱因斯坦开始自学微积分",
                "莫扎特创作了他的第一部交响曲"
            ],
            18: [
                "马克·扎克伯格创建了Facebook",
                "史蒂夫·乔布斯从大学退学并开始参加书法课程",
                "马云第三次高考后考入杭州师范学院"
            ],
            20: [
                "史蒂夫·乔布斯和沃兹尼亚克在车库里创立苹果公司",
                "爱因斯坦从苏黎世联邦理工学院毕业",
                "比尔·盖茨从哈佛大学退学创办微软"
            ],
            25: [
                "马云创立中国第一家互联网商业公司",
                "爱因斯坦发表狭义相对论",
                "乔布斯和沃兹尼亚克推出Apple I"
            ],
            30: [
                "马云创立阿里巴巴集团",
                "爱因斯坦提出广义相对论",
                "乔布斯被自己创立的苹果公司解雇"
            ],
            35: [
                "奥巴马当选美国第44任总统",
                "爱因斯坦获得诺贝尔物理学奖",
                "乔布斯创立皮克斯动画工作室"
            ],
            40: [
                "乔布斯重返苹果并推出iMac",
                "马云带领阿里巴巴在香港上市",
                "爱因斯坦开始研究统一场论"
            ],
            45: [
                "马斯克创立SpaceX太空探索技术公司",
                "乔布斯推出iPhone改变手机行业",
                "马云创立支付宝改变支付方式"
            ],
            50: [
                "乔布斯发布iPad重新定义平板电脑",
                "爱因斯坦移民美国",
                "巴菲特开始他的价值投资传奇"
            ],
            60: [
                "特朗普当选美国第45任总统",
                "巴菲特仍在进行投资决策",
                "袁隆平团队研发的杂交水稻取得突破"
            ],
            70: [
                "曼德拉当选南非首位黑人总统",
                "巴菲特继续他的投资事业",
                "袁隆平获得国家科技进步奖"
            ],
            80: [
                "女王伊丽莎白二世成为英国在位时间最长的君主",
                "巴菲特继续担任伯克希尔哈撒韦董事长",
                "袁隆平团队研发的耐盐碱水稻取得进展"
            ]
        },

        // 错误和提示消息
        errorMessages: {
            invalidDate: "日期格式不正确，请使用YYYY-MM-DD格式",
            futureDate: "出生日期不能晚于今天",
            noDateSelected: "请选择或输入出生日期",
            invalidNumber: "请输入有效的数字",
            negativeAge: "💀 这是要活在出生之前吗？",
            superHuman: "🦸 这简直是超人！给你设定为130岁吧",
            invalidAge: "年龄不能小于1岁",
            longLife: "🌟 长寿之星！祝您健康长寿！"
        }
    },

    'en-US': {
        appTitle: "Life Timer ✨",
        language: "English",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        selectBirthDate: "Select Birth Date",
        datePlaceholder: "YYYY-MM-DD",
        selectYear: "Select Year",
        selectMonth: "Select Month",
        selectDay: "Select Day",
        confirm: "Confirm",
        noDateSelected: "No date selected",
        lifeExpectancy: "Life Expectancy:",
        years: "years",
        lifeExpectancyError: "Please enter a number between 1-130",
        currentAge: "Current Age: --",
        lifeProgress: "Life Progress: --%",
        daysLived: "Days Lived",
        daysLeft: "Days Left",
        lifePercentage: "Life Progress",
        yearsShort: "yrs",
        historicalEventsTitle: "🎯 At this age, they achieved:",
        selectDateFirst: "Select birth date to show historical events",

        // 年龄调侃
        ageHumor: {
            0: "👶 Wow, a newborn baby just arrived in this world!",
            1: "🍼 One year old, starting the wonderful journey of exploring the world",
            3: "🧸 Three years old, the future is full of possibilities",
            6: "🎒 Elementary school life begins, homework and friendship coexist",
            12: "🚀 Adolescence is coming, ready to face challenges?",
            18: "🎓 Adult! Legally you're an adult, but what about mentally?",
            22: "💼 Graduated from university, officially entering the social stage",
            25: "🏃 25 years old, full of energy and chasing dreams",
            30: "👨‍💼 Thirty years old, career and family begin to stabilize",
            35: "🏠 Thirty-five, halfway through life, full of achievements and challenges",
            40: "🌟 Forty years old, clearer about what you want",
            45: "💪 Golden middle age, rich experience and abundant energy",
            50: "🎯 Fifty years old, knowing destiny, cherishing the present more",
            55: "🌈 Fifty-five, the beginning of the second spring of life",
            60: "🎉 Sixty years old, a new chapter of retirement life",
            65: "🌅 Sixty-five, a good age to enjoy leisure time",
            70: "👴 Seventy years old, the crystallization of wisdom and experience",
            75: "🕰️ Seventy-five, live wonderfully, live up to the time",
            80: "🌠 Eighty years old, the precious wealth of life",
            85: "💎 Eighty-five, every day alive is a miracle",
            90: "👑 Ninety years old, a true winner in life",
            95: "✨ Ninety-five, witnessed nearly a century of changes",
            100: "🎊 Centenarian, a legend of life!"
        },

        // 历史事件
        historicalEvents: {
            15: [
                " Bill Gates started writing programs for his school",
                " Albert Einstein began self-studying calculus",
                " Mozart composed his first symphony"
            ],
            18: [
                " Mark Zuckerberg created Facebook",
                " Steve Jobs dropped out of college and started calligraphy classes",
                " Jack Ma was admitted to Hangzhou Normal University after his third college entrance exam"
            ],
            20: [
                " Steve Jobs and Steve Wozniak founded Apple in a garage",
                " Albert Einstein graduated from ETH Zurich",
                " Bill Gates dropped out of Harvard to found Microsoft"
            ],
            25: [
                " Jack Ma founded China's first internet commercial company",
                " Albert Einstein published the special theory of relativity",
                " Jobs and Wozniak launched Apple I"
            ],
            30: [
                " Jack Ma founded Alibaba Group",
                " Albert Einstein proposed the general theory of relativity",
                " Steve Jobs was fired from Apple, the company he founded"
            ],
            35: [
                " Barack Obama was elected the 44th President of the United States",
                " Albert Einstein won the Nobel Prize in Physics",
                " Steve Jobs founded Pixar Animation Studios"
            ],
            40: [
                " Steve Jobs returned to Apple and launched the iMac",
                " Jack Ma led Alibaba to list in Hong Kong",
                " Albert Einstein began researching the unified field theory"
            ],
            45: [
                " Elon Musk founded SpaceX",
                " Steve Jobs launched the iPhone, revolutionizing the mobile industry",
                " Jack Ma created Alipay, changing payment methods"
            ],
            50: [
                " Steve Jobs released the iPad, redefining tablets",
                " Albert Einstein immigrated to the United States",
                " Warren Buffett began his value investing legend"
            ],
            60: [
                " Donald Trump was elected the 45th President of the United States",
                " Warren Buffett was still making investment decisions",
                " Yuan Longping's team made breakthroughs in hybrid rice research"
            ],
            70: [
                " Nelson Mandela was elected the first black president of South Africa",
                " Warren Buffett continued his investment career",
                " Yuan Longping received the National Science and Technology Progress Award"
            ],
            80: [
                " Queen Elizabeth II became the longest-reigning British monarch",
                " Warren Buffett continued as chairman of Berkshire Hathaway",
                " Yuan Longping's team made progress in salt-alkali tolerant rice"
            ]
        },

        // 错误和提示消息
        errorMessages: {
            invalidDate: "Invalid date format, please use YYYY-MM-DD format",
            futureDate: "Birth date cannot be later than today",
            noDateSelected: "Please select or enter a birth date",
            invalidNumber: "Please enter a valid number",
            negativeAge: "💀 Trying to live before birth?",
            superHuman: "🦸 This is superhuman! Setting to 130 years",
            invalidAge: "Age cannot be less than 1 year",
            longLife: "🌟 Longevity star! Wishing you health and long life!"
        }
    }
};

// 当前语言设置
let currentLanguage = 'zh-CN';

// 切换语言函数
function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh-CN' ? 'en-US' : 'zh-CN';
    applyLanguage();
    updateLanguageButton();

    // 保存语言设置到本地存储
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// 应用语言设置
function applyLanguage() {
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18nResources[currentLanguage][key]) {
            element.textContent = i18nResources[currentLanguage][key];
        }
    });

    // 更新占位符文本
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (i18nResources[currentLanguage][key]) {
            element.placeholder = i18nResources[currentLanguage][key];
        }
    });
    // 更新语言按钮文本
    updateLanguageButton();
    // 更新日期选择器的选项文本
    updateDateSelectorsText();
    // 触发语言切换事件
    window.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: currentLanguage }
    }));
}
// 新增函数：更新日期选择器的选项文本
function updateDateSelectorsText() {
    const yearSelector = document.getElementById('yearSelector');
    const monthSelector = document.getElementById('monthSelector');
    const daySelector = document.getElementById('daySelector');

    if (yearSelector && monthSelector && daySelector) {
        // 更新年份选择器的选项文本
        const yearOptions = yearSelector.querySelectorAll('option');
        yearOptions.forEach(option => {
            if (option.value) {
                option.textContent = option.value + (currentLanguage === 'zh-CN' ? '年' : '');
            } else {
                option.textContent = currentLanguage === 'zh-CN' ? '选择年份' : 'Select Year';
            }
        });

        // 更新月份选择器的选项文本
        const monthOptions = monthSelector.querySelectorAll('option');
        monthOptions.forEach(option => {
            if (option.value) {
                option.textContent = option.value + (currentLanguage === 'zh-CN' ? '月' : '');
            } else {
                option.textContent = currentLanguage === 'zh-CN' ? '选择月份' : 'Select Month';
            }
        });

        // 更新日期选择器的选项文本
        const dayOptions = daySelector.querySelectorAll('option');
        dayOptions.forEach(option => {
            if (option.value) {
                option.textContent = option.value + (currentLanguage === 'zh-CN' ? '日' : '');
            } else {
                option.textContent = currentLanguage === 'zh-CN' ? '选择日期' : 'Select Day';
            }
        });

        // 如果当前有选中的年月，需要重新生成日期选项
        const selectedYear = yearSelector.value;
        const selectedMonth = monthSelector.value;

        if (selectedYear && selectedMonth) {
            // 保存当前选中的日期
            const selectedDay = daySelector.value;

            // 清空日期选择器
            daySelector.innerHTML = '<option value="">' +
                (currentLanguage === 'zh-CN' ? '选择日期' : 'Select Day') + '</option>';

            // 重新生成日期选项
            const daysInMonth = getDaysInMonth(parseInt(selectedYear), parseInt(selectedMonth));
            for (let day = 1; day <= daysInMonth; day++) {
                const option = document.createElement('option');
                option.value = day;
                option.textContent = day + (currentLanguage === 'zh-CN' ? '日' : '');
                daySelector.appendChild(option);
            }

            // 恢复选中的日期（如果存在）
            if (selectedDay && selectedDay <= daysInMonth) {
                daySelector.value = selectedDay;
            }
        }
    }
}
// 更新语言按钮文本
function updateLanguageButton() {
    const languageText = document.getElementById('languageText');
    languageText.textContent = i18nResources[currentLanguage].language;
}

// 获取年龄段调侃语句
function getAgeHumor(age) {
    const ages = Object.keys(i18nResources[currentLanguage].ageHumor).map(Number);
    const closestAge = ages.reduce((prev, curr) => {
        return (Math.abs(curr - age) < Math.abs(prev - age) ? curr : prev);
    });

    return i18nResources[currentLanguage].ageHumor[closestAge] ||
        (currentLanguage === 'zh-CN' ? "每个年龄段都有独特的魅力，享受当下吧！" : "Every age has its unique charm, enjoy the present!");
}

// 获取历史事件
function getHistoricalEvent(age) {
    if (i18nResources[currentLanguage].historicalEvents[age]) {
        const events = i18nResources[currentLanguage].historicalEvents[age];
        return events[Math.floor(Math.random() * events.length)];
    }

    const ages = Object.keys(i18nResources[currentLanguage].historicalEvents).map(Number);
    const closestAge = ages.reduce((prev, curr) => {
        return (Math.abs(curr - age) < Math.abs(prev - age) ? curr : prev);
    });

    if (i18nResources[currentLanguage].historicalEvents[closestAge]) {
        const events = i18nResources[currentLanguage].historicalEvents[closestAge];
        return events[Math.floor(Math.random() * events.length)];
    }

    return currentLanguage === 'zh-CN' ?
        "人生每个阶段都有无限可能，继续前行吧！" :
        "Every stage of life has infinite possibilities, keep moving forward!";
}

// 获取错误消息
function getErrorMessage(key) {
    return i18nResources[currentLanguage].errorMessages[key] ||
        (currentLanguage === 'zh-CN' ? "发生错误" : "An error occurred");
}

// 初始化语言设置
function initLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && i18nResources[savedLanguage]) {
        currentLanguage = savedLanguage;
    } else {
        // 根据浏览器语言设置默认语言
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) {
            currentLanguage = 'zh-CN';
        } else {
            currentLanguage = 'en-US';
        }
    }

    applyLanguage();
    updateLanguageButton();
}
