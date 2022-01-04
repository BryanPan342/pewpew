import http from 'http';
import Gun from 'gun';

const server = http.createServer();

const PORT = process.env.PORT || 8000;

console.log(PORT);

const www = server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening at: http://localhost:' + PORT);
});

Gun({web: www});