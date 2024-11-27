let currentCategory;
let currentDifficulty;
let questions = [];
let currentQuestionIndex = 0;

function start() {
    document.getElementById('title-page').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
}

function chooseDifficulty(category) {
    currentCategory = category;
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('difficulty-screen').style.display = 'block';
}

function startQuiz(difficulty) {
    currentDifficulty = difficulty;
    generateQuestions();
    currentQuestionIndex = 0;
    document.getElementById('difficulty-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    displayQuestion();
}

function generateQuestions() {
    questions = [];
    for (let i = 0; i < 10; i++) {
        let question = createQuestion(currentCategory, currentDifficulty);
        questions.push(question);
    }
}

function createQuestion(category, difficulty) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let question, answer;

    switch (category) {
        case 'addition':
            question = `${num1} + ${num2} = ?`;
            answer = num1 + num2;
            break;
        case 'subtraction':
            question = `${num1} - ${num2} = ?`;
            answer = num1 - num2;
            break;
        case 'multiplication':
            question = `${num1} × ${num2} = ?`;
            answer = num1 * num2;
            break;
        case 'division':
            question = `${num1} ÷ ${num2} = ?`;
            answer = (num1 / num2).toFixed(2); // limiting to 2 decimal places
            break;
    }
    return { question, answer };
}

function displayQuestion() {
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    let q = questions[currentQuestionIndex];
    container.innerHTML = `<p>${q.question}</p><input type="number" step="any" id="q${currentQuestionIndex}" />`;

    document.getElementById('next-btn').style.display = currentQuestionIndex < questions.length - 1 ? 'inline-block' : 'none';
    document.getElementById('submit-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';
}

function nextQuestion() {
    let userAnswer = parseFloat(document.getElementById(`q${currentQuestionIndex}`).value);
    questions[currentQuestionIndex].userAnswer = userAnswer;
    currentQuestionIndex++;
    displayQuestion();
}

function submitQuiz() {
    let score = 0;
    questions.forEach((q) => {
        if (parseFloat(q.userAnswer) === parseFloat(q.answer)) {
            score++;
        }
    });
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('score-screen').style.display = 'block';
    document.getElementById('score').innerText = `${score}/10`;
}

function goHome() {
    document.getElementById('score-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
}
