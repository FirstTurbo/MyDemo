// 修复后的粒子背景系统
class FixedParticleBackground {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = {
            x: undefined,
            y: undefined,
            radius: 100
        };
        this.isDarkMode = false;
        this.animationId = null;
        this.isRunning = true;
        
        this.resizeTimeout = null;
        
        this.init();
        this.animate();
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
        
        window.addEventListener('mouseout', () => {
            this.mouse.x = undefined;
            this.mouse.y = undefined;
        });
        
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.resizeCanvas();
            }, 250);
        });
    }
    
    setDarkMode(isDark) {
        this.isDarkMode = isDark;
        this.particles.forEach(particle => {
            particle.baseColor = isDark ? 255 : 0;
        });
    }
    
    init() {
        this.resizeCanvas();
        this.createParticles();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.createParticles();
    }
    
    createParticles() {
        this.particles = [];
        const particleCount = Math.min(100, (this.canvas.width * this.canvas.height) / 10000);
        
        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            const size = Math.random() * 2 + 1;
            const baseColor = this.isDarkMode ? 255 : 0;
            const speedX = (Math.random() - 0.5) * 0.8;
            const speedY = (Math.random() - 0.5) * 0.8;
            
            this.particles.push({
                x, y, size, baseColor, speedX, speedY,
                originalX: x,
                originalY: y,
                density: Math.random() * 5 + 1
            });
        }
    }
    
    animate() {
        if (!this.isRunning) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.connectParticles();
        
        for (let i = 0; i < this.particles.length; i++) {
            this.updateParticle(this.particles[i]);
            this.drawParticle(this.particles[i]);
        }
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    connectParticles() {
        for (let a = 0; a < this.particles.length; a++) {
            for (let b = a; b < this.particles.length; b++) {
                const dx = this.particles[a].x - this.particles[b].x;
                const dy = this.particles[a].y - this.particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 100;
                
                if (distance < maxDistance) {
                    const opacity = 1 - distance / maxDistance;
                    this.ctx.strokeStyle = `rgba(${this.isDarkMode ? '255,255,255' : '0,0,0'}, ${opacity * 0.2})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
                    this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
                    this.ctx.stroke();
                }
            }
            
            if (this.mouse.x && this.mouse.y) {
                const dx = this.particles[a].x - this.mouse.x;
                const dy = this.particles[a].y - this.mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;
                
                if (distance < maxDistance) {
                    const opacity = 1 - distance / maxDistance;
                    this.ctx.strokeStyle = `rgba(${this.isDarkMode ? '255,255,255' : '0,0,0'}, ${opacity * 0.3})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.stroke();
                }
            }
        }
    }
    
    updateParticle(particle) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x > this.canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = this.canvas.width;
        if (particle.y > this.canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = this.canvas.height;
        
        if (this.mouse.x && this.mouse.y) {
            const dx = particle.x - this.mouse.x;
            const dy = particle.y - this.mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            const minDistance = 25;
            const smoothDistance = 80;
            
            if (distance < this.mouse.radius && distance > minDistance) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = Math.pow((this.mouse.radius - distance) / this.mouse.radius, 2);
                const directionX = forceDirectionX * force * particle.density * 0.3;
                const directionY = forceDirectionY * force * particle.density * 0.3;
                
                particle.x -= directionX;
                particle.y -= directionY;
            } else if (distance <= minDistance) {
                const pushForce = 0.3;
                const pushX = dx > 0 ? pushForce : -pushForce;
                const pushY = dy > 0 ? pushForce : -pushForce;
                
                particle.x += pushX;
                particle.y += pushY;
            }
        }
    }
    
    drawParticle(particle) {
        this.ctx.fillStyle = `rgba(${particle.baseColor}, ${particle.baseColor}, ${particle.baseColor}, 0.7)`;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    }
    
    ensureAnimation() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.animate();
        }
    }
}

// 日期验证函数
function isValidDate(year, month, day) {
    if (!year || !month || !day) return false;
    
    const date = new Date(year, month - 1, day);
    return date.getFullYear() == year && 
           date.getMonth() == month - 1 && 
           date.getDate() == day;
}

// 日期字符串验证函数
function isValidDateString(dateString) {
    const regex = /^\d{4}-\d{1,2}-\d{1,2}$/;
    if (!regex.test(dateString)) return false;
    
    const parts = dateString.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    
    return isValidDate(year, month, day);
}

// 获取某年某月的天数
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

