// import conectarAoBanco from './src/config/dbConfig';
// OBS.: NAO ESQUECER de adicionar a extensao do arquivo (.js) ao importar num ambiente Node.JS
import conectarAoBanco from '../config/dbConfig.js';

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getAllPosts() {
  const collection = conexao.db('imersao-instabytes').collection('posts');

  return collection.find().toArray();
};
