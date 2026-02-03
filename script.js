// Данные для тренажера ударений (Задание 4 ЕГЭ)
const stressWords = [
    { correct: "звонИт", incorrect: "звОнит", hint: "Глаголы на -ить: ударение на окончание" },
    { correct: "крАны", incorrect: "кранЫ", hint: "Мн.ч.: ударение часто остаётся на том же слоге, что и в ед.ч." },
    { correct: "средствА", incorrect: "срЕдства", hint: "Во мн.ч. ударение переходит на окончание" },
    { correct: "дОгмат", incorrect: "догмАт", hint: "Заимствованные слова часто сохраняют ударение языка-источника" },
    { correct: "прИнял", incorrect: "принЯл", hint: "В прош. времени ударение может переходить на приставку" },
    { correct: "каталОг", incorrect: "катАлог", hint: "Заимствованное слово, ударение фиксированное на последнем слоге" },
    { correct: "тОрты", incorrect: "тортЫ", hint: "Ударение неподвижное во всех формах" },
    { correct: "баловАть", incorrect: "бАловать", hint: "Глаголы на -овать: ударение на последний слог" },
    { correct: "вероисповЕдание", incorrect: "вероисповедАние", hint: "Производное от слова 'исповЕдать'" },
    { correct: "граждАнство", incorrect: "грАжданство", hint: "Суффикс -анств- часто имеет ударение" },
    { correct: "дефИс", incorrect: "дЕфис", hint: "Заимствованное слово, ударение на второй слог" },
    { correct: "диспансЕр", incorrect: "диспАнсер", hint: "Заимствование из французского языка" },
    { correct: "договорЁнность", incorrect: "договОренность", hint: "Образовано от 'договорИть', сохраняет ударение" },
    { correct: "донЕльзя", incorrect: "донельзЯ", hint: "Наречие, ударение фиксированное" },
    { correct: "закУпорить", incorrect: "закупОрить", hint: "Глагол, ударение на первый слог" },
    { correct: "знАчимость", incorrect: "значИмость", hint: "Производное от 'знАчимый'" },
    { correct: "Иксы", incorrect: "иксЫ", hint: "Названия букв: ударение на первый слог" },
    { correct: "квартАл", incorrect: "квАртал", hint: "В значении 'четверть года' ударение на последний слог" },
    { correct: "кОнусов", incorrect: "конусОв", hint: "Род.падеж мн.ч.: ударение часто остаётся на основе" },
    { correct: "корЫсть", incorrect: "кОрысть", hint: "Существительное, ударение на второй слог" },
    { correct: "кремЕнь", incorrect: "крЕмень", hint: "Ударение на последний слог" },
    { correct: "кремнЯ", incorrect: "крЕмня", hint: "Род.падеж: ударение на окончание" },
    { correct: "лЕкторов", incorrect: "лекторОв", hint: "Род.падеж мн.ч. профессий: ударение часто на первый слог" },
    { correct: "лОктя", incorrect: "локтЯ", hint: "Род.падеж: ударение на первый слог" },
    { correct: "местностЕй", incorrect: "мЕстностей", hint: "Род.падеж мн.ч.: ударение на окончание" },
    { correct: "намЕрение", incorrect: "намерЕние", hint: "Существительное, ударение на второй слог" },
    { correct: "нарОст", incorrect: "нАрост", hint: "Ударение на второй слог" },
    { correct: "нЕдруг", incorrect: "недрУг", hint: "Слова с приставкой не- часто сохраняют ударение исходного слова" },
    { correct: "недУг", incorrect: "нЕдуг", hint: "Ударение на второй слог" },
    { correct: "нЕнависть", incorrect: "ненАвисть", hint: "Ударение на первый слог" },
    { correct: "нефтепровОд", incorrect: "нефтепрОвод", hint: "Сложные слова с -вод: ударение на последний слог" },
    { correct: "новорождЁнный", incorrect: "новорОжденный", hint: "Слова с буквой Ё: ударение всегда на Ё" },
    { correct: "нОгтя", incorrect: "ногтЯ", hint: "Род.падеж: ударение на первый слог" },
    { correct: "Отрчество", incorrect: "отрОчество", hint: "Ударение на второй слог" },
    { correct: "партЕр", incorrect: "пАртер", hint: "Заимствованное слово, ударение на последний слог" },
    { correct: "портфЕль", incorrect: "пОртфель", hint: "Ударение на последний слог" },
    { correct: "пОручни", incorrect: "порУчни", hint: "Ударение на первый слог" },
    { correct: "придАное", incorrect: "прИданое", hint: "Ударение на второй слог" },
    { correct: "призЫв", incorrect: "прИзыв", hint: "Ударение на последний слог" },
    { correct: "свЁкла", incorrect: "свеклА", hint: "Слова с буквой Ё: ударение всегда на Ё" },
    { correct: "сирОты", incorrect: "сИроты", hint: "Мн.ч.: ударение на второй слог" },
    { correct: "созЫв", incorrect: "сОзыв", hint: "Ударение на последний слог" },
    { correct: "сосредотОчение", incorrect: "сосредоточЕние", hint: "Ударение на предпоследний слог" },
    { correct: "стАтуя", incorrect: "статУя", hint: "Ударение на первый слог" },
    { correct: "столЯр", incorrect: "стОляр", hint: "Названия профессий: ударение часто на последний слог" },
    { correct: "тамОжня", incorrect: "тАможня", hint: "Ударение на второй слог" },
    { correct: "тУфля", incorrect: "туфлЯ", hint: "Ударение на первый слог" },
    { correct: "цемЕнт", incorrect: "цЕмент", hint: "Ударение на последний слог" },
    { correct: "цЕнтнер", incorrect: "центнЕр", hint: "Заимствованное слово, ударение на первый слог" },
    { correct: "цепОчка", incorrect: "цЕпочка", hint: "Ударение на второй слог" },
    { correct: "шАрфы", incorrect: "шарфЫ", hint: "Мн.ч.: ударение часто остаётся на том же слоге" },
    { correct: "шофЁр", incorrect: "шОфер", hint: "Слова с буквой Ё: ударение всегда на Ё" },
    { correct: "щекОта", incorrect: "щЕкота", hint: "Ударение на последний слог" },
    { correct: "экспЕрт", incorrect: "Эксперт", hint: "Заимствованное слово, ударение на второй слог" },
    { correct: "вернА", incorrect: "вЕрна", hint: "Краткие формы прилагательных ж.р.: ударение на окончание" },
    { correct: "знАчимый", incorrect: "значИмый", hint: "Прилагательное, ударение на первый слог" },
    { correct: "кУхонный", incorrect: "кухОнный", hint: "Прилагательное, ударение на первый слог" },
    { correct: "ловкА", incorrect: "лОвка", hint: "Краткая форма ж.р.: ударение на окончание" },
    { correct: "мозаИчный", incorrect: "мозАичный", hint: "Прилагательное, ударение на третий слог" },
    { correct: "оптОвый", incorrect: "Оптовый", hint: "Прилагательное, ударение на второй слог" },
    { correct: "откУпорить", incorrect: "откупОрить", hint: "Глагол, ударение на первый слог" },
    { correct: "повторЁнный", incorrect: "повтОренный", hint: "Причастие с Ё: ударение всегда на Ё" },
    { correct: "полилА", incorrect: "пОлила", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "прожИвший", incorrect: "прОживший", hint: "Причастие, ударение на второй слог" },
    { correct: "снятА", incorrect: "снЯта", hint: "Краткое причастие ж.р.: ударение на окончание" },
    { correct: "загрУжен", incorrect: "загружЕн", hint: "Краткое причастие: ударение на второй слог" },
    { correct: "зАгнутый", incorrect: "загнУтый", hint: "Причастие, ударение на приставку" },
    { correct: "зАгодя", incorrect: "загодЯ", hint: "Наречие, ударение на первый слог" },
    { correct: "занятА", incorrect: "зАнята", hint: "Краткая форма ж.р.: ударение на окончание" },
    { correct: "запертА", incorrect: "зАперта", hint: "Краткая форма ж.р.: ударение на окончание" },
    { correct: "звалА", incorrect: "звАла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "клАла", incorrect: "клалА", hint: "Прош. время ж.р.: ударение на первый слог" },
    { correct: "крАлась", incorrect: "кралАсь", hint: "Прош. время ж.р.: ударение на первый слог" },
    { correct: "лилА", incorrect: "лИла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "лилАсь", incorrect: "лИлась", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "надевИт", incorrect: "надЕвит", hint: "Буд. время: ударение на последний слог" },
    { correct: "нАжилась", incorrect: "нажилАсь", hint: "Прош. время ж.р.: ударение на первый слог" },
    { correct: "налитА", incorrect: "нАлита", hint: "Краткая форма ж.р.: ударение на окончание" },
    { correct: "нарвалА", incorrect: "нАрвала", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "начАть", incorrect: "нАчать", hint: "Инфинитив: ударение на последний слог" },
    { correct: "облегчИть", incorrect: "облЕгчить", hint: "Инфинитив: ударение на последний слог" },
    { correct: "обнялАсь", incorrect: "Обнялась", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "обогналА", incorrect: "обогнАла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "ободралА", incorrect: "ободрАла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "ободренА", incorrect: "обОдрена", hint: "Краткая форма ж.р.: ударение на окончание" },
    { correct: "обострИть", incorrect: "обОстрить", hint: "Инфинитив: ударение на последний слог" },
    { correct: "одолжИть", incorrect: "одОлжить", hint: "Инфинитив: ударение на последний слог" },
    { correct: "озлОбить", incorrect: "озлобить", hint: "Инфинитив: ударение на второй слог" },
    { correct: "оклЕить", incorrect: "Оклеить", hint: "Инфинитив: ударение на второй слог" },
    { correct: "окружИт", incorrect: "окрУжит", hint: "Буд. время: ударение на последний слог" },
    { correct: "освЕдомиться", incorrect: "осведомИться", hint: "Инфинитив: ударение на третий слог" },
    { correct: "отбылА", incorrect: "Отбыла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "отдалА", incorrect: "отдАла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "отозвалА", incorrect: "отозвАла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "отозванА", incorrect: "отОзвана", hint: "Краткая форма ж.р.: ударение на окончание" },
    { correct: "перелилА", incorrect: "перелИла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "перезвонИт", incorrect: "перезвОнит", hint: "Буд. время: ударение на последний слог" },
    { correct: "перекроИть", incorrect: "перекрОить", hint: "Инфинитив: ударение на второй слог" },
    { correct: "плодоносИть", incorrect: "плодонОсить", hint: "Инфинитив: ударение на последний слог" },
    { correct: "повторИт", incorrect: "повтОрит", hint: "Буд. время: ударение на последний слог" },
    { correct: "позвалА", incorrect: "позвАла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "положИл", incorrect: "полОжил", hint: "Прош. время: ударение на последний слог" },
    { correct: "понялА", incorrect: "пОняла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "послАла", incorrect: "послалА", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "прибЫв", incorrect: "прИбыв", hint: "Деепричастие: ударение на последний слог" },
    { correct: "прИбыл", incorrect: "прибЫл", hint: "Прош. время: ударение на первый слог" },
    { correct: "принЯв", incorrect: "прИняв", hint: "Деепричастие: ударение на последний слог" },
    { correct: "рвалА", incorrect: "рвАла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "снялА", incorrect: "снЯла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "сорвалА", incorrect: "сорвАла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "создалА", incorrect: "создАла", hint: "Прош. время ж.р.: ударение на окончание" },
    { correct: "созданА", incorrect: "сОздана", hint: "Краткая форма ж.р.: ударение на окончание" },
    { correct: "углубИть", incorrect: "углУбить", hint: "Инфинитив: ударение на последний слог" },
    { correct: "чЕрпать", incorrect: "черпАть", hint: "Инфинитив: ударение на первый слог" },
    { correct: "щЕмко", incorrect: "щемкО", hint: "Наречие: ударение на первый слог" },
    { correct: "щемИт", incorrect: "щЕмит", hint: "Настоящее время: ударение на первый слог" }
];

// Функция для форматирования слова с выделением ударной буквы
function formatWordWithStress(word) {
    const letters = word.split('');
    let result = '';
    
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        const isUppercase = letter === letter.toUpperCase();
        const isVowel = 'АЕЁИОУЫЭЮЯаеёиоуыэюя'.includes(letter);
        
        if (isUppercase && isVowel) {
            result += `<span class="stress">${letter}</span>`;
        } else {
            result += letter.toLowerCase();
        }
    }
    
    return result;
}

// Глобальные переменные
let currentWordData = null;
let correctAnswers = 0;
let totalAttempts = 0;
let isAnswered = false;
let usedIndices = new Set();
let wordsDone = 0;

// DOM элементы
const mainScreen = document.getElementById('main-screen');
const trainingScreen = document.getElementById('training-screen');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const word1 = document.getElementById('word1');
const word2 = document.getElementById('word2');
const nextBtn = document.getElementById('next-btn');
const hintBtn = document.getElementById('hint-btn');
const feedback = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');
const explanation = document.getElementById('explanation');
const progressFill = document.getElementById('progress-fill');
const wordsDoneEl = document.getElementById('words-done');
const correctCount = document.getElementById('correct-count');
const correctPercent = document.getElementById('correct-percent');
const selectedTrainerText = document.querySelector('#selected-trainer span');

// ВЫБОР ТРЕНАЖЕРА
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('active-option');
        });
        
        this.classList.add('active-option');
        const trainerDesc = this.querySelector('p').textContent;
        selectedTrainerText.textContent = trainerDesc;
        
        if (this.id === 'stress') {
            startBtn.disabled = false;
        } else {
            startBtn.disabled = true;
        }
    });
});

