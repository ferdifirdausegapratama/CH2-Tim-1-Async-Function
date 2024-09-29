const http = require("http");
const url = require("url");
const fs = require("fs");
const functionTim1 = require('./function.js');
const aqsaFunction = require('./Aqsa.js');
const rizalFunction = require('./rizal.js')
const ferdiFunction = require('./ferdi.js');
const file = './index.txt';

const server = http.createServer((req, res) => {
    const pathUrl = req.url;

    if (pathUrl === "/") {
        res.end("Tim 1 Async Function");
    } else if (pathUrl === "/read") {
        async function result() {
            try {
                const readFile = await functionTim1.readFile(file);
                res.end(`isi index.txt = ${readFile}`);
            } catch (error) {
                console.log(error)
                res.end(error)
            }
        }
        result()
    } else if (pathUrl === "/write") {
        functionTim1.writeFile(file)
        res.end('index.txt sudah di rewrite');
    } else if (pathUrl === "/aqsa") {
        async function aqsaRewrite() {
            try {
                const result = await aqsaFunction.rewrite(file);
                res.end(result);
            } catch (error) {
                console.log(error);
                res.end(error);
            }
        }
        aqsaRewrite();
    } else if (pathUrl === "/rizal") {
        async function rizalRewrite() {
            try {
                const result = await rizalFunction.rewrite(file);
                res.end(result);
            } catch (error) {
                console.log(error);
            }
        }
        rizalRewrite();
    } else if (pathUrl === "/ferdi") {  
        async function ferdiRewrite() {
            try {
                const result = await ferdiFunction.rewrite(file); 
                res.end(result);
            } catch (error) {
                console.error("Error in Ferdi rewrite:", error);
                res.statusCode = 500;
                res.end("Error in Ferdi rewrite.");
            }
        }
        ferdiRewrite();
    } else {
        res.end("404");
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Aplikasi ini berjalan di port 3000');
})
