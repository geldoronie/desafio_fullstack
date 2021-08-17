const readline = require('readline');
require("dotenv").config();
const pool = require('./db/pool');
const EventEmitter = require('events');
const emitter = new EventEmitter();

console.log("DB Host: " + process.env.DB_HOST);
console.log("Nome do Database: " + process.env.DB_DATABASE);
console.log("DB Port: " + process.env.DB_PORT);
console.log("DB Usuário: " + process.env.DB_USER);
console.log("DB Senha: " + process.env.DB_PASSWORD);
console.log("\nPermite Drop e Create Table dentro de dabase [" + process.env.DB_DATABASE + "] com essa configuração ?");
console.log("Sim / Não: [Sim]");

const rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function(line) {
    let response = true;
    if(line === "" || line === "Sim") {
        response = true;

        const createTables = 
            "DROP TABLE if exists task;"
            + "CREATE TABLE task"
            + " (_id SERIAL PRIMARY KEY, "
            + " description TEXT, "
            + " duedate date, "
            + " done boolean, "
            + " hide boolean );"
        ;

        pool.query(createTables, function (err, result) {
            if(err) {
                console.log(err);
                process.exit(-1);
            }
            emitter.emit("done");
        });
    } else {
        response = false;
        console.log("Edite .env para configurar.");
        process.exit(0);
    }
    //process.exit(0)
});

emitter.on("done", function () {
    console.log("Tables foram criadas.");
    process.exit(0);
});