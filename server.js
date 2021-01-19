const express=require("express");
// const path=require('path')
const app=express();
require('dotenv').config();
const HOST=process.env.HOST || "localhost";
const PORT=process.env.PORT || 5000;
//db
const db=require('./config/database');
db.authenticate().then(()=>{console.log("db connected")}).catch(err=>console.log("err"+err));
//

app.use(express.json());
app.use(express.urlencoded({extended: false}));

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client.js'))//plik kliencki
}

app.get('/',function(req,res){
    res.send("hello world")
})
//routes
app.use('/test',require('./routes/test'));
app.listen(PORT,console.log(`http://${HOST}:${PORT}/`));
