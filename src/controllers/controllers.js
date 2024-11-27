import getAllPosts from "../models/postsModel.js";

async function postsController(req, res) {
  const result = await getAllPosts();
  res.status(200).json(result);
};

async function livroController(req, res) {
  const livro = {
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien",
    "ano": 1954,
    "genero": "Fantasia",
  };

  res.status(200).send(livro); 
};

export { postsController, livroController };
