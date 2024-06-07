const express = require("express");
const sequelize = require("./config/db");
const Routes = require("./routes/index.routes");
const cors = require('cors');

const app = express();

app.use(cors());

sequelize.sync().then(() => console.log("Database connected successfully"));

app.use(express.json());

app.use("/api/curriculos", Routes);

app.get("/", (req, res) => {
    res.send("ContrataAI-API");
  });

app.listen(3333, () => {
    console.log("Server up in port 3333");
});
