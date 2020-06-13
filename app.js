//var => function scoped
//ES6 (or ES2015) :: let, const => block-scoped

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

const scoreBoard_div = document.querySelector(".score_board");
const result_div = document.querySelector(".result >p");

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function computerChoice () {
  const c = ['r','p','s'];
  const randomNumber = Math.floor(Math.random()*3);
  return c[randomNumber];
}

function uWin(UserChoice,ComChoice){
  console.log("uWin is called");
  userScore++;
  userScore_span.innerHTML= userScore;
  result_div.innerHTML ='Your: [ '+UserChoice+' ] beats ComputerS: [ '+ComChoice+' ]'+'  **YOU WINS**';
}

function aTie(UserChoice,ComChoice){
  console.log("aTie is called");
  result_div.innerHTML ='Your: [ '+UserChoice+' ] same as the ComputerS: [ '+ComChoice+' ]**ITS A TIE**';
}

function uLose(UserChoice,ComChoice){
  console.log("uLose is called");
  computerScore++;
  computerScore_span.innerHTML = computerScore;
    result_div.innerHTML ='Your: [ '+UserChoice+' ] looses ComputerS: [ '+ComChoice+' ]**COMPUTER WINS**';
}


function game (UserChoice)
{
  const ComChoice = computerChoice();
  const playCondition = UserChoice+ComChoice;

  switch (playCondition) {
    case 'rs':
    case 'pr':
    case 'sp':
     console.log("User Wins...!!!");
     uWin(UserChoice,ComChoice);
      break;

    case 'rr':
    case 'pp':
    case 'ss':
     console.log("Its a TIE.. ");
     aTie(UserChoice,ComChoice);
      break;

    default:
     console.log("User looses....");
     uLose(UserChoice,ComChoice);

  }

}

function main (){
  rock_div.addEventListener('click',function(){
    game("r");
  })

  paper_div.addEventListener('click',function(){
    game("p");
  })

  scissors_div.addEventListener('click',function(){
    game("s");
  })
}

main();
