let livros = ["Harry Potter", "Dom Casmurro", "Cinderela", "O Pequeno Príncipe", "Diário de um Banana"];

let posicao = livros.indexOf("Dom Casmurro");

if (posicao === -1) {
alert("livro não encontrado");
}
else {
alert("livro encontrado na posição: ".concat(posicao));
}