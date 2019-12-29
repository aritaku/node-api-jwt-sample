import http from 'http';

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (port) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const port = normalizePort(process.env.PORT || '8080');

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = this.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
}

module.exports = (app) => {
  let port = process.env.PORT;
  if (process.env.NODE_ENV === 'local') {
    port = 3000;
  }
  if (!port) port = '8080';
  port = normalizePort(port);
  app.set('port', port);

  const server = http.createServer(app);

  if (process.env.NODE_ENV !== 'test') {
    server.listen(port);
  }
  server.on('error', onError);
  server.on('listening', onListening);
  return server;
};
