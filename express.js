const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8090

var imgdata = [
    0x47,0x49, 0x46,0x38, 0x39,0x61, 0x01,0x00, 0x01,0x00, 0x80,0x00, 0x00,0xFF, 0xFF,0xFF,
    0x00,0x00, 0x00,0x21, 0xf9,0x04, 0x04,0x00, 0x00,0x00, 0x00,0x2c, 0x00,0x00, 0x00,0x00,
    0x01,0x00, 0x01,0x00, 0x00,0x02, 0x02,0x44, 0x01,0x00, 0x3b
  ]
  var imgbuf = Buffer.from(imgdata)

app.use((req, res, next) => {
    console.log(`${new Date()}: ${req.url} ${req.method}`)
    next()
})
app.use(express.static('public'))


app.use(bodyParser.json({ limit: '5mb' }))

app.post('/', (req, res) => res.send(req.body))

app.get('/', (req, res) => res.send("Hello world!!!"))
app.get('/json', (req, res) => res.json({ name: 'Vasya'}))
// sending pixel onto users email
app.get('/name/:userId/:test.gif', (req, res) => {
    console.log(`${req.params.userId} have seen email`)
// logic reactions on to opening email
    res.writeHead(200,{
        'Content-Type': 'image/gif',
        'Content-Length': imgdata.length,
      })
      res.end(imgbuf)
    })

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