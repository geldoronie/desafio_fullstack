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
  
	2-2. Edite .env file na pasta de 1.<br/>
		PORT=3000             => Port do servidor WEB<br/>
		DB_PORT=5432          => Port do banco de dados<br/>
		DB_HOST=localhost     => Nome do host<br/>
		DB_USER=postgres      => Usuário do banco de dados<br/>
		DB_DATABASE=postgres  => Nome do schema<br/>
		DB_PASSWORD=root      => Senha para o usuário<br/>
  
	2-3. Execute command abaixo na pasta de 1.<br/>
		[dir]> npm install<br/>
		[dir]> node initdb.js<br/>
		[dir]> node index.js<br/>
  
<p/>

3. [Frontend]
	Execute command embaixo na pasta de 1.

  	cd frontend/robbyson<br/>
	* Edite .env no caso necessário.<br/>
	
  	npm install<br/>
  	npm run start
