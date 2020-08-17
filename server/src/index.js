const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);
const cors = require('cors');

app.use(cors());

io.on('connect', (socket) => {
  
  socket.on('join', ({ name, room }, callback) => {
  });

  socket.on('disconnect', () => {
  });
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
