const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('../backend/src/routes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://admin:admin@crud.qyjkidv.mongodb.net/?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
},function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Connected to database 🚀');
    }
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port,function (){
  console.log(`Server started on port ${port}`);
});