// ЗАПУСК ТРЕНИРОВКИ
startBtn.addEventListener('click', function() {
    // Сбрасываем прогресс
    correctAnswers = 0;
    totalAttempts = 0;
    isAnswered = false;
    usedIndices.clear();
    wordsDone = 0;
    
    updateProgress();
    showNextWord();
    
    mainScreen.classList.remove('active');
    trainingScreen.classList.add('active');
});

// ВОЗВРАТ НА ГЛАВНЫЙ ЭКРАН
backBtn.addEventListener('click', function() {
    trainingScreen.classList.remove('active');
    mainScreen.classList.add('active');
});

// ОБРАБОТКА ВЫБОРА КАРТОЧКИ - ИСПРАВЛЕННЫЙ КОД
card1.addEventListener('click', function() {
    if (isAnswered) return;
    
    // Получаем тип карточки (correct или incorrect) из data-атрибута
    const cardType = this.getAttribute('data-type');
    const isCorrect = cardType === 'correct';
    
    checkAnswer(isCorrect, card1, card2);
});

card2.addEventListener('click', function() {
    if (isAnswered) return;
    
    const cardType = this.getAttribute('data-type');
    const isCorrect = cardType === 'correct';
    
    checkAnswer(isCorrect, card2, card1);
});

// ПРОВЕРКА ОТВЕТА
function checkAnswer(isCorrect, selectedCard, otherCard) {
    isAnswered = true;
    totalAttempts++;
    wordsDone++;
    
    if (isCorrect) {
        selectedCard.classList.add('correct');
        otherCard.classList.add('incorrect');
        correctAnswers++;
        showFeedback(true);
    } else {
        selectedCard.classList.add('incorrect');
        otherCard.classList.add('correct');
        showFeedback(false);
    }
    
    updateProgress();
}

