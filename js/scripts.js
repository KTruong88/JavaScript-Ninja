funcion update(element, content, klass) {
  var p = element.firstChild || document.createElement("p");
  p.textContent = content;
  element.appendChild(p);
  if (klass) {
    p.className = klass;
  }
}

var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");

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
  update($score, score)

  var i, quesiton, answer, max = quiz.questions.length;
  for (i = 0, i < max; i++) {
      question = quiz.questions[i].question;
      answer = ask(question);
      check(answer);
  }
  gameOver();

  function ask(question) {
    update($question, quiz.question + question);
    return prompt("Enter your answer:");
  }
  function check(answer) {
    if (answer === quiz.questions[i].answer) {
      update($feedback, "Correct!", "right");
      score++;
      update($score, score)
    } else {
      alert("Wrong!");
    }
  }
  function gameOver() {
    update($question, "Game Over, you scored " + score + " points");
  }
}