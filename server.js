const express=require("express");
// const path=require('path')
const app=express();
require('dotenv').config();
const HOST=process.env.HOST || "localhost";
const PORT=process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

if(process.env.NODE_ENV==='production'){
    app.use(express.static('./public/client'))//plik kliencki
}

app.get('/',function(req,res){
    res.send("hello world")
})
//routes
app.use('/post',require('./routes/post'));
app.use('/watek',require('./routes/watek'));
app.use('/uzytkownik',require('./routes/uzytkownik'));
app.use('/kategoria',require('./routes/kategoria'));

app.listen(PORT,console.log(`http://${HOST}:${PORT}/`));
