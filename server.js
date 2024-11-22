import express from 'express';

const app = express();
const port = 3000;

// recebe texto e converte em JSON manipulavel
app.use(express.json());

const posts = [
  {
    id: 1,
    descricao: 'uma foto teste',
    imagem: 'https://placecats.com/millie/300/150'
  },
  {
    id: 2,
    descricao: 'Gato brincando com bola',
    imagem: 'https://placecats.com/millie/300/150'
  },
  {
    id: 3,
    descricao: 'Paisagem montanhosa',
    imagem: 'https://placecats.com/millie/300/150'
  },
  {
    id: 4,
    descricao: 'Cachorro correndo na praia',
    imagem: 'https://placecats.com/millie/300/150'
  },
  {
    id: 5,
    descricao: 'Comida deliciosa',
    imagem: 'https://placecats.com/millie/300/150'
  },
  {
    id: 6,
    descricao: 'Cidades futuristas',
    imagem: 'https://placecats.com/millie/300/150'
  }
];

function buscarPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
};

const gerarIdAleatorio = (arr) => Math.floor(Math.random() * arr.length);

app.listen(port, () => {
  console.log('Servidor online');
});

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

app.get('/posts/:id', (req, res) => {
  const index = buscarPostPorId(req.params.id);

  res.status(200).json(posts[index]);
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

// Rota alternativa sugerida pela Luri no dia 2
// app.get('/posts/random', (req, res) => {
  // nao funciona pois '/posts/---' ja foi definido ao definir '/posts/:id'
  // logo, a rota /posts/ espera um id como proximo parametro
app.get('/random', (req, res) => {
  const randomIndex = gerarIdAleatorio(posts);

  res.status(200).json(posts[randomIndex]);
});
