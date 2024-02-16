const express = require('express');
const app = express();
const port = 3000;


app.get('/home', (req, res) => {
  res.send('Olá Mundo')
  console.log('Consegui!!')
});


app.listen(port,() =>{
  console.log(`Estou na porta ${port}`)
});
