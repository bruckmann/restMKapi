const express = require('express');
const routes = require('./src/routes');
const app = express();

app.use(express.json());

app.use(routes);

app.listen(2222 , () => {
    console.log('funcionando')
} )


