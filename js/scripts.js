var quiz = [
  ["What is Superman's real name?", "Clarke Kent"]
  ["what is Wonderwoman's real name?", "Dianna Prince"]
  ["What is Batman's real name?", "Bruce Wayne"]
];
var score = 0

play(quiz);

function play(quiz) {
  var i, quesiton, answer, max;
  for (i = 0, max = quiz.length; i < max; i++) {
      question = quiz[i][0];
      answer = ask(question);
      check(answer);
  }
  gameOver();

  function ask(question) {
    return prompt(question);
  }
  function check(answer) {
    if (answer === quiz[i][1]) {
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

