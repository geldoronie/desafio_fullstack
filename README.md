# Overview

Teste Full stack.

# Usage
Para rodar em ambiente local:

* PostgreSQL precisa ser instalado.

1. Clone o repositório.<br/>
	[dir]> git clone https://github.com/yt112358/desafio_fullstack.git<br/>
	
2. [Backend]<br/>
	2-1. Vai para a pasta backend: <br/>
  		cd desafio_fullstack/backend
  
	2-2. Edite .env file na pasta de 2-1.<br/>
		PORT=3000             => Port do servidor WEB<br/>
		DB_PORT=5432          => Port do banco de dados<br/>
		DB_HOST=localhost     => Nome do host<br/>
		DB_USER=postgres      => Usuário do banco de dados<br/>
		DB_DATABASE=postgres  => Nome do schema<br/>
		DB_PASSWORD=root      => Senha para o usuário<br/>
  
	2-3. Execute command abaixo na pasta de 1.<br/>
		[dir]/backend> npm install<br/>
		[dir]/backend> node initdb.js<br/>
		[dir]/backend> node index.js<br/>
  
<p/>

3. [Frontend]<br/>
	3-1. Execute command embaixo na pasta frontend/robbyson.<br/>
		*** Edite .env no caso necessário.<br/>
		
	[dir]> cd frontend/robbyson<br/>
	[dir]/frontend/robbyson> npm install<br/>
	[dir]/frontend/robbyson> npm run start

## Problemas Encontrados

- No frontend seria interessante ter colocado uma mascara para que o usuario saiba qual o formato correto da data
- No momento de alterar uma tarefa a atualização falha devido ao formato da data, pois o backend so aceita data no padrão americano porem a informação utilizada na tela esta no formado brasileiro, logo faltou tratar melhor o formato de entrada de datas no frontend e backend
- Após concluir uma tarefa esta sendo possivel editar as informações da tarefa concluida