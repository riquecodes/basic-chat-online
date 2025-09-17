const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
  res.render("index");
});

let clients = new Map(); 
let messages = [];

wss.on("connection", (ws) => {
  console.log("Novo cliente conectado");

  if (messages.length > 0) {
    ws.send(JSON.stringify({ type: "history", data: messages }));
  }

  ws.on("message", (msg) => {
    const parsed = JSON.parse(msg);

    if (parsed.type === "join") {
      clients.set(ws, parsed.user);
      broadcast({
        type: "notification",
        text: `${parsed.user} entrou no chat 🚀`,
      });
      return;
    }

    if (parsed.type === "message") {
      const user = clients.get(ws);
      const newMessage = { user, text: parsed.text };

      messages.push(newMessage);
      if (messages.length > 20) messages.shift();

      broadcast({ type: "message", ...newMessage });
    }
  });

  ws.on("close", () => {
    const user = clients.get(ws);
    if (user) {
      broadcast({
        type: "notification",
        text: `${user} saiu do chat ❌`,
      });
      clients.delete(ws);
    }
  });
});

function broadcast(data) {
  const msg = JSON.stringify(data);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(msg);
    }
  });
}

const PORT = process.env.PORT || 4000;
server.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);