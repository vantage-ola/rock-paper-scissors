let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r' , 'p' , 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convToWord(letter) {

  if (letter == "r" ) return "Rock";
  if (letter == "p") return "Paper";
  return "Scissors";
}


function win(userChoice , computerChoice) {
  const smallUserWord = "you".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore ++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convToWord(userChoice)}${smallUserWord}   beats   ${convToWord(computerChoice)}${smallcompWord} .You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add('grey-glow');
  const smallUserWord = "you".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convToWord(userChoice)}${smallUserWord}   equals  ${convToWord(computerChoice)}${smallcompWord} . A draw.`;
  setTimeout(()=>userChoice_div.classList.remove('grey-glow'), 300);
}
function lose(userChoice, computerChoice) {
  computerScore ++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "you".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add('red-glow');
  result_p.innerHTML = `${convToWord(userChoice)}${smallUserWord}   loses to   ${convToWord(computerChoice)}${smallcompWord} .You lost...`;
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}


function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice
      );
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }

  }


  function main() {
    rock_div.addEventListener('click' , () => game("r"));

    paper_div.addEventListener('click' , () =>  game("p"));

    scissors_div.addEventListener('click' , () => game("s"));
  }

main();
