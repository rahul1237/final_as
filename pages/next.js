const express = require('express')
const bp = require('body-parser')
const http = require('http')

const next_page = express.Router()

next_page.post('/nextpage',function(req,res){
    res.sendFile(process.cwd()+'/'+'nextpage.html')
})


module.exports = next_page