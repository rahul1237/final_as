const express = require('express')
const bp = require('body-parser')
const http = require('http')

const app = express()

app.use(bp.urlencoded({extended:true}))

app.set('view engine', 'ejs')

app.get('/',function(req,res){
    res.sendFile(__dirname+'/'+'index.html')
})

app.post('/',function(req,res){
    res.sendFile(__dirname+'/'+'details.html')
})

app.post('/details',function(req,res){
    const place_of_birth = req.body.place_of_birth
    // const api_id = 'ea7a226049f088f392cd6c102bd5f5c0'
    const url='http://api.openweathermap.org/data/2.5/weather?q=' + place_of_birth + '&appid=ea7a226049f088f392cd6c102bd5f5c0'

    http.get(url,function(response){
        response.on('data',function(data){
            const api_data = JSON.parse(data)
            const latitude = api_data.coord.lat
            const longitude = api_data.coord.lon

            if(latitude>=0){
                var degree = Math.floor(latitude)
                var minutes = Math.floor((latitude-degree)*60)
                var lati = 'N ' + degree + '°' + minutes + "'"
            }else{
                var degree = Math.floor(latitude)
                var minutes = Math.floor((latitude-degree)*60)
                var lati = 'S ' + degree + '°' + minutes + "'"
            }

            if(longitude>=0){
                var degree = Math.floor(longitude)
                var minutes = Math.floor((longitude-degree)*60)
                var longi = 'E ' + degree + '°' + minutes + "'"
            }else{
                var degree = Math.floor(longitude)
                var minutes = Math.floor((longitude-degree)*60)
                var longi = 'W ' + degree + '°' + minutes + "'"
            }
            res.render('lat_and_lon',{latt:lati , lonn:longi , place:place_of_birth})
        })
    })
})

app.listen(5555,function(){
    console.log('server active at 5555');
})