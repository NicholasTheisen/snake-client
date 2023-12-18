const net = require('net');

// establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // conn.on('connect', () => {
  //   console.log('Successfully connected to game server');
  //   conn.write('Name: NT');
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   }, 50);
  //   // Add more setTimeouts for additional commands if needed
  // });
  
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
