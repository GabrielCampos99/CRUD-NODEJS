import express from 'express'
import bodyParser from 'body-parser'
import usersRouter from './routes/users.js'

const app = express()

const PORT = 5000;

app.use(bodyParser.json())

app.use('/users', usersRouter)

app.get('/', (req,res)=>{
    res.send('Esta mensagem esta sendo enviar via res.send 🍳')
})

app.listen(PORT, ()=> console.log(`Servidor Rodando na porta http://localhost:${PORT}`))



