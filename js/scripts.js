quiz = {
  "name": "Super Hero Name Quiz",
  "description": "How many super heroes can you name?",
  "question": "What is the real name of ",
  "questions":[
   { "What is Superman's real name?": "Clarke Kent" },
   { "what is Wonderwoman's real name?": "Dianna Prince" },
   { "What is Batman's real name?": "Bruce Wayne" }
]
}
var score = 0

play(quiz);

function play(quiz) {
  var i, quesiton, answer, max = quiz.length;
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

