const express = require('express');
const morgan = require('morgan');
const app = express()
const cors = require('cors')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api_doc');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(morgan('dev'))
app.use(cors())

app.get('/api/home',(req,res) => res.send('home'))
app.get('/api/books',(req,res) => res.send('books'))
app.delete('/api/books/:id',(req,res) => res.send(`books ${req.params.id}`))
app.get('/api/credits',(req,res) => res.send('credits'))

app.listen(8888)
