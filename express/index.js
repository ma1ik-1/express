const express = require("express");
const app = express();
const catRoutes = require('./routes/cats.js');
const mongoose = require("./db")

app.use(express.json());

app.use("/cats", catRoutes);

const logger = (req, res, next) => {
    console.log("host:", req.hostname);
    console.log("method:", req.method);
    console.log("path:", req.path);
    next();
};
app.use(logger);

app.use((err, req, res, next) => {
    res.status(err.status).send(err.msg)
});

const server = app.listen(4494, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});

