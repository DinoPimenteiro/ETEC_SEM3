class Aluno {
  Estudar(){
    console.log("Estudando...")
  }
}

class Professor extends Aluno { //Extends é o mesmo que extensão, aplicação do conceito de Herança
  Ensinar(){
    console.log("Ensinando...")
  }
}

var Estudante = new Aluno();
var Jeffinho = new Professor();

Estudante.Estudar();

Jeffinho.Estudar();