#### Observação

Exemplos de cada característica estão registrados nessa mesma pasta, eles estão representados por JavaScript e C#. Para rodar os exemplos basta realizar o seguinte comando no terminal: `node POO/exem_POO/nome_arquivo.js` (para arquivos JavaScript) e ` dotnet run --project ./POO/exem_POO` (é necessário ter o node, o .NET SDK (https://dotnet.microsoft.com/en-us/download) e a extensão ` C# Dev Kit` instalados)

## Herança

A herança na linguagem orientada a objetos é o conceito que possibilita classes herdarem elementos de outras classes. Por exemplo, tendo um objeto aluno com o método estudar e um outro chamado professor com o método corrigir, pode-se afirmar que o professor dentro dessa lógica também estuda, logo, o método que pertence a um pode ser passado para outro assim como seus atributos.

## Encapsulamento

O encapsulamento é um protocolo da linguagem orientada a objeto que permite gerenciar o nível de acesso do usuário aos dados, em outras palavras, serve para proteção e ocultação de dados. Ele podem ser categorizados como public, private ou protected. O modificar public permite que você possa modificar ou acessar aquele dado/variável de qualquer parte do código, de maneira **DIRETA**, ou seja, não é necessário nenhum método ou meio específico para modificar o nome, o acesso é completamente liberado.

Entretanto em casos de dados sensíveis deve-se pôr o modificador private ou protected, instaurando um acesso restrito a variável. É nesse momento que os métodos get e set são usados, servindo como portas de acesso à variável, ou seja, são eles que descrevem o que, como e quando os dados podem ser mostrados.

## Polimorfismo

É quando objetos diferentes chamam o mesmo método e o programa interpreta os métodos como sendo os mesmos mas retornando resultados diferentes. Ele entende que cada objeto possui suas características, proporcionando essa diferenciação. A definição dos métodos pode ser dada de duas formas, a depender da linguagem de programação e da estrutura do código. A primeira seria pela **Sobrescrita** de métodos, onde o método é herdado de uma outra classe e dentro desta é sobrescrito. 

Já a sobrecarga funciona não funciona em linguagens como JavaScript e PHP, mas pode ser visto em csharp. Ele é um poco mais complexo de ser usado em comparação com a outra opção, mas também pode ser um recurso válido. Em resumo, ele permite colocar diferentes parâmetros no mesmo método.

## Abstração

O conceito deste pilar tem como base retirar o que é mais importante de um elemento e ilustrar ela com as informações essenciais **adaptadas para aquele contexto**.

A abstração serve para filtrar o código ocultando as partes complexas e mostrando as necessárias e úteis. Na prática ele é muito parecido com a interface, mas podendo conter construtores e não sendo um contrato para todas as outras classes como a interface faz. Interface é uma classe que engloba todas as outras, seria "a mãe de todas".

## Composição 

A composição trata-se do pilar de reutilização de código no paradigma da programação orientada a objetos. Ela estabelece a **construção** de objetos a partir de partes de outros objetos, então, na prática, isto ajuda na reutilização e manutenção do código, levando a divisão dos métodos que funcionam através de uma relação de interdependência entre si.





