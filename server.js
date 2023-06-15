const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('<h1>Development Page 123200169</h1>')
  })
  .listen(PORT, () => console.log('Listening on', PORT))
