alert("Welcome to Quiz Ninja!");

var question = "What is Superman's real name?"
var answer = prompt(question);
alert("You answered " + answer);

var quiz = [
  ["What is Superman's real name?","Clarke Kent"]
  ["what is Wonderwoman's real name?", "Dianna Prince"]
  ["What is Batman's real name?", "Bruce Wayne"]
];
var score = 0;

  for(var i=0, max=quiz.length; i<max; i++) {
    var answer = prompt(quiz[i][0]);
    if(answer === quiz[i][1]) {
      alert("Correct!");
      score++;
  } else {
    alert("Wrong!");
  }
}

alert("Game Over, you scored " + score + " points");