const questions = [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself—or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as reading the newspaper or watching television",
    "Moving or speaking so slowly that other people could have noticed. Or the opposite—being so fidgety or restless that you have been moving a lot more than usual",
    "Thoughts that you would be better off dead, or of hurting yourself"
];

let currentQuestionIndex = 0;
let totalScore = 0;

function nextQuestion() {
    const response = document.querySelector('input[name="response"]:checked');
    if (!response) {
        alert("Please select an answer");
        return;
    }
    totalScore += parseInt(response.value);

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById("question-title").innerText = `Question ${currentQuestionIndex + 1}`;
        document.getElementById("question-text").innerText = questions[currentQuestionIndex];
        document.querySelector("#question-form").reset();
        document.getElementById("progress").innerText = `${Math.round((currentQuestionIndex / questions.length) * 100)}%`;
    } else {
        window.location.href = `results.html?score=${totalScore}`;
    }
}