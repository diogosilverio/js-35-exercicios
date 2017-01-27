const app = require("./custom-express.js");
const http = require("http").Server(app);
const io = require("socket.io")(http);

http.listen(3000, () => console.log("Servidor http/websocket de pe"));

app.set("io", io);