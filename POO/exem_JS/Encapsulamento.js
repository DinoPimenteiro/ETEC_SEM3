class Pessoa {
  #cpf;

  constructor(nome, cpf) {
    this.nome = nome;
    this.#cpf = cpf;
  }

  // Forma de acessar esse campo privado:

  ValidarCpf(cpf) {
    return this.#cpf === cpf;
  }
}

var João = new Pessoa("João", 2121);

console.log(João.nome);
console.log(João.cpf);

console.log(João.ValidarCpf(2121)); //Retorna true se estiver certo
