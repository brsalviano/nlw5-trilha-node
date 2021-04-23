import express from "express"
import { createServer } from "http"
import { Server, Socket } from "socket.io"
import path from "path"

import "./database" //importa ./database/index.ts
import { routes } from "./routes"

const app = express()

app.use(express.static(path.join(__dirname, "..", "public")))
app.set("views", path.join(__dirname, "..", "public"))
app.engine("html", require("ejs").renderFile) //não se esqueça de instalar o ejs: npm i ejs
app.set("view engine", "html")

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html")
})

app.get("/pages/admin", (request, response) => {
    return response.render("html/admin.html")
})

const http = createServer(app) //criando o protocolo http
const io = new Server(http) //criando protocolo ws

io.on("connection", (socket: Socket) => {
    console.log("Se conectou", socket.id)
})

app.use(express.json())

app.use(routes)

export { http, io }