// 年龄计算函数
function calculateAge(birthDate, lifeExpectancy = 80) {
    const today = new Date();
    const birth = new Date(birthDate);
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    const timeDiff = today.getTime() - birth.getTime();
    const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    const totalExpectedDays = lifeExpectancy * 365.25;
    const daysLeft = Math.max(0, Math.floor(totalExpectedDays - totalDays));
    const lifeProgress = years >= lifeExpectancy ? 100 : (totalDays / totalExpectedDays) * 100;
    
    return {
        years,
        months,
        days,
        totalDays,
        daysLeft,
        lifeProgress
    };
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('backgroundCanvas');
    const background = new FixedParticleBackground(canvas);
    
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    const languageToggle = document.getElementById('languageToggle');
    const body = document.body;
    
    const dateInputManual = document.getElementById('dateInputManual');
    const yearSelector = document.getElementById('yearSelector');
    const monthSelector = document.getElementById('monthSelector');
    const daySelector = document.getElementById('daySelector');
    const btnSetDate = document.getElementById('btnSetDate');
    const lifeExpectancyInput = document.getElementById('lifeExpectancy');
    const lifeExpectancyError = document.getElementById('lifeExpectancyError');
    const lifeExpectancyFunny = document.getElementById('lifeExpectancyFunny');
    const selectedDateEl = document.getElementById('selectedDate');
    const dateError = document.getElementById('dateError');
    const currentAgeEl = document.getElementById('currentAge');
    const humorAgeEl = document.getElementById('humorAge');
    const lifeProgressEl = document.getElementById('lifeProgress');
    const progressFillEl = document.getElementById('progressFill');
    const historicalEventEl = document.getElementById('historicalEvent');
    const daysLivedEl = document.getElementById('daysLived');
    const daysLeftEl = document.getElementById('daysLeft');
    const lifePercentageEl = document.getElementById('lifePercentage');
    
    // 初始化语言设置
    initLanguage();
    
    // 初始化年份选择器 (1900-今年)
    const currentYear = new Date().getFullYear();
    for (let year = 1900; year <= currentYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year + (currentLanguage === 'zh-CN' ? '年' : '');
        yearSelector.appendChild(option);
    }
    
    // 初始化月份选择器
    for (let month = 1; month <= 12; month++) {
        const option = document.createElement('option');
        option.value = month;
        option.textContent = month + (currentLanguage === 'zh-CN' ? '月' : '');
        monthSelector.appendChild(option);
    }
    
    // 月份变化时更新日期选择器
    monthSelector.addEventListener('change', updateDaySelector);
    yearSelector.addEventListener('change', updateDaySelector);
    
    function updateDaySelector() {
        const year = parseInt(yearSelector.value);
        const month = parseInt(monthSelector.value);
        
        // 清空日期选择器
        daySelector.innerHTML = '<option value="">' + (currentLanguage === 'zh-CN' ? '选择日期' : 'Select Day') + '</option>';
        
        if (year && month) {
            const daysInMonth = getDaysInMonth(year, month);
            
            for (let day = 1; day <= daysInMonth; day++) {
                const option = document.createElement('option');
                option.value = day;
                option.textContent = day + (currentLanguage === 'zh-CN' ? '日' : '');
                daySelector.appendChild(option);
            }
        }
    }
    
    // 手动输入日期事件
    dateInputManual.addEventListener('input', function() {
        const dateString = this.value;
        
        if (isValidDateString(dateString)) {
            dateError.style.display = 'none';
            const parts = dateString.split('-');
            yearSelector.value = parts[0];
            monthSelector.value = parseInt(parts[1]);
            updateDaySelector();
            daySelector.value = parseInt(parts[2]);
        } else if (dateString.length === 10) { // YYYY-MM-DD格式完整
            dateError.textContent = getErrorMessage('invalidDate');
            dateError.style.display = 'block';
        } else {
            dateError.style.display = 'none';
        }
    });
    
    // 下拉选择器变化时更新手动输入框
function updateManualInput() {
    const year = yearSelector.value;
    const month = monthSelector.value;
    const day = daySelector.value;
    
    if (year && month && day) {
        const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        dateInputManual.value = formattedDate;
        dateError.style.display = 'none';
        
        // 立即验证日期是否有效
        if (isValidDateString(formattedDate)) {
            const birth = new Date(formattedDate);
            const today = new Date();
            if (birth > today) {
                dateError.textContent = getErrorMessage('futureDate');
                dateError.style.display = 'block';
            } else {
                dateError.style.display = 'none';
            }
        }
    } else {
        // 如果不完整，清空手动输入框
        dateInputManual.value = '';
    }
}
    
    yearSelector.addEventListener('change', updateManualInput);
    monthSelector.addEventListener('change', updateManualInput);
    daySelector.addEventListener('change', updateManualInput);
    
    // 设置日期选择器的最大值为今天
    const today = new Date();
    const maxDate = today.toISOString().split('T')[0];
    
    // 主题切换功能
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    updateTheme();
    
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        localStorage.setItem('darkMode', isDarkMode);
        updateTheme();
    });
    
    function updateTheme() {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            themeIcon.textContent = '☀️';
            themeText.textContent = currentLanguage === 'zh-CN' ? '白天模式' : 'Light Mode';
            background.setDarkMode(true);
        } else {
            body.classList.remove('dark-mode');
            themeIcon.textContent = '🌙';
            themeText.textContent = currentLanguage === 'zh-CN' ? '黑夜模式' : 'Dark Mode';
            background.setDarkMode(false);
        }
    }
    
    // 语言切换功能
    languageToggle.addEventListener('click', toggleLanguage);
    
