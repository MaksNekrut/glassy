const express = require("express");
const path = require("path");
const chalk = require("chalk");

const app = express();
const PORT =  8888;

const index = path.join(__dirname);
const regForm = path.join(__dirname, "/public");


app.use(express.static(index));
app.use(express.static(regForm));


app.listen(PORT || 3000, () => {
    console.log(chalk.whiteBright.bgGreenBright(`Server running on ${PORT} port, success!`));
})