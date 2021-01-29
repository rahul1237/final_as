// const { ObjectId } = require('mongodb')
const express = require('express')
const bp = require('body-parser')
const http = require('http')
const app = express()
const mongoose = require('mongoose')
const positions = require('./data')
const home_page = require('./pages/home')
const detail_page = require('./pages/details')
const next_page = require('./pages/next')
// const liverreload = require('livereload')
let obj = {}
let obj1




app.use(bp.urlencoded({extended:true}))

app.use(home_page)

// app.

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
// console.log(__dirname);

app.set('views' , './views')
app.set('view engine', 'ejs')

app.use(detail_page)

app.use(next_page)

// app.post('/nextpage',function(req,res){
//     res.sendFile(process.cwd()+'/'+'nextpage.html')
// })


app.listen(5555,function(){
    console.log('server active at 5555');
})

