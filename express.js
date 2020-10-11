const express = require('express')
const app = express()

const port = 8090

app.get('/', (req, res) => res.send("Hello world!!!"))
app.get('/json', (req, res) => res.json({ name: 'Vasya'}))

app.get('/name/:name/:age', (req, res) => {
    console.log(req.params)
    res.send(`Hello ${req.params.name}, ${req.params.age}!!!`)
}
)
app.get('/name/:name/:age/buy/:good', (req, res) => {
    console.log(req.params)
    res.send(`${req.params.good} for ${req.params.name}, ${req.params.age}!!!`)
}
)
app.listen(port, ()=>{
    console.log(`I am listening http://localhost:${port}/`)
})