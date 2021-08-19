# Overview

Teste Full stack.

# Usage
Para rodar em ambiente local:

* PostgreSQL precisa ser instalado.

# [Backend]
1. Clone o repositório.<br/>
	[dir]> git clone https://github.com/yt112358/desafio_fullstack.git

2. Vai para a pasta backend: <br/>
  cd backend
  
3. Edite .env file na pasta de 1.<br/>
	PORT=3000             => Port do servidor WEB<br/>
	DB_PORT=5432          => Port do banco de dados<br/>
	DB_HOST=localhost     => Nome do host<br/>
	DB_USER=postgres      => Usuário do banco de dados<br/>
	DB_DATABASE=postgres  => Nome do schema<br/>
	DB_PASSWORD=root      => Senha para o usuário<br/>
  
4. Execute command abaixo na pasta de 1.<br/>
	[dir]> npm install<br/>
	[dir]> node initdb.js<br/>
	[dir]> node index.js<br/>
  
<p/>

# [Frontend]
1. Clone este repository
3. Execute command embaixo na pasta de 1.

  	cd frontend/robbyson<br/>
	* Edite .env no caso necessário.
  	npm install<br/>
  	npm run start
