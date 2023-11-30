const db = require("./db.json")

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const PORT = 3001;

server.use(middlewares)
server.use((req, res) => {
  if(req.url.includes("?")) {
    const newUrl = req.url.split("?")[0]
    const key = newUrl?.replace("/", "")
    const data = db[key]

    return res.json(data)
  }

  const key = req.url?.replace("/", "")
  const data = db[key]

  return res.json(data)
})
server.use(router)

server.listen(PORT, () => {
  console.log('JSON Server is running in PORT ' + PORT)
})