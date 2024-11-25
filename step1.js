const questions = [
    { question: '6 × 7 = ?', answer: 42 },
    { question: '6 × 4 = ?', answer: 24 },
    { question: '6 × 5 = ?', answer: 30 },
    { question: '6 × 1 = ?', answer: 6 },
    { question: '6 × 3 = ?', answer: 18 },
    { question: '6 × 2 = ?', answer: 12 },
    { question: '5 × 4 = ?', answer: 20 },
    { question: '4 × 3 = ?', answer: 12 },
    { question: '5 × 5 = ?', answer: 25 },
    { question: '5 × 6 = ?', answer: 30 },
    { question: '5 × 7 = ?', answer: 35 },
    { question: '5 × 8 = ?', answer: 40 },
    { question: '4 × 9 = ?', answer: 36 },
    { question: '6 × 6 = ?', answer: 36 },
    { question: '6 × 8 = ?', answer: 48 },
    { question: '6 × 9 = ?', answer: 54 },
    { question: '4 × 5 = ?', answer: 20 },
    { question: '4 × 6 = ?', answer: 24 },
    { question: '5 × 3 = ?', answer: 15 },
    { question: '3 × 3 = ?', answer: 9 },
    { question: '2 × 2 = ?', answer: 4 },
];

let wrongAnswers = [];
let startTime = Date.now();

const questionsContainer = document.getElementById('questions-container');

questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = `
        <label>${q.question} <input type="number" class="answer" data-index="${index}"></label>
    `;
    questionsContainer.appendChild(questionDiv);
});

document.getElementById('next-button').addEventListener('click', () => {
    const answers = document.querySelectorAll('.answer');
    answers.forEach((input, index) => {
        if (parseInt(input.value) !== questions[index].answer) {
            wrongAnswers.push(questions[index]);
        }
    });

    const timeTaken = Math.round((Date.now() - startTime) / 1000);
    document.getElementById('stats').innerText = `틀린 문제 개수: ${wrongAnswers.length}, 소요 시간: ${timeTaken}초`;

    // STEP2로 이동
    localStorage.setItem('wrongAnswers', JSON.stringify(wrongAnswers));
    window.location.href = 'step2.html';
});

