let http = require('http')

http.createServer((req, res) => {
    if (req.url === '/start') {
        res.write("Start\n")
    }
    if (req.url === "/404") {
        res.statusCode = 404
          res.end()
    } else {
    res.write('Hello World!')
    res.end()
    }
}).listen(8080)