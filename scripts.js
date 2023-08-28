function CriaLivro(titulo, autor, edicao) {
    this.livroTitulo = titulo;
    this.livroAutor = autor;
    this.livroEdicao = edicao
         
}

const livro1 = new CriaLivro('A Arte da Guerra', 'Sun Tzu', 3);

console.log(livro1);
