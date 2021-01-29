const express = require('express')
const bp = require('body-parser')
const http = require('http')

const home_page = express.Router()

home_page.get('/',function(req,res){
    res.sendFile(process.cwd()+'/'+'index.html')
})

module.exports = home_page