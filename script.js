// Данные для тренажера ударений (Задание 4 ЕГЭ)
const stressWords = [
    { correct: "звонИт", incorrect: "звОнит", hint: "Глаголы на -ить: ударение на окончание" },
    // ... остальные слова (оставьте как есть)
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

// ВЫБОР ТРЕНАЖЕРА - ИСПРАВЛЕННЫЙ КОД
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        console.log('Кликнули на опцию:', this.id);
        
        // Убираем активный класс у всех опций
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('active-option');
        });
        
        // Добавляем активный класс к выбранной опции
        this.classList.add('active-option');
        
        // Обновляем текст выбранного тренажера
        const trainerDesc = this.querySelector('p').textContent;
        selectedTrainerText.textContent = trainerDesc;
        
        // Активируем кнопку для доступных тренажеров
        if (this.id === 'stress') {
            startBtn.disabled = false;
            console.log('Кнопка активирована');
        } else {
            startBtn.disabled = true;
        }
    });
});

// ЗАПУСК ТРЕНИРОВКИ
startBtn.addEventListener('click', function() {
    console.log('Нажата кнопка "Начать тренировку"');
    
    // Сбрасываем прогресс
    correctAnswers = 0;
    totalAttempts = 0;
    isAnswered = false;
    usedIndices.clear();
    wordsDone = 0;
    
    // Обновляем счетчики
    updateProgress();
    
    // Показываем первое слово
    showNextWord();
    
    // Переключаем экраны
    mainScreen.classList.remove('active');
    trainingScreen.classList.add('active');
});

// ВОЗВРАТ НА ГЛАВНЫЙ ЭКРАН
backBtn.addEventListener('click', function() {
    trainingScreen.classList.remove('active');
    mainScreen.classList.add('active');
});

// ОБРАБОТКА ВЫБОРА КАРТОЧКИ
card1.addEventListener('click', function() {
    if (isAnswered) return;
    
    const cardText = word1.textContent.toLowerCase();
    const isCorrect = cardText === currentWordData.correct.toLowerCase();
    
    checkAnswer(isCorrect, card1, card2);
});

card2.addEventListener('click', function() {
    if (isAnswered) return;
    
    const cardText = word2.textContent.toLowerCase();
    const isCorrect = cardText === currentWordData.correct.toLowerCase();
    
    checkAnswer(isCorrect, card2, card1);
});

// ПРОВЕРКА ОТВЕТА
function checkAnswer(isCorrect, selectedCard, otherCard) {
    isAnswered = true;
    totalAttempts++;
    wordsDone++;
    
    // Подсвечиваем карточки
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
    
    // Обновляем счетчики
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
    // Если использовали все слова, сбрасываем
    if (usedIndices.size >= stressWords.length) {
        usedIndices.clear();
    }
    
    // Выбираем случайный индекс
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * stressWords.length);
    } while (usedIndices.has(randomIndex));
    
    usedIndices.add(randomIndex);
    return stressWords[randomIndex];
}

// ПОКАЗАТЬ СЛЕДУЮЩЕЕ СЛОВО
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
    } else {
        word1.innerHTML = formatWordWithStress(currentWordData.incorrect);
        word2.innerHTML = formatWordWithStress(currentWordData.correct);
    }
    
    // Обновляем прогресс
    updateProgress();
}

// ОБНОВЛЕНИЕ ПРОГРЕССА
function updateProgress() {
    // Прогресс-бар (циклический, каждые 10 слов)
    const progress = ((wordsDone % 10) / 10) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Количество пройденных слов
    wordsDoneEl.textContent = wordsDone;
    
    // Счетчик правильных ответов
    correctCount.textContent = correctAnswers;
    
    // Процент правильных
    const percent = totalAttempts > 0 ? Math.round((correctAnswers / totalAttempts) * 100) : 0;
    correctPercent.textContent = `${percent}%`;
}

// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ
window.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена');
    
    // По умолчанию выбран тренажер "Ударения"
    const stressOption = document.getElementById('stress');
    if (stressOption) {
        stressOption.classList.add('active-option');
        selectedTrainerText.textContent = "Задание 4: Ударения";
        
        // Активируем кнопку СРАЗУ
        startBtn.disabled = false;
    }
    
    // Инициализируем прогресс
    updateProgress();
});
