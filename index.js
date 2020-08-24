const http = require('http')

// Only port 1337 is exposed to the browser on the right
const port = process.env.PUBLIC_PORT || 1337

const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/plain')
	res.end('Hello from codedamn!')
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`)
})
