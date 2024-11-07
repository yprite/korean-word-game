const syllables = [
    { korean: '가', correct: 'ka', options: ['ka', 'na', 'da'] },
    { korean: '나', correct: 'na', options: ['ka', 'na', 'da'] },
    { korean: '다', correct: 'da', options: ['ka', 'na', 'da'] },
    // Add more syllables and their respective transliterations here
];

let score = 0;
let totalQuestions = 0;
let maxQuestions = 10; // Default value
let timeRemaining = 30; // Default value
let timer;

function getRandomSyllable() {
    const randomIndex = Math.floor(Math.random() * syllables.length);
    return syllables[randomIndex];
}

function loadNewSyllable() {
    if (totalQuestions >= maxQuestions) {
        clearInterval(timer);
        document.getElementById('timer').textContent = parseInt(document.getElementById('time-setting').value) - timeRemaining + " sec";
        document.getElementById('feedback').textContent = 'Quiz Completed! Final score: ' + score;
        document.querySelector('.game-area').classList.remove('visible');
        document.querySelector('.restart-button').classList.add('visible');
        return;
    }

    const selectedSyllable = getRandomSyllable();
    document.getElementById('korean-syllable').textContent = selectedSyllable.korean;

    const optionsDivs = document.querySelectorAll('.option');
    optionsDivs.forEach((div, index) => {
        div.textContent = selectedSyllable.options[index];
        div.onclick = () => checkAnswer(selectedSyllable.options[index]);
    });

    totalQuestions++;
    document.getElementById('total-questions').textContent = maxQuestions;
    document.getElementById('feedback').textContent = 'Select the correct pronunciation.';
}

function checkAnswer(selectedOption) {
    const currentSyllable = document.getElementById('korean-syllable').textContent;
    const correctAnswer = syllables.find(syllable => syllable.korean === currentSyllable).correct;

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById('feedback').textContent = `Correct!`;
    } else {
        document.getElementById('feedback').textContent = `Wrong! The correct answer was ${correctAnswer}.`;
    }

    document.getElementById('correct-answers').textContent = score;

    setTimeout(loadNewSyllable, 1000);
}

function startTimer() {
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            document.getElementById('timer').textContent = `Time: ${timeRemaining}`;
        } else {
            clearInterval(timer);
            document.getElementById('feedback').textContent = 'Time is up! Final score: ' + score;
            document.querySelector('.game-area').classList.remove('visible');
            document.querySelector('.restart-button').classList.add('visible');
        }
    }, 1000);
}

function startGame() {
    score = 0;
    totalQuestions = 0;
    timeRemaining = parseInt(document.getElementById('time-setting').value);
    maxQuestions = parseInt(document.getElementById('total-questions-setting').value);

    document.getElementById('total-questions').textContent = maxQuestions;
    document.getElementById('correct-answers').textContent = score;
    document.getElementById('feedback').textContent = 'Select the correct pronunciation.';
    document.getElementById('timer').textContent = `Time: ${timeRemaining}`;

    document.querySelector('.start-button').style.display = 'none';
    document.querySelector('.restart-button').classList.remove('visible');
    document.querySelector('.settings').style.display = 'none';
    document.querySelector('.scoreboard').classList.add('visible');
    document.querySelector('.feedback').classList.add('visible');
    document.querySelector('.game-area').classList.add('visible');

    loadNewSyllable();
    startTimer();
}

function restartGame() {
    document.querySelector('.start-button').style.display = 'block';
    document.querySelector('.settings').style.display = 'block';
    document.querySelector('.restart-button').classList.remove('visible');
    document.querySelector('.scoreboard').classList.remove('visible');
    document.querySelector('.feedback').classList.remove('visible');
    document.querySelector('.game-area').classList.remove('visible');
    document.getElementById('feedback').textContent = '';
    document.getElementById('timer').textContent = 'Time: 30';
    document.getElementById('total-questions').textContent = '0';
    document.getElementById('correct-answers').textContent = '0';
}

window.onload = () => {
    document.querySelector('.game-area').classList.remove('visible');
};