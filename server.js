import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('Servidor online');
});

app.get('/api', (req, res) => {
  res.status(200).send('Hello Mario World!');
});

app.get('/livro', (req, res) => {
  const livro = {
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien",
    "ano": 1954,
    "genero": "Fantasia",
  }

  res.status(200).send(livro);
});
