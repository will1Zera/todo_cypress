<div align="center">
    <br>
    <h1 align="center"> Automação de testes front-end Cypress</h1>
    <p align="center">
        <a href="#sobre-o-desafio">Sobre</a> | 
	<a href="#ambiente-local">Ambiente</a> | <a href="#executando-os-testes">Testes</a>
    </p>
    <p align="center"> 
        <i><h5>Automação de testes da Aplicação <a href="https://listadetarefasroxa.netlify.app/">Todo-list</a></h5></i
    </p>
</div>
<br>

## Sobre o desafio
Foi desenvolvido a automação front-end da aplicação todo-list, que se encontra no link abaixo. 
##### Documentos complementares:
- <a href="https://github.com/will1Zera/todolist">Repositório da aplicação</a>
- <a href="/Plano-de-teste.md">Plano de testes</a>
##### Pré requisitos:
- <a href="https://nodejs.org/en">Node js</a>

## Ambiente local
Primeiramente, você deve clonar o projeto de automação de testes na sua máquina. Execute o seguinte comando no terminal:

```sh
git clone https://github.com/will1Zera/todo_cypress.git
```

## Executando os testes
Depois de clonar o projeto, você deve abrir um novo terminal na pasta raiz do projeto e executar o seguinte comando: 

```sh
npx cypress run
```
Para que os testes executem sem problemas, é necessário seguir o passo anterior e executar a API localmente.

## Resultado dos testes
Logo após executar os testes, será mostrado no terminal o resultado dos mesmos. Você também pode conferir a gravação do teste que fica disponível na pasta "videos".

```sh
mvn allure:serve
```

## Importante
1. Para que ocorra tudo certo, siga a ordem correta de comandos listados.
2. Todos os créditos ao diretório original da <a href="https://github.com/will1Zera/todolist">Aplicação</a>.

<br>
by <a href="https://github.com/will1Zera">William Bierhals</a> 😄 <br>
📥 <a href="https://www.linkedin.com/in/williambierhals/">Linkedin</a>