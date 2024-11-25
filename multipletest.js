// 문제 생성 및 채점 로직
let num1, num2, correctAnswer;
let score = 0;
let answerChecked = false;

function generateProblem() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('submit').disabled = false;
    answerChecked = false;
}

function checkAnswer() {
    if (answerChecked) return; // 이미 체크된 경우 함수 종료
    const userAnswer = parseInt(document.getElementById('answer').value);
    const resultElement = document.getElementById('result');
    if (userAnswer === correctAnswer) {
        resultElement.textContent = '정답입니다!';
        resultElement.style.color = 'green';
        score++;
    } else {
        resultElement.textContent = `틀렸습니다. 정답은 ${correctAnswer}입니다.`;
        resultElement.style.color = 'red';
    }
    document.getElementById('scoreValue').textContent = score;
    document.getElementById('submit').disabled = true; // 버튼 비활성화
    document.getElementById('answer').value = ''; // 입력값 초기화
    document.getElementById('answer').blur(); // 포커스 제거
    answerChecked = true; // 답변 체크 완료 표시
    setTimeout(generateProblem, 2000);
}

document.getElementById('submit').addEventListener('click', checkAnswer);
generateProblem();
