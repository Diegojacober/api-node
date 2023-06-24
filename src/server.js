import app from './app';

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log();
  console.log(`Listening port ${port}`);
  console.log(`Acesse em http://localhost:${port}`);
});
