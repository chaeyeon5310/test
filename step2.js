const retryQuestions = JSON.parse(localStorage.getItem('wrongAnswers')) || [];

const retryQuestionsContainer = document.getElementById('retry-questions-container');

retryQuestions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = `
        <label>${q.question} <input type="number" class="retry-answer" data-index="${index}"></label>
    `;
    retryQuestionsContainer.appendChild(questionDiv);
});

document.getElementById('finish-button').addEventListener('click', () => {
    let wrongCount = 0;

    const retryAnswers = document.querySelectorAll('.retry-answer');
    retryAnswers.forEach((input, index) => {
        if (parseInt(input.value) !== retryQuestions[index].answer) {
            wrongCount++;
        }
    });

    document.getElementById('retry-stats').innerText = `최종 틀린 문제 개수: ${wrongCount}`;
});
