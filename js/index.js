import { Card } from "./card.js";
import { NavBar } from "./navBar.js";

const navBar = new NavBar();
const card = new Card();
navBar.criaNavBar();

const produtos = [
    {
        nome: 'Pizza de mussarela',
        texto: 'Essa é a melhor pizza do Senac', 
        imagem: 'https://www.skymsen.com/uploads/blog/qual-o-melhor-queijo-para-pizza.jpg'
    },
    {
        nome: 'Pizza de peperoni',
        texto: 'Essa é a melhor pizza do Senac', 
        imagem: 'https://blog.novasafra.com.br/wp-content/uploads/2016/01/accb7d_37d37d9f1001e88384dafc6e5cc60c4f.jpg_1024-780x450.jpg'
    }
]

produtos.forEach(produto => {
    card.criarCard(produto.imagem, produto.nome, produto.texto);
})