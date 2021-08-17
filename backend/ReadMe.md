# Billinho API
Teste Full stack. 

# Usage
Para rodar em ambiente local

1. Clone o repositório.
> git clone https://github.com/yt112358/desafio_billinhoAPI.git

2. Edite .env file na pasta de 1.
PORT=3000	=> Port do servidor WEB
DB_PORT=5432	=> Port do banco de dados
DB_HOST=localhost	=> Nome do host
DB_USER=postgres	=> Usuário do banco de dados
DB_DATABASE=postgres	=> Nome do schema
DB_PASSWORD=root	=> Senha para o usuário

3. Execute command abaixo na pasta de 1.
[dir]/desafio_billinhoAPI> npm install
[dir]/desafio_billinhoAPI> node initdb.js
[dir]/desafio_billinhoAPI> node index.js

4. Testes.
[POST]
curl -H "Content-Type: application/json" -d "{ \"name\" : \"name 1\", \"birthdate\" :\"01/01/2000\",  \"cpf\":\"344.535.180-56\", \"payment_method\":\"boleto\" }" http://localhost:3000/student


curl -H "Content-Type: application/json" -d "{ \"amount\" : \"1200000\",\"installments\" :\"3\",\"due_day\":\"5\",\"student_id\":\"1\" }" http://localhost:3000/enrollment

[GET]
http://localhost:3000/student?page=1&count=3
http://localhost:3000/enrollment?page=1&count=3
