const express = require('express')
const bp = require('body-parser')
const app = express()
const home_page = require('./pages/home')
const detail_page = require('./pages/details')
const lati_and_longi_page = require('./pages/lati_and_longi')
const next_page = require('./pages/nextpage')

app.use(bp.urlencoded({extended:true}))

app.use(home_page)

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use(detail_page)

app.set('views' , './views')
app.set('view engine', 'ejs')

app.use(lati_and_longi_page)
app.use(next_page)


app.listen(5555,function(){
    console.log('server active at 5555');
})

