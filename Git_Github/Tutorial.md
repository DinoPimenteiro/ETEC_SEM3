## Comandos GIT

``git init`` {Inicia o git};

`git status` {Indica o estado de cada arquivo, se já foi preparado para o commit ou se o commit já foi feito}

`git log` {Mostra todos os commit até aquele ponto presente}
- `git --no-pager log` {Faz o mesmo, mas não gera um arquivo}

`git add` 
- `git add nome-do-arquivo.txt` {Prepara um arquivo específico para o commit}
- `git add .` {Prepara todos os arquivos para o commit}

`git commit -m` "nome-do-commit" {Realiza o commit}
`git checkout` {Se locomove de um espaço de criação para outro}
- `git checkout -b "nova-branch"` {Cria e já troca para uma nova branch}
- `git checkout (id do commit)`

`git branch` {Mostra todas as branchs do projeto}

`git merge "nome-da-branch"`{Quando na branch principal, é possível realizar esse comando e mesclar as branchs adjacentes com a principal}

`git remote` {Gerencia os repositórios remotos}
- `git remote remove origin` {Remove o repositório de origem}
- `git remote add origin (link do repositório)` {linka o projeto com o repositório do github}

`git clone` {Traz um repositório para a sua máquina}

``git push`` {Envia um projeto para o github quando ele está preciamente selecionado}
- `git push -u origin nome-da-branch` {coloca como principal aquela branch}
## Mecanismos GitHub
Quando é necessário mexer num código a utilização do *fork* é útil. Ele permite criar uma ramificação de um projeto paralelo para o perfil do usuário e assim fazer modificações. Após a conclusão das modificações é possível abrir um *pull request* que é um pedido do usuário para o dono original daquele projeto para juntar as modificações do usuário para o projeto original.



Detalhe:
- Se você dá "git log" enquanto está numa versão antiga do projeto ele mostrará os commits feitos antes daquele versão que você está, mas, para mostrar todas, basta usar o comando: git log --all

- No "git log" o HEAD indicar onde você está entre as versões. Para retornar a versão principal basta realizar o seguinte: "git checkout master"

- O github utiliza como padrão para a branch principal a nomenclatura main.

- O comando ` git branch -M novo-nome` renomeia a branch atual para o nome selecionado. Comumente é utilizado para trocar o nome de master para main.
