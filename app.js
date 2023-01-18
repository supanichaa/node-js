const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app.js');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.get("/",(req,res) =>{
    res.send('hello Nam ggg');
 

})
app.listen(port, ()=>{
    debug("Listening on port" + chalk.green(port));
})