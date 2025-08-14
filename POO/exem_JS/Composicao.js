// Comportamento de andar
function podeAndar(state) {
  return {
    andar() {
      console.log(`${state.nome} está andando... 🚶‍♂️`);
    }
  };
}

// Comportamento de falar
function podeFalar(state) {
  return {
    falar(mensagem) {
      console.log(`${state.nome} diz: "${mensagem}" `);
    }
  };
}

// Função fábrica que compõe o robô
function criarRobo(nome) {
  const state = { nome };

  return {
    ...podeAndar(state),
    ...podeFalar(state)
  };
}

// Usando
const robo1 = criarRobo("RoboTron");
robo1.andar();             
robo1.falar("Olá, humano");
