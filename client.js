const net = require('net');

// establishes connection with the game server
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: NT');
    setInterval(() => {
      // conn.write('Move: up');
    }, 50);
  });

  return conn;
};



module.exports = { connect };
