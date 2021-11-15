import express from 'express';

//@types/express
const app = express();



app.get("/testes", (request, response) => {
    // request => informações entrando
    // response => informação saindo


    return response.send("Olá NLW5")
});

app.post('/testes-post', (request, response) => {

    return response.send("Olá Post NLW5");
});

//http://localhost:3000 
app.listen(3000, () => console.log('Servidor executando'));