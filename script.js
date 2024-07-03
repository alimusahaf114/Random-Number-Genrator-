const minNum = 30;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess the number between ${minNum} and ${maxNum}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("Please enter the valid Number...");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter the valid Number!");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Too Low! try Again  ");
    } else if (guess > answer) {
      window.alert("Too High! Try Again.");
    } else {
      window.alert(
        `Correct! The answer was ${answer} you tried ${attempts} attempts`
      );
      running = false;
    }
  }
}
