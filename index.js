let express = require('express');
require('dotenv').config() ;
let app = express() ;
// let bodyParser = require('body-parser')
let db = require('./models') ;
let PORT = process.env.PORT || 3000 ;
let router = require('./routes/index')


app.use(express.urlencoded({ extended:false }));
app.use(express.json());

app.use("/api",router)

db.sequelize.sync()
.then(()=>{
    app.listen(PORT ,()=>{
        console.log(`this app and db listen to PORT:${PORT}`)
    })
});