import express from 'express';

const posts = [
  {
    descricao: 'uma foto teste',
    imagem: 'https://placecats.com/millie/300/150'
  },
  {
    descricao: 'Gato brincando com bola',
    imagem: 'https://placecats.com/millie/300/150'
  },
  {
    descricao: 'Paisagem montanhosa',
    imagem: 'https://placecats.com/millie/300/150'
  },
  {
    descricao: 'Cachorro correndo na praia',
    imagem: 'https://placecats.com/millie/300/150'
  },
  {
    descricao: 'Comida deliciosa',
    imagem: 'https://placecats.com/millie/300/150'
  },
  {
    descricao: 'Cidades futuristas',
    imagem: 'https://placecats.com/millie/300/150'
  }
];

const app = express();
const port = 3000;

// recebe texto e converte em JSON manipulavel
app.use(express.json());

app.listen(port, () => {
  console.log('Servidor online');
});

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

// Rota alternativa sugerida pela Luri
app.get('/livro', (req, res) => {
  const livro = {
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien",
    "ano": 1954,
    "genero": "Fantasia",
  }

  res.status(200).send(livro);
});
