/*LEARNINGS:
=>the HTML input ele willalways return a str as value .we need to convert it to num if we want it using Number().
=>if we want the content of the input field we use ".value".
Manuplating css:
 =>whenever we manipulate css we select the ele and its style property and apply the css property.
 =>and the style value should always be mentionedin str.
 =>whenever we do style manipulation the style changes are applied as "inline-styles".As inline styles have more priority.

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displaymsg(msg) {
  document.querySelector(".message").textContent = msg;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displaymsg("🔴 No Number");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displaymsg("🥳 Correct Answer");

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //css manipulation
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displaymsg(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displaymsg("💥 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  displaymsg("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  //css manipulation
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