// ПОКАЗАТЬ ОБРАТНУЮ СВЯЗЬ
function showFeedback(isCorrect) {
    feedback.classList.add('show');
    
    if (isCorrect) {
        feedbackText.textContent = "Правильно! ✓";
        feedbackText.className = "correct";
    } else {
        feedbackText.textContent = "Неправильно ✗";
        feedbackText.className = "incorrect";
    }
    
    explanation.textContent = currentWordData.hint;
}

// СЛЕДУЮЩЕЕ СЛОВО
nextBtn.addEventListener('click', function() {
    showNextWord();
});

// ПОДСКАЗКА
hintBtn.addEventListener('click', function() {
    if (isAnswered) return;
    
    feedback.classList.add('show');
    feedbackText.textContent = "Подсказка 💡";
    feedbackText.className = "";
    explanation.textContent = currentWordData.hint;
    
    setTimeout(() => {
        if (!isAnswered) {
            feedback.classList.remove('show');
        }
    }, 3000);
});

// ПОЛУЧИТЬ СЛУЧАЙНОЕ СЛОВО БЕЗ ПОВТОРЕНИЙ
function getRandomWord() {
    if (usedIndices.size >= stressWords.length) {
        usedIndices.clear();
    }
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * stressWords.length);
    } while (usedIndices.has(randomIndex));
    
    usedIndices.add(randomIndex);
    return stressWords[randomIndex];
}

