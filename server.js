const express = require('express')
const bp = require('body-parser')
const http = require('http')

const app = express()

app.use(bp.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/'+'index.html')
})

app.post('/',function(req,res){
    res.sendFile(__dirname+'/'+'details.html')
})

app.listen(5555,function(){
    console.log('server active at 5555');
})