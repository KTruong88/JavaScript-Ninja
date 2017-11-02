quiz = {
  "name": "Super Hero Name Quiz",
  "description": "How many super heroes can you name?",
  "question": "What is the real name of ",
  "questions":[
   { "question": "Superman", "answer": "Clarke Kent" },
   { "question": "Batman", "answer": "Bruce Wayne" },
   { "question": "Wonder Woman", "answer": "Dianna Price" }
]
}
var score = 0

play(quiz);

function play(quiz) {
  var i, quesiton, answer, max = quiz.questions.length;
  for (i = 0, i < max; i++) {
      question = quiz.questions[i].question;
      answer = ask(question);
      check(answer);
  }
  gameOver();

  function ask(question) {
    return prompt(quiz.question + question);
  }
  function check(answer) {
    if (answer === quiz.questions[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong!");
    }
  }
  function gameOver() {
    alert("Game Over, you scored " + score + " points");
  }
}

