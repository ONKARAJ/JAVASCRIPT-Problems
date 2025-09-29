// 1. Prompt user to select a number between 0 and 10
let prize = prompt("Choose a number between 0 and 10");

// 2. Convert the response to a number
prize = Number(prize);

// 3. Create a variable for the output message
let outputMessage = "My Selection: " + prize + "\n";

// 4. Use switch statement to assign prizes
let prizeMessage = "";

switch (prize) {
  case 0:
    prizeMessage = "Oops! You get a virtual hug 🤗";
    break;
  case 1:
    prizeMessage = "You win a shiny sticker 🌟";
    break;
  case 2:
    prizeMessage = "You win a cup of imaginary coffee ☕";
    break;
  case 3:
    prizeMessage = "You win a high-five from the universe ✋";
    break;
  case 4:
    prizeMessage = "You win a mystery box 📦";
    break;
  case 5:
    prizeMessage = "You win a golden ticket to dreamland 🎫";
    break;
  case 6:
  case 7:
    prizeMessage = "You win a combo: a rainbow ride 🌈 and a unicorn plush 🦄";
    break;
  case 8:
  case 9:
  case 10:
    prizeMessage = "Jackpot! You win a treasure chest of joy 💰🎉";
    break;
  default:
    prizeMessage =
      "Invalid selection. Please choose a number between 0 and 10.";
}

// 6. Output the final message
alert(outputMessage + prizeMessage);
