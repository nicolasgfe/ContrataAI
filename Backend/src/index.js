const express = require("express");
const sequelize = require("./config/db");
const Routes = require("./routes/index.routes");
const fileupload = require("express-fileupload");
const cors = require('cors');
var path = require('path');

const app = express();

app.use(cors());

sequelize.sync().then(() => console.log("Database connected successfully"));

app.use(express.json());

app.use("/api/curriculos", Routes);

app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}));

app.listen(3333, () => {
    console.log("Server up in port 3333");
});
