const express = require('express')

let obj = {}
let obj1

const detail_page = express.Router()


detail_page.post('/',function(req,res){
    res.sendFile(process.cwd()+'/'+'details.html')
})


module.exports = detail_page