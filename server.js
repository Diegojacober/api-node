import app from './app';

const port = 3000;

app.listen(port, () => {
  console.log();
  console.log(`Listening port ${port}`);
  console.log(`Acesse em http://localhost:${port}`);
});
