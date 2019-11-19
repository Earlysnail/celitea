const PORT = 9000
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next('.', { dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT || 3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:', PORT)
  })
})