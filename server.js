'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.use(express.static('/public'));


app.get('/hello', (request, response)=>{
  response.send ('hello from the hello route!');
});

app.listen(PORT, () => console.log('app is up and running'));

