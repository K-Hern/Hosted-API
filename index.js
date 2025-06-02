const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json()); // Necessary to parse the body as json

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("This is a test of changes to the server world!");
});
