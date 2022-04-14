const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

const appMenu = require('./src/routes/route-menu');
const appPromo = require('./src/routes/route-promo');
app.use('/', [appMenu,appPromo]);

app.listen(8080, () =>{
    console.log('server berjalan pada Port :8080');
});