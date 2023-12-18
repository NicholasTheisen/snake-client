const connect = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // Register the event listener for user input
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit(); // Terminate the game when CTRL + C is pressed
  }
  // Additional logic for handling other user inputs can be added here
};