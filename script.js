const words = ["apple", "chair", "table", "globe", "train"]; // Add more words to this list
let targetWord = getRandomWord(words);
let attempts = 0;
const maxAttempts = 6;

function getRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

function submitGuess() {
  const guess = document.getElementById("guess").value.toLowerCase();
  if (guess.length !== 5) {
    alert("Please enter a 5-letter word.");
    return;
  }
  
  if (attempts >= maxAttempts) {
    alert("You've reached the maximum number of attempts.");
    return;
  }

  let gameBoard = document.getElementById("game-board");
  let row = document.createElement("div");
  row.style.display = "contents";
  gameBoard.appendChild(row);

  for (let i = 0; i < guess.length; i++) {
    let cell = document.createElement("div");
    cell.classList.add("game-cell");
    cell.innerText = guess[i];

    if (guess[i] === targetWord[i]) {
      cell.style.backgroundColor = "#4caf50";
    } else if (targetWord.includes(guess[i])) {
      cell.style.backgroundColor = "#ffeb3b";
    }
    
    row.appendChild(cell);
  }

  attempts++;
  if (guess === targetWord) {
    displayMessage("Congratulations! You've guessed the word!");
    document.getElementById("play-again").style.display = "block";
  } else if (attempts === maxAttempts) {
    displayMessage(`You've reached the maximum number of attempts. The word was: ${targetWord}`);
    document.getElementById("play-again").style.display = "block";
  }
}

// Add this function to the script.js file
function displayMessage(message) {
  const messageContainer = document.getElementById("message");
  messageContainer.innerText = message;
}

// Add this function to the script.js file
function resetGame() {
  attempts = 0;
  targetWord = getRandomWord(words);
  document.getElementById("guess").value = "";
  document.getElementById("game-board").innerHTML = "";
  document.getElementById("message").innerText = "";
  document.getElementById("play-again").style.display = "none";
}