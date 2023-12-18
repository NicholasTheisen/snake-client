let connection; // Stores the active TCP connection object.

const setupInput = (conn) => {
  connection = conn;
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
  if (key === 'w') {
    connection.write('Move: up');
  } 
  if (key === 'a') {
    connection.write('Move: left');
  } 
  if (key === 's') {
    connection.write('Move: down');
  } 
  if (key === 'd') {
    connection.write('Move: right');
  } 

  // Additional logic for handling other user inputs can be added here
};

module.exports = { setupInput };