let computer = ['rock', 'paper', 'scissors'];
computer = computer[Math.floor(Math.random()*computer.length)];
// let me = 'scissors';
// let me = ['paper', 'scissors', 'rock', 'heyo!']
// me = me[Math.floor(Math.random()*me.length)]
let me = prompt("Let's play rock, paper, scissors!")
// Situations where computer wins
if ((computer === 'paper' && me === 'rock') ||
    (computer === 'rock' && me === 'scissors') ||
    (computer === 'scissors' && me === 'paper')) {
  console.log('Computer wins');
}
// Situations where I win
else if ((me === 'paper' && computer === 'rock') ||
         (me === 'rock' && computer === 'scissors') ||
         (me === 'scissors' && computer === 'paper')) {
  console.log('I win');
}
// Tie
else if (computer === me) {
  console.log('Looks like a tie!');
}
// If user inputs invalid choice
else {
  console.log('Please choose rock, paper or scissors');
}
