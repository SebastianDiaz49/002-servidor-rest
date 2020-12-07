require('./config/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.get('/', function (req, res) {
    res.send('<h1>Bienvenido a mi servidor REST (localhost)</h1>');
  });

app.use(require('./routes/usuario'));
app.use(require('./routes/categoria'));
app.use(require('./routes/login'));
app.use(require('./routes/productos'));

mongoose.connect('mongodb+srv://admin:123456789zZ@cluster0.rociy.mongodb.net/cafeteria',{

  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true 

}, (err, res ) =>  {
    if(err) throw err;
    console.log('Base de datos ONLINE');
});
  
app.listen(process.env.PORT, () => {
    console.log('El servidor esta en linea por el puerto ', process.env.PORT);
});