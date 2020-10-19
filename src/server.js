import http from 'http';
import app from './app';

const server = http.createServer(app);

const port = process.env.PORT || 3002;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at port ${port}.`);
});