// ПОКАЗАТЬ СЛЕДУЮЩЕЕ СЛОВО - ИСПРАВЛЕННЫЙ КОД
function showNextWord() {
    isAnswered = false;
    
    // Сбрасываем оформление карточек
    card1.classList.remove('correct', 'incorrect');
    card2.classList.remove('correct', 'incorrect');
    
    // Скрываем обратную связь
    feedback.classList.remove('show');
    
    // Получаем новое слово
    currentWordData = getRandomWord();
    
    // Случайно решаем, какое слово будет в какой карточке
    const isCorrectFirst = Math.random() > 0.5;
    
    if (isCorrectFirst) {
        word1.innerHTML = formatWordWithStress(currentWordData.correct);
        word2.innerHTML = formatWordWithStress(currentWordData.incorrect);
        
        // Сохраняем тип карточки в data-атрибуты
        card1.setAttribute('data-type', 'correct');
        card2.setAttribute('data-type', 'incorrect');
    } else {
        word1.innerHTML = formatWordWithStress(currentWordData.incorrect);
        word2.innerHTML = formatWordWithStress(currentWordData.correct);
        
        card1.setAttribute('data-type', 'incorrect');
        card2.setAttribute('data-type', 'correct');
    }
    
    updateProgress();
}

// ОБНОВЛЕНИЕ ПРОГРЕССА
function updateProgress() {
    const progress = ((wordsDone % 10) / 10) * 100;
    progressFill.style.width = `${progress}%`;
    
    wordsDoneEl.textContent = wordsDone;
    correctCount.textContent = correctAnswers;
    
    const percent = totalAttempts > 0 ? Math.round((correctAnswers / totalAttempts) * 100) : 0;
    correctPercent.textContent = `${percent}%`;
}

// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ
window.addEventListener('DOMContentLoaded', function() {
    const stressOption = document.getElementById('stress');
    if (stressOption) {
        stressOption.classList.add('active-option');
        selectedTrainerText.textContent = "Задание 4: Ударения";
        startBtn.disabled = false;
    }
    
    updateProgress();
});


