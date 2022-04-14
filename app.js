const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

const appRoute = require('./src/routes/route-menu');
app.use('/', appRoute);

app.listen(8080, () =>{
    console.log('server berjalan pada Port :8080');
});