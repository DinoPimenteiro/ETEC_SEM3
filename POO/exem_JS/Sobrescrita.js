class Brasileiro{
  Falar(){
    console.log("Olá mundo!")
  }
}

class Ingles extends Brasileiro{
  Falar(){
    console.log("Hello World!")
  }
}

var João = new Brasileiro();
var John = new Ingles();

João.Falar();
John.Falar();