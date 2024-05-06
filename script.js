const question = document.getElementById('question');
const answers = document.getElementById('answers').getElementsByTagName('li');

// Sample question and answers
const questionText = "What is the capital of France?";
const correctAnswer = "Paris";
const allAnswers = ["London", "Berlin", "Madrid", "Paris"];

// Display question and answers
question.textContent = questionText;
for (let i = 0; i < allAnswers.length; i++) {
    answers[i].textContent = allAnswers[i];
}

// Function to check answer
function checkAnswer(selectedAnswer) {
    const userAnswer = selectedAnswer.textContent;
    if (userAnswer === correctAnswer) {
        alert("Correct!");
        // Add code to move to the next question or do something else
    } else {
        alert("Incorrect. Try again!");
        // Add code to handle incorrect answer
    }
}

