const http = require('http')

// NOTE: YOU HAVE TO RUN THE SERVER ON THIS PORT ONLY. OTHERWISE THE OUTPUT ON RIGHT WILL NOT WORK
const port = process.env.PUBLIC_PORT

const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/plain')
	res.end('Hello from codedamn!')
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`)
})
