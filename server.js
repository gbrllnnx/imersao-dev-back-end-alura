import express from 'express';
import routes from './src/routes/routes.js';

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => {
  console.log('Servidor online');
});
