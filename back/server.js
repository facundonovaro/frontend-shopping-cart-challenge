const express = require("express");
const app = express();
const db = require("./config/db");
const path = require("path");
const morgan = require("morgan");
const router = require("./routes/index");

app.use(express.static(path.join(__dirname, "/public")));

app.use(morgan("dev"));

//Body Parser
app.use(express.json());
app.use(express.urlencoded());

app.use("/api", router);

//VIEW
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//ERROR MIDDLEWARE
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

//SERVER
db.sync({ force: false })
  .then(() => {
    console.log("Conectado a la base de datos");
    app.listen(1337, console.log("Escuchando el puerto 1337"));
  })
  .catch((err) => console.log(err));

module.exports = app;
