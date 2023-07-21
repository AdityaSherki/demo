const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    const code = 200;
    return res.send('Hello World! ' + code);
});

baseRouter.post('/add', (req, res) => {
    const num1 = Number(req.body.first);
    const num2 = Number(req.body.second);
    const result = num1 + num2;
    res.json({ "result": result });
});


baseRouter.post('/subtract', (req, res) => {
    res.json({ "": null });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});