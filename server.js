import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log();
  console.log(`Listening port ${port}`);
  console.log(`Acesse em http://localhost:${port}`);
});