// 日期设置功能
btnSetDate.addEventListener('click', () => {
    const birthDate = dateInputManual.value;
    const year = yearSelector.value;
    const month = monthSelector.value;
    const day = daySelector.value;
    
    // 检查下拉选择器是否完整选择
    if (!year || !month || !day) {
        dateError.textContent = getErrorMessage('noDateSelected');
        dateError.style.display = 'block';
        return;
    }
    
    // 如果手动输入框为空，但下拉选择器有值，则自动同步
    if (!birthDate && year && month && day) {
        const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        dateInputManual.value = formattedDate;
        birthDate = formattedDate;
    }
    
    if (!birthDate) {
        dateError.textContent = getErrorMessage('noDateSelected');
        dateError.style.display = 'block';
        return;
    }
    
    if (!isValidDateString(birthDate)) {
        dateError.textContent = getErrorMessage('invalidDate');
        dateError.style.display = 'block';
        return;
    }
    
    const birth = new Date(birthDate);
    const today = new Date();
    if (birth > today) {
        dateError.textContent = getErrorMessage('futureDate');
        dateError.style.display = 'block';
        return;
    }
    
    dateError.style.display = 'none';
    updateDisplay(birthDate);
});
    
    // 预期寿命变化监听
    lifeExpectancyInput.addEventListener('input', () => {
        const value = parseInt(lifeExpectancyInput.value);
        
        lifeExpectancyError.style.display = 'none';
        lifeExpectancyFunny.style.display = 'none';
        
        if (isNaN(value)) {
            lifeExpectancyError.textContent = getErrorMessage('invalidNumber');
            lifeExpectancyError.style.display = 'block';
        } else if (value < 0) {
            lifeExpectancyFunny.textContent = getErrorMessage('negativeAge');
            lifeExpectancyFunny.style.display = 'block';
            lifeExpectancyInput.value = 1;
        } else if (value > 130) {
            lifeExpectancyFunny.textContent = getErrorMessage('superHuman');
            lifeExpectancyFunny.style.display = 'block';
            lifeExpectancyInput.value = 130;
        } else if (value < 1) {
            lifeExpectancyError.textContent = getErrorMessage('invalidAge');
            lifeExpectancyError.style.display = 'block';
            lifeExpectancyInput.value = 1;
        } else if (value > 100) {
            lifeExpectancyFunny.textContent = getErrorMessage('longLife');
            lifeExpectancyFunny.style.display = 'block';
        }
        
        const birthDate = dateInputManual.value;
        if (!birthDate) return;
        updateDisplay(birthDate);
    });
    
    function updateDisplay(birthDate) {
        background.ensureAnimation();
        
        const lifeExpectancy = parseInt(lifeExpectancyInput.value) || 80;
        if (lifeExpectancy < 1 || lifeExpectancy > 130) {
            lifeExpectancyError.style.display = 'block';
            return;
        }
        
        const date = new Date(birthDate);
        const formattedDate = currentLanguage === 'zh-CN' ? 
            `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日` :
            `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        
        selectedDateEl.textContent = (currentLanguage === 'zh-CN' ? '出生日期: ' : 'Birth Date: ') + formattedDate;
        
        const ageResult = calculateAge(birthDate, lifeExpectancy);
        
        const ageText = currentLanguage === 'zh-CN' ? 
            `当前年龄: ${ageResult.years}岁${ageResult.months}个月${ageResult.days}天` :
            `Current Age: ${ageResult.years} years, ${ageResult.months} months, ${ageResult.days} days`;
        
        currentAgeEl.textContent = ageText;
        
        // 显示年龄段调侃语句
        humorAgeEl.textContent = getAgeHumor(ageResult.years);
        humorAgeEl.style.display = 'block';
        
        const progressText = currentLanguage === 'zh-CN' ? 
            `人生进度: ${ageResult.lifeProgress.toFixed(1)}%` :
            `Life Progress: ${ageResult.lifeProgress.toFixed(1)}%`;
        
        lifeProgressEl.textContent = progressText;
        
        progressFillEl.style.width = `${ageResult.lifeProgress}%`;
                
        daysLivedEl.textContent = ageResult.totalDays.toLocaleString();
        daysLeftEl.textContent = ageResult.daysLeft.toLocaleString();
        lifePercentageEl.textContent = `${ageResult.lifeProgress.toFixed(1)}%`;
        
        const historicalEvent = getHistoricalEvent(ageResult.years);
        historicalEventEl.textContent = historicalEvent;
    }
    
    // 模拟选择今天的日期（用于演示）
    setTimeout(() => {
        const demoDate = new Date(today.getFullYear() - 25, today.getMonth(), today.getDate());
        const demoDateString = demoDate.toISOString().split('T')[0];
        dateInputManual.value = demoDateString;
        
        yearSelector.value = demoDate.getFullYear();
        monthSelector.value = demoDate.getMonth() + 1;
        updateDaySelector();
        daySelector.value = demoDate.getDate();
        
        updateDisplay(demoDateString);
    }, 1000);
});
