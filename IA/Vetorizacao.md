## Técnicas de Condicionamento de IA
Existem algumas formas de controle de IA que consistem, resumidamente, em especializar a IA em alguma atividade, criando padrões que podem ser entendidos como pilares fundamentais para seu funcionamento. Sejam comportamentais ou construtivos, estes pilares, do ponto de vista do usuário, a tornam mais objetiva, cumprindo exatamente a função que lhe é proposta, ou seja, atendendo aquilo que lhe é esperado.

Algumas dessas técnicas são:

- Prompt engineering- Acionar com um prompt limitando a IA a agir de uma determinada forma;
- Fine tunning- Especializar a IA em alguma área;
- Constitucional AI- A IA realiza uma autoavaliação de suas as respostas;

## Banco Vetorizado
Base de dados que contém uma divisão por identificação numérica. Isso facilita a comparação da resposta do usuário com a base de dados, porque a IA é muito melhor comparando números do que textos. Este banco pode ser entendido da seguinte forma: "Imagine uma estante de livros que possui vários repartimentos. Cada um destes compartimentos possui uma notação numérica sinalizando o assunto daqueles livros, além de que, em cada divisória, alguns livros se repetem. Por exemplo, na primeira estante tem o pequeno príncipe e a bíblia, na segunda o primeiro livro é a bíblia e, em seguida, o Livro de mórmon."

## Divisão de chunks
São pedaços de dados que, juntos, formam uma unidade inteira. Então, se for um PDF com 200 páginas, por exemplo, cada chunk vai ter 3 páginas e um embedding. Quando a IA recebe a resposta do usuário ele a **entende** como um embedding e compara com os resultados da base de dados vetorizada. **Embedding é a representação numérica de um dado**. 