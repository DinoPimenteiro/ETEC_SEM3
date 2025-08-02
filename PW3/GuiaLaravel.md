<h1> Data: 01/08/2025</h1>
<h1> Tema da aula: </h1>

<ul> 
  <li>Framework</li>
  <p> 
  <strong> Framework </strong> são estruturas de código já prontas que facilitam a criação de algum projeto.
  Então, utilizando frameworks, muitos recursos já vem prontos, como estruturas de login, segurança,
  autenticação, conexão com banco de dados, etc. Os frameworks foram criados por comunidades gigantes de programadores
  que visavam aprimorar a linguagem, abstraindo toda a parte repetitiva que precisava ser refeita em todo projeto.
  Estabelecendo uma relação, os frameworks seriam como uma estrutura já pronta de uma casa, com as paredes, piso, teto,
  e tudo aquilo que toda casa possui.
  </p>

  <li>CMS</li>
  <p>Content Management System ou Sistema de Gestão de Conteúdo (CMS), é basicamente é forma mais simples de 
  construir uma aplicação. Ele, além de oferecer de forma extremamente abstraída os recursos para criação de um site,
  torna possível a publicação e gerenciamento de sites sem a necessidade de conhecimentos avançados de programação.
  Alguns exemplos de CMS são: WordPress, Joomla, Wix e Drupal.
  </p>
  
  <li>Arquitetura Model View Control (MVC) </li>
  <p>
  MVC é uma das mais simples e eficientes de organizar a produção de um sistema, pois, a partir dele, as partes envolvidas
  trabalham diretamente em seus respectivos ambientes (frontend, backend), não havendo a precisão de um grupo sobrepôr o outro.
  A sigla estabelece exatamente essa separação, sendo <strong> Model </strong> relacionada a tudo que diz direito ao banco de dados e lógica de negócio (conexão, tabelas, validação de dados), View seria toda a parte visual que será mostrada para o usuário e, por fim, 
  o Controller que estabelece a relação entre os outros dois.
  </p>

  <li>Repositórios </li>
  São as conexões que permitem a instalção de bibliotecas e frameworks referentes a cada liguagem.

  Node Package Manager (npm)- JavaScript/Node
  yarn- JavaScript/Node
  composer- PHP
  
  <li>Instalação do Laravel</li>
  1- Acessar o link e realizar o download do composer. Durante a instalação é necessário ativar o modo desenvolvedor e 
  adicionar ao PATH: https://getcomposer.org/

  2- 

  <li>Laravel</li>
  <p>
  O <strong> Laravel é um framework de PHP </strong> que traz consigo muitos atalhos para a produção.
  Ele já é modelado para a utilização da arquitetura MVC, mas também é possível utilizar outras por conta
  de sua versatilidade. Ele utiliza sistemas que o diferem da linguagem padrão, alguns deles são: o mecanismo de rotas (routes),
  a migração de banco de dados (migration) e a própria separação dos assuntos de backend, frontend e dados (Model View Control).
  <br>
  A utilização de rotas constitui na criação de caminhos para a sua aplicação, então, ao invés das telas serem colocadas diretas na url,
  como `localhost/inicio.php`, caminhos a levarão para uma respectiva tela. Exemplo de código:

  `use Illuminate\Support\Facades\Route;

    Route::get('/', function () {
        return view('inicio');
    }); `

  Neste exemplo, quando a rota base for acessada, ou seja, localhost:8000 (sendo 8000 a porta que ele se conectou), ela
  irá mostrar a tela chamada inicio.

  A migração de banco de dados estabelece, como o próprio nome diz, uma maneira de levar as tabelas para outro banco de dados.
  Através dele é possível criar, alterar ou até deletar tabelas através de um script PHP.

  Por fim, mas não menos importante, a utilização do padrão MVC que define os pilares da plicação em seus respectivos espaços.
  </p>

</ul>


-------------------------------------------------------------------------------------
composer instaler

pasta pw3

Utilizar o comando:
composer global require laravel/installer

<h1> Tutorial de instalação: </h1>

Link: composer.org/download

Ativar modo desenvolvedor 

escolher xamp e add this php to your path
nao usar proxy
instalar

abrir o xamp 
config apache 
procurar zip e apagar o ; e salvar e ai dar start no apache e mysql 



>laravel new (example.app) ( enter)

>none (enter)

[pest]

>  enter ( vai usar o pest)

* instalando ultima versão laravel*


cd appAula01
npm install && npm run build
composer run dev


>mysql

>yes
>yes

>cd appAula01

>dir

>composer run dev ( enter) 

app url ( copiar )  e colar no google