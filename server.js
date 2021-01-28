// const { ObjectId } = require('mongodb')
const express = require('express')
const bp = require('body-parser')
const http = require('http')
const app = express()
const mongoose = require('mongoose')
const positions = require('./data')
// const liverreload = require('livereload')
let obj = {}
let obj1

app.use(bp.urlencoded({extended:true}))

// app.

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
console.log(__dirname);

app.set('views' , './views')
app.set('view engine', 'ejs')

app.get('/',function(req,res){
    res.sendFile(__dirname+'/'+'index.html')
})

app.post('/',function(req,res){
    res.sendFile(__dirname+'/'+'details.html')
})

app.post('/details',function(req,res){
    const place_of_birth = req.body.place_of_birth
    const url='http://api.openweathermap.org/data/2.5/weather?q=' + place_of_birth + '&appid=ea7a226049f088f392cd6c102bd5f5c0'
    const date_of_birth = req.body.date_of_birth

    http.get(url,function(response){
        response.on('data',function(data){
            const api_data = JSON.parse(data)
            const latitude = api_data.coord.lat
            const longitude = api_data.coord.lon

            if(latitude>=0){
                var degree = Math.abs(Math.floor(latitude))
                var minutes = Math.abs(Math.floor((latitude-degree)*60))
                var lati = 'N ' + degree + '°' + minutes + "'"
            }else{
                var degree = Math.abs(Math.floor(latitude))
                var minutes = Math.abs(Math.floor((latitude-degree)*60))
                var lati = 'S ' + degree + '°' + minutes + "'"
            }

            if(longitude>=0){
                var degree = Math.abs(Math.floor(longitude))
                var minutes = Math.abs(Math.floor((longitude-degree)*60))
                var longi = 'E ' + degree + '°' + minutes + "'"
            }else{
                var degree = Math.abs(Math.floor(longitude))
                var minutes = Math.abs(Math.floor((longitude-degree)*60))
                var longi = 'W ' + degree + '°' + minutes + "'"
            }
            
        
            mongoose.connect('mongodb://localhost/as',{ useNewUrlParser: true },{ useUnifiedTopology: true })
            positions.findOne({DATE:date_of_birth},function(err,positions){
                if(err) console.warn(err)
                // console.log('user:',positions)
               
                console.warn(positions)
                obj=positions

                obj1={
                    ...obj._doc
                }

                res.render('lat_and_lon',{latt:lati , lonn:longi , place:place_of_birth , obj:obj})
                
                // console.log('this is rahulhjkl;' , obj1)
            })
        })
    })
})

app.post('/nextpage',function(req,res){
    res.sendFile(__dirname+'/'+'nextpage.html')
})

app.listen(5555,function(){
    console.log('server active at 5555');
})