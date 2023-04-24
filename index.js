const express = require('express')

const app = express()
const port = 3000

const router = require('./routes/index')



app.use(express.json())
app.use('/barang', router)

app.get('/', (req, res) => {
    res.json({ massage: "hello ini response menggunakan json"})
    // res.send('hello ini express ni guys bukan kaleng-kaleng wkwkwkkwkwk')
})





app.get('/about', (req, res) => {
    res.send('<h1>ini about menggunakan heading html</h1>')
})

app.get('/users/:id', (req, res) => {
    res.send(`ini merupakan users dengan id ${req.params.id}`)
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})