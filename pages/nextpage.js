const express = require('express')
const bp = require('body-parser')
const http = require('http')
const next_page = express.Router()
const lati_and_longi_page = require('./lati_and_longi')

next_page.post('/nextpage',function(req,res){
    res.sendFile(process.cwd()+'/'+'nextpage.html')
})


x = lati_and_longi_page.obj

console.log(x);

module.exports = next_